import type { AxiosRequestConfig } from "axios";

import type { FileMetaData } from "./types";
import type { File } from "./internal";

import assertObjectFound from "../../base/lib/assertObjectFound";
import { ReferenceModel, WithData } from "../../base";
import { config } from "../../config";

export class FileMeta extends ReferenceModel {
  public readonly file: File;

  public constructor(file: File) {
    super(file.id);
    file.assertNotInMemoryFile();
    this.file = file;
  }

  public static async find(file: File, requestConfig?: AxiosRequestConfig) {
    const downloadToken = await file.findDownloadToken(requestConfig);
    const tokenString = downloadToken?.token;

    const data = await config.behaviors.file.findMetaData(
      file.id,
      tokenString,
      requestConfig,
    );

    if (data !== undefined) {
      return new FileMetaDetailed(file, data, tokenString);
    }
  }

  public static async get(file: File, requestConfig?: AxiosRequestConfig) {
    const fileMeta = await FileMeta.find(file, requestConfig);
    assertObjectFound(fileMeta, FileMeta, file.id);
    return fileMeta;
  }

  public static ofFile(file: File): FileMeta {
    return new FileMeta(file);
  }

  public async findCommon(): Promise<FileMetaDetailed | undefined> {
    return this instanceof FileMetaDetailed ? this : this.findDetailed();
  }

  public findDetailed(requestConfig?: AxiosRequestConfig) {
    return FileMeta.find(this.file, requestConfig);
  }

  public async getCommon(): Promise<FileMetaDetailed> {
    return this instanceof FileMetaDetailed ? this : this.getDetailed();
  }

  public getDetailed(requestConfig?: AxiosRequestConfig) {
    return FileMeta.get(this.file, requestConfig);
  }
}

export class FileMetaDetailed extends WithData<FileMetaData>()(FileMeta) {
  public override readonly data: FileMetaData;
  public readonly mimeType: string;
  public readonly name: string;
  public readonly token?: string;

  public constructor(file: File, data: FileMetaData, token?: string) {
    super(file);
    this.data = data;
    this.mimeType = data.mimeType ?? data.type;
    this.name = data.name;
    this.token = token;
  }
}
