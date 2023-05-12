import prettier from "prettier";

export const format = (ts: string): string =>
  prettier.format(ts, {
    plugins: [],
    parser: "typescript",
  });
