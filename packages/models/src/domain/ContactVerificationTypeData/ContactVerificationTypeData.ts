import type { DurationLike } from "luxon";

import { DateTime } from "luxon";

import type {
  ContactVerificationAddressDataData,
  ContactVerificationEmailDataData,
  ContactVerificationNameDataData,
  ContactVerificationTypeDataData,
} from "./types";

import { DataModel } from "../../base";

export abstract class ContactVerificationDataBase<
  T extends ContactVerificationTypeDataData,
> extends DataModel<T> {
  public readonly value: string;
  public constructor(data: T) {
    super(data);
    this.value = data.value;
  }
}

export class ContactVerificationAddressData extends ContactVerificationDataBase<ContactVerificationAddressDataData> {
  public readonly type = "address";
  public constructor(data: ContactVerificationAddressDataData) {
    super(data);
  }
}

export class ContactVerificationNameData extends ContactVerificationDataBase<ContactVerificationNameDataData> {
  public readonly type = "name";
  public constructor(data: ContactVerificationNameDataData) {
    super(data);
  }
}

export class ContactVerificationEmailData extends ContactVerificationDataBase<ContactVerificationEmailDataData> {
  public readonly emailVerificationDeadline?: DateTime;
  public readonly lastEmailSentDate?: DateTime;
  public readonly type = "email";
  public constructor(data: ContactVerificationEmailDataData) {
    super(data);
    if (data.emailVerificationDeadline) {
      this.emailVerificationDeadline = DateTime.fromISO(
        data.emailVerificationDeadline,
      );
    }
    if (data.lastEmailSentDate) {
      this.lastEmailSentDate = DateTime.fromISO(data.lastEmailSentDate);
    }
  }

  public hasDeadlineExpired() {
    if (!this.emailVerificationDeadline) {
      return true;
    }
    return this.emailVerificationDeadline < DateTime.now();
  }

  public isEmailResendAllowed() {
    if (!this.lastEmailSentDate || this.hasDeadlineExpired()) {
      return true;
    }
    // The email can only be resent if this duration has passed since the last email was sent
    const resendInterval: DurationLike = { minute: 15 };
    return this.lastEmailSentDate <= DateTime.now().minus(resendInterval);
  }
}

export type ContactVerificationTypeData =
  | ContactVerificationAddressData
  | ContactVerificationEmailData
  | ContactVerificationNameData;

export const contactVerificationTypeDataFactory = (
  data: ContactVerificationTypeDataData,
): ContactVerificationTypeData => {
  if (data.type === "address") {
    return new ContactVerificationAddressData(data);
  }
  if (data.type === "name") {
    return new ContactVerificationNameData(data);
  }
  return new ContactVerificationEmailData(data);
};
