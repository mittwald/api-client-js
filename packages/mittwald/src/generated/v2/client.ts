/* eslint-disable */
/* prettier-ignore */

// Trigger change

/** This file is auto-generated with openapi2ts (@mittwald/openapi-to-typescript) */

import * as operations from "./operations.js";
import ApiClientBase from "@mittwald/api-client-commons/dist/core/ApiClientBase.js";

export class MittwaldApiV2Client extends ApiClientBase {
  public appGetAppV2 = this.requestFunctionFactory(operations.appGetAppV2);

  public appGetAppsV2 = this.requestFunctionFactory(operations.appGetAppsV2);

  public appinstallationExecuteActionV2 = this.requestFunctionFactory(
    operations.appinstallationExecuteActionV2
  );

  public appinstallationGetAppinstallationV2 = this.requestFunctionFactory(
    operations.appinstallationGetAppinstallationV2
  );

  public appinstallationPatchAppinstallationV2 = this.requestFunctionFactory(
    operations.appinstallationPatchAppinstallationV2
  );

  public appinstallationUninstallAppinstallationV2 =
    this.requestFunctionFactory(
      operations.appinstallationUninstallAppinstallationV2
    );

  public appinstallationGetAppinstallationsV2 = this.requestFunctionFactory(
    operations.appinstallationGetAppinstallationsV2
  );

  public appinstallationRequestAppinstallationV2 = this.requestFunctionFactory(
    operations.appinstallationRequestAppinstallationV2
  );

  public appinstallationLinkDatabaseV2 = this.requestFunctionFactory(
    operations.appinstallationLinkDatabaseV2
  );

  public appinstallationRetrieveStatusV2 = this.requestFunctionFactory(
    operations.appinstallationRetrieveStatusV2
  );

  public appinstallationSetDatabaseUsersV2 = this.requestFunctionFactory(
    operations.appinstallationSetDatabaseUsersV2
  );

  public appinstallationUnlinkDatabaseV2 = this.requestFunctionFactory(
    operations.appinstallationUnlinkDatabaseV2
  );

  public appinstallationUpdateStatusV2 = this.requestFunctionFactory(
    operations.appinstallationUpdateStatusV2
  );

  public appversionGetAppversionV2 = this.requestFunctionFactory(
    operations.appversionGetAppversionV2
  );

  public appversionGetAppversionsV2 = this.requestFunctionFactory(
    operations.appversionGetAppversionsV2
  );

  public articleServiceGetArticleV2 = this.requestFunctionFactory(
    operations.articleServiceGetArticleV2
  );

  public articleServiceGetOrderableArticleV2 = this.requestFunctionFactory(
    operations.articleServiceGetOrderableArticleV2
  );

  public articleServiceListArticlesV2 = this.requestFunctionFactory(
    operations.articleServiceListArticlesV2
  );

  public articleServiceListOrderableArticlesV2 = this.requestFunctionFactory(
    operations.articleServiceListOrderableArticlesV2
  );

  public backupServiceCreateProjectBackup = this.requestFunctionFactory(
    operations.backupServiceCreateProjectBackup
  );

  public backupServiceListProjectBackups = this.requestFunctionFactory(
    operations.backupServiceListProjectBackups
  );

  public backupServiceCreateProjectBackupSchedule = this.requestFunctionFactory(
    operations.backupServiceCreateProjectBackupSchedule
  );

  public backupServiceListProjectBackupSchedules = this.requestFunctionFactory(
    operations.backupServiceListProjectBackupSchedules
  );

  public backupServiceDeleteProjectBackup = this.requestFunctionFactory(
    operations.backupServiceDeleteProjectBackup
  );

  public backupServiceGetProjectBackup = this.requestFunctionFactory(
    operations.backupServiceGetProjectBackup
  );

  public backupServiceDeleteProjectBackupExport = this.requestFunctionFactory(
    operations.backupServiceDeleteProjectBackupExport
  );

  public backupServiceRequestProjectBackupExport = this.requestFunctionFactory(
    operations.backupServiceRequestProjectBackupExport
  );

  public backupServiceDeleteProjectBackupSchedule = this.requestFunctionFactory(
    operations.backupServiceDeleteProjectBackupSchedule
  );

  public backupServiceGetProjectBackupSchedule = this.requestFunctionFactory(
    operations.backupServiceGetProjectBackupSchedule
  );

  public backupServicePatchBackupSchedule = this.requestFunctionFactory(
    operations.backupServicePatchBackupSchedule
  );

  public backupServicePutSystemBackupTtl = this.requestFunctionFactory(
    operations.backupServicePutSystemBackupTtl
  );

  public backupServiceSetProjectBackupDescription = this.requestFunctionFactory(
    operations.backupServiceSetProjectBackupDescription
  );

  public contractServiceBaseItemOfContract = this.requestFunctionFactory(
    operations.contractServiceBaseItemOfContract
  );

  public contractServiceCancelContractItemTermination =
    this.requestFunctionFactory(
      operations.contractServiceCancelContractItemTermination
    );

  public contractServiceTerminateContractItem = this.requestFunctionFactory(
    operations.contractServiceTerminateContractItem
  );

  public contractServiceCancelContractTariffChange =
    this.requestFunctionFactory(
      operations.contractServiceCancelContractTariffChange
    );

  public contractServiceCancelContractTermination = this.requestFunctionFactory(
    operations.contractServiceCancelContractTermination
  );

  public contractServiceTerminateContract = this.requestFunctionFactory(
    operations.contractServiceTerminateContract
  );

  public contractServiceDetailOfContract = this.requestFunctionFactory(
    operations.contractServiceDetailOfContract
  );

  public contractServiceDetailOfContractByAggregate =
    this.requestFunctionFactory(
      operations.contractServiceDetailOfContractByAggregate
    );

  public contractServiceDetailOfContractDeprecated =
    this.requestFunctionFactory(
      operations.contractServiceDetailOfContractDeprecated
    );

