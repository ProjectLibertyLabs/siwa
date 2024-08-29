import { isArray } from '@polkadot/util';
// import * as vc from '@digitalbazaar/vc';
// import { cryptosuite } from '@digitalbazaar/eddsa-rdfc-2022-cryptosuite';
import { SiwaResponse } from './types/response.js';
import { isObj } from './types/general.js';
import {
  isCredentialEmail,
  isCredentialGraph,
  isCredentialPhone,
  SiwaResponseCredential,
  SiwaResponseCredentialGraph,
} from './types/credential.js';
import { isValidX25519PrivateKey } from './x25519.js';

let cachedValidDids = new Map<string, string>();
let cacheDate = Date.now();
// Expire the cache after 24 hours
const CACHE_EXPIRES_MS = 1000 * 60 * 60 * 24;

async function extractDidWeb(method: string, issuer: string, trustDids: string[]): Promise<string> {
  const [did, key] = method.split('#');
  if (!did || !key) {
    throw new Error(`Missing DID Key: ${method}`);
  }

  if (did !== issuer) {
    throw new Error(`Issuer (${issuer}) and method (${method}) mismatched!`);
  }

  // Trusted DID?
  if (trustDids.includes(did)) {
    cachedValidDids.set(method, key);
    return key;
  }

  const url = new URL(did.replace(/^did:web:/, 'https://'));
  if (url.pathname === '') {
    url.pathname = '/.well-known/did.json';
  }
  const docResponse = await fetch(url);
  if (!docResponse.ok) {
    throw new Error(`Unable to resolve DID: ${method} with ${url.toString()}`);
  }
  const didDoc = await docResponse.json();
  if (!isObj(didDoc)) {
    throw new Error(`Invalid response from ${url.toString()}`);
  }
  if (didDoc.id !== did) {
    throw new Error(`Issuer (${issuer}) and Response Id (${didDoc.id}) mismatched!`);
  }
  if (isArray(didDoc.assertionMethod) && didDoc.assertionMethod.find((x) => isObj(x) && x.id === method)) {
    return key;
  }
  throw new Error(`Unable to find matching key in DID Document listed verification methods: ${JSON.stringify(didDoc)}`);
}

// This is a simplified method that would only work due to assumptions in Frequency Access, but it works for the limited use case of this library which is Frequency Access
// NOTICE: It does NOT support the `trust` extensions
// NOTICE: This does NOT currently validate the credentialSchema, it validates the structure instead trusting that Frequency Access doesn't change things
async function getVerificationMethodKey(method: string, issuer: string, trustDids: string[]): Promise<string> {
  // Handle the cache case
  if (cacheDate + CACHE_EXPIRES_MS > Date.now()) {
    cacheDate = Date.now();
    cachedValidDids = new Map();
  }
  const cachedValue = cachedValidDids.get(method);
  if (cachedValue) {
    return cachedValue;
  }

  if (method.startsWith('did:web:')) {
    const webKey = await extractDidWeb(method, issuer, trustDids);
    if (webKey) {
      cachedValidDids.set(method, webKey);
      return webKey;
    }
  }

  if (method.startsWith('did:key:')) {
    if (method !== issuer) {
      throw new Error(`Issuer (${issuer}) and method (${method}) mismatched!`);
    }
    const key = method.replace(/^did:key:/, '');
    cachedValidDids.set(method, key);
    return key;
  }
  throw new Error(`Unable to handle unknown verification method: ${method}`);
}

async function validateGraph(credential: SiwaResponseCredentialGraph): Promise<void> {
  // Make sure that the key is good.
  if (
    !isValidX25519PrivateKey(
      credential.credentialSubject.encodedPrivateKeyValue,
      credential.credentialSubject.encodedPublicKeyValue
    )
  ) {
    throw new Error(`VerifiedGraphKeyCredential: Invalid KeyPair`);
  }
}

export async function validateGeneralCredential(
  credential: SiwaResponseCredential,
  trustDids: string[]
): Promise<void> {
  // Make sure we can validate
  if (
    credential.proof.proofPurpose !== 'assertionMethod' ||
    !['eddsa-rdfc-2022'].includes(credential.proof.cryptosuite)
  ) {
    throw new Error(`Unknown Credential Proof Verification: ${JSON.stringify(credential.proof)}`);
  }

  // Check credential expiration/validity
  if (credential.proof.validUntil && Date.parse(credential.proof.validUntil) < Date.now()) {
    throw new Error(`Credential Expired: ${credential.proof.validUntil}`);
  }
  if (credential.proof.expirationDate && Date.parse(credential.proof.expirationDate) < Date.now()) {
    throw new Error(`Credential Expired: ${credential.proof.expirationDate}`);
  }

  // Get the key for verification
  const _key = await getVerificationMethodKey(credential.proof.verificationMethod, credential.issuer, trustDids);

  // const vcTest = await vc.verifyCredential({
  //   credential,
  //   documentLoader: () => key,
  // });

  // if (!vcTest.valid) {
  //   throw new Error(`Unable to validate credential: ${JSON.stringify(vcTest)}`);
  // }
}

export async function validateCredential(credential: SiwaResponseCredential, trustDids: string[]): Promise<void> {
  switch (true) {
    case isCredentialEmail(credential):
      await validateGeneralCredential(credential, trustDids);
      break;
    case isCredentialPhone(credential):
      await validateGeneralCredential(credential, trustDids);
      break;
    case isCredentialGraph(credential):
      await validateGraph(credential);
      break;
  }
}

export async function validateCredentials(
  credentials: SiwaResponse['credentials'],
  trustDids: string[]
): Promise<void> {
  // Only validate if there are any
  if (!credentials) return;

  for (const credential of credentials) {
    // Throws on error
    await validateCredential(credential, trustDids);
  }
}
