import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import invariant from "tiny-invariant";
import { omit } from "remeda";

import type { CronjobExecutionListQuery } from "../CronjobExecution";
import type {
  CronjobContainerTargetResponse,
  CronjobAppInstallationTarget,
  CronjobCommandDestination,
  CronjobListQueryModelData,
  CronjobCreateRequestData,
  CronjobUpdateRequestData,
  CronjobListItemData,
  CronjobData,
} from "./types";

import { additionalCronInterpreters, defaultCronInterpreters } from "./types";
import { AppInstallation } from "../../app/AppInstallation/AppInstallation";
import assertObjectFound from "../../base/lib/assertObjectFound";
import { Container } from "../../container/Container/Container";
import { Project } from "../../project/internal";
import { config } from "../../config";
import {
  CronjobExecutionDetailed,
  CronjobExecution,
} from "../CronjobExecution";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base";

@GhostMakerModel({
  name: "Cronjob",
})
export class Cronjob extends ReferenceModel {
  public static readonly defaultTimeout = 3600;
  public static readonly maxTimeout = 86400;
  public static readonly minTimeout = 1;
  public readonly executions: CronjobExecutionListQuery;

  public constructor(id: string) {
    super(id);
    this.executions = CronjobExecution.query(this);
  }

  public static async create(project: Project, data: CronjobCreateRequestData) {
    const result = await config.behaviors.cronjob.create(project.id, data);

    return new Cronjob(result.id);
  }

  public static async find(id: string) {
    const data = await config.behaviors.cronjob.find(id);
    if (data !== undefined) {
      return new CronjobDetailed(data);
    }
  }

  public static async get(id: string) {
    const cronjob = await this.find(id);
    assertObjectFound(cronjob, Cronjob, id);
    return cronjob;
  }

  public static async getInterpreters(appInstallation: AppInstallation) {
    const systemSoftwares = await appInstallation.getInstalledSystemSoftware({
      tagFilter: "interpreter",
    });

    return [
      ...defaultCronInterpreters,
      ...additionalCronInterpreters.filter((i) =>
        systemSoftwares.find((s) => i.name.toLowerCase() === s.name),
      ),
    ];
  }

  public static async getTimeZones() {
    return await config.behaviors.cronjob.getTimeZones();
  }

  public static ofId(id: string) {
    return new Cronjob(id);
  }

  public static query(query: CronjobListQueryModelData) {
    return new CronjobListQuery(query);
  }

  public async delete() {
    await config.behaviors.cronjob.delete(this.id);
  }

  public findCommon(): Promise<CronjobCommon | undefined> | CronjobCommon {
    return this instanceof CronjobCommon ? this : this.findDetailed();
  }

  public findDetailed(): Promise<CronjobDetailed | undefined> {
    return Cronjob.find(this.id);
  }

  public getCommon(): Promise<CronjobCommon> | CronjobCommon {
    return this instanceof CronjobCommon ? this : this.getDetailed();
  }

  public getDetailed(): Promise<CronjobDetailed> {
    return Cronjob.get(this.id);
  }

  public async trigger() {
    await config.behaviors.cronjob.trigger(this.id);
  }

  public async update(data: CronjobUpdateRequestData) {
    await config.behaviors.cronjob.update(this.id, data);
  }
}

export class CronjobCommon extends WithData<
  CronjobListItemData | CronjobData
>()(Cronjob) {
  public readonly active: boolean;
  public readonly command?: CronjobCommandDestination;
  public readonly commandText?: string;
  public override readonly data: CronjobListItemData | CronjobData;
  public readonly description: string;
  public readonly email?: string;
  public readonly failedExecutionAlertThreshold: number;
  public readonly interval: string;
  public readonly latestExecution?: CronjobExecutionDetailed;
  public readonly linkedAppInstallation?: AppInstallation;
  public readonly linkedContainer?: Container;
  public readonly project: Project;
  public readonly targetType: "container" | "app";
  public readonly timeout: number;
  public readonly timeZone?: string;
  public readonly type?: "command" | "url";
  public readonly url?: string;

  public constructor(data: CronjobListItemData | CronjobData) {
    super(data.id);
    this.data = data;
    this.description = data.description;
    this.active = data.active;

    const target = data.target;
    const appTarget =
      target && "appInstallationId" in target
        ? (target as CronjobAppInstallationTarget)
        : undefined;
    const containerTarget =
      target && "serviceShortId" in target
        ? (target as CronjobContainerTargetResponse)
        : undefined;
    const appInstallationId =
      appTarget?.appInstallationId ?? data.appInstallationId ?? data.appId;

    this.targetType = containerTarget ? "container" : "app";

    if (containerTarget) {
      this.commandText = containerTarget.command;
    } else {
      const destination = appTarget?.destination ?? data.destination;
      this.type = destination
        ? "path" in destination
          ? "command"
          : "url"
        : undefined;
      this.url =
        destination && "url" in destination ? destination.url : undefined;
      this.command =
        destination && "path" in destination
          ? {
              interpreter:
                destination.interpreter === "/bin/bash"
                  ? "/usr/bin/bash"
                  : destination.interpreter,
              parameters: destination.parameters,
              path: destination.path,
            }
          : undefined;
    }

    this.interval = data.interval;
    this.linkedAppInstallation = appInstallationId
      ? AppInstallation.ofId(appInstallationId)
      : undefined;
    this.linkedContainer = containerTarget
      ? Container.ofId(containerTarget.serviceShortId, containerTarget.stackId)
      : undefined;
    this.timeout = data.timeout;
    this.email = data.email;
    this.timeZone = data.timeZone;
    this.failedExecutionAlertThreshold = data.failedExecutionAlertThreshold;
    this.latestExecution = data.latestExecution
      ? new CronjobExecutionDetailed(data.latestExecution, this)
      : undefined;
    invariant(data.projectId, `project missing in cronjob ${data.id}`);
    this.project = Project.ofId(data.projectId);
  }
}

export class CronjobDetailed extends CronjobCommon {
  public override readonly data: CronjobData;
  public constructor(data: CronjobData) {
    super(data);
    this.data = data;
  }
}

export class CronjobListItem extends CronjobCommon {
  public override readonly data: CronjobListItemData;
  public constructor(data: CronjobListItemData) {
    super(data);
    this.data = data;
  }
}

export class CronjobListQuery extends ListQueryModel<CronjobListQueryModelData> {
  public constructor(query: CronjobListQueryModelData) {
    super(
      { includeServiceCronjobs: true, ...query },
      { dependencies: [extractId(query.project)] },
    );
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.cronjob.list(
      extractId(this.query.project),
      omit(this.query, ["project"]),
    );
    return new CronjobList(
      this.query,
      items.map((d) => new CronjobListItem(d)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: Partial<CronjobListQueryModelData> = {}) {
    return new CronjobListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class CronjobList extends WithListData<CronjobListItem>()(
  CronjobListQuery,
) {
  public override readonly items: readonly CronjobListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: CronjobListQueryModelData,
    cronjobs: CronjobListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(cronjobs);
    this.totalCount = totalCount;
  }
}
