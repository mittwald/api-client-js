import { DataModel, ReferenceModel } from "@mittwald/api-models";
import type { AsyncResourceVariant } from "@mittwald/api-models/react";
import { provideReact } from "@mittwald/api-models/react";
import { classes } from "polytype";
import { File } from "./File.js";
import { config } from "../../config/config.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { FileMetaData } from "./types.js";

export class FileMeta extends ReferenceModel {
  public readonly file: File;

  public constructor(file: File) {
    super(file.id);
    file.assertNotInMemoryFile();
    this.file = file;
  }

  public static ofFile(file: File): FileMeta {
    return new FileMeta(file);
  }

  public static find = provideReact(
    async (file: File): Promise<FileMetaDetailed | undefined> => {
      const downloadToken = await file.getDownloadToken();
      const data = await config.behaviors.file.findMetaData(
        file.id,
        downloadToken?.token,
      );

      if (data !== undefined) {
        return new FileMetaDetailed(file, data);
      }
    },
  );

  public static get = provideReact(
    async (file: File): Promise<FileMetaDetailed> => {
      const fileMeta = await this.find(file);
      assertObjectFound(fileMeta, this, file.id);
      return fileMeta;
    },
  );

  public getDetailed = provideReact(async () => {
    if (this instanceof FileMetaDetailed) {
      return this;
    }
    return FileMeta.get(this.file);
  }, [this.id]) as AsyncResourceVariant<FileMetaDetailed, []>;

  public findDetailed = provideReact(() => {
    return FileMeta.find(this.file);
  }, [this.id]) as AsyncResourceVariant<FileMetaDetailed | undefined, []>;
}

export class FileMetaDetailed extends classes(
  FileMeta,
  DataModel<FileMetaData>,
) {
  public readonly mimeType: string;
  public readonly name: string;
  public readonly friendlyUrl: string;

  public constructor(file: File, data: FileMetaData) {
    super([file], [data]);
    this.mimeType = data.mimeType ?? data.type;
    this.name = data.name;
    this.friendlyUrl = data.friendlyURL;
  }
}
