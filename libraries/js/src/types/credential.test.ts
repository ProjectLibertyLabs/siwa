import { ExampleEmailCredential, ExampleUserGraphCredential } from '../mocks/credentials.js';
import { describe, expect, it } from 'vitest';
import { isCredentialEmail, isCredentialGraph, isCredentials } from './credential.js';

describe('isCredentials Single', () => {
  it('is successful with ExampleEmailCredential', () => {
    expect(isCredentialEmail(ExampleEmailCredential())).toBe(true);
    expect(isCredentials([ExampleEmailCredential()])).toBe(true);
  });

  it('is successful with ExampleUserGraphCredential', () => {
    expect(isCredentialGraph(ExampleUserGraphCredential())).toBe(true);
    expect(isCredentials([ExampleUserGraphCredential()])).toBe(true);
  });
});

describe('isCredentials Multi', () => {
  it('is successful with all types', () => {
    expect(isCredentials([ExampleEmailCredential()])).toBe(true);
  });

  it('will fail with one bad one', () => {
    expect(isCredentials([ExampleEmailCredential(), {}])).toBe(false);
  });
});