  public contractServiceDetailOfContractItem = this.requestFunctionFactory(
    operations.contractServiceDetailOfContractItem
  );

  public contractServiceListContracts = this.requestFunctionFactory(
    operations.contractServiceListContracts
  );

  public contractServiceNextTerminationDateForItem =
    this.requestFunctionFactory(
      operations.contractServiceNextTerminationDateForItem
    );

  public conversationServiceCreateConversationV2 = this.requestFunctionFactory(
    operations.conversationServiceCreateConversationV2
  );

  public conversationServiceGetConversationsV2 = this.requestFunctionFactory(
    operations.conversationServiceGetConversationsV2
  );

  public conversationServiceCreateMessageV2 = this.requestFunctionFactory(
    operations.conversationServiceCreateMessageV2
  );

  public conversationServiceGetMessagesByConversationV2 =
    this.requestFunctionFactory(
      operations.conversationServiceGetMessagesByConversationV2
    );

  public conversationServiceGetCategoriesV2 = this.requestFunctionFactory(
    operations.conversationServiceGetCategoriesV2
  );

  public conversationServiceGetCategoryV2 = this.requestFunctionFactory(
    operations.conversationServiceGetCategoryV2
  );

  public conversationServiceGetConversationV2 = this.requestFunctionFactory(
    operations.conversationServiceGetConversationV2
  );

  public conversationServiceUpdateConversationV2 = this.requestFunctionFactory(
    operations.conversationServiceUpdateConversationV2
  );

  public conversationServiceRequestFileUploadV2 = this.requestFunctionFactory(
    operations.conversationServiceRequestFileUploadV2
  );

  public conversationServiceSetConversationStatusV2 =
    this.requestFunctionFactory(
      operations.conversationServiceSetConversationStatusV2
    );

  public conversationServiceUpdateMessageV2 = this.requestFunctionFactory(
    operations.conversationServiceUpdateMessageV2
  );

  public cronjobServiceCronjobAbortExecution = this.requestFunctionFactory(
    operations.cronjobServiceCronjobAbortExecution
  );

  public cronjobServiceCronjobCreate = this.requestFunctionFactory(
    operations.cronjobServiceCronjobCreate
  );

  public cronjobServiceCronjobList = this.requestFunctionFactory(
    operations.cronjobServiceCronjobList
  );

  public cronjobServiceCronjobCreateExecution = this.requestFunctionFactory(
    operations.cronjobServiceCronjobCreateExecution
  );

  public cronjobServiceCronjobListExecutions = this.requestFunctionFactory(
    operations.cronjobServiceCronjobListExecutions
  );

  public cronjobServiceCronjobDelete = this.requestFunctionFactory(
    operations.cronjobServiceCronjobDelete
  );

  public cronjobServiceCronjobGetSpecific = this.requestFunctionFactory(
    operations.cronjobServiceCronjobGetSpecific
  );

  public cronjobServiceCronjobPatch = this.requestFunctionFactory(
    operations.cronjobServiceCronjobPatch
  );

  public cronjobServiceCronjobGetSpecificExecution =
    this.requestFunctionFactory(
      operations.cronjobServiceCronjobGetSpecificExecution
    );

  public customerServiceAvatarRemove = this.requestFunctionFactory(
    operations.customerServiceAvatarRemove
  );

  public customerServiceAvatarRequestUpload = this.requestFunctionFactory(
    operations.customerServiceAvatarRequestUpload
  );

  public customerServiceCreateCategory = this.requestFunctionFactory(
    operations.customerServiceCreateCategory
  );

  public customerServiceListOfCustomerCategories = this.requestFunctionFactory(
    operations.customerServiceListOfCustomerCategories
  );

  public customerServiceCreateCustomer = this.requestFunctionFactory(
    operations.customerServiceCreateCustomer
  );

  public customerServiceListCustomers = this.requestFunctionFactory(
    operations.customerServiceListCustomers
  );

  public customerServiceCreateNote = this.requestFunctionFactory(
    operations.customerServiceCreateNote
  );

  public customerServiceListOfNotes = this.requestFunctionFactory(
    operations.customerServiceListOfNotes
  );

  public customerServiceCustomerIsLegallyCompetent =
    this.requestFunctionFactory(
      operations.customerServiceCustomerIsLegallyCompetent
    );

  public customerServiceDeleteCategory = this.requestFunctionFactory(
    operations.customerServiceDeleteCategory
  );

  public customerServiceDetailOfCustomerCategory = this.requestFunctionFactory(
    operations.customerServiceDetailOfCustomerCategory
  );

  public customerServiceUpdateCategory = this.requestFunctionFactory(
    operations.customerServiceUpdateCategory
  );

  public customerServiceDeleteCustomer = this.requestFunctionFactory(
    operations.customerServiceDeleteCustomer
  );

  public customerServiceDetailsOfCustomer = this.requestFunctionFactory(
    operations.customerServiceDetailsOfCustomer
  );

  public customerServiceUpdateCustomer = this.requestFunctionFactory(
    operations.customerServiceUpdateCustomer
  );

  public customerServiceDeleteNote = this.requestFunctionFactory(
    operations.customerServiceDeleteNote
  );

  public customerServiceUpdateNote = this.requestFunctionFactory(
    operations.customerServiceUpdateNote
  );

  public databaseServiceMysqlCharsetList = this.requestFunctionFactory(
    operations.databaseServiceMysqlCharsetList
  );

  public databaseServiceMysqlCharsetListAll = this.requestFunctionFactory(
    operations.databaseServiceMysqlCharsetListAll
  );

  public databaseServiceMysqlDatabaseCreate = this.requestFunctionFactory(
    operations.databaseServiceMysqlDatabaseCreate
  );

  public databaseServiceMysqlDatabaseList = this.requestFunctionFactory(
    operations.databaseServiceMysqlDatabaseList
  );

  public databaseServiceMysqlDatabaseDelete = this.requestFunctionFactory(
    operations.databaseServiceMysqlDatabaseDelete
  );

