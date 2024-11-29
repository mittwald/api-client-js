import {
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import { AsyncResourceVariant, provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import {
  DeliveryBoxData,
  DeliveryBoxListItemData,
  DeliveryBoxListQueryData,
} from "./types.js";
import assertObjectFound from "../../base/assertObjectFound.js";
import { Project } from "../../project/index.js";

export class DeliveryBox extends ReferenceModel {
  public static ofId(id: string): DeliveryBox {
    return new DeliveryBox(id);
  }

  public static find = provideReact(
    async (id: string): Promise<DeliveryBox | undefined> => {
      const data = await config.behaviors.deliveryBox.find(id);
      if (data !== undefined) {
        return new DeliveryBoxDetailed(data);
      }
    },
  );

  public static get = provideReact(async (id: string): Promise<DeliveryBox> => {
    const deliveryBox = await this.find(id);
    assertObjectFound(deliveryBox, this, id);
    return deliveryBox;
  });

  public findDetailed = provideReact(
    () => DeliveryBox.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<DeliveryBoxDetailed | undefined>>;

  public getDetailed = provideReact(
    () => DeliveryBox.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<() => Promise<DeliveryBoxDetailed>>;

  public static query(project: Project, query: DeliveryBoxListQueryData = {}) {
    return new DeliveryBoxListQuery(project, query);
  }

  public async updateDescription(description: string): Promise<void> {
    await config.behaviors.deliveryBox.updateDescription(this.id, description);
  }
  public async updatePassword(password: string): Promise<void> {
    await config.behaviors.deliveryBox.updatePassword(this.id, password);
  }
  public async delete(): Promise<void> {
    await config.behaviors.deliveryBox.delete(this.id);
  }

  public static async create(
    project: Project,
    description: string,
    password: string,
  ): Promise<DeliveryBox> {
    const { id } = await config.behaviors.deliveryBox.create(
      project.id,
      description,
      password,
    );
    return new DeliveryBox(id);
  }
}

export class DeliveryBoxCommon extends classes(
  DataModel<DeliveryBoxData>,
  DeliveryBox,
) {
  public readonly project: Project;
  public readonly id: string;
  public readonly sendingDisabled: boolean;
  public readonly mStudioPath: string;
  public constructor(data: DeliveryBoxData) {
    super([data], [data.id]);
    this.id = data.name;
    this.project = Project.ofId(this.data.projectId);
    this.sendingDisabled = !data.sendingEnabled;
    this.mStudioPath = `/app/projects/${this.project.id}/email/deliveryboxes/${this.id}`;
  }
}

export class DeliveryBoxDetailed extends classes(
  DeliveryBoxCommon,
  DataModel<DeliveryBoxData>,
) {
  public constructor(data: DeliveryBoxData) {
    super([data], [data]);
  }
}

export class DeliveryBoxListQuery extends ListQueryModel<DeliveryBoxListQueryData> {
  public readonly project: Project;
  public constructor(project: Project, query: DeliveryBoxListQueryData = {}) {
    super(query, {
      dependencies: [project.id],
    });
    this.project = project;
  }

  public refine(query: DeliveryBoxListQueryData = {}) {
    return new DeliveryBoxListQuery(this.project, {
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { ...query } = this.query;
    const { items, totalCount } = await config.behaviors.deliveryBox.query(
      this.project.id,
      {
        limit: config.defaultPaginationLimit,
        ...query,
      },
    );
    return new DeliveryBoxList(
      this.project,
      this.query,
      items.map((d) => new DeliveryBoxListItem(d)),
      totalCount,
    );
  }, [this.queryId]);

  public getTotalCount = provideReact(async () => {
    const { items } = await this.refine({}).execute();
    return items.length;
  }, [this.queryId]);
}
export class DeliveryBoxListItem extends classes(
  DeliveryBoxCommon,
  DataModel<DeliveryBoxData>,
) {
  public constructor(data: DeliveryBoxListItemData) {
    super([data], [data]);
  }
}

export class DeliveryBoxList extends classes(
  DeliveryBoxListQuery,
  ListDataModel<DeliveryBoxListItem>,
) {
  public constructor(
    project: Project,
    query: DeliveryBoxListQueryData,
    deliveryBoxes: DeliveryBoxListItem[],
    totalCount: number,
  ) {
    super([project, query], [deliveryBoxes, totalCount]);
  }
}
