import type * as ReactGhostmaker from "@mittwald/react-ghostmaker/model";

import { afterEach, describe, expect, test, vi } from "vitest";
import { DateTime } from "luxon";

// Names any class by its JS name, so ObjectNotFoundError's type does not depend on the ghost registry.
vi.mock("@mittwald/react-ghostmaker/model", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import {
  buildCronjobExecutionListItemData,
  buildCronjobExecutionData,
} from "../../testing/builders/buildCronjobExecutionData.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import { Cronjob } from "../Cronjob/index.js";
import {
  CronjobExecutionDetailed,
  CronjobExecutionListItem,
  CronjobExecutionList,
  CronjobExecution,
} from "./CronjobExecution.js";

afterEach(resetBehaviors);

const cronjob = Cronjob.ofId("cronjob-id");

describe("CronjobExecution reference + delegation", () => {
  test("find delegates with the execution and cronjob ids and returns a detailed execution", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildCronjobExecutionData({ id: "e-1" }));
    installBehaviors({ cronjobExecution: { find } });

    const result = await CronjobExecution.find("e-1", cronjob);

    expect(find).toHaveBeenCalledWith("e-1", "cronjob-id");
    expect(result).toBeInstanceOf(CronjobExecutionDetailed);
    expect(result?.id).toBe("e-1");
  });

  test("find maps a missing execution to undefined", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ cronjobExecution: { find } });

    const result = await CronjobExecution.find("missing", cronjob);

    expect(result).toBeUndefined();
  });

  test("get throws ObjectNotFoundError when the execution is missing", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ cronjobExecution: { find } });

    await expect(
      CronjobExecution.get("missing", cronjob),
    ).rejects.toBeInstanceOf(ObjectNotFoundError);
  });

  test("findDetailed delegates with the reference ids", async () => {
    const ref = CronjobExecution.ofId("e-3", cronjob);
    const find = vi
      .fn()
      .mockResolvedValue(buildCronjobExecutionData({ id: "e-3" }));
    installBehaviors({ cronjobExecution: { find } });

    const result = await ref.findDetailed();

    expect(find).toHaveBeenCalledWith("e-3", "cronjob-id");
    expect(result?.id).toBe("e-3");
  });

  test("getExecutionAnalysis delegates with the ids, language and request config", async () => {
    const getExecutionAnalysis = vi
      .fn()
      .mockResolvedValue({ message: "all good" });
    installBehaviors({ cronjobExecution: { getExecutionAnalysis } });

    const execution = new CronjobExecutionDetailed(
      buildCronjobExecutionData({ id: "e-4" }),
      cronjob,
    );
    const requestConfig = { timeout: 1000 };
    const result = await execution.getExecutionAnalysis("de", requestConfig);

    expect(getExecutionAnalysis).toHaveBeenCalledWith(
      "e-4",
      "cronjob-id",
      "de",
      requestConfig,
    );
    expect(result).toEqual({ message: "all good" });
  });
});

describe("CronjobExecution data + derived getters", () => {
  test("isRunning reflects the running and pending statuses", () => {
    const running = new CronjobExecutionDetailed(
      buildCronjobExecutionData({ status: "Running" }),
      cronjob,
    );
    const pending = new CronjobExecutionDetailed(
      buildCronjobExecutionData({ status: "Pending" }),
      cronjob,
    );
    const complete = new CronjobExecutionDetailed(
      buildCronjobExecutionData({ status: "Complete" }),
      cronjob,
    );

    expect(running.isRunning).toBe(true);
    expect(pending.isRunning).toBe(true);
    expect(complete.isRunning).toBe(false);
  });

  test("durationInSeconds floors the millisecond duration", () => {
    const execution = new CronjobExecutionDetailed(
      buildCronjobExecutionData({ durationInMilliseconds: 5500 }),
      cronjob,
    );

    expect(execution.durationInSeconds).toBe(5);
  });

  test("durationInSeconds is undefined when no duration is present", () => {
    const execution = new CronjobExecutionDetailed(
      buildCronjobExecutionData({ durationInMilliseconds: undefined }),
      cronjob,
    );

    expect(execution.durationInSeconds).toBeUndefined();
  });

  test("start is parsed into a luxon DateTime and undefined when absent", () => {
    const withStart = new CronjobExecutionDetailed(
      buildCronjobExecutionData({ start: "2024-01-01T00:00:00.000Z" }),
      cronjob,
    );
    const withoutStart = new CronjobExecutionDetailed(
      buildCronjobExecutionData({ start: undefined }),
      cronjob,
    );

    expect(withStart.start).toBeInstanceOf(DateTime);
    expect(withStart.start?.toMillis()).toBe(
      DateTime.fromISO("2024-01-01T00:00:00.000Z", { zone: "utc" }).toMillis(),
    );
    expect(withoutStart.start).toBeUndefined();
  });

  test("triggeredBy resolves to a user reference only when an id is present", () => {
    const withUser = new CronjobExecutionDetailed(
      buildCronjobExecutionData({ triggeredBy: { id: "user-7" } }),
      cronjob,
    );
    const withoutUser = new CronjobExecutionDetailed(
      buildCronjobExecutionData({ triggeredBy: {} }),
      cronjob,
    );

    expect(withUser.triggeredBy?.id).toBe("user-7");
    expect(withoutUser.triggeredBy).toBeUndefined();
  });

  test("passes status, successful, exitCode and logPath through", () => {
    const execution = new CronjobExecutionDetailed(
      buildCronjobExecutionData({
        logPath: "/logs/failed.log",
        successful: false,
        status: "Failed",
        exitCode: 137,
      }),
      cronjob,
    );

    expect(execution.status).toBe("Failed");
    expect(execution.successful).toBe(false);
    expect(execution.exitCode).toBe(137);
    expect(execution.logPath).toBe("/logs/failed.log");
  });
});

