import { jest } from "@jest/globals";
import { config } from "../../config/config.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import {
  Ingress,
  IngressDetailed,
  IngressList,
  IngressListItem,
  IngressListQuery,
} from "./Ingress.js";
import { IngressBehaviors } from "./behaviors/types.js";
import { IngressData, IngressListItemData } from "./types.js";
import { Project } from "../../project/index.js";

const ingressData = (overrides: Partial<IngressData> = {}): IngressData =>
  ({
    id: "ingress-1",
    hostname: "example.com",
    isDefault: false,
    paths: [{ path: "/", target: { useDefaultPage: true } }],
    ...overrides,
  }) as unknown as IngressData;

const listItemData = (
  overrides: Partial<IngressListItemData> = {},
): IngressListItemData =>
  ingressData(overrides as Partial<IngressData>) as IngressListItemData;

const find = jest.fn<IngressBehaviors["find"]>();
const list = jest.fn<IngressBehaviors["list"]>();

beforeEach(() => {
  find.mockReset();
  list.mockReset();
  config.behaviors.ingress = { find, list };
});

describe("Ingress reference", () => {
  test("ofId keeps the id", () => {
    expect(Ingress.ofId("ingress-1").id).toBe("ingress-1");
  });

  test("ofHostname uses the hostname as id", () => {
    expect(Ingress.ofHostname("example.com").id).toBe("example.com");
  });

  test("describes itself with class name and id", () => {
    expect(Ingress.ofId("ingress-1").describe()).toBe("Ingress@ingress-1");
  });
});

describe("Ingress.find", () => {
  test("wraps the found data in an IngressDetailed", async () => {
    find.mockResolvedValue(ingressData());

    const ingress = await Ingress.find("ingress-1");

    expect(find).toHaveBeenCalledWith("ingress-1");
    expect(ingress).toBeInstanceOf(IngressDetailed);
    expect(ingress?.id).toBe("ingress-1");
  });

  test("returns undefined when the behavior finds nothing", async () => {
    find.mockResolvedValue(undefined);

    await expect(Ingress.find("missing")).resolves.toBeUndefined();
  });
});

describe("Ingress.get", () => {
  test("returns the ingress when it exists", async () => {
    find.mockResolvedValue(ingressData());

    await expect(Ingress.get("ingress-1")).resolves.toBeInstanceOf(
      IngressDetailed,
    );
  });

  test("throws an ObjectNotFoundError when it does not exist", async () => {
    find.mockResolvedValue(undefined);

    await expect(Ingress.get("missing")).rejects.toThrow(ObjectNotFoundError);
  });

  test("names the missing id in the error", async () => {
    find.mockResolvedValue(undefined);

    await expect(Ingress.get("missing")).rejects.toThrow(
      "Ingress@missing not found",
    );
  });
});

describe("IngressDetailed", () => {
  test("derives an https base url from the hostname", () => {
    expect(new IngressDetailed(ingressData()).baseUrl).toBe(
      "https://example.com",
    );
  });

  test("builds an IngressPath per path entry", () => {
    const ingress = new IngressDetailed(
      ingressData({
        paths: [
          { path: "/", target: { useDefaultPage: true } },
          { path: "/api", target: { url: "https://api.example.com" } },
        ],
      } as Partial<IngressData>),
    );

    expect(ingress.paths.map((p) => p.path)).toEqual(["/", "/api"]);
    expect(ingress.paths[1].url.href).toBe("https://example.com/api");
  });

  test("freezes the path list", () => {
    expect(Object.isFrozen(new IngressDetailed(ingressData()).paths)).toBe(
      true,
    );
  });

  test("picks the '/' path as the default path", () => {
    const ingress = new IngressDetailed(
      ingressData({
        paths: [
          { path: "/api", target: { useDefaultPage: true } },
          { path: "/", target: { useDefaultPage: true } },
        ],
      } as Partial<IngressData>),
    );

    expect(ingress.defaultPath.path).toBe("/");
    expect(ingress.defaultPath).toBe(ingress.paths[1]);
  });

  test("refuses an ingress without a '/' path", () => {
    expect(
      () =>
        new IngressDetailed(
          ingressData({
            paths: [{ path: "/api", target: { useDefaultPage: true } }],
          } as Partial<IngressData>),
        ),
    ).toThrow("Ingress IngressDetailed@ingress-1 has no default path.");
  });

  test("refuses an ingress with no paths at all", () => {
    expect(
      () =>
        new IngressDetailed(ingressData({ paths: [] } as Partial<IngressData>)),
    ).toThrow("has no default path.");
  });
});

