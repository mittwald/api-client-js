import type { AxiosRequestConfig } from "axios";

import { DateTime } from "luxon";

import type { ContainerLogChunk, ContainerLogData } from "./types.js";
import type { Container } from "./Container.js";

import { WithData } from "../../base/index.js";
import { config } from "../../config/index.js";

export class ContainerLog {
  public static async get(container: Container) {
    const data = await config.behaviors.container.getLog(
      container.id,
      container.stackId,
    );
    return new ContainerLogDetailed(data, container);
  }

  public static async getChunk(
    container: Container,
    range: string,
    requestOptions?: AxiosRequestConfig,
  ): Promise<ContainerLogChunk> {
    return config.behaviors.container.getLogChunk(
      container.id,
      container.stackId,
      range,
      requestOptions,
    );
  }
}

class ContainerLogCommon extends WithData<ContainerLogData>()(ContainerLog) {
  public readonly container: Container;
  public readonly content: string;
  public override readonly data: ContainerLogData;
  public readonly lastRefresh: DateTime;

  public constructor(data: ContainerLogData, container: Container) {
    super();
    this.data = data;
    this.content = data;
    this.lastRefresh = DateTime.now();
    this.container = container;
  }
}

export class ContainerLogDetailed extends ContainerLogCommon {
  public constructor(data: ContainerLogData, container: Container) {
    super(data, container);
  }
}
