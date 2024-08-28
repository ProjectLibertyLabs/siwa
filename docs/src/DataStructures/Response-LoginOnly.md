```json
{
  "userPublicKey": {
    "encodedValue": "f6cL4wq1HUNx11TcvdABNf9UNXXoyH47mVUwT59tzSFRW8yDH",
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
      "type": "login",
      "payload": {
        "message": "localhost wants you to sign in with your Frequency account:\n5Fghb4Wt3sg9cF6Q2Qucp5jXV5pL2U9uaYXwR9R8W8SYe9np\n\nThe domain localhost wants you to sign in with your Frequency account via localhost\n\nURI: http://localhost:5173/signin/confirm\nNonce: N6rLwqyz34oUxJEXJ\nIssued At: 2024-03-05T23:18:03.041Z\nExpiration Time: 2024-03-05T23:23:03.041Z"
      }
    },
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
