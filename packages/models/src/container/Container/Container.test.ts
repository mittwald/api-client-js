import type * as ReactGhostmaker from "@mittwald/react-ghostmaker/model";

import { afterEach, describe, expect, test, vi } from "vitest";

vi.mock("@mittwald/react-ghostmaker/model", async (importOriginal) => ({
  ...(await importOriginal<typeof ReactGhostmaker>()),
  getModelName: (type: unknown) =>
    typeof type === "function" ? (type as { name?: string }).name : undefined,
}));

import { ContainerDetailed, ContainerCommon, Container } from "./Container.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import { AggregateMetaData } from "../../common/index.js";
import {
  buildContainerData,
  installBehaviors,
  resetBehaviors,
} from "../../testing/index.js";

afterEach(resetBehaviors);

describe("Container", () => {
  test("find delegates to the container behavior and returns a detailed container", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildContainerData({ stackId: "s-1", id: "c-1" }));
    installBehaviors({ container: { find } });

    const result = await Container.find("c-1", "s-1");

    expect(find).toHaveBeenCalledWith("c-1", "s-1");
    expect(result).toBeInstanceOf(ContainerDetailed);
    expect(result?.id).toBe("c-1");
  });

  test("find maps a missing container to undefined", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ container: { find } });

    const result = await Container.find("missing", "s-1");

    expect(find).toHaveBeenCalledWith("missing", "s-1");
    expect(result).toBeUndefined();
  });

  test("get delegates to the container behavior and returns a detailed container", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildContainerData({ stackId: "s-2", id: "c-2" }));
    installBehaviors({ container: { find } });

    const result = await Container.get("c-2", "s-2");

    expect(find).toHaveBeenCalledWith("c-2", "s-2");
    expect(result).toBeInstanceOf(ContainerDetailed);
    expect(result.id).toBe("c-2");
  });

  test("get rejects with ObjectNotFoundError when the container is missing", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ container: { find } });

    await expect(Container.get("missing", "s-1")).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("findDetailed delegates with the reference identifiers", async () => {
    const ref = Container.ofId("c-3", "s-3");
    const find = vi
      .fn()
      .mockResolvedValue(buildContainerData({ stackId: "s-3", id: "c-3" }));
    installBehaviors({ container: { find } });

    const result = await ref.findDetailed();

    expect(find).toHaveBeenCalledWith("c-3", "s-3");
    expect(result).toBeInstanceOf(ContainerDetailed);
    expect(result?.id).toBe("c-3");
  });

  test("findCommon delegates to find and returns a detailed container for a bare reference", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildContainerData({ stackId: "s-4", id: "c-4" }));
    installBehaviors({ container: { find } });
    const ref = Container.ofId("c-4", "s-4");

    const result = await ref.findCommon();

    expect(find).toHaveBeenCalledWith("c-4", "s-4");
    expect(result).toBeInstanceOf(ContainerDetailed);
    expect(result).toBeInstanceOf(ContainerCommon);
    expect(result?.id).toBe("c-4");
  });

  test("findCommon maps a missing container to undefined for a bare reference", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ container: { find } });

    await expect(
      Container.ofId("m", "s").findCommon(),
    ).resolves.toBeUndefined();
    expect(find).toHaveBeenCalledWith("m", "s");
  });

  test("getCommon rejects with ObjectNotFoundError for a missing bare reference", async () => {
    const find = vi.fn().mockResolvedValue(undefined);
    installBehaviors({ container: { find } });

    await expect(Container.ofId("m", "s").getCommon()).rejects.toBeInstanceOf(
      ObjectNotFoundError,
    );
  });

  test("findCommon and getCommon reuse an already materialized container without re-fetching", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildContainerData({ stackId: "s-5", id: "c-5" }));
    installBehaviors({ container: { find } });
    const detailed = await Container.get("c-5", "s-5");
    find.mockClear();

    expect(detailed).toBeInstanceOf(ContainerCommon);
    await expect(detailed.findCommon()).resolves.toBe(detailed);
    await expect(detailed.getCommon()).resolves.toBe(detailed);
    expect(find).not.toHaveBeenCalled();
  });

  test("aggregateMetaData identifies the container aggregate", () => {
    expect(Container.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
    expect(Container.aggregateMetaData.domain).toBe("container");
    expect(Container.aggregateMetaData.aggregate).toBe("container");
  });

  test("cpuLimit and ramLimit are undefined when deploy resource limits are absent", async () => {
    const find = vi
      .fn()
      .mockResolvedValue(buildContainerData({ stackId: "s-6", id: "c-6" }));
    installBehaviors({ container: { find } });

    const container = await Container.get("c-6", "s-6");

    expect(container.cpuLimit).toBeUndefined();
    expect(container.ramLimit).toBeUndefined();
  });

  test.each([
    { status: "running", expected: true },
    { status: "error", expected: true },
    { status: "stopped", expected: false },
    { status: "creating", expected: false },
    { status: "starting", expected: false },
    { status: "stopping", expected: false },
    { status: undefined, expected: false },
  ] as const)(
    "canRestart returns $expected when the status is $status",
    ({ expected, status }) => {
      const container = new ContainerCommon(buildContainerData({ status }));

      expect(container.canRestart()).toBe(expected);
    },
  );

  test.each([
    { status: "stopped", expected: true },
    { status: "running", expected: false },
    { status: "error", expected: false },
    { status: "creating", expected: false },
    { status: "starting", expected: false },
    { status: "stopping", expected: false },
    { status: undefined, expected: false },
  ] as const)(
    "canStart returns $expected when the status is $status",
    ({ expected, status }) => {
      const container = new ContainerCommon(buildContainerData({ status }));

      expect(container.canStart()).toBe(expected);
    },
  );

  test.each([
    { status: "stopped", expected: false },
    { status: "running", expected: true },
    { status: "error", expected: true },
    { status: "creating", expected: true },
    { status: "starting", expected: true },
    { status: "stopping", expected: true },
    { status: undefined, expected: true },
  ] as const)(
    "canStop returns $expected when the status is $status",
    ({ expected, status }) => {
      const container = new ContainerCommon(buildContainerData({ status }));

      expect(container.canStop()).toBe(expected);
    },
  );
});
