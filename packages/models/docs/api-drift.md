# API drift: `@mittwald/api-models` ↔ `@mittwald/api-client`

**As of:** api-client `4.465.0`.

Places where this package deviates from the generated OpenAPI spec. **Every row
is two-sided** — not automatically "the backend must fix it": either the spec
omits a status/field the endpoint really returns (→ extend the spec), or the
frontend works around behavior that is actually correct (→ drop the workaround
in this package).

Most rows are **missing status codes**: the package handles a status that is not
in the spec's `responses`, currently bridged via `anyStatus*` (`… as any`,
`base/api/typeFixes.ts`). "Source" is the concrete `METHOD /route`, or a schema
path for pure-type drift.

> **Resolved in the latest run:** nothing. `4.465.0` declares no additional
> status on any operation below — the literal-status `tsc` probe still fails on
> all 26 casts — `checkToken()` still does not exist, and `registeredAt` is
> still optional (already so in `4.463.0`, so the declaration is not new). Two
> bookkeeping changes: the `403` on
> `GET /v2/app-installations/{appInstallationId}` was the only cast without an
> `API-DRIFT` marker and now has one, and the `spotlight` rows below are listed
> for the first time. Resolved there: `4.465.0` ships `getSpotlightInfo`,
> `spotlightUsage` and `spotlightFeedback`, so the hand-written types and the
> `client.axios` transport are gone — and with them the `cache: false` the
> missing `onBeforeRequest` hook used to force.

## app

| Source                                          | Frontend (api-models)     | API spec (4.465.0) | Resolution                                                        |
| ----------------------------------------------- | ------------------------- | ------------------ | ----------------------------------------------------------------- |
| `GET /v2/app-installations/{appInstallationId}` | handles `403` (no access) | `404`, `429`       | add `403` to spec — or drop handling in package if never returned |

## auth

| Source                                                                 | Frontend (api-models)                                                    | API spec (4.465.0)                         | Resolution                                                                          |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------ | ----------------------------------------------------------------------------------- |
| `POST /v2/authenticate` · `POST /v2/authenticate-mfa`                  | treats `403` as `invalidCredentials`                                     | `200`, `202`, `204`, `400`, `408`, `429`   | add `403` to spec if auth returns it — or drop the check in package                 |
| `PUT /v2/logout`                                                       | handles `401`                                                            | `204`, `400`, `429`                        | add `401` to spec — or drop in package                                              |
| `GET /v2/users/{userId}` (`userId: "self"`, in `checkIsAuthenticated`) | accepts `401`                                                            | `200`, `403`, `404`, `412`                 | add `401` to spec — or drop in package                                              |
| `GET /v2/users/{userId}` (self, as auth probe) — **behavioral**        | probes auth via `getUser` self because no lightweight token check exists | no dedicated "token still valid?" endpoint | backend adds a `checkToken()` endpoint — or confirm the getUser probe as acceptable |

## certificate

| Source                                 | Frontend (api-models) | API spec (4.465.0) | Resolution                             |
| -------------------------------------- | --------------------- | ------------------ | -------------------------------------- |
| `GET /v2/certificates/{certificateId}` | handles `403`         | `404`, `429`       | add `403` to spec — or drop in package |

## contract

| Source                                  | Frontend (api-models) | API spec (4.465.0)  | Resolution                             |
| --------------------------------------- | --------------------- | ------------------- | -------------------------------------- |
| `GET /v2/projects/{projectId}/contract` | handles `403`         | `400`, `404`, `429` | add `403` to spec — or drop in package |
| `GET /v2/servers/{serverId}/contract`   | handles `403`         | `400`, `404`, `429` | add `403` to spec — or drop in package |
| `GET /v2/contracts/{contractId}`        | handles `403`         | `400`, `404`, `429` | add `403` to spec — or drop in package |

## cronjob

| Source                         | Frontend (api-models) | API spec (4.465.0) | Resolution                             |
| ------------------------------ | --------------------- | ------------------ | -------------------------------------- |
| `GET /v2/cronjobs/{cronjobId}` | handles `403`         | `404`, `429`       | add `403` to spec — or drop in package |

## customer

| Source                                            | Frontend (api-models)        | API spec (4.465.0)  | Resolution                             |
| ------------------------------------------------- | ---------------------------- | ------------------- | -------------------------------------- |
| `GET /v2/customers/{customerId}/payment-method`   | treats `403` as `"noAccess"` | `400`, `404`, `429` | add `403` to spec — or drop in package |
| `GET /v2/customer-invites/{customerInviteId}`     | handles `403`                | `404`, `429`        | add `403` to spec — or drop in package |
| `GET /v2/customers/{customerId}/memberships`      | handles `403` (in `findOwn`) | `404`, `429`        | add `403` to spec — or drop in package |
| `GET /v2/customers/{customerId}/invoice-settings` | handles `403`                | `400`, `404`, `429` | add `403` to spec — or drop in package |

## database

