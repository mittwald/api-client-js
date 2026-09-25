# Implementation patterns

Small, recurring code idioms used throughout `@mittwald/api-models`. This is a
contributor reference for the low-level building blocks — the _how_, not the
_why_ of the architecture. For the architecture and vocabulary see
[README.md](../README.md) and [CONTEXT.md](../CONTEXT.md); for the larger
decisions see [docs/adr/](adr/).

When you add a model, reach for these idioms rather than reinventing them. Each
section gives the real signature, what it is for, and representative call sites.

## `extractId` — accept an id **or** a model

Most APIs need a bare id string, but callers usually already hold a model.
`extractId` normalizes "id string **or** reference" down to the id, so public
methods can take the ergonomic `ReferenceModel | string` shape without every
call site branching. The overloads preserve `undefined` when the input is
optional.

```ts
export function extractId(from: ReferenceModel | string): string;
export function extractId(
  from: ReferenceModel | string | undefined,
): string | undefined;
export function extractId(from?: ReferenceModel | string): string | undefined {
  if (from === undefined) return;
  if (typeof from === "string") return from;
  return from.id;
}
```

Used in: `base/lib/extractId.ts`, `order/Order/Request/DomainOrderRequest.ts`
(`projectId: extractId(project)`), `app/AppInstallation/AppInstallation.ts`,
`mail/MailAddress/MailAddress.ts`.

## `required(value)` — fail fast on missing values

A thin wrapper over `tiny-invariant` that asserts a value is neither `null` nor
`undefined` and narrows the type. Use it to turn an optional into a non-optional
at the exact point where absence is a programming error, with a readable
message.

```ts
export function required<T>(
  value: T | undefined | null,
  valueType = "value",
): T {
  invariant(
    value !== undefined && value !== null,
    `Expected ${valueType} not to be undefined`,
  );
  return value;
}
```

Used in: `base/lib/required.ts`, `invoice/InvoiceItem/ServicePeriod.ts`,
`marketplace/ExtensionInstance/ExtensionInstanceContext.ts`.

## `assertObjectFound` + `ObjectNotFoundError` — the find/get convention

The package follows a **`find` returns `undefined` / `get` throws** convention.
`findX` performs the lookup and may return `undefined`; `getX` wraps it with
`assertObjectFound`, which throws a typed `ObjectNotFoundError` (carrying the
model type name and the reference) when nothing was found. This keeps the
optional-vs-throwing distinction uniform across every model.

```ts
export default function assertObjectFound<T>(
  obj: T | undefined,
  type: Class<unknown>,
  refIdOrObject: string | ReferenceModel,
): asserts obj is T {
  /* throws ObjectNotFoundError when obj === undefined */
}
```

```ts
// container/Container/Container.ts
public static async find(id: string, stackId: string) {
  const data = await config.behaviors.container.find(id, stackId);
  if (data) return new ContainerDetailed(data);
}

public static async get(id: string, stackId: string) {
  const container = await Container.find(id, stackId);
  assertObjectFound(container, Container, id);
  return container;
}
```

Used pervasively (~67 call sites): `base/lib/assertObjectFound.ts`,
`errors/ObjectNotFoundError.ts`, `container/Container/Container.ts`,
`server/Server/Server.ts`, `project/Project/Project.ts`.

## `create()` — return a reference to the created resource

The write-side counterpart to `find`/`get`. A static `create(...)` sends the
request through its behavior and returns a **reference** built from the id the
API echoes back (`new X(response.id)`), never the raw `*Data`. The caller gets
something it can immediately hydrate (`getDetailed()`) or act on, without a
second round-trip just to learn the id.

```ts
// access/SshUser/SshUser.ts
public static async create(project: Project, data: SshUserCreateRequestData) {
  const response = await config.behaviors.sshUser.create(project.id, data);
  return new SshUser(response.id); // a reference, not `response`
}
```

Two deliberate departures — **not** inconsistencies — because the created
resource carries data that exists **only at creation time** and can never be
re-fetched from a reference:

- **`ApiToken.create` returns the token secret `string`.** The plaintext token
  is shown once and is never retrievable again, so the behavior is typed
  `Promise<string>` and the model passes it straight through
  (`user/ApiToken/ApiToken.ts`; the create-token modal displays it once).
- **`LeadsExport.create` returns the generated export**
  (`{ exportId, base64FileContent } | { errorType, … } | undefined`). It is
  really an export _action_ whose file content and error discrimination are the
  payload, not a resource you would later look up
  (`fyndr/LeadsExport/LeadsExport.ts`).

Operations with nothing meaningful to surface return `void` (`user/Feedback`,
`user/SshKey`, `fyndr/FinderProfileRequest`). Reserve the raw-payload shape for
these genuine "only available now" cases; otherwise return a reference.

A model's **primary** creator is the bare `create()`; a second, differently
shaped way to create the same entity gets a descriptive name alongside it
(`MailAddress.create` for a mailbox + `MailAddress.createForward` for a forward;
`DnsZone.create` + the instance `createSubZone`). `createXy` names are otherwise
reserved for **relational** creators that build a _different_ entity from a
parent context (`Project.createMySql`, `Project.createContainer`, …) and for
sub-resource/action creators (`Backup.createExport`, `Domain.createAuthCode`,
`*.createUploadToken`) — those never collapse to `create()`.

Used in: `access/SshUser/SshUser.ts`, `database/Redis/Redis.ts`,
`app/AppInstallation/AppInstallation.ts`,
`project/ProjectInvite/ProjectInvite.ts` (reference);
`user/ApiToken/ApiToken.ts`, `fyndr/LeadsExport/LeadsExport.ts` (payload);
`user/Feedback/Feedback.ts` (void).

## `assertInstanceOf` and the `BaseModel` type guards

`BaseModel` exposes a trio of runtime type helpers built on `assertInstanceOf`
(itself a `tiny-invariant` wrapper). They let calling code narrow a reference to
a concrete subclass — `assertType` throws, `asType` throws-and-returns,
`isOfType` is a boolean type guard. This is the idiomatic way to go from a
`ReferenceModel` to, say, its `Detailed` variant.

