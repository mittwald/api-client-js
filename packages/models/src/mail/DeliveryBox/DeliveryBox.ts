import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";
import { omit } from "remeda";

import type {
  DeliveryBoxListQueryModelData,
  DeliveryBoxListItemData,
  DeliveryBoxData,
} from "./types.js";

import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { Project } from "../../project/internal.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "DeliveryBox",
})
export class DeliveryBox extends ReferenceModel {
  public static readonly mailServer = "mail.agenturserver.de";
  public static readonly smtpSsl = "465";
  public static readonly smtpStartTls = "25";

  public static async create(
    project: Project,
    description: string,
    password: string,
  ) {
    const { id } = await config.behaviors.deliveryBox.create(
      project.id,
      description,
      password,
    );
    return new DeliveryBox(id);
  }

  public static async find(id: string) {
    const data = await config.behaviors.deliveryBox.find(id);
    if (data !== undefined) {
      return new DeliveryBoxDetailed(data);
    }
  }

  public static async get(id: string) {
    const deliveryBox = await DeliveryBox.find(id);
    assertObjectFound(deliveryBox, DeliveryBox, id);
    return deliveryBox;
  }

  public static ofId(id: string) {
    return new DeliveryBox(id);
  }

  public static query(query: DeliveryBoxListQueryModelData) {
    return new DeliveryBoxListQuery(query);
  }

  public async delete() {
    await config.behaviors.deliveryBox.delete(this.id);
  }

  public async findCommon(): Promise<DeliveryBoxCommon | undefined> {
    return this instanceof DeliveryBoxCommon ? this : this.findDetailed();
  }

  public findDetailed(): Promise<DeliveryBoxDetailed | undefined> {
    return DeliveryBox.find(this.id);
  }

  public async getCommon(): Promise<DeliveryBoxCommon> {
    return this instanceof DeliveryBoxCommon ? this : this.getDetailed();
  }
  public getDetailed(): Promise<DeliveryBoxDetailed> {
    return DeliveryBox.get(this.id);
  }
  public async updateDescription(description: string) {
    await config.behaviors.deliveryBox.updateDescription(this.id, description);
  }

  public async updatePassword(password: string) {
    await config.behaviors.deliveryBox.updatePassword(this.id, password);
  }
}

export class DeliveryBoxCommon extends WithData<DeliveryBoxData>()(
  DeliveryBox,
) {
  public override readonly data: DeliveryBoxData;
  public readonly description: string;
  public readonly id: string;
  public readonly name: string;
  public readonly project: Project;
  public readonly sendingDisabled: boolean;
  public constructor(data: DeliveryBoxData) {
    super(data.id);
    this.data = data;
    this.id = data.id;
    this.project = Project.ofId(this.data.projectId);
    this.sendingDisabled = !data.sendingEnabled;
    this.name = data.name;
    this.description = data.description;
  }
}

export class DeliveryBoxDetailed extends DeliveryBoxCommon {
  public constructor(data: DeliveryBoxData) {
    super(data);
  }
}

export class DeliveryBoxListQuery extends ListQueryModel<DeliveryBoxListQueryModelData> {
  public constructor(query: DeliveryBoxListQueryModelData) {
    super(query, { dependencies: [extractId(query.project)] });
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.deliveryBox.query(
      extractId(this.query.project),
      {
        limit: config.defaultPaginationLimit,
        ...omit(this.query, ["project"]),
      },
    );
    return new DeliveryBoxList(
      this.query,
      items.map((d) => new DeliveryBoxListItem(d)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { items } = await this.refine({ limit: 1 }).execute();
    return items.length;
  }

  public refine(query: Partial<DeliveryBoxListQueryModelData> = {}) {
    return new DeliveryBoxListQuery({
      ...this.query,
      ...query,
    });
  }
}
export class DeliveryBoxListItem extends DeliveryBoxCommon {
  public constructor(data: DeliveryBoxListItemData) {
    super(data);
  }
}

export class DeliveryBoxList extends WithListData<DeliveryBoxListItem>()(
  DeliveryBoxListQuery,
) {
  public override readonly items: readonly DeliveryBoxListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: DeliveryBoxListQueryModelData,
    deliveryBoxes: DeliveryBoxListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(deliveryBoxes);
    this.totalCount = totalCount;
  }
}
