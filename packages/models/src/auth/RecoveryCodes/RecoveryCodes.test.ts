import { afterEach, expect, test } from "vitest";

import { buildRecoveryCodesData, resetBehaviors } from "../../testing";
import { RecoveryCodes } from "./RecoveryCodes";

afterEach(resetBehaviors);

test("provides recovery codes as a downloadable text file", () => {
  const recoveryCodes = new RecoveryCodes(buildRecoveryCodesData());

  expect(recoveryCodes.getDownload()).toEqual({
    filename: "mittwald-recovery-codes.txt",
    content: "code-1\ncode-2\ncode-3",
  });
});