```ts
// base/models/BaseModel.ts
public assertType<T>(type: T): asserts this is InstanceType<T> { … }
public asType<T>(type: T): InstanceType<T> { this.assertType(type); return this; }
public isOfType<T>(type: T): this is InstanceType<T> { return this instanceof type; }
```

Used in: `base/models/BaseModel.ts`, `base/lib/assertInstanceOf.ts`.

## Fail-fast behavior registry (Proxy) + `initApiModels`

All model I/O runs through a single `config.behaviors` registry. It is a `Proxy`
over a null-prototype object: reading a behavior that has not been populated
throws a clear "not initialized" error instead of a confusing
`undefined is not a function` further down. `initApiModels({ apiClient })` fills
every slot with its API adapter at startup. This is what forces the "call
`initApiModels` before using any model" contract to fail loud and early.

```ts
// config/config.ts
export const config: Config = {
  defaultPaginationLimit: 50,
  behaviors: new Proxy<Behaviors>(Object.create(null), {
    get(target, property, receiver) {
      if (Reflect.has(target, property))
        return Reflect.get(target, property, receiver);
      throw new Error(
        `@mittwald/api-models is not initialized — call initApiModels({ apiClient }) ` +
          `at startup before using any model (accessed behaviors.${String(property)})`,
      );
    },
  }),
};
```

```ts
// config/initApiModels.ts
config.behaviors.container = apiContainerBehaviors(apiClient);
config.behaviors.project = apiProjectBehaviors(apiClient);
// … one line per model
```

Used in: `config/config.ts`, `config/initApiModels.ts`.

## Behavior adapter: `apiXBehaviors(client)` + `validateResponse`

Every model declares a transport-neutral behavior interface
(`behaviors/types.ts`) and a matching API adapter `apiXBehaviors(client): X`
(`behaviors/api.ts`). Models call `config.behaviors.x.*`, never `api-client`
directly. Adapters assert the expected HTTP status with `validateResponse`
(which narrows the response type) and return raw `*Data`. List operations return
the uniform `QueryResponseData<T>` envelope (`{ items, totalCount }`).

```ts
// container/Container/behaviors/api.ts
export const apiContainerBehaviors = (
  client: MittwaldAPIV2Client,
): ContainerBehaviors => ({
  find: async (containerId, stackId) => {
    const response = await client.container.getService({
      serviceId: containerId,
      stackId,
    });
    if (response.status === 200) return response.data;
    validateResponse(response, [403, 404]);
  },
  // …
});
```

```ts
// base/models/types.ts
export interface QueryResponseData<T> {
  items: readonly T[];
  totalCount: number;
}
```

Used in: every `*/behaviors/api.ts` and `*/behaviors/types.ts`,
`base/api/validateResponse.ts`, `base/models/types.ts`. Rationale for the
injectable split: [ADR-0005](adr/0005-model-testing-via-injected-behaviors.md).

## Reference identity: `@GhostMakerModel`, `ReferenceModel`, `ofId`

A relation is represented cheaply by identity alone. `ReferenceModel` carries
just an `id`; `static ofId(id)` builds a reference **without any I/O**, so a
constructor can freely derive relations (`Project.ofId(data.projectId)`).
Hydration happens later via `getDetailed()` / `getCommon()`. Models are
decorated with `@GhostMakerModel` so `@mittwald/api-models-react` can resolve
identity for its Ghosts.

```ts
// base/models/ReferenceModel.ts
@GhostMakerModel({ getId: (model) => model.id })
export abstract class ReferenceModel extends BaseModel {
  public readonly id: string;
  public constructor(id: string) {
    super();
    this.id = id;
  }
  public describe(): string {
    return `${this.constructor.name}@${this.id}`;
  }
}
```

```ts
// container/Container/Container.ts
public static ofId(id: string, stackId: string) { return new Container(id, stackId); }
```

Used across ~65 models: `base/models/ReferenceModel.ts`,
`project/Project/Project.ts`, `server/Server/Server.ts`. Note that a model may
expose a domain-specific factory instead of/alongside `ofId` (e.g.
`FinderProfile.ofCustomerId(id)`, `Container.ofId(id, stackId)`).

## `Common` / `Detailed` / `ListItem` variants via capability mixins

Per entity `X` there is a reference (`X`), the shared fields (`XCommon`), the
full single view (`XDetailed`), and one list element (`XListItem`). Identity is
a plain single-inheritance chain, so native `instanceof` holds across it
(`ContainerDetailed instanceof ContainerCommon instanceof Container instanceof ReferenceModel`);
methods use that multi-stage `instanceof` to decide whether a fetch is needed.
Data is bolted on with the zero-dependency capability mixins `WithData<T>()` /
`WithListData<TItem>()` (`base/models/mixins.ts`) — the move off `polytype`
while keeping `instanceof` is
[ADR-0004](adr/0004-mixin-functions-instead-of-polytype.md).

```ts
// container/Container/Container.ts
export class ContainerCommon extends WithData<
  ContainerListItemData | ContainerData
>()(Container) {
  public override readonly data: ContainerListItemData | ContainerData;
  public constructor(data: ContainerListItemData | ContainerData) {
    super(data.id, data.stackId); // Container(id, stackId) — args threaded through directly
    this.data = data;
    /* …shared derived fields… */
  }
}

// Detailed / ListItem extend Common directly and narrow `data` (no re-applied mixin):
export class ContainerDetailed extends ContainerCommon {
  public override readonly data: ContainerData;
  public constructor(data: ContainerData) {
    super(data);
    this.data = data;
  }
}

// Lists compose the query class with WithListData; items stay frozen:
export class ContainerList extends WithListData<ContainerListItem>()(ContainerListQuery) {
  public override readonly items: readonly ContainerListItem[];
  public override readonly totalCount: number;
  public constructor(
    project: Project,
    query: ContainerListQueryData,
    containers: ContainerListItem[],
    totalCount: number,
  ) {
    super(project, query);
    this.items = Object.freeze(containers);
    this.totalCount = totalCount;
  }
}

// idempotent hydration driven by instanceof:
public async getCommon(): Promise<ContainerCommon> {
  return this instanceof ContainerCommon ? this : this.getDetailed();
}
```

