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
      "algo": "SR25519",
      "encoding": "base16",
      "encodedValue": "0x446c32dd524c1f4b06c213891e9e3a025dded43eae55d2df40a766187684ac2704434e1835573077c1abb783b98f3684488e41f8c9bdc359458f9e043ae5cd86"
    },
    "payload": {
      "callback": "https://localhost:44181",
      "permissions": [5, 7, 8, 9, 10]
    }
  },
  "requestedCredentials": {
    "oneOf": [
      {
        "type": "VerifiedEmailAddressCredential",
        "hash": ["multihash_of_email_schema_file"]
      },
      {
        "type": "VerifiedPhoneNumberCredential",
        "hash": ["multihash_of_phone_schema_file"]
      }
    ]
  }
}
```
