import prettier from "prettier";
import VError from "verror";
import { makeError } from "../lib/makeError.js";

export const format = (ts: string): string => {
  try {
    return prettier.format(ts, {
      plugins: [],
      parser: "typescript",
    });
  } catch (error) {
    throw new VError(
      {
        cause: makeError(error),
        name: "CodeFormattingError",
      },
      "Failed to format the generated code. This usually happens, when the generated code has syntax errors. Please file an issue.",
    );
  }
};
