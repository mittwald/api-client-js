import { FinderProfileRequest, FinderProfile } from "../fyndr/index.js";
import { ExtensionInstance, Extension } from "../marketplace/index.js";
import { CustomerInvite, Customer } from "../customer/index.js";
import { MySqlUser, MySql, Redis } from "../database/index.js";
import { ProjectInvite, Project } from "../project/index.js";
import { Container, Registry } from "../container/index.js";
import { AppInstallation, License } from "../app/index.js";
import { Conversation } from "../conversation/index.js";
import { Certificate } from "../certificate/index.js";
import { CustomerAIPlan } from "../ai/index.js";
import { MailAddress } from "../mail/index.js";
import { Ingress } from "../ingress/index.js";
import { Invoice } from "../invoice/index.js";
import { Backup } from "../backup/index.js";
import { Domain } from "../domain/index.js";
import { Server } from "../server/index.js";
import { DnsZone } from "../dns/index.js";
import { Order } from "../order/index.js";
import { User } from "../user/index.js";

interface AggregateReferenceData {
  parent?: AggregateReferenceData;
  aggregate: string;
  domain: string;
  id: string;
}
export type AggregateReference =
  | FinderProfileRequest
  | ExtensionInstance
  | AppInstallation
  | CustomerInvite
  | CustomerAIPlan
  | ProjectInvite
  | FinderProfile
  | Conversation
  | MailAddress
  | Certificate
  | Container
  | Extension
  | MySqlUser
  | Customer
  | Registry
  | Project
  | Ingress
  | Invoice
  | License
  | DnsZone
  | Server
  | Backup
  | Domain
  | Order
  | MySql
  | Redis
  | User;

export function tryResolveAggregateReference(
  data: AggregateReferenceData,
): AggregateReference | undefined {
  const { aggregate, domain, parent, id } = data;

  if (
    domain === Server.aggregateMetaData.domain &&
    aggregate === Server.aggregateMetaData.aggregate
  ) {
    return Server.ofId(id);
  }

  if (
    domain === Customer.aggregateMetaData.domain &&
    aggregate === Customer.aggregateMetaData.aggregate
  ) {
    return Customer.ofId(id);
  }

  if (
    domain === Project.aggregateMetaData.domain &&
    aggregate === Project.aggregateMetaData.aggregate
  ) {
    return Project.ofId(id);
  }

  if (
    domain === AppInstallation.aggregateMetaData.domain &&
    aggregate === AppInstallation.aggregateMetaData.aggregate
  ) {
    return AppInstallation.ofId(id);
  }

  if (
    domain === ExtensionInstance.aggregateMetaData.domain &&
    aggregate === ExtensionInstance.aggregateMetaData.aggregate
  ) {
    return ExtensionInstance.ofId(id);
  }

  if (
    domain === User.aggregateMetaData.domain &&
    aggregate === User.aggregateMetaData.aggregate
  ) {
    return User.ofId(id);
  }

  if (
    domain === Backup.aggregateMetaData.domain &&
    aggregate === Backup.aggregateMetaData.aggregate
  ) {
    return Backup.ofId(id);
  }

  if (
    domain === ProjectInvite.aggregateMetaData.domain &&
    aggregate === ProjectInvite.aggregateMetaData.aggregate
  ) {
    return ProjectInvite.ofId(id);
  }

  if (
    domain === CustomerInvite.aggregateMetaData.domain &&
    aggregate === CustomerInvite.aggregateMetaData.aggregate
  ) {
    return CustomerInvite.ofId(id);
  }

  if (
    domain === MailAddress.aggregateMetaData.domain &&
    aggregate === MailAddress.aggregateMetaData.aggregate
  ) {
    return MailAddress.ofId(id);
  }

  if (
    domain === Domain.aggregateMetaData.domain &&
    aggregate === Domain.aggregateMetaData.aggregate
  ) {
    return Domain.ofId(id);
  }

  if (
    domain === Certificate.aggregateMetaData.domain &&
    aggregate === Certificate.aggregateMetaData.aggregate
  ) {
    return Certificate.ofId(id);
  }

  if (
    domain === Ingress.aggregateMetaData.domain &&
    aggregate === Ingress.aggregateMetaData.aggregate
  ) {
    return Ingress.ofId(id);
  }

  if (
    domain === Conversation.aggregateMetaData.domain &&
    aggregate === Conversation.aggregateMetaData.aggregate
  ) {
    return Conversation.ofId(id);
  }

  if (
    domain === Order.aggregateMetaData.domain &&
    aggregate === Order.aggregateMetaData.aggregate
  ) {
    return Order.ofId(id);
  }

  if (
    domain === Invoice.aggregateMetaData.domain &&
    aggregate === Invoice.aggregateMetaData.aggregate
  ) {
    return Invoice.ofId(id);
  }

  if (
    domain === Registry.aggregateMetaData.domain &&
    aggregate === Registry.aggregateMetaData.aggregate
  ) {
    return Registry.ofId(id);
  }

  if (
    domain === FinderProfile.aggregateMetaData.domain &&
    aggregate === FinderProfile.aggregateMetaData.aggregate
  ) {
    return FinderProfile.ofCustomerId(id);
  }

  if (
    domain === FinderProfileRequest.aggregateMetaData.domain &&
    aggregate === FinderProfileRequest.aggregateMetaData.aggregate
  ) {
    return FinderProfileRequest.ofCustomer(id);
  }

  if (
    domain === CustomerAIPlan.aggregateMetaData.domain &&
    aggregate === CustomerAIPlan.aggregateMetaData.aggregate
  ) {
    return CustomerAIPlan.ofId(parent?.id ?? id, id);
  }

  // Legacy aggregate name from before a customer could have multiple AI
  // plans. Persisted activities/notifications may still reference it.
  if (domain === "llmlocksmith" && aggregate === "locksmithProfile") {
    return CustomerAIPlan.ofId(parent?.id ?? id, id);
  }

  if (
    domain === Container.aggregateMetaData.domain &&
    aggregate === Container.aggregateMetaData.aggregate &&
    parent?.id !== undefined
  ) {
    return Container.ofId(id, parent.id);
  }

  if (
    domain === License.aggregateMetaData.domain &&
    aggregate === License.aggregateMetaData.aggregate
  ) {
    return License.ofId(id);
  }

  if (
    domain === Extension.aggregateMetaData.domain &&
    aggregate === Extension.aggregateMetaData.aggregate
  ) {
    return Extension.ofId(id);
  }

  if (
    domain === MySql.aggregateMetaData.domain &&
    aggregate === MySql.aggregateMetaData.aggregate
  ) {
    return MySql.ofId(id);
  }

  if (
    domain === Redis.aggregateMetaData.domain &&
    aggregate === Redis.aggregateMetaData.aggregate
  ) {
    return Redis.ofId(id);
  }

  if (
    domain === MySqlUser.aggregateMetaData.domain &&
    aggregate === MySqlUser.aggregateMetaData.aggregate
  ) {
    return MySqlUser.ofId(id);
  }

  if (
    domain === DnsZone.aggregateMetaData.domain &&
    aggregate === DnsZone.aggregateMetaData.aggregate
  ) {
    return DnsZone.ofId(id);
  }

  return undefined;
}

export function resolveAggregateReference(
  data: AggregateReferenceData,
): AggregateReference {
  const reference = tryResolveAggregateReference(data);

  if (!reference) {
    throw new Error(
      `aggregate with domain "${data.domain}" and aggregate "${data.aggregate}" not found`,
    );
  }

  return reference;
}
