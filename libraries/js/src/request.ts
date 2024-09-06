import { Keyring } from '@polkadot/keyring';
import { encodeAddress } from '@polkadot/keyring';
import { u8aToHex } from '@polkadot/util';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import { SiwaOptions } from './types/general.js';
import { SiwaCredentialRequest, SiwaRequest, isSiwaCredentialsRequest } from './types/request.js';
import { parseEndpoint, serializeLoginPayloadHex } from './util.js';
import { VerifiedEmailAddress, VerifiedGraphKey, VerifiedPhoneNumber } from './credentials.js';

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
 * Generates a redirect URL for the authentication flow with Frequency Access.
 *
 * @param {string} providerKeyUri - The URI of a key, usually a seed phrase, but may also include test accounts such as `//Alice` or `//Bob`.
 * @param {string} callbackUri - The URI that the user should return to after authenticating with Frequency Access.
 * @param {number[]} permissions - The list of Frequency Schemas IDs that you are requesting the user to delegate. For more details, see [Frequency Schemas Delegations](https://projectlibertylabs.github.io/siwa/Delegations.html).
 * @param {SiwaCredentialRequest[]} credentials - (Optional) List of credentials, either via their full structure. For more details, see [Credentials Reference](https://projectlibertylabs.github.io/siwa/Credentials.html).
 * @param {SiwaOptions} options - (Optional) Options for endpoint selection.
 *                 options.endpoint - (Default: 'production') The endpoint to use. Can be specified as 'production' for production environment or 'staging' for test environments.
 *
 * @returns {Promise<string>} The generated redirect URL that can be used for authentication with Frequency Access.
 */
export async function getRedirectUrl(
  providerKeyUri: string,
  callbackUri: string,
  permissions: number[],
  credentials: SiwaCredentialRequest[] = [],
  options?: SiwaOptions
): Promise<string> {
  await cryptoWaitReady();
  const keyPair = keyring.createFromUri(providerKeyUri);

  const endpoint = `${parseEndpoint(options?.endpoint)}/siwa/api/payload`;
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
    requestedCredentials,
  };

  const response = await fetch(endpoint, { body: JSON.stringify(request), method: 'POST' });

  const redirectUrl = response.status === 201 ? response.headers.get('Location') : null;

  if (redirectUrl) {
    return redirectUrl;
  }

  throw new Error(`Request for Redirect URL failed or missing header: ${response.status} ${response.statusText}`);
}
