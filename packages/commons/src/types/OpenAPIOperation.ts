import { AnyResponse, Response } from "./Response.js";
import { AnyRequest, RequestType } from "./RequestType.js";
import { HttpMethod } from "./http.js";

export interface OpenAPIOperation<
  TIgnoredRequest extends AnyRequest = RequestType,
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
  RequestType,
  infer TRes
>
  ? TRes
  : never;