| Source                                      | Frontend (api-models) | API spec (4.465.0)         | Resolution                             |
| ------------------------------------------- | --------------------- | -------------------------- | -------------------------------------- |
| `GET /v2/mysql-databases/{mysqlDatabaseId}` | handles `403`         | `400`, `404`, `429`, `500` | add `403` to spec — or drop in package |
| `GET /v2/redis-databases/{redisDatabaseId}` | handles `403`         | `400`, `404`, `429`, `500` | add `403` to spec — or drop in package |

## domain

| Source                                             | Frontend (api-models)                             | API spec (4.465.0)                                                                         | Resolution                                                                                     |
| -------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| `Domain.findByHostname` — **behavioral / routing** | `findByHostname` via `find(hostname)` is disabled | route invalidation does not work for shortId (hostname) lookups (not statically checkable) | backend/infra fix route invalidation for hostname lookups — or rethink the approach in package |

## ingress

| Source                          | Frontend (api-models) | API spec (4.465.0) | Resolution                             |
| ------------------------------- | --------------------- | ------------------ | -------------------------------------- |
| `GET /v2/ingresses/{ingressId}` | handles `403`         | `404`, `429`       | add `403` to spec — or drop in package |

## marketplace

| Source                                                       | Frontend (api-models) | API spec (4.465.0)  | Resolution                             |
| ------------------------------------------------------------ | --------------------- | ------------------- | -------------------------------------- |
| `GET /v2/contributors/{contributorId}`                       | handles `403`         | `404`, `429`        | add `403` to spec — or drop in package |
| `GET /v2/extension-instances/{extensionInstanceId}/contract` | handles `403`         | `400`, `404`, `429` | add `403` to spec — or drop in package |
| `GET /v2/customers/{customerId}/extension-orders`            | handles `403`         | `400`, `404`, `429` | add `403` to spec — or drop in package |

## order

| Source                     | Frontend (api-models) | API spec (4.465.0) | Resolution                             |
| -------------------------- | --------------------- | ------------------ | -------------------------------------- |
| `GET /v2/orders/{orderId}` | handles `404`         | `200`, `429`       | add `404` to spec — or drop in package |

## performance

| Source                                            | Frontend (api-models) | API spec (4.465.0)  | Resolution                             |
| ------------------------------------------------- | --------------------- | ------------------- | -------------------------------------- |
| `GET /v2/projects/{projectId}/straces/{straceId}` | handles `404`         | `400`, `403`, `429` | add `404` to spec — or drop in package |

## project

| Source                                      | Frontend (api-models) | API spec (4.465.0) | Resolution                             |
| ------------------------------------------- | --------------------- | ------------------ | -------------------------------------- |
| `GET /v2/projects/{projectId}`              | handles `404`         | `403`, `429`       | add `404` to spec — or drop in package |
| `GET /v2/project-invites/{projectInviteId}` | handles `403`         | `404`, `429`       | add `403` to spec — or drop in package |

## user

| Source                                                                            | Frontend (api-models)                                                  | API spec (4.465.0)                                 | Resolution                                                                                                      |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `DELETE /v2/users/self`                                                           | handles `409` (last owner → `isLastOwner`) and `404`                   | `200`, `202`, `412`, `400`, `429`                  | add `409`/`404` to spec — or drop in package (a `response.data.originalStatus === 409` fallback already exists) |
| `GET /v2/users/{userId}`                                                          | handles `400`                                                          | `403`, `404`, `412`                                | add `400` to spec — or drop in package                                                                          |
| `Components.Schemas.UserUser.registeredAt` (response of `GET /v2/users/{userId}`) | falls back to `DateTime.now()` when missing (else accounts look "new") | `registeredAt?` optional (presence not guaranteed) | backend returns `registeredAt` non-optional — or drop the fallback once the API is confirmed to return it       |

### user · spotlight

| Source                                                         | Frontend (api-models)                                            | API spec (4.465.0)                                                       | Resolution                                                                                               |
| -------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| `POST /v2/users/self/spotlights/{spotlightId}` · `/feedback`   | omits `owner` from both request bodies, cast away on `/feedback` | `owner` declared on both, **required** on `/feedback`                    | drop `owner` from the service schema — or have the client send it again                                  |
| `GET /v2/users/self/spotlights/{spotlightId}` — **behavioral** | expects `200` for an unknown record, as the spec declares        | `200`, `429`; the service answers `403` for a record that does not exist | service returns the `200` null state its own spec declares — or the spec declares what it really returns |

## Summary

- **26 missing status codes** across 13 areas (bridged via `anyStatus*`), each
  confirmed with the literal-status `tsc` probe against `4.465.0`.
- **3 behavioral/field deviations**: `auth` (checkToken endpoint), `domain`
  (findByHostname / route invalidation), `user` (registeredAt).
- **`user · spotlight`**: an omitted `owner` (required in the generated feedback
  type) and a `403` where the spec declares `200`.
- Notable: almost all missing codes are **`403` on protected `GET` detail
  endpoints** — worth a bundled spec check whether `403` is generally absent
  there.
