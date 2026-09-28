import type * as ReactGhostmaker from "@mittwald/react-ghostmaker/model";

import { afterEach, describe, expect, test, vi } from "vitest";

vi.mock("@mittwald/react-ghostmaker/model", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { buildFileDownloadTokenData } from "../../testing/builders/buildFileDownloadTokenData.js";
import { buildFileUploadRulesData } from "../../testing/builders/buildFileUploadRulesData.js";
import { buildFileUploadTokenData } from "../../testing/builders/buildFileUploadTokenData.js";
import { buildFileMetaData } from "../../testing/builders/buildFileMetaData.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import { FileDownloadToken } from "../FileAccessToken/index.js";
import { ReferenceModel } from "../../base/index.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import { Bytes } from "../../common/index.js";
import {
  FileContentDetailed,
  FileMetaDetailed,
  FileContent,
  FileMeta,
  File,
} from "./internal.js";

afterEach(resetBehaviors);

describe("File", () => {
  test("constructs its metadata and content references", () => {
    const file = File.ofId("f-1");

    expect(file.id).toBe("f-1");
    expect(file.metaData).toBeInstanceOf(FileMeta);
    expect(file.content).toBeInstanceOf(FileContent);
  });

  test("reports whether it is protected", () => {
    expect(File.ofId("f-1").isProtected).toBe(false);
    expect(
      File.ofId("f-1", {
        getDownloadToken: vi
          .fn()
          .mockResolvedValue(buildFileDownloadTokenData()),
      }).isProtected,
    ).toBe(true);
  });

  test("identifies and guards the in-memory file", () => {
    expect(File.inMemoryFile.isInMemoryFile).toBe(true);
    expect(File.ofId("f-1").isInMemoryFile).toBe(false);
    expect(() => File.inMemoryFile.assertNotInMemoryFile()).toThrow();
  });

  test("builds the public URL", () => {
    const buildUrl = vi.fn().mockReturnValue("https://x/f-1");
    installBehaviors({ file: { buildUrl } });

    expect(File.ofId("f-1").url).toBe("https://x/f-1");
    expect(buildUrl).toHaveBeenCalledWith("f-1");
  });

  test("does not expose a direct URL for protected or in-memory files", () => {
    const protectedFile = File.ofId("f-1", {
      getDownloadToken: vi.fn().mockResolvedValue(buildFileDownloadTokenData()),
    });

    expect(() => protectedFile.url).toThrow();
    expect(() => File.inMemoryFile.url).toThrow();
  });

  test("builds download link props with an access token", async () => {
    const tokenData = buildFileDownloadTokenData({ accessToken: "tok" });
    const getDownloadToken = vi.fn().mockResolvedValue(tokenData);
    const findMetaData = vi
      .fn()
      .mockResolvedValue(buildFileMetaData({ name: "report.txt", id: "f-1" }));
    const buildUrl = vi.fn().mockReturnValue("https://x/f-1");
    installBehaviors({ file: { findMetaData, buildUrl } });

    const result = await File.ofId("f-1", {
      getDownloadToken,
    }).getFileLinkProps();

    expect(result).toEqual({
      download: "report.txt",
      href: "https://x/f-1",
      target: "_blank",
      token: "tok",
    });
    expect(getDownloadToken).toHaveBeenCalledWith("f-1", undefined);
    expect(findMetaData).toHaveBeenCalledWith("f-1", "tok", undefined);
    expect(buildUrl).toHaveBeenCalledWith("f-1", "report.txt", "tok");
  });

  test("finds a download token when a provider is available", async () => {
    const getDownloadToken = vi
      .fn()
      .mockResolvedValue(buildFileDownloadTokenData({ accessToken: "tok" }));

    const token = await File.ofId("f-1", {
      getDownloadToken,
    }).findDownloadToken();

    expect(token).toBeInstanceOf(FileDownloadToken);
    expect(token?.token).toBe("tok");
    expect(getDownloadToken).toHaveBeenCalledWith("f-1", undefined);
  });

  test("does not find a download token without a provider", async () => {
    await expect(File.ofId("f-1").findDownloadToken()).resolves.toBeUndefined();
  });

  test("uploads a file with a regular upload token", async () => {
    const tokenData = buildFileUploadTokenData({ token: "up-token" });
    const createUploadToken = vi.fn().mockResolvedValue(tokenData);
    const upload = vi.fn().mockResolvedValue(buildFileMetaData({ id: "up-1" }));
    installBehaviors({ file: { upload } });
    const domFile = new globalThis.File(["data"], "test.txt");

    const result = await File.upload(domFile, { createUploadToken });

    expect(result).toBeInstanceOf(FileMetaDetailed);
    expect(result.id).toBe("up-1");
    expect(createUploadToken).toHaveBeenCalledWith();
    expect(upload).toHaveBeenCalledWith(domFile, "up-token", undefined);
  });

  test("uploads an image with an asset upload token", async () => {
    const createAssetUploadToken = vi
      .fn()
      .mockResolvedValue(buildFileUploadTokenData({ token: "asset-token" }));
    const upload = vi
      .fn()
      .mockResolvedValue(buildFileMetaData({ id: "asset-1" }));
    installBehaviors({ file: { upload } });
    const domFile = new globalThis.File(["image"], "image.png");

    const result = await File.upload(
      domFile,
      { createAssetUploadToken },
      "image",
    );

    expect(result).toBeInstanceOf(FileMetaDetailed);
    expect(result.id).toBe("asset-1");
    expect(createAssetUploadToken).toHaveBeenCalledWith("image");
    expect(upload).toHaveBeenCalledWith(domFile, "asset-token", undefined);
  });

  test("adds a Bytes value to upload rules", async () => {
    const getUploadRules = vi
      .fn()
      .mockResolvedValue(buildFileUploadRulesData({ maxSizeInBytes: 1_024 }));
    installBehaviors({ file: { getUploadRules } });

    const result = await File.getUploadRules("avatar");

    expect(result.maxSize).toBeInstanceOf(Bytes);
    expect(result.maxSize.value).toBe(1_024);
    expect(getUploadRules).toHaveBeenCalledWith("avatar");
  });
});

describe("FileMeta", () => {
  test("finds detailed metadata and exposes derived fields", async () => {
    const data = buildFileMetaData({
      mimeType: "image/jpeg",
      name: "photo.jpg",
    });
    const findMetaData = vi.fn().mockResolvedValue(data);
    installBehaviors({ file: { findMetaData } });

    const result = await FileMeta.find(File.ofId("f-1"));

    expect(result).toBeInstanceOf(FileMetaDetailed);
    expect(result?.name).toBe("photo.jpg");
    expect(result?.mimeType).toBe("image/jpeg");
    expect(findMetaData).toHaveBeenCalledWith("f-1", undefined, undefined);
  });

  test("returns undefined when metadata is not found", async () => {
    const findMetaData = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ file: { findMetaData } });

    await expect(FileMeta.find(File.ofId("missing"))).resolves.toBeUndefined();
  });

  test("throws ObjectNotFoundError when metadata is not found", async () => {
    const findMetaData = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ file: { findMetaData } });

    await expect(FileMeta.get(File.ofId("missing"))).rejects.toThrow(
      ObjectNotFoundError,
    );
  });

  test("preserves all model identities and returns itself as common metadata", async () => {
    const detailed = new FileMetaDetailed(
      File.ofId("f-1"),
      buildFileMetaData({ id: "f-1" }),
    );

    expect(detailed).toBeInstanceOf(FileMeta);
    expect(detailed).toBeInstanceOf(ReferenceModel);
    expect(detailed.data).toBeDefined();
    await expect(detailed.findCommon()).resolves.toBe(detailed);
    await expect(detailed.getCommon()).resolves.toBe(detailed);
  });

  test("findCommon delegates to a detailed lookup for reference metadata", async () => {
    const findMetaData = vi
      .fn()
      .mockResolvedValue(buildFileMetaData({ name: "doc.txt", id: "f-1" }));
    installBehaviors({ file: { findMetaData } });

    const result = await File.ofId("f-1").metaData.findCommon();

    expect(result).toBeInstanceOf(FileMetaDetailed);
    expect(result?.name).toBe("doc.txt");
    expect(findMetaData).toHaveBeenCalledWith("f-1", undefined, undefined);
  });

  test("findCommon resolves undefined when reference metadata is not found", async () => {
    const findMetaData = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ file: { findMetaData } });

    await expect(
      File.ofId("missing").metaData.findCommon(),
    ).resolves.toBeUndefined();
  });

  test("getCommon delegates to a detailed lookup for reference metadata", async () => {
    const findMetaData = vi
      .fn()
      .mockResolvedValue(buildFileMetaData({ id: "f-1" }));
    installBehaviors({ file: { findMetaData } });

    const result = await File.ofId("f-1").metaData.getCommon();

    expect(result).toBeInstanceOf(FileMetaDetailed);
    expect(findMetaData).toHaveBeenCalledWith("f-1", undefined, undefined);
  });

  test("getCommon throws ObjectNotFoundError when reference metadata is not found", async () => {
    const findMetaData = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ file: { findMetaData } });

    await expect(File.ofId("missing").metaData.getCommon()).rejects.toThrow(
      ObjectNotFoundError,
    );
  });

  test("does not re-fetch when common variants are requested on already-detailed metadata", async () => {
    const findMetaData = vi.fn().mockResolvedValue(buildFileMetaData());
    installBehaviors({ file: { findMetaData } });

    const detailed = new FileMetaDetailed(
      File.ofId("f-1"),
      buildFileMetaData({ id: "f-1" }),
    );

    await expect(detailed.findCommon()).resolves.toBe(detailed);
    await expect(detailed.getCommon()).resolves.toBe(detailed);
    expect(findMetaData).not.toHaveBeenCalled();
  });

  test("falls back to the deprecated type field when mimeType is absent", () => {
    const detailed = new FileMetaDetailed(
      File.ofId("f-1"),
      buildFileMetaData({ type: "application/pdf", mimeType: undefined }),
    );

    expect(detailed.mimeType).toBe("application/pdf");
  });
});

