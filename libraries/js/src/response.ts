import { cryptoWaitReady } from '@polkadot/util-crypto';
import { SiwaOptions } from './types/general.js';
import { isSiwaResponse, SiwaResponse } from './types/response.js';
import { parseEndpoint } from './util.js';
import { validateCredentials } from './credentials.js';
import { validatePayloads } from './payloads.js';

/**
 * Checks to see if there are any chain submissions in the result
 *
 * @param {SiwaResponse} result - The result from the login
 *
 * @returns {boolean}
 */
export function hasChainSubmissions(result: SiwaResponse): boolean {
  // Anything that has an endpoint is a chain submission
  return !!result.payloads.find((x) => !!x.endpoint);
}

/**
 * Fetch and extract the Result of the Login from Frequency Access
 * Generates a redirect URL for the authentication flow with Frequency Access.
 *
 * @param {string} authorizationCode - The code from the callback URI parameters.
 * @param {SiwaOptions} options - Options for endpoint selection.
 *                 options.endpoint - The endpoint to use. Can be specified as 'production' for production environment or 'staging' for test environments.
 *
 * @returns {Promise<SiwaResponse>} The parsed and validated response
 */
export async function getLoginResult(authorizationCode: string, options?: SiwaOptions): Promise<SiwaResponse> {
  await cryptoWaitReady();
  const endpoint = new URL(
    `${parseEndpoint(options?.endpoint)}/siwa/api/payload?authorizationCode=${authorizationCode}`
  );
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error(`Response failed: ${response.status} ${response.statusText}`);
  }

  const body = await response.json();

  // This also validates that userPublicKey is a valid address
  if (!isSiwaResponse(body)) {
    throw new Error(`Response failed to correctly parse or invalid content: ${await response.text()}`);
  }

  // Validate Payloads
  await validatePayloads(body);

  // Validate Credentials (if any), but trust DIDs from frequencyAccess
  await validateCredentials(body.credentials, ['did:web:frequencyaccess.com', 'did:web:testnet.frequencyaccess.com']);

  return body;
}

// IDEAS?
// export async function getLoginResultAsSiwf();
// Instead of SiwaResponse as is, we convert to a simpler format?
// userKey: string
// siwf
// graphKey
// etc...?
//
// export function resultToSiwf()
// Offer a helper function to extract the Siwf structure
//
// export function getUserKey()
// Helper functions to help extract the data from the data structure such as user key, graph key, etc...
