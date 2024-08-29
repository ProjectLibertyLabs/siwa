import { validateAddress } from '@polkadot/util-crypto/address/validate';
import { isObj } from './general.js';
import { isCredentials, SiwaResponseCredential } from './credential.js';
import { isPayloads, SiwaResponsePayload } from './payload.js';

export interface SiwaUserPublicKey {
  encodedValue: string;
  encoding: 'base58';
  format: 'ss58';
  type: 'Sr25519';
}

export interface SiwaResponse {
  userPublicKey: SiwaUserPublicKey;
  payloads: SiwaResponsePayload[];
  credentials?: SiwaResponseCredential[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isUserPublicKey(obj: any): obj is SiwaUserPublicKey {
  return (
    isObj(obj) &&
    validateAddress(obj.encodedValue) &&
    obj.encoding === 'base58' &&
    obj.format === 'ss58' &&
    obj.type === 'Sr25519'
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isSiwaResponse(obj: any): obj is SiwaResponse {
  return (
    isObj(obj) &&
    isUserPublicKey(obj.userPublicKey) &&
    isPayloads(obj.payloads) &&
    // Optional
    isCredentials(obj.credentials || [])
  );
}
