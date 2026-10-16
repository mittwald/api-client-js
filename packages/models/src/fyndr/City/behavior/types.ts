import type { CitiesListQueryData, CitiesListItemData } from "../types.js";
import type { QueryResponseData } from "../../../base/index.js";

export interface CityBehaviors {
  list: (
    query: CitiesListQueryData,
  ) => Promise<QueryResponseData<CitiesListItemData>>;
}
