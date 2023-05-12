import { load } from "js-yaml";
import { parseAsync } from "yieldable-json";
import { UniversalFileLoader } from "./UniversalFileLoader.js";
import VError from "verror";
import { makeError } from "./makeError.js";

type SourceFormat = "json" | "yaml";

export class UniversalContentLoader {
  public readonly fileLoader: UniversalFileLoader;

  public constructor(source: string) {
    this.fileLoader = new UniversalFileLoader(source);
  }

  public async load(): Promise<unknown> {
    try {
      const format = UniversalContentLoader.detectSourceFormat(
        this.fileLoader.source,
      );

      const fileContent = await this.fileLoader.load();

      switch (format) {
        case "yaml":
          return UniversalContentLoader.parseYaml(fileContent);
        case "json":
          return UniversalContentLoader.parseJson(fileContent);
        default:
          return UniversalContentLoader.tryParseUnknown(fileContent);
      }
    } catch (error) {
      throw new VError(
        {
          cause: makeError(error),
          name: "ContentLoaderError",
        },
        "Failed loading content",
      );
    }
  }

  private static detectSourceFormat(source: string): SourceFormat | undefined {
    return source.endsWith(".json")
      ? "json"
      : source.endsWith(".yaml")
      ? "yaml"
      : source.endsWith(".yml")
      ? "yaml"
      : undefined;
  }

  private static tryParseUnknown(content: string): Promise<unknown> {
    try {
      return UniversalContentLoader.parseJson(content);
    } catch (error) {
      try {
        return UniversalContentLoader.parseYaml(content);
      } catch (error) {
        throw new Error("Content is not of supported format JSON/YAML.");
      }
    }
  }

  private static async parseYaml(yaml: string): Promise<unknown> {
    return load(yaml);
  }

  private static parseJson(json: string): Promise<unknown> {
    return new Promise((res, rej) =>
      parseAsync(json, (err, data) => {
        if (err) {
          rej(err);
        } else {
          res(data);
        }
      }),
    );
  }
}
