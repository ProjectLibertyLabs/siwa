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
      "encodedValue": "0x2a10f099cc914126f91aae93e3c9c90f3f1bf01b79a33fd74a8ea05fd4939604ed154ca5fa8c0e51cf7ccfd8d4a452ec19ea8d6a5bee215ef060d2d60fd7f486"
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
