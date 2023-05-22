export interface FileLoader {
  source: string;
  load(): Promise<string>;
}