Used in every domain model, e.g. `container/Container/Container.ts`,
`server/Server/Server.ts`, `domain/Domain/Domain.ts`.

### Traps that `tsc` does not catch

1. **`DataModel` / `ListDataModel` are no longer nominal bases.** A composite is
   `WithData<T>()(X)`, not `extends DataModel`, so `x instanceof DataModel` is
   always `false` — assert the observable payload (`x.data` / `x.items`)
   instead. Standalone `extends DataModel<T>` / `extends ListDataModel<T>`
   classes still exist and are unchanged; only the _combining_ case uses the
   mixin.
2. **Re-declaring a mixin field clobbers the parent's assignment.** With
   `useDefineForClassFields` (target ES2022), re-declaring `data` / `items` /
   `totalCount` in a subclass emits a define-to-`undefined` that runs _after_
   `super()`. So any re-declared field that a parent constructor already assigns
   must be re-assigned in this constructor (that is why `ContainerDetailed`
   repeats `this.data = data`); conversely, never re-declare a field you do not
   re-assign.
3. **Eager cross-model references in a constructor crash under import cycles.**
   A field initialized to another model at construction time — e.g.
   `Ingress.certificates = Certificate.query(...)` — evaluates during module
   load. If the two models sit in a peer/parent module cycle and the reference
   resolves **through the root barrel**, the other class can still be
   `undefined` at that point (temporal dead zone), throwing at import time. Two
   rules keep this safe: (a) reach the other model by a **deep import**
   (`../../ingress/Ingress/Ingress`, not the barrel) so resolution doesn't wait
   on the barrel's full evaluation, and (b) prefer **lazy** cross-model access
   (a method that calls `Other.query()` when invoked) over an eager ctor field
   wherever the ergonomics allow. Cross-aggregate references by identity
   (`Other.ofId(id)`) are always safe — they touch only the id, not the other
   class's statics. This is why `certificate ↔ ingress` is an accepted module
   cycle: the eager `Ingress.certificates` ctor field deep-imports
   `Certificate`, while `Certificate.linkedIngresses` (a lazy query getter)
   deep-imports `Ingress`.

## Derived values built in the constructor

Wire data is primitive (ISO strings, byte counts, integer minor units). Models
convert these into rich value objects **once in the constructor** so consumers
always get typed values: `DateTime` (luxon) for timestamps, `Bytes` for sizes,
`Money` (dinero.js, pinned to EUR/de-DE) for amounts.

```ts
this.statusSetAt = DateTime.fromISO(data.statusSetAt); // container/Container
this.storageUsage = Bytes.of(data.storageUsageInBytes, "bytes"); // database/Redis, database/MySql
this.totalGross = Money({ amount: data.totalGross ?? 0, currency: "EUR" }); // invoice/Invoice
```

`Bytes` and `Money` live in `common/` with their own arithmetic/formatting APIs
(`Bytes.of`, `.in(unit)`, `.text()`; `Money`, `ZeroMoney`).

Used in: `common/Bytes.ts`, `common/Money.ts`, `invoice/Invoice/Invoice.ts`,
`database/Redis/Redis.ts`, `mail/MailAddress/MailAddress.ts`,
`server/Server/Server.ts`.

## `DownloadableFile` — data-returning download descriptor

The core is DOM-free ([ADR-0002](adr/0002-agnostic-core-two-packages.md)), so it
never triggers a browser download. Methods that produce a file return a plain
`{ filename, content }` descriptor; turning it into an actual download is the
consumer's job.

```ts
// common/DownloadableFile.ts
export interface DownloadableFile { filename: string; content: string; }

// container/Container/Container.ts
public async getLogDownload(): Promise<DownloadableFile> {
  const response = await config.behaviors.container.getLog(this.id, this.stackId);
  return { filename: `${this.serviceName}.log`, content: response };
}
```

Used in: `common/DownloadableFile.ts`, `container/Container/Container.ts`.

## `AggregateMetaData` / `AggregateReference` — cache/invalidation identity

Each model declares a
`static aggregateMetaData = new AggregateMetaData(domain, aggregate)`, its
stable identity for caching and invalidation. A polymorphic
`{ aggregate, domain, id, parent? }` payload is resolved back to the right
concrete reference by `resolveAggregateReference`, which matches on each model's
`aggregateMetaData` and returns `Model.ofId(id)`. Models also expose a
`findAggregate(id)` helper to build the payload.

```ts
// common/AggregateMetaData.ts
export class AggregateMetaData {
  public constructor(public readonly domain: string, public readonly aggregate: string) {}
}

// container/Container/Container.ts
public static aggregateMetaData = new AggregateMetaData("container", "container");

// common/AggregateReference.ts
export function resolveAggregateReference(data: AggregateReferenceData): AggregateReference {
  if (domain === Server.aggregateMetaData.domain && aggregate === Server.aggregateMetaData.aggregate)
    return Server.ofId(id);
  // … one branch per model
}
```

Used in: `common/AggregateMetaData.ts`, `common/AggregateReference.ts`, and
every model's `static aggregateMetaData`.

## `ListQueryModel` — stable `queryId`, `.refine()`, `.execute()`

