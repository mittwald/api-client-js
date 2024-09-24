import {
  InferredRequestType,
  InferredResponseType,
  OpenAPIOperation,
} from "./OpenAPIOperation.js";
import { NullableOnNoRequiredKeysDeep } from "./NullableOnNoRequiredKeysDeep.js";
import Request from "../core/Request.js";

export interface RequestOptions<
  TOp extends OpenAPIOperation = OpenAPIOperation,
> {
  onBeforeRequest?: (req: Request<TOp>) => void;
}

type UnboxPathParameters<T> = T extends { pathParameters: infer TPath }
  ? Omit<T, "pathParameters"> & TPath
  : T;

export type RequestObject<TOp extends OpenAPIOperation> =
  NullableOnNoRequiredKeysDeep<UnboxPathParameters<InferredRequestType<TOp>>>;

export type ResponsePromise<TOp extends OpenAPIOperation> = Promise<
  InferredResponseType<TOp>
>;

type RequestFunctionWithOptionalRequest<TOp extends OpenAPIOperation> = (
  request?: RequestObject<TOp>,
  opts?: RequestOptions<TOp>,
) => ResponsePromise<TOp>;

type RequestFunctionWithRequiredRequest<TOp extends OpenAPIOperation> = (
  request: RequestObject<TOp>,
  opts?: RequestOptions<TOp>,
) => ResponsePromise<TOp>;

export type RequestFunction<TOp extends OpenAPIOperation> =
  null extends RequestObject<TOp>
    ? RequestFunctionWithOptionalRequest<TOp>
    : RequestFunctionWithRequiredRequest<TOp>;
