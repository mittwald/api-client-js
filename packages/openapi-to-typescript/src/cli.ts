import yargs from "yargs";
import { Spec } from "./Spec";
import { OraStatusLog } from "./statusLog";
import { CompareResult, LockFile } from "./LockFile";
import { getSubFileName } from "./lib";
import inquirer from "inquirer";
import "colors";

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

Spec.fromFiles(
    namespace,
    _.map((a) => a.toString()),
    { statusLog: new OraStatusLog(), throwErrors: displayErrors, skipValidation },
)(async (spec) => {
    const lockfileName = getSubFileName(output, ".spec.lock");
    const lockfile = LockFile.fromFile(lockfileName) ?? LockFile.fromSpec(spec.normalized);
    const detectedChanges = lockfile.compare(spec.normalized);

    const acceptedChanges: CompareResult[] = [];

    for (const change of detectedChanges) {
        let answered = false;
        while (!answered) {
            const answer = await inquirer.prompt<{ update: "yes" | "no" | "diff" }>([
                {
                    type: "expand",
                    message: `The ${change.target} '${change.name}' ${
                        change.changeType === "changed" ? "has changed" : change.changeType === "new" ? "is new" : "has removed"
                    }. Accept changes?`,
                    name: "update",
                    choices: [
                        {
                            key: "y",
                            name: "Yes",
                            value: "yes",
                        },
                        {
                            key: "n",
                            name: "No",
                            value: "no",
                        },
                        change.diffInfos
                            ? {
                                  key: "d",
                                  name: "Show diff",
                                  value: "diff",
                              }
                            : undefined,
                    ],
                },
            ]);

            switch (answer.update) {
                case "yes":
                    acceptedChanges.push(change);
                    answered = true;
                    break;
                case "no":
                    answered = true;
                    break;
                case "diff":
                    if (change.diffInfos) {
                        let diffText = "";
                        change.diffInfos.forEach((part) => {
                            // green for additions, red for deletions
                            // grey for common parts
                            const color = part.added ? "green" : part.removed ? "red" : "grey";
                            diffText += part.value[color];
                        });
                        console.log("");
                        console.log(`Diff for ${change.target} ${change.name["bold"]}:`);
                        console.log("");
                        console.log(diffText);
                    }
                    break;
            }
        }
    }

    const specWithChanges = lockfile.applyChanges(spec.normalized, acceptedChanges);
    spec.updateSpec(specWithChanges);

    spec.writeClient(output, !!react);
    spec.writeRequestMockingFactory(output);

    lockfile.write(lockfileName);
});
