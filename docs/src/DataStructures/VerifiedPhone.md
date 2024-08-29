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
    "id": "did:key:z6QNzHod3tSSJbwo4e5xGDcnsndsR9WByZzPoCGdbv3sv1jJ",
    "phoneNumber": "+01-234-867-5309",
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
```
