import { afterEach, describe, expect, test } from "vitest";
import { DateTime } from "luxon";

import { buildSessionTokenData } from "../../testing/builders/buildSessionTokenData.js";
import { resetBehaviors } from "../../testing/index.js";
import { SessionToken } from "./SessionToken.js";
import { DataModel } from "../../base/index.js";

afterEach(resetBehaviors);

describe("SessionToken construction", () => {
  test("exposes token, refresh token and a parsed expiration date", () => {
    const sessionToken = new SessionToken(
      buildSessionTokenData({
        expires: "2099-01-01T00:00:00.000Z",
        refreshToken: "r",
        token: "t",
      }),
    );

    expect(sessionToken).toBeInstanceOf(DataModel);
    expect(sessionToken.token).toBe("t");
    expect(sessionToken.refreshToken).toBe("r");
    expect(sessionToken.expirationDate).toBeInstanceOf(DateTime);
    expect(sessionToken.expirationDate.isValid).toBe(true);
    expect(sessionToken.expirationDate.toUTC().toISO()).toBe(
      "2099-01-01T00:00:00.000Z",
    );
  });
});

describe("SessionToken.isExpired", () => {
  test("returns false when the expiration date is in the future", () => {
    const sessionToken = new SessionToken(
      buildSessionTokenData({ expires: "2099-01-01T00:00:00.000Z" }),
    );

    expect(sessionToken.isExpired()).toBe(false);
  });

  test("returns true when the expiration date is in the past", () => {
    const sessionToken = new SessionToken(
      buildSessionTokenData({ expires: "2000-01-01T00:00:00.000Z" }),
    );

    expect(sessionToken.isExpired()).toBe(true);
  });
});
