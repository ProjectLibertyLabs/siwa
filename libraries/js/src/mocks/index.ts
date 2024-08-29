import { Keyring } from '@polkadot/keyring';
import { SiwaResponse, SiwaUserPublicKey } from '../types/response.js';
import {
  ExamplePayloadClaimHandle,
  ExamplePayloadCreateSponsoredAccount,
  ExamplePayloadGrantDelegation,
  ExamplePayloadLoginStatic,
  ExamplePayloadPublicGraphKey,
} from './payloads.js';
import { ExampleEmailCredential, ExampleUserGraphCredential } from './credentials.js';

const keyring = new Keyring({ type: 'sr25519' });
const keyringEd25519 = new Keyring({ type: 'ed25519' });

// Provider/Application. All derived from //Alice
export const ExampleProviderKey = {
  uri: '//Alice',
  public: 'f6cL4wq1HUNx11TcvdABNf9UNXXoyH47mVUwT59tzSFRW8yDH',
  public42: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
  multicodec: 'z6QNzHod3tSSJbwo4e5xGDcnsndsR9WByZzPoCGdbv3sv1jJ',
  multicodecEd: 'z6Mkp4EivHMs3Bs32XrpHvtQEvsY9v2QWq5sEfsMnxLjVCRm',
  hex: '0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d',
  keyPair: () => keyring.createFromUri('//Alice'),
  keyPairEd: () => keyringEd25519.createFromUri('//Alice'),
};
// User. All derived from //Bob
export const ExampleUserKey = {
  uri: '//Bob',
  public: 'f6akufkq9Lex6rT8RCEDRuoZQRgo5pWiRzeo81nmKNGWGNJdJ',
  public42: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
  multicodec: 'z6QNucQV4AF1XMQV4kngbmnBHwYa6mVswPEGrkFrUayhttT1',
  multicodecEd: 'z6Mktjdrv1ZHpSQM2RA5xNj1pmxqUJ2iZ1qzB7t8vHQuWKi4',
  hex: '0x8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48',
  keyPair: () => keyring.createFromUri('//Bob'),
  keyPairEd: () => keyringEd25519.createFromUri('//Bob'),
};

export const ExampleUserPublicKey: SiwaUserPublicKey = {
  encodedValue: ExampleUserKey.public,
  encoding: 'base58',
  format: 'ss58',
  type: 'Sr25519',
};

// NOTICE: These mocks ALSO generate the `docs/DataStructure/[].md` files. Take care changing them

export const ExampleFrequencyAccessDidDocument = {
  '@context': ['https://www.w3.org/ns/did/v1'],
  id: 'did:web:frequencyaccess.com',
  assertionMethod: [
    {
      '@context': 'https://w3id.org/security/multikey/v1',
      id: 'did:web:frequencyaccess.com#' + ExampleProviderKey.multicodecEd,
      type: 'Multikey',
      controller: 'did:web:frequencyaccess.com',
      publicKeyMultibase: ExampleProviderKey.multicodecEd,
    },
  ],
};

export const ExampleLogin = (): SiwaResponse => ({
  userPublicKey: ExampleUserPublicKey,
  payloads: [ExamplePayloadLoginStatic],
  credentials: [ExampleEmailCredential(), ExampleUserGraphCredential()],
});

export const ExampleNewUser = (): SiwaResponse => ({
  userPublicKey: ExampleUserPublicKey,
  payloads: [ExamplePayloadCreateSponsoredAccount, ExamplePayloadPublicGraphKey, ExamplePayloadClaimHandle],
  credentials: [ExampleEmailCredential(), ExampleUserGraphCredential()],
});

export const ExampleNewProvider = (): SiwaResponse => ({
  userPublicKey: ExampleUserPublicKey,
  payloads: [ExamplePayloadGrantDelegation],
  credentials: [ExampleEmailCredential(), ExampleUserGraphCredential()],
});
