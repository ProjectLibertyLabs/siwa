import { isArrayOf, isObj, isStr } from './general';

interface AllOfRequired {
  allOf: SiwaCredentialRequest[];
  anyOf?: SiwaCredentialRequest[];
  oneOf?: SiwaCredentialRequest[];
}

interface AnyOfRequired {
  allOf?: SiwaCredentialRequest[];
  anyOf: SiwaCredentialRequest[];
  oneOf?: SiwaCredentialRequest[];
}

interface OneOfRequired {
  allOf?: SiwaCredentialRequest[];
  anyOf?: SiwaCredentialRequest[];
  oneOf: SiwaCredentialRequest[];
}

export interface SiwaCredential {
  type: string;
  hash: string[];
}

// Union of the different interfaces
export type SiwaCredentialRequest = AllOfRequired | AnyOfRequired | OneOfRequired | SiwaCredential;

export interface SiwaRequest {
  requestedSignatures: {
    publicKey: {
      encodedValue: string;
      encoding: 'base58';
      format: 'ss58';
      type: 'Sr25519';
    };
    signature: {
      algo: 'Sr25519';
      encoding: 'base16';
      encodedValue: string;
    };
    payload: {
      callback: string;
      permissions: number[];
    };
  };
  requestedCredentials?: SiwaCredentialRequest[];
}

function isSiwaCredential(input: unknown): input is SiwaCredential {
  return isObj(input) && isStr(input.type) && isArrayOf(input.hash, isStr);
}

function isXOf<T = AllOfRequired | AnyOfRequired | OneOfRequired>(input: unknown): input is T {
  return (
    isObj(input) &&
    // Require at least one of these
    ('allOf' in input || 'anyOf' in input || 'oneOf' in input) &&
    isSiwaCredentialsRequest(input.allOf || []) &&
    isSiwaCredentialsRequest(input.anyOf || []) &&
    isSiwaCredentialsRequest(input.oneOf || [])
  );
}

function isSiwaCredentialRequest(input: unknown): input is SiwaCredentialRequest {
  if (isSiwaCredential(input)) return true;
  return isXOf(input);
}

export function isSiwaCredentialsRequest(input: unknown): input is SiwaCredentialRequest[] {
  if (Array.isArray(input)) {
    return input.every(isSiwaCredentialRequest);
  }
  return false;
}
