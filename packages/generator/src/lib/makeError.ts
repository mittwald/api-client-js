import VError from "verror";
import { getProperty } from "dot-prop";

export const makeError = (error: unknown): Error =>
  error instanceof Error
    ? error
    : new VError(
        {
          name: String(getProperty(error, "name") ?? "Error"),
        },
        String(getProperty(error, "message") ?? ""),
      );
