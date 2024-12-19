<p align="center">
  <a href="https://ethfollow.xyz" target="_blank" rel="noopener noreferrer">
    <img width="275" src="./public/logo.png" alt="Ethereum Identity Kit logo" />
  </a>
</p>

<p align="center">
  <a href="https://pr.new/ethereumfollowprotocol/app"><img src="https://developer.stackblitz.com/img/start_pr_dark_small.svg" alt="Start new PR in StackBlitz Codeflow" /></a>
  <a href="https://discord.com/invite/ZUyG3mSXFD"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord" alt="discord chat" /></a>
  <a href="https://x.com/ethidkit"><img src="https://img.shields.io/twitter/follow/ethidkit?label=%40ethidkit&style=social&link=https%3A%2F%2Fx.com%2Fethidkit" alt="x account" /></a>
  <a href="https://github.com/ethereumidentitykit/identity-kit"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" alt="code style: prettier" /></a>
  <a href="https://docs.ethidentitykit.com"><img src="https://img.shields.io/badge/docs-ethidentitykit.com-blue?style=flat-square" alt="docs" /></a>
</p>

<h1 align="center" style="font-size: 2.75rem; font-weight: 900;">Ethereum Identity Kit Documentation</h1>

## Overview

Ethereum Idenity Kit documentation.

## Important Links

- **Follow us on 𝕏**: [@efp](https://x.com/ethidkit)
- **Join our Discord**: [Discord](https://discord.ethfollow.xyz)
- **Ethereum Identity Kit**: [ethereum-identity-kit](https://github.com/ethereumidentitykit/ethereum-identity-kit)

## Getting started with development

### Prerequisites

- [Node.js LTS](https://nodejs.org/en) (LTS which is currently 20.x)
- [Bun runtime](https://bun.sh/) (latest version)

### Installation

```bash
git clone https://github.com/ethereumidentitykit/docs.git && cd app
```

> [!NOTE]
> If vscode extensions behave weirdly or stops giving type hints, run ⌘+⇧+P and type `> Developer: Restart Extension Host` to restart the extension host.

```bash
# upgrade bun to make sure you have the latest version
bun upgrade
# then install all dependencies
bun install
```

### Environment Variables

copy the .env.example file and fill in the values.

```bash
cp .env.example .env
```

Now you should be able to run the following without getting any errors:

```bash
bun lint && bun format && bun typecheck && bun run build
```

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](./.github/CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

## Contact

For any inquiries, please contact the project maintainer at [encrypted@ethfollow.xyz](mailto:encrypted@ethfollow.xyz).

---

Follow [**@ethidkit**](https://x.com/ethidkit) on **𝕏** for updates and join the [**Discord**](https://discord.ethfollow.xyz) to get involved.

This README provides a comprehensive overview of the Ethereum Identity Kit Documentation, including setup instructions, important links, and contribution guidelines. Feel free to reach out if you have any questions or need further assistance.
