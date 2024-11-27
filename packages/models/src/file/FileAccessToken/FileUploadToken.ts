import { DataModel } from "@mittwald/api-models";
import { FileUploadTokenData } from "./types.js";

export class FileUploadToken extends DataModel<FileUploadTokenData> {
  public readonly token: string;

  public constructor(data: FileUploadTokenData) {
    super(data);
    this.token = data.token;
  }
}
