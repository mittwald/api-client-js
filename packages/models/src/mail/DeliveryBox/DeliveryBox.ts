import {
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import { provideReact } from "../../react/index.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import {
  DeliveryBoxData,
  DeliveryBoxListItemData,
  DeliveryBoxListQueryModelData,
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
}

export class DeliveryBoxCommon extends classes(
  DataModel<DeliveryBoxData>,
  DeliveryBox,
) {
  public constructor(data: DeliveryBoxData) {
    super([data], [data.id]);
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

export class DeliveryBoxListQuery extends ListQueryModel<DeliveryBoxListQueryModelData> {
  public readonly project: Project;
  public constructor(
    project: Project,
    query: DeliveryBoxListQueryModelData = {},
  ) {
    super(query, {
      dependencies: [project.id],
    });
    this.project = project;
  }

  public refine(query: DeliveryBoxListQueryModelData = {}) {
    return new DeliveryBoxListQuery(this.project, {
      ...this.query,
      ...query,
    });
  }

  public execute = provideReact(async () => {
    const { items, totalCount } = await config.behaviors.deliveryBox.query(
      this.project.id,
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
    query: DeliveryBoxListQueryModelData,
    deliveryBoxes: DeliveryBoxListItem[],
    totalCount: number,
  ) {
    super([project, query], [deliveryBoxes, totalCount]);
  }
}
