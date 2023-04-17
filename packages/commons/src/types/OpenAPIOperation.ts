import { AnyResponse, Response } from "./Response";
import { AnyRequest, Request } from "./Request";
import { HttpMethod } from "./http";

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