describe("CronjobExecution log handling", () => {
  test("findLog returns undefined when there is no log path", async () => {
    const findLog = vi.fn();
    installBehaviors({ cronjobExecution: { findLog } });

    const execution = new CronjobExecutionDetailed(
      buildCronjobExecutionData({ logPath: undefined }),
      cronjob,
    );
    const result = await execution.findLog("project-id");

    expect(result).toBeUndefined();
    expect(findLog).not.toHaveBeenCalled();
  });

  test("findStructuredLog returns undefined when there is no log path", async () => {
    const findLog = vi.fn();
    installBehaviors({ cronjobExecution: { findLog } });

    const execution = new CronjobExecutionDetailed(
      buildCronjobExecutionData({ logPath: undefined }),
      cronjob,
    );
    const result = await execution.findStructuredLog("project-id");

    expect(result).toBeUndefined();
    expect(findLog).not.toHaveBeenCalled();
  });

  test("findLog returns the message of an object response", async () => {
    const findLog = vi.fn().mockResolvedValue({ message: "object log" });
    installBehaviors({ cronjobExecution: { findLog } });

    const execution = new CronjobExecutionDetailed(
      buildCronjobExecutionData(),
      cronjob,
    );
    const result = await execution.findLog("project-id");

    expect(findLog).toHaveBeenCalledWith("project-id", "/logs/exec.log");
    expect(result).toBe("object log");
  });

  test("findLog extracts and joins message fields from a structured string", async () => {
    const findLog = vi
      .fn()
      .mockResolvedValue('{"message":"alpha"}\n{"message":"beta"}');
    installBehaviors({ cronjobExecution: { findLog } });

    const execution = new CronjobExecutionDetailed(
      buildCronjobExecutionData(),
      cronjob,
    );
    const result = await execution.findLog("project-id");

    expect(result).toBe("alpha\nbeta");
  });

  test("findLog returns a plain string log as-is", async () => {
    const findLog = vi.fn().mockResolvedValue("plain log output");
    installBehaviors({ cronjobExecution: { findLog } });

    const execution = new CronjobExecutionDetailed(
      buildCronjobExecutionData(),
      cronjob,
    );
    const result = await execution.findLog("project-id");

    expect(result).toBe("plain log output");
  });

  test("findStructuredLog parses lines and maps the stream and time prefix", async () => {
    const findLog = vi
      .fn()
      .mockResolvedValue(
        '{"message":"line one","dev":"stdout","time":"12:00"}\n' +
          '{"message":"line two","dev":"stderr"}\n' +
          "not json",
      );
    installBehaviors({ cronjobExecution: { findLog } });

    const execution = new CronjobExecutionDetailed(
      buildCronjobExecutionData(),
      cronjob,
    );
    const result = await execution.findStructuredLog("project-id");

    expect(result).toEqual([
      { message: "12:00 line one", stream: "stdout" },
      { message: "line two", stream: "stderr" },
    ]);
  });

  test("findStructuredLog returns undefined for an empty response", async () => {
    const findLog = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ cronjobExecution: { findLog } });

    const execution = new CronjobExecutionDetailed(
      buildCronjobExecutionData(),
      cronjob,
    );
    const result = await execution.findStructuredLog("project-id");

    expect(result).toBeUndefined();
  });

  test("getLogDownload wraps the log into a downloadable file", async () => {
    const findLog = vi.fn().mockResolvedValue("downloadable log");
    installBehaviors({ cronjobExecution: { findLog } });

    const execution = new CronjobExecutionDetailed(
      buildCronjobExecutionData(),
      cronjob,
    );
    const result = await execution.getLogDownload("project-id");

    expect(result).toEqual({
      content: "downloadable log",
      filename: "cronjob.log",
    });
  });

  test("getLogDownload returns undefined when there is no log", async () => {
    const findLog = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ cronjobExecution: { findLog } });

    const execution = new CronjobExecutionDetailed(
      buildCronjobExecutionData(),
      cronjob,
    );
    const result = await execution.getLogDownload("project-id");

    expect(result).toBeUndefined();
  });
});

