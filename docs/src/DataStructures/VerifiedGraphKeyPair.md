```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://www.w3.org/ns/credentials/undefined-terms/v2"
  ],
  "type": [
    "VerifiedGraphKeyCredential",
    "VerifiableCredential"
  ],
  "issuer": "did:key:z6QNzHod3tSSJbwo4e5xGDcnsndsR9WByZzPoCGdbv3sv1jJ",
  "validFrom": "2024-08-21T21:28:08.289+0000",
  "credentialSchema": {
    "type": "JsonSchema",
    "id": "https://some.permanent.url/schema/private_key.json"
  },
  "credentialSubject": {
    "id": "did:key:z6QNzHod3tSSJbwo4e5xGDcnsndsR9WByZzPoCGdbv3sv1jJ",
    "encodedPublicKeyValue": "0xeea1e39d2f154584c4b1ca8f228bb49ae5a14786ed63c90025e755f16bd58d37",
    "encodedPrivateKeyValue": "0x06d384634ac01c3e83aa3e27652391b363e15624c0db0bc0da61a7dc5ff77db8",
    "encoding": "base16",
    "format": "bare",
    "type": "X25519",
    "keyType": "dsnp.public-key-key-agreement"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "created": "2024-02-12T03:09:44.000+0000",
    "verificationMethod": "did:key:z6QNzHod3tSSJbwo4e5xGDcnsndsR9WByZzPoCGdbv3sv1jJ",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "proofValue": "z2YLydotgaGsbRGRxPzmoscd7dH5CgGHydXLKXJXefcT2SJGExtxmkJxGfUGoe81Vm62JGEYrwcS6ht1ixEvuZF9c"
  }
}
```
