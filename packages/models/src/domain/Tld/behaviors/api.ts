import type { MittwaldAPIV2Client } from "@mittwald/api-client";
import type { Schema as SchemaObject } from "jsonschema";

import type { TldBehaviors } from "./types";

import { validateResponse } from "../../../base/api/validateResponse";
import { resolveTotalCount } from "../../../base";

export const apiTldBehaviors = (client: MittwaldAPIV2Client): TldBehaviors => ({
  getContactSchemas: async (tld) => {
    const response = await client.domain.listTldContactSchemas({ tld });
    validateResponse(response, 200);
    const { jsonSchemaOwnerC, jsonSchemaAdminC } = response.data;
    return {
      jsonSchemaAdminC: jsonSchemaAdminC as SchemaObject | undefined,
      jsonSchemaOwnerC: jsonSchemaOwnerC as SchemaObject,
    };
  },
  queryPrices: async () => {
    const response = await client.article.listArticles({
      queryParameters: {
        templateNames: ["domain"],
        orderable: ["full"],
        limit: 2000,
      },
    });
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },
  query: async () => {
    const response = await client.domain.listTlds();
    validateResponse(response, 200);
    return {
      totalCount: resolveTotalCount(response),
      items: response.data,
    };
  },
});
