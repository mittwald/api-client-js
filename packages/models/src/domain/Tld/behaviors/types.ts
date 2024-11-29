import { TldListItemData, TldListQueryData } from "../types.js";
import { QueryResponseData } from "../../../base/index.js";
import { SchemaObject } from "ajv/dist/2019.js";

export interface TldBehaviors {
  query: (
    query?: TldListQueryData,
  ) => Promise<QueryResponseData<TldListItemData>>;
  getContactSchemas: (tld: string) => Promise<{
    jsonSchemaOwnerC: SchemaObject;
    jsonSchemaAdminC?: SchemaObject;
  }>;
}
