import { afterEach, describe, expect, test, vi } from "vitest";

import { buildSessionTokenData } from "../../testing/builders/buildSessionTokenData.js";
import { buildMfaStatusData } from "../../testing/builders/buildMfaStatusData.js";
import { buildMfaInitData } from "../../testing/builders/buildMfaInitData.js";
import { installBehaviors, resetBehaviors } from "../../testing/index.js";
import { RecoveryCodes } from "../RecoveryCodes/index.js";
import { DataModel } from "../../base/index.js";
import { MfaStatus, Mfa } from "./Mfa.js";
import { MfaInit } from "./MfaInit.js";

afterEach(resetBehaviors);

describe("Mfa.getStatus", () => {
  test("maps confirmed status to an active MfaStatus", async () => {
    const getStatus = vi
      .fn()
      .mockResolvedValue(buildMfaStatusData({ confirmed: true }));
    installBehaviors({ mfa: { getStatus } });

    const status = await Mfa.getStatus();

    expect(status).toBeInstanceOf(MfaStatus);
    expect(status.active).toBe(true);
  });

  test("maps unconfirmed status to an inactive MfaStatus", async () => {
    const getStatus = vi
      .fn()
      .mockResolvedValue(buildMfaStatusData({ confirmed: false }));
    installBehaviors({ mfa: { getStatus } });

    const status = await Mfa.getStatus();

    expect(status.active).toBe(false);
  });
});

describe("Mfa.confirm", () => {
  test("returns joined recovery codes and forwards the code", async () => {
    const confirm = vi
      .fn()
      .mockResolvedValue({ recoveryCodesList: ["a", "b"] });
    installBehaviors({ mfa: { confirm } });

    const recoveryCodes = await Mfa.confirm("123456");

    expect(recoveryCodes).toBeInstanceOf(RecoveryCodes);
    expect(recoveryCodes.getDownload().content).toBe("a\nb");
    expect(confirm).toHaveBeenCalledWith("123456");
  });
});

describe("Mfa.resetRecoveryCodes", () => {
  test("returns fresh recovery codes and forwards the code", async () => {
    const resetRecoveryCodes = vi
      .fn()
      .mockResolvedValue({ recoveryCodesList: ["x", "y", "z"] });
    installBehaviors({ mfa: { resetRecoveryCodes } });

    const recoveryCodes = await Mfa.resetRecoveryCodes("654321");

    expect(recoveryCodes).toBeInstanceOf(RecoveryCodes);
    expect(recoveryCodes.getDownload().content).toBe("x\ny\nz");
    expect(resetRecoveryCodes).toHaveBeenCalledWith("654321");
  });
});

describe("Mfa.disable", () => {
  test("forwards the code and resolves without a value", async () => {
    const disable = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ mfa: { disable } });

    await expect(Mfa.disable("000111")).resolves.toBeUndefined();
    expect(disable).toHaveBeenCalledWith("000111");
  });
});

describe("Mfa.authenticate", () => {
  test("passes the request data through and returns the session token data", async () => {
    const sessionTokenData = buildSessionTokenData();
    const authenticateMfa = vi.fn().mockResolvedValue(sessionTokenData);
    installBehaviors({ mfa: { authenticateMfa } });

    const requestData = {
      email: "user@example.com",
      multiFactorCode: "123456",
      password: "secret",
    };
    const result = await Mfa.authenticate(requestData);

    expect(result).toEqual(sessionTokenData);
    expect(authenticateMfa).toHaveBeenCalledWith(requestData);
  });
});

describe("Mfa.init", () => {
  test("returns an MfaInit with the secret extracted from the url", async () => {
    const init = vi.fn().mockResolvedValue(buildMfaInitData());
    installBehaviors({ mfa: { init } });

    const mfaInit = await Mfa.init();

    expect(mfaInit).toBeInstanceOf(MfaInit);
    expect(mfaInit.secret).toBe("THE-SECRET");
    expect(mfaInit.barcodeImageSrc.startsWith("data:image/jpg;base64, ")).toBe(
      true,
    );
  });

  test("forwards the request config to the behavior", async () => {
    const init = vi.fn().mockResolvedValue(buildMfaInitData());
    installBehaviors({ mfa: { init } });

    const requestConfig = { timeout: 1000 };
    await Mfa.init(requestConfig);

    expect(init).toHaveBeenCalledWith(requestConfig);
  });
});

describe("MfaStatus construction", () => {
  test("derives active from the confirmed flag", () => {
    const status = new MfaStatus(buildMfaStatusData({ confirmed: false }));

    expect(status).toBeInstanceOf(DataModel);
    expect(status.active).toBe(false);
  });
});

describe("MfaInit construction", () => {
  test("falls back to an empty secret when the url has no secret param", () => {
    const mfaInit = new MfaInit(
      buildMfaInitData({ url: "otpauth://totp/mittwald" }),
    );

    expect(mfaInit.secret).toBe("");
  });

  test("embeds the barcode as a base64 image data uri", () => {
    const mfaInit = new MfaInit(buildMfaInitData({ barcode: "AAA" }));

    expect(mfaInit.barcodeImageSrc).toBe("data:image/jpg;base64, AAA");
  });
});
