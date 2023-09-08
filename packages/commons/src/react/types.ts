import {
  InferredResponseType,
  OpenAPIOperation,
  RequestObject,
} from "../types/index.js";
import { AsyncResource } from "@mittwald/react-use-promise";

export type Inferred200ResponseData<TOp> = Extract<
  InferredResponseType<TOp>,
  { status: 200 }
>["data"];

export type GetApiResourceFn<TOp extends OpenAPIOperation> =
  null extends RequestObject<TOp>
    ? (conf?: RequestObject<TOp>) => AsyncResource<Inferred200ResponseData<TOp>>
    : (conf: RequestObject<TOp>) => AsyncResource<Inferred200ResponseData<TOp>>;
