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
      "encodedValue": "0xeced40e61ff552a9d09a4990f26058292073d26baf39f20a71def3d07a63a212fd7737473bc725c1629c95771f52ced12537f1176a41ed21530c7d3046403887"
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