A list is expressed as a **not-yet-executed** query. `ListQueryModel` hashes the
query object (`object-code`) together with its parent dependencies into a stable
`queryId` (via `joinedId`) — the same query always yields the same id, which is
what caching keys on. Before hashing, `normalizeQueryForHash` reduces any
`ReferenceModel` in the query to its `id`, so a query field typed
`Model | string` (see the next section) produces the **same** `queryId` whether
the caller passes a reference, a loaded model, or the bare id — the key is the
identity, never the model payload. (`object-code` ignores `toJSON`, so without
this a loaded model would hash its whole `data`.) `.refine()` returns a new
query with merged parameters; `.execute()` — declared `abstract` on the base —
materializes it into an `XList` (query + items + `totalCount`). Pagination
defaults to `config.defaultPaginationLimit`. Because every result carries a
`totalCount`, the base can offer `getTotalCount()` for free: it runs the query
and reads the count off the result. A model **overrides** it with
`refine({ limit: 1 })` (fetching a single-item page) wherever its list endpoint
is genuinely paginated — safe because a paginated mittwald endpoint always
returns the `x-pagination-totalcount` header, so `resolveTotalCount` reads the
real total regardless of page size. Whether an endpoint paginates is decided by
its generated query type: many are `{}` (no `limit`), and those correctly keep
the plain default. The one genuinely-paginated list still on the default is
`TldPrice`, whose behavior hardcodes `limit: 2000` and exposes no `refine`;
optimising it would need a model change first.

```ts
// base/models/ListQueryModel.ts
@GhostMakerModel({ getId: (model) => model.queryId })
export abstract class ListQueryModel<TQuery> {
  public readonly queryId: string;
  public constructor(query: TQuery, opts: Options = {}) {
    this.query = query;
    // normalizeQueryForHash: ReferenceModel -> id before hashing, so
    // `Model | string` fields key on identity, not the loaded payload
    this.queryId = joinedId(
      ...(opts.dependencies ?? []),
      hash(normalizeQueryForHash(query)),
    );
  }

  // every list result has a totalCount, so execute is typed to guarantee it
  public abstract execute(
    options?: AxiosRequestConfig,
  ): Promise<{ totalCount: number }>;

  public async getTotalCount(options?: AxiosRequestConfig): Promise<number> {
    const { totalCount } = await this.execute(options);
    return totalCount;
  }
}
```

```ts
// container/Container/Container.ts
public refine(query: ContainerListQueryData) {
  return new ContainerListQuery(this.project, { ...this.query, ...query });
}
public async execute(options?: AxiosRequestConfig) {
  const { items, totalCount } = await config.behaviors.container.list(this.project.id, this.query, options);
  return new ContainerList(this.project, this.query, items.map((c) => new ContainerListItem(c)), totalCount);
}
```

```ts
// order/Order/Order.ts — count without pulling the whole list
public async getTotalCount() {
  const { totalCount } = await this.refine({ limit: 1 }).execute();
  return totalCount;
}
```

Used in: `base/models/ListQueryModel.ts`, `base/models/ListDataModel.ts`,
`container/Container/Container.ts`, and every `*ListQuery` / `*List`.

## Query fields that reference another model accept `Model | string`

Every field of a `*ListQueryModelData` that references **another model** — the
parent scope (`project`, `customer`, `database`, …) **and** any filter
(`certificate`, `ingress`, `stack`, `extension`, `appInstallation`, `container`,
…) — is typed `Model | string` and named after the model, **not** the raw
`xxxId`. The generated OpenAPI `xxxId` is `Omit`ted from the base query type and
re-mapped in `execute()` via `extractId`:

```ts
export type XListQueryModelData = Omit<XListQueryData, "certificateId"> & {
  certificate?: Certificate | string; // import type — no runtime edge
};
// execute()
behavior.list({
  ...omit(this.query, ["certificate"]),
  certificateId: extractId(this.query.certificate),
});
```

Referenced model types are imported **type-only**, so this adds no runtime
module edge. Callers may pass either a model or a bare id — and should **prefer
passing the model** where they already hold one (`query({ certificate })` over
`query({ certificate: certificate.id })`). This is cache-safe: `ListQueryModel`
(`normalizeQueryForHash`, previous section) reduces any `ReferenceModel` to its
id before hashing the `queryId`, so a reference, a loaded model, and a bare id
all produce the same key. The bare id stays accepted for the cases that only
have one (a route param, or when the value in hand is a different model that
merely shares the id — e.g. a `ContributorExtension` id passed where an
`Extension` is typed).

Watch the mismatch case: pass `.id` (not the model) when the model you hold is
**not** the type the field expects. `tsc` catches this — a
`ContributorExtensionCommon` is not assignable to
`extension?: Extension | string` — so the field type is the guard.

Used across every `*ListQuery`; the convention was swept package-wide
(compiler-resolved over all `*ListQueryModelData` types) so no filter field
still takes a raw id.

## `*Data` types are OpenAPI derivations

Model data types are never hand-written; they are aliased straight from the
generated `MittwaldAPIV2.*` namespace of `@mittwald/api-client`, keeping the
models in lock-step with the API contract. Drill into `Components.Schemas.*`,
`Operations.*.ResponseData`, or `Paths.*.Parameters.*` as needed.

```ts
// container/Container/types.ts
export type ContainerData =
  MittwaldAPIV2.Components.Schemas.ContainerServiceResponse;
export type ContainerListItemData =
  MittwaldAPIV2.Operations.ContainerListServices.ResponseData[number];
export type ContainerListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdServices.Get.Parameters.Query;
```

Used in every `*/types.ts`, e.g. `container/Container/types.ts`,
`order/Order/types.ts`, `domain/Domain/types.ts`.

## `// API-DRIFT:` markers — labelling deliberate spec deviations

Because every `*Data` type is derived from `@mittwald/api-client`, the models
drift out of sync whenever that dependency is **bumped** and the generated
`MittwaldAPIV2.*` types change shape. Where we deliberately keep a workaround
for such drift, tag it in-code with a flat, greppable marker so it is
self-documenting and discoverable — `grep -rn "API-DRIFT" packages/models/src`
lists every open deviation:

```ts
// API-DRIFT: <what deviates and why> (resolve: <condition under which to remove it>)
```

Always state a **resolve** condition — the concrete backend/spec change that
makes the workaround unnecessary. Standalone markers:

