import { GhostMakerModel } from "@mittwald/react-ghostmaker/model";
import { isArray } from "remeda";

import type { ContactVerificationTypeData } from "../ContactVerificationTypeData/index.js";
import type {
  ContactVerificationListQueryData,
  ContactVerificationStatus,
  ContactVerificationData,
} from "./types.js";

import { contactVerificationTypeDataFactory } from "../ContactVerificationTypeData/index.js";
import assertObjectFound from "../../base/lib/assertObjectFound.js";
import { config } from "../../config/index.js";
import {
  ListQueryModel,
  ReferenceModel,
  WithListData,
  WithData,
} from "../../base/index.js";

@GhostMakerModel({
  name: "ContactVerification",
})
export class ContactVerification extends ReferenceModel {
  public static async find(contactVerificationId: string) {
    const data = await config.behaviors.contactVerification.find(
      contactVerificationId,
    );
    if (data) {
      return new ContactVerificationDetailed(data);
    }
  }

  public static async findByEmail(email: string) {
    const { items } = await ContactVerification.query({
      type: "email",
      value: email,
    }).execute();

    return items.find(
      (i) =>
        i.typeData.type === "email" &&
        i.typeData.value.toLowerCase() === email.toLowerCase(),
    );
  }

  public static async get(contactVerificationId: string) {
    const contactVerification = await this.find(contactVerificationId);
    assertObjectFound(
      contactVerification,
      ContactVerification,
      contactVerificationId,
    );
    return contactVerification;
  }

  public static ofId(id: string) {
    return new ContactVerification(id);
  }

  public static query(query: ContactVerificationListQueryData = {}) {
    return new ContactVerificationListQuery(query);
  }

  public async findCommon(): Promise<ContactVerificationCommon | undefined> {
    return this instanceof ContactVerificationCommon
      ? this
      : this.findDetailed();
  }

  public async findDetailed(): Promise<
    ContactVerificationDetailed | undefined
  > {
    return await ContactVerification.find(this.id);
  }

  public async getCommon(): Promise<ContactVerificationCommon> {
    return this instanceof ContactVerificationCommon
      ? this
      : this.getDetailed();
  }

  public async getDetailed(): Promise<ContactVerificationDetailed> {
    return await ContactVerification.get(this.id);
  }
}

export class ContactVerificationCommon extends WithData<ContactVerificationData>()(
  ContactVerification,
) {
  public override readonly data: ContactVerificationData;
  public readonly status: ContactVerificationStatus;
  public readonly typeData: ContactVerificationTypeData;
  public constructor(data: ContactVerificationData) {
    super(data.id);
    this.data = data;
    this.status = data.status;
    this.typeData = contactVerificationTypeDataFactory(data.typeData);
  }

  public hasStatus(
    status: ContactVerificationStatus[] | ContactVerificationStatus,
  ) {
    return (isArray(status) ? status : [status]).includes(this.status);
  }

  public async resendVerificationMail() {
    if (this.typeData.type === "email") {
      await config.behaviors.contactVerification.resendVerificationEmail(
        this.id,
      );
    }
  }
}

export class ContactVerificationDetailed extends ContactVerificationCommon {
  public constructor(data: ContactVerificationData) {
    super(data);
  }
}

export class ContactVerificationListQuery extends ListQueryModel<ContactVerificationListQueryData> {
  public constructor(query: ContactVerificationListQueryData) {
    super(query);
  }
  public async execute() {
    const { totalCount, items } =
      await config.behaviors.contactVerification.query(this.query);

    return new ContactVerificationList(
      this.query,
      items.map((i) => new ContactVerificationListItem(i)),
      totalCount,
    );
  }

  public refine(query: ContactVerificationListQueryData = {}) {
    return new ContactVerificationListQuery({ ...this.query, ...query });
  }
}

export class ContactVerificationListItem extends ContactVerificationCommon {
  public constructor(data: ContactVerificationData) {
    super(data);
  }
}

export class ContactVerificationList extends WithListData<ContactVerificationListItem>()(
  ContactVerificationListQuery,
) {
  public override readonly items: readonly ContactVerificationListItem[];
  public override readonly totalCount: number;
  public constructor(
    query: ContactVerificationListQueryData,
    items: ContactVerificationListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(items);
    this.totalCount = totalCount;
  }
}
