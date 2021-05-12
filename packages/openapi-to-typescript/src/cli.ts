import yargs from "yargs";
import { Spec } from "./Spec";
import { OraStatusLog } from "./statusLog";
import { CompareResult, LockFile } from "./LockFile";
import { getSubFileName } from "./lib";
import inquirer, { ChoiceCollection } from "inquirer";
import "colors";

void (async () => {
    const { namespace, output, displayErrors, skipValidation, askForFiles, react, _: allFiles } = yargs
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
        .option("askForFiles", {
            boolean: true,
            alias: "a",
            description: "select from multiple files",
            demandOption: false,
        })
        .option("namespace", {
            string: true,
            alias: "n",
            description: "TypeScript namespace where the types are generated",
            default: "API",
        }).argv;

    let files = allFiles.map((f) => f.toString());

    if (files.length > 1 && askForFiles) {
        const answer = await inquirer.prompt([
            {
                type: "checkbox",
                name: "files",
                message: "Select sources:",
                choices: allFiles.map((file, index) => ({
                    name: file,
                    value: file,
                    checked: index === 0,
                })),
            },
        ]);

        files = answer.files;
    }

    Spec.fromFiles(namespace, files, { statusLog: new OraStatusLog(), throwErrors: displayErrors, skipValidation })(async (spec) => {
        const lockfileName = getSubFileName(output, ".spec.lock");
        const lockfile = LockFile.fromFile(lockfileName) ?? LockFile.fromSpec(spec.normalized);
        const detectedChanges = lockfile.compare(spec.normalized);

        const acceptedChanges: CompareResult[] = [];

        for (const change of detectedChanges) {
            let answered = false;
            while (!answered) {
                const choices: ChoiceCollection = [
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
                ];

                if (change.diffInfos) {
                    choices.push({
                        key: "d",
                        name: "Show diff",
                        value: "diff",
                    });
                }

                const answer = await inquirer.prompt<{ update: "yes" | "no" | "diff" }>([
                    {
                        type: "expand",
                        message: `The ${change.target} '${change.name}' ${
                            change.changeType === "changed" ? "has changed" : change.changeType === "new" ? "is new" : "has removed"
                        }. Accept changes?`,
                        name: "update",
                        choices,
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
})();
