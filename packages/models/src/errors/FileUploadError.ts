import type { DomFile } from "../file";

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
