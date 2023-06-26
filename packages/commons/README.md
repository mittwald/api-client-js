Common code base used by `@mittwald/api-client-*` package.

## API

### assertStatus

The API client does not validate any response status by design, to give you the
most flexibility while handling also erroneous responses. If you want to assert
some desired response status, you can use the `assertStatus` function.

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
