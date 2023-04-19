import yargs from "yargs";
import "colors";
import * as process from "process";
import { hideBin } from "yargs/helpers";
import { commands } from "./commands/index.js";

await yargs(hideBin(process.argv))
  .command(commands)
  .demandCommand()
  .scriptName("acg")
  .help().argv;
