import { AnyResponse, Response } from "./Response.js";
import { AnyRequest, RequestType } from "./RequestType.js";
import { HttpMethod, HttpStatus } from "./http.js";

export type QuerySerializationStyles =
  | "form"
  | "spaceDelimited"
  | "pipeDelimited"
  | "deepObject"
  | "contentJSON";
export interface SerializationOptions<TStyle extends string> {
  style: TStyle;
  explode?: boolean;
}

export interface OpenAPIOperation<
  TIgnoredRequest extends AnyRequest = RequestType,
  IgnoredResponse extends AnyResponse = Response,
> {
  operationId: string;
  path: string;
  method: HttpMethod;
  serialization?: {
    query?: Record<string, SerializationOptions<QuerySerializationStyles>>;
  };
}

export type InferredRequestType<TOp> =
  TOp extends OpenAPIOperation<infer TReq> ? TReq : never;

export type InferredResponseType<TOp> =
  TOp extends OpenAPIOperation<RequestType, infer TRes> ? TRes : never;

export type InferredResponseData<
  TOp,
  TStatus extends HttpStatus = 200,
> = Extract<InferredResponseType<TOp>, { status: TStatus }>["data"];

export type InferredRequestData<TOp> = TOp extends OpenAPIOperation
  ? InferredRequestType<TOp> extends { data: infer TData }
    ? TData
    : never
  : never;

/** @deprecated Use InferredResponseData */
export type ResponseData<TOp> = InferredResponseData<TOp>;

/** @deprecated Use InferredRequestData */
export type RequestData<TOp> = InferredRequestData<TOp>;
