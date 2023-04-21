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

Login to the registry. **You need a personal access token with with the 'repo',
'write:packages', and 'read:packages' permissions.**

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

Also see GitHub docs
[Working with the npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages);

## Usage

Import the client:

```typescript
import MittwaldApiClient from "@mittwald/api-client/dist/v2";
```

To create a client instance you can use one of the following factory method for
different types of authentication:

1. `MittwaldApiClient.newUnauthenticated()`
2. `MittwaldApiClient.newWithToken(apiToken: string)` (recommended)
3. `MittwaldApiClient.newWithCredentials(email: string, password: string)` (does
   actually perform a login in the background and thus returns a promise)

To create an API token, login to the [mStudio](https://studio.mittwald.de) and
navigate to [_API-Token_](https://studio.mittwald.de/app/profile/api-tokens) in
your profile settings.

## Example

```typescript
import MittwaldApiClient from "@mittwald/api-client/dist/v2.js";

const mittwaldApi = MittwaldApiClient.newWithToken("your-access-token");

const projects = await mittwaldApi.projectServiceProjectsGetList();
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
