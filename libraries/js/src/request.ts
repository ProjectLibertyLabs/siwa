import { Keyring } from '@polkadot/keyring';
import { encodeAddress } from '@polkadot/keyring';
import { u8aToHex } from '@polkadot/util';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import {
  SiwaCredentialRequest,
  SiwaSignedRequest,
  isSiwaCredentialsRequest,
  isSiwaSignedRequest,
} from './types/request.js';
import { serializeLoginPayloadHex } from './util.js';
import { VerifiedEmailAddress, VerifiedGraphKey, VerifiedPhoneNumber } from './credentials.js';
import { stringFromBase64URL, stringToBase64URL } from './base64url.js';

const keyring = new Keyring({ type: 'sr25519' });

/**
 * Request for a verified email address
 */
export const VerifiedEmailAddressCredential = VerifiedEmailAddress.credential;

/**
 * Request for a verified SMS/Phone Number
 */
export const VerifiedPhoneNumberCredential = VerifiedPhoneNumber.credential;

/**
 * Request for a the private graph encryption key
 */
export const VerifiedGraphKeyCredential = VerifiedGraphKey.credential;

/**
 * Generates the signed payload for the authentication flow with Frequency Access.
 *
 * @param {string} providerKeyUri - The URI of a key, usually a seed phrase, but may also include test accounts such as `//Alice` or `//Bob`.
 * @param {string} callbackUri - The URI that the user should return to after authenticating with Frequency Access.
 * @param {number[]} permissions - The list of Frequency Schemas IDs that you are requesting the user to delegate. For more details, see [Frequency Schemas Delegations](https://projectlibertylabs.github.io/siwa/Delegations.html).
 * @param {SiwaCredentialRequest[]} credentials - (Optional) List of credentials, either via their full structure. For more details, see [Credentials Reference](https://projectlibertylabs.github.io/siwa/Credentials.html).
 *
 * @returns {Promise<string>} The generated redirect URL that can be used for authentication with Frequency Access.
 */
export async function generateSignedPayload(
  providerKeyUri: string,
  callbackUri: string,
  permissions: number[],
  credentials: SiwaCredentialRequest[] = []
): Promise<SiwaSignedRequest> {
  await cryptoWaitReady();
  const keyPair = keyring.createFromUri(providerKeyUri);

  const payload = {
    callback: callbackUri,
    permissions,
  };

  if (!isSiwaCredentialsRequest(credentials)) {
    console.error('credentials', credentials);
    throw new Error('Invalid Credentials Request');
  }
  const requestedCredentials = credentials;

  const signature = keyPair.sign(serializeLoginPayloadHex(payload), {});

  return {
    requestedSignatures: {
      publicKey: {
        // TODO: Should this always be encoded as mainnet 90 or check if mainnet?
        encodedValue: encodeAddress(keyPair.publicKey, 90),
        encoding: 'base58',
        format: 'ss58',
        type: 'Sr25519',
      },
      signature: {
        algo: 'Sr25519',
        encoding: 'base16',
        encodedValue: u8aToHex(signature),
      },
      payload,
    },
    requestedCredentials,
  };
}

/**
 * Generates the encoded signed payload for the authentication flow with Frequency Access.
 *
 * @param {string} providerKeyUri - The URI of a key, usually a seed phrase, but may also include test accounts such as `//Alice` or `//Bob`.
 * @param {string} callbackUri - The URI that the user should return to after authenticating with Frequency Access.
 * @param {number[]} permissions - The list of Frequency Schemas IDs that you are requesting the user to delegate. For more details, see [Frequency Schemas Delegations](https://projectlibertylabs.github.io/siwa/Delegations.html).
 * @param {SiwaCredentialRequest[]} credentials - (Optional) List of credentials, either via their full structure. For more details, see [Credentials Reference](https://projectlibertylabs.github.io/siwa/Credentials.html).
 *
 * @returns {Promise<string>} The generated base64url encoded signed payload that can be that can be used for authentication with Frequency Access.
 */
export async function generateEncodedSignedPayload(
  providerKeyUri: string,
  callbackUri: string,
  permissions: number[],
  credentials: SiwaCredentialRequest[] = []
): Promise<string> {
  const signedRequest = await generateSignedPayload(providerKeyUri, callbackUri, permissions, credentials);
  return encodeSignedRequest(signedRequest);
}

/**
 * Encodes a signed payload for the authentication flow with Frequency Access.
 *
 * @param {SiwaSignedRequest} signedRequest - A signed request.
 *
 * @returns {string} The generated base64url encoded signed payload that can be that can be used for authentication with Frequency Access.
 */
export function encodeSignedRequest(signedRequest: SiwaSignedRequest): string {
  const serialized = JSON.stringify(signedRequest);
  return stringToBase64URL(serialized);
}

/**
 * Decodes a signed payload for the authentication flow with Frequency Access.
 *
 * @param {string} encodedSignedRequest - A signed request.
 *
 * @returns {SiwaSignedRequest} The generated base64url encoded signed payload that can be that can be used for authentication with Frequency Access.
 */
export function decodeSignedRequest(encodedSignedRequest: string): SiwaSignedRequest {
  const serialized = stringFromBase64URL(encodedSignedRequest);
  const signedRequest = JSON.parse(serialized);
  if (isSiwaSignedRequest(signedRequest)) return signedRequest;
  throw new Error('Unable to validate the contents of the encoded signed request as a valid signed request');
}
