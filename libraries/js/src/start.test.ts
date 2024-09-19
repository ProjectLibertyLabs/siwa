import { describe, expect, it } from 'vitest';
import { generateAuthenticationUrl } from './start.js';

describe('generateAuthenticationUrl', () => {
  it('correctly generates the url with a fake signed request and no callbackUrlParams', async () => {
    expect(generateAuthenticationUrl('testing', '')).toEqual(
      'https://www.frequencyaccess.com/siwa/start?signedRequest=testing'
    );
  });
});
