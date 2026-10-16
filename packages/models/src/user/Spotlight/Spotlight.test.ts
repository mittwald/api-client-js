import { afterEach, describe, expect, test, vi } from "vitest";

import { buildSpotlightStateData } from "../../testing/builders/buildSpotlightStateData.js";
import { SpotlightState, Spotlight } from "./Spotlight.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";

afterEach(resetBehaviors);

const state = (overrides: Parameters<typeof buildSpotlightStateData>[0] = {}) =>
  new SpotlightState(buildSpotlightStateData(overrides));

describe("Spotlight", () => {
  test("getSelfState delegates and materializes the state", async () => {
    const getSelfState = vi.fn().mockResolvedValue(buildSpotlightStateData());
    installBehaviors({ spotlight: { getSelfState } });

    const result = await Spotlight.ofId(
      "ai-agent-verknuepfen-btn",
    ).getSelfState();

    expect(getSelfState).toHaveBeenCalledWith(
      "ai-agent-verknuepfen-btn",
      undefined,
    );
    expect(result).toBeInstanceOf(SpotlightState);
    expect(result.id).toBe("ai-agent-verknuepfen-btn");
  });

  test("reportInteraction and submitFeedback delegate their data", async () => {
    const reportInteraction = vi.fn().mockResolvedValue(undefined);
    const submitFeedback = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ spotlight: { reportInteraction, submitFeedback } });

    await Spotlight.ofId("s-1").reportInteraction({
      acknowledged: true,
    });
    await Spotlight.ofId("s-1").submitFeedback({
      decision: "keep",
    });

    expect(reportInteraction).toHaveBeenCalledWith("s-1", {
      acknowledged: true,
    });
    expect(submitFeedback).toHaveBeenCalledWith("s-1", {
      decision: "keep",
    });
  });
});

describe("SpotlightState", () => {
  test("the promo stays due until it is acknowledged", () => {
    expect(state().isPromoDue()).toBe(true);
    expect(state({ acknowledged: true }).isPromoDue()).toBe(false);
  });

  test("without use tracking, acknowledging makes feedback due", () => {
    expect(state().isFeedbackDue(false)).toBe(false);
    expect(state({ acknowledged: true }).isFeedbackDue(false)).toBe(true);
  });

  test("with use tracking, acknowledging alone does not make feedback due", () => {
    expect(state({ acknowledged: true }).isFeedbackDue(true)).toBe(false);
    expect(state({ acknowledged: true, used: true }).isFeedbackDue(true)).toBe(
      true,
    );
  });

  test("a recorded decision closes feedback for good in both modes", () => {
    for (const decision of ["keep", "kill", "ignore"] as const) {
      const decided = state({ acknowledged: true, used: true, decision });

      expect(decided.isFeedbackDue(false)).toBe(false);
      expect(decided.isFeedbackDue(true)).toBe(false);
    }
  });
});
