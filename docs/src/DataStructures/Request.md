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
      "encodedValue": "0x7c1840b83c3fbfaf144a2ccf7d6c92a6f3379d851d9082b8dc81e5b12d2926388536272c14e49dab6c79367762d27b5a70ba0cbc9f604cd7d32ecd3d58e2f182"
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
            "bciqe4qoczhftici4dzfvfbel7fo4h4sr5grco3oovwyk6y4ynf44tsi"
          ]
        },
        {
          "type": "VerifiedPhoneNumberCredential",
          "hash": [
            "bciqjspnbwpc3wjx4fewcek5daysdjpbf5xjimz5wnu5uj7e3vu2uwnq"
          ]
        }
      ]
    },
    {
      "type": "VerifiedGraphKeyCredential",
      "hash": [
        "bciqmdvmxd54zve5kifycgsdtoahs5ecf4hal2ts3eexkgocyc5oca2y"
      ]
    }
  ]
}
```
