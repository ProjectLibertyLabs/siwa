import { describe, expect, it } from 'vitest';
import { generateRedirectUrl } from './start.js';

describe('generateRedirectUrl', () => {
  it('correctly generates the url with a fake signed request and no callbackUrlParams', async () => {
    expect(generateRedirectUrl('testing', '')).toEqual(
      'https://www.frequencyaccess.com/siwa/start?signedRequest=testing'
    );
  });
});
