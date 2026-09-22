import { afterEach , expect, test, vi } from "vitest";
import { DateTime } from "luxon";

import { buildSupportCodeData } from "../../testing/builders/buildSupportCodeData";
import { SupportCodeDetailed, SupportCode } from "./SupportCode";
import { ReferenceModel } from "../../base";
import { installBehaviors, resetBehaviors } from "../../testing/installBehaviors";

afterEach(resetBehaviors);

test("get forwards request config and maps support code data", async () => {
  const get = vi.fn().mockResolvedValue(buildSupportCodeData());
  installBehaviors({ supportCode: { get } });
  const requestConfig = { headers: { "x-test": "yes" } };
  const result = await SupportCode.get(requestConfig);
  expect(get).toHaveBeenCalledWith(requestConfig);
  expect(result).toBeInstanceOf(SupportCodeDetailed);
  expect(result.supportCode).toBe("SUP-123");
  expect(result.expiresAt).toBeInstanceOf(DateTime);
  expect(result).toBeInstanceOf(SupportCode);
  expect(result).toBeInstanceOf(ReferenceModel);
  expect(result.data).toBeDefined();
});
