import { SiwaSignedRequest } from './types/request.js';
import { encodeSignedRequest } from './request.js';
import { SiwaOptions } from './types/index.js';
import { parseEndpoint } from './util.js';

export function generateRedirectUrl(
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
