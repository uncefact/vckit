---
id: quickstart
title: Quick Start
---

> TODO: explanatory content

```bash
npm i @vckit/cli -g
```

or

```bash
yarn global add @vckit/cli
```

```bash
vckit -v

# Output
1.0.0-beta
```

```
vckit --help

Options:
  -v, --version      output the version number
  --config <path>    Configuration file (default: "./agent.yml")
  -h, --help         display help for command

Commands:
  did                Decentralized identifiers
  credential         W3C Verifiable Credential
  presentation       W3C Verifiable Presentation
  explore            launch Verifiable Data explorer
  sdr                Selective Disclosure Request
  message            Messages
  execute [options]  Executes agent method
  server [options]   Launch OpenAPI server
  config             Agent configuration
  dev                Plugin developer tools
  help [command]     display help for command

```

```bash
vckit config create
```

```bash
vckit config create --template client
```

```bash
vckit did create --config ./myagent/agent.yml

vckit did create
```
