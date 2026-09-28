import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { CityBehaviors } from "./types.js";

import { validateResponse } from "../../../base/api/validateResponse.js";

export const apiCityBehavior = (
  client: MittwaldAPIV2Client,
): CityBehaviors => ({
  list: async (query) => {
    const response = await client.leadFyndr.leadfyndrGetCities({
      queryParameters: query,
    });

    validateResponse(response, 200);

    return {
      totalCount: response.data.length,
      items: response.data,
    };
  },
});
