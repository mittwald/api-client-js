import { AsyncResource, getAsyncResource } from "@mittwald/react-use-promise";
import {
  InferredResponseType,
  OpenAPIOperation,
  RequestObject,
} from "../types/index.js";
import Request from "../core/Request.js";
import { AxiosInstance } from "axios";

type GetApiResourceFn<TOp extends OpenAPIOperation> =
  null extends RequestObject<TOp>
    ? (conf?: RequestObject<TOp>) => AsyncResource<InferredResponseType<TOp>>
    : (conf: RequestObject<TOp>) => AsyncResource<InferredResponseType<TOp>>;

const prefix = "@mittwald/api-client/";

export const getAsyncResourceFactory = <TOp extends OpenAPIOperation>(
  axios: AxiosInstance,
  op: TOp,
): GetApiResourceFn<TOp> =>
  ((requestObj: RequestObject<TOp>) => {
    const request = new Request(axios, op, requestObj);
    const url = request.requestConfig.url;

    const loaderId = prefix + op.operationId;
    const tags = [loaderId, prefix + op.method];

    if (url) {
      tags.push(prefix + url);
    }

    return getAsyncResource(
      (ignored: unknown) => request.execute(),
      [requestObj],
      {
        tags,
        loaderId,
      },
    );
  }) as GetApiResourceFn<TOp>;
