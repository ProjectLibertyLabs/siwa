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
    "proofValue": "zKc9THnRy8VSgJsp5DKoe64kgQg7dzjELDKKZH3fA9GWDfxDG3MRSy5xKiCEsbpCAGadYsmgH7G9CQpMnD4WnnmA"
  }
}
```
