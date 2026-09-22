# @mittwald/api-models — Context

The framework-agnostic domain-model layer over `@mittwald/api-client`. It wraps
the mittwald domain (servers, projects, domains, contracts …) in models with
behavior and is complemented by `@mittwald/api-models-react` for React bindings.

The terms under **Domain** are derived from the code and should be treated as a
first, sharpenable draft.

## Language

### Model vocabulary

**ReferenceModel**:
A model that represents an entity by its `id` alone — without loaded data. The
base for "only the ID is known".
_Avoid_: Stub, Pointer, Ref

**DataModel**:
A model that carries the loaded raw data (`data`) of an entity.
_Avoid_: Entity, DTO, Record

**ListDataModel**:
Carries a (frozen) list of items together with a `totalCount`.
_Avoid_: Collection, Page

**ListQueryModel**:
A not-yet-executed query with a stable `queryId` (a hash of the query).
`.execute()` materializes it.
_Avoid_: Filter, Search, Criteria

**Common / Detailed / ListItem**:
Variants of an entity `X`. `XCommon` = the fields shared by the detail and list
responses; `XDetailed` = the individually loaded full view; `XListItem` = one
element of a list response.
_Avoid_: Full, Summary, Partial

**ListQuery / List**:
`XListQuery` = the executable query (`.refine()`, `.execute()`); `XList` = the
materialized result (query + items + `totalCount`).

**Behaviors**:
The injectable implementation of a model's API access (an interface plus an
`api.ts`). Models never call `api-client` directly — only through their
behaviors.
_Avoid_: Service, Repository, Gateway, Client

**Aggregate**:
A model's assignment to its cache/invalidation unit (`AggregateMetaData`,
`AggregateReference`), e.g. `project`.
_Avoid_: Group, Bucket

### Domain

**Customer**:
An organization that owns servers and projects and is billed.
_Avoid_: Client, Account, Tenant
> **Ubiquitous-language debt:** the product's ubiquitous language calls this
> concept **Organisation**, not "Customer". The `Customer*` naming here mirrors
> the `@mittwald/api-client` (backend) term and is kept as the public API.
> Treat `Customer` in this package as the technical alias of the domain term
> _Organisation_; a rename is deliberately deferred (public-API cost).

**Project**:
A working environment on a server that bundles apps, domains, databases, etc.
_Avoid_: Workspace, Site
> **Aggregate composition:** `Project` (and `Customer`) is the composition hub of
> an aggregate hierarchy (`Customer` → `Project`/`Server` → backups, mail,
> databases, containers, domains, …). Parent↔child and peer contexts reference
> each other **by identity** (`X.ofId(id)` → `ReferenceModel`) or **by query**
> (`X.query(...)` → `ListQueryModel`), never by embedding loaded `data`. This
> produces module-level import cycles that carry no domain coupling and are
> **accepted** — see the DDD review ([issue #3754](https://gitlab.mittwald.it/coab-0x7e7/frontend/apps/mstudio/-/issues/3754),
> finding #3); the reference/`queryId` conventions and the import-cycle trap are
> in [docs/implementation-patterns.md](docs/implementation-patterns.md).

**Server**:
A managed hosting server (machine type, storage) owned by a Customer.
_Avoid_: Host, Machine, VM, Instance

**Contract**:
The billing contract / tariff behind a server or service.
_Avoid_: Subscription, Plan

**App / AppInstallation**:
An installable application and its concrete installation within a Project.
_Avoid_: Software, Package

**Domain**:
An internet domain. In the DDD review ([issue #3754](https://gitlab.mittwald.it/coab-0x7e7/frontend/apps/mstudio/-/issues/3754))
the surrounding concern was split into four sibling contexts — `domain`
(registration, handles, migration), `dns` (`DnsZone`, records), `certificate`
(TLS, ACME), and `ingress` (routing). `dns`/`domain` stay directed; `certificate`
and `ingress` reference each other (an accepted lazy module cycle — see the
import-cycle trap in [docs/implementation-patterns.md](docs/implementation-patterns.md)).
_Avoid_: Hostname, URL

**Ingress**:
Routing of a hostname to a target within a Project.
> **Ubiquitous-language debt:** in the product's ubiquitous language `Ingress`
> is **deprecated in favor of `Domain`**. The model is still present and used;
> new work should prefer the `domain` context where possible. Not yet marked
> `@deprecated` in code (would flag every current call site).
_Avoid_: Route, VHost

**Extension / Contributor**:
A marketplace extension and the contributor that provides it.
_Avoid_: Plugin, Addon, Vendor

**Fyndr / Lead**:
The "Fyndr" lead-generation product. A `Lead` is a prospect; an `UnlockedLead`
is a lead that has been unlocked.
_Avoid_: Finder (do not confuse with the generic word), Prospect

**Monitoring / Performance** (observability):
Two distinct observability subdomains — do not merge. `monitoring` = resource
**usage/consumption** (`UsageMetrics` CPU/memory time-series, `StorageMetrics`);
its Prometheus-style query primitive lives internally at `monitoring/lib/metrics`
(not a public context). `performance` = **web-performance** analysis
(Lighthouse/TTFB, screenshots). `status` (service status) left the package in the
DDD review (now `src/shared/status`). See the DDD review
([issue #3754](https://gitlab.mittwald.it/coab-0x7e7/frontend/apps/mstudio/-/issues/3754)).
_Avoid_: "metrics" as a standalone context; lumping web-performance with usage.

**Access / Credentials**:
Credential-like models live with their **owning aggregate**, by design, not in a
single "credentials" context: `user/SshKey` + `user/ApiToken` (personal, on the
User), `access/SftpUser` + `access/SshUser` (project access), `database/MySqlUser`
(within a database). See the DDD review (issue #3754).
_Avoid_: a cross-aggregate `credentials`/`access` bucket.

**AI Hosting (scoped)**:
The AI-hosting product, modelled per **scope** — `Customer*` (billing/contract
scope) and `Project*` (container/licence scope) variants of `AIModel`,
`AIApiKey`, `AIPlanOptions`. The scope split mirrors the api-client's own
`customer*`/`project*` endpoints and the app's scoped route trees; it is
deliberate, not duplication to abstract away. The identical `*AIModel` family is
deduped behind one factory; the diverging families stay scope-specific — see the
DDD review ([issue #3754](https://gitlab.mittwald.it/coab-0x7e7/frontend/apps/mstudio/-/issues/3754),
finding #5).
_Avoid_: forcing a single generic scope abstraction over the diverging families.
