# Quick Start with JavaScript

This quick start uses the `@projectlibertylabs/siwa` NPM package to quickly generate the request and validate the response from Frequency Access.

## Installation

Install the NPM package.
This package is both CommonJS, ES Module, and TypeScript compatible.
TypeScript will be shown for the examples.

`npm i @projectlibertylabs/siwa`

## Step 1: Generate the Request

This is the only step that _must_ take place on a secure backend server with access to the private key of one of the Control Keys for the Frequency Provider Account.

```typescript
import * as siwa from "@projectlibertylabs/siwa";

async function startLogin() {
  // This is the URI of a key. Usually just a seed phrase, but also supports test accounts such as `//Alice` or `//Bob`
  const providerKeyUri: string = getProviderKeyUriSecret();

  // This is the URI that the user should return to after authenticating with Frequency Access
  const callbackUri: string = getWebOrApplicationCallbackUri();

  // The list of Frequency Schemas Ids that you are requesting the user delegate.
  // See a full reference: https://projectlibertylabs.github.io/siwa/Delegations.html
  // This example is for Graph Only
  const permissions: number[] = [7, 8, 9, 10];

  // List of Credentials, either via their type or full type, hash object
  // See a full reference: https://projectlibertylabs.github.io/siwa/Credentials.html
  // One or more of these will be returned
  const anyOfCredentials = ["VerifiedEmailAddressCredential", "VerifiedPhoneNumberCredential"];

  // Options with endpoint selection
  // Endpoint may be tagged or specified in full
  const options = { endpoint: "production" };
  // Staging-Testnet Options
  // const options = { endpoint: 'staging' };

  const redirectUrl = await siwa.getRedirectUrl(providerKeyUri, callbackUri, permissions, anyOfCredentials, options);

  // Send the `redirectUrl` to the client.
}
```

## Step 2 (Web): Forward the User to a Browser

For website interactions, just forward the user to the returned `redirectUrl`.

## Step 2 (Android/iOS): Forward the User to an Embedded Browser

For mobile applications, it is recommended to use an embedded browser and set the `callbackUri` to your application's Universal Link. This ensures that the user remains within the application environment and does not have to leave the app.

For more details, refer to the official documentation:

- [SafariViewController for iOS](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller)
- [Chrome Custom Tabs for Android](https://developer.chrome.com/docs/android/custom-tabs/)

## Step 3: Callback Processing

```typescript
import * as siwa from "@projectlibertylabs/siwa";

async function handleCallback(incomingUrl: string) {
  // Extract the `authorizationCode` from the URL
  const url = new URL(incomingUrl);
  const authorizationCode = url.searchParams.get("authorizationCode");

  // Same options as before
  const options = { endpoint: "production" };

  // Exchange the `authorizationCode` for the result
  const result = await siwa.getLoginResult(authorizationCode, options);

  if (siwa.hasChainSubmissions(result)) {
    // Add your own logic for handling the submission to the chain
    await processSubmissions(result.payloads);
  }

  if (result.credentials) {
    // Add your own logic for processing credentials
    await processCredentials(result.credentials);
  }

  // Get the ss58 encoded key that identifies this session
  // It is also the control key for the user's constant MSA Id
  const userKey = result.userPublicKey.encodedValue;

  // Add your own logic for session managment
  startSession();
}
```

## Step 4: Session Starts

You now have a logged in user!
Assuming the chain submissions are complete, you also have:

- A consistent identifier, i.e. the MSA Id
- A universal handle (If the user set one)
- A public delegation between the user's MSA Id and your Provider Id on chain (revokable at any time by you or the user independently)

And if requested:

- Access to the user's private graph
- Permission to act on the user's behalf for delegated actions
- Verified email or phone/SMS number for the user

<div class="warning">
Note: You may start the user’s session and process the submissions in the background, however some data such as the consistent identifier, the MSA Id or full handle with suffix may not be accessible until the processing is complete.
</div>
