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
        "encodedValue": "0xdaca9a962aa95f6eee66c97edcf9c04c40c671dde2796a97043d3288ffb5ff2dfeb98b90283c9052aadb9ca6e56ac54791ee3cbe998206981bcd8fa2fd45f28e"
      },
      "endpoint": {
        "pallet": "msa",
        "extrinsic": "createSponsoredAccountWithDelegation"
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
    },
    {
      "signature": {
        "algo": "Sr25519",
        "encoding": "base16",
        "encodedValue": "0x86bdd46a5f91ed3f259374f5856fdc48ee00b8eced10eecd05af8d7637c51d17df6252f617feacbce1cf91cc57ca036c69773ab9b0c31d6843344704b4fb898d"
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
            "payloadHex": "0x40eea1e39d2f154584c4b1ca8f228bb49ae5a14786ed63c90025e755f16bd58d37"
          }
        ]
      }
    },
    {
      "signature": {
        "algo": "Sr25519",
        "encoding": "base16",
        "encodedValue": "0xc8c7587ef80b6bd64295d63b69f97196a9a0b635bd8f1974156d7e3c7206134bb9838d29978a2f91c18a6592aff180f2314db7528b6aac796f0073d758406e81"
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
        "id": "did:key:z6QNucQV4AF1XMQV4kngbmnBHwYa6mVswPEGrkFrUayhttT1",
        "emailAddress": "john.doe@example.com",
        "lastVerified": "2024-08-21T21:27:59.309+0000"
      },
      "proof": {
        "type": "DataIntegrityProof",
        "verificationMethod": "did:web:frequencyaccess.com#z6MkofWExWkUvTZeXb9TmLta5mBT6Qtj58es5Fqg1L5BCWQD",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z38CC2SNcH64FYHsgQHCC6Tu2g9rT6kCfxj4Y5LYDGFmDEczAmPqUFWvaK8PSMcM9dPfEM1WDXb2kyTkREdd1Bums"
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
      "issuer": "did:key:z6QNucQV4AF1XMQV4kngbmnBHwYa6mVswPEGrkFrUayhttT1",
      "validFrom": "2024-08-21T21:28:08.289+0000",
      "credentialSchema": {
        "type": "JsonSchema",
        "id": "https://some.permanent.url/schema/private_key.json"
      },
      "credentialSubject": {
        "id": "did:key:z6QNucQV4AF1XMQV4kngbmnBHwYa6mVswPEGrkFrUayhttT1",
        "encodedPublicKeyValue": "0xb5032900293f1c9e5822fd9c120b253cb4a4dfe94c214e688e01f32db9eedf17",
        "encodedPrivateKeyValue": "0xd0910c853563723253c4ed105c08614fc8aaaf1b0871375520d72251496e8d87",
        "encoding": "base16",
        "format": "bare",
        "type": "X25519",
        "keyType": "dsnp.public-key-key-agreement"
      },
      "proof": {
        "type": "DataIntegrityProof",
        "verificationMethod": "did:key:z6MktZ15TNtrJCW2gDLFjtjmxEdhCadNCaDizWABYfneMqhA",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z5r9jTXbssu1AWswnZkrgmx7MaQ8evviTbAJKwULs8rsDLKiTTKoDUT2Rihfq4yHLZg1f9tHHfhoUdQAWrSBTCsap"
      }
    }
  ]
}
```