  public databaseServiceMysqlDatabaseGetSpecific = this.requestFunctionFactory(
    operations.databaseServiceMysqlDatabaseGetSpecific
  );

  public databaseServiceMysqlDatabaseUpdateDefaultCharset =
    this.requestFunctionFactory(
      operations.databaseServiceMysqlDatabaseUpdateDefaultCharset
    );

  public databaseServiceMysqlDatabaseUpdateDescription =
    this.requestFunctionFactory(
      operations.databaseServiceMysqlDatabaseUpdateDescription
    );

  public databaseServiceMysqlDatabaseWithUserCreate =
    this.requestFunctionFactory(
      operations.databaseServiceMysqlDatabaseWithUserCreate
    );

  public databaseServiceMysqlUserCreate = this.requestFunctionFactory(
    operations.databaseServiceMysqlUserCreate
  );

  public databaseServiceMysqlUserList = this.requestFunctionFactory(
    operations.databaseServiceMysqlUserList
  );

  public databaseServiceMysqlUserDelete = this.requestFunctionFactory(
    operations.databaseServiceMysqlUserDelete
  );

  public databaseServiceMysqlUserGetSpecific = this.requestFunctionFactory(
    operations.databaseServiceMysqlUserGetSpecific
  );

  public databaseServiceMysqlUserUpdate = this.requestFunctionFactory(
    operations.databaseServiceMysqlUserUpdate
  );

  public databaseServiceMysqlUserDisable = this.requestFunctionFactory(
    operations.databaseServiceMysqlUserDisable
  );

  public databaseServiceMysqlUserEnable = this.requestFunctionFactory(
    operations.databaseServiceMysqlUserEnable
  );

  public databaseServiceMysqlUserGetPhpMyAdminUrl = this.requestFunctionFactory(
    operations.databaseServiceMysqlUserGetPhpMyAdminUrl
  );

  public databaseServiceMysqlUserSetPassword = this.requestFunctionFactory(
    operations.databaseServiceMysqlUserSetPassword
  );

  public databaseServiceMysqlVersionList = this.requestFunctionFactory(
    operations.databaseServiceMysqlVersionList
  );

  public databaseServiceRedisDatabaseCreate = this.requestFunctionFactory(
    operations.databaseServiceRedisDatabaseCreate
  );

  public databaseServiceRedisDatabaseList = this.requestFunctionFactory(
    operations.databaseServiceRedisDatabaseList
  );

  public databaseServiceRedisDatabaseDelete = this.requestFunctionFactory(
    operations.databaseServiceRedisDatabaseDelete
  );

  public databaseServiceRedisDatabaseGetSpecific = this.requestFunctionFactory(
    operations.databaseServiceRedisDatabaseGetSpecific
  );

  public databaseServiceRedisDatabaseUpdateDescription =
    this.requestFunctionFactory(
      operations.databaseServiceRedisDatabaseUpdateDescription
    );

  public databaseServiceRedisVersionList = this.requestFunctionFactory(
    operations.databaseServiceRedisVersionList
  );

  public dnsRecordASetCustom = this.requestFunctionFactory(
    operations.dnsRecordASetCustom
  );

  public dnsRecordASetManagedByIngress = this.requestFunctionFactory(
    operations.dnsRecordASetManagedByIngress
  );

  public dnsRecordCnameSet = this.requestFunctionFactory(
    operations.dnsRecordCnameSet
  );

  public dnsRecordMxSetCustom = this.requestFunctionFactory(
    operations.dnsRecordMxSetCustom
  );

  public dnsRecordMxSetManaged = this.requestFunctionFactory(
    operations.dnsRecordMxSetManaged
  );

  public dnsRecordTxtSet = this.requestFunctionFactory(
    operations.dnsRecordTxtSet
  );

  public dnsZoneGetSpecific = this.requestFunctionFactory(
    operations.dnsZoneGetSpecific
  );

  public dnsZonesForProjectV2 = this.requestFunctionFactory(
    operations.dnsZonesForProjectV2
  );

  public domainServiceAbortDeclareProcessV2 = this.requestFunctionFactory(
    operations.domainServiceAbortDeclareProcessV2
  );

  public domainServiceChangeOwnercOfDomainV2 = this.requestFunctionFactory(
    operations.domainServiceChangeOwnercOfDomainV2
  );

  public domainServiceChangeProjectOfDomainV2 = this.requestFunctionFactory(
    operations.domainServiceChangeProjectOfDomainV2
  );

  public domainServiceCheckDomainAvailabilityV2 = this.requestFunctionFactory(
    operations.domainServiceCheckDomainAvailabilityV2
  );

  public domainServiceCreateAuthcodeForDomainV2 = this.requestFunctionFactory(
    operations.domainServiceCreateAuthcodeForDomainV2
  );

  public domainServiceCreateAuthcode2ForDomainV2 = this.requestFunctionFactory(
    operations.domainServiceCreateAuthcode2ForDomainV2
  );

  public domainServiceDeclareNameserversV2 = this.requestFunctionFactory(
    operations.domainServiceDeclareNameserversV2
  );

  public domainServiceDeclareProcessChangeAuthcodeV2 =
    this.requestFunctionFactory(
      operations.domainServiceDeclareProcessChangeAuthcodeV2
    );

  public domainServiceDeclareProcessChangeHandlesV2 =
    this.requestFunctionFactory(
      operations.domainServiceDeclareProcessChangeHandlesV2
    );

  public domainServiceDeleteDomainV2 = this.requestFunctionFactory(
    operations.domainServiceDeleteDomainV2
  );

  public domainServiceGetDomainV2 = this.requestFunctionFactory(
    operations.domainServiceGetDomainV2
  );

  public domainServiceGetHandleFieldsV2 = this.requestFunctionFactory(
    operations.domainServiceGetHandleFieldsV2
  );

  public domainServiceGetSpecificDomainOwnershipV2 =
    this.requestFunctionFactory(
      operations.domainServiceGetSpecificDomainOwnershipV2
    );

