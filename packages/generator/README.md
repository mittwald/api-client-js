Common code base used by `@mittwald/api-client-*` package.

## CLI

Use the CLI commands provided by this package to build your API client and
validate the OpenAPI-Spec:

```shell
acg validate spec/openapi.json
acg generate --name MittwaldAPIV2 spec/openapi.json src/generated --optionalHeader x-access-token
```

## TypeScript API

If you need to generate the client in code, you can use the TypeScript API
demonstrated in this template:

```typescript
import * as path from "path";
import { UniversalContentLoader } from "@mittwald/api-code-generator/js";
import { UniversalFileLoader } from "@mittwald/api-code-generator/js";
import { OpenApiSpec } from "@mittwald/api-code-generator/js";
import { CodeGenerationModel } from "@mittwald/api-code-generator/js";
import { prepareTypeScriptOutput } from "@mittwald/api-code-generator/js";
import { writeIfChangedAsync } from "@mittwald/api-code-generator/js";

const name = "MittwaldAPIV2";
const inout = `${process.cwd()}/spec/openapi.json`;
const output = `${process.cwd()}/src/generated`;

// Loading OpenAPI spec
const loader = new UniversalContentLoader(new UniversalFileLoader(input));
const openApiDoc = await loader.load();

// Parsing OpenAPI spec
const spec = await OpenApiSpec.parse(openApiDoc, {
  skipValidation: flags.skipValidation,
});

// Building transformation model
const model = CodeGenerationModel.fromDoc(name, spec.document);

// Generating descriptors
const descriptorsFileContent = model.paths.compileDescriptors();
await writeIfChangedAsync(
  path.join(output, "descriptors.ts"),
  await prepareTypeScriptOutput(descriptorsFileContent),
);

// Generating types
const typesFileContent = await model.compileTypes({
  rootNamespace: flags.name,
  optionalHeaders: ["x-access-token"],
});
await writeIfChangedAsync(
  path.join(output, "types.ts"),
  await prepareTypeScriptOutput(typesFileContent),
);

// Generating client
const clientFileContent = model.paths.compileClient();
await writeIfChangedAsync(
  path.join(output, "client.ts"),
  await prepareTypeScriptOutput(clientFileContent),
);

// if needed: Generating React client
const reactClientFileContent = model.paths.compileReactClient();
await writeIfChangedAsync(
  path.join(output, "client-react.ts"),
  await prepareTypeScriptOutput(reactClientFileContent),
);
```
