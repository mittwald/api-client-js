import { jest } from "@jest/globals";
import jetpack from "fs-jetpack";
import { writeIfChangedAsync } from "./writeIfChangedAsync.js";

const readAsync = jest.spyOn(jetpack, "readAsync");
const writeAsync = jest.spyOn(jetpack, "writeAsync");

beforeEach(() => {
  readAsync.mockReset();
  writeAsync.mockReset().mockResolvedValue(undefined);
});

afterAll(() => {
  jest.restoreAllMocks();
});

test("writes when the file does not exist yet", async () => {
  readAsync.mockResolvedValue(undefined);

  await writeIfChangedAsync("out.ts", "content");

  expect(writeAsync).toHaveBeenCalledWith("out.ts", "content");
});

test("writes when the content changed", async () => {
  readAsync.mockResolvedValue("old content");

  await writeIfChangedAsync("out.ts", "new content");

  expect(writeAsync).toHaveBeenCalledWith("out.ts", "new content");
});

test("does not write when the content is unchanged", async () => {
  readAsync.mockResolvedValue("content");

  await writeIfChangedAsync("out.ts", "content");

  expect(writeAsync).not.toHaveBeenCalled();
});

test("treats a trailing-whitespace difference as a change", async () => {
  readAsync.mockResolvedValue("content");

  await writeIfChangedAsync("out.ts", "content\n");

  expect(writeAsync).toHaveBeenCalledWith("out.ts", "content\n");
});

test("reads the file it is about to write", async () => {
  readAsync.mockResolvedValue("content");

  await writeIfChangedAsync("some/nested/out.ts", "content");

  expect(readAsync).toHaveBeenCalledWith("some/nested/out.ts");
});
