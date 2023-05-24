import { FileLoader } from "./types.js";
import { UniversalContentLoader } from "./UniversalContentLoader.js";

class TestFileLoader implements FileLoader {
  public readonly source: string;
  public readonly content: string;

  public constructor(source: string, content: string) {
    this.source = source;
    this.content = content;
  }

  public load(): Promise<string> {
    return Promise.resolve(this.content);
  }
}

describe(".load()", () => {
  test("Throws parser-error error when trying to parse known content", async () => {
    const fileLoader = new TestFileLoader("test.json", "{some invalid");
    const contentLoader = new UniversalContentLoader(fileLoader);

    expect(() => contentLoader.load()).rejects.toThrow(
      "Failed loading content: Bad object",
    );
  });

  test("Throws 'Not supported format' error when trying to parse unknown content", async () => {
    const fileLoader = new TestFileLoader("test.foo", "{some invalid");
    const contentLoader = new UniversalContentLoader(fileLoader);

    expect(() => contentLoader.load()).rejects.toThrow(
      "Failed loading content: Content is not of supported format JSON/YAML.",
    );
  });

  test("Can load JSON file content", async () => {
    const fileLoader = new TestFileLoader("test.json", '{"foo": "bar"}');
    const contentLoader = new UniversalContentLoader(fileLoader);
    const content = await contentLoader.load();

    expect(content).toMatchObject({
      foo: "bar",
    });
  });

  test("Can load unknown JSON file content", async () => {
    const fileLoader = new TestFileLoader("unknown", '{"foo": "bar"}');
    const contentLoader = new UniversalContentLoader(fileLoader);
    const content = await contentLoader.load();

    expect(content).toMatchObject({
      foo: "bar",
    });
  });
});
