import { afterEach, describe, expect, test, vi } from "vitest";

import { buildRegisterRequestData } from "../../testing/builders/buildRegisterRequestData";
import { installBehaviors, resetBehaviors } from "../../testing";
import { Registration } from "./Registration";
import { DataModel } from "../../base";

afterEach(resetBehaviors);

describe("Registration.start", () => {
  test("delegates to the behavior and returns a Registration", async () => {
    const start = vi.fn().mockResolvedValue({ id: "user-123" });
    installBehaviors({ registration: { start } });
    const requestData = buildRegisterRequestData({ email: "a@b.de" });

    const registration = await Registration.start(requestData);

    expect(registration).toBeInstanceOf(Registration);
    expect(registration).toBeInstanceOf(DataModel);
    expect(start).toHaveBeenCalledWith(requestData);
  });
});

describe("Registration.verify", () => {
  test("verifies with the stored email/userId and the given token", async () => {
    const verify = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ registration: { verify } });
    const registration = new Registration({
      ...buildRegisterRequestData({ email: "a@b.de" }),
      userId: "user-123",
    });

    await registration.verify({ token: "tok" });

    expect(verify).toHaveBeenCalledWith({
      userId: "user-123",
      email: "a@b.de",
      token: "tok",
    });
  });
});

describe("Registration.resendVerificationEmail", () => {
  test("resends using the stored email and userId", async () => {
    const resendVerificationEmail = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ registration: { resendVerificationEmail } });
    const registration = new Registration({
      ...buildRegisterRequestData({ email: "a@b.de" }),
      userId: "user-123",
    });

    await registration.resendVerificationEmail();

    expect(resendVerificationEmail).toHaveBeenCalledWith({
      userId: "user-123",
      email: "a@b.de",
    });
  });
});
