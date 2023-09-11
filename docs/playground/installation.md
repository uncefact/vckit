---
id: installation
title: Installation
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Prerequisites

Before installing VC-Kit, ensure that you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/en/) (version 18)
- [pnpm](https://pnpm.io/) (version 8.6.0)

## Installation

### Install the VC-Kit CLI

The easiest way to play with VC-Kit is to use the VC-Kit CLI. To install the CLI through npm or yarn, run the following command:

```bash
npm i @vckit/cli -g

or

yarn global add @vckit/cli
```

Or you can install from the source code by running the following command:

```bash
git clone git@github.com:uncefact/project-vckit.git project-vckit && cd project-vckit

# Install the dependencies
pnpm install

# Build
pnpm build

# Install the CLI globally
cd packages/cli && npm install -g .
```

Set the configuration for the VC-Kit CLI by running the following command:

```bash
vckit config create
```

This command will create an agent.yml file that will get used next time you invoke a CLI command in this folder. You can get more details about the configuration file [here](/docs/cli/quickstart).

### Start the server

The VC-Kit server is a Node.js application that exposes the VC-Kit's functionality through a REST API for playing with the VC-Kit. To start the server, run the following command:

```bash
vckit server
```

### Install and start the explorer

The VC-Kit explorer is a web application that allows you to interact with the VC-Kit through the Agent Schema API, which is a REST API that exposes the VC-Kit's functionality. To install the explorer, run the following command:

You can skip this step if you have installed the VC-Kit CLI from the source code.

```bash
# Clone the VC-Kit repository and direct to the explorer directory
git clone git@github.com:uncefact/project-vckit.git project-vckit && cd project-vckit/packages/demo-explorer

# Install the dependencies
pnpm install
```

```bash
# Create a .env file in the explorer directory
cp .env.example .env

# Start the explorer
pnpm dev
```

The explorer will be available at [http://localhost:3000](http://localhost:3000). When you start the explorer, that will automatically connect to the VC-Kit server via the Agent Schema API that is exposed when you start the server. So, make sure that you have started the server before starting the explorer.
