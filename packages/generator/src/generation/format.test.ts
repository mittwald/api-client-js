import { format } from "./format.js";
import { prepareTypeScriptOutput } from "./prepareTypeScriptOutput.js";

describe("format", () => {
  test("formats TypeScript source", async () => {
    await expect(format("const   a={b:1}")).resolves.toBe(
      "const a = { b: 1 };\n",
    );
  });

  test("keeps already formatted source stable", async () => {
    const formatted = await format("const a = 1;\n");

    expect(await format(formatted)).toBe(formatted);
  });

  test("formats type declarations", async () => {
    await expect(format("type A={b:string}")).resolves.toBe(
      "type A = { b: string };\n",
    );
  });

  test("reports a syntax error as a CodeFormattingError", async () => {
    await expect(format("const a = {")).rejects.toMatchObject({
      name: "CodeFormattingError",
    });
  });

  test("points at the likely cause in the error message", async () => {
    await expect(format("const a = {")).rejects.toThrow(
      "Failed to format the generated code",
    );
  });

  test("keeps the underlying prettier error as cause", async () => {
    const error = await format("const a = {").catch((e) => e);

    expect(error.cause()).toBeInstanceOf(Error);
  });
});

describe("prepareTypeScriptOutput", () => {
  test("prepends the generated-file header", async () => {
    const output = await prepareTypeScriptOutput("const a=1");

    expect(output).toBe(
      [
        "/* eslint-disable */",
        "/* prettier-ignore */",
        "/* This file is auto-generated with acg (@mittwald/api-code-generator) */",
        "const a = 1;",
        "",
      ].join("\n"),
    );
  });

  test("marks the output so lint and prettier skip it", async () => {
    const output = await prepareTypeScriptOutput("const a=1");

    expect(output).toContain("/* eslint-disable */");
    expect(output).toContain("/* prettier-ignore */");
  });

  test("propagates formatting failures", async () => {
    await expect(prepareTypeScriptOutput("const a = {")).rejects.toThrow(
      "Failed to format the generated code",
    );
  });
});
