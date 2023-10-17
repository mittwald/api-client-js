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

## Immutability and state updates

Most of all models provided by this package represent an associated counter-part
in the backend. When a model is loaded from the backend, the current state is
incorporated into the model instance. To keep it simple and predictable this
**state is immutable and does not change under any circumstances**. As a result
you must create a new instance to get an updated model and propagate it
throughout the runtime code.

This also applies for operations initiated at your client-side. For example when
you call the `updateDescription` method on a project, the project instance will
still have the old description.

"Watching for changes" will be implemented in future releases™️.

## Contribute

**As a general advice when contributing, be sure to look at the existing source
code and use it as a template!**

Please consider the following conventions when adding or modifying models.

### File structure

Structure the models in meaningful directories.

### Use the base classes

Models should extend (or inherit) the correct base class. You can find the base
classes in `src/base`. The following classes are available.

#### `DataModel`

The DataModel is the foundation of all model classes that contain a set of
immutable generic data.

#### `ProxyModel`

A ProxyModel represents a certain model just by its ID. As the most basic model
operations often just need the ID and some input data (deleting, renaming, ...),
Proxy Models can avoid unnecessary API round trips.

### Stick to the ubiquitous language

When adding models or methods pay close attention to the (maybe existing)
language used in the respective domain. Talk to the responsible team if you are
uncertain.

### Type of models

#### Detailed vs. List Models

The response type for some models often differs when loading single items or
lists. To reduce the amount of data, the list response type is usually a subset
of the comprehensive model. Add separate classes for the Detailed Model (name it
`[Model]Detailed`) and the List Model (name it `[Model]ListItem`).

If both model share a common code base, you should add a Base Model (name it
`[Model]Base`).

#### Proxy models

A Proxy Model represents a certain model just by its ID. As the most basic model
operations often just need the ID and some input data (deleting, renaming, ...),
Proxy Models can avoid unnecessary API round trips. These classes can be used as
a return type for new created models or for linked models.

To get the actual Detailed Model, Proxy Models should have a
`function get(): Promise<ModelDetailed>` method.

#### Implementation details

When implementing shared functionality, like in the Base Models, you can use the
[`polytype`](https://www.npmjs.com/package/polytype) library to realize dynamic
multiple inheritance. Be sure to look at the existing source code for
implementation examples.

#### Entry point model

Provide a single model as an entry point for all different model types
(detailed, list, proxy, ...). As a convention provide a default export for this
model. You can also use `polytype` to put all models together.

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

#### Use Proxy Models when possible!

When a linked model provides a Proxy Model, create it in the model constructor,
to avoid unnecessary API round trips.

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
class ProjectDetailed {
  public static async find(
    id: string,
  ): Promise<ProjProjectDetailed | undefined> {
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
class ProjectDetailed {
  public static async find(id: string): Promise<ProjectDetailed | undefined> {
    const data = await Project.behaviors.find(id);
    if (data !== undefined) {
      return new Project(data.id, data);
    }
  }
}
```

## Examples

```typescript
// Get a detailed project
const project = await Project.get("497f6eca-6276-4993-bfeb-53cbbbba6f08");

// Create a project proxy
const projectProxy = Project.createProxy(
  "497f6eca-6276-4993-bfeb-53cbbbba6f08",
);

// Get the project from the proxy
const detailedProject = await projectProxy.getDetailed();

// Update project description
await project.updateDescription("My new description!");

// This method just needs the ID and a description and
// thus is also available on the proxy!
await projectProxy.updateDescription("My new description!");

// Accessing the projects server (proxy)
const server = project.server;

// List all projects of this server
const serversProjects = await server.listProjects();

// List all projects
const allProjects = await Project.list();

// Iterate over project List Models
for (const project of serversProjects) {
  await project.leave();
}
```
