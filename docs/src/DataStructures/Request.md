```json
{
  "requestedSignatures": {
    "publicKey": {
      "encodedValue": "f6cL4wq1HUNx11TcvdABNf9UNXXoyH47mVUwT59tzSFRW8yDH",
      "encoding": "base58",
      "format": "ss58",
      "type": "Sr25519"
    },
    "signature": {
      "algo": "Sr25519",
      "encoding": "base16",
      "encodedValue": "0x8ac71cb992be24e91d4ce61b83a0cc48010cfeacd328dd391c23472e4f094e7c0fbb58cf773a7c1665d815d9902c98fdd7ef822a6c5930bcad0412f0c4f8268f"
    },
    "payload": {
      "callback": "http://localhost:3000",
      "permissions": [
        5,
        7,
        8,
        9,
        10
      ]
    }
  },
  "requestedCredentials": [
    {
      "anyOf": [
        {
          "type": "VerifiedEmailAddressCredential",
          "hash": [
            "multihash_of_email_schema_file"
          ]
        },
        {
          "type": "VerifiedPhoneNumberCredential",
          "hash": [
            "multihash_of_phone_schema_file"
          ]
        }
      ]
    },
    {
      "type": "VerifiedGraphKeyCredential",
      "hash": [
        "multihash_of_private_key_schema_file"
      ]
    }
  ]
}
```