describe("FileContent", () => {
  test("creates detailed content from base64", () => {
    const result = FileContent.ofBase64({
      base64: btoa("hello"),
      type: "text/plain",
      name: "h.txt",
    });

    expect(result).toBeInstanceOf(FileContentDetailed);
    expect(result.name).toBe("h.txt");
    expect(result.blob).toBeInstanceOf(Blob);
    expect(result.objectUrl).toEqual(expect.any(String));
    expect(result.data).toBeInstanceOf(globalThis.File);
    expect(result.data.name).toBe("h.txt");
  });

  test("downloads detailed content using its metadata", async () => {
    const findMetaData = vi
      .fn()
      .mockResolvedValue(buildFileMetaData({ name: "data.txt" }));
    const buffer = new TextEncoder().encode("data").buffer;
    const download = vi.fn().mockResolvedValue(buffer);
    installBehaviors({ file: { findMetaData, download } });

    const result = await FileContent.get(File.ofId("f-1"));

    expect(result).toBeInstanceOf(FileContentDetailed);
    expect(result.name).toBe("data.txt");
    expect(result.blob).toBeInstanceOf(Blob);
    expect(findMetaData).toHaveBeenCalledWith("f-1", undefined, undefined);
    expect(download).toHaveBeenCalledWith("f-1", undefined);
  });
});
