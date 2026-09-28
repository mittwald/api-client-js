import type * as ReactGhostmaker from "@mittwald/react-ghostmaker/model";

import { afterEach, describe, expect, test, vi } from "vitest";

import { buildProjectAIPlanData } from "../../testing/builders/buildProjectAIPlanData.js";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors.js";
import {
  ProjectAIPlanDetailed,
  ProjectAIPlanListItem,
  ProjectAIPlanCommon,
  ProjectAIPlanList,
  ProjectAIPlan,
} from "./ProjectAIPlan.js";

vi.mock("@mittwald/react-ghostmaker/model", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

afterEach(resetBehaviors);

test("ofId creates a reference with the given plan id", () => {
  const plan = ProjectAIPlan.ofId("project-123", "plan-1");

  expect(plan).toBeInstanceOf(ProjectAIPlan);
  expect(plan.id).toBe("plan-1");
  expect(plan.projectId).toBe("project-123");
});

test("findByProject delegates to the behavior and maps returned data", async () => {
  const options = { headers: { "x-test": "value" } };
  const data = buildProjectAIPlanData({
    keys: { planLimit: 500, available: 75, used: 25 },
    modelTermsApprovalRequired: true,
    projectId: "project-123",
    planId: "plan-1",
  });
  const find = vi.fn().mockResolvedValue(data);
  installBehaviors({ projectAiPlan: { find } });

  const plan = await ProjectAIPlan.findByProject(
    "project-123",
    "plan-1",
    options,
  );

  expect(find).toHaveBeenCalledOnce();
  expect(find).toHaveBeenCalledWith("project-123", "plan-1", options);
  expect(plan).toBeInstanceOf(ProjectAIPlanDetailed);
  expect(plan).toBeInstanceOf(ProjectAIPlanCommon);
  expect(plan).toBeInstanceOf(ProjectAIPlan);
  expect(plan).toMatchObject({
    modelTermsApprovalRequired: true,
    apiKeys: data.keys,
    id: "plan-1",
  });
});

test("findByProject returns undefined when the behavior finds no data", async () => {
  const find = vi.fn().mockResolvedValue(undefined);
  installBehaviors({ projectAiPlan: { find } });

  await expect(
    ProjectAIPlan.findByProject("project-123", "plan-1"),
  ).resolves.toBeUndefined();
});

test("getByProject returns the detailed model when found", async () => {
  const data = buildProjectAIPlanData({
    projectId: "project-123",
    planId: "plan-1",
  });
  const find = vi.fn().mockResolvedValue(data);
  installBehaviors({ projectAiPlan: { find } });

  const plan = await ProjectAIPlan.getByProject("project-123", "plan-1");

  expect(plan).toBeInstanceOf(ProjectAIPlanDetailed);
  expect(plan.id).toBe("plan-1");
});

test("findDetailed delegates using the reference ids", async () => {
  const options = { headers: { "x-test": "value" } };
  const data = buildProjectAIPlanData({ projectId: "project-123" });
  const find = vi.fn().mockResolvedValue(data);
  installBehaviors({ projectAiPlan: { find } });

  const plan = await ProjectAIPlan.ofId("project-123", "plan-1").findDetailed(
    options,
  );

  expect(find).toHaveBeenCalledWith("project-123", "plan-1", options);
  expect(plan).toBeInstanceOf(ProjectAIPlanDetailed);
});

test("findCommon and getCommon return an existing common model without refetching", async () => {
  const find = vi.fn();
  installBehaviors({ projectAiPlan: { find } });
  const plan = new ProjectAIPlanDetailed(buildProjectAIPlanData());

  await expect(plan.findCommon()).resolves.toBe(plan);
  await expect(plan.getCommon()).resolves.toBe(plan);
  expect(find).not.toHaveBeenCalled();
});

describe("hasPlan", () => {
  test.each([
    { caseName: "positive plan limit", planLimit: 1000, expected: true },
    { caseName: "unlimited plan", expected: true, planLimit: -1 },
    { caseName: "zero plan limit", expected: false, planLimit: 0 },
  ])("returns $expected for a $caseName", ({ planLimit, expected }) => {
    const plan = new ProjectAIPlanDetailed(
      buildProjectAIPlanData({
        keys: { available: 100, planLimit, used: 0 },
      }),
    );

    expect(plan.hasPlan()).toBe(expected);
  });
});

describe("common lookups from a bare reference", () => {
  test("findCommon on a bare reference delegates to find and returns the detailed variant", async () => {
    const data = buildProjectAIPlanData({
      projectId: "project-123",
      planId: "plan-1",
    });
    const find = vi.fn().mockResolvedValue(data);
    installBehaviors({ projectAiPlan: { find } });

    const result = await ProjectAIPlan.ofId(
      "project-123",
      "plan-1",
    ).findCommon();

    expect(find).toHaveBeenCalledWith("project-123", "plan-1", undefined);
    expect(result).toBeInstanceOf(ProjectAIPlanDetailed);
    expect(result).toBeInstanceOf(ProjectAIPlanCommon);
    expect(result?.id).toBe("plan-1");
  });

  test("getCommon on a bare reference returns the common variant when found", async () => {
    const data = buildProjectAIPlanData({
      projectId: "project-123",
      planId: "plan-1",
    });
    const find = vi.fn().mockResolvedValue(data);
    installBehaviors({ projectAiPlan: { find } });

    const result = await ProjectAIPlan.ofId(
      "project-123",
      "plan-1",
    ).getCommon();

    expect(result).toBeInstanceOf(ProjectAIPlanCommon);
    expect(result.id).toBe("plan-1");
  });

  test("getCommon on a bare reference throws when plan options are not found", async () => {
    installBehaviors({
      projectAiPlan: { find: vi.fn().mockResolvedValue(undefined) },
    });

    await expect(
      ProjectAIPlan.ofId("project-123", "plan-1").getCommon(),
    ).rejects.toThrow();
  });
});

describe("query", () => {
  test("execute maps the listed plans", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [
        {
          ...buildProjectAIPlanData({
            description: "AI Hosting M",
            projectId: "project-123",
          }),
          planId: "plan-1",
        },
      ],
      totalCount: 1,
    });
    installBehaviors({ projectAiPlan: { list } });

    const result = await ProjectAIPlan.query("project-123").execute();

    expect(list).toHaveBeenCalledWith("project-123", {}, undefined);
    expect(result).toBeInstanceOf(ProjectAIPlanList);
    expect(result.items[0]).toBeInstanceOf(ProjectAIPlanListItem);
    expect(result.items[0]).toMatchObject({
      description: "AI Hosting M",
      planId: "plan-1",
    });
  });

  test("getTotalCount resolves the number of plans", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildProjectAIPlanData(), buildProjectAIPlanData()],
      totalCount: 2,
    });
    installBehaviors({ projectAiPlan: { list } });

    await expect(
      ProjectAIPlan.query("project-123").getTotalCount(),
    ).resolves.toBe(2);
  });
});
