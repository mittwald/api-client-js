import {
  DataModel,
  ListDataModel,
  ListQueryModel,
  ReferenceModel,
} from "../../base/index.js";
import {
  type AsyncResourceVariant,
  provideReact,
} from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import {
  SshKeyCreateData,
  SshKeyData,
  SshKeyListItemData,
  SshKeyUpdateData,
} from "./types.js";
import { DateTime } from "luxon";
import assertObjectFound from "../../base/assertObjectFound.js";

export class SshKey extends ReferenceModel {
  public static ofId(id: string): SshKey {
    return new SshKey(id);
  }

  public static find = provideReact(
    async (id: string): Promise<SshKeyDetailed | undefined> => {
      const data = await config.behaviors.sshKey.find(id);
      if (data !== undefined) {
        return new SshKeyDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<SshKeyDetailed> => {
      const sshKey = await this.find(id);
      assertObjectFound(sshKey, this, id);
      return sshKey;
    },
  );

  public getDetailed = provideReact(
    () => SshKey.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<SshKeyDetailed, []>;

  public findDetailed = provideReact(
    () => SshKey.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<SshKeyDetailed | undefined, []>;

  public static async create(data: SshKeyCreateData): Promise<void> {
    await config.behaviors.sshKey.create(data);
  }

  public async update(data: SshKeyUpdateData): Promise<void> {
    await config.behaviors.sshKey.update(this.id, data);
  }

  public async delete(): Promise<void> {
    await config.behaviors.sshKey.delete(this.id);
  }
}

class SshKeyCommon extends classes(
  DataModel<SshKeyData | SshKeyListItemData>,
  SshKey,
) {
  public readonly expiresSoon: boolean;

  public constructor(data: SshKeyData | SshKeyListItemData) {
    super([data], [data.sshKeyId]);

    this.expiresSoon =
      !!data.expiresAt &&
      data.expiresAt < DateTime.now().plus({ day: 7 }).toString();
  }
}

export class SshKeyDetailed extends classes(
  SshKeyCommon,
  DataModel<SshKeyData>,
) {
  public constructor(data: SshKeyData) {
    super([data], [data]);
  }
}

export class SshKeyListItem extends classes(
  SshKeyCommon,
  DataModel<SshKeyListItemData>,
) {
  public constructor(data: SshKeyListItemData) {
    super([data], [data]);
  }
}

export class SshKeyListQuery extends ListQueryModel<Record<string, never>> {
  public execute = provideReact(async () => {
    const { items, totalCount } = await config.behaviors.sshKey.list();

    return new SshKeyList(
      items.map((d) => new SshKeyListItem(d)),
      totalCount,
    );
  }, [this.queryId]);

  public refine() {
    return new SshKeyListQuery({});
  }

  public getTotalCount = provideReact(async () => {
    const { totalCount } = await this.refine().execute();
    return totalCount;
  }, [this.queryId]);

  public findOneAndOnly = provideReact(async () => {
    const { items, totalCount } = await this.refine().execute();
    if (totalCount === 1) {
      return items[0];
    }
  }, [this.queryId]);
}

export class SshKeyList extends ListDataModel<SshKeyListItem> {
  public constructor(sshKeys: SshKeyListItem[], totalCount: number) {
    super(sshKeys, totalCount);
  }
}
