import { PathParameters } from "../types/http.js";

export class OpenAPIPath {
  private readonly rawPath: string;
  private readonly params?: PathParameters;

  public constructor(rawPath: string, params?: PathParameters) {
    this.rawPath = rawPath;
    this.params = params;
  }

  public buildUrl(): string {
    return OpenAPIPath.setPathParams(this.rawPath, this.params);
  }

  private static setPathParams(path: string, params?: PathParameters): string {
    const asEntries = Object.entries(params ?? {});

    const finalPath = asEntries.reduce((path, entry) => {
      const [key, value] = entry;
      return path.replace(`{${key}}`, encodeURIComponent(value));
    }, path);

    return finalPath.startsWith("/") ? finalPath.substring(1) : finalPath;
  }
}

export default OpenAPIPath;
