import { mittwaldApi } from "../../api/Mittwald";
import ListModel from "../misc/ListModel";
import ExtensionInstance from "./ExtensionInstance";
import { MarketplaceContext } from "./Extension";

class ExtensionInstanceList extends ListModel<ExtensionInstance> {
  public static useLoadAll(
    context: MarketplaceContext,
    contextId: string,
  ): ExtensionInstanceList {
    const instances = mittwaldApi.extensionListExtensionInstances
      .getResource({ query: { context, contextId } })
      .useWatchData()
      .map((instance) => new ExtensionInstance(instance));

    return new ExtensionInstanceList(instances);
  }
}

export default ExtensionInstanceList;
