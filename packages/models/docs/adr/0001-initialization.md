---
status: accepted
---

# Initialization via `initApiModels`

The models used to wire themselves up through a side-effect import
(`import "./config/behaviors/api"`) into a registry pre-filled with
`undefined as unknown as XBehaviors` — reaching into the consumer's globals and
failing at runtime (not compile time) when unwired. Instead, the consumer calls
an explicit `initApiModels({ apiClient, … })` once at startup, which populates an
encapsulated registry and fails clearly if a behavior is accessed before init.
The app-specific dependencies (`apiClient`, API URLs, optionally `isEmployee`)
are parameters of `initApiModels`.

## Considered Options

- **Global default via `initApiModels` (chosen).** The static entry points
  (`Server.find`, `server.getContract()`) stay unchanged. Viable because auth is
  cookie-based (`withCredentials`), so the `apiClient` carries no per-user secret
  and a global singleton is not a client-side correctness bug.
- **Instance-based context (`createApiModels()`), no globals.** The cleanest DI
  and true multi-client capability, but every static usage would move to
  instance/context access, and there is no current need for multiple concurrent
  clients. The instance-based hybrid (a global default *plus* explicitly
  instantiable clients) stays open as a later extension, without breaking the
  default ergonomics.
- **Consumer supplies `behaviors`.** Maximum flexibility but boilerplate for the
  common case. Rejected.
