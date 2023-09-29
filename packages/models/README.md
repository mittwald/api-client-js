# mittwald API models

This package contains a collection of domain models for coherent interaction
with the mittwald API.

## License

Copyright (c) 2023 Mittwald CM Service GmbH & Co. KG and contributors

This project (and all NPM packages) therein is licensed under the MIT License;
see the [LICENSE](../../LICENSE) file for details.

## Installing

You can install this package from the regular NPM registry:

```shell
yarn add @mittwald/api-models
```

## Contribute

Please consider the following conventions when adding or modifying models.

**Be sure to look at the existing source code and use it as a template!**

### File structure

Structure the models in meaningful directories.

### Use the base classes

Models should extend the correct base class. You can find the base classes in
`src/base`. The following classes are available.

#### `BaseModel`

The BaseModel is the foundation of all model classes and serves as a common
extension point for all models. The base model contains a generic `data`
property and an `id` property.

### Single vs. List Items

The response type for some models often differs when loading single items or
lists. To reduce the amount of data, the list response type is usually a subset
of the comprehensive model. The different "data modes" are modelled inside the
`BaseModel` class, which supports generic parameters for `Data` and
`CompactData`. The generic `DataMode` parameter controls which data type is
actually used.

### Use the correct verbs

#### `find`

Single models that can be loaded from the API should have a static `find`
method. The find method may return `undefined` if the object can not be found.

#### `get`

In addition to the `find` method single models should have a static `get`
method. The get method should return the desired object or throw an
`ObjectNotFoundError`. You can use the `find` method and assert the existence
with the `assertObjectFound` function.

#### `list`

When a list of objects should be loaded from the API use a `list` method. It may
support a `query` parameter to filter the result by given criteria.
