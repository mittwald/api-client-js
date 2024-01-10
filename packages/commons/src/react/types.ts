import {
  OpenAPIOperation,
  RequestObject,
  InferredResponseData,
} from "../types/index.js";
import { AsyncResource } from "@mittwald/react-use-promise";

export type GetApiResourceFn<TOp extends OpenAPIOperation> =
  null extends RequestObject<TOp>
    ? (conf?: RequestObject<TOp>) => AsyncResource<InferredResponseData<TOp>>
    : (conf: RequestObject<TOp>) => AsyncResource<InferredResponseData<TOp>>;
