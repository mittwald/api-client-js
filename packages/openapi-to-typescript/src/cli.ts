import yargs from "yargs";
import { Spec } from "./Spec";
import { OraStatusLog } from "./statusLog";

const { namespace, output, displayErrors, skipValidation, react, _ } = yargs
    .usage("openapi2ts [options] [url/file...]")
    .example(
        "Full example",
        `
openapi2ts -o src/api/PetStoreApiClient.ts -n PetStore http://petstore.swagger.io:8080/api/v3/openapi.json
`,
    )
    .option("output", {
        string: true,
        alias: "o",
        description: "client output filename",
        demandOption: true,
    })
    .option("displayErrors", {
        boolean: true,
        alias: "e",
        description: "show full error stack",
        demandOption: false,
    })
    .option("react", {
        boolean: true,
        alias: "r",
        description: "generate React hooks",
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
    spec.writeClient(output, !!react);
    spec.writeRequestMockingFactory(output);
});
