```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://www.w3.org/ns/credentials/undefined-terms/v2"
  ],
  "type": [
    "VerifiedPhoneNumberCredential",
    "VerifiableCredential"
  ],
  "issuer": "did:web:frequencyaccess.com",
  "validFrom": "2024-08-21T21:28:08.289+0000",
  "credentialSchema": {
    "type": "JsonSchema",
    "id": "https://some.permanent.url/schema/phone_number.json"
  },
  "credentialSubject": {
    "id": "did:key:z6MktZ15TNtrJCW2gDLFjtjmxEdhCadNCaDizWABYfneMqhA",
    "phoneNumber": "+01-234-867-5309",
    "lastVerified": "2024-08-21T21:27:59.309+0000"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "verificationMethod": "did:web:frequencyaccess.com#z6Mktjdrv1ZHpSQM2RA5xNj1pmxqUJ2iZ1qzB7t8vHQuWKi4",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "proofValue": "z65f7GjW81cTD47QqpYfvog1obJTbgyEEAH74TJvxBKQbtxBnZyMKanpDSj296TDzpWHmMuCDD32JbQb5v5ctfm4b"
  }
}
```