  public domainServiceVerifyDomainOwnershipV2 = this.requestFunctionFactory(
    operations.domainServiceVerifyDomainOwnershipV2
  );

  public domainServiceGetToplevelDomainV2 = this.requestFunctionFactory(
    operations.domainServiceGetToplevelDomainV2
  );

  public domainServiceListDomainOwnershipsV2 = this.requestFunctionFactory(
    operations.domainServiceListDomainOwnershipsV2
  );

  public domainServiceListDomainsV2 = this.requestFunctionFactory(
    operations.domainServiceListDomainsV2
  );

  public domainServiceListToplevelDomainsV2 = this.requestFunctionFactory(
    operations.domainServiceListToplevelDomainsV2
  );

  public domainServiceResendDomainEmailV2 = this.requestFunctionFactory(
    operations.domainServiceResendDomainEmailV2
  );

  public fileServiceFileCreateDeprecated = this.requestFunctionFactory(
    operations.fileServiceFileCreateDeprecated
  );

  public fileServiceFileCreate = this.requestFunctionFactory(
    operations.fileServiceFileCreate
  );

  public fileServiceFileGet = this.requestFunctionFactory(
    operations.fileServiceFileGet
  );

  public fileServiceFileGetMeta = this.requestFunctionFactory(
    operations.fileServiceFileGetMeta
  );

  public fileServiceFileGetTokenRules = this.requestFunctionFactory(
    operations.fileServiceFileGetTokenRules
  );

  public ingressServiceCreate = this.requestFunctionFactory(
    operations.ingressServiceCreate
  );

  public ingressServiceDelete = this.requestFunctionFactory(
    operations.ingressServiceDelete
  );

  public ingressServiceGetSpecific = this.requestFunctionFactory(
    operations.ingressServiceGetSpecific
  );

  public ingressServiceList = this.requestFunctionFactory(
    operations.ingressServiceList
  );

  public ingressServicePaths = this.requestFunctionFactory(
    operations.ingressServicePaths
  );

  public ingressServiceTls = this.requestFunctionFactory(
    operations.ingressServiceTls
  );

  public invoiceServiceDetailOfInvoice = this.requestFunctionFactory(
    operations.invoiceServiceDetailOfInvoice
  );

  public invoiceServiceInvoiceSettings = this.requestFunctionFactory(
    operations.invoiceServiceInvoiceSettings
  );

  public invoiceServiceUpdateInvoiceSettings = this.requestFunctionFactory(
    operations.invoiceServiceUpdateInvoiceSettings
  );

  public invoiceServiceListCustomerInvoices = this.requestFunctionFactory(
    operations.invoiceServiceListCustomerInvoices
  );

  public mailServiceDeliveryboxCreate = this.requestFunctionFactory(
    operations.mailServiceDeliveryboxCreate
  );

  public mailServiceDeliveryboxList = this.requestFunctionFactory(
    operations.mailServiceDeliveryboxList
  );

  public mailServiceDeliveryboxDelete = this.requestFunctionFactory(
    operations.mailServiceDeliveryboxDelete
  );

  public mailServiceDeliveryboxGetSpecific = this.requestFunctionFactory(
    operations.mailServiceDeliveryboxGetSpecific
  );

  public mailServiceDeliveryboxUpdateDescription = this.requestFunctionFactory(
    operations.mailServiceDeliveryboxUpdateDescription
  );

  public mailServiceDeliveryboxUpdatePassword = this.requestFunctionFactory(
    operations.mailServiceDeliveryboxUpdatePassword
  );

  public mailServiceMailaddressCreate = this.requestFunctionFactory(
    operations.mailServiceMailaddressCreate
  );

  public mailServiceMailaddressList = this.requestFunctionFactory(
    operations.mailServiceMailaddressList
  );

  public mailServiceMailaddressDelete = this.requestFunctionFactory(
    operations.mailServiceMailaddressDelete
  );

  public mailServiceMailaddressGetSpecific = this.requestFunctionFactory(
    operations.mailServiceMailaddressGetSpecific
  );

  public mailServiceMailaddressUpdateAddress = this.requestFunctionFactory(
    operations.mailServiceMailaddressUpdateAddress
  );

  public mailServiceMailaddressUpdateAutoresponder =
    this.requestFunctionFactory(
      operations.mailServiceMailaddressUpdateAutoresponder
    );

  public mailServiceMailaddressUpdateCatchall = this.requestFunctionFactory(
    operations.mailServiceMailaddressUpdateCatchall
  );

  public mailServiceMailaddressUpdateForwardaddresses =
    this.requestFunctionFactory(
      operations.mailServiceMailaddressUpdateForwardaddresses
    );

  public mailServiceMailaddressUpdatePassword = this.requestFunctionFactory(
    operations.mailServiceMailaddressUpdatePassword
  );

  public mailServiceMailaddressUpdateQuota = this.requestFunctionFactory(
    operations.mailServiceMailaddressUpdateQuota
  );

  public mailServiceMailaddressUpdateSpamprotection =
    this.requestFunctionFactory(
      operations.mailServiceMailaddressUpdateSpamprotection
    );

  public mailServiceProjectsettingGetSpecific = this.requestFunctionFactory(
    operations.mailServiceProjectsettingGetSpecific
  );

  public mailServiceProjectsettingUpdateBlacklist = this.requestFunctionFactory(
    operations.mailServiceProjectsettingUpdateBlacklist
  );

  public mailServiceProjectsettingUpdateWhitelist = this.requestFunctionFactory(
    operations.mailServiceProjectsettingUpdateWhitelist
  );

  public membershipServiceAcceptCustomerInvite = this.requestFunctionFactory(
    operations.membershipServiceAcceptCustomerInvite
  );

  public membershipServiceAcceptCustomerInviteWithToken =
    this.requestFunctionFactory(
      operations.membershipServiceAcceptCustomerInviteWithToken
    );

  public membershipServiceAcceptProjectInvite = this.requestFunctionFactory(
    operations.membershipServiceAcceptProjectInvite
  );

