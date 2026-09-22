import type { SpotlightStateData } from "../../user/Spotlight/types.js";

export function buildSpotlightStateData(
  overrides: Partial<SpotlightStateData> = {},
): SpotlightStateData {
  return {
    spotlightId: "ai-agent-verknuepfen-btn",
    acknowledged: false,
    used: false,
    ...overrides,
  };
}
