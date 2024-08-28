```json
{
  "name": "VerifiedPhoneNumberCredentialSchema",
  "schema": {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "VerifiedPhoneNumberCredential",
    "type": "object",
    "properties": {
      "credentialSubject": {
        "type": "object",
        "properties": {
          "phoneNumber": {
            "type": "string",
            "pattern": "^\\+[1-9]\\d{1,14}$"
          },
          "lastVerified": {
            "type": "string",
            "format": "date-time"
          }
        },
        "required": ["phoneNumber", "lastVerified"]
      }
    }
  }
}
```