  public membershipServiceAcceptProjectInviteWithToken =
    this.requestFunctionFactory(
      operations.membershipServiceAcceptProjectInviteWithToken
    );

  public membershipServiceChangeCustomerMembership =
    this.requestFunctionFactory(
      operations.membershipServiceChangeCustomerMembership
    );

  public membershipServiceDeleteCustomerMembership =
    this.requestFunctionFactory(
      operations.membershipServiceDeleteCustomerMembership
    );

  public membershipServiceChangeProjectMembership = this.requestFunctionFactory(
    operations.membershipServiceChangeProjectMembership
  );

  public membershipServiceDeleteProjectMembership = this.requestFunctionFactory(
    operations.membershipServiceDeleteProjectMembership
  );

  public membershipServiceCreateCustomerInvite = this.requestFunctionFactory(
    operations.membershipServiceCreateCustomerInvite
  );

  public membershipServiceCreateProjectInvite = this.requestFunctionFactory(
    operations.membershipServiceCreateProjectInvite
  );

  public membershipServiceDeclineCustomerInvite = this.requestFunctionFactory(
    operations.membershipServiceDeclineCustomerInvite
  );

  public membershipServiceDeclineProjectInvite = this.requestFunctionFactory(
    operations.membershipServiceDeclineProjectInvite
  );

  public membershipServiceGetCustomerInviteSpecific =
    this.requestFunctionFactory(
      operations.membershipServiceGetCustomerInviteSpecific
    );

  public membershipServiceGetCustomerInviteSpecificDeprecated =
    this.requestFunctionFactory(
      operations.membershipServiceGetCustomerInviteSpecificDeprecated
    );

  public membershipServiceGetCustomerMembershipSpecific =
    this.requestFunctionFactory(
      operations.membershipServiceGetCustomerMembershipSpecific
    );

  public membershipServiceGetOwnMembershipForProjectV2 =
    this.requestFunctionFactory(
      operations.membershipServiceGetOwnMembershipForProjectV2
    );

  public membershipServiceGetProjectInviteSpecific =
    this.requestFunctionFactory(
      operations.membershipServiceGetProjectInviteSpecific
    );

  public membershipServiceGetProjectInviteSpecificDeprecated =
    this.requestFunctionFactory(
      operations.membershipServiceGetProjectInviteSpecificDeprecated
    );

  public membershipServiceGetProjectMembershipForProjectAndUser =
    this.requestFunctionFactory(
      operations.membershipServiceGetProjectMembershipForProjectAndUser
    );

  public membershipServiceGetProjectMembershipSpecific =
    this.requestFunctionFactory(
      operations.membershipServiceGetProjectMembershipSpecific
    );

  public membershipServiceLeaveCustomer = this.requestFunctionFactory(
    operations.membershipServiceLeaveCustomer
  );

  public membershipServiceLeaveProject = this.requestFunctionFactory(
    operations.membershipServiceLeaveProject
  );

  public membershipServiceListCustomerInvitesForUserOrEmail =
    this.requestFunctionFactory(
      operations.membershipServiceListCustomerInvitesForUserOrEmail
    );

  public membershipServiceListCustomerMembershipsForUser =
    this.requestFunctionFactory(
      operations.membershipServiceListCustomerMembershipsForUser
    );

  public membershipServiceListInvitesForCustomer = this.requestFunctionFactory(
    operations.membershipServiceListInvitesForCustomer
  );

  public membershipServiceListInvitesForProject = this.requestFunctionFactory(
    operations.membershipServiceListInvitesForProject
  );

  public membershipServiceListMembershipsForCustomer =
    this.requestFunctionFactory(
      operations.membershipServiceListMembershipsForCustomer
    );

  public membershipServiceListMembershipsForProject =
    this.requestFunctionFactory(
      operations.membershipServiceListMembershipsForProject
    );

  public membershipServiceListOwnCustomerInvitesV2 =
    this.requestFunctionFactory(
      operations.membershipServiceListOwnCustomerInvitesV2
    );

  public membershipServiceListOwnProjectInvitesV2 = this.requestFunctionFactory(
    operations.membershipServiceListOwnProjectInvitesV2
  );

  public membershipServiceListProjectInvitesForUserOrEmail =
    this.requestFunctionFactory(
      operations.membershipServiceListProjectInvitesForUserOrEmail
    );

  public membershipServiceListProjectMembershipsForUser =
    this.requestFunctionFactory(
      operations.membershipServiceListProjectMembershipsForUser
    );

  public membershipServiceResendCustomerInviteMail =
    this.requestFunctionFactory(
      operations.membershipServiceResendCustomerInviteMail
    );

  public membershipServiceResendProjectInviteMail = this.requestFunctionFactory(
    operations.membershipServiceResendProjectInviteMail
  );

  public membershipServiceRevokeCustomerInvite = this.requestFunctionFactory(
    operations.membershipServiceRevokeCustomerInvite
  );

  public membershipServiceRevokeProjectInvite = this.requestFunctionFactory(
    operations.membershipServiceRevokeProjectInvite
  );

  public messagingServiceCountUnreadNotifications = this.requestFunctionFactory(
    operations.messagingServiceCountUnreadNotifications
  );

  public messagingServiceListNotifications = this.requestFunctionFactory(
    operations.messagingServiceListNotifications
  );

  public messagingServiceReadAllNotifications = this.requestFunctionFactory(
    operations.messagingServiceReadAllNotifications
  );

  public messagingServiceReadNotification = this.requestFunctionFactory(
    operations.messagingServiceReadNotification
  );

  public newsletterGetInfoV2 = this.requestFunctionFactory(
    operations.newsletterGetInfoV2
  );

  public newsletterUnsubscribeUserV2 = this.requestFunctionFactory(
    operations.newsletterUnsubscribeUserV2
  );

  public newsletterSubscribeUserV2 = this.requestFunctionFactory(
    operations.newsletterSubscribeUserV2
  );

