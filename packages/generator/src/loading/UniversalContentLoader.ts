import { load } from "js-yaml";
import { parseAsync } from "yieldable-json";
import VError from "verror";
import { makeError } from "../lib/makeError.js";
import { FileLoader } from "./types.js";

type SourceFormat = "json" | "yaml";

export class UniversalContentLoader {
  public readonly fileLoader: FileLoader;

  public constructor(fileLoader: FileLoader) {
    this.fileLoader = fileLoader;
  }

  public async load(): Promise<unknown> {
    try {
      const format = UniversalContentLoader.detectSourceFormat(
        this.fileLoader.source,
      );

      const fileContent = await this.fileLoader.load();

      switch (format) {
        case "yaml":
          return await UniversalContentLoader.parseYaml(fileContent);
        case "json":
          return await UniversalContentLoader.parseJson(fileContent);
        default:
          return await UniversalContentLoader.tryParseUnknown(fileContent);
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

  private static async tryParseUnknown(content: string): Promise<unknown> {
    try {
      return await UniversalContentLoader.parseJson(content);
    } catch (error) {
      try {
        return await UniversalContentLoader.parseYaml(content);
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
