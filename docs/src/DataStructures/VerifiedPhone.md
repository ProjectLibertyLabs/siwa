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
    "id": "did:key:z6QNucQV4AF1XMQV4kngbmnBHwYa6mVswPEGrkFrUayhttT1",
    "phoneNumber": "+01-234-867-5309",
    "lastVerified": "2024-08-21T21:27:59.309+0000"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "verificationMethod": "did:web:frequencyaccess.com#z6MkofWExWkUvTZeXb9TmLta5mBT6Qtj58es5Fqg1L5BCWQD",
    "cryptosuite": "eddsa-rdfc-2022",
    "proofPurpose": "assertionMethod",
    "proofValue": "z3NsdGe93oVTiguenKkidg6DQp2JY8ioeeQr5UviNbWHYmM5RxNnAJAndKBNznEwnJDDYwFu9TP2tcFoNZmJ49RMF"
  }
}
```
