import { Struct, Text } from '@polkadot/types-codec';
import { TypeRegistry } from '@polkadot/types';
import { SiwaRequest } from './types.js';
import { u8aToHex, u8aWrapBytes } from '@polkadot/util';
const registry = new TypeRegistry();

export function serializeRequestPayloadHex(payload: SiwaRequest['requestedSignatures']['payload']): string {
  return u8aToHex(u8aWrapBytes(serializeRequestPayload(payload)));
}

export function serializeRequestPayload(payload: SiwaRequest['requestedSignatures']['payload']): Uint8Array {
  return new Struct(
    registry,
    {
      callback: Text,
      permissions: 'Vec<U16>',
    },
    payload
  ).toU8a();
}

export function parseEndpoint(input = 'mainnet') {
  switch (input) {
    case 'mainnet':
    case 'production':
    case 'prod':
      return 'https://www.frequencyaccess.com';
    case 'testnet':
    case 'staging':
      return 'https://testnet.frequencyaccess.com';
    default:
      return input.replace(/\/$/, '');
  }
}
