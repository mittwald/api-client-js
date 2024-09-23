import { Commons } from "@mittwald/api-client";
import { reactProvisionContext } from "./reactProvisionContext.js";
import { refresh } from "@mittwald/react-use-promise";
import { Store } from "@mittwald/react-use-promise/store";

const cacheTagStore = new Store<Set<string>>();

export const refreshProvideReactCache = (tag: string) => {
  cacheTagStore.getAll(tag).forEach((ids) => {
    ids.forEach((id) => {
      refresh({
        tag: String(id),
      });
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