describe("CronjobExecution list query pagination", () => {
  test("execute materializes list items and total count", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [
        buildCronjobExecutionData({ id: "e-1" }),
        buildCronjobExecutionData({ id: "e-2" }),
      ],
      totalCount: 5,
    });
    installBehaviors({ cronjobExecution: { list } });

    const result = await CronjobExecution.query(cronjob).execute();

    expect(result).toBeInstanceOf(CronjobExecutionList);
    expect(result.items).toHaveLength(2);
    expect(result.items[0]).toBeInstanceOf(CronjobExecutionListItem);
    expect(result.totalCount).toBe(5);
    expect(list).toHaveBeenCalledWith("cronjob-id", expect.anything());
  });

  test("passes an explicit query through to the behavior", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ cronjobExecution: { list } });

    await CronjobExecution.query(cronjob, { limit: 3 }).execute();

    expect(list).toHaveBeenCalledWith(
      "cronjob-id",
      expect.objectContaining({ limit: 3 }),
    );
  });

  test("getTotalCount refines the query to a single item", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 9, items: [] });
    installBehaviors({ cronjobExecution: { list } });

    const total = await CronjobExecution.query(cronjob).getTotalCount();

    expect(total).toBe(9);
    expect(list).toHaveBeenCalledWith(
      "cronjob-id",
      expect.objectContaining({ limit: 1 }),
    );
  });

  test("refine merges the new query onto the existing one", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ cronjobExecution: { list } });

    await CronjobExecution.query(cronjob, { limit: 2 })
      .refine({ sortOrder: "newestFirst" })
      .execute();

    expect(list).toHaveBeenCalledWith(
      "cronjob-id",
      expect.objectContaining({ sortOrder: "newestFirst", limit: 2 }),
    );
  });
});

describe("CronjobExecution common variant + idempotency", () => {
  test("findCommon on a reference delegates to findDetailed and returns the common variant", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildCronjobExecutionData({ id: "ec-1" }));
    installBehaviors({ cronjobExecution: { find } });

    const result = await CronjobExecution.ofId("ec-1", cronjob).findCommon();

    expect(find).toHaveBeenCalledWith("ec-1", "cronjob-id");
    expect(result).toBeInstanceOf(CronjobExecutionDetailed);
    expect(result?.id).toBe("ec-1");
  });

  test("findCommon on a reference maps a missing execution to undefined", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ cronjobExecution: { find } });

    const result = await CronjobExecution.ofId("missing", cronjob).findCommon();

    expect(result).toBeUndefined();
  });

  test("getCommon on a reference returns the common variant when found", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildCronjobExecutionData({ id: "ec-2" }));
    installBehaviors({ cronjobExecution: { find } });

    const result = await CronjobExecution.ofId("ec-2", cronjob).getCommon();

    expect(result).toBeInstanceOf(CronjobExecutionDetailed);
    expect(result.id).toBe("ec-2");
  });

  test("getCommon on a reference throws ObjectNotFoundError when missing", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ cronjobExecution: { find } });

    await expect(
      CronjobExecution.ofId("missing", cronjob).getCommon(),
    ).rejects.toBeInstanceOf(ObjectNotFoundError);
  });

  test("findCommon on an already materialized list item returns itself without a behavior call", async () => {
    const find = vi.fn();
    installBehaviors({ cronjobExecution: { find } });

    const item = new CronjobExecutionListItem(
      buildCronjobExecutionListItemData({ id: "ec-3" }),
      cronjob,
    );
    const result = await item.findCommon();

    expect(result).toBe(item);
    expect(find).not.toHaveBeenCalled();
  });

  test("getCommon on an already detailed execution returns itself without a behavior call", async () => {
    const find = vi.fn();
    installBehaviors({ cronjobExecution: { find } });

    const detailed = new CronjobExecutionDetailed(
      buildCronjobExecutionData({ id: "ec-4" }),
      cronjob,
    );
    const result = await detailed.getCommon();

    expect(result).toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });
});