describe("IngressListQuery", () => {
  test("passes the query through to the behavior", async () => {
    list.mockResolvedValue({ items: [], totalCount: 0 });

    await new IngressListQuery({ limit: 5 }).execute();

    expect(list).toHaveBeenCalledWith({ limit: 5, projectId: undefined });
  });

  /**
   * `execute` spreads the query and only then assigns `projectId: project?.id`,
   * so a raw `projectId` passed straight through (as the deprecated
   * `Ingress.list` does) is overwritten with `undefined` and the filter is
   * lost.
   */
  test("drops a raw projectId that is not wrapped in a Project model", async () => {
    list.mockResolvedValue({ items: [], totalCount: 0 });

    await Ingress.list({ projectId: "project-1" });

    expect(list).toHaveBeenCalledWith(
      expect.objectContaining({ projectId: undefined }),
    );
  });

  test("maps a project reference to a projectId", async () => {
    list.mockResolvedValue({ items: [], totalCount: 0 });

    await new IngressListQuery({
      project: Project.ofId("project-1"),
    }).execute();

    expect(list).toHaveBeenCalledWith({ projectId: "project-1" });
  });

  test("wraps the response into an IngressList of IngressListItems", async () => {
    list.mockResolvedValue({ items: [listItemData()], totalCount: 3 });

    const result = await new IngressListQuery().execute();

    expect(result).toBeInstanceOf(IngressList);
    expect(result.totalCount).toBe(3);
    expect(result.items[0]).toBeInstanceOf(IngressListItem);
    expect(result.items[0].id).toBe("ingress-1");
  });

  test("refine merges the new query on top of the existing one", async () => {
    list.mockResolvedValue({ items: [], totalCount: 0 });

    await new IngressListQuery({ limit: 5 }).refine({ limit: 10 }).execute();

    expect(list).toHaveBeenCalledWith({ limit: 10, projectId: undefined });
  });

  test("refine keeps untouched parts of the query", async () => {
    list.mockResolvedValue({ items: [], totalCount: 0 });

    await new IngressListQuery({ limit: 5 }).refine({}).execute();

    expect(list).toHaveBeenCalledWith({ limit: 5, projectId: undefined });
  });

  test("refine returns a new query rather than mutating the old one", () => {
    const query = new IngressListQuery({ limit: 5 });

    const refined = query.refine({ limit: 10 });

    expect(refined).not.toBe(query);
    expect(refined.queryId).not.toBe(query.queryId);
  });

  /**
   * `getTotalCount` currently counts the returned items instead of using the
   * `totalCount` of the response, because pagination is not supported by the
   * API yet (see the TODO in `Ingress.ts`).
   */
  test("getTotalCount reports the number of returned items", async () => {
    list.mockResolvedValue({
      items: [listItemData(), listItemData({ id: "ingress-2" })],
      totalCount: 99,
    });

    await expect(new IngressListQuery().getTotalCount()).resolves.toBe(2);
  });

  test("findOneAndOnly returns the single match", async () => {
    list.mockResolvedValue({ items: [listItemData()], totalCount: 1 });

    const found = await new IngressListQuery().findOneAndOnly();

    expect(found?.id).toBe("ingress-1");
  });

  test("findOneAndOnly returns undefined when there is more than one match", async () => {
    list.mockResolvedValue({
      items: [listItemData(), listItemData({ id: "ingress-2" })],
      totalCount: 2,
    });

    await expect(
      new IngressListQuery().findOneAndOnly(),
    ).resolves.toBeUndefined();
  });

  test("findOneAndOnly returns undefined when there is no match", async () => {
    list.mockResolvedValue({ items: [], totalCount: 0 });

    await expect(
      new IngressListQuery().findOneAndOnly(),
    ).resolves.toBeUndefined();
  });
});

describe("IngressList.getDefault", () => {
  test("returns the ingress flagged as default", () => {
    const ingressList = new IngressList(
      {},
      [
        new IngressListItem(listItemData()),
        new IngressListItem(
          listItemData({ id: "ingress-2", isDefault: true } as never),
        ),
      ],
      2,
    );

    expect(ingressList.getDefault().id).toBe("ingress-2");
  });

  test("throws when no ingress is flagged as default", () => {
    const ingressList = new IngressList(
      {},
      [new IngressListItem(listItemData())],
      1,
    );

    expect(() => ingressList.getDefault()).toThrow(
      "IngressListItem@IngressList not found",
    );
  });

  test("throws for an empty list", () => {
    const ingressList = new IngressList({}, [], 0);

    expect(() => ingressList.getDefault()).toThrow(ObjectNotFoundError);
  });
});
