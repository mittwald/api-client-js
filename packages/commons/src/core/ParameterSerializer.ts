import {
  QuerySerializationStyles,
  SerializationOptions,
} from "../types/index.js";

type QuerySerializationOptions = SerializationOptions<QuerySerializationStyles>;

export class ParamSerializer {
  private readonly searchParams: URLSearchParams;
  private readonly options: Record<string, QuerySerializationOptions>;

  constructor(options: Record<string, QuerySerializationOptions>) {
    this.options = options;
    this.searchParams = new URLSearchParams();
  }

  serializeQueryParam(key: string, value: unknown): this {
    const config = this.options[key];

    switch (true) {
      case Array.isArray(value):
        this.handleArraySerialization(key, value, config);
        break;
      case typeof value === "object" && value !== null:
        this.handleObjectSerialization(key, value, config);
        break;
      default:
        this.handlePrimitiveSerialization(key, value);
    }

    return this;
  }

  getSearchParams(): URLSearchParams {
    return this.searchParams;
  }

  private handlePrimitiveSerialization(key: string, value: unknown): void {
    this.searchParams.append(key, String(value));
  }

  private handleArraySerialization(
    key: string,
    value: unknown[],
    styleOptions: QuerySerializationOptions = { style: "form", explode: true },
  ): void {
    const { style, explode = true } = styleOptions;

    switch (style) {
      case "form":
        this.serializeArrayForm(key, value, explode);
        break;
      case "spaceDelimited":
        this.serializeArrayDelimited(key, value, " ");
        break;
      case "pipeDelimited":
        this.serializeArrayDelimited(key, value, "|");
        break;
      default:
        throw new Error(
          `Unsupported serialization style for arrays: '${style}'`,
        );
    }
  }

  private serializeArrayForm(
    key: string,
    value: unknown[],
    explode: boolean,
  ): void {
    if (explode) {
      value.forEach((item) => this.searchParams.append(key, String(item)));
    } else {
      this.serializeArrayDelimited(key, value, ",");
    }
  }

  private serializeArrayDelimited(
    key: string,
    value: unknown[],
    delimiter: string,
  ): void {
    this.searchParams.append(key, value.join(delimiter));
  }

  private handleObjectSerialization(
    key: string,
    value: object,
    styleOptions: QuerySerializationOptions = {
      style: "deepObject",
      explode: true,
    },
  ): void {
    const { style, explode = true } = styleOptions;

    switch (style) {
      case "form":
        this.serializeObjectForm(key, value, explode);
        break;
      case "deepObject":
        this.serializeObjectDeepObject(key, value);
        break;
      case "contentJSON":
        this.searchParams.append(key, JSON.stringify(value));
        break;
      default:
        throw new Error(
          `Unsupported serialization style for objects: '${style}'`,
        );
    }
  }

  private serializeObjectForm(
    key: string,
    value: object,
    explode: boolean,
  ): void {
    if (explode) {
      Object.entries(value).forEach(([k, v]) =>
        this.searchParams.append(k, String(v)),
      );
    } else {
      const serialized = Object.entries(value)
        .map(([k, v]) => `${k},${v}`)
        .join(",");
      this.searchParams.append(key, serialized);
    }
  }

  private serializeObjectDeepObject(key: string, value: object): void {
    Object.entries(value).forEach(([k, v]) =>
      this.searchParams.append(`${key}[${k}]`, String(v)),
    );
  }
}
