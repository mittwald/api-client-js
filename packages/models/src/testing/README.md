# `@mittwald/api-models` test harness

Utilities for unit-testing models by injecting fake **behaviors** into the
`config.behaviors` registry — the single seam through which every model reaches
the API. Tests exercise model logic (construction from data, derived getters,
guards, delegation) while treating the `api.ts` mapping layer as the boundary
rather than re-testing it. See ADR-0005 for the rationale.

This code lives here publish-ready; the `@mittwald/api-models/testing` export is
decided later (P0-4). Until then it is imported only via relative paths from
tests.

## What it gives you

- `installBehaviors(partial)` — writes partial fake behaviors onto the
  registry's Proxy target. Pass only the domains and methods a test touches.
  Repeated calls merge onto the domain already installed.
- `resetBehaviors()` — removes every installed behavior, restoring the
  registry's fail-fast state (accessing an uninstalled behavior throws the "is
  not initialized" error again).
- `buildXData(overrides?)` — typed fixture builders per `*Data` type, with
  sensible defaults and shallow overrides. `buildContainerData` is the first
  one; add more lazily as tests need them.

No `MittwaldAPIV2Client` fake, no `vi.mock` — behaviors are the boundary. Tests
run under vitest in the default `node` environment.

## Per-file isolation

The `config` object is a module singleton. Reset it after every test so state
cannot leak between tests and test order stays irrelevant. Put this at the top
of every test file that installs behaviors:

```ts
import { afterEach } from "vitest";
import { resetBehaviors } from "../testing/index.js";

afterEach(resetBehaviors);
```

Isolation is wired per file (not via a global setup file) until `models` becomes
its own package with its own vitest config (P0-4).

## Example

```ts
import { afterEach, expect, test, vi } from "vitest";
import { config } from "../config/config.js";
import {
  buildContainerData,
  installBehaviors,
  resetBehaviors,
} from "../testing/index.js";

afterEach(resetBehaviors);

test("Container.find delegates to the container behavior", async () => {
  const find = vi.fn().mockResolvedValue(buildContainerData({ id: "c-1" }));
  installBehaviors({ container: { find } });

  const result = await config.behaviors.container.find("c-1", "s-1");

  expect(find).toHaveBeenCalledWith("c-1", "s-1");
  expect(result?.id).toBe("c-1");
});
```

The registry/init contract itself (fail-fast before install → resolves after
`installBehaviors` → fail-fast again after `resetBehaviors`) is covered end to
end in `registryContract.test.ts`, which also serves as the reference for the
`afterEach(resetBehaviors)` pattern.