- `auth/Auth/behaviors/api.ts` — `checkIsAuthenticated` probes auth via
  `getUser({ userId: "self" })` instead of `client.user.checkToken()`.
- `user/User/User.ts` — `registeredAt` falls back to `DateTime.now()` while
  `/user/self` omits the field (wrongly making accounts look `isNew`).
- `domain/Domain/Domain.ts` — `findByHostname` via `find(hostname)` is disabled
  because route invalidation does not work for shortId lookups.
- `container/Container/ContainerTemplate.ts` — `help.alerts[].status` is a plain
  `string` in the spec; `toAlertStatus` narrows it to
  `containerTemplateAlertStatuses` and falls back to `"info"`.

Every `anyStatus*` cast (`base/api/typeFixes.ts`, see that section) is likewise
tagged with an `API-DRIFT` marker at its usage site, naming the operation whose
generated response type omits the status and the resolve condition (drop the
cast for the literal status once the client type declares it). The cast tokens
stay greppable on their own, but the marker records _why_ each one is needed.

Every update of the generated `@mittwald/api-client` types is also the moment to
revisit the markers: **first fix the breaking changes the new types introduce**,
then resolve the `API-DRIFT` markers whose resolve condition now holds (removing
the resolved markers) and update [docs/api-drift.md](api-drift.md). Fixing the
breaking changes first is deliberate — it is what surfaces the drift in the
first place.

## Small `lib/` helpers

Shared low-level utilities under `lib/`, pulled in wherever the same tiny need
recurs:

- **`replaceUrlTemplateValues(url, values)`** — fill `:key` URL placeholders,
  sorting keys longest-first so overlapping names don't partially match
  (`lib/replaceUrlTemplateValues.ts`, used e.g. in `file/File/File.ts`).
- **`joinedId(...parts)`** — `parts.join(".")` for composite/query ids
  (`lib/joinedId.ts`, used by `base/models/ListQueryModel.ts`).
- **`arrayRemoveItem(items, pred)`** — in-place removal of the first match;
  callers must ensure a match exists (`lib/arrayRemoveItem.ts`).
- **`generateRandomHexString` / `generateRandomBase64String` /
  `generateRandomAlphanumericString`** — client-side token/name generation. The
  hex and base64 variants use `crypto.getRandomValues`; the alphanumeric variant
  uses `Math.random()` and is **not** cryptographically secure (`lib/`).

---

# Subtler idioms

The sections above cover the load-bearing patterns. The ones below are easy to
miss but recur across the package; get them wrong and things break quietly.

## Per-model folder layout & barrel conventions

A model lives in `group/Model/` with a fixed file layout. Follow it so the model
looks like every other one:

```
container/                      # domain group
  index.ts                      # group barrel: re-exports each model folder
  Container/
    Container.ts                # the model + its Common/Detailed/ListItem/Query/List
    types.ts                    # *Data / *Query types, all MittwaldAPIV2.*-derived
    index.ts                    # model barrel: export * from every file in the folder
    behaviors/
      types.ts                  # the XBehaviors interface
      api.ts                    # apiXBehaviors(client) adapter
    ContainerStack.ts           # sub-models get their own sibling file
    ContainerPort.ts            …
```

Invariants worth internalizing:

- **The `index.ts` barrels only re-export** (`export * from "./Container";` …) —
  no logic. The public contract is the **root** barrel, never a deep import
  ([ADR-0003](adr/0003-public-api-root-barrel.md)).
- **A forgotten `export *` makes a model unreachable**, and nothing inside the
  package notices — it imports the model by relative path and compiles fine.
  `api-models/ghostmaker-model-exported` therefore checks that every
  `@GhostMakerModel({ name })` class is reachable from `src/index.ts`. A model
  that is deliberately internal opts out at the class with a reason:
  `// eslint-disable-next-line api-models/ghostmaker-model-exported -- internal: <why>`.
- **Naming is mechanical**: interface `XBehaviors`, adapter `apiXBehaviors`,
  wire types `XData` / `XListItemData` / `XListQueryData`, model variants
  `XCommon` / `XDetailed` / `XListItem`, query pair `XListQuery` / `XList`.
- **Folder is `behaviors/` (plural)**; a couple of older models use singular
  `behavior/` (e.g. `fyndr/Lead`, `ai/*PlanOptions`) — match the folder you are
  in, don't "fix" it in an unrelated change.

## `internal.ts` — the internal-module pattern

Some clusters are **cyclic by design**. In `article/Article/` the base class
`Article`/`ArticleCommon` (`Article.ts`), its subclasses (`articles/*` —
`HostingArticle`, `ServerArticle`, …), the factory that maps a template to a
subclass (`articles/articleFactory.ts`), and the attribute/modifier bases and
their subclasses all reference each other. There is no acyclic import order for
these files individually.

The fix is the **internal-module pattern**: a single `internal.ts` barrel that
re-exports every file in the cluster, and **every cluster member imports the
other members from `./internal`, never from a sibling file directly**. The
barrel gives the runtime one well-defined evaluation order for the whole cycle.

Two rules make it work — both easy to break silently:

1. **The order of the `export *` lines is load-bearing.** The barrel is
   evaluated top to bottom, so a base class must be exported **before** the
   subclasses that `extends` it, and anything that imports subclasses at module
   scope (e.g. `articleFactory`, which imports `ServerArticle` et al.) must come
   **last**. Get it wrong and the barrel evaluates
   `class ServerArticle extends HostingArticle` before `HostingArticle` exists —
   a `TypeError: Class extends value undefined is not a constructor or null` at
   import time, which takes out the entire cluster (and every test that touches
   it).

2. **Import cluster classes from `./internal`, not from the sibling file.** A
   direct `import { Article } from "./Article"` (or `./ArticleModifier`, …) can
   be the first thing to load the cluster, cold-loading `Article.ts` out of
   order and tripping the same `Class extends value undefined`. This applies to
   tests too: `Article.test.ts` imports `ArticleAttribute`/`ArticleModifier`
   from `./internal`, not from their own files, precisely so it cannot pull a
   base class in ahead of the barrel. A re-export is a way in as well: a
   sub-barrel with `export * from "./Project"` hands the member out past the
   cluster barrel just like a direct import, so it re-exports from `../internal`
   by name instead (`project/Project/index.ts`).
   `api-models/no-deep-cluster-imports` flags both — imports and
   `export … from`.

