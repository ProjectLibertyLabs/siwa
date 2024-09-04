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
        "encodedValue": "0x84a4e03344b07d64087ebdf47b2c8c679aa7de78179689988992609f1b83c34f6086c7de99ef41c5325cce64d148624e716c605d355f22d1281f6d23f546f584"
      },
      "type": "login",
      "payload": {
        "message": "localhost wants you to sign in with your Frequency account:\nf6akufkq9Lex6rT8RCEDRuoZQRgo5pWiRzeo81nmKNGWGNJdJ\n\n\n\nURI: https://testnet.frequencyaccess.com/signin/confirm\nNonce: N6rLwqyz34oUxJEXJ\nIssued At: 2024-03-05T23:18:03.041Z\nExpiration Time: 2060-03-05T23:23:03.041Z"
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
        "id": "did:key:z6MktZ15TNtrJCW2gDLFjtjmxEdhCadNCaDizWABYfneMqhA",
        "emailAddress": "john.doe@example.com",
        "lastVerified": "2024-08-21T21:27:59.309+0000"
      },
      "proof": {
        "type": "DataIntegrityProof",
        "verificationMethod": "did:web:frequencyaccess.com#z6Mktjdrv1ZHpSQM2RA5xNj1pmxqUJ2iZ1qzB7t8vHQuWKi4",
        "cryptosuite": "eddsa-rdfc-2022",
        "proofPurpose": "assertionMethod",
        "proofValue": "z2mPfK67bGd4QLiAsbti6jmYPLRvsqqGn9VAr3xztH6VsTRtYA2pBj4C9i1ji7PtS1gzQ6zzeLUx6PRHrotuPhf6t"
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
      "issuer": "did:key:z6MktZ15TNtrJCW2gDLFjtjmxEdhCadNCaDizWABYfneMqhA",
      "validFrom": "2024-08-21T21:28:08.289+0000",
      "credentialSchema": {
        "type": "JsonSchema",
        "id": "https://some.permanent.url/schema/private_key.json"
      },
      "credentialSubject": {
        "id": "did:key:z6MktZ15TNtrJCW2gDLFjtjmxEdhCadNCaDizWABYfneMqhA",
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
        "proofValue": "z3ScnMRSCmqoBm24HKwAWqx3vLJ9xewiBJTvSH3HhTLDGcFzEpB2G2yxqtt2ZJBjfA3fKvPE3kbvCGmmseKsSSJo6"
      }
    }
  ]
}
```
