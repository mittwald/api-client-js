Common code base used by `@mittwald/api-client-*` package.

## API

### assertStatus, assertOneOfStatus

The API client does not validate any response status by design, to give you the
most flexibility while handling also erroneous responses. If you want to assert
some desired response status, you can use the `assertStatus` resp.
`assertOneOfStatus` function.

#### assertStatus(response, expectedStatus)

Returns: void

This method throws an `ApiClientError` if the given `response` does not match
the `expectedStatus`.

When you are using TypeScript this function also asserts the correct response
type.

```ts
const response = await client.project.getProject({
  pathParameters: {
    projectId: "...",
  },
});

assertStatus(response, 200);

const project = response.data;
// Project properties can now be accessed safely
const name = project.name;
```

#### assertOnOfStatus(response, expectedStatus)

Returns: void

This method throws an `ApiClientError` if the given `response` does not match
the `expectedStatus`.

When you are using TypeScript this function also asserts the correct response
type.

```ts
const response = await client.project.getProject({
  pathParameters: {
    projectId: "...",
  },
});

assertOneOfStatus(response, [200, 404]);

if (!response.data) {
  console.log("Project not found");
}
```

### Common interceptors

To make it easy to opt in to some API mechanisms, a few
[interceptors](https://axios-http.com/docs/interceptors) can be easily
configured.

#### withAccessToken

In most cases you want to add the users access token to every API-Request as a
request header. This can be tedious if you need to do this on your own. To
automatically set the request header use `withAccessToken` for your `APIClient`
instance.

```ts
const client = new APIClient({ baseURL });
const authenticatedClient = withToken(client, token);
```
