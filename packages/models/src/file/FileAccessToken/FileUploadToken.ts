import type { FileUploadTokenData } from "./types";

import { DataModel } from "../../base";

export class FileUploadToken extends DataModel<FileUploadTokenData> {
  public readonly token: string;

  public constructor(data: FileUploadTokenData) {
    super(data);
    this.token = data.token;
  }
}
