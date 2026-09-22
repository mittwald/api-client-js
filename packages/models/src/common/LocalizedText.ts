const supportedLanguages = ["de", "en"] as const;
export type LocalizedTextLanguage = (typeof supportedLanguages)[number];

export type LocalizedTextData<T> = Partial<Record<LocalizedTextLanguage, T>>;

const defaultLanguage = "de" as const;

type GetTextFn<T> = (
  ...args: T extends string ? [] : [key: keyof T]
) => string | undefined;

export class LocalizedText<T = string> {
  private static language: LocalizedTextLanguage = defaultLanguage;
  private readonly data: LocalizedTextData<T>;

  public constructor(data?: LocalizedTextData<T>) {
    this.data = data ?? {};
  }

  public static fromJsonString(json: string) {
    try {
      const parsed = JSON.parse(json);

      if (typeof parsed === "object" && parsed !== null) {
        return new LocalizedText(parsed);
      }
    } catch {
      // parsing failed
    }

    return new LocalizedText({ [defaultLanguage]: json });
  }

  public static setLanguage(language: LocalizedTextLanguage) {
    if (!supportedLanguages.includes(language)) {
      throw new Error(
        `Unsupported language: ${language}. Supported languages are: ${supportedLanguages.join(
          ", ",
        )}`,
      );
    }
    LocalizedText.language = language;
  }

  public readonly getText: GetTextFn<T> = (...args) => {
    const key = args[0];

    const value =
      this.data[LocalizedText.language] ?? this.data[defaultLanguage];

    if (!value) {
      return undefined;
    }

    if (typeof value === "string") {
      return value;
    }

    return String(value[key as keyof T]);
  };
}
