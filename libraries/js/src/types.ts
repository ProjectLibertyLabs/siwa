export interface SiwaCredentialRequest {
  type: string;
  hash: string[];
}

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
  requestedCredentials: {
    anyOf: SiwaCredentialRequest[];
  };
}

export interface SiwaResult {
  raw: string;
}

export interface SiwaOptions {
  endpoint: string;
}

export type SiwaCredentialTypes = 'VerifiedEmailAddressCredential' | 'VerifiedPhoneNumberCredential';

export type SiwaCredential = SiwaCredentialTypes | SiwaCredentialRequest;
