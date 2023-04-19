import { CommandModule } from "yargs";

export const makeModule = <T = unknown, U = unknown>(
  module: CommandModule<T, U>,
): CommandModule<T, U> => module;
