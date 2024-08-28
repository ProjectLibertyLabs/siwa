```json
{
  "name": "VerifiedEmailAddressCredentialSchema",
  "schema": {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "VerifiedEmailAddressCredential",
    "type": "object",
    "properties": {
      "credentialSubject": {
        "type": "object",
        "properties": {
          "emailAddress": {
            "type": "string",
            "format": "email"
          },
          "lastVerified": {
            "type": "string",
            "format": "date-time"
          }
        },
        "required": ["emailAddress", "lastVerified"]
      }
    }
  }
}
```
