import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { omit } from "remeda";

import type {
  RegistryUpdateCredentialsRequestData,
  RegistryListQueryModelData,
  RegistryCreateRequestData,
  RegistryUpdateRequestData,
  RegistryListItemData,
  RegistryLoginType,
  RegistryData,
} from "./types";

import assertObjectFound from "../../base/lib/assertObjectFound";
import { Project } from "../../project/internal";
import { AggregateMetaData } from "../../common";
import { config } from "../../config";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  extractId,
  WithData,
} from "../../base";

@GhostMakerModel({
  name: "Registry",
})
export class Registry extends ReferenceModel {
  public static aggregateMetaData = new AggregateMetaData(
    "container",
    "registry",
  );

  public constructor(id: string) {
    super(id);
  }

  public static async create(
    project: Project,
    data: RegistryCreateRequestData,
    loginType: RegistryLoginType,
  ) {
    const credentials =
      loginType === "password" && data.credentials
        ? {
            username: data.credentials.username,
            password: data.credentials.password,
          }
        : undefined;

    const response = await config.behaviors.registry.create(project.id, {
      description: data.description,
      uri: data.uri,
      credentials,
    });

    return new Registry(response.id);
  }

  public static async find(id: string) {
    const data = await config.behaviors.registry.find(id);
    if (data !== undefined) {
      return new RegistryDetailed(data);
    }
  }

  public static async get(id: string) {
    const registry = await Registry.find(id);
    assertObjectFound(registry, Registry, id);
    return registry;
  }

  public static ofId(id: string) {
    return new Registry(id);
  }

  public static query(query: RegistryListQueryModelData) {
    return new RegistryListQuery(query);
  }

  public async delete() {
    await config.behaviors.registry.delete(this.id);
  }

  public async findCommon(): Promise<RegistryCommon | undefined> {
    return this instanceof RegistryCommon ? this : this.findDetailed();
  }

  public async findDetailed(): Promise<RegistryDetailed | undefined> {
    return Registry.find(this.id);
  }

  public async getCommon(): Promise<RegistryCommon> {
    return this instanceof RegistryCommon ? this : this.getDetailed();
  }

  public async getDetailed(): Promise<RegistryDetailed> {
    return Registry.get(this.id);
  }

  public async update(data: RegistryUpdateRequestData) {
    return await config.behaviors.registry.update(this.id, {
      description: data.description,
      uri: data.uri,
    });
  }

  public async updateCredentials(
    data: RegistryUpdateCredentialsRequestData,
    loginType: RegistryLoginType,
  ) {
    const credentials =
      loginType === "password"
        ? {
            username: data.username,
            password: data.password,
          }
        : undefined;

    await config.behaviors.registry.update(this.id, {
      credentials: credentials ?? (null as any),
    });
  }
}

export class RegistryCommon extends WithData<
  RegistryListItemData | RegistryData
>()(Registry) {
  public override readonly data: RegistryListItemData | RegistryData;
  public readonly description: string;
  public readonly loginType: RegistryLoginType;
  public readonly project: Project;
  public readonly uri: string;
  public readonly username?: string;
  public readonly validCredentials?: boolean;

  public constructor(data: RegistryListItemData | RegistryData) {
    super(data.id);
    this.data = data;
    this.description = data.description;
    this.uri = data.uri;
    this.username = data.credentials?.username;
    this.loginType = data.credentials ? "password" : "anonymous";
    this.project = Project.ofId(data.projectId);
    this.validCredentials = data.credentials?.valid;
  }
}

export class RegistryDetailed extends RegistryCommon {
  public override readonly data: RegistryData;
  public constructor(data: RegistryData) {
    super(data);
    this.data = data;
  }
}

export class RegistryListItem extends RegistryCommon {
  public override readonly data: RegistryListItemData;
  public constructor(data: RegistryListItemData) {
    super(data);
    this.data = data;
  }
}

export class RegistryListQuery extends ListQueryModel<RegistryListQueryModelData> {
  public constructor(query: RegistryListQueryModelData) {
    super(query, { dependencies: [extractId(query.project)] });
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.registry.list(
      extractId(this.query.project),
      omit(this.query, ["project"]),
    );
    return new RegistryList(
      this.query,
      items.map((r) => new RegistryListItem(r)),
      totalCount,
    );
  }

  public async getTotalCount() {
    const { totalCount } = await this.refine({ limit: 1 }).execute();
    return totalCount;
  }

  public refine(query: Partial<RegistryListQueryModelData> = {}) {
    return new RegistryListQuery({
      ...this.query,
      ...query,
    });
  }
}

export class RegistryList extends WithListData<RegistryListItem>()(
  RegistryListQuery,
) {
  public override readonly items: readonly RegistryListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: RegistryListQueryModelData,
    registries: RegistryListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(registries);
    this.totalCount = totalCount;
  }
}
