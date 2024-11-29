import { assertStatus, MittwaldAPIV2Client } from "@mittwald/api-client";
import { TldBehaviors } from "./types.js";
import { SchemaObject } from "ajv/dist/2019.js";

export const apiTldBehaviors = (client: MittwaldAPIV2Client): TldBehaviors => ({
  query: async () => {
    const response = await client.domain.listTlds();
    assertStatus(response, 200);
    return {
      items: response.data,
      totalCount: response.data.length,
    };
  },
  getContactSchemas: async (tld: string) => {
    const response = await client.domain.listTldContactSchemas({ tld });
    assertStatus(response, 200);
    const { jsonSchemaOwnerC, jsonSchemaAdminC } = response.data;
    return {
      jsonSchemaOwnerC: jsonSchemaOwnerC as SchemaObject,
      jsonSchemaAdminC: jsonSchemaAdminC as SchemaObject | undefined,
    };
  },
});
