import { GhostMakerModel } from "@mittwald/react-ghostmaker";

import type { Project } from "../../project/index.js";
import type {
  LicenseListQueryData,
  LicenseListItemData,
  LicenseData,
  LicenseMeta,
} from "./types.js";

import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { ContractDetailed } from "../../contract/index.js";
import { config } from "../../config/index.js";
import {
  resolveAggregateReference,
  type AggregateReference,
  AggregateMetaData,
} from "../../common/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "License",
})
export class License extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData("licence", "licence");

  public constructor(id: string) {
    super(id);
  }

  public static async find(id: string) {
    const data = await config.behaviors.license.find(id);
    if (data) {
      return new LicenseDetailed(data);
    }
  }

  public static async get(id: string) {
    const license = await this.find(id);
    assertObjectFound(license, License, id);
    return license;
  }

  public static ofId(id: string) {
    return new License(id);
  }

  public static query = (project: Project, query: LicenseListQueryData = {}) =>
    new LicenseListQuery(project, query);

  public async findCommon(): Promise<LicenseCommon | undefined> {
    return this instanceof LicenseCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<LicenseDetailed | undefined> {
    return License.find(this.id);
  }

  public async getCommon(): Promise<LicenseCommon> {
    return this instanceof LicenseCommon ? this : this.getDetailed();
  }

  public async getContract() {
    const response = await config.behaviors.license.getContract(this.id);
    return new ContractDetailed(response);
  }

  public async getDetailed(): Promise<LicenseDetailed> {
    return License.get(this.id);
  }

  public async rotateKey() {
    return await config.behaviors.license.rotateKey(this.id);
  }
}

export class LicenseCommon extends WithData<LicenseListItemData | LicenseData>()(
  License,
) {
  public readonly aggregateReference: AggregateReference;
  public override readonly data: LicenseListItemData | LicenseData;
  public readonly description: string;
  public readonly key: string;
  public readonly kind: string;
  public readonly meta: LicenseMeta;

  public constructor(data: LicenseListItemData | LicenseData) {
    super(data.id);
    this.data = data;
    this.description = data.description;
    this.meta = data.meta;
    this.kind = data.kind;
    this.aggregateReference = resolveAggregateReference(data.reference);
    this.key =
      data.keyReference && "key" in data.keyReference
        ? data.keyReference.key
        : "";
  }
}

export class LicenseDetailed extends LicenseCommon {
  public override readonly data: LicenseData;

  public constructor(data: LicenseData) {
    super(data);
    this.data = data;
  }
}

export class LicenseListItem extends LicenseCommon {
  public override readonly data: LicenseListItemData;

  public constructor(data: LicenseListItemData) {
    super(data);
    this.data = data;
  }
}

export class LicenseListQuery extends ListQueryModel<LicenseListQueryData> {
  public readonly project: Project;

  public constructor(project: Project, query: LicenseListQueryData = {}) {
    super(query, {
      dependencies: [project.id],
    });
    this.project = project;
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.license.list(
      this.project.id,
      this.query,
    );

    return new LicenseList(
      this.project,
      this.query,
      items.map((d) => new LicenseListItem(d)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: LicenseListQueryData) {
    return new LicenseListQuery(this.project, {
      ...this.query,
      ...query,
    });
  }
}

export class LicenseList extends WithListData<LicenseListItem>()(
  LicenseListQuery,
) {
  public override readonly items: readonly LicenseListItem[];
  public override readonly totalCount: number;

  public constructor(
    project: Project,
    query: LicenseListQueryData,
    licenses: LicenseListItem[],
    totalCount: number,
  ) {
    super(project, query);
    this.items = Object.freeze(licenses);
    this.totalCount = totalCount;
  }
}