  public orderServiceChangeProjecthostingV2 = this.requestFunctionFactory(
    operations.orderServiceChangeProjecthostingV2
  );

  public orderServiceChangeServerV2 = this.requestFunctionFactory(
    operations.orderServiceChangeServerV2
  );

  public orderServiceGetOrderV2 = this.requestFunctionFactory(
    operations.orderServiceGetOrderV2
  );

  public orderServiceListCustomerOrdersV2 = this.requestFunctionFactory(
    operations.orderServiceListCustomerOrdersV2
  );

  public orderServiceOrderDomainV2 = this.requestFunctionFactory(
    operations.orderServiceOrderDomainV2
  );

  public orderServiceOrderProjecthostingV2 = this.requestFunctionFactory(
    operations.orderServiceOrderProjecthostingV2
  );

  public orderServiceOrderServerV2 = this.requestFunctionFactory(
    operations.orderServiceOrderServerV2
  );

  public orderServicePreviewChangeProjecthostingV2 =
    this.requestFunctionFactory(
      operations.orderServicePreviewChangeProjecthostingV2
    );

  public orderServicePreviewChangeServerV2 = this.requestFunctionFactory(
    operations.orderServicePreviewChangeServerV2
  );

  public orderServicePreviewOrderDomainV2 = this.requestFunctionFactory(
    operations.orderServicePreviewOrderDomainV2
  );

  public orderServicePreviewOrderProjecthostingV2 = this.requestFunctionFactory(
    operations.orderServicePreviewOrderProjecthostingV2
  );

  public orderServicePreviewOrderServerV2 = this.requestFunctionFactory(
    operations.orderServicePreviewOrderServerV2
  );

  public passwordValidationServiceGetPasswordPolicy =
    this.requestFunctionFactory(
      operations.passwordValidationServiceGetPasswordPolicy
    );

  public projectServiceGetFsApiDirectories = this.requestFunctionFactory(
    operations.projectServiceGetFsApiDirectories
  );

  public projectServiceGetFsApiFileContent = this.requestFunctionFactory(
    operations.projectServiceGetFsApiFileContent
  );

  public projectServiceGetFsApiFiles = this.requestFunctionFactory(
    operations.projectServiceGetFsApiFiles
  );

  public projectServiceGetFsApiJwt = this.requestFunctionFactory(
    operations.projectServiceGetFsApiJwt
  );

  public projectServiceGetFsApiUsagesDisk = this.requestFunctionFactory(
    operations.projectServiceGetFsApiUsagesDisk
  );

  public projectServicePlacementgroupAvatarRemove = this.requestFunctionFactory(
    operations.projectServicePlacementgroupAvatarRemove
  );

  public projectServicePlacementgroupAvatarRequestUpload =
    this.requestFunctionFactory(
      operations.projectServicePlacementgroupAvatarRequestUpload
    );

  public projectServicePlacementgroupDetails = this.requestFunctionFactory(
    operations.projectServicePlacementgroupDetails
  );

  public projectServicePlacementgroupList = this.requestFunctionFactory(
    operations.projectServicePlacementgroupList
  );

  public projectServicePlacementgroupSubprojectCreate =
    this.requestFunctionFactory(
      operations.projectServicePlacementgroupSubprojectCreate
    );

  public projectServicePlacementgroupUpdateDescription =
    this.requestFunctionFactory(
      operations.projectServicePlacementgroupUpdateDescription
    );

  public projectServiceProjectAvatarRemove = this.requestFunctionFactory(
    operations.projectServiceProjectAvatarRemove
  );

  public projectServiceProjectAvatarRequestUpload = this.requestFunctionFactory(
    operations.projectServiceProjectAvatarRequestUpload
  );

  public projectServiceProjectDelete = this.requestFunctionFactory(
    operations.projectServiceProjectDelete
  );

  public projectServiceProjectGetSpecific = this.requestFunctionFactory(
    operations.projectServiceProjectGetSpecific
  );

  public projectServiceProjectUpdateDescription = this.requestFunctionFactory(
    operations.projectServiceProjectUpdateDescription
  );

  public projectServiceProjectsGetList = this.requestFunctionFactory(
    operations.projectServiceProjectsGetList
  );

  public redirectusCreateRelocationV2 = this.requestFunctionFactory(
    operations.redirectusCreateRelocationV2
  );

  public signupApiApiTokenCreate = this.requestFunctionFactory(
    operations.signupApiApiTokenCreate
  );

  public signupApiApiTokenList = this.requestFunctionFactory(
    operations.signupApiApiTokenList
  );

  public signupApiApiTokenDelete = this.requestFunctionFactory(
    operations.signupApiApiTokenDelete
  );

  public signupApiApiTokenEdit = this.requestFunctionFactory(
    operations.signupApiApiTokenEdit
  );

  public signupApiApiTokenGet = this.requestFunctionFactory(
    operations.signupApiApiTokenGet
  );

  public signupApiAuthenticate = this.requestFunctionFactory(
    operations.signupApiAuthenticate
  );

  public signupApiAuthenticateLegacy = this.requestFunctionFactory(
    operations.signupApiAuthenticateLegacy
  );

  public signupApiAuthenticateMfa = this.requestFunctionFactory(
    operations.signupApiAuthenticateMfa
  );

  public signupApiAvatarRemove = this.requestFunctionFactory(
    operations.signupApiAvatarRemove
  );

  public signupApiAvatarRequestUpload = this.requestFunctionFactory(
    operations.signupApiAvatarRequestUpload
  );

  public signupApiEmailChange = this.requestFunctionFactory(
    operations.signupApiEmailChange
  );

  public signupApiEmailGet = this.requestFunctionFactory(
    operations.signupApiEmailGet
  );

  public signupApiEmailResend = this.requestFunctionFactory(
    operations.signupApiEmailResend
  );

  public signupApiEmailVerify = this.requestFunctionFactory(
    operations.signupApiEmailVerify
  );

  public signupApiLogout = this.requestFunctionFactory(
    operations.signupApiLogout
  );

