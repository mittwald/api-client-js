import type { AxiosRequestConfig } from "axios";

import { ReferenceModel } from "../../base";
import { config } from "../../config";
import { File } from "./internal";
import { DomFile } from "./types";

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

  public static async find(file: File, requestConfig?: AxiosRequestConfig) {
    const downloadToken = await file.findDownloadToken(requestConfig);
    const meta = await file.metaData.findDetailed(requestConfig);

    if (!meta) {
      return;
    }

    const arrayBuffer = await config.behaviors.file.download(
      file.id,
      downloadToken?.token,
    );

    return new FileContentDetailed(file, {
      blob: new Blob([arrayBuffer], {
        type: meta.mimeType,
      }),
      name: meta.name,
    });
  }

  public static async get(file: File, requestConfig?: AxiosRequestConfig) {
    const downloadToken = await file.findDownloadToken(requestConfig);
    const meta = await file.metaData.getDetailed(requestConfig);

    const arrayBuffer = await config.behaviors.file.download(
      file.id,
      downloadToken?.token,
    );

    return new FileContentDetailed(file, {
      blob: new Blob([arrayBuffer], {
        type: meta.mimeType,
      }),
      name: meta.name,
    });
  }

  public static ofBase64(init: Base64InitObject) {
    const { base64, type, name } = init;

    const byteArray = Uint8Array.from(
      atob(base64)
        .split("")
        .map((char) => char.charCodeAt(0)),
    );

    return new FileContentDetailed(File.inMemoryFile, {
      blob: new Blob([byteArray], {
        type,
      }),
      name,
    });
  }

  public static ofFile(file: File) {
    return new FileContent(file);
  }

  public async findDetailed(requestConfig?: AxiosRequestConfig) {
    return FileContent.find(this.file, requestConfig);
  }

  public async getDetailed(requestConfig?: AxiosRequestConfig) {
    return FileContent.get(this.file, requestConfig);
  }
}

interface FileContentDetailedInitObject {
  name: string;
  blob: Blob;
}

export class FileContentDetailed extends FileContent {
  public readonly blob: Blob;
  public readonly data: DomFile;
  public readonly name: string;
  public readonly objectUrl: string;

  public constructor(file: File, init: FileContentDetailedInitObject) {
    super(file);

    this.name = init.name;
    this.blob = init.blob;
    this.data = new DomFile([init.blob], init.name);
    this.objectUrl = URL.createObjectURL(this.blob);
  }
}
