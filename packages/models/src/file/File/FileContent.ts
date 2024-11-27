import { ReferenceModel } from "@mittwald/api-models";
import type { AsyncResourceVariant } from "@mittwald/api-models/react";
import { provideReact } from "@mittwald/api-models/react";
import { classes } from "polytype";
import { File } from "./File.js";
import { config } from "../../config/config.js";
import { DomFile } from "./types.js";
import { assertString } from "@sindresorhus/is";

interface Base64InitObject {
  base64: string;
  type: string;
  name: string;
}

export class FileContent extends ReferenceModel {
  public readonly file: File;

  public constructor(file: File) {
    super(file.id);
    this.file = file;
  }

  public static ofFile(file: File): FileContent {
    return new FileContent(file);
  }

  public static ofBase64(init: Base64InitObject): FileContentDetailed {
    const { base64, type, name } = init;

    const byteArray = Uint8Array.from(
      atob(base64)
        .split("")
        .map((char) => char.charCodeAt(0)),
    );

    return new FileContentDetailed(File.inMemoryFile, {
      name,
      blob: new Blob([byteArray], {
        type,
      }),
    });
  }

  public static get = provideReact(
    async (file: File): Promise<FileContentDetailed | undefined> => {
      const downloadToken = await file.getDownloadToken();
      const meta = await file.metaData.getDetailed();

      const arrayBuffer = await config.behaviors.file.download(
        file.id,
        downloadToken?.token,
      );

      return new FileContentDetailed(file, {
        name: meta.name,
        blob: new Blob([arrayBuffer], {
          type: meta.mimeType,
        }),
      });
    },
  );

  public getDetailed = provideReact(async () => {
    if (this instanceof FileContentDetailed) {
      return this;
    }
    return FileContent.get(this.file);
  }, [this.id]) as AsyncResourceVariant<FileContentDetailed, []>;
}

interface FileContentDetailedInitObject {
  name: string;
  blob: Blob;
}

export class FileContentDetailed extends classes(FileContent) {
  public readonly name: string;
  public readonly blob: Blob;
  public readonly data: DomFile;

  public constructor(file: File, init: FileContentDetailedInitObject) {
    super([file]);
    this.name = init.name;
    this.blob = init.blob;
    this.data = new DomFile([init.blob], init.name);
  }

  public getDataUrl = provideReact(async () => {
    return new Promise<string>((res, rej) => {
      const reader = new FileReader();

      reader.onload = () => {
        assertString(
          reader.result,
          "Expected FileReader.result to be a string",
        );
        res(reader.result);
      };
      reader.onerror = rej;

      reader.readAsDataURL(this.blob);
    });
  }, [this.id]);
}
