import { describe, it, vi, expect, beforeAll } from 'vitest';
import { validatePayloads } from './payloads.js';
import {
  ExamplePayloadClaimHandle,
  ExamplePayloadCreateSponsoredAccount,
  ExamplePayloadGrantDelegation,
  ExamplePayloadLoginGood,
  ExamplePayloadLoginStatic,
} from './mocks/payloads.js';
import { ExampleUserPublicKey } from './mocks/index.js';
import { cryptoWaitReady } from '@polkadot/util-crypto';

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
        payloads: [ExamplePayloadClaimHandle],
      })
    ).resolves.toBeUndefined();
  });

  it('Can verify a Create MSA', async () => {
    await expect(
      validatePayloads({
        userPublicKey: ExampleUserPublicKey,
        payloads: [ExamplePayloadCreateSponsoredAccount],
      })
    ).resolves.toBeUndefined();
  });

  it('Can verify a Add Delegation', async () => {
    await expect(
      validatePayloads({
        userPublicKey: ExampleUserPublicKey,
        payloads: [ExamplePayloadGrantDelegation],
      })
    ).resolves.toBeUndefined();
  });
});
