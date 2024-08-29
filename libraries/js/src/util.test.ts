import { describe, expect, it } from 'vitest';
import { serializeRequestPayloadHex, parseEndpoint } from './util.js';

describe('serializeRequestPayloadHex', () => {
  it('serializes correctly', () => {
    expect(serializeRequestPayloadHex({ callback: 'https://localhost:44181', permissions: [5, 7, 8, 9, 10] })).toEqual(
      '0x3c42797465733e5c68747470733a2f2f6c6f63616c686f73743a34343138311405000700080009000a003c2f42797465733e'
    );
  });
});

describe('parseEndpoint', () => {
  it('parses keywords', () => {
    expect(parseEndpoint('mainnet')).toEqual('https://www.frequencyaccess.com');
    expect(parseEndpoint('production')).toEqual('https://www.frequencyaccess.com');
    expect(parseEndpoint('prod')).toEqual('https://www.frequencyaccess.com');
    expect(parseEndpoint('testnet')).toEqual('https://testnet.frequencyaccess.com');
    expect(parseEndpoint('staging')).toEqual('https://testnet.frequencyaccess.com');
  });

  it('returns custom endpoint', () => {
    expect(parseEndpoint('https://mainnet.frequencyaccess.com')).toEqual('https://mainnet.frequencyaccess.com');
    expect(parseEndpoint('http://localhost')).toEqual('http://localhost');
    expect(parseEndpoint('http://localhost:3000')).toEqual('http://localhost:3000');
  });

  it('strips ending / from the custom endpoint', () => {
    expect(parseEndpoint('https://mainnet.frequencyaccess.com/')).toEqual('https://mainnet.frequencyaccess.com');
    expect(parseEndpoint('http://localhost:3000/')).toEqual('http://localhost:3000');
  });
});
