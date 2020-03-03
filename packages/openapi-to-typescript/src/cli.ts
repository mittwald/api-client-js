import yargs from "yargs";
import { Spec } from "./Spec";
import { OraStatusLog } from "./statusLog";

const { namespace, types, descriptors, client, displayErrors, skipValidation, reactHooks, clientModule, _ } = yargs
    .usage("openapi2ts [options] [url/file...]")
    .example(
        "Full example",
        `
openapi2ts
    --types src/client/types.ts
    --descriptors src/client/descriptors.ts
    --client src/client/PetStoreClient.ts
    --clientModule src/client/petstoreClient.ts
    --reactHooks src/client/hooks.ts
    --namespace PetStore
    http://petstore.swagger.io:8080/api/v3/openapi.json`,
    )
    .option("types", {
        string: true,
        alias: "t",
        description: "types output filename",
        demandOption: true,
    })
    .option("descriptors", {
        string: true,
        alias: "d",
        description: "descriptors output filename",
        implies: "types",
    })
    .option("client", {
        string: true,
        alias: "c",
        description: "client output filename",
        implies: "descriptors",
    })
    .option("reactHooks", {
        string: true,
        alias: "h",
        description: "React hooks output filename",
        implies: ["client", "clientModule"],
    })
    .option("clientModule", {
        string: true,
        description: "Node module exporting an initialized client as default",
    })
    .option("displayErrors", {
        boolean: true,
        alias: "e",
        description: "show full error stack",
        demandOption: false,
    })
    .option("skipValidation", {
        boolean: true,
        alias: "s",
        description: "skip OpenAPI spec validation",
        demandOption: false,
    })
    .option("namespace", {
        string: true,
        alias: "n",
        description: "TypeScript namespace where the types are generated",
        default: "API",
    }).argv;

Spec.fromFiles(namespace, _, { statusLog: new OraStatusLog(), throwErrors: displayErrors, skipValidation })((spec) => {
    spec.writeTypes(types);
    if (descriptors) {
        spec.writeDescriptors(descriptors, types);
        if (client) {
            spec.writeClient(client, descriptors);
        }
    }
    if (reactHooks) {
        if (!clientModule) {
            throw new Error("Missing option --clientModule");
        }
        spec.writeReactHooks(reactHooks, clientModule);
    }
});
