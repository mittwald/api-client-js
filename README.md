# mittwald API toolset

This repository contains a set of JavaScript/TypeScript packages to interact
with the mittwald API.

The following packages are relevant:

- [`@mittwald/api-client`](packages/mittwald/README.md) is an auto-generated
  client for the mittwald API. The client is generated from the OpenAPI spec.
- [`@mittwald/api-client-commons`](packages/commons/README.md) contains common
  code that is used by the auto-generated client, but which is _not_
  auto-generated itself.

The following packages are not relevant for users of the auto-generated client,
but may be of interest if you are interested in contributing to the project:

- [`@mittwald/api-client-generator`](packages/generator/README.md) contains the
  necessary tools to _build_ the auto-generated client. Note that, as a user,
  you usually should not have any reason to directly use this package.

## License

Copyright (c) 2023 Mittwald CM Service GmbH & Co. KG and contributors

This project (and all NPM packages) therein is licensed under the MIT License;
see the [LICENSE](LICENSE) file for details.

## Feedback

Please use this project's
[issue tracker](https://github.com/mittwald/api-client-js/issues) to report
specific suggestions or issues, or alternative ly the
[discussion board](https://github.com/mittwald/api-client-js/discussions) for
more open-ended discussions or general Q&A.

For security-related issues, please refrain from using the public issue tracker
or discussion board. Have a look at the [security policy](./SECURITY.md),
instead.

Also, please note that neither the issue tracker nor the discussion board are a
support channel for mittwald's hosting products. Please use our regular
[support options](https://www.mittwald.de/impressum) to receive product support.

## Contributing

We are happy to accept external contributions to our documentation. See the
[Contribution guide](./CONTRIBUTING.md) for more information.
