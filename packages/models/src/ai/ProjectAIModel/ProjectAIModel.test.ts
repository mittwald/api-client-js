import { afterEach, describe, expect, it, vi } from "vitest";

import { buildProjectAIDetailedModelData } from "../../testing/builders/buildProjectAIDetailedModelData";
import { ReferenceModel } from "../../base";
import { installBehaviors, resetBehaviors } from "../../testing/installBehaviors";
import { ProjectAIModelListItem, ProjectAIModelList, ProjectAIModel } from "./ProjectAIModel";

afterEach(resetBehaviors);

describe("ProjectAIModel", () => {
  it("delegates list queries and maps the result", async () => {
    const list = vi.fn().mockResolvedValue({
      items: [buildProjectAIDetailedModelData()],
      totalCount: 1,
    });
    installBehaviors({ projectAIModel: { list } });

    const result = await ProjectAIModel.query("project-1").execute();

    expect(list).toHaveBeenCalledWith("project-1", {});
    expect(result).toBeInstanceOf(ProjectAIModelList);
    expect(result.items[0]).toBeInstanceOf(ProjectAIModelListItem);
    expect(result.totalCount).toBe(1);
  });

  it("exposes detailed model data through derived getters", () => {
    const withoutRemoval = new ProjectAIModelListItem(
      buildProjectAIDetailedModelData({ replacesModelName: "gpt-old" }),
    );
    const withRemoval = new ProjectAIModelListItem(
      buildProjectAIDetailedModelData({ removalAt: "2025-01-01T00:00:00.000Z" }),
    );

    expect(withoutRemoval.activeAt.isValid).toBe(true);
    expect(withoutRemoval.removalAt).toBeUndefined();
    expect(withRemoval.removalAt?.isValid).toBe(true);
    expect(withoutRemoval.status).toBe("active");
    expect(withoutRemoval.replacesModelName).toBe("gpt-old");
    expect(withoutRemoval.documentationLink).toBe("https://docs.example.com/detailed");
  });

  it("preserves the model inheritance chain", () => {
    const item = new ProjectAIModelListItem(buildProjectAIDetailedModelData());

    expect(item).toBeInstanceOf(ProjectAIModelListItem);
    expect(item).toBeInstanceOf(ProjectAIModel);
    expect(item).toBeInstanceOf(ReferenceModel);
    expect(item.data).toBeDefined();
  });
});
