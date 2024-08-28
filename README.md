# Sign In With Access Docuemntation & Tools

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
- [🚀 Quick Resources](#-quick)
- [💻 Prerequisites](#-prerequisites)
- [🛠 Libraries](#-libraries)
- [⚙️ Development](#-development)
- [🔍 Arch Map](#-arch-maps)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)

<!-- PROJECT DESCRIPTION -->

# 📖 Sign In With Access<a name="about-project"></a>

Sign In With Access (SIWA) is the developer documentation and toolset to integrate with [Frequency Access](https://frequencyaccess.com), an easy to use custodial social wallet for users on Frequency.

## 🚀 Quick Resources<a name="-quick"></a>

- [Frequency Access Home Page](https://frequencyaccess.com)
- [Frequency Access Swagger/Open API Docs](https://testnet.frequencyaccess.com/webjars/swagger-ui/index.html)
- [Frequency Documentation](https://docs.frequency.xyz)
- [Frequency on GitHub](https://github.com/frequency-chain/frequency)
- [Frequency Provider Dashboard](https://provider.frequency.xyz)
- [Sign In With Frequency](https://github.com/ProjectLibertyLabs/siwf) (Onboarding tool that supports both Frequeqency Access and other wallets)

<p align="right">(<a href="#-table-of-contents">back to top</a>)</p>

## 💻 Prerequisites<a name="-prerequisites"></a>

Using Sign In With Access requires:

- Frequency Provider setup
- Frequency Node RPC access

<p align="right">(<a href="#-table-of-contents">back to top</a>)</p>

## 🛠 Libraries<a name="-libraries"></a>

These libraries can help make integrating with SIWA easier, but are not required.

### JavaScript/TypeScript

The NPM package `@projectlibertylabs/siwa` offers both X and Y.

1. Install the SIWA package `npm i @projectlibertylabs/siwa`

2. Import the `??` and `??` functions

3. ??

<p align="right">(<a href="#-table-of-contents">back to top</a>)</p>

https://github.com/ProjectLibertyLabs/custodial-wallet/blob/main/docs/siwa/contract.md
I removed the sessionId from the call to resolve the payloads, I had mentioned it to Bogu on Tuesday, it's a leak of sensitive information that shouldn't be leaked. The authorizationCode is all you need to send to get the SIWA response stuff, as you can see here

https://testnet.frequencyaccess.com/webjars/swagger-ui/index.html#/siwa-api-controller/retrievePayload.

https://github.com/ProjectLibertyLabs/custodial-wallet/blob/main/docs/siwa/phase1/integration_diagram.svg

Also, the example SCALE object that we are using for our verifying the SIWA Request can be found here https://github.com/ProjectLibertyLabs/custodial-wallet/blob/main/app/src/main/java/io/amplica/custodial_wallet/orchestration/ScaleSiwaPayload.java



https://testnet.frequencyaccess.com/webjars/swagger-ui/index.html

## ⚙️ Development<a name="-development"></a>

### Documentation

Documentation is written in [CommonMark Markdown](https://rust-lang.github.io/mdBook/format/markdown.html) and converted to HTML via [mdBook](https://rust-lang.github.io/mdBook/).

#### Prerequisites

- [mdBook](https://rust-lang.github.io/mdBook/)
  - Cargo: `cargo install mdbook`
  - Mac Brew `brew install mdbook`
  - Binaries: [Download Release](https://github.com/rust-lang/mdBook/releases)
- [Node.js v20+](https://nodejs.org)

#### Local Development

- Serve the HTML locally and watch for changes: `mdbook serve` or `mdbook serve -p <port, default 3000>`
- For style edits see: [`docs/css/extended.css`](./docs/css/extended.css)
- For changes to the custom preprocessor see: [`docs/preprocessor.mjs`](./docs/preprocessor.mjs)

#### Deployment

The documentation is deployed to GitHub Pages automatically on merge to `main` branch.

### Library: JavaScript

TODO...

<!-- CONTRIBUTING -->

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

- [Contributing Guidelines](./CONTRIBUTING.md)
- [Open Issues](https://github.com/ProjectLibertyLabs/siwa/issues)

<p align="right">(<a href="#-table-of-contents">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License

This project is [Apache 2.0](./LICENSE) licensed.

<p align="right">(<a href="#-table-of-contents">back to top</a>)</p>
