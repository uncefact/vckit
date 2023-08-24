---
id: quickstart
title: Quickstart
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

After you have installed the VC-Kit CLI and started the server and the explorer, you can start playing with the VC-Kit by following the steps below:

- [Create an identifier.](#create-an-identifier)
- [Issue a credential.](#issue-a-credential)
- [Revoke the credential.](#revoke-the-credential)
- [Verify the credential.](#verify-the-credential)

## Create an identifier

Decentralized identifiers (DIDs) are a new type of identifier that enables verifiable, decentralized digital identity. DIDs are fully under the control of the DID subject, independent from any centralized registry, identity provider, or certificate authority. DIDs are URLs that relate a DID subject to means for trustable interactions with that subject. DIDs resolve to DID documents — simple documents that describe how to use that specific DID. Each DID document contains at least three things: cryptographic material, authentication suites, and service endpoints. DIDs enable the controller of a DID to prove control over it and to prove other claims about itself.

Currently, the VC-Kit support 2 DID methods: `did:key` and `did:web`. The `did:key` method is a DID method that uses a base58-encoded public key as the DID document identifier. The `did:web` method is a DID method that uses a domain name as the DID document identifier.

### Create a `did:key` identifier

To create a DID key,

- Go to the Managed identifiers page in the explorer and click the Create New Identifier button
- Select the `did:key` method on Identifier Provider and fill the alias field with a name for your identifier
- Click the Create button to create the identifier.
- The new `did:key` identifier will be created and displayed on the Managed identifiers page.

### Create a `did:web` identifier

To create a DID web, you need to provide the did document of the DID web. The did document is a JSON-LD document that contains the DID web information. And the did document must be hosted on the website in the following format `https://<domain>/.well-known/did.json`.

For example, if you want to create a `did:web` identifier for the domain `example.com`, you need to host the did document on `https://example.com/.well-known/did.json`.

```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/suites/jws-2020/v1"
  ],
  "id": "did:web:example.com",
  "verificationMethod": [
    {
      "id": "did:web:example.com#ed67bfcfef7867cce56e9a7ed6ab09bcf01bb7041d590280fee2ffb335cde647-key-0",
      "type": "JsonWebKey2020",
      "controller": "did:web:example.com",
      "publicKeyJwk": {
        "kty": "OKP",
        "crv": "Ed25519",
        "x": "7We_z-94Z8zlbpp-1qsJvPAbtwQdWQKA_uL_szXN5kc"
      }
    },
    {
      "id": "did:web:example.com#ed67bfcfef7867cce56e9a7ed6ab09bcf01bb7041d590280fee2ffb335cde647-key-1",
      "type": "JsonWebKey2020",
      "controller": "did:web:example.com",
      "publicKeyJwk": {
        "kty": "OKP",
        "crv": "X25519",
        "x": "51Rf8tSypfzNAfiHpDEJqYquve41jMonDF8NdJ1QGXY"
      }
    }
  ],
  "authentication": [
    "did:web:example.com#ed67bfcfef7867cce56e9a7ed6ab09bcf01bb7041d590280fee2ffb335cde647-key-0",
    "did:web:example.com#ed67bfcfef7867cce56e9a7ed6ab09bcf01bb7041d590280fee2ffb335cde647-key-1"
  ],
  "assertionMethod": [
    "did:web:example.com#ed67bfcfef7867cce56e9a7ed6ab09bcf01bb7041d590280fee2ffb335cde647-key-0",
    "did:web:example.com#ed67bfcfef7867cce56e9a7ed6ab09bcf01bb7041d590280fee2ffb335cde647-key-1"
  ],
  "keyAgreement": [],
  "service": []
}
```

In the other hand, you can use the generic DID document that is hosted on your `localhost` server. But it needs to enable `https` for your `localhost` server, because the resolver only accept the `https`. To do that, you can use the [ngrok](https://ngrok.com/)

```bash
# Start the ngrok for your localhost server on port 3332 (default port of the VC-Kit server)
ngrok http 3332
# The ngrok will generate the https url for your localhost server
# For example: https://e3b0c442.ngrok.io
```

When you have the https url for your localhost server, you can use it to create the `did:web` identifier.

- Go to the Managed identifiers page in the explorer and click the Create New Identifier button
- Select the `did:web` method on Identifier Provider and fill the alias field with the domain name of your did document, for example: `example.com`, if you use the generic did document, you can copy your ngrok domain and paste it to the alias field (e.g. `e3b0c442.ngrok.io`).
- Click the Create button to create the identifier.
- The new `did:web` identifier will be created and displayed on the Managed identifiers page.

## Issue a credential

When you have the identifier, you can issue a credential with the issuer is your identifier.

- Go to the Issue credential from example page in the explorer that is a sub menu of the Credential issuer menu.
- Select the Sample Document, example: `UniversityDegreeCredential` and fill the fields.
- Select the Proof Format, there are 2 options: `JWT` and `JSON-LD Signature`.
- Select the Issuer that you created before.
- Click the Issue button to issue the credential.

That will take a while to issue the credential, then the credential will be displayed on the Credentials page.

## Revoke the credential

You can revoke the credential that you issued before. To revoke the credential,

- Go to the Credentials page in the explorer.
- Select the credential that you want to revoke and go to the Info tab.
- Click the Revoke button to revoke the credential when the credential is active.
- Or click the Unrevoke button to unrevoke the credential when the credential is revoked.

## Verify the credential

You can verify the credential that you issued before or the credential was issued on the other VC system. Currently, the VC-Kit support 2 verification methods: `JWT` and `JSON-LD Signature`. So the credential should be issued with one of these methods.

To verify the credential,

- Go to the Credential verifier page in the explorer.
- Upload the credential that you want to verify or paste the credential in the text field. If you want to verify the credential that was issued by the VC-Kit, you can go to the Credentials page, select your credential and click the Download button to download the credential.

The verify process will take a while, then the result will be displayed on the page.
