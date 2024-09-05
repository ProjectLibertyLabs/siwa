# Credentials

## Request Structure

The request is a an array that is treated as an `allOf`.
Supported Options:

- `oneOf`: Requires ONLY one credential from the list
- `anyOf`: Requires one or more credentials from the list
- `allOf`: Requires ALL listed credentials

### Example Request

This is a common request: one verified contact method and access to the graph encryption key.

```json
[
  {
    "type": "VerifiedGraphKeyCredential",
    "hash": ["multihash_of_private_key_schema_file"]
  },
  {
    "anyOf": [
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
]
```

## Available Credentials

Each request also has a multiformat hash of the schema file to ensure the correct verification document is requested.
Below is the official types and multihashes to use.

### Graph Key

```json
{
  "type": "VerifiedGraphKeyCredential",
  "hash": ["multihash_of_private_key_schema_file"]
}
```

### Email

```json
{
  "type": "VerifiedEmailAddressCredential",
  "hash": ["multihash_of_email_schema_file"]
}
```

### Phone/SMS

```json
{
  "type": "VerifiedPhoneNumberCredential",
  "hash": ["multihash_of_phone_schema_file"]
}
```