  public signupApiMfaConfirm = this.requestFunctionFactory(
    operations.signupApiMfaConfirm
  );

  public signupApiMfaDisable = this.requestFunctionFactory(
    operations.signupApiMfaDisable
  );

  public signupApiMfaGetStatus = this.requestFunctionFactory(
    operations.signupApiMfaGetStatus
  );

  public signupApiMfaInit = this.requestFunctionFactory(
    operations.signupApiMfaInit
  );

  public signupApiPasswordChange = this.requestFunctionFactory(
    operations.signupApiPasswordChange
  );

  public signupApiPasswordGetUpdatedAt = this.requestFunctionFactory(
    operations.signupApiPasswordGetUpdatedAt
  );

  public signupApiPasswordResetConfirm = this.requestFunctionFactory(
    operations.signupApiPasswordResetConfirm
  );

  public signupApiPasswordResetInit = this.requestFunctionFactory(
    operations.signupApiPasswordResetInit
  );

  public signupApiPhoneNumberDelete = this.requestFunctionFactory(
    operations.signupApiPhoneNumberDelete
  );

  public signupApiPhoneNumberGet = this.requestFunctionFactory(
    operations.signupApiPhoneNumberGet
  );

  public signupApiPhoneNumberInitProcess = this.requestFunctionFactory(
    operations.signupApiPhoneNumberInitProcess
  );

  public signupApiPhoneNumberVerify = this.requestFunctionFactory(
    operations.signupApiPhoneNumberVerify
  );

  public signupApiProfileChange = this.requestFunctionFactory(
    operations.signupApiProfileChange
  );

  public signupApiProfileDelete = this.requestFunctionFactory(
    operations.signupApiProfileDelete
  );

  public signupApiProfileGet = this.requestFunctionFactory(
    operations.signupApiProfileGet
  );

  public signupApiRecoverycodesReset = this.requestFunctionFactory(
    operations.signupApiRecoverycodesReset
  );

  public signupApiRegister = this.requestFunctionFactory(
    operations.signupApiRegister
  );

  public signupApiRegistrationVerify = this.requestFunctionFactory(
    operations.signupApiRegistrationVerify
  );

  public signupApiSessionGet = this.requestFunctionFactory(
    operations.signupApiSessionGet
  );

  public signupApiSessionTerminate = this.requestFunctionFactory(
    operations.signupApiSessionTerminate
  );

  public signupApiSessionsList = this.requestFunctionFactory(
    operations.signupApiSessionsList
  );

  public signupApiSessionsTerminateAll = this.requestFunctionFactory(
    operations.signupApiSessionsTerminateAll
  );

  public signupApiSshCreate = this.requestFunctionFactory(
    operations.signupApiSshCreate
  );

  public signupApiSshList = this.requestFunctionFactory(
    operations.signupApiSshList
  );

  public signupApiSshDelete = this.requestFunctionFactory(
    operations.signupApiSshDelete
  );

  public signupApiSshEdit = this.requestFunctionFactory(
    operations.signupApiSshEdit
  );

  public signupApiSshGet = this.requestFunctionFactory(
    operations.signupApiSshGet
  );

  public signupApiSupportCodeRequest = this.requestFunctionFactory(
    operations.signupApiSupportCodeRequest
  );

  public signupApiTokenCheck = this.requestFunctionFactory(
    operations.signupApiTokenCheck
  );

  public sshuserServiceCreateSftpUser = this.requestFunctionFactory(
    operations.sshuserServiceCreateSftpUser
  );

  public sshuserServiceListSftpUser = this.requestFunctionFactory(
    operations.sshuserServiceListSftpUser
  );

  public sshuserServiceCreateSshUser = this.requestFunctionFactory(
    operations.sshuserServiceCreateSshUser
  );

  public sshuserServiceListSshUser = this.requestFunctionFactory(
    operations.sshuserServiceListSshUser
  );

  public sshuserServiceGetSftpUser = this.requestFunctionFactory(
    operations.sshuserServiceGetSftpUser
  );

  public sshuserServicePatchSftpUser = this.requestFunctionFactory(
    operations.sshuserServicePatchSftpUser
  );

  public sshuserServiceRemoveSftpUser = this.requestFunctionFactory(
    operations.sshuserServiceRemoveSftpUser
  );

  public sshuserServiceGetSshUser = this.requestFunctionFactory(
    operations.sshuserServiceGetSshUser
  );

  public sshuserServicePatchSshUser = this.requestFunctionFactory(
    operations.sshuserServicePatchSshUser
  );

  public sshuserServiceRemoveSshUser = this.requestFunctionFactory(
    operations.sshuserServiceRemoveSshUser
  );

  public sshuserServiceUpdateAccessLevelOfSftpUser =
    this.requestFunctionFactory(
      operations.sshuserServiceUpdateAccessLevelOfSftpUser
    );

  public sshuserServiceUpdateActiveOfSftpUser = this.requestFunctionFactory(
    operations.sshuserServiceUpdateActiveOfSftpUser
  );

  public sshuserServiceUpdateActiveOfSshUser = this.requestFunctionFactory(
    operations.sshuserServiceUpdateActiveOfSshUser
  );

  public sshuserServiceUpdateDescriptionOfSftpUser =
    this.requestFunctionFactory(
      operations.sshuserServiceUpdateDescriptionOfSftpUser
    );

  public sshuserServiceUpdateDescriptionOfSshUser = this.requestFunctionFactory(
    operations.sshuserServiceUpdateDescriptionOfSshUser
  );

  public sshuserServiceUpdateDirectoriesOfSftpUser =
    this.requestFunctionFactory(
      operations.sshuserServiceUpdateDirectoriesOfSftpUser
    );

  public sshuserServiceUpdateExpiryOfSftpUser = this.requestFunctionFactory(
    operations.sshuserServiceUpdateExpiryOfSftpUser
  );

  public sshuserServiceUpdateExpiryOfSshUser = this.requestFunctionFactory(
    operations.sshuserServiceUpdateExpiryOfSshUser
  );

