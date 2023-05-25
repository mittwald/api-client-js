import axios from "axios";
import jetpack from "fs-jetpack";
import VError from "verror";
import { makeError } from "../lib/makeError.js";
import { FileLoader } from "./types.js";
import getStdin from "get-stdin";

export class UniversalFileLoader implements FileLoader {
  public readonly source: string;

  public constructor(source: string) {
    this.source = source;
  }

  public load(): Promise<string> {
    try {
      if (this.source.startsWith("http")) {
        return UniversalFileLoader.loadFromUrl(this.source);
      }
      if (this.source === "/dev/stdin" || this.source === "-") {
        return UniversalFileLoader.loadFromStdin();
      }
      return UniversalFileLoader.loadFromFile(this.source);
    } catch (error) {
      throw new VError(
        { cause: makeError(error), name: "FileLoaderError" },
        "Failed loading file from %s",
        this.source,
      );
    }
  }

  private static loadFromStdin(): Promise<string> {
    return getStdin();
  }

  private static async loadFromUrl(url: string): Promise<string> {
    const response = await axios.get(url, {
      responseType: "text",
      validateStatus: (status) => status === 200,
    });

    return response.data;
  }

  private static async loadFromFile(filename: string): Promise<string> {
    const file = await jetpack.readAsync(filename);
    if (file === undefined) {
      throw new Error(`File not found: ${filename}`);
    }
    return file;
  }
}
