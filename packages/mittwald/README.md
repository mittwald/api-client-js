# mittwald API JavaScript client

This package contains a (mostly auto-generated) JavaScript client for the
mittwald API.

## License

Copyright (c) 2023 Mittwald CM Service GmbH & Co. KG and contributors

This project (and all NPM packages) therein is licensed under the MIT License;
see the [LICENSE](../../LICENSE) file for details.

## Installing

You can install this package from the regular NPM registry:

```shell
yarn add @mittwald/api-client
```

## Usage

Import the client:

```typescript
import { MittwaldAPIV2Client } from "@mittwald/api-client";
```

To create a client instance you can use one of the following factory method for
different types of authentication:

1. `MittwaldAPIClient.newUnauthenticated()`
2. `MittwaldAPIClient.newWithToken(apiToken: string)` (recommended)
3. `MittwaldAPIClient.newWithCredentials(email: string, password: string)` (does
   actually perform a login in the background and thus returns a promise)

Have a look at our [API introduction][api-getting-started] for more information
on how to obtain an API token and how to get started with the API.

### Setting request parameters

API requests may require these type of parameters:

- path parameters
- headers
- query parameters
- request body

#### Path parameters

Path parameters are variable parts of a URL path. They are typically used to
point to a specific resource within a collection, such as a project identified
by ID. A URL can have several path parameters, each denoted with curly braces
`{ }`.

```
/v2/projects/{projectId}
```

Path parameters **are required** and must be directly defined inside the request
object.

```javascript
// Setting the projectId path parameters
const project = await mittwaldApi.project.get({
  projectId: "p-xxxxx",
});
```

#### Headers, query parameters and request body

Depending on the operation, you must configure additional parameters, such as
`queryParameters` (URL query parameters), `headers` (HTTP headers), and `data`
(request body).

The operations and their parameters are documented in the
[API documentation](https://developer.mittwald.de/reference/v2/).

When using TypeScript all parameter schemas are reflected by the request type,
so you will get compile errors, when a request does not match the schema.

```javascript
// Setting the projectId path parameters
const response = await mittwaldApi.category.operation({
  // path parameters
  pathParameter1: "param1",
  pathParameter2: "param2",
  // parameters in header
  headers: {
    "x-header": "header",
  },
  // query parameters
  queryParameters: {
    queryParameters1: "queryParam1",
    queryParameters2: "queryParam2",
  },
  // JSON object in request body
  data: {
    data1: "data1",
    data2: "data2",
  },
});
```

## Example

```typescript
import { MittwaldAPIV2Client } from "@mittwald/api-client";

const mittwaldApi = MittwaldAPIClient.newWithToken("your-access-token");

const projects = await mittwaldApi.project.listProjects();
```

## API documentation

The API documentation can be found at
[https://api.mittwald.de/v2/docs/](https://api.mittwald.de/v2/docs/). You can
find the operation ID on the right side of each operation.

## Accessing the underlying Axios instance

The client uses the popular [Axios HTTP client](https://axios-http.com) under
the hood. You may access the Axios instance with the clients `axios` property.

### Adding custom HTTP headers

To add custom HTTP headers to all requests you can use Axios' `defaults.headers`
property:

```typescript
client.axios.defaults.headers["User-Agent"] = `your-tool/v1.2.3`;
```

### Intercepting requests or responses

To intercept requests or responses you can use
[Axios' interceptors](https://axios-http.com/docs/interceptors).

[pkg-auth]:
  https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages
[api-getting-started]: https://developer.mittwald.de/docs/v2/api/intro

## Usage with TypeScript

All response and request types can be imported from the `MittwaldAPIV2`
namespace.

### Importing types

```typescript
import { MittwaldAPIV2 } from "@mittwald/api-client";

type Project =
  MittwaldAPIV2.Paths.V2Projects.Get.Responses.$200.Content.ApplicationJson[number];
```

## Migrating vom V2 to V3

Path parameters are a primary component of the request and thus should not be
"hidden" in the request config object. In V3 the API of the request
configuration object has changed, and you have to set the path parameters
directly in the root level of the request object.

```javascript
// V2
mittwaldApi.project.get({
  pathParameters: {
    projectId: "p-xxxxx",
  },
});

// V3
mittwaldApi.project.get({
  projectId: "p-xxxxx",
});
```
