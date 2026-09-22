import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";
import { omit } from "remeda";

import type {
  BackupCreatePathRestoreRequestData,
  BackupCreateExportRequestData,
  BackupListQueryModelData,
  BackupCreateRequestData,
  BackupListItemData,
  BackupData,
} from "./types";

import assertObjectFound from "../../base/lib/assertObjectFound";
import { BackupSchedule } from "../BackupSchedule";
import { Project } from "../../project/internal";
import { AggregateMetaData } from "../../common";
import { BackupExport } from "./BackupExport";
import { config } from "../../config";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base";

@GhostMakerModel({
  name: "Backup",
})
export class Backup extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "backup",
    "projectbackup",
  );

  public static async create(project: Project, data: BackupCreateRequestData) {
    const { id } = await config.behaviors.backup.create(project.id, data);
    return new Backup(id);
  }

  public static async find(id: string) {
    const data = await config.behaviors.backup.find(id);
    if (data) {
      return new BackupDetailed(data);
    }
  }

  public static async get(id: string) {
    const backup = await Backup.find(id);
    assertObjectFound(backup, Backup, id);
    return backup;
  }

  public static ofId(id: string) {
    return new Backup(id);
  }

  public static query(query: BackupListQueryModelData) {
    return new BackupListQuery(query);
  }

  public async createExport(data: BackupCreateExportRequestData) {
    await config.behaviors.backup.createExport(this.id, data);
  }

  public async createRestoreRequest(data: BackupCreatePathRestoreRequestData) {
    await config.behaviors.backup.createRestoreRequest(this.id, data);
  }

  public async delete() {
    await config.behaviors.backup.delete(this.id);
  }

  public findCommon(): Promise<BackupCommon | undefined> | BackupCommon {
    return this instanceof BackupCommon ? this : this.findDetailed();
  }

  public findDetailed(): Promise<BackupDetailed | undefined> {
    return Backup.find(this.id);
  }

  public getCommon(): Promise<BackupCommon> | BackupCommon {
    return this instanceof BackupCommon ? this : this.getDetailed();
  }

  public getDetailed(): Promise<BackupDetailed> {
    return Backup.get(this.id);
  }

  public async updateDescription(description?: string) {
    await config.behaviors.backup.updateDescription(this.id, description);
  }

  public async updateExpiryDate(expiryDate?: string) {
    await config.behaviors.backup.updateExpiryDate(this.id, expiryDate);
  }
}

export class BackupCommon extends WithData<BackupListItemData | BackupData>()(
  Backup,
) {
  public readonly createdAt?: DateTime;
  public override readonly data: BackupListItemData | BackupData;
  public readonly description?: string;
  public readonly expiresAt?: DateTime;
  public readonly export?: BackupExport;
  public readonly isCompleted: boolean;
  public readonly isDeletable: boolean;
  public readonly project: Project;
  public readonly requestedAt?: DateTime;
  public readonly restoreDatabases?: string[];
  public readonly restoreInProgress: boolean;
  public readonly restorePaths?: string[];
  public readonly schedule?: BackupSchedule;

  public constructor(data: BackupListItemData | BackupData) {
    super(data.id);
    this.data = data;
    this.createdAt = data.createdAt
      ? DateTime.fromISO(data.createdAt)
      : undefined;
    this.requestedAt = data.requestedAt
      ? DateTime.fromISO(data.requestedAt)
      : undefined;
    this.expiresAt = data.expiresAt
      ? DateTime.fromISO(data.expiresAt)
      : undefined;
    this.description = data.description;
    this.isDeletable = data.deletable;
    this.export = data.export ? new BackupExport(data.export) : undefined;
    this.isCompleted = data.status === "Completed";
    this.schedule = data.parentId
      ? BackupSchedule.ofId(data.parentId)
      : undefined;
    this.project = Project.ofId(data.projectId);
    this.restoreInProgress = data.restore?.phase === "running";
    this.restorePaths =
      this.restoreInProgress && data.restore?.pathRestore
        ? data.restore.pathRestore.sourcePaths
        : undefined;
    this.restoreDatabases =
      this.restoreInProgress && data.restore?.databaseRestores
        ? data.restore.databaseRestores.map((r) => r.databaseBackupDump)
        : undefined;
  }

  public readonly findDatabaseBackups = async () => {
    return await config.behaviors.backup.findDatabaseBackups(this.id);
  };

  public readonly findToc = async (directory: string) => {
    return await config.behaviors.backup.findToc(this.id, directory);
  };
}

export class BackupDetailed extends BackupCommon {
  public override readonly data: BackupData;
  public constructor(data: BackupData) {
    super(data);
    this.data = data;
  }
}

export class BackupListItem extends BackupCommon {
  public override readonly data: BackupListItemData;
  public constructor(data: BackupListItemData) {
    super(data);
    this.data = data;
  }
}

export class BackupListQuery extends ListQueryModel<BackupListQueryModelData> {
  public constructor(query: BackupListQueryModelData) {
    super(query, { dependencies: [extractId(query.project)] });
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.backup.list(
      extractId(this.query.project),
      omit(this.query, ["project"]),
    );
    return new BackupList(
      this.query,
      items.map((d) => new BackupListItem(d)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: Partial<BackupListQueryModelData> = {}) {
    return new BackupListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class BackupList extends WithListData<BackupListItem>()(
  BackupListQuery,
) {
  public override readonly items: readonly BackupListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: BackupListQueryModelData,
    backups: BackupListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(backups);
    this.totalCount = totalCount;
  }
}
