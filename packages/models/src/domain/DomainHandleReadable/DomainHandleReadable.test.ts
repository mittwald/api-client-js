import { afterEach, describe, expect, test } from "vitest";

import { buildDomainHandleReadableData } from "../../testing/builders/buildDomainHandleReadableData.js";
import { buildDomainHandleData } from "../../testing/builders/buildDomainHandleData.js";
import { resetBehaviors } from "../../testing/installBehaviors.js";
import { DomainHandleReadable } from "./DomainHandleReadable.js";
import { DomainHandle } from "../DomainHandle/index.js";

afterEach(resetBehaviors);

describe("DomainHandleReadable", () => {
  test("constructs current as a DomainHandle", () => {
    const data = buildDomainHandleReadableData();
    const readable = new DomainHandleReadable(data);

    expect(readable.current).toBeInstanceOf(DomainHandle);
    expect(readable.current.handleRef).toBe(data.current.handleRef);
  });

  test("leaves desired undefined when absent", () => {
    const readable = new DomainHandleReadable(
      buildDomainHandleReadableData({ desired: undefined }),
    );

    expect(readable.desired).toBeUndefined();
  });

  test("constructs a distinct desired DomainHandle when present", () => {
    const readable = new DomainHandleReadable(
      buildDomainHandleReadableData({
        desired: buildDomainHandleData({ handleRef: "handle-2" }),
      }),
    );

    expect(readable.desired).toBeInstanceOf(DomainHandle);
    expect(readable.current.handleRef).toBe("handle-1");
    expect(readable.desired?.handleRef).toBe("handle-2");
  });
});
