import { GhostMakerModel } from "@mittwald/react-ghostmaker";
import { DateTime } from "luxon";

import type { SessionListItemData, SessionData } from "./types";

import assertObjectFound from "../../base/lib/assertObjectFound";
import { config } from "../../config";
import {
  ListQueryModel,
  ReferenceModel,
  ListDataModel,
  WithData,
} from "../../base";

@GhostMakerModel({
  name: "Session",
})
export class Session extends ReferenceModel {
  public static async closeAll() {
    await config.behaviors.session.closeAll();
  }

  public static async find(id: string) {
    const data = await config.behaviors.session.find(id);
    if (data) {
      return new SessionDetailed(data);
    }
  }

  public static async get(id: string) {
    const session = await this.find(id);
    assertObjectFound(session, Session, id);
    return session;
  }

  public static async getToken() {
    return await config.behaviors.session.getToken();
  }

  public static ofId(id: string) {
    return new Session(id);
  }

  public static query() {
    return new SessionListQuery({});
  }

  public async close() {
    await config.behaviors.session.close(this.id);
  }

  public async findCommon(): Promise<SessionCommon | undefined> {
    return this instanceof SessionCommon ? this : this.findDetailed();
  }

  public findDetailed(): Promise<SessionDetailed | undefined> {
    return Session.find(this.id);
  }

  public async getCommon(): Promise<SessionCommon> {
    return this instanceof SessionCommon ? this : this.getDetailed();
  }

  public getDetailed(): Promise<SessionDetailed> {
    return Session.get(this.id);
  }

  public async isCurrentSession() {
    const currentToken = await config.behaviors.session.getToken();
    return currentToken.id === this.id;
  }
}

export class SessionCommon extends WithData<SessionListItemData | SessionData>()(
  Session,
) {
  public readonly browser?: string;
  public readonly createdAt: DateTime;
  public override readonly data: SessionListItemData | SessionData;
  public readonly isMobile: boolean;
  public readonly lastAccess: DateTime;
  public readonly lastAccessSeconds: number;
  public readonly location?: string;
  public readonly model?: string;
  public readonly os?: string;

  public constructor(data: SessionListItemData | SessionData) {
    super(data.tokenId);
    this.data = data;
    this.isMobile = data.device.type === "mobile";
    this.browser = data.device.browser;
    this.os = data.device.os;
    this.model = data.device.model;
    if (data.location) {
      this.location =
        data.location.country && data.location.city
          ? `${data.location.country}, ${data.location.city}`
          : (data.location.country ?? data.location.city);
    }
    this.createdAt = DateTime.fromISO(data.created);
    this.lastAccess = data.lastAccess
      ? DateTime.fromISO(data.lastAccess)
      : this.createdAt;
    this.lastAccessSeconds = this.lastAccess.toMillis();
  }

  public async isActive() {
    const currentToken = await Session.getToken();
    return this.data.tokenId === currentToken.id;
  }
}

export class SessionDetailed extends SessionCommon {
  public override readonly data: SessionData;
  public constructor(data: SessionData) {
    super(data);
    this.data = data;
  }
}

export class SessionListItem extends SessionCommon {
  public override readonly data: SessionListItemData;
  public constructor(data: SessionListItemData) {
    super(data);
    this.data = data;
  }
}

export class SessionListQuery extends ListQueryModel<Record<string, never>> {
  public async execute() {
    const { totalCount, items } = await config.behaviors.session.list();

    return new SessionList(
      items.map((d) => new SessionListItem(d)),
      totalCount,
    );
  }}

export class SessionList extends ListDataModel<SessionListItem> {
  public constructor(sessions: SessionListItem[], totalCount: number) {
    super(sessions, totalCount);
  }
}
