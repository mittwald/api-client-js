import yargs from "yargs";
import { Spec } from "./Spec";
import { OraStatusLog } from "./statusLog";

const { namespace, input, types, descriptors, client, displayErrors } = yargs
    .option("input", {
        string: true,
        array: true,
        alias: "i",
        description: "OpenAPI input filenames (local or http / YAML or JSON)",
        demandOption: true,
    })
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
    })
    .option("client", {
        string: true,
        alias: "c",
        description: "client output filename",
    })
    .option("displayErrors", {
        boolean: true,
        alias: "e",
        description: "show full error stack",
        demandOption: false,
    })
    .option("namespace", {
        string: true,
        alias: "n",
        description: "TypeScript namespace where the types are generated",
        default: "API",
    }).argv;

Spec.fromFiles(namespace, input, { statusLog: new OraStatusLog(), throwErrors: displayErrors })((spec) => {
    spec.writeTypes(types);
    if (descriptors) {
        spec.writeDescriptors(descriptors);
    }
    if (client) {
        spec.writeClient(client);
    }
});