  public sshuserServiceUpdatePasswordOfSftpUser = this.requestFunctionFactory(
    operations.sshuserServiceUpdatePasswordOfSftpUser
  );

  public sshuserServiceUpdatePasswordOfSshUser = this.requestFunctionFactory(
    operations.sshuserServiceUpdatePasswordOfSshUser
  );

  public sshuserServiceUpdatePublicKeysOfSftpUser = this.requestFunctionFactory(
    operations.sshuserServiceUpdatePublicKeysOfSftpUser
  );

  public sshuserServiceUpdatePublicKeysOfSshUser = this.requestFunctionFactory(
    operations.sshuserServiceUpdatePublicKeysOfSshUser
  );

  public storageStatisticsServiceStorageStatistics =
    this.requestFunctionFactory(
      operations.storageStatisticsServiceStorageStatistics
    );

  public systemsoftwareGetSystemsoftwareV2 = this.requestFunctionFactory(
    operations.systemsoftwareGetSystemsoftwareV2
  );

  public systemsoftwareGetSystemsoftwaresV2 = this.requestFunctionFactory(
    operations.systemsoftwareGetSystemsoftwaresV2
  );

  public systemsoftwareversionGetSystemsoftwareversionV2 =
    this.requestFunctionFactory(
      operations.systemsoftwareversionGetSystemsoftwareversionV2
    );

  public systemsoftwareversionGetSystemsoftwareversionsV2 =
    this.requestFunctionFactory(
      operations.systemsoftwareversionGetSystemsoftwareversionsV2
    );

  public userServiceAvatarRemove = this.requestFunctionFactory(
    operations.userServiceAvatarRemove
  );

  public userServiceAvatarRequestUpload = this.requestFunctionFactory(
    operations.userServiceAvatarRequestUpload
  );

  public userServiceFeedbackCreate = this.requestFunctionFactory(
    operations.userServiceFeedbackCreate
  );

  public userServiceFeedbackList = this.requestFunctionFactory(
    operations.userServiceFeedbackList
  );

  public userServiceIssueNew = this.requestFunctionFactory(
    operations.userServiceIssueNew
  );

  public userServicePersonalInformationUpdate = this.requestFunctionFactory(
    operations.userServicePersonalInformationUpdate
  );

  public userServiceUserGet = this.requestFunctionFactory(
    operations.userServiceUserGet
  );

  public userServicePersonalizedSettingsGet = this.requestFunctionFactory(
    operations.userServicePersonalizedSettingsGet
  );

  public userServicePersonalizedSettingsUpdate = this.requestFunctionFactory(
    operations.userServicePersonalizedSettingsUpdate
  );

  public userServicePhoneNumberAdd = this.requestFunctionFactory(
    operations.userServicePhoneNumberAdd
  );

  public userServicePhoneNumberRemove = this.requestFunctionFactory(
    operations.userServicePhoneNumberRemove
  );

  public userServicePhoneNumberVerify = this.requestFunctionFactory(
    operations.userServicePhoneNumberVerify
  );

  public userServiceUserGetOwn = this.requestFunctionFactory(
    operations.userServiceUserGetOwn
  );

  public varnishServiceListValidators = this.requestFunctionFactory(
    operations.varnishServiceListValidators
  );

  public varnishServiceValidate = this.requestFunctionFactory(
    operations.varnishServiceValidate
  );

  public varnishServiceSoftwareClearCache = this.requestFunctionFactory(
    operations.varnishServiceSoftwareClearCache
  );

  public varnishServiceSoftwareConfigDeclare = this.requestFunctionFactory(
    operations.varnishServiceSoftwareConfigDeclare
  );

  public varnishServiceSoftwareConfigDelete = this.requestFunctionFactory(
    operations.varnishServiceSoftwareConfigDelete
  );

  public varnishServiceSoftwareConfigDeleteRevision =
    this.requestFunctionFactory(
      operations.varnishServiceSoftwareConfigDeleteRevision
    );

  public varnishServiceSoftwareConfigRevisionGetById =
    this.requestFunctionFactory(
      operations.varnishServiceSoftwareConfigRevisionGetById
    );

  public varnishServiceSoftwareConfigRollback = this.requestFunctionFactory(
    operations.varnishServiceSoftwareConfigRollback
  );

  public varnishServiceSoftwareConfigtemplateCreate =
    this.requestFunctionFactory(
      operations.varnishServiceSoftwareConfigtemplateCreate
    );

  public varnishServiceSoftwareConfigtemplateGetList =
    this.requestFunctionFactory(
      operations.varnishServiceSoftwareConfigtemplateGetList
    );

  public varnishServiceSoftwareConfigtemplateDelete =
    this.requestFunctionFactory(
      operations.varnishServiceSoftwareConfigtemplateDelete
    );

  public varnishServiceSoftwareConfigtemplateGetSpecific =
    this.requestFunctionFactory(
      operations.varnishServiceSoftwareConfigtemplateGetSpecific
    );

  public varnishServiceSoftwareConfigtemplateListGlobals =
    this.requestFunctionFactory(
      operations.varnishServiceSoftwareConfigtemplateListGlobals
    );

  public varnishServiceSoftwareGetById = this.requestFunctionFactory(
    operations.varnishServiceSoftwareGetById
  );

  public varnishServiceSoftwareLogs = this.requestFunctionFactory(
    operations.varnishServiceSoftwareLogs
  );

  public varnishServiceSoftwareSettingsDeclare = this.requestFunctionFactory(
    operations.varnishServiceSoftwareSettingsDeclare
  );

  public fileServiceFileGetTypeRules = this.requestFunctionFactory(
    operations.fileServiceFileGetTypeRules
  );

  public orderServiceListProjectOrdersV2 = this.requestFunctionFactory(
    operations.orderServiceListProjectOrdersV2
  );

  public cronjobServiceCronjobAddAppid = this.requestFunctionFactory(
    operations.cronjobServiceCronjobAddAppid
  );
}

export default MittwaldApiV2Client;
