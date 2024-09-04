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
}
```
