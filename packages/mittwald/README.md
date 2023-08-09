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
