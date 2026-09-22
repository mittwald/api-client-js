import { afterEach, describe, expect, test, vi } from "vitest";
import { DateTime } from "luxon";

import { resetBehaviors } from "../../testing/installBehaviors";
import { Autoresponder } from "./Autoresponder";

afterEach(resetBehaviors);

describe("Autoresponder", () => {
  test("is inactive when disabled", () => {
    expect(new Autoresponder({ active: false }).isActive).toBe(false);
  });

  test("is active without an expiry date", () => {
    const autoresponder = new Autoresponder({ message: "Away", active: true });

    expect(autoresponder.isActive).toBe(true);
    expect(autoresponder.message).toBe("Away");
  });

  test("is planned when its start date is in the future", () => {
    const autoresponder = new Autoresponder({
      startsAt: DateTime.now().plus({ days: 1 }).toISO(),
      active: true,
    });

    expect(autoresponder.isPlanned).toBe(true);
    expect(autoresponder.startsAt?.isValid).toBe(true);
  });

  test("is inactive after its expiry date", () => {
    const autoresponder = new Autoresponder({
      expiresAt: DateTime.now().minus({ days: 1 }).toISO(),
      active: true,
    });

    expect(autoresponder.isActive).toBe(false);
  });

  test("is not planned without a start date", () => {
    const autoresponder = new Autoresponder({ active: true });

    expect(autoresponder.isPlanned).toBe(false);
    expect(autoresponder.startsAt).toBeUndefined();
  });
});

void vi;
