import { afterEach, describe, expect, test } from "vitest";
import { DateTime } from "luxon";

import { buildDomainProcessData } from "../../testing/builders/buildDomainProcessData.js";
import { resetBehaviors } from "../../testing/installBehaviors.js";
import { DomainProcess } from "./DomainProcess.js";

afterEach(resetBehaviors);

describe("DomainProcess", () => {
  test("constructs from data and exposes its values", () => {
    const data = buildDomainProcessData({
      statusCode: "PROCESSING",
      error: "Example error",
      status: "processing",
    });
    const process = new DomainProcess(data);

    expect(process.processType).toBe(data.processType);
    expect(process.state).toBe(data.state);
    expect(process.transactionId).toBe(data.transactionId);
    expect(process.status).toBe(data.status);
    expect(process.statusCode).toBe(data.statusCode);
    expect(process.error).toBe(data.error);
  });

  test("leaves optional values undefined when omitted", () => {
    const process = new DomainProcess(buildDomainProcessData());

    expect(process.error).toBeUndefined();
    expect(process.status).toBeUndefined();
    expect(process.statusCode).toBeUndefined();
  });

  test("converts lastUpdate to a Luxon DateTime", () => {
    const data = buildDomainProcessData();
    const process = new DomainProcess(data);

    expect(DateTime.isDateTime(process.lastUpdate)).toBe(true);
    expect(process.lastUpdate.isValid).toBe(true);
    expect(process.lastUpdate.toMillis()).toBe(
      DateTime.fromISO(data.lastUpdate).toMillis(),
    );
  });
});
