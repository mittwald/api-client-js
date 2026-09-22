import type { ActivityAction } from "./ActivityAction.js";
import type {
  ActivityGenericActionData,
  ActivityActionData,
  ActionDataByName,
  KnownActionName,
} from "./types.js";

import {
  DatabaseMySqlUserPasswordSetAction,
  AppInstallationRequestedAction,
  AppSystemSoftwareDeletedAction,
  DatabaseMySqlUserCreatedAction,
  DatabaseMySqlUserDeletedAction,
  DatabaseMySqlUserUpdatedAction,
  AppMainDatabaseChangedAction,
  DatabaseDescriptionSetAction,
  DnsMxRecordSetManagedAction,
  AppSystemSoftwareSetAction,
  DnsARecordSetManagedAction,
  AppDatabaseUnlinkedAction,
  DatabaseVersionSetAction,
  AppDatabaseLinkedAction,
  AppDescriptionSetAction,
  AppVersionUpdatedAction,
  DnsCnameRecordSetAction,
  AppCopyRequestedAction,
  DatabaseCreatedAction,
  DatabaseDeletedAction,
  DnsCaaRecordSetAction,
  DnsSrvRecordSetAction,
  DnsTxtRecordSetAction,
  DnsMxRecordSetAction,
  DnsZoneCreatedAction,
  DnsZoneDeletedAction,
  IngressDeletedAction,
  AppVersionSetAction,
  DnsARecordSetAction,
  DomainDeletedAction,
  AppDeletedAction,
  AppFailedAction,
  GenericAction,
} from "./actions/index.js";

type ActionConstructor<TName extends KnownActionName> = new (
  data: ActionDataByName<TName>,
) => ActivityAction;

/**
 * Not partial on purpose: a new name in the generated schema breaks compilation
 * until it is handled – point it at `GenericAction` to opt out visibly. A name
 * only the API emits stays invisible until it shows up as a `GenericAction`.
 */
/* eslint-disable perfectionist/sort-objects -- grouped by domain so the map reads like the API's action list; alphabetical within each group */
const actionRegistry: {
  [TName in KnownActionName]: ActionConstructor<TName>;
} = {
  // app
  "app.copy-requested": AppCopyRequestedAction,
  "app.database-linked": AppDatabaseLinkedAction,
  "app.database-unlinked": AppDatabaseUnlinkedAction,
  "app.deleted": AppDeletedAction,
  "app.description-set": AppDescriptionSetAction,
  "app.failed": AppFailedAction,
  "app.installation-requested": AppInstallationRequestedAction,
  "app.main-database-changed": AppMainDatabaseChangedAction,
  "app.systemsoftware-deleted": AppSystemSoftwareDeletedAction,
  "app.systemsoftware-set": AppSystemSoftwareSetAction,
  "app.version-set": AppVersionSetAction,
  "app.version-updated": AppVersionUpdatedAction,

  // database
  "database.mysql-created": DatabaseCreatedAction,
  "database.mysql-deleted": DatabaseDeletedAction,
  "database.mysql-description-set": DatabaseDescriptionSetAction,
  "database.mysql-version-set": DatabaseVersionSetAction,
  "database.redis-created": DatabaseCreatedAction,
  "database.redis-deleted": DatabaseDeletedAction,
  "database.redis-description-set": DatabaseDescriptionSetAction,
  "database.redis-version-set": DatabaseVersionSetAction,

  // database user
  "database.mysql-user-created": DatabaseMySqlUserCreatedAction,
  "database.mysql-user-deleted": DatabaseMySqlUserDeletedAction,
  "database.mysql-user-password-set": DatabaseMySqlUserPasswordSetAction,
  "database.mysql-user-updated": DatabaseMySqlUserUpdatedAction,

  // dns
  "dns.a-record-set": DnsARecordSetAction,
  "dns.a-record-set-managed": DnsARecordSetManagedAction,
  "dns.caa-record-set": DnsCaaRecordSetAction,
  "dns.cname-record-set": DnsCnameRecordSetAction,
  "dns.domain-deleted": DomainDeletedAction,
  "dns.ingress-deleted": IngressDeletedAction,
  "dns.mx-record-set": DnsMxRecordSetAction,
  "dns.mx-record-set-managed": DnsMxRecordSetManagedAction,
  "dns.srv-record-set": DnsSrvRecordSetAction,
  "dns.txt-record-set": DnsTxtRecordSetAction,
  "dns.zone-created": DnsZoneCreatedAction,
  "dns.zone-deleted": DnsZoneDeletedAction,
};
/* eslint-enable perfectionist/sort-objects */

const isKnownActionName = (name: string): name is KnownActionName =>
  name in actionRegistry;

export const createActivityAction = (
  data: ActivityActionData,
): ActivityAction => {
  if (!isKnownActionName(data.name)) {
    return new GenericAction(data as ActivityGenericActionData);
  }

  // The union of constructors is only callable with the intersection of their
  // parameter types, so the name-to-class match cannot be expressed here.
  const ActionClass: new (data: never) => ActivityAction =
    actionRegistry[data.name];

  return new ActionClass(data as never);
};
