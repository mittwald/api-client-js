import {
  OpenAPIOperation,
  InferredRequestType,
  InferredResponseType,
} from "./OpenAPIOperation";
import { NullableOnNoRequiredKeysDeep } from "./NullableOnNoRequiredKeysDeep";

export type RequestConfig<TOp extends OpenAPIOperation> =
  NullableOnNoRequiredKeysDeep<InferredRequestType<TOp>>;

export type ResponsePromise<TOp extends OpenAPIOperation> = Promise<
  InferredResponseType<TOp>
>;

type RequestFunctionWithOptionalRequest<TOp extends OpenAPIOperation> = (
  request?: RequestConfig<TOp>,
) => ResponsePromise<TOp>;

type RequestFunctionWithRequiredRequest<TOp extends OpenAPIOperation> = (
  request: RequestConfig<TOp>,
) => ResponsePromise<TOp>;

export type RequestFunction<TOp extends OpenAPIOperation> =
  null extends RequestConfig<TOp>
    ? RequestFunctionWithOptionalRequest<TOp>
    : RequestFunctionWithRequiredRequest<TOp>;
