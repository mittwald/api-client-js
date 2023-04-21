import { AnyResponse, Response } from "./Response.js";
import { AnyRequest, Request } from "./Request.js";
import { HttpMethod } from "./http.js";

export interface OpenAPIOperation<
  TIgnoredRequest extends AnyRequest = Request,
  IgnoredResponse extends AnyResponse = Response,
> {
  operationId: string;
  path: string;
  method: HttpMethod;
}

export type InferredRequestType<TOp> = TOp extends OpenAPIOperation<infer TReq>
  ? TReq
  : never;

export type InferredResponseType<TOp> = TOp extends OpenAPIOperation<
  Request,
  infer TRes
>
  ? TRes
  : never;
