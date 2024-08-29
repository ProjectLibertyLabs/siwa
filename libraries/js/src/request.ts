import { Keyring } from '@polkadot/keyring';
import { encodeAddress } from '@polkadot/keyring';
import { u8aToHex } from '@polkadot/util';
import { SiwaCredential, SiwaCredentialRequest, SiwaOptions, SiwaRequest } from './types.js';
import { parseEndpoint, serializeRequestPayloadHex } from './util.js';

const keyring = new Keyring({ type: 'sr25519' });

function isSiwaCredentialRequest(input: unknown): input is SiwaCredentialRequest {
  return typeof input === 'object' && input !== null && Object.hasOwn(input, 'type') && Object.hasOwn(input, 'hash');
}

function credentialRequest(cred: SiwaCredential): SiwaCredentialRequest {
  if (isSiwaCredentialRequest(cred)) return cred;
  switch (cred) {
    case 'VerifiedEmailAddressCredential':
      return {
        type: cred.toString(),
        // TODO: Add Correct Hash
        hash: [],
      };
    case 'VerifiedPhoneNumberCredential':
      return {
        type: cred.toString(),
        // TODO: Add Correct Hash
        hash: [],
      };
  }
  throw new Error('Unknown Credential Request Type');
}

/**
 * Fetch and extract the Redirect URL from Frequency Access
 */
export async function getRedirectUrl(
  keyUri: string,
  callback: string,
  permissions: number[],
  credentials: SiwaCredential[] = [],
  options?: SiwaOptions
): Promise<string> {
  const keyPair = keyring.createFromUri(keyUri);

  const endpoint = `${parseEndpoint(options?.endpoint)}/siwa/api/payload`;
  const payload = {
    callback,
    permissions,
  };
  const credentialRequests = credentials.map(credentialRequest);

  const signature = keyPair.sign(serializeRequestPayloadHex(payload), {});

  const request: SiwaRequest = {
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
    requestedCredentials: {
      anyOf: credentialRequests,
    },
  };

  const response = await fetch(endpoint, { body: JSON.stringify(request), method: 'POST' });

  const redirectUrl = response.status === 201 ? response.headers.get('Location') : null;

  if (redirectUrl) {
    return redirectUrl;
  }

  throw new Error(`Request for Redirect URL failed or missing header: ${response.status} ${response.statusText}`);
}
