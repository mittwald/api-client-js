import type { AnyResponse } from "@mittwald/api-client-commons";
import type { Commons } from "@mittwald/api-client";

export type ApiClientRequest = Commons.Request<Commons.OpenAPIOperation>;

export type ApiClientResponse = AnyResponse;
