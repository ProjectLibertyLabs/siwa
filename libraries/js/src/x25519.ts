import { hexToU8a, u8aToHex } from '@polkadot/util';
import { box } from 'tweetnacl';

export function isValidX25519PrivateKey(privateKey: string, testPublicKey: string): boolean {
  try {
    const { publicKey } = box.keyPair.fromSecretKey(hexToU8a(privateKey));
    return u8aToHex(publicKey).toLowerCase() === testPublicKey.toLowerCase();
  } catch (_e) {
    return false;
  }
}
