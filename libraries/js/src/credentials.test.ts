import { describe, it, vi, expect, beforeAll } from 'vitest';
import { cryptoWaitReady } from '@polkadot/util-crypto';
import { validateCredentials } from './credentials.js';
import { ExampleEmailCredential, ExamplePhoneCredential, ExampleUserGraphCredential } from './mocks/credentials.js';
import { ExampleFrequencyAccessDidDocument } from './mocks/index.js';

global.fetch = vi.fn();

beforeAll(async () => {
  await cryptoWaitReady();
});

describe('validateCredential', () => {
  it('Can verify a basic email with fetch', async () => {
    const emailCred = await ExampleEmailCredential();

    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(ExampleFrequencyAccessDidDocument()),
    } as any);

    await expect(validateCredentials([emailCred], [])).resolves.toBeUndefined();
  });

  it('Can verify email with trusted DIDs', async () => {
    await expect(
      validateCredentials([await ExampleEmailCredential()], ['did:web:frequencyaccess.com'])
    ).resolves.toBeUndefined();
  });

  it('Can verify phone with trusted DIDs', async () => {
    await expect(
      validateCredentials([await ExamplePhoneCredential()], ['did:web:frequencyaccess.com'])
    ).resolves.toBeUndefined();
  });

  it('Can verify graph', async () => {
    await expect(validateCredentials([await ExampleUserGraphCredential()])).resolves.toBeUndefined();
  });

  it('Can verify all at once', async () => {
    await expect(
      validateCredentials(
        [await ExampleEmailCredential(), await ExamplePhoneCredential(), await ExampleUserGraphCredential()],
        ['did:web:frequencyaccess.com']
      )
    ).resolves.toBeUndefined();
  });
});
