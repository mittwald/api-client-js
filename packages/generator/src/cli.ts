import yargs from "yargs";
import { Spec } from "./Spec.js";
import { getStatusLog, OraStatusLog } from "./statusLog.js";
import { CompareResult, LockFile } from "./LockFile.js";
import { getSubFileName } from "./lib.js";
import inquirer, { ChoiceCollection } from "inquirer";
import "colors";
import multimatch from "multimatch";
import { ExportOptions } from "./SpecExporter.js";
import * as process from "process";
import { hideBin } from "yargs/helpers";

void (async () => {
  const thisYargs = yargs(hideBin(process.argv));

  const {
    namespace,
    output: outputFilename,
    autoAccept,
    validateNoChanges,
    displayErrors,
    skipValidation,
    noInteractive,
    force,
    react,
    optionalHeaders,
    _: allFiles,
  } = await thisYargs
    .usage("acg [options] [url/file...]")
    .example(
      "Full example",
      `
acg -o src/api/PetStoreApiClient.ts -n PetStore -a '{/user,/user/**}' http://petstore.swagger.io:8080/api/v3/openapi.json
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
    .option("optionalHeaders", {
      array: true,
      description: "makes provided headers optional",
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

  const getChangeText = (change: CompareResult, error = false): string =>
    `The ${change.target} '${change.name}' ${
      change.changeType === "changed"
        ? "has changed"
        : change.changeType === "new"
        ? "is new"
        : "has removed"
    }`[error ? "red" : "reset"];

  const logDiffInfos = (compareResult: CompareResult, error = false): void => {
    console.log(getChangeText(compareResult, error));

    if (compareResult.diffInfos) {
      let diffText = "";
      compareResult.diffInfos.forEach((part) => {
        // green for additions, red for deletions
        // grey for common parts
        const color = part.added ? "green" : part.removed ? "red" : "grey";
        diffText += part.value[color];
      });
      console.log("");
      console.log(
        `Diff for ${compareResult.target} ${compareResult.name["bold"]}:`,
      );
      console.log("");
      console.log(diffText);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  Spec.fromFiles(namespace, files, {
    statusLog: new OraStatusLog(),
    throwErrors: displayErrors,
    skipValidation,
  })(async (spec) => {
    const lockfileName = getSubFileName(outputFilename, ".spec.lock");
    const statusLog = getStatusLog();

    const lockfile =
      LockFile.fromFile(lockfileName) ?? LockFile.fromSpec(spec.normalized);
    const detectedChanges = lockfile.compare(spec.normalized);

    if (validateNoChanges) {
      console.info("");
      console.info("Checking changes for the following input specs:");
      files.forEach((file) => console.info(`  • ${file}`));
      console.info("");

      if (detectedChanges.length > 0) {
        for (const change of detectedChanges) {
          logDiffInfos(change, true);
        }
        console.error("The lock file is NOT IN SYNC with the input specs".red);
        process.exit(1);
      }

      console.info("The lock file is in sync with the input specs".green);
      process.exit(0);
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
            statusLog?.info(
              `${change.target} ${change.name} auto-accepted (matches glob ${autoAccept})`,
            );
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

          const answer = await inquirer.prompt<{
            update: "yes" | "no" | "diff" | "skipFromNow" | "acceptFromNow";
          }>([
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

    const specWithChanges = lockfile.applyChanges(
      spec.normalized,
      acceptedChanges,
    );

    spec.updateSpec(specWithChanges);

    const exportOptions: ExportOptions = {
      reactHooks: !!react,
      optionalHeaders: optionalHeaders?.filter((h) => typeof h === "string") as
        | string[]
        | undefined,
    };

    spec.writeFiles(outputFilename, exportOptions);

    lockfile.write(lockfileName);
  });
})();