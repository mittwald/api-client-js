import { getAsyncResource } from "@mittwald/react-use-promise";
import {
  assertStatus,
  OpenAPIOperation,
  RequestFunction,
  RequestObject,
  InferredResponseData,
} from "../types/index.js";
import Request from "../core/Request.js";
import { GetApiResourceFn } from "./types.js";

export class ApiCallAsyncResourceFactory<TOp extends OpenAPIOperation> {
  private static namespace = "@mittwald/api-client";
  private readonly operation: TOp;
  private readonly requestFn: RequestFunction<TOp>;

  public constructor(operation: TOp, requestFn: RequestFunction<TOp>) {
    this.operation = operation;
    this.requestFn = requestFn;
  }

  private getAsyncResourceId(): string {
    return `${ApiCallAsyncResourceFactory.namespace}/${this.operation.operationId}`;
  }

  private getAsyncResourceTags(request: Request<TOp>): string[] {
    const url = request.requestConfig.url ?? "";

    return [
      this.getAsyncResourceId(),
      `${ApiCallAsyncResourceFactory.namespace}/${this.operation.method}`,
      `${ApiCallAsyncResourceFactory.namespace}/${url}`,
    ];
  }

  private async executeRequest(
    requestObj: RequestObject<TOp>,
  ): Promise<InferredResponseData<TOp>> {
    const response = await this.requestFn(requestObj);
    assertStatus(response, 200);
    return response.data;
  }

  public getApiResource: GetApiResourceFn<TOp> = ((
    requestObj: RequestObject<TOp>,
  ) => {
    const request = new Request(this.operation, requestObj);

    return getAsyncResource(
      (requestObj) => this.executeRequest(requestObj),
      [requestObj],
      {
        tags: this.getAsyncResourceTags(request),
        loaderId: this.getAsyncResourceId(),
      },
    );
  }) as GetApiResourceFn<TOp>;
}
