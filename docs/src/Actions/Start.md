# Redirect User to Frequency Access

To start the authentication loop, your application will generate a redirect URL for each user.

## Quick Reference

- Staging-Testnet: `https://testnet.frequencyaccess.com/siwa/api/request`
- Production-Mainnet: `https://www.frequencyaccess.com/siwa/api/request`
- Generate Signed Request Payload: [`TODO`](#todo)
- Request Structure: [`SiwaRequest`](../DataStructures/All.md#request)
- Signed Request Structure: [`SiwaSignedRequest`](../DataStructures/All.md#signed-request)

## Step 1: Generate the Signed Request Payload

You *can* generate more than one of these for use simultaneously.
Most applications should generate and keep their needed value(s) static.
The generated signed request payload is secured by the signature included in it, and it is not sensitive data.

### Signed Request Payload Contents

- A signature from one of the [Control Keys](https://docs.frequency.xyz/Identity/ControlKeys.html) of the Frequency Provider
- The domain and path the callback will use
- The requested permissions
- The requested credentials

### Signed Request Payload Generator

TODO: Link or embed this here

### Signed Request Payload Detailed Documentation

For details on the Payload and how it is formed, see the [Reference Documentation](../SignatureGeneration.md).

## Step 2: Build the Redirect URL Parameters

### Parameter: `signedRequest`

The Base64 encoded value from Step 1.

Reminder: This includes the callback domain that will be used.

### Parameter: `callbackUrlParams`

Additional unsigned parameters that will be appended to the callback URL.


## Step 3: Build the Redirect URL

Taking the parameters from the previous step, build a Redirect URL using the correct base:

- Staging-Testnet: `https://testnet.frequencyaccess.com/siwa/login`
- Production-Mainnet: `https://www.frequencyaccess.com/siwa/login`

Frequency Access will send the user back by building the callback URL.
The callback URL will be built with:

- The callback from the `signedRequest`
- Appending the `callbackUrlParams`
- Appending the reserved URL parameter of `authorizationCode`

The callback URL _will maintain_ all non-reserved URL parameters.
For example, if you wish to correlate the original unauthorized session with the authorized session, you can generate a dynamic parameter with a random UUIDv4 identifier on each request.

### Example

- `signedRequest`: `dG9kbw==` // TODO
- `callbackUrlParams`: `uuid=1cf432e2-35f7-4da9-8095-9b27fdd6179b`

Testnet Redirect URL: `https://testnet.frequencyaccess.com/siwa/api/request?signedRequest=dG9kbw%3D%3D&callbackUrlParams=uuid%3D1cf432e2-35f7-4da9-8095-9b27fdd6179b`

## Step 3: Redirect the User

- Redirect the user's Browser or Embedded Browser (for mobile apps) to the Redirect URL.
  - [SafariViewController for iOS](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller)
  - [Chrome Custom Tabs for Android](https://developer.chrome.com/docs/android/custom-tabs/)
