import {
  DataModel,
  ReferenceModel,
  ListDataModel,
  ListQueryModel,
} from "../../base/index.js";
import {
  type AsyncResourceVariant,
  provideReact,
} from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import { SessionData, SessionListItemData, SessionTokenData } from "./types.js";
import assertObjectFound from "../../base/assertObjectFound.js";

export class Session extends ReferenceModel {
  public static ofId(id: string): Session {
    return new Session(id);
  }

  public static find = provideReact(
    async (id: string): Promise<SessionDetailed | undefined> => {
      const data = await config.behaviors.session.find(id);
      if (data !== undefined) {
        return new SessionDetailed(data);
      }
    },
  );

  public static get = provideReact(
    async (id: string): Promise<SessionDetailed> => {
      const session = await this.find(id);
      assertObjectFound(session, this, id);
      return session;
    },
  );

  public getDetailed = provideReact(
    () => Session.get(this.id),
    [this.id],
  ) as AsyncResourceVariant<SessionDetailed, []>;

  public findDetailed = provideReact(
    () => Session.find(this.id),
    [this.id],
  ) as AsyncResourceVariant<SessionDetailed | undefined, []>;

  public static getToken = provideReact(async (): Promise<SessionTokenData> => {
    return await config.behaviors.session.getToken();
  });

  public isCurrentSession = provideReact(async (): Promise<boolean> => {
    const currentToken = await config.behaviors.session.getToken();
    return currentToken.id === this.id;
  }, [this.id]);

  public async close(): Promise<void> {
    await config.behaviors.session.close(this.id);
  }

  public static async closeAll(): Promise<void> {
    await config.behaviors.session.closeAll();
  }
}

class SessionCommon extends classes(
  DataModel<SessionData | SessionListItemData>,
  Session,
) {
  public constructor(data: SessionData | SessionListItemData) {
    super([data], [data.tokenId]);
  }
}

export class SessionDetailed extends classes(
  SessionCommon,
  DataModel<SessionData>,
) {
  public constructor(data: SessionData) {
    super([data], [data]);
  }
}

export class SessionListItem extends classes(
  SessionCommon,
  DataModel<SessionListItemData>,
) {
  public constructor(data: SessionListItemData) {
    super([data], [data]);
  }
}

export class SessionListQuery extends ListQueryModel<Record<string, never>> {
  public execute = provideReact(async () => {
    const { items, totalCount } = await config.behaviors.session.list();

    return new SessionList(
      items.map((d) => new SessionListItem(d)),
      totalCount,
    );
  }, [this.queryId]);

  public refine() {
    return new SessionListQuery({});
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

export class SessionList extends ListDataModel<SessionListItem> {
  public constructor(sessions: SessionListItem[], totalCount: number) {
    super(sessions, totalCount);
  }
}
