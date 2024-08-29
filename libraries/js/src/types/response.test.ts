import { isSiwaResponse } from './response.js';
import { ExampleLogin, ExampleNewProvider, ExampleNewUser } from '../mocks/index.js';
import { describe, expect, it } from 'vitest';

describe('isSiwaResponse', () => {
  it('is successful with ExampleLogin', () => {
    expect(isSiwaResponse(ExampleLogin())).toBe(true);
  });

  it('is successful with ExampleNewUser', () => {
    expect(isSiwaResponse(ExampleNewUser())).toBe(true);
  });

  it('is successful with ExampleNewProvider', () => {
    expect(isSiwaResponse(ExampleNewProvider())).toBe(true);
  });
});
