import {
  OpenAPIOperation,
  RequestObject,
  ResponseData,
} from "../types/index.js";
import { AsyncResource } from "@mittwald/react-use-promise";

export type GetApiResourceFn<TOp extends OpenAPIOperation> =
  null extends RequestObject<TOp>
    ? (conf?: RequestObject<TOp>) => AsyncResource<ResponseData<TOp>>
    : (conf: RequestObject<TOp>) => AsyncResource<ResponseData<TOp>>;
