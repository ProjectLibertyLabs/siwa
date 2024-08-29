import { describe, it, vi, expect, beforeAll } from 'vitest';
import { validateCredentials } from './credentials.js';
import { ExampleEmailCredential, signCredentialAsAccess } from './mocks/credentials.js';
import { ExampleFrequencyAccessDidDocument } from './mocks/index.js';
import { cryptoWaitReady } from '@polkadot/util-crypto';

global.fetch = vi.fn();

beforeAll(async () => {
  await cryptoWaitReady();
});

describe('validateCredential', () => {
  it('Can verify a basic thing', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(ExampleFrequencyAccessDidDocument),
    } as any);

    await expect(validateCredentials([ExampleEmailCredential()], [])).resolves.toBeUndefined();
  });

  it('Can verify with trusted DIDs', async () => {
    await expect(
      validateCredentials([ExampleEmailCredential()], ['did:web:frequencyaccess.com'])
    ).resolves.toBeUndefined();
  });
});
