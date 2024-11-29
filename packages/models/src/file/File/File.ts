import { ReferenceModel } from "@mittwald/api-models";
import assert from "assert";
import invariant from "invariant";
import { FileMeta, FileMetaDetailed } from "./FileMeta.js";
import { FileContent } from "./FileContent.js";
import { FileAccessTokenProvider } from "../FileAccessToken/FileAccessTokenProvider.js";
import { DomFile, FileUploadType } from "./types.js";
import { config } from "../../config/config.js";
import { FileDownloadToken } from "../FileAccessToken/index.js";

export class File extends ReferenceModel {
  public readonly metaData: FileMeta;
  public readonly content: FileContent;
  public readonly accessTokenProvider?: FileAccessTokenProvider;
  public static inMemoryFile = new File("inmem");

  public constructor(
    id: string,
    accessTokenProvider?: FileAccessTokenProvider,
  ) {
    super(id);
    this.metaData = FileMeta.ofFile(this);
    this.content = FileContent.ofFile(this);
    this.accessTokenProvider = accessTokenProvider;
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
  ) {
    const uploadToken = await accessTokenProvider.createUploadToken?.();
    assert(!!uploadToken, "Could not upload file without upload token");

    const response = await config.behaviors.file.upload(
      file,
      uploadToken.token,
    );

    const fileModel = new File(response.id, accessTokenProvider);
    return new FileMetaDetailed(fileModel, response);
  }

  public get isInMemoryFile() {
    return this === File.inMemoryFile;
  }

  public assertNotInMemoryFile() {
    invariant(!this.isInMemoryFile, "Expected not in-memory file");
  }

  public get isProtected() {
    return !!this.accessTokenProvider?.getDownloadToken;
  }

  public get url() {
    assert(!this.isProtected, "This file is protected. Use getProtectedUrl().");
    this.assertNotInMemoryFile();
    return config.behaviors.file.buildUrl(this.id);
  }

  public async getDownloadToken() {
    this.assertNotInMemoryFile();
    const tokenData = await this.accessTokenProvider?.getDownloadToken?.(
      this.id,
    );
    if (tokenData) {
      return new FileDownloadToken(tokenData);
    }
  }

  public static async getUploadRules(type: FileUploadType) {
    return await config.behaviors.file.getUploadRules(type);
  }
}
