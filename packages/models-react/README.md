# @mittwald/api-models-react

React bindings for [`@mittwald/api-models`](../models), the domain-model layer
over `@mittwald/api-client`.

The core package is framework-agnostic and SSR-safe; everything React-specific
lives here. The dependency runs one way, react → core
([ADR-0002](../models/docs/adr/0002-agnostic-core-two-packages.md)).

## Usage

Every model has a matching Ghost — a Suspense-integrated, lazily resolving proxy
built with
[`@mittwald/react-ghostmaker`](https://github.com/mittwald/react-ghostmaker):

```tsx
import { CustomerGhost, ProjectGhost } from "@mittwald/api-models-react";

const customer = CustomerGhost.ofId(customerId).use();
const projects = ProjectGhost.query({ customer }).execute().use().items;
```

Call `.getCommon().use()` or `.getDetailed().use()` inside a component to get a
live instance. A resolved Ghost supports the underlying model's own instance
methods directly — there is nothing to unwrap.

## Initialization

Initialize the core package once at startup, as described in its
[README](../models/README.md#initialization). This package needs no separate
setup.

## Peer dependencies

`react` and `@tanstack/react-query` are peers — the consumer provides them.
