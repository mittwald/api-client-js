import { GhostMakerModel } from "@mittwald/react-ghostmaker";

import type {
  BackupScheduleCreateRequestData,
  BackupScheduleUpdateRequestData,
  BackupScheduleListQueryData,
  BackupScheduleListItemData,
  BackupScheduleData,
} from "./types";

import assertObjectFound from "../../base/lib/assertObjectFound";
import { Project } from "../../project/internal";
import { config } from "../../config";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  WithData,
} from "../../base";

@GhostMakerModel({
  name: "BackupSchedule",
})
export class BackupSchedule extends ReferenceModel {
  public static async create(
    project: Project,
    data: BackupScheduleCreateRequestData,
  ) {
    const response = await config.behaviors.backupSchedule.create(
      project.id,
      data,
    );

    return new BackupSchedule(response.id);
  }

  public static async find(id: string) {
    const data = await config.behaviors.backupSchedule.find(id);
    if (data) {
      return new BackupScheduleDetailed(data);
    }
  }

  public static async get(id: string) {
    const schedule = await BackupSchedule.find(id);
    assertObjectFound(schedule, BackupSchedule, id);
    return schedule;
  }

  public static ofId(id: string) {
    return new BackupSchedule(id);
  }

  public static query(
    project: Project,
    query: BackupScheduleListQueryData = {},
  ) {
    return new BackupScheduleListQuery(project, query);
  }

  public async delete() {
    await config.behaviors.backupSchedule.delete(this.id);
  }

  public async findCommon(): Promise<BackupScheduleCommon | undefined> {
    return this instanceof BackupScheduleCommon ? this : this.findDetailed();
  }

  public findDetailed(): Promise<BackupScheduleDetailed | undefined> {
    return BackupSchedule.find(this.id);
  }

  public async getCommon(): Promise<BackupScheduleCommon> {
    return this instanceof BackupScheduleCommon ? this : this.getDetailed();
  }

  public getDetailed(): Promise<BackupScheduleDetailed> {
    return BackupSchedule.get(this.id);
  }

  public async update(data: BackupScheduleUpdateRequestData) {
    return await config.behaviors.backupSchedule.update(this.id, data);
  }
}

export class BackupScheduleCommon extends WithData<
  BackupScheduleListItemData | BackupScheduleData
>()(BackupSchedule) {
  public override readonly data:
    | BackupScheduleListItemData
    | BackupScheduleData;
  public readonly description?: string;
  public readonly isSystemBackup: boolean;
  public readonly project: Project;
  public readonly schedule?: string;
  public readonly ttl?: string;

  public constructor(data: BackupScheduleListItemData | BackupScheduleData) {
    super(data.id);
    this.data = data;
    this.description = data.description;
    this.ttl = data.ttl;
    this.schedule = data.schedule;
    this.isSystemBackup = data.isSystemBackup;
    this.project = Project.ofId(data.projectId);
  }
}

export class BackupScheduleDetailed extends BackupScheduleCommon {
  public override readonly data: BackupScheduleData;
  public constructor(data: BackupScheduleData) {
    super(data);
    this.data = data;
  }
}

export class BackupScheduleListItem extends BackupScheduleCommon {
  public override readonly data: BackupScheduleListItemData;
  public constructor(data: BackupScheduleListItemData) {
    super(data);
    this.data = data;
  }
}

export class BackupScheduleListQuery extends ListQueryModel<BackupScheduleListQueryData> {
  public readonly project: Project;

  public constructor(
    project: Project,
    query: BackupScheduleListQueryData = {},
  ) {
    super(query, {
      dependencies: [project.id],
    });
    this.project = project;
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.backupSchedule.list(
      this.project.id,
      this.query,
    );
    return new BackupScheduleList(
      this.project,
      this.query,
      items.map((d) => new BackupScheduleListItem(d)),
      totalCount,
    );
  }

  public refine(query: BackupScheduleListQueryData) {
    return new BackupScheduleListQuery(this.project, {
      ...this.query,
      ...query,
    });
  }
}

export class BackupScheduleList extends WithListData<BackupScheduleListItem>()(
  BackupScheduleListQuery,
) {
  public override readonly items: readonly BackupScheduleListItem[];
  public override readonly totalCount: number;
  public constructor(
    project: Project,
    query: BackupScheduleListQueryData,
    schedules: BackupScheduleListItem[],
    totalCount: number,
  ) {
    super(project, query);
    this.items = Object.freeze(schedules);
    this.totalCount = totalCount;
  }
}
