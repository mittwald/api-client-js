import { afterEach, describe, expect, test } from "vitest";
import { DateTime } from "luxon";

import { buildFileDownloadTokenData } from "../../testing/builders/buildFileDownloadTokenData";
import { buildFileUploadTokenData } from "../../testing/builders/buildFileUploadTokenData";
import { resetBehaviors } from "../../testing/installBehaviors";
import { FileDownloadToken } from "./FileDownloadToken";
import { FileUploadToken } from "./FileUploadToken";
import { DataModel } from "../../base";

afterEach(resetBehaviors);

describe("FileDownloadToken", () => {
  test("exposes its token and parsed expiry", () => {
    const token = new FileDownloadToken(
      buildFileDownloadTokenData({
        expiresAt: "2099-01-01T00:00:00.000Z",
        accessToken: "tok",
      }),
    );

    expect(token.token).toBe("tok");
    expect(token.expiresAt).toBeInstanceOf(DateTime);
    expect(token.expiresAt.isValid).toBe(true);
  });

  test("returns true for a future expiry", () => {
    const token = new FileDownloadToken(
      buildFileDownloadTokenData({
        expiresAt: DateTime.now().plus({ days: 1 }).toISO(),
      }),
    );

    expect(token.checkIsExpired()).toBe(true);
  });

  test("returns false for a past expiry", () => {
    const token = new FileDownloadToken(
      buildFileDownloadTokenData({
        expiresAt: DateTime.now().minus({ days: 1 }).toISO(),
      }),
    );

    expect(token.checkIsExpired()).toBe(false);
  });
});

describe("FileUploadToken", () => {
  test("exposes the token and original data", () => {
    const data = buildFileUploadTokenData({ token: "up" });
    const token = new FileUploadToken(data);

    expect(token).toBeInstanceOf(DataModel);
    expect(token.token).toBe("up");
    expect(token.data).toBe(data);
  });
});
