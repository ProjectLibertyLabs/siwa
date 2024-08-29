```json
{
  "userPublicKey": {
    "encodedValue": "f6akufkq9Lex6rT8RCEDRuoZQRgo5pWiRzeo81nmKNGWGNJdJ",
    "encoding": "base58",
    "format": "ss58",
    "type": "Sr25519"
  },
  "payloads": [
    {
      "signature": {
        "algo": "Sr25519",
        "encoding": "base16",
        "encodedValue": "0xa20a4fe45f667b25fcdb2bb7f3a9fc83c9ee811df29c7c20257258667f86394eaa31729c05765c1b8bdb0c6772d37026d784d03ee4540193a86b44b5907ead84"
      },
      "endpoint": {
        "pallet": "msa",
        "extrinsic": "grantDelegation"
      },
      "type": "addProvider",
      "payload": {
        "authorizedMsaId": 1,
        "schemaIds": [
          5,
          7,
          8,
          9,
          10
        ],
        "expiration": 24
      }
    }
  ],
  "credentials": [
    {
      "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://www.w3.org/ns/credentials/undefined-terms/v2"
      ],
      "type": [
        "VerifiedEmailAddressCredential",
        "VerifiableCredential"
      ],
      "issuer": "did:web:frequencyaccess.com",
      "validFrom": "2024-08-21T21:28:08.289+0000",
      "credentialSchema": {
        "type": "JsonSchema",
        "id": "https://some.permanent.url/schema/email_address.json"
      },
      "credentialSubject": {
        "id": "did:key:z6QNzHod3tSSJbwo4e5xGDcnsndsR9WByZzPoCGdbv3sv1jJ",
        "emailAddress": "john.doe@example.com",
        "lastVerified": "2024-08-21T21:27:59.309+0000"
      },
      "proof": {
        "type": "DataIntegrityProof",
        "created": "2024-02-12T03:09:44.000+0000",
        "verificationMethod": "did:web:frequencyaccess.com#z6Mkumvf8FpJybzi9byLX7qAhTPuKpqH7d5rWyqcrKJ9Mies",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z2YLydotgaGsbRGRxPzmoscd7dH5CgGHydXLKXJXefcT2SJGExtxmkJxGfUGoe81Vm62JGEYrwcS6ht1ixEvuZF9c"
      }
    },
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
  ]
}
```
