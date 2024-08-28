```json
{
  "userPublicKey": {
    "encodedValue": "f6cL4wq1HUNx11TcvdABNf9UNXXoyH47mVUwT59tzSFRW8yDH",
    "encoding": "base58",
    "format": "ss58",
    "type": "Sr25519"
  },
  "userKeys": [
    {
      "encodedPublicKeyValue": "0xfa627dd95fcb838c46fe049bb1ab17691b1001301ea3e7721eec9175af5b4234",
      "encodedPrivateKeyValue": "0x06d384634ac01c3e83aa3e27652391b363e15624c0db0bc0da61a7dc5ff77db8",
      "encoding": "base16",
      "format": "bare",
      "type": "X25519",
      "keyType": "dsnp.public-key-key-agreement",
    }
  ],
  "payloads": [
    {
      "signature": {
        "algo": "Sr25519",
        "encoding": "base16",
        "encodedValue": "0xa20a4fe45f667b25fcdb2bb7f3a9fc83c9ee811df29c7c20257258667f86394eaa31729c05765c1b8bdb0c6772d37026d784d03ee4540193a86b44b5907ead84"
      },
      "endpoint": {
        "pallet": "msa",
        "extrinsic": "createSponsoredAccountWithDelegation"
      },
      "type": "addProvider",
      "payload": {
        "authorizedMsaId": 1,
        "schemaIds": [5, 7, 8, 9, 10],
        "expiration": 24
      }
    },
    {
      "signature": {
        "algo": "Sr25519",
        "encoding": "base16",
        "encodedValue": "0x4a18962ca49435ac43d8c82b84398cac16415e5e9c594503345782c5f8bfdc7d25c9cb7d271d1f272fd44b02a8fca99351cf913871156ddbbb7fa97c60d8a58e"
      },
      "endpoint": {
        "pallet": "statefulStorage",
        "extrinsic": "applyItemActionsWithSignatureV2"
      },
      "type": "itemActions",
      "payload": {
        "schemaId": 7,
        "targetHash": 0,
        "expiration": 20,
        "actions": [
          {
            "type": "addItem",
            "payloadHex": "0xfa627dd95fcb838c46fe049bb1ab17691b1001301ea3e7721eec9175af5b4234"
          }
        ]
      }
    },
    {
      "signature": {
        "algo": "Sr25519",
        "encoding": "base16",
        "encodedValue": "0xdaed2e41dc3e6207fceb5367094a8232deb69e9565d0c67a78dcb95c16386658c9145616ed73490e2df707615bae45186acdd9fd8aa5f8ca7bef47a6c7516885"
      },
      "endpoint": {
        "pallet": "handles",
        "extrinsic": "claimHandle"
      },
      "type": "claimHandle",
      "payload": {
        "baseHandle": "ExampleHandle",
        "expiration": 24
      }
    }
  ],
  "credentials": [
    {
      "@context": ["https://www.w3.org/ns/credentials/v2", "https://www.w3.org/ns/credentials/undefined-terms/v2"],
      "type": ["VerifiedEmailAddressCredential", "VerifiableCredential"],
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
    }
  ]
}
```
