# Available Credentials

Each request also has a multiformat hash of the schema file to ensure correct verification document is requested.
Below is the official type and multihash to use.

## Graph Key
```json
{
  "type": "VerifiedGraphKeyCredential",
  "hash": ["multihash_of_private_key_schema_file"]
}
```

## Email
```json
{
  "type": "VerifiedEmailAddressCredential",
  "hash": [ "multihash_of_email_schema_file" ]
}
```

## Phone/SMS
```json
{
  "type": "VerifiedPhoneNumberCredential",
  "hash": [ "multihash_of_phone_schema_file" ]
}
```
