import type { AxiosRequestConfig } from "axios";

import invariant from "tiny-invariant";

import type { FileAccessTokenProvider } from "../FileAccessToken/index.js";
import type { FileUploadType, DomFile } from "./types.js";

import { FileMetaDetailed, FileContent, FileMeta } from "./internal.js";
import { FileDownloadToken } from "../FileAccessToken/index.js";
import { ReferenceModel } from "../../base/index.js";
import { config } from "../../config/index.js";
import { Bytes } from "../../common/index.js";

export class File extends ReferenceModel {
  public static inMemoryFile = new File("inmem");
  public readonly accessTokenProvider?: FileAccessTokenProvider;
  public readonly content: FileContent;
  public readonly metaData: FileMeta;

  public get isInMemoryFile() {
    return this === File.inMemoryFile;
  }

  public get isProtected() {
    return !!this.accessTokenProvider?.getDownloadToken;
  }

  public get url() {
    invariant(
      !this.isProtected,
      "This file is protected. Use getProtectedUrl().",
    );
    this.assertNotInMemoryFile();
    return config.behaviors.file.buildUrl(this.id);
  }

  public constructor(
    id: string,
    accessTokenProvider?: FileAccessTokenProvider,
  ) {
    super(id);
    this.metaData = FileMeta.ofFile(this);
    this.content = FileContent.ofFile(this);
    this.accessTokenProvider = accessTokenProvider;
  }

  public static async getUploadRules(type: FileUploadType) {
    const rules = await config.behaviors.file.getUploadRules(type);

    return { ...rules, maxSize: Bytes.of(rules.maxSizeInBytes, "bytes") };
  }

  public static ofId(
    id: string,
    accessTokenProvider?: FileAccessTokenProvider,
  ) {
    return new File(id, accessTokenProvider);
  }

  public static async upload(
    file: DomFile,
    accessTokenProvider: FileAccessTokenProvider,
    assetType?: "image" | "video",
    onProgress?: (percent: number) => void,
  ) {
    let uploadToken;
    if (assetType) {
      uploadToken =
        await accessTokenProvider.createAssetUploadToken?.(assetType);
    } else {
      uploadToken = await accessTokenProvider.createUploadToken?.();
    }
    invariant(!!uploadToken, "Could not upload file without upload token");

    const response = await config.behaviors.file.upload(
      file,
      uploadToken.token,
      onProgress,
    );

    const fileModel = new File(response.id, accessTokenProvider);
    return new FileMetaDetailed(fileModel, response);
  }

  public assertNotInMemoryFile() {
    invariant(!this.isInMemoryFile, "Expected not in-memory file");
  }

  public async findDownloadToken(requestConfig?: AxiosRequestConfig) {
    this.assertNotInMemoryFile();
    const tokenData = await this.accessTokenProvider?.getDownloadToken?.(
      this.id,
      requestConfig,
    );
    if (tokenData) {
      return new FileDownloadToken(tokenData);
    }
  }

  public async getFileLinkProps(requestConfig?: AxiosRequestConfig) {
    this.assertNotInMemoryFile();

    const metaData = await this.metaData.getDetailed(requestConfig);

    const token = metaData.token
      ? { token: metaData.token }
      : await this.findDownloadToken(requestConfig);

    const href = config.behaviors.file.buildUrl(
      metaData.id,
      metaData.name,
      token?.token,
    );

    return {
      download: metaData.name,
      token: token?.token,
      target: "_blank",
      href,
    };
  }
}
