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
      "encodedValue": "0xf68e3ce3723353df512352065a3f3626dd69128f2c42cffd34b020a57bcc127eab63d72c842c8a0bb4ca254cc8962706eb340d34323b54d14336a72dd919ac83"
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
