import { describe, expect, it, vi } from 'vitest';
import { signatureVerify } from '@polkadot/util-crypto';
import { getRedirectUrl } from './request.js';
import { serializeLoginPayloadHex } from './util.js';

global.fetch = vi.fn();

describe('request', () => {
  it('correctly throws an error with a 404 response', async () => {
    vi.mocked(fetch).mockResolvedValue(new Response(null, { status: 404, statusText: 'Not Found' }));
    expect(getRedirectUrl('//Alice', 'http://localhost:3000', [])).to.rejects.toThrow(
      'Request for Redirect URL failed or missing header: 404 Not Found'
    );
  });

  it('correctly throws an error with a missing header response', async () => {
    vi.mocked(fetch).mockResolvedValue(new Response(null, { status: 201, statusText: 'Created' }));
    expect(getRedirectUrl('//Alice', 'http://localhost:3000', [])).to.rejects.toThrow(
      'Request for Redirect URL failed or missing header: 201 Created'
    );
  });

  it('correctly generates the request', async () => {
    vi.mocked(fetch).mockResolvedValue(
      new Response(null, {
        status: 201,
        statusText: 'Created',
        headers: { Location: 'https://unittest.frequencyaccess.com/go' },
      })
    );

    await expect(
      getRedirectUrl('//Alice', 'http://localhost:3000', [1, 2, 100], ['VerifiedEmailAddressCredential'])
    ).to.resolves.toBe('https://unittest.frequencyaccess.com/go');

    const body = JSON.parse(vi.mocked(fetch).mock.calls[0]?.[1]?.body?.toString() || '');

    expect(body).toEqual({
      requestedSignatures: {
        publicKey: {
          encodedValue: 'f6cL4wq1HUNx11TcvdABNf9UNXXoyH47mVUwT59tzSFRW8yDH',
          encoding: 'base58',
          format: 'ss58',
          type: 'Sr25519',
        },
        signature: {
          algo: 'Sr25519',
          encoding: 'base16',
          encodedValue: expect.stringMatching(/^0x[a-f0-9]+$/),
        },
        payload: {
          callback: 'http://localhost:3000',
          permissions: [1, 2, 100],
        },
      },
      requestedCredentials: {
        anyOf: [
          {
            type: 'VerifiedEmailAddressCredential',
            hash: ['multihash_of_email_schema_file'],
          },
        ],
      },
    });
  });

  it('correctly evaluates the endpoint', async () => {
    vi.mocked(fetch).mockResolvedValue(
      new Response(null, {
        status: 201,
        statusText: 'Created',
        headers: { Location: 'https://unittest.frequencyaccess.com/go' },
      })
    );

    await expect(getRedirectUrl('//Alice', 'http://localhost:3000', [], [], { endpoint: 'testnet' })).to.resolves.toBe(
      'https://unittest.frequencyaccess.com/go'
    );

    expect(vi.mocked(fetch).mock.calls[0]?.[0]).toBe('https://testnet.frequencyaccess.com/siwa/api/payload');
  });

  it('correctly generates the signature', async () => {
    vi.mocked(fetch).mockResolvedValue(
      new Response(null, {
        status: 201,
        statusText: 'Created',
        headers: { Location: 'https://unittest.frequencyaccess.com/go' },
      })
    );

    await expect(
      getRedirectUrl('//Alice', 'http://localhost:3000', [1, 2, 100], ['VerifiedEmailAddressCredential'])
    ).to.resolves.toBe('https://unittest.frequencyaccess.com/go');

    const body = JSON.parse(vi.mocked(fetch).mock.calls[0]?.[1]?.body?.toString() || '');

    const signature = body.requestedSignatures.signature.encodedValue;

    signatureVerify(
      serializeLoginPayloadHex({
        callback: 'http://localhost:3000',
        permissions: [5, 7, 8, 9, 10],
      }),
      signature,
      'f6cL4wq1HUNx11TcvdABNf9UNXXoyH47mVUwT59tzSFRW8yDH'
    );
  });
});
