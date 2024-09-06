import { isSiwaCredentialsRequest } from './request.js';
import { ExampleLogin, ExampleNewProvider, ExampleNewUser } from '../mocks/index.js';
import { describe, expect, it } from 'vitest';
import {
  VerifiedEmailAddressCredential,
  VerifiedGraphKeyCredential,
  VerifiedPhoneNumberCredential,
} from '../request.js';

describe('isSiwaCredentialsRequest', () => {
  it('is successful with an empty array', async () => {
    expect(isSiwaCredentialsRequest([])).toBe(true);
  });

  it('is successful with array of requests', async () => {
    expect(isSiwaCredentialsRequest([VerifiedGraphKeyCredential, VerifiedPhoneNumberCredential])).toBe(true);
  });

  it('is successful with an AnyOf', async () => {
    expect(
      isSiwaCredentialsRequest([
        VerifiedGraphKeyCredential,
        {
          anyOf: [VerifiedPhoneNumberCredential, VerifiedEmailAddressCredential],
        },
      ])
    ).toBe(true);
  });

  it('is successful with an AllOf', async () => {
    expect(
      isSiwaCredentialsRequest([
        VerifiedGraphKeyCredential,
        {
          allOf: [VerifiedPhoneNumberCredential, VerifiedEmailAddressCredential],
        },
      ])
    ).toBe(true);
  });

  it('is successful with an OneOf', async () => {
    expect(
      isSiwaCredentialsRequest([
        VerifiedGraphKeyCredential,
        {
          oneOf: [VerifiedPhoneNumberCredential, VerifiedEmailAddressCredential],
        },
      ])
    ).toBe(true);
  });

  it('is successful with nested', async () => {
    expect(
      isSiwaCredentialsRequest([
        VerifiedGraphKeyCredential,
        {
          oneOf: [
            VerifiedPhoneNumberCredential,
            {
              allOf: [
                VerifiedEmailAddressCredential,
                {
                  anyOf: [VerifiedEmailAddressCredential, VerifiedEmailAddressCredential],
                },
              ],
            },
          ],
        },
      ])
    ).toBe(true);
  });

  it('is can fail', async () => {
    expect(
      isSiwaCredentialsRequest([
        VerifiedGraphKeyCredential,
        {
          oneOf: [{ foo: 'bar' }],
        },
      ])
    ).toBe(false);
  });
});