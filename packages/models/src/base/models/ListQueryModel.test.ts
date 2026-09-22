import { afterEach, describe, expect, test, vi } from "vitest";

import type {
  ContainerListQueryData,
  ContainerListItemData,
} from "../../container/Container/types";

import { ListQueryModel } from "./ListQueryModel";
import { ListDataModel } from "./ListDataModel";
import { config } from "../../config/config";
import {
  buildContainerData,
  installBehaviors,
  resetBehaviors,
} from "../../testing";

afterEach(resetBehaviors);

class TestContainerListQuery extends ListQueryModel<ContainerListQueryData> {
  public constructor(
    private readonly projectId: string,
    query: ContainerListQueryData = {},
  ) {
    super(query, { dependencies: [projectId] });
  }

  public async execute(): Promise<ListDataModel<ContainerListItemData>> {
    const { totalCount, items } = await config.behaviors.container.list(
      this.projectId,
      this.query,
    );

    return new ListDataModel([...items], totalCount);
  }
}

describe("ListQueryModel", () => {
  test("creates a stable query id from dependencies and query structure", () => {
    const first = new TestContainerListQuery("project-id", {
      limit: 20,
      page: 1,
    });
    const equal = new TestContainerListQuery("project-id", {
      limit: 20,
      page: 1,
    });
    const different = new TestContainerListQuery("project-id", {
      limit: 20,
      page: 2,
    });

    expect(first.queryId).toEqual(expect.any(String));
    expect(first.queryId).not.toHaveLength(0);
    expect(equal.queryId).toBe(first.queryId);
    expect(different.queryId).not.toBe(first.queryId);
  });

  test("delegates execution to the container behavior and materializes its result", async () => {
    const query: ContainerListQueryData = { limit: 20, page: 1 };
    const items = [buildContainerData()];
    const list = vi.fn().mockResolvedValue({ totalCount: 7, items });
    installBehaviors({ container: { list } });

    const result = await new TestContainerListQuery(
      "project-id",
      query,
    ).execute();

    expect(list).toHaveBeenCalledWith("project-id", query);
    expect(result.items).toEqual(items);
    expect(result.totalCount).toBe(7);
  });
});
