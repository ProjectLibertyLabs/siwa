import { DataIntegrityProof } from '@digitalbazaar/data-integrity';
import { cryptosuite as eddsaRdfc2022CryptoSuite } from '@digitalbazaar/eddsa-rdfc-2022-cryptosuite';
import jsigs from 'jsonld-signatures';
const {
  purposes: { AssertionProofPurpose },
} = jsigs;

import { SiwaResponseCredential } from '../types/credential.js';
import { ExampleProviderKey, ExampleUserKey } from './index.js';
import { documentLoader } from './documentLoader.js';

export async function signCredentialAsAccess(
  subject: SiwaResponseCredential['credentialSubject']
): Promise<SiwaResponseCredential> {
  const providerKey = ExampleProviderKey.keyPairEd();

  const signer = {
    id: `did:web:frequencyaccess.com#${ExampleProviderKey.multicodecEd}`,
    algorithm: 'Ed25519',
    sign: providerKey.sign,
  };
  const suite = new DataIntegrityProof({ signer, cryptosuite: eddsaRdfc2022CryptoSuite });

  // const keyPair = await Ed25519Multikey.from({
  //   '@context': 'https://w3id.org/security/multikey/v1',
  //   type: 'Multikey',
  //   controller,
  //   id: controller + '#z6MkwXG2WjeQnNxSoynSGYU8V9j3QzP3JSqhdmkHc6SaVWoT',
  //   publicKeyMultibase: 'z6MkwXG2WjeQnNxSoynSGYU8V9j3QzP3JSqhdmkHc6SaVWoT',
  //   secretKeyMultibase: 'zrv3rbPamVDGvrm7LkYPLWYJ35P9audujKKsWn3x29EUiGwwhdZQd',
  // });

  const signedCredential = await jsigs.sign(subject, {
    suite,
    purpose: new AssertionProofPurpose(),
    documentLoader,
  });

  return signedCredential as SiwaResponseCredential;
}

// Generate a new pair:
// const { publicKey, secretKey } = box.keyPair();
// console.log({
//   publicKey: u8aToHex(publicKey),
//   secretKey: u8aToHex(secretKey),
// });
const exampleX25519 = {
  publicKey: '0xb5032900293f1c9e5822fd9c120b253cb4a4dfe94c214e688e01f32db9eedf17',
  secretKey: '0xd0910c853563723253c4ed105c08614fc8aaaf1b0871375520d72251496e8d87',
};

export const ExampleUserGraphCredential = (): SiwaResponseCredential => ({
  '@context': ['https://www.w3.org/ns/credentials/v2', 'https://www.w3.org/ns/credentials/undefined-terms/v2'],
  type: ['VerifiedGraphKeyCredential', 'VerifiableCredential'],
  issuer: 'did:key:' + ExampleUserKey.multicodecEd,
  validFrom: '2024-08-21T21:28:08.289+0000',
  credentialSchema: {
    type: 'JsonSchema',
    id: 'https://some.permanent.url/schema/private_key.json',
  },
  credentialSubject: {
    id: 'did:key:' + ExampleUserKey.multicodecEd,
    encodedPublicKeyValue: exampleX25519.publicKey,
    encodedPrivateKeyValue: exampleX25519.secretKey,
    encoding: 'base16',
    format: 'bare',
    type: 'X25519',
    keyType: 'dsnp.public-key-key-agreement',
  },
  proof: {
    type: 'DataIntegrityProof',
    created: '2024-02-12T03:09:44.000+0000',
    verificationMethod: 'did:key:z6QNzHod3tSSJbwo4e5xGDcnsndsR9WByZzPoCGdbv3sv1jJ',
    cryptosuite: 'eddsa-rdfc-2022',
    proofPurpose: 'assertionMethod',
    proofValue: 'z2YLydotgaGsbRGRxPzmoscd7dH5CgGHydXLKXJXefcT2SJGExtxmkJxGfUGoe81Vm62JGEYrwcS6ht1ixEvuZF9c',
  },
});

export const ExampleEmailCredential = (): SiwaResponseCredential => ({
  '@context': ['https://www.w3.org/ns/credentials/v2', 'https://www.w3.org/ns/credentials/undefined-terms/v2'],
  type: ['VerifiedEmailAddressCredential', 'VerifiableCredential'],
  issuer: 'did:web:frequencyaccess.com',
  validFrom: '2024-08-21T21:28:08.289+0000',
  credentialSchema: {
    type: 'JsonSchema',
    id: 'https://some.permanent.url/schema/email_address.json',
  },
  credentialSubject: {
    id: 'did:key:' + ExampleUserKey.multicodecEd,
    emailAddress: 'john.doe@example.com',
    lastVerified: '2024-08-21T21:27:59.309+0000',
  },
  proof: {
    type: 'DataIntegrityProof',
    created: '2024-02-12T03:09:44.000+0000',
    verificationMethod: 'did:web:frequencyaccess.com#' + ExampleProviderKey.multicodecEd,
    cryptosuite: 'eddsa-rdfc-2022',
    proofPurpose: 'assertionMethod',
    proofValue: 'z2YLydotgaGsbRGRxPzmoscd7dH5CgGHydXLKXJXefcT2SJGExtxmkJxGfUGoe81Vm62JGEYrwcS6ht1ixEvuZF9c',
  },
});

export const ExamplePhoneCredential = (): SiwaResponseCredential => ({
  '@context': ['https://www.w3.org/ns/credentials/v2', 'https://www.w3.org/ns/credentials/undefined-terms/v2'],
  type: ['VerifiedPhoneNumberCredential', 'VerifiableCredential'],
  issuer: 'did:web:frequencyaccess.com',
  validFrom: '2024-08-21T21:28:08.289+0000',
  credentialSchema: {
    type: 'JsonSchema',
    id: 'https://some.permanent.url/schema/phone_number.json',
  },
  credentialSubject: {
    id: 'did:key:' + ExampleUserKey.multicodecEd,
    phoneNumber: '+01-234-867-5309',
    lastVerified: '2024-08-21T21:27:59.309+0000',
  },
  proof: {
    type: 'DataIntegrityProof',
    created: '2024-02-12T03:09:44.000+0000',
    verificationMethod: 'did:web:frequencyaccess.com#' + ExampleProviderKey.multicodecEd,
    cryptosuite: 'eddsa-rdfc-2022',
    proofPurpose: 'assertionMethod',
    proofValue: 'z2YLydotgaGsbRGRxPzmoscd7dH5CgGHydXLKXJXefcT2SJGExtxmkJxGfUGoe81Vm62JGEYrwcS6ht1ixEvuZF9c',
  },
});
