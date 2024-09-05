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

export type SiwaCredentialTypes =
  | 'VerifiedEmailAddressCredential'
  | 'VerifiedPhoneNumberCredential'
  | 'VerifiedGraphKeyCredential';

export type SiwaCredential = SiwaCredentialTypes | SiwaCredentialRequest;
