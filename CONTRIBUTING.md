# mittwald API toolset -- Contribution guide

## General considerations

- We enforce a uniform coding style across this project. Please make sure to run
  `yarn format` before committing your changes.
- Nearly all files in the `@mittwald/api-client` package are generated from the
  OpenAPI spec. Please do not edit these files manually. Instead, edit the
  corresponding template files in the `packages/generator/resources/templates`
  directory.

## Building locally

Requirements for building the project locally:

- [Node.JS](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

To build the project locally, run the following commands:

```shell
$ yarn install
$ yarn compile
```

To run the test suite, run the following command:

```shell
$ yarn test
```
