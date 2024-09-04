```json
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
    "proofValue": "z2oVvzK22Hfuz91YSi4NtHEvQRbJS8DXuBr5efWiFT3JU9NxsJ73HLtcs7ZvUsFn59T8Kn7fSnjFcmny3PgLNPCai"
  }
}
```
