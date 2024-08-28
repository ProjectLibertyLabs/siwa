# Request Login URL from Frequency Access

To retrieve a URL to send the user through the authentication loop, your application must first request a new redirect URL for each user from Frequency Access.

## Quick Reference
- Staging-Testnet: `https://testnet.frequencyaccess.com/siwa/api/request`
- Production-Mainnet: `https://www.frequencyaccess.com/siwa/api/request`
- Request Structure: [`SiwaRequest`](../DataStructures/All.md#request)
- Response: 201 Created
  - Header `Location`: Redirect URL for Browser

## Step 1: Create the Payload for Signing

### Parameter: `callback`

When the user has completed the authentication, this is the return URI that will be used.

Appended to the URL will be this parameter:
- `authorizationCode` Used to retrieve the full response payload

The callback url *will maintain* any other URL parameters included.
For example, if you wish to correlate the original unauthorized session with the authorized session, you can generate a dynamic callback url with a parameter with a random UUIDv4 identifier on each request.

### Parameter: `permissions`

These are the Frequency Schema Ids that delegation was requested of the user.

- See a full list of [Available Delegations](../Delegations.md)

## Step 2: Signing the Request

To ensure that the correct application is requesting the authentication and that the response is only sent to the authorized party, the request is signed.
The signature MUST be from one of the [Control Keys]() of the Frequency Provider.

### 2a: Serialize the payload using the [SCALE Codec](https://docs.substrate.io/reference/scale-codec/)

SCALE Type (Note: Order matters!)
```json
{
  "callback": "String",
  "permissions": "Vec<U16>",
}
```


### 2b: Wrap the Payload

So that no payloads can be accidentally used on a chain, the payload is wrapped with a `<Bytes>` tag.

Byte Arrays Concatenated: `[ 60, 66, 121, 116, 101, 115, 62 ] + scale_encoded_payload_bytes + [ 60, 47, 66, 121, 116, 101, 115, 62 ]`

### 2c: Sign the Wrapped Payload Bytes

Sign the serialized payload using Schnorr signatures over ECDSA.


### 2d: Example

Remember that Sr25519 signatures are non-deterministic, so the payload and encoding will match, but the signature will be different.
This example uses the `//Alice` key pair.

- Payload: `{ "callback": "https://localhost:44181", "permissions": [5, 7, 8, 9, 10] }`
- SCALE Payload (Hex): `0x5c68747470733a2f2f6c6f63616c686f73743a34343138311405000700080009000a00`
- Wrapped Payload (Hex): `0x3c42797465733e5c68747470733a2f2f6c6f63616c686f73743a34343138311405000700080009000a003c2f42797465733e`
- Signing Public Key (SS58 Prefix 90): `f6cL4wq1HUNx11TcvdABNf9UNXXoyH47mVUwT59tzSFRW8yDH`
- Signature (Hex): `0x446c32dd524c1f4b06c213891e9e3a025dded43eae55d2df40a766187684ac2704434e1835573077c1abb783b98f3684488e41f8c9bdc359458f9e043ae5cd86`

## Step 3 (Optional): Request Credentials (Email, Phone)

Frequency Access users can provide verified email or phone/SMS to your application when requested and approved by the user.
This is *not* required, and best practice is to only make such a request if it is required for the functioning of the application.

The request MUST be wrapped in `requestedCredentials`.
Supported Options:
- `oneOf`: Requires ONLY one credential from the list
- `anyOf`: Requires one or more credentials from the list
- `allOf`: Requires ALL listed credentials

```json
{
  // ...
  "requestedCredentials": {
    "oneOf": [
      // List of requests here
    ]
  }
}
```

- See a full list of [Available Credentials](../Credentials.md)


## Step 4: Build and Submit the Request

- Build full request structure
- `POST` the data:
  - Staging-Testnet: `https://testnet.frequencyaccess.com/siwa/api/request`
  - Production-Mainnet: `https://www.frequencyaccess.com/siwa/api/request`

### Full Example Request

{{#markdown-embed src/DataStructures/Request.md 0}}

## Step 5: Redirect the User

- Extract the Location header
- Redirect the user's Browser or Embedded Browser (for mobile apps) to the location URL
