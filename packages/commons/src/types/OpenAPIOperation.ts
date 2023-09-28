import { AnyResponse, Response } from "./Response.js";
import { AnyRequest, RequestType } from "./RequestType.js";
import { HttpMethod, HttpStatus } from "./http.js";

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

export type ResponseData<TOp, TStatus extends HttpStatus = 200> = Extract<
  InferredResponseType<TOp>,
  { status: TStatus }
>["data"];

export type RequestData<TOp> = TOp extends OpenAPIOperation
  ? InferredRequestType<TOp> extends { data: infer TData }
    ? TData
    : never
  : never;
