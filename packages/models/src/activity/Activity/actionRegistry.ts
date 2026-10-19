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
 * `GenericAction` for names the schema knows but this package does not model
 * yet. Their data does not have the generic schema shape, so it is taken as is
 * – the same way `createActivityAction` hands unknown names to
 * `GenericAction`.
 */
const UnmodelledAction = GenericAction as new (
  data: ActivityActionData,
) => ActivityAction;

/**
 * Not partial on purpose: a new name in the generated schema breaks compilation
 * until it is handled – point it at `UnmodelledAction` to opt out visibly. A
 * name only the API emits stays invisible until it shows up as a
 * `GenericAction`.
 */
// Grouped by domain so the map reads like the API's action list;
// alphabetical within each group.
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

  // container (not modelled yet)
  "container.command-updated": UnmodelledAction,
  "container.created": UnmodelledAction,
  "container.deleted": UnmodelledAction,
  "container.description-updated": UnmodelledAction,
  "container.entrypoint-updated": UnmodelledAction,
  "container.envs-updated": UnmodelledAction,
  "container.image-pulled": UnmodelledAction,
  "container.image-updated": UnmodelledAction,
  "container.ports-updated": UnmodelledAction,
  "container.recreated": UnmodelledAction,
  "container.registry-created": UnmodelledAction,
  "container.registry-credentials-updated": UnmodelledAction,
  "container.registry-deleted": UnmodelledAction,
  "container.registry-description-updated": UnmodelledAction,
  "container.registry-uri-updated": UnmodelledAction,
  "container.resources-updated": UnmodelledAction,
  "container.restart-policy-updated": UnmodelledAction,
  "container.restarted": UnmodelledAction,
  "container.stack-created": UnmodelledAction,
  "container.stack-deleted": UnmodelledAction,
  "container.stack-description-updated": UnmodelledAction,
  "container.stack-storage-updated": UnmodelledAction,
  "container.stack-update-schedule-updated": UnmodelledAction,
  "container.started": UnmodelledAction,
  "container.stopped": UnmodelledAction,
  "container.volume-created": UnmodelledAction,
  "container.volume-deleted": UnmodelledAction,
  "container.volumes-updated": UnmodelledAction,

  // cronjob (not modelled yet)
  "cronjob.activated": UnmodelledAction,
  "cronjob.alert-threshold-updated": UnmodelledAction,
  "cronjob.command-updated": UnmodelledAction,
  "cronjob.concurrency-policy-updated": UnmodelledAction,
  "cronjob.created": UnmodelledAction,
  "cronjob.deactivated": UnmodelledAction,
  "cronjob.deleted": UnmodelledAction,
  "cronjob.description-updated": UnmodelledAction,
  "cronjob.execution-aborted": UnmodelledAction,
  "cronjob.execution-triggered": UnmodelledAction,
  "cronjob.interval-updated": UnmodelledAction,
  "cronjob.notification-email-removed": UnmodelledAction,
  "cronjob.notification-email-updated": UnmodelledAction,
  "cronjob.service-reference-updated": UnmodelledAction,
  "cronjob.target-updated": UnmodelledAction,
  "cronjob.time-zone-updated": UnmodelledAction,
  "cronjob.timeout-updated": UnmodelledAction,

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

  // membership (not modelled yet)
  "membership.invite-accepted": UnmodelledAction,
  "membership.invite-created": UnmodelledAction,
  "membership.invite-declined": UnmodelledAction,
  "membership.invite-expired": UnmodelledAction,
  "membership.invite-resent": UnmodelledAction,
  "membership.invite-revoked": UnmodelledAction,
  "membership.member-added": UnmodelledAction,
  "membership.member-expired": UnmodelledAction,
  "membership.member-expiry-updated": UnmodelledAction,
  "membership.member-inherited": UnmodelledAction,
  "membership.member-left": UnmodelledAction,
  "membership.member-removed": UnmodelledAction,
  "membership.member-role-updated": UnmodelledAction,

  // project (not modelled yet)
  "project.created": UnmodelledAction,
  "project.description-updated": UnmodelledAction,

  // sshuser (not modelled yet)
  "sshuser.sftp-user-access-level-updated": UnmodelledAction,
  "sshuser.sftp-user-activated": UnmodelledAction,
  "sshuser.sftp-user-created": UnmodelledAction,
  "sshuser.sftp-user-deactivated": UnmodelledAction,
  "sshuser.sftp-user-deleted": UnmodelledAction,
  "sshuser.sftp-user-description-updated": UnmodelledAction,
  "sshuser.sftp-user-directories-updated": UnmodelledAction,
  "sshuser.sftp-user-expired": UnmodelledAction,
  "sshuser.sftp-user-expiry-updated": UnmodelledAction,
  "sshuser.sftp-user-password-updated": UnmodelledAction,
  "sshuser.sftp-user-public-keys-updated": UnmodelledAction,
  "sshuser.ssh-user-activated": UnmodelledAction,
  "sshuser.ssh-user-created": UnmodelledAction,
  "sshuser.ssh-user-deactivated": UnmodelledAction,
  "sshuser.ssh-user-deleted": UnmodelledAction,
  "sshuser.ssh-user-description-updated": UnmodelledAction,
  "sshuser.ssh-user-expired": UnmodelledAction,
  "sshuser.ssh-user-expiry-updated": UnmodelledAction,
  "sshuser.ssh-user-password-updated": UnmodelledAction,
  "sshuser.ssh-user-public-keys-updated": UnmodelledAction,
};

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
