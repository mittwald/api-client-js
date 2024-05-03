import { ReferenceModel } from "../../base/ReferenceModel.js";
import {
  type AsyncResourceVariant,
  provideReact,
} from "../../lib/provideReact.js";
import { config } from "../../config/config.js";
import { classes } from "polytype";
import { DataModel } from "../../base/DataModel.js";
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

  public getDetailed = provideReact(() =>
    Session.get(this.id),
  ) as AsyncResourceVariant<SessionDetailed, []>;

  public static list = provideReact(
    async (): Promise<Readonly<Array<SessionListItem>>> => {
      const data = await config.behaviors.session.list();

      return Object.freeze(data.map((d) => new SessionListItem(d)));
    },
  );

  public static getToken = provideReact(async (): Promise<SessionTokenData> => {
    return await config.behaviors.session.getToken();
  });

  public isCurrentSession = provideReact(async (): Promise<boolean> => {
    const currentToken = await config.behaviors.session.getToken();

    return currentToken.id === this.id;
  });

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
