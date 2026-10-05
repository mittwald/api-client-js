import { Commons } from "@mittwald/api-client";
import { reactProvisionContext } from "./reactProvisionContext.js";
import { asyncResourceStore, refresh } from "@mittwald/react-use-promise";
import { Store } from "@mittwald/react-use-promise/store";

const cacheTagStore = new Store<Set<string>>();

export const refreshProvideReactCache = (tag: string) => {
  const idSets = cacheTagStore.getAll(tag);
  const ids = new Set(idSets.flatMap((idSet) => [...idSet]));

  if (ids.size === 0) {
    return;
  }

  const resources = asyncResourceStore.getAll();

  // AsyncResource.meta only exists since @mittwald/react-use-promise 4.1
  if (resources.some((resource) => !resource.meta)) {
    ids.forEach((id) => refresh({ tag: id }));
    return;
  }

  const existingIds = new Set<string>();

  resources.forEach((resource) => {
    const id = resource.meta.tags?.tags.find(
      (resourceTag): resourceTag is string =>
        typeof resourceTag === "string" && ids.has(resourceTag),
    );

    if (id !== undefined) {
      existingIds.add(id);
      resource.refresh();
    }
  });

  idSets.forEach((idSet) => {
    idSet.forEach((id) => {
      if (!existingIds.has(id)) {
        idSet.delete(id);
      }
    });
  });
};

export const addTagToProvideReactCache = (tag: string) => {
  const context = reactProvisionContext.use();

  if (context) {
    const ids = cacheTagStore.get(tag) ?? new Set<string>();
    ids.add(context.id);

    cacheTagStore.set(tag, () => ids, {
      tags: [tag],
    });
  }
};

export const addUrlTagToProvideReactCache: Commons.RequestOptions["onBeforeRequest"] =
  (request) => {
    const url = request.requestConfig.url;

    if (request.requestConfig.method === "GET" && url) {
      addTagToProvideReactCache(url);
    }
  };
