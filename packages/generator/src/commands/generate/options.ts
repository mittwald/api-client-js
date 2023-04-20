import { Argv } from "yargs";

export const options = <T extends Argv<unknown>>(yargs: T) =>
  yargs
    .option("out", {
      string: true,
      alias: "o",
      description: "target directory",
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
    });
