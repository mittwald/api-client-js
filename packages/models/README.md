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

**As a general advice when contributing, be sure to look at the existing source
code and use it as a template!**

Please consider the following conventions when adding or modifying models.

### File structure

Structure the models in meaningful directories.

### Use the base classes

Models should extend the correct base class. You can find the base classes in
`src/base`. The following classes are available.

#### `BaseModel`

The BaseModel is the foundation of all model classes and serves as a common
extension point for all models. The base model contains a generic `data`
property and an `id` property, as it is supposed, that every model is identified
by its ID.

### Stick to the ubiquitous language

When adding models or methods pay close attention to the (maybe existing)
language used in the respective domain. Talk to the responsible team if you are
uncertain.

### Single vs. List Items

The response type for some models often differs when loading single items or
lists. To reduce the amount of data, the list response type is usually a subset
of the comprehensive model. The different "data modes" are modelled inside the
`BaseModel` class, which supports generic parameters for `Data` and
`CompactData`. The generic `DataMode` parameter controls which data type is
actually used.

### Use the correct verbs

#### `find`

Models should have a static `find` method. The find method may return
`undefined` if the model can not be found.

#### `get`

In addition to the `find` method models should have a static `get` method. The
get method should return the desired object or throw an `ObjectNotFoundError`.
You can use the `find` method and assert the existence with the
`assertObjectFound` function.

#### `list`

When a list of objects should be loaded use a `list` method. It may support a
`query` parameter to filter the result by given criteria.

### Accessing "linked" models

Most of the models are part of a larger model tree. Models should provide
methods to get the parent and child models, like `project.getServer()`,
`server.listProjects()` or `server.getCustomer()`. Use `get`, `list` or `find`
prefixes.

### Abstraction of model behaviors

Models are usually backed by a set of behaviors, defining the basic model
interactions. In order to actually "use" the model, it must be initialized with
a concrete behavior implementation. This layer of abstraction removes
implementation specific code from the model, and also makes behaviors
exchangeable without any impact on the model itself - for example inside unit
tests.

Consider using behaviors for:

- API interactions
- Storing and loading local data
- Complex computations or logic (maybe supported by an external library)

#### Encapsulate API interaction inside behaviors

Encapsulate any API interaction inside the model behaviors to prevent strong
coupling of model and API-specific implementation.

##### Don't 🥴

```typescript
class Project {
  public static async find(id: string): Promise<Project | undefined> {
    const response = await client.project.getProject({
      id,
    });

    if (response.status === 200) {
      return new Project(response.data.id, response.data);
    }
    assertStatus(response, 403);
  }
}
```

##### Do 😃

```typescript
class Project {
  public static async find(id: string): Promise<Project | undefined> {
    const data = await Project.behaviors.find(id);
    if (data !== undefined) {
      return new Project(data.id, data);
    }
  }
}
```
