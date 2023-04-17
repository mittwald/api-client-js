# API Client Generator (acg)

A CLI to generate an API client with typings.

## Install

```shell
yarn add @mittwald/api-client-generator @mittwald/api-client-commons
```

## Code generation

See CLIs help with

```shell
yarn acg --help
```

## Usage

The client instance offers request functions for each of the operations provided
in the underlying OpenAPI spec.

When accessing the response data with TypeScript, you have to use the status
code as a type-guard to get the correct data type.

```typescript
const response = await apiClient.getStuff();

if (response.status === 200) {
  console.log(response.data.stuff.name);
} else if (response.status === 400) {
  console.log(response.data.error);
}
```