Because the order is deliberate and non-alphabetical, **no import/export sorting
may touch an `internal.ts` barrel**. No such rule is active in this package
today; if one is ever added, exclude every `internal.ts` from it (otherwise it
re-sorts the `export *` lines alphabetically and reintroduces bug 1). Keep the
blank-line groups as documentation of the tiers (bases → subclasses → factory →
attribute subclasses → modifier subclass) and hand-maintain them; do not let a
formatter reorder the file.

### When a cluster actually needs an `internal.ts`

Do **not** add an `internal.ts` to every cluster "to be uniform" — it is only
worth the hand-maintained ordering when the cluster has a genuine **load-time**
reference to a sibling that also sits inside an import cycle. The decision rule
is _load-time vs deferred_, not _"references a sibling at all"_:

**Genuine load-time refs (these warrant `internal.ts`, they are unguarded):**

- `class X extends <Sibling>` — including the mixin form
  `extends WithData<T>()(Sibling)`. Evaluated when the class declaration runs;
  if `Sibling` is not initialized yet you get `Class extends value undefined`.
- `static field = <expression using Sibling>` — e.g. `File`'s
  `static inMemoryFile = new File(...)` reaching `FileMeta.ofFile`. Runs at
  module load.
- An **eager constructor field** that touches another model's statics under a
  cycle — see trap #3 in _Traps that `tsc` does not catch_ (deep-import + prefer
  lazy).

**Deferred / erased — these are safe and do NOT justify an `internal.ts`:**

- A sibling value used **only inside method bodies** (`static get()`,
  `findDetailed()`, …). Method bodies run at call time, not import time.
- `import type { … }` — fully erased, no runtime binding.
- `@GhostMakerModel` + a constructor parameter _typed_ as a sibling. This looks
  dangerous but `emitDecoratorMetadata` is resilient here: a **union** param
  type (`ContributorExtension | Extension`) degrades to `Object` (no ref at
  all), and a **single-class** param type emits a `typeof`-**guarded** ref
  (`typeof App !== "undefined" && App ? App : Object`) that falls back to
  `Object` instead of throwing. Verify with a one-off
  `ts.transpileModule(src, { emitDecoratorMetadata: true })` and grep the
  `design:paramtypes` line before assuming a decorated model needs routing.

Applying this rule, the only clusters that qualify today are the three that
already have an `internal.ts`: `article/Article` (`extends` chains +
`articleFactory` force-load), `file/File` (`File` static-init sentinel), and
`project` (eager `HardwareSpecs` ctor fields). `marketplace/Extension` _looks_
like a candidate (cycle
`Extension → ExtensionPricePlan → ExtensionPricePlanVariant → Extension`,
`@GhostMakerModel`, ctor param typed `Extension`) but is safe: the param is a
union → `Object`, and every `Extension` value use is inside a method body.

## Behavior-side response mapping & error translation

Adapters (`behaviors/api.ts`) are the only place that touches `api-client`. The
mapping is uniform:

- **Assert the status with `validateResponse(response, 200 | [403, 404] | …)`**
  — it narrows the response union so `response.data` is typed. For "found or
  not" lookups, return `data` on the success status and let `validateResponse`
  accept the not-found status:
  ```ts
  if (response.status === 200) return response.data;
  validateResponse(response, [403, 404]); // throws on anything else
  ```
- **List operations build the envelope by hand**, deriving the total via
  `resolveTotalCount(response)`:
  ```ts
  return { items: response.data, totalCount: resolveTotalCount(response) };
  ```
  `resolveTotalCount` (`base/api/resolveTotalCount.ts`) is the **single source
  of truth** for a list's total count: it prefers the `x-pagination-totalcount`
  header and falls back to the returned page length, and — unlike the old
  `extractTotalCountHeader`, which **throws** when the header is absent — it
  never throws. A route that starts sending the header is picked up
  automatically, with the page-length fallback until then, so no per-route audit
  is needed. The total is derived **here, in the behavior layer**; models must
  never compute it (no `this.totalCount = items.length` in a `*List` constructor
  — take a `totalCount` parameter and pass through the value the behavior
  returned). When the page items are nested inside the response rather than
  being `response.data` itself, pass the count explicitly as the second argument
  (e.g. `fyndr/Lead` / `fyndr/UnlockedLead`:
  `resolveTotalCount(response, response.data.leads.length)`).
  `extractTotalCountHeader` is no longer used anywhere in the package.
- **`400`-family validation errors become a `ValidationError`** via
  `withResponseValidation` (used inside `validateResponse`). Gotcha: it wraps a
  **synchronous** `try/catch` around the status assertion — it translates the
  thrown `ApiClientError`, it does **not** await the network promise. Don't
  expect it to catch a rejected fetch on its own.

Used in: `base/api/validateResponse.ts`, `base/api/withResponseValidation.ts`,
every `*/behaviors/api.ts` (e.g. `container/Container/behaviors/api.ts`).

## Error classes & conventions

Three error shapes, and only one of them is an `Error`:

