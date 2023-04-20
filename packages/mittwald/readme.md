## Usage

Import the client:

```typescript
import MittwaldApiClient from "@mittwald/api-client/v2";
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
import MittwaldApiClient from "@mittwald/api-client-mittwald/v2";

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
