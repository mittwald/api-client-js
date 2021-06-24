import yargs from "yargs";
import { Spec } from "./Spec";
import { getStatusLog, OraStatusLog } from "./statusLog";
import { CompareResult, LockFile } from "./LockFile";
import { getSubFileName } from "./lib";
import inquirer, { ChoiceCollection } from "inquirer";
import "colors";
import multimatch from "multimatch";

void (async () => {
    const {
        namespace,
        output,
        autoAccept,
        validateNoChanges,
        displayErrors,
        skipValidation,
        noInteractive,
        force,
        react,
        _: allFiles,
    } = yargs
        .usage("openapi2ts [options] [url/file...]")
        .example(
            "Full example",
            `
openapi2ts -o src/api/PetStoreApiClient.ts -n PetStore -a '{/user,/user/**}' http://petstore.swagger.io:8080/api/v3/openapi.json
`,
        )
        .option("output", {
            string: true,
            alias: "o",
            description: "client output filename",
            demandOption: true,
            requiresArg: true,
        })
        .option("autoAccept", {
            string: true,
            alias: "a",
            description: "auto-accept paths matching this glob and skip others",
            demandOption: false,
            requiresArg: true,
        })
        .option("react", {
            boolean: true,
            alias: "r",
            description: "generate React hooks",
            demandOption: false,
        })
        .option("validateNoChanges", {
            boolean: true,
            alias: "v",
            description: "fail, if there are changes",
            demandOption: false,
        })
        .option("namespace", {
            string: true,
            alias: "n",
            description: "TypeScript namespace where the types are generated",
            default: "API",
            requiresArg: true,
        })
        .option("force", {
            boolean: true,
            alias: "f",
            description: "force apply changes",
            demandOption: false,
            default: false,
        })
        .option("noInteractive", {
            boolean: true,
            description: "disables interactive mode",
            demandOption: false,
            default: false,
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
        }).argv;

    let files = allFiles.map((f) => f.toString());

    const interactive = !noInteractive;

    if (files.length > 1) {
        if (interactive) {
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
        } else {
            files = files.slice(0, 1);
        }
    }

    const getChangeText = (change: CompareResult): string =>
        `The ${change.target} '${change.name}' ${
            change.changeType === "changed" ? "has changed" : change.changeType === "new" ? "is new" : "has removed"
        }`;

    const logDiffInfos = (compareResult: CompareResult): void => {
        getChangeText(compareResult);

        if (compareResult.diffInfos) {
            let diffText = "";
            compareResult.diffInfos.forEach((part) => {
                // green for additions, red for deletions
                // grey for common parts
                const color = part.added ? "green" : part.removed ? "red" : "grey";
                diffText += part.value[color];
            });
            console.log("");
            console.log(`Diff for ${compareResult.target} ${compareResult.name["bold"]}:`);
            console.log("");
            console.log(diffText);
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    Spec.fromFiles(namespace, files, { statusLog: new OraStatusLog(), throwErrors: displayErrors, skipValidation })(async (spec) => {
        const lockfileName = getSubFileName(output, ".spec.lock");
        const statusLog = getStatusLog();

        const lockfile = LockFile.fromFile(lockfileName) ?? LockFile.fromSpec(spec.normalized);
        const detectedChanges = lockfile.compare(spec.normalized);

        if (validateNoChanges && detectedChanges.length > 0) {
            detectedChanges.forEach(logDiffInfos);
            throw new Error("The API spec has unexpectedly changed!");
        }

        let acceptedChanges: CompareResult[] = [];

        if (force) {
            acceptedChanges = detectedChanges;
        } else if (interactive) {
            let skipFromNow = false;
            let acceptFromNow = false;

            for (const change of detectedChanges) {
                if (skipFromNow) {
                    break;
                }

                if (acceptFromNow) {
                    statusLog?.info(`${change.target} ${change.name} auto-accepted`);
                    acceptedChanges.push(change);
                    continue;
                }

                if (autoAccept) {
                    if (multimatch(change.name, autoAccept).length === 1) {
                        statusLog?.info(`${change.target} ${change.name} matches glob ${autoAccept}`);
                        acceptedChanges.push(change);
                    }
                    continue;
                }

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
                        {
                            key: "s",
                            name: "Skip from now",
                            value: "skipFromNow",
                        },
                        {
                            key: "a",
                            name: "Accept from now",
                            value: "acceptFromNow",
                        },
                    ];

                    if (change.diffInfos) {
                        choices.push({
                            key: "d",
                            name: "Show diff",
                            value: "diff",
                        });
                    }

                    const answer = await inquirer.prompt<{ update: "yes" | "no" | "diff" | "skipFromNow" | "acceptFromNow" }>([
                        {
                            type: "expand",
                            message: `${getChangeText(change)}. Accept changes?`,
                            name: "update",
                            choices,
                        },
                    ]);

                    switch (answer.update) {
                        case "skipFromNow":
                            skipFromNow = true;
                            answered = true;
                            break;
                        case "acceptFromNow":
                            acceptedChanges.push(change);
                            answered = true;
                            acceptFromNow = true;
                            break;
                        case "yes":
                            acceptedChanges.push(change);
                            answered = true;
                            break;
                        case "no":
                            answered = true;
                            break;
                        case "diff":
                            logDiffInfos(change);
                            break;
                    }
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
