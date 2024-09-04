import { describe, it, vi, expect, beforeAll } from 'vitest';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import { validatePayloads } from './payloads.js';
import {
  ExamplePayloadClaimHandle,
  ExamplePayloadCreateSponsoredAccount,
  ExamplePayloadGrantDelegation,
  ExamplePayloadLoginGood,
  ExamplePayloadLoginStatic,
} from './mocks/payloads.js';
import { ExampleUserPublicKey } from './mocks/index.js';
import { ExampleProviderKey } from './mocks/keys.js';

global.fetch = vi.fn();

beforeAll(async () => {
  await cryptoWaitReady();
});

describe('validatePayloads', () => {
  describe('Login Related Payloads', () => {
    it('Can verify a Generated Login Payload', async () => {
      await expect(
        validatePayloads({
          userPublicKey: ExampleUserPublicKey,
          payloads: [ExamplePayloadLoginGood()],
        })
      ).resolves.toBeUndefined();
    });

    it('Can verify a Static Login Payload', async () => {
      await expect(
        validatePayloads({
          userPublicKey: ExampleUserPublicKey,
          payloads: [ExamplePayloadLoginStatic],
        })
      ).resolves.toBeUndefined();
    });
  });

  it('Can verify a ClaimHandle', async () => {
    await expect(
      validatePayloads({
        userPublicKey: ExampleUserPublicKey,
        payloads: [ExamplePayloadClaimHandle()],
      })
    ).resolves.toBeUndefined();
  });

  it('Can fail a ClaimHandle with wrong key', async () => {
    const upk = { ...ExampleUserPublicKey };
    upk.encodedValue = ExampleProviderKey.public;
    await expect(
      validatePayloads({
        userPublicKey: upk,
        payloads: [ExamplePayloadClaimHandle()],
      })
    ).rejects.toThrowError('Payload signature failed');
  });

  it('Can verify a Create MSA', async () => {
    await expect(
      validatePayloads({
        userPublicKey: ExampleUserPublicKey,
        payloads: [ExamplePayloadCreateSponsoredAccount()],
      })
    ).resolves.toBeUndefined();
  });

  it('Can fail a bad Create MSA with a bad signature', async () => {
    const payload = ExamplePayloadCreateSponsoredAccount();
    payload.signature.encodedValue += 'ff';
    await expect(
      validatePayloads({
        userPublicKey: ExampleUserPublicKey,
        payloads: [payload],
      })
    ).rejects.toThrowError('Payload signature failed');
  });

  it('Can verify a Add Delegation', async () => {
    await expect(
      validatePayloads({
        userPublicKey: ExampleUserPublicKey,
        payloads: [ExamplePayloadGrantDelegation()],
      })
    ).resolves.toBeUndefined();
  });

  it('Can fail a bad Add Delegation with a wrong payload', async () => {
    const payload = ExamplePayloadGrantDelegation();
    payload.payload.authorizedMsaId = 100000;
    await expect(
      validatePayloads({
        userPublicKey: ExampleUserPublicKey,
        payloads: [payload],
      })
    ).rejects.toThrowError('Payload signature failed');
  });
});
