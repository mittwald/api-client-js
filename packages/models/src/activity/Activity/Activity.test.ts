import { expect, test } from "vitest";

import type { ActivityListItemData } from "./types.js";

import { ActivityListItem } from "./Activity.js";
import { Project } from "../../project/index.js";

const listItemData = (aggregate: {
  aggregate: string;
  domain: string;
  id: string;
}): ActivityListItemData =>
  ({
    action: { name: "future.thing-happened", parameters: {}, changes: {} },
    dateTime: "2024-03-04T05:06:07.000Z",
    aggregate,
  }) as ActivityListItemData;

test("resolves the aggregate reference to a model", () => {
  const activity = new ActivityListItem(
    Project.ofId("p-1"),
    listItemData({ aggregate: "project", domain: "project", id: "p-1" }),
  );

  expect(activity.aggregate).toBeInstanceOf(Project);
  expect(activity.aggregate?.id).toBe("p-1");
});

test("keeps an unknown aggregate reference unresolved", () => {
  const activity = new ActivityListItem(
    Project.ofId("p-1"),
    listItemData({ aggregate: "nope", domain: "nope", id: "x" }),
  );

  expect(activity.aggregate).toBeUndefined();
});
