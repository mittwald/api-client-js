# mittwald API JavaScript client

This package contains a (mostly auto-generated) JavaScript client for the
mittwald API.

## License

Copyright (c) 2023 Mittwald CM Service GmbH & Co. KG and contributors

This project (and all NPM packages) therein is licensed under the MIT License;
see the [LICENSE](../../LICENSE) file for details.

## ⚠️ STABILITY NOTICE

This package is currently in an early stage of development. While our API is
generally stable, the client is not. Especially the operation IDs (which are
used as method names) are SUBJECT TO CHANGE in the future. Since the underlying
API routes are stable, the client will continue to work, but you may need to
update your code with subsequent versions.

## Installing

### With Yarn

#### Install Yarn 4

At this moment you need to use Yarn 4 due to this
[registry login issue](https://github.com/yarnpkg/berry/issues/4341#issuecomment-1477122723).

```shell
yarn set version berry
yarn set version 4
```

#### Configure package registry

In order to install the package from https://npm.pkg.github.com, you must
configure the `mittwald` scope.

```shell
yarn config set npmScopes.mittwald.npmRegistryServer https://npm.pkg.github.com
```

Login to the registry. **You need a personal access token with with the `repo`,
`write:packages`, and `read:packages` permissions.**

```shell
yarn npm login --scope mittwald
```

Alternatively you can add the token to the config. Do not commit the
`.yarnrc.yml` file to VCS when using this method!

```shell
yarn config set npmScopes.mittwald.npmAuthToken <TOKEN>
```

Now you can install the package as usual.

```shell
yarn add @mittwald/api-client
```

Also see the section on [working with the npm registry][pkg-auth] in the Github
docs.

## Usage

Import the client:

```typescript
import MittwaldAPIClient from "@mittwald/api-client/dist/v2.js";
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
import MittwaldAPIClient from "@mittwald/api-client/dist/v2.js";

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

### Intercepting requests or responses

To intercept requests or responses you can use
[Axios' interceptors](https://axios-http.com/docs/interceptors).

[pkg-auth]:
  https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages
[api-getting-started]: https://developer.mittwald.de/docs/v2/api/intro