- **`ObjectNotFoundError extends Error`** — thrown by `assertObjectFound`;
  carries `type` (resolved via ghostmaker's `getModelName`) and `refName`, and
  calls `Object.setPrototypeOf(this, ObjectNotFoundError.prototype)` so
  `instanceof` survives transpilation to ES5 (`errors/ObjectNotFoundError.ts`).
- **`ValidationError`** — a **plain class, not an `Error`**. Holds
  `errors: ValidationErrorObject[]` and is built with
  `ValidationError.fromResponse(response, { pathMappings, typeMappings })`,
  which returns `undefined` for non-validation responses.
  `pathMappings`/`typeMappings` let a caller rename API field paths/types into
  its own vocabulary via `performMappings` (`errors/ValidationError/`).
- **`FileUploadError`** — also a plain class; aggregates per-file `failures`
  (`{ file, error }[]`) for a bulk upload (`errors/FileUploadError.ts`).

Because `ValidationError`/`FileUploadError` are not `Error` subclasses, `catch`
blocks must test them with `instanceof`, not by reading `.message`.

## `classifyFileUploadError` — message-substring rule table

The upload API returns free-text messages; the model maps them to stable codes
with an ordered rule table (`code` + `test(message)`), matched against the
**lower-cased** message, returning the first hit. `getMaxUploadSizeInMB` pulls
the numeric limit out of the "exceeds the limit of N bytes" message. This is the
idiom for "turn an opaque server string into a UI-switchable code" — extend the
`rules` array rather than scattering `message.includes(...)` at call sites.

```ts
// file/File/behaviors/classifyFileUploadError.ts
const rules: FileUploadErrorRule[] = [
  { code: "malwareInfected", test: (m) => m.includes("infected with malware") },
  {
    code: "fileTooLarge",
    test: (m) => m.includes("exceeds the limit of") && m.includes("bytes"),
  },
  // …
];
export const classifyFileUploadError = (message: string): string | undefined =>
  rules.find((rule) => rule.test(message.toLowerCase()))?.code;
```

## `withAxiosRequestConfig` + the `onBeforeRequest` handler registry

Model methods thread an optional `AxiosRequestConfig` down to the adapter, which
passes it through `withAxiosRequestConfig(options)`. That merges the per-call
config onto the outgoing request **and** runs every globally registered
pre-request handler. Consumers hook in once at startup via
`registerDefaultOnBeforeRequestHandler` (a `Set`, so handlers stack); it is one
of the few things re-exported from the root barrel.

```ts
// base/api/withModelRequestOptions.ts
export const withAxiosRequestConfig = (
  requestOptions: AxiosRequestConfig = {},
): Commons.RequestOptions => ({
  onBeforeRequest: (config) => {
    Object.assign(config.requestConfig, requestOptions);
    executeDefaultOnBeforeRequestHandlers(config);
  },
});
```

Used in: `base/api/withModelRequestOptions.ts`, `base/api/onBeforeRequest.ts`,
every list/detail adapter that accepts options (~27 sites).

## `typeFixes` — `NNN as any` status-code escape hatch

When the generated OpenAPI types omit a status the endpoint really returns,
adapters use the pre-cast constants from `base/api/typeFixes.ts`
(`anyStatus400`, `anyStatus403`, `anyStatus404`, `anyStatus409`, …) so
`validateResponse(response, anyStatus409)` type-checks. Treat every use as a
flag that the API spec and reality disagree — prefer fixing the spec, and don't
invent new `as any` casts inline; add/extend the constant. Every usage carries
an `API-DRIFT` marker (see that section) naming the operation and resolve
condition.

```ts
export const anyStatus409 = 409 as any;
```

Used in: `base/api/typeFixes.ts`, e.g. `order/Order/behaviors/api.ts`,
`database/MySql/behaviors/api.ts`, `app/AppInstallation/behaviors/api.ts`.

## Injected `AccessTokenProvider` — credentials stay out of the core

Anything needing an authenticated URL or a short-lived token (avatars, invoice
PDFs, protected file downloads/uploads) takes an **optional injected**
`XAccessTokenProvider` rather than knowing how tokens are minted. The model
calls optional methods on it; the consumer supplies the implementation. This
keeps auth policy out of the agnostic core and makes the token flow testable.

```ts
// file/FileAccessToken/FileAccessTokenProvider.ts
export interface FileAccessTokenProvider {
  createUploadToken?: () => Promise<FileUploadTokenData>;
  getDownloadToken?: (fileId: string, requestConfig?: AxiosRequestConfig) => Promise<FileDownloadTokenData>;
}

// project/Project/Project.ts — model exposes its own provider
public get fileAccessTokenProvider(): FileAccessTokenProvider {
  return new ProjectAvatarAccessTokenProvider(this);
}
```

Recurs across ~10 models: `file/File/`,
`server/Server/ServerAvatarAccessTokenProvider.ts`,
`customer/Customer/CustomerAvatarAccessTokenProvider.ts`,
`invoice/Invoice/InvoicePdfAccessTokenProvider.ts`,
`marketplace/Contributor/*AccessTokenProvider.ts`.

## Sentinel instance + guard (`File.inMemoryFile`)

A shared "not a real, persisted entity" placeholder is exposed as a **static
singleton** and matched by identity, paired with a guard that fails fast when a
method needs a real id. Reuse the instance; don't test for the sentinel by id
string.

```ts
// file/File/File.ts
public static inMemoryFile = new File("inmem");
public get isInMemoryFile() { return this === File.inMemoryFile; }
public assertNotInMemoryFile() { invariant(!this.isInMemoryFile, "Expected not in-memory file"); }
```

Used in: `file/File/File.ts` (e.g. `url` getter and download flows call
`assertNotInMemoryFile()` first).

## `DomFile` — the DOM touchpoint is aliased, not hidden

The core is DOM-free ([ADR-0002](adr/0002-agnostic-core-two-packages.md)), but
uploads genuinely need the browser `File` type. Rather than sprinkle the global
`File` around, it is aliased once as `DomFile` (value **and** type) so the
single legitimate DOM dependency is explicit and greppable, and the model's own
class is also named `File` without collision.

```ts
// file/File/types.ts
export const DomFile = File; // the browser global
export type DomFile = File;
```

Used in: `file/File/types.ts`, `file/File/File.ts` (`upload(file: DomFile, …)`),
`file/File/FileContent.ts`.

## `LocalizedText` — process-global language with `de` fallback

Localized API strings are wrapped in `LocalizedText`. The current language is a
**static on the class** (`LocalizedText.setLanguage(...)`), not per-instance,
and lookups fall back to `de` when the active language is missing.
`fromJsonString` parses leniently: invalid JSON or a bare string is treated as
`de` text rather than throwing.

```ts
// common/LocalizedText.ts
const value = this.data[LocalizedText.language] ?? this.data[defaultLanguage]; // defaultLanguage = "de"
```

Gotchas: `setLanguage` mutates a process-global for every instance (and leaks
across tests if not reset); the fallback is specifically `de`, not "first
available"; and the lookup uses `if (!value)`, so an empty string `""` is
treated as _missing_ and falls back too.

Used in: `common/LocalizedText.ts`.

## Immutability enforcement is uneven — know which is which

The README states model instances and their `data` are to be **treated** as
immutable. What is actually enforced today:

- **`ListDataModel` shallow-freezes its `items`** with `Object.freeze`
  (`base/models/ListDataModel.ts`); a few models freeze their own derived arrays
  the same way (`domain/Ingress/Ingress.ts`, `user/Feedback/Feedback.ts`).
- **`DataModel.data` is _not_ frozen yet** — `base/models/DataModel.ts` carries
  a `// todo: fix deep freeze`. So the deep-freeze the README describes is the
  intended invariant, not a current runtime guarantee.
- **The instance itself is not frozen.**
- **Every instance property is `readonly`** (type-level; tsc-enforced) and there
  is no mutable instance state anywhere — all fields are assigned once in the
  declaring class's constructor, with no post-construction mutation in the
  package.
- **The `*Article` facets are stateless lazy getters** — `HostingArticle`
  (`hardwareSpecs`/`baseStorageAttribute`/`storageModifier`), `ServerArticle`
  (`machineTypeSpecs`), `StorageArticle` (`bytes`): computed on access, never in
  the constructor, holding **no cached state**. Laziness is load-bearing (not a
  perf tweak): they use `getRequiredAttribute`/`getRequiredModifier`, which
  **throw** when the attribute is absent, and the facets are only conditionally
  valid per subtype (the code picks `machineTypeSpecs` vs `hardwareSpecs` via
  `isOfType(ServerArticle)`). Eager ctor-init was tried and **breaks
  construction** — the HostingOrderRequest flow builds a `HostingArticle` with
  no `StorageArticleModifier` (verified: 5 vitest failures). So compute on
  access.

Practical rule: never mutate `data` or a frozen list; construct a new model
instead. Don't rely on a runtime error to catch an accidental `data` mutation.

## Constructors are where wire data becomes domain data

Value conversion, normalization, and relation-wiring happen **once in the
constructor**, never lazily at each getter. Recurring moves: `.trim()` string
fields, coalesce nullables with `?? 0` / `?? default` before wrapping, and
derive related references I/O-free with `.ofId`.

```ts
// container/Container/Container.ts (ContainerCommon constructor)
this.description = data.description.trim();
this.statusSetAt = DateTime.fromISO(data.statusSetAt);
this.cpuLimit = data.deploy?.resources?.limits?.cpus; // optional chaining, kept optional
this.project = Project.ofId(data.projectId); // relation without a fetch
```

Gotcha: **normalization is selective, not a global rule.** `.trim()` is applied
only in domains that need it — don't assume every API string is trimmed. And the
two nullable idioms are not interchangeable: `?? default` preserves `false`,
`0`, and `""`, whereas a truthiness check
(`data.avatarRefId ? File.ofId(...)  : undefined`) discards them. Pick
deliberately.

Used across every `*Common` constructor, e.g.
`container/Container/Container.ts`, `invoice/Invoice/Invoice.ts`,
`server/Server/Server.ts`.

## `as const` tuples as runtime vocabulary + literal union

Fixed vocabularies are declared **once** as an `as const` tuple and the literal
union is derived from it with `(typeof x)[number]`. The array is the runtime
allowlist and the type in one place, so they cannot drift apart. (The package
uses this rather than `satisfies` — outside of tests there are no `satisfies`
expressions under `packages/models/src`.)

```ts
// invoice/Invoice/types.ts
export const invoiceStatusList = [
  "PAID",
  "PARTIALLY_PAID",
  "OVERPAID",
  "NEW",
  "CONFIRMED",
  "DENIED",
] as const;
export type InvoiceStatus = NonNullable<InvoiceData["status"]>[number] &
  (typeof invoiceStatusList)[number];

// common/LocalizedText.ts
const supportedLanguages = ["de", "en"] as const;
export type LocalizedTextLanguage = (typeof supportedLanguages)[number];
```

When the generated field is a plain `string`, the tuple is also the narrowing
step: look the incoming value up in it at the mapping site instead of casting
with `as`, choose an explicit fallback for unknown values, and tag the spot with
an `API-DRIFT` marker (see that section):

```ts
// container/Container/ContainerTemplate.ts
const toAlertStatus = (status: string): ContainerTemplateAlertStatus =>
  containerTemplateAlertStatuses.find((known) => known === status) ?? "info";
```

Used in: `common/LocalizedText.ts`, `container/Container/types.ts`,
`invoice/Invoice/types.ts`, `marketplace/Extension/types.ts`.

## Class member ordering: static → fields → constructor → methods

Within a class, members follow a fixed group order: static members first, then
instance fields, then accessors, the constructor, and finally instance methods —
with **public before protected before private** inside each of those. The shape
of the object is declared before the behavior that operates on it.

Within a group, members are sorted in **natural order** by name, so they read
`find*` before `get*`, `create` before `update`, etc. This means the
meaning-based pairing (`findDetailed` sitting next to `getDetailed`) is **not**
preserved — natural sort groups all `find*` together, then all `get*`. That is a
deliberate trade of "pairs read together" for a single deterministic order.

No lint rule enforces this order in this package (`.eslintrc.yml` carries no
class-member sorting rule); it is a convention, kept by hand. Top-level
declaration order between classes is a separate concern: in the aggregate
families and the `internal.ts` clusters it is load-bearing, so no tool may sort
it — see the `internal.ts` section.
