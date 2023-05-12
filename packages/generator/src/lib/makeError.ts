export const makeError = (error: unknown): Error =>
  error instanceof Error ? error : new Error("Unknown error");
