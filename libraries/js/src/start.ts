import { SiwaSignedRequest } from './types/request.js';
import { encodeSignedRequest } from './request.js';
import { SiwaOptions } from './types/index.js';
import { parseEndpoint } from './util.js';

/**
 * Generates an Authentication URL for SIWA to start the user's login path.
 *
 * @param {SiwaSignedRequest|string} signedRequest - The signed request object or string.
 * @param {URLSearchParams|string} callbackUrlParams - The URL parameters to be added to the callback.
 * @param {SiwaOptions} options - Options for endpoint selection.
 *                 options.endpoint - The endpoint to use. Can be specified as 'production' for production environment or 'staging' for test environments.
 *
 * @returns {string} - The generated Authentication URL
 */
export function generateAuthenticationUrl(
  signedRequest: SiwaSignedRequest | string,
  callbackUrlParams: URLSearchParams | string,
  options?: SiwaOptions
): string {
  const encodedSignedRequest = typeof signedRequest === 'string' ? signedRequest : encodeSignedRequest(signedRequest);
  const endpoint = `${parseEndpoint(options?.endpoint)}/siwa/start`;
  const url = new URL(endpoint);
  url.searchParams.set('signedRequest', encodedSignedRequest);
  if (callbackUrlParams) url.searchParams.set('callbackUrlParams', callbackUrlParams.toString());
  return url.toString();
}
