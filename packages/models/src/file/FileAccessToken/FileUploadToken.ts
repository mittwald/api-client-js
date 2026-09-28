import type { FileUploadTokenData } from "./types.js";

import { DataModel } from "../../base/index.js";

export class FileUploadToken extends DataModel<FileUploadTokenData> {
  public readonly token: string;

  public constructor(data: FileUploadTokenData) {
    super(data);
    this.token = data.token;
  }
}
