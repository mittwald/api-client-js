import type { DomFile } from "../file/index.js";

export interface FileUploadFailure {
  error: unknown;
  file: DomFile;
}

export class FileUploadError {
  public readonly failures: FileUploadFailure[];

  public constructor(failures: FileUploadFailure[]) {
    this.failures = failures;
  }
}
