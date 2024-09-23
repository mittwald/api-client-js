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

## Setup

You will need to initialize an API client in order to operate with the models
provided by this package. Use the `api` global instance for initialization with
some methods.

```typescript
import { api } from "@mittwald/api-models";

api.setupWithApiToken(process.env.MW_API_TOKEN);
```

## Examples

- A **`Reference`** or `ReferenceModel` represents a certain model just by its
  ID.
- A **`DetailedModel`** contains all the data of the resource.

For a more detailed description refer to the section
[Type of models](#Type-of-models)

```typescript
// Get a detailed project
const detailedProject = await Project.get("p-vka9t3");

// Create a project reference
const projectRef = Project.ofId("p-vka9t3");

// Get the detailed project from the reference
const anotherDetailedProject = await projectRef.getDetailed();

// Update project description
await detailedProject.updateDescription("My new description!");

// This method just needs the ID and a description and
// thus is also available on the reference
await projectRef.updateDescription("My new description!");

// Accessing the projects server reference
const server = project.server;

// List all projects of this server
const serversProjects = await server.projects.execute();

// List all projects
const allProjects = await Project.query().execute();

// Iterate over project List Models
for (const project of serversProjects) {
  await project.leave();
}
```

## Usage in React

This package also provides methods aligned to be used in React components. It
uses
[@mittwald/react-use-promise](https://www.npmjs.com/package/@mittwald/react-use-promise)
to encapsulate all asynchronous functions into AsyncResources. More details
about how to use AsyncResources see the package documentation.

### Installation

To use the React client you have to install the additional
`@mittwald/react-use-promise` package:

```shell
yarn add @mittwald/react-use-promise
```

All asynchronous methods provide a `use`-method property. This method uses
[@mittwald/react-use-promise](https://www.npmjs.com/package/@mittwald/react-use-promise)
under the hood to "resolve" the promise in the "React way".

```typescript
const detailedProject = Project.get.use("p-vka9t3");

// Create a project reference
const projectRef = Project.ofId("p-vka9t3");

// Get the detailed project from the reference
const anotherDetailedProject = projectRef.getDetailed.use();

// Accessing the projects server reference
const server = project.server;

// List all projects of this server
const serversProjects = server.projects.execute.use();

// List all projects
const allProjects = Project.query().execute.use();
```

## Immutability and state updates

Most of all models provided by this package represent an associated counter-part
in the backend. When a model is loaded from the backend, the current state is
incorporated into the model instance. To keep it simple and predictable this
**state is immutable and does not change under any circumstances**. As a result
you must create a new instance to get an updated model and propagate it
throughout the runtime code.

This also applies for operations initiated at client-side. For example when the
`updateDescription` method is called on a project, the project instance will
still have the old description.

"Watching for changes" is not scope of this package and will be implemented in
future releases or other packages™️.

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

#### `ReferenceModel`

A ReferenceModel represents a certain model just by its ID. As the most basic
model operations often just need the ID and some input data (deleting, renaming,
...), Reference Models can avoid unnecessary API round trips.

### Stick to the ubiquitous language

When adding models or methods pay close attention to the (maybe existing)
language used in the respective domain. Talk to the responsible team if you are
uncertain.

### Models as abstraction layer

Models should cover the following aspects:

- Coherent representation of the business logic
- Simple loading of models and their linked entities
- Methods to interact with the model in an intuitive way
- Preprocessing of the models raw data to increase DX
- Consistent API

### Type of models

#### Detailed vs. List Models

The response type for some models often differs when loading single items or
lists. To reduce the amount of data, the list response type is usually a subset
of the comprehensive model. Add separate classes for the Detailed Model (name it
`[Model]Detailed`) and the List Model (name it `[Model]ListItem`).

If both model share a common code base, you should add a Common Model (name it
`[Model]Common`).

#### Reference Models

A Reference Model represents a certain model just by its ID. As the most basic
model operations often just need the ID and some input data (deleting, renaming,
...), Reference Models can avoid unnecessary API round trips. These classes
should be used as a return type for newly created models or for linked models.

To get the actual Detailed Model, Reference Models _must_ have a
`function getDetailed(): Promise<ModelDetailed>` and
`function findDetailed(): Promise<ModelDetailed|undefined>` method.

Consider extending the Reference Model when implementing the Entry-Point Model.

#### Query Models

Querying models usually requires a query object – or short query. The query
mostly includes pagination settings like `limit`, `skip` or `page`. It may also
include filters like `fromDate` or `toDate`, and filters to other models like
`customerId`.

A Query Model represents a specific query to a specific model and should include
the following methods:

- `execute()`: executes the query and returns the respective List Model
- `refine(overrideQuery)`: creates a new Query Model with a refined query object
- `getTotalCount()`: gets the total count of the query (executes the query with
  `limit: 0`)

When a model supports queries, it should provide a static `query()` method to
create the respective Query Model.

When a model is used as a query parameters in a Query Model, the model should
have a property in its Reference Model for this Query Model. See the following
example:

```typescript
class Server {
  public readonly projects: ProjectsListQuery;

  public constructor(id: string) {
    this.projects = new ProjectListQuery({
      server: this,
    });
  }
}
```

#### List Models

List Models are the result of a Query Model execution. A List Model includes

- a list of the respective List Models, limited by the pagination configuration
- the available total count (useful to implement pagination or count data)

List Models should extend their respective Query Model, because it might be
helpful to also call `refine()` on an already executed query.

#### Implementation details

When implementing shared functionality, like in the Common Models, you can use
the [`polytype`](https://www.npmjs.com/package/polytype) library to realize
dynamic multiple inheritance. Be sure to look at the existing source code for
implementation examples.

#### Entry-Point Model

Provide a single model (name it `[Model]`) as an entry point for all different
model types (detailed, query, ...). As a convention provide a default export for
this model.

### Use the correct verbs

#### `find`

Entry-Point models should have a static `find` method. The find method returns
the detailed model or may return `undefined` if the model can not be found.

#### `get`

In addition to the `find` method Entry-Point models should have a static `get`
method. The get method should return the desired object or throw an
`ObjectNotFoundError`. You can use the `find` method and assert the existence
with the `assertObjectFound` function.

#### `query`

When a list of objects should be queried use a `query` method. It may support a
`query` parameter to filter the result by given criteria.

#### `create`

When a model should be created use a static `create` method. This method should
return a reference of the created resource.

### Accessing "linked" models

Most of the models are part of a larger model tree. Models should provide
properties to get the parent and child models, like `project.server`,
`server.projects` or `server.customer`.

#### Use Reference Models resp. Entry-Point Models when possible!

If a linked model provides a Reference Model or Entry-point Model, create it in
the model constructor, to avoid unnecessary API round trips.

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
    const data = await config.project.behaviors.find(id);
    if (data !== undefined) {
      return new Project(data.id, data);
    }
  }
}
```

#### How-to implement behaviors

Place a `behaviors` folder inside the model that should look like this:

```
Project/
├─ behaviors/
│  ├─ index.ts
│  ├─ types.ts (behavior interface)
│  ├─ api.ts   (behavior implementation)
│  ├─ inmem.ts (behavior implementation)

```

##### Define `types.ts` first

It is a good starting point to first implement the interface for the behavior.
The interface usually just defines methods used in the behavior. Like

```ts
export interface ProjectBehaviors {
  find: (id: string) => Promise<ProjectData | undefined>;
  updateDescription: (projectId: string, description: string) => Promise<void>;
}
```

Then register the behavior in the global behavior configuration
`packages/models/src/config/config.ts`.

##### Use the behaviors in the model

If the behavior interface is defined, you can start implementing the model. You
can also first implement the concrete API behavior, to "proof" the behavior is
"working" with the real API.

```ts
import { config } from "../../config/config.js";

class ProjectDetailed {
  public static async find(id: string): Promise<ProjectDetailed | undefined> {
    const data = await config.project.behaviors.find(id);
    if (data !== undefined) {
      return new Project(data.id, data);
    }
  }
}
```

##### Implement the API behavior

The API behavior depends on an API client. You can implement the behavior as an
object factory, or a simple class implementing the interface. When using the
object factory, you do not have to redeclare the method parameter types.

Do the implementation specific stuff, thus preparing and executing the request,
and finally processing the response.

```ts
import { ProjectBehaviors } from "./types.js";
import { assertStatus, MittwaldAPIV2Client } from "@mittwald/api-client";

export const apiProjectBehaviors = (
  client: MittwaldAPIV2Client,
): ProjectBehaviors => ({
  find: async (id) => {
    const response = await client.project.getProject({
      projectId: id,
    });

    if (response.status === 200) {
      return response.data;
    }
    assertStatus(response, 403);
  },
});
```

### Prepare for React

All asynchronous methods should provide a `use`-method property. This method
uses
[@mittwald/react-use-promise](https://www.npmjs.com/package/@mittwald/react-use-promise)
under the hood to "resolve" the promise in the "React way".

To provide this feature to your _async_ model methods, wrap the actual method
with the `provideReact` enhancer.

```ts
class ProjectDetailed {
  public static find = provideReact(
    async (id: string): Promise<ProjectDetailed | undefined> => {
      const data = await config.behaviors.project.find(id);

      if (data !== undefined) {
        return new ProjectDetailed(data);
      }
    },
  );
}
```
