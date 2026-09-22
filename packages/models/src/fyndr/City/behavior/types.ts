import type { CitiesListQueryData, CitiesListItemData } from "../types";
import type { QueryResponseData } from "../../../base";

export interface CityBehaviors {
  list: (
    query: CitiesListQueryData,
  ) => Promise<QueryResponseData<CitiesListItemData>>;
}
