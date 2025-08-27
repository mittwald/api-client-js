/* eslint-disable */
/* prettier-ignore */
/* This file is auto-generated with acg (@mittwald/api-code-generator) */
import * as descriptors from "./descriptors.js";
import {
  InferredRequestData,
  InferredResponseData,
  HttpStatus,
} from "@mittwald/api-client-commons";

export declare module MittwaldAPIV2 {
  namespace Operations {
    namespace AppExecuteAction {
      type RequestData = InferredRequestData<
        typeof descriptors.appExecuteAction
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.appExecuteAction, TStatus>;
    }

    namespace AppGetApp {
      type RequestData = InferredRequestData<typeof descriptors.appGetApp>;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.appGetApp, TStatus>;
    }

    namespace AppGetAppinstallation {
      type RequestData = InferredRequestData<
        typeof descriptors.appGetAppinstallation
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.appGetAppinstallation, TStatus>;
    }

    namespace AppUninstallAppinstallation {
      type RequestData = InferredRequestData<
        typeof descriptors.appUninstallAppinstallation
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.appUninstallAppinstallation,
          TStatus
        >;
    }

    namespace AppPatchAppinstallation {
      type RequestData = InferredRequestData<
        typeof descriptors.appPatchAppinstallation
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.appPatchAppinstallation,
          TStatus
        >;
    }

    namespace AppGetAppversion {
      type RequestData = InferredRequestData<
        typeof descriptors.appGetAppversion
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.appGetAppversion, TStatus>;
    }

    namespace AppGetInstalledSystemsoftwareForAppinstallation {
      type RequestData = InferredRequestData<
        typeof descriptors.appGetInstalledSystemsoftwareForAppinstallation
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.appGetInstalledSystemsoftwareForAppinstallation,
          TStatus
        >;
    }

    namespace AppGetMissingDependenciesForAppinstallation {
      type RequestData = InferredRequestData<
        typeof descriptors.appGetMissingDependenciesForAppinstallation
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.appGetMissingDependenciesForAppinstallation,
          TStatus
        >;
    }

    namespace AppGetSystemsoftware {
      type RequestData = InferredRequestData<
        typeof descriptors.appGetSystemsoftware
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.appGetSystemsoftware, TStatus>;
    }

    namespace AppGetSystemsoftwareversion {
      type RequestData = InferredRequestData<
        typeof descriptors.appGetSystemsoftwareversion
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.appGetSystemsoftwareversion,
          TStatus
        >;
    }

    namespace AppLinkDatabase {
      type RequestData = InferredRequestData<
        typeof descriptors.appLinkDatabase
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.appLinkDatabase, TStatus>;
    }

    namespace AppListAppinstallationsForUser {
      type RequestData = InferredRequestData<
        typeof descriptors.appListAppinstallationsForUser
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.appListAppinstallationsForUser,
          TStatus
        >;
    }

    namespace AppListAppinstallations {
      type RequestData = InferredRequestData<
        typeof descriptors.appListAppinstallations
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.appListAppinstallations,
          TStatus
        >;
    }

    namespace AppRequestAppinstallation {
      type RequestData = InferredRequestData<
        typeof descriptors.appRequestAppinstallation
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.appRequestAppinstallation,
          TStatus
        >;
    }

    namespace AppListApps {
      type RequestData = InferredRequestData<typeof descriptors.appListApps>;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.appListApps, TStatus>;
    }

    namespace AppListAppversions {
      type RequestData = InferredRequestData<
        typeof descriptors.appListAppversions
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.appListAppversions, TStatus>;
    }

    namespace AppListSystemsoftwares {
      type RequestData = InferredRequestData<
        typeof descriptors.appListSystemsoftwares
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.appListSystemsoftwares,
          TStatus
        >;
    }

    namespace AppListSystemsoftwareversions {
      type RequestData = InferredRequestData<
        typeof descriptors.appListSystemsoftwareversions
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.appListSystemsoftwareversions,
          TStatus
        >;
    }

    namespace AppListUpdateCandidatesForAppversion {
      type RequestData = InferredRequestData<
        typeof descriptors.appListUpdateCandidatesForAppversion
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.appListUpdateCandidatesForAppversion,
          TStatus
        >;
    }

    namespace AppReplaceDatabase {
      type RequestData = InferredRequestData<
        typeof descriptors.appReplaceDatabase
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.appReplaceDatabase, TStatus>;
    }

    namespace AppRequestAppinstallationCopy {
      type RequestData = InferredRequestData<
        typeof descriptors.appRequestAppinstallationCopy
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.appRequestAppinstallationCopy,
          TStatus
        >;
    }

    namespace AppRetrieveStatus {
      type RequestData = InferredRequestData<
        typeof descriptors.appRetrieveStatus
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.appRetrieveStatus, TStatus>;
    }

    namespace AppSetDatabaseUsers {
      type RequestData = InferredRequestData<
        typeof descriptors.appSetDatabaseUsers
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.appSetDatabaseUsers, TStatus>;
    }

    namespace AppUnlinkDatabase {
      type RequestData = InferredRequestData<
        typeof descriptors.appUnlinkDatabase
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.appUnlinkDatabase, TStatus>;
    }

    namespace ArticleGetArticle {
      type RequestData = InferredRequestData<
        typeof descriptors.articleGetArticle
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.articleGetArticle, TStatus>;
    }

    namespace ArticleListArticles {
      type RequestData = InferredRequestData<
        typeof descriptors.articleListArticles
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.articleListArticles, TStatus>;
    }

    namespace BackupCreateProjectBackupExport {
      type RequestData = InferredRequestData<
        typeof descriptors.backupCreateProjectBackupExport
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.backupCreateProjectBackupExport,
          TStatus
        >;
    }

    namespace BackupDeleteProjectBackupExport {
      type RequestData = InferredRequestData<
        typeof descriptors.backupDeleteProjectBackupExport
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.backupDeleteProjectBackupExport,
          TStatus
        >;
    }

    namespace BackupListProjectBackupSchedules {
      type RequestData = InferredRequestData<
        typeof descriptors.backupListProjectBackupSchedules
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.backupListProjectBackupSchedules,
          TStatus
        >;
    }

    namespace BackupCreateProjectBackupSchedule {
      type RequestData = InferredRequestData<
        typeof descriptors.backupCreateProjectBackupSchedule
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.backupCreateProjectBackupSchedule,
          TStatus
        >;
    }

    namespace BackupListProjectBackups {
      type RequestData = InferredRequestData<
        typeof descriptors.backupListProjectBackups
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.backupListProjectBackups,
          TStatus
        >;
    }

    namespace BackupCreateProjectBackup {
      type RequestData = InferredRequestData<
        typeof descriptors.backupCreateProjectBackup
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.backupCreateProjectBackup,
          TStatus
        >;
    }

    namespace BackupGetProjectBackupSchedule {
      type RequestData = InferredRequestData<
        typeof descriptors.backupGetProjectBackupSchedule
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.backupGetProjectBackupSchedule,
          TStatus
        >;
    }

    namespace BackupDeleteProjectBackupSchedule {
      type RequestData = InferredRequestData<
        typeof descriptors.backupDeleteProjectBackupSchedule
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.backupDeleteProjectBackupSchedule,
          TStatus
        >;
    }

    namespace BackupUpdateProjectBackupSchedule {
      type RequestData = InferredRequestData<
        typeof descriptors.backupUpdateProjectBackupSchedule
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.backupUpdateProjectBackupSchedule,
          TStatus
        >;
    }

    namespace BackupGetProjectBackup {
      type RequestData = InferredRequestData<
        typeof descriptors.backupGetProjectBackup
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.backupGetProjectBackup,
          TStatus
        >;
    }

    namespace BackupDeleteProjectBackup {
      type RequestData = InferredRequestData<
        typeof descriptors.backupDeleteProjectBackup
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.backupDeleteProjectBackup,
          TStatus
        >;
    }

    namespace BackupGetProjectBackupToc {
      type RequestData = InferredRequestData<
        typeof descriptors.backupGetProjectBackupToc
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.backupGetProjectBackupToc,
          TStatus
        >;
    }

    namespace BackupRequestProjectBackupRestorePath {
      type RequestData = InferredRequestData<
        typeof descriptors.backupRequestProjectBackupRestorePath
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.backupRequestProjectBackupRestorePath,
          TStatus
        >;
    }

    namespace BackupUpdateProjectBackupDescription {
      type RequestData = InferredRequestData<
        typeof descriptors.backupUpdateProjectBackupDescription
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.backupUpdateProjectBackupDescription,
          TStatus
        >;
    }

    namespace ContainerListRegistries {
      type RequestData = InferredRequestData<
        typeof descriptors.containerListRegistries
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.containerListRegistries,
          TStatus
        >;
    }

    namespace ContainerCreateRegistry {
      type RequestData = InferredRequestData<
        typeof descriptors.containerCreateRegistry
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.containerCreateRegistry,
          TStatus
        >;
    }

    namespace ContainerGetStack {
      type RequestData = InferredRequestData<
        typeof descriptors.containerGetStack
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.containerGetStack, TStatus>;
    }

    namespace ContainerDeclareStack {
      type RequestData = InferredRequestData<
        typeof descriptors.containerDeclareStack
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.containerDeclareStack, TStatus>;
    }

    namespace ContainerUpdateStack {
      type RequestData = InferredRequestData<
        typeof descriptors.containerUpdateStack
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.containerUpdateStack, TStatus>;
    }

    namespace ContainerGetRegistry {
      type RequestData = InferredRequestData<
        typeof descriptors.containerGetRegistry
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.containerGetRegistry, TStatus>;
    }

    namespace ContainerDeleteRegistry {
      type RequestData = InferredRequestData<
        typeof descriptors.containerDeleteRegistry
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.containerDeleteRegistry,
          TStatus
        >;
    }

    namespace ContainerUpdateRegistry {
      type RequestData = InferredRequestData<
        typeof descriptors.containerUpdateRegistry
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.containerUpdateRegistry,
          TStatus
        >;
    }

    namespace ContainerGetVolume {
      type RequestData = InferredRequestData<
        typeof descriptors.containerGetVolume
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.containerGetVolume, TStatus>;
    }

    namespace ContainerDeleteVolume {
      type RequestData = InferredRequestData<
        typeof descriptors.containerDeleteVolume
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.containerDeleteVolume, TStatus>;
    }

    namespace ContainerGetContainerImageConfig {
      type RequestData = InferredRequestData<
        typeof descriptors.containerGetContainerImageConfig
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.containerGetContainerImageConfig,
          TStatus
        >;
    }

    namespace ContainerGetServiceLogs {
      type RequestData = InferredRequestData<
        typeof descriptors.containerGetServiceLogs
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.containerGetServiceLogs,
          TStatus
        >;
    }

    namespace ContainerGetService {
      type RequestData = InferredRequestData<
        typeof descriptors.containerGetService
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.containerGetService, TStatus>;
    }

    namespace ContainerListServices {
      type RequestData = InferredRequestData<
        typeof descriptors.containerListServices
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.containerListServices, TStatus>;
    }

    namespace ContainerListStacks {
      type RequestData = InferredRequestData<
        typeof descriptors.containerListStacks
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.containerListStacks, TStatus>;
    }

    namespace ContainerListVolumes {
      type RequestData = InferredRequestData<
        typeof descriptors.containerListVolumes
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.containerListVolumes, TStatus>;
    }

    namespace ContainerPullImageForService {
      type RequestData = InferredRequestData<
        typeof descriptors.containerPullImageForService
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.containerPullImageForService,
          TStatus
        >;
    }

    namespace ContainerRecreateService {
      type RequestData = InferredRequestData<
        typeof descriptors.containerRecreateService
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.containerRecreateService,
          TStatus
        >;
    }

    namespace ContainerRestartService {
      type RequestData = InferredRequestData<
        typeof descriptors.containerRestartService
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.containerRestartService,
          TStatus
        >;
    }

    namespace ContainerStartService {
      type RequestData = InferredRequestData<
        typeof descriptors.containerStartService
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.containerStartService, TStatus>;
    }

    namespace ContainerStopService {
      type RequestData = InferredRequestData<
        typeof descriptors.containerStopService
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.containerStopService, TStatus>;
    }

    namespace ContainerValidateContainerRegistryUri {
      type RequestData = InferredRequestData<
        typeof descriptors.containerValidateContainerRegistryUri
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.containerValidateContainerRegistryUri,
          TStatus
        >;
    }

    namespace ContainerValidateRegistryCredentials {
      type RequestData = InferredRequestData<
        typeof descriptors.containerValidateRegistryCredentials
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.containerValidateRegistryCredentials,
          TStatus
        >;
    }

    namespace ContractTerminateContractItem {
      type RequestData = InferredRequestData<
        typeof descriptors.contractTerminateContractItem
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contractTerminateContractItem,
          TStatus
        >;
    }

    namespace ContractCancelContractItemTermination {
      type RequestData = InferredRequestData<
        typeof descriptors.contractCancelContractItemTermination
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contractCancelContractItemTermination,
          TStatus
        >;
    }

    namespace ContractCancelContractTariffChange {
      type RequestData = InferredRequestData<
        typeof descriptors.contractCancelContractTariffChange
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contractCancelContractTariffChange,
          TStatus
        >;
    }

    namespace ContractTerminateContract {
      type RequestData = InferredRequestData<
        typeof descriptors.contractTerminateContract
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contractTerminateContract,
          TStatus
        >;
    }

    namespace ContractCancelContractTermination {
      type RequestData = InferredRequestData<
        typeof descriptors.contractCancelContractTermination
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contractCancelContractTermination,
          TStatus
        >;
    }

    namespace ContractGetBaseItemOfContract {
      type RequestData = InferredRequestData<
        typeof descriptors.contractGetBaseItemOfContract
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contractGetBaseItemOfContract,
          TStatus
        >;
    }

    namespace ContractGetDetailOfContractByCertificate {
      type RequestData = InferredRequestData<
        typeof descriptors.contractGetDetailOfContractByCertificate
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contractGetDetailOfContractByCertificate,
          TStatus
        >;
    }

    namespace ContractGetDetailOfContractByDomain {
      type RequestData = InferredRequestData<
        typeof descriptors.contractGetDetailOfContractByDomain
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contractGetDetailOfContractByDomain,
          TStatus
        >;
    }

    namespace ContractGetDetailOfContractByLeadFyndr {
      type RequestData = InferredRequestData<
        typeof descriptors.contractGetDetailOfContractByLeadFyndr
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contractGetDetailOfContractByLeadFyndr,
          TStatus
        >;
    }

    namespace ContractGetDetailOfContractByMailAddress {
      type RequestData = InferredRequestData<
        typeof descriptors.contractGetDetailOfContractByMailAddress
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contractGetDetailOfContractByMailAddress,
          TStatus
        >;
    }

    namespace ContractGetDetailOfContractByProject {
      type RequestData = InferredRequestData<
        typeof descriptors.contractGetDetailOfContractByProject
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contractGetDetailOfContractByProject,
          TStatus
        >;
    }

    namespace ContractGetDetailOfContractByServer {
      type RequestData = InferredRequestData<
        typeof descriptors.contractGetDetailOfContractByServer
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contractGetDetailOfContractByServer,
          TStatus
        >;
    }

    namespace ContractGetDetailOfContractItem {
      type RequestData = InferredRequestData<
        typeof descriptors.contractGetDetailOfContractItem
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contractGetDetailOfContractItem,
          TStatus
        >;
    }

    namespace ContractGetDetailOfContract {
      type RequestData = InferredRequestData<
        typeof descriptors.contractGetDetailOfContract
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contractGetDetailOfContract,
          TStatus
        >;
    }

    namespace ContractListContracts {
      type RequestData = InferredRequestData<
        typeof descriptors.contractListContracts
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.contractListContracts, TStatus>;
    }

    namespace ContributorGetBillingInformation {
      type RequestData = InferredRequestData<
        typeof descriptors.contributorGetBillingInformation
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contributorGetBillingInformation,
          TStatus
        >;
    }

    namespace ContributorUpdateBillingInformation {
      type RequestData = InferredRequestData<
        typeof descriptors.contributorUpdateBillingInformation
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contributorUpdateBillingInformation,
          TStatus
        >;
    }

    namespace ContributorGetCustomerBillingPortalLink {
      type RequestData = InferredRequestData<
        typeof descriptors.contributorGetCustomerBillingPortalLink
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contributorGetCustomerBillingPortalLink,
          TStatus
        >;
    }

    namespace ContributorGetLoginLink {
      type RequestData = InferredRequestData<
        typeof descriptors.contributorGetLoginLink
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contributorGetLoginLink,
          TStatus
        >;
    }

    namespace ContributorListContractPartnersOfContributor {
      type RequestData = InferredRequestData<
        typeof descriptors.contributorListContractPartnersOfContributor
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contributorListContractPartnersOfContributor,
          TStatus
        >;
    }

    namespace ContributorListIncomingInvoices {
      type RequestData = InferredRequestData<
        typeof descriptors.contributorListIncomingInvoices
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contributorListIncomingInvoices,
          TStatus
        >;
    }

    namespace ContributorListOnbehalfInvoices {
      type RequestData = InferredRequestData<
        typeof descriptors.contributorListOnbehalfInvoices
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contributorListOnbehalfInvoices,
          TStatus
        >;
    }

    namespace ContributorReceiptGetFileAccessToken {
      type RequestData = InferredRequestData<
        typeof descriptors.contributorReceiptGetFileAccessToken
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contributorReceiptGetFileAccessToken,
          TStatus
        >;
    }

    namespace ContributorRotateSecretForExtensionInstance {
      type RequestData = InferredRequestData<
        typeof descriptors.contributorRotateSecretForExtensionInstance
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.contributorRotateSecretForExtensionInstance,
          TStatus
        >;
    }

    namespace ConversationListConversations {
      type RequestData = InferredRequestData<
        typeof descriptors.conversationListConversations
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.conversationListConversations,
          TStatus
        >;
    }

    namespace ConversationCreateConversation {
      type RequestData = InferredRequestData<
        typeof descriptors.conversationCreateConversation
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.conversationCreateConversation,
          TStatus
        >;
    }

    namespace ConversationListMessagesByConversation {
      type RequestData = InferredRequestData<
        typeof descriptors.conversationListMessagesByConversation
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.conversationListMessagesByConversation,
          TStatus
        >;
    }

    namespace ConversationCreateMessage {
      type RequestData = InferredRequestData<
        typeof descriptors.conversationCreateMessage
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.conversationCreateMessage,
          TStatus
        >;
    }

    namespace ConversationGetCategory {
      type RequestData = InferredRequestData<
        typeof descriptors.conversationGetCategory
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.conversationGetCategory,
          TStatus
        >;
    }

    namespace ConversationGetConversationMembers {
      type RequestData = InferredRequestData<
        typeof descriptors.conversationGetConversationMembers
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.conversationGetConversationMembers,
          TStatus
        >;
    }

    namespace ConversationGetConversationPreferencesOfCustomer {
      type RequestData = InferredRequestData<
        typeof descriptors.conversationGetConversationPreferencesOfCustomer
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.conversationGetConversationPreferencesOfCustomer,
          TStatus
        >;
    }

    namespace ConversationGetConversation {
      type RequestData = InferredRequestData<
        typeof descriptors.conversationGetConversation
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.conversationGetConversation,
          TStatus
        >;
    }

    namespace ConversationUpdateConversation {
      type RequestData = InferredRequestData<
        typeof descriptors.conversationUpdateConversation
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.conversationUpdateConversation,
          TStatus
        >;
    }

    namespace ConversationGetFileAccessToken {
      type RequestData = InferredRequestData<
        typeof descriptors.conversationGetFileAccessToken
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.conversationGetFileAccessToken,
          TStatus
        >;
    }

    namespace ConversationListCategories {
      type RequestData = InferredRequestData<
        typeof descriptors.conversationListCategories
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.conversationListCategories,
          TStatus
        >;
    }

    namespace ConversationRequestFileUpload {
      type RequestData = InferredRequestData<
        typeof descriptors.conversationRequestFileUpload
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.conversationRequestFileUpload,
          TStatus
        >;
    }

    namespace ConversationSetConversationStatus {
      type RequestData = InferredRequestData<
        typeof descriptors.conversationSetConversationStatus
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.conversationSetConversationStatus,
          TStatus
        >;
    }

    namespace ConversationUpdateMessage {
      type RequestData = InferredRequestData<
        typeof descriptors.conversationUpdateMessage
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.conversationUpdateMessage,
          TStatus
        >;
    }

    namespace CronjobAbortExecution {
      type RequestData = InferredRequestData<
        typeof descriptors.cronjobAbortExecution
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.cronjobAbortExecution, TStatus>;
    }

    namespace CronjobListCronjobs {
      type RequestData = InferredRequestData<
        typeof descriptors.cronjobListCronjobs
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.cronjobListCronjobs, TStatus>;
    }

    namespace CronjobCreateCronjob {
      type RequestData = InferredRequestData<
        typeof descriptors.cronjobCreateCronjob
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.cronjobCreateCronjob, TStatus>;
    }

    namespace CronjobListExecutions {
      type RequestData = InferredRequestData<
        typeof descriptors.cronjobListExecutions
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.cronjobListExecutions, TStatus>;
    }

    namespace CronjobCreateExecution {
      type RequestData = InferredRequestData<
        typeof descriptors.cronjobCreateExecution
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.cronjobCreateExecution,
          TStatus
        >;
    }

    namespace CronjobGetCronjob {
      type RequestData = InferredRequestData<
        typeof descriptors.cronjobGetCronjob
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.cronjobGetCronjob, TStatus>;
    }

    namespace CronjobDeleteCronjob {
      type RequestData = InferredRequestData<
        typeof descriptors.cronjobDeleteCronjob
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.cronjobDeleteCronjob, TStatus>;
    }

    namespace CronjobUpdateCronjob {
      type RequestData = InferredRequestData<
        typeof descriptors.cronjobUpdateCronjob
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.cronjobUpdateCronjob, TStatus>;
    }

    namespace CronjobGetExecution {
      type RequestData = InferredRequestData<
        typeof descriptors.cronjobGetExecution
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.cronjobGetExecution, TStatus>;
    }

    namespace CronjobUpdateCronjobAppId {
      type RequestData = InferredRequestData<
        typeof descriptors.cronjobUpdateCronjobAppId
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.cronjobUpdateCronjobAppId,
          TStatus
        >;
    }

    namespace CustomerAcceptCustomerInvite {
      type RequestData = InferredRequestData<
        typeof descriptors.customerAcceptCustomerInvite
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.customerAcceptCustomerInvite,
          TStatus
        >;
    }

    namespace CustomerListInvitesForCustomer {
      type RequestData = InferredRequestData<
        typeof descriptors.customerListInvitesForCustomer
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.customerListInvitesForCustomer,
          TStatus
        >;
    }

    namespace CustomerCreateCustomerInvite {
      type RequestData = InferredRequestData<
        typeof descriptors.customerCreateCustomerInvite
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.customerCreateCustomerInvite,
          TStatus
        >;
    }

    namespace CustomerListCustomers {
      type RequestData = InferredRequestData<
        typeof descriptors.customerListCustomers
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.customerListCustomers, TStatus>;
    }

    namespace CustomerCreateCustomer {
      type RequestData = InferredRequestData<
        typeof descriptors.customerCreateCustomer
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.customerCreateCustomer,
          TStatus
        >;
    }

    namespace CustomerCreateRecommendationSuggestion {
      type RequestData = InferredRequestData<
        typeof descriptors.customerCreateRecommendationSuggestion
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.customerCreateRecommendationSuggestion,
          TStatus
        >;
    }

    namespace CustomerGetWallet {
      type RequestData = InferredRequestData<
        typeof descriptors.customerGetWallet
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.customerGetWallet, TStatus>;
    }

    namespace CustomerCreateWallet {
      type RequestData = InferredRequestData<
        typeof descriptors.customerCreateWallet
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.customerCreateWallet, TStatus>;
    }

    namespace CustomerDeclineCustomerInvite {
      type RequestData = InferredRequestData<
        typeof descriptors.customerDeclineCustomerInvite
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.customerDeclineCustomerInvite,
          TStatus
        >;
    }

    namespace CustomerGetCustomerInvite {
      type RequestData = InferredRequestData<
        typeof descriptors.customerGetCustomerInvite
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.customerGetCustomerInvite,
          TStatus
        >;
    }

    namespace CustomerDeleteCustomerInvite {
      type RequestData = InferredRequestData<
        typeof descriptors.customerDeleteCustomerInvite
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.customerDeleteCustomerInvite,
          TStatus
        >;
    }

    namespace CustomerGetCustomerMembership {
      type RequestData = InferredRequestData<
        typeof descriptors.customerGetCustomerMembership
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.customerGetCustomerMembership,
          TStatus
        >;
    }

    namespace CustomerDeleteCustomerMembership {
      type RequestData = InferredRequestData<
        typeof descriptors.customerDeleteCustomerMembership
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.customerDeleteCustomerMembership,
          TStatus
        >;
    }

    namespace CustomerUpdateCustomerMembership {
      type RequestData = InferredRequestData<
        typeof descriptors.customerUpdateCustomerMembership
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.customerUpdateCustomerMembership,
          TStatus
        >;
    }

    namespace CustomerGetCustomer {
      type RequestData = InferredRequestData<
        typeof descriptors.customerGetCustomer
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.customerGetCustomer, TStatus>;
    }

    namespace CustomerUpdateCustomer {
      type RequestData = InferredRequestData<
        typeof descriptors.customerUpdateCustomer
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.customerUpdateCustomer,
          TStatus
        >;
    }

    namespace CustomerDeleteCustomer {
      type RequestData = InferredRequestData<
        typeof descriptors.customerDeleteCustomer
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.customerDeleteCustomer,
          TStatus
        >;
    }

    namespace CustomerGetCustomerTokenInvite {
      type RequestData = InferredRequestData<
        typeof descriptors.customerGetCustomerTokenInvite
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.customerGetCustomerTokenInvite,
          TStatus
        >;
    }

    namespace CustomerIsCustomerLegallyCompetent {
      type RequestData = InferredRequestData<
        typeof descriptors.customerIsCustomerLegallyCompetent
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.customerIsCustomerLegallyCompetent,
          TStatus
        >;
    }

    namespace CustomerListCustomerInvites {
      type RequestData = InferredRequestData<
        typeof descriptors.customerListCustomerInvites
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.customerListCustomerInvites,
          TStatus
        >;
    }

    namespace CustomerListCustomerMemberships {
      type RequestData = InferredRequestData<
        typeof descriptors.customerListCustomerMemberships
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.customerListCustomerMemberships,
          TStatus
        >;
    }

    namespace CustomerListMembershipsForCustomer {
      type RequestData = InferredRequestData<
        typeof descriptors.customerListMembershipsForCustomer
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.customerListMembershipsForCustomer,
          TStatus
        >;
    }

    namespace CustomerRequestAvatarUpload {
      type RequestData = InferredRequestData<
        typeof descriptors.customerRequestAvatarUpload
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.customerRequestAvatarUpload,
          TStatus
        >;
    }

    namespace CustomerRemoveAvatar {
      type RequestData = InferredRequestData<
        typeof descriptors.customerRemoveAvatar
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.customerRemoveAvatar, TStatus>;
    }

    namespace CustomerResendCustomerInviteMail {
      type RequestData = InferredRequestData<
        typeof descriptors.customerResendCustomerInviteMail
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.customerResendCustomerInviteMail,
          TStatus
        >;
    }

    namespace DatabaseListMysqlDatabases {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseListMysqlDatabases
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseListMysqlDatabases,
          TStatus
        >;
    }

    namespace DatabaseCreateMysqlDatabase {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseCreateMysqlDatabase
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseCreateMysqlDatabase,
          TStatus
        >;
    }

    namespace DatabaseListMysqlUsers {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseListMysqlUsers
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseListMysqlUsers,
          TStatus
        >;
    }

    namespace DatabaseCreateMysqlUser {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseCreateMysqlUser
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseCreateMysqlUser,
          TStatus
        >;
    }

    namespace DatabaseListRedisDatabases {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseListRedisDatabases
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseListRedisDatabases,
          TStatus
        >;
    }

    namespace DatabaseCreateRedisDatabase {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseCreateRedisDatabase
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseCreateRedisDatabase,
          TStatus
        >;
    }

    namespace DatabaseGetMysqlDatabase {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseGetMysqlDatabase
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseGetMysqlDatabase,
          TStatus
        >;
    }

    namespace DatabaseDeleteMysqlDatabase {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseDeleteMysqlDatabase
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseDeleteMysqlDatabase,
          TStatus
        >;
    }

    namespace DatabaseGetMysqlUser {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseGetMysqlUser
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.databaseGetMysqlUser, TStatus>;
    }

    namespace DatabaseUpdateMysqlUser {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseUpdateMysqlUser
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseUpdateMysqlUser,
          TStatus
        >;
    }

    namespace DatabaseDeleteMysqlUser {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseDeleteMysqlUser
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseDeleteMysqlUser,
          TStatus
        >;
    }

    namespace DatabaseGetRedisDatabase {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseGetRedisDatabase
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseGetRedisDatabase,
          TStatus
        >;
    }

    namespace DatabaseDeleteRedisDatabase {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseDeleteRedisDatabase
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseDeleteRedisDatabase,
          TStatus
        >;
    }

    namespace DatabaseDisableMysqlUser {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseDisableMysqlUser
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseDisableMysqlUser,
          TStatus
        >;
    }

    namespace DatabaseEnableMysqlUser {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseEnableMysqlUser
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseEnableMysqlUser,
          TStatus
        >;
    }

    namespace DatabaseGetMysqlUserPhpMyAdminUrl {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseGetMysqlUserPhpMyAdminUrl
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseGetMysqlUserPhpMyAdminUrl,
          TStatus
        >;
    }

    namespace DatabaseListMysqlCharsets {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseListMysqlCharsets
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseListMysqlCharsets,
          TStatus
        >;
    }

    namespace DatabaseListMysqlVersions {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseListMysqlVersions
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseListMysqlVersions,
          TStatus
        >;
    }

    namespace DatabaseListRedisVersions {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseListRedisVersions
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseListRedisVersions,
          TStatus
        >;
    }

    namespace DatabaseUpdateMysqlDatabaseDefaultCharset {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseUpdateMysqlDatabaseDefaultCharset
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseUpdateMysqlDatabaseDefaultCharset,
          TStatus
        >;
    }

    namespace DatabaseUpdateMysqlDatabaseDescription {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseUpdateMysqlDatabaseDescription
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseUpdateMysqlDatabaseDescription,
          TStatus
        >;
    }

    namespace DatabaseUpdateMysqlUserPassword {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseUpdateMysqlUserPassword
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseUpdateMysqlUserPassword,
          TStatus
        >;
    }

    namespace DatabaseUpdateRedisDatabaseConfiguration {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseUpdateRedisDatabaseConfiguration
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseUpdateRedisDatabaseConfiguration,
          TStatus
        >;
    }

    namespace DatabaseUpdateRedisDatabaseDescription {
      type RequestData = InferredRequestData<
        typeof descriptors.databaseUpdateRedisDatabaseDescription
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.databaseUpdateRedisDatabaseDescription,
          TStatus
        >;
    }

    namespace DomainListDomains {
      type RequestData = InferredRequestData<
        typeof descriptors.domainListDomains
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.domainListDomains, TStatus>;
    }

    namespace DomainUpdateDomainNameservers {
      type RequestData = InferredRequestData<
        typeof descriptors.domainUpdateDomainNameservers
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.domainUpdateDomainNameservers,
          TStatus
        >;
    }

    namespace IngressUpdateIngressPaths {
      type RequestData = InferredRequestData<
        typeof descriptors.ingressUpdateIngressPaths
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.ingressUpdateIngressPaths,
          TStatus
        >;
    }

    namespace IngressUpdateIngressTls {
      type RequestData = InferredRequestData<
        typeof descriptors.ingressUpdateIngressTls
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.ingressUpdateIngressTls,
          TStatus
        >;
    }

    namespace MailUpdateMailAddressAutoresponder {
      type RequestData = InferredRequestData<
        typeof descriptors.mailUpdateMailAddressAutoresponder
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.mailUpdateMailAddressAutoresponder,
          TStatus
        >;
    }

    namespace MailUpdateMailAddressForwardAddresses {
      type RequestData = InferredRequestData<
        typeof descriptors.mailUpdateMailAddressForwardAddresses
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.mailUpdateMailAddressForwardAddresses,
          TStatus
        >;
    }

    namespace MailUpdateMailAddressPassword {
      type RequestData = InferredRequestData<
        typeof descriptors.mailUpdateMailAddressPassword
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.mailUpdateMailAddressPassword,
          TStatus
        >;
    }

    namespace MailUpdateMailAddressQuota {
      type RequestData = InferredRequestData<
        typeof descriptors.mailUpdateMailAddressQuota
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.mailUpdateMailAddressQuota,
          TStatus
        >;
    }

    namespace MailUpdateMailAddressSpamProtection {
      type RequestData = InferredRequestData<
        typeof descriptors.mailUpdateMailAddressSpamProtection
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.mailUpdateMailAddressSpamProtection,
          TStatus
        >;
    }

    namespace NewsletterSubscribeUser {
      type RequestData = InferredRequestData<
        typeof descriptors.newsletterSubscribeUser
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.newsletterSubscribeUser,
          TStatus
        >;
    }

    namespace UserUpdateAccount {
      type RequestData = InferredRequestData<
        typeof descriptors.userUpdateAccount
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userUpdateAccount, TStatus>;
    }

    namespace DnsCreateDnsZone {
      type RequestData = InferredRequestData<
        typeof descriptors.dnsCreateDnsZone
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.dnsCreateDnsZone, TStatus>;
    }

    namespace DnsGetDnsZone {
      type RequestData = InferredRequestData<typeof descriptors.dnsGetDnsZone>;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.dnsGetDnsZone, TStatus>;
    }

    namespace DnsDeleteDnsZone {
      type RequestData = InferredRequestData<
        typeof descriptors.dnsDeleteDnsZone
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.dnsDeleteDnsZone, TStatus>;
    }

    namespace DnsListDnsZones {
      type RequestData = InferredRequestData<
        typeof descriptors.dnsListDnsZones
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.dnsListDnsZones, TStatus>;
    }

    namespace DnsSetRecordSetManaged {
      type RequestData = InferredRequestData<
        typeof descriptors.dnsSetRecordSetManaged
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.dnsSetRecordSetManaged,
          TStatus
        >;
    }

    namespace DnsUpdateRecordSet {
      type RequestData = InferredRequestData<
        typeof descriptors.dnsUpdateRecordSet
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.dnsUpdateRecordSet, TStatus>;
    }

    namespace DomainAbortDomainDeclaration {
      type RequestData = InferredRequestData<
        typeof descriptors.domainAbortDomainDeclaration
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.domainAbortDomainDeclaration,
          TStatus
        >;
    }

    namespace DomainCheckDomainRegistrability {
      type RequestData = InferredRequestData<
        typeof descriptors.domainCheckDomainRegistrability
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.domainCheckDomainRegistrability,
          TStatus
        >;
    }

    namespace DomainCheckDomainTransferability {
      type RequestData = InferredRequestData<
        typeof descriptors.domainCheckDomainTransferability
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.domainCheckDomainTransferability,
          TStatus
        >;
    }

    namespace DomainCreateDomainAuthCode {
      type RequestData = InferredRequestData<
        typeof descriptors.domainCreateDomainAuthCode
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.domainCreateDomainAuthCode,
          TStatus
        >;
    }

    namespace DomainGetDomain {
      type RequestData = InferredRequestData<
        typeof descriptors.domainGetDomain
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.domainGetDomain, TStatus>;
    }

    namespace DomainDeleteDomain {
      type RequestData = InferredRequestData<
        typeof descriptors.domainDeleteDomain
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.domainDeleteDomain, TStatus>;
    }

    namespace DomainGetLatestScreenshot {
      type RequestData = InferredRequestData<
        typeof descriptors.domainGetLatestScreenshot
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.domainGetLatestScreenshot,
          TStatus
        >;
    }

    namespace DomainListTldContactSchemas {
      type RequestData = InferredRequestData<
        typeof descriptors.domainListTldContactSchemas
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.domainListTldContactSchemas,
          TStatus
        >;
    }

    namespace DomainListTlds {
      type RequestData = InferredRequestData<typeof descriptors.domainListTlds>;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.domainListTlds, TStatus>;
    }

    namespace DomainResendDomainEmail {
      type RequestData = InferredRequestData<
        typeof descriptors.domainResendDomainEmail
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.domainResendDomainEmail,
          TStatus
        >;
    }

    namespace DomainSuggest {
      type RequestData = InferredRequestData<typeof descriptors.domainSuggest>;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.domainSuggest, TStatus>;
    }

    namespace DomainUpdateDomainAuthCode {
      type RequestData = InferredRequestData<
        typeof descriptors.domainUpdateDomainAuthCode
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.domainUpdateDomainAuthCode,
          TStatus
        >;
    }

    namespace DomainUpdateDomainContact {
      type RequestData = InferredRequestData<
        typeof descriptors.domainUpdateDomainContact
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.domainUpdateDomainContact,
          TStatus
        >;
    }

    namespace DomainUpdateDomainProjectId {
      type RequestData = InferredRequestData<
        typeof descriptors.domainUpdateDomainProjectId
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.domainUpdateDomainProjectId,
          TStatus
        >;
    }

    namespace ExtensionAuthenticateInstance {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionAuthenticateInstance
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionAuthenticateInstance,
          TStatus
        >;
    }

    namespace ExtensionAuthenticateWithSessionToken {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionAuthenticateWithSessionToken
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionAuthenticateWithSessionToken,
          TStatus
        >;
    }

    namespace ExtensionScheduleExtensionTermination {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionScheduleExtensionTermination
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionScheduleExtensionTermination,
          TStatus
        >;
    }

    namespace ExtensionCancelExtensionTermination {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionCancelExtensionTermination
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionCancelExtensionTermination,
          TStatus
        >;
    }

    namespace ExtensionChangeContext {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionChangeContext
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionChangeContext,
          TStatus
        >;
    }

    namespace ExtensionConsentToExtensionScopes {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionConsentToExtensionScopes
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionConsentToExtensionScopes,
          TStatus
        >;
    }

    namespace ExtensionCreateContributorOnboardingProcess {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionCreateContributorOnboardingProcess
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionCreateContributorOnboardingProcess,
          TStatus
        >;
    }

    namespace ExtensionListExtensionInstances {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionListExtensionInstances
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionListExtensionInstances,
          TStatus
        >;
    }

    namespace ExtensionCreateExtensionInstance {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionCreateExtensionInstance
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionCreateExtensionInstance,
          TStatus
        >;
    }

    namespace ExtensionCreateRetrievalKey {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionCreateRetrievalKey
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionCreateRetrievalKey,
          TStatus
        >;
    }

    namespace ExtensionGetExtensionInstance {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionGetExtensionInstance
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionGetExtensionInstance,
          TStatus
        >;
    }

    namespace ExtensionDeleteExtensionInstance {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionDeleteExtensionInstance
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionDeleteExtensionInstance,
          TStatus
        >;
    }

    namespace ExtensionGetOwnExtension {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionGetOwnExtension
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionGetOwnExtension,
          TStatus
        >;
    }

    namespace ExtensionDeleteExtension {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionDeleteExtension
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionDeleteExtension,
          TStatus
        >;
    }

    namespace ExtensionPatchExtension {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionPatchExtension
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionPatchExtension,
          TStatus
        >;
    }

    namespace ExtensionDisableExtensionInstance {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionDisableExtensionInstance
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionDisableExtensionInstance,
          TStatus
        >;
    }

    namespace ExtensionDryRunWebhook {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionDryRunWebhook
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionDryRunWebhook,
          TStatus
        >;
    }

    namespace ExtensionEnableExtensionInstance {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionEnableExtensionInstance
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionEnableExtensionInstance,
          TStatus
        >;
    }

    namespace ExtensionGenerateExtensionSecret {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionGenerateExtensionSecret
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionGenerateExtensionSecret,
          TStatus
        >;
    }

    namespace ExtensionGenerateSessionToken {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionGenerateSessionToken
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionGenerateSessionToken,
          TStatus
        >;
    }

    namespace ExtensionGetContributor {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionGetContributor
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionGetContributor,
          TStatus
        >;
    }

    namespace ExtensionGetCustomerExtensionInstanceOrders {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionGetCustomerExtensionInstanceOrders
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionGetCustomerExtensionInstanceOrders,
          TStatus
        >;
    }

    namespace ExtensionGetExtensionInstanceContract {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionGetExtensionInstanceContract
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionGetExtensionInstanceContract,
          TStatus
        >;
    }

    namespace ExtensionUpdateExtensionInstanceContract {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionUpdateExtensionInstanceContract
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionUpdateExtensionInstanceContract,
          TStatus
        >;
    }

    namespace ExtensionGetExtensionInstanceForCustomer {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionGetExtensionInstanceForCustomer
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionGetExtensionInstanceForCustomer,
          TStatus
        >;
    }

    namespace ExtensionGetExtensionInstanceForProject {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionGetExtensionInstanceForProject
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionGetExtensionInstanceForProject,
          TStatus
        >;
    }

    namespace ExtensionGetExtension {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionGetExtension
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.extensionGetExtension, TStatus>;
    }

    namespace ExtensionGetProjectExtensionInstanceOrders {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionGetProjectExtensionInstanceOrders
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionGetProjectExtensionInstanceOrders,
          TStatus
        >;
    }

    namespace ExtensionGetPublicKey {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionGetPublicKey
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.extensionGetPublicKey, TStatus>;
    }

    namespace ExtensionInvalidateExtensionSecret {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionInvalidateExtensionSecret
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionInvalidateExtensionSecret,
          TStatus
        >;
    }

    namespace ExtensionListContributors {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionListContributors
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionListContributors,
          TStatus
        >;
    }

    namespace ExtensionListExtensions {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionListExtensions
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionListExtensions,
          TStatus
        >;
    }

    namespace ExtensionListOwnExtensions {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionListOwnExtensions
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionListOwnExtensions,
          TStatus
        >;
    }

    namespace ExtensionRegisterExtension {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionRegisterExtension
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionRegisterExtension,
          TStatus
        >;
    }

    namespace ExtensionListScopes {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionListScopes
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.extensionListScopes, TStatus>;
    }

    namespace ExtensionOrderExtension {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionOrderExtension
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionOrderExtension,
          TStatus
        >;
    }

    namespace ExtensionRemoveAsset {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionRemoveAsset
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.extensionRemoveAsset, TStatus>;
    }

    namespace ExtensionRequestLogoUpload {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionRequestLogoUpload
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionRequestLogoUpload,
          TStatus
        >;
    }

    namespace ExtensionRemoveLogo {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionRemoveLogo
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.extensionRemoveLogo, TStatus>;
    }

    namespace ExtensionRequestAssetUpload {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionRequestAssetUpload
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionRequestAssetUpload,
          TStatus
        >;
    }

    namespace ExtensionRequestExtensionVerification {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionRequestExtensionVerification
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionRequestExtensionVerification,
          TStatus
        >;
    }

    namespace ExtensionSetExtensionPublishedState {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionSetExtensionPublishedState
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionSetExtensionPublishedState,
          TStatus
        >;
    }

    namespace ExtensionUpdateExtensionPricing {
      type RequestData = InferredRequestData<
        typeof descriptors.extensionUpdateExtensionPricing
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.extensionUpdateExtensionPricing,
          TStatus
        >;
    }

    namespace FileCreateFile {
      type RequestData = InferredRequestData<typeof descriptors.fileCreateFile>;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.fileCreateFile, TStatus>;
    }

    namespace FileGetFileMeta {
      type RequestData = InferredRequestData<
        typeof descriptors.fileGetFileMeta
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.fileGetFileMeta, TStatus>;
    }

    namespace FileGetFileUploadTokenRules {
      type RequestData = InferredRequestData<
        typeof descriptors.fileGetFileUploadTokenRules
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.fileGetFileUploadTokenRules,
          TStatus
        >;
    }

    namespace FileGetFileUploadTypeRules {
      type RequestData = InferredRequestData<
        typeof descriptors.fileGetFileUploadTypeRules
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.fileGetFileUploadTypeRules,
          TStatus
        >;
    }

    namespace FileGetFile {
      type RequestData = InferredRequestData<typeof descriptors.fileGetFile>;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.fileGetFile, TStatus>;
    }

    namespace FileGetFileWithName {
      type RequestData = InferredRequestData<
        typeof descriptors.fileGetFileWithName
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.fileGetFileWithName, TStatus>;
    }

    namespace IngressListIngresses {
      type RequestData = InferredRequestData<
        typeof descriptors.ingressListIngresses
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.ingressListIngresses, TStatus>;
    }

    namespace IngressCreateIngress {
      type RequestData = InferredRequestData<
        typeof descriptors.ingressCreateIngress
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.ingressCreateIngress, TStatus>;
    }

    namespace IngressGetIngress {
      type RequestData = InferredRequestData<
        typeof descriptors.ingressGetIngress
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.ingressGetIngress, TStatus>;
    }

    namespace IngressDeleteIngress {
      type RequestData = InferredRequestData<
        typeof descriptors.ingressDeleteIngress
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.ingressDeleteIngress, TStatus>;
    }

    namespace IngressIngressVerifyOwnership {
      type RequestData = InferredRequestData<
        typeof descriptors.ingressIngressVerifyOwnership
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.ingressIngressVerifyOwnership,
          TStatus
        >;
    }

    namespace IngressListIngressesCompatibleWithCertificate {
      type RequestData = InferredRequestData<
        typeof descriptors.ingressListIngressesCompatibleWithCertificate
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.ingressListIngressesCompatibleWithCertificate,
          TStatus
        >;
    }

    namespace IngressRequestIngressAcmeCertificateIssuance {
      type RequestData = InferredRequestData<
        typeof descriptors.ingressRequestIngressAcmeCertificateIssuance
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.ingressRequestIngressAcmeCertificateIssuance,
          TStatus
        >;
    }

    namespace InvoiceDetail {
      type RequestData = InferredRequestData<typeof descriptors.invoiceDetail>;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.invoiceDetail, TStatus>;
    }

    namespace InvoiceGetDetailOfInvoiceSettings {
      type RequestData = InferredRequestData<
        typeof descriptors.invoiceGetDetailOfInvoiceSettings
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.invoiceGetDetailOfInvoiceSettings,
          TStatus
        >;
    }

    namespace InvoiceUpdateInvoiceSettings {
      type RequestData = InferredRequestData<
        typeof descriptors.invoiceUpdateInvoiceSettings
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.invoiceUpdateInvoiceSettings,
          TStatus
        >;
    }

    namespace InvoiceGetFileAccessToken {
      type RequestData = InferredRequestData<
        typeof descriptors.invoiceGetFileAccessToken
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.invoiceGetFileAccessToken,
          TStatus
        >;
    }

    namespace InvoiceListCustomerInvoices {
      type RequestData = InferredRequestData<
        typeof descriptors.invoiceListCustomerInvoices
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.invoiceListCustomerInvoices,
          TStatus
        >;
    }

    namespace LeadfyndrGetLeadFyndrProfileRequest {
      type RequestData = InferredRequestData<
        typeof descriptors.leadfyndrGetLeadFyndrProfileRequest
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.leadfyndrGetLeadFyndrProfileRequest,
          TStatus
        >;
    }

    namespace LeadfyndrCreateLeadFyndrAccessRequest {
      type RequestData = InferredRequestData<
        typeof descriptors.leadfyndrCreateLeadFyndrAccessRequest
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.leadfyndrCreateLeadFyndrAccessRequest,
          TStatus
        >;
    }

    namespace LeadfyndrGetCities {
      type RequestData = InferredRequestData<
        typeof descriptors.leadfyndrGetCities
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.leadfyndrGetCities, TStatus>;
    }

    namespace LeadfyndrGetLeadFyndrProfileTariffOptions {
      type RequestData = InferredRequestData<
        typeof descriptors.leadfyndrGetLeadFyndrProfileTariffOptions
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.leadfyndrGetLeadFyndrProfileTariffOptions,
          TStatus
        >;
    }

    namespace LeadfyndrGetLeadFyndrProfile {
      type RequestData = InferredRequestData<
        typeof descriptors.leadfyndrGetLeadFyndrProfile
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.leadfyndrGetLeadFyndrProfile,
          TStatus
        >;
    }

    namespace LeadfyndrGetLead {
      type RequestData = InferredRequestData<
        typeof descriptors.leadfyndrGetLead
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.leadfyndrGetLead, TStatus>;
    }

    namespace LeadfyndrGetUnlockedLead {
      type RequestData = InferredRequestData<
        typeof descriptors.leadfyndrGetUnlockedLead
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.leadfyndrGetUnlockedLead,
          TStatus
        >;
    }

    namespace LeadfyndrUnlockLead {
      type RequestData = InferredRequestData<
        typeof descriptors.leadfyndrUnlockLead
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.leadfyndrUnlockLead, TStatus>;
    }

    namespace LeadfyndrListLeads {
      type RequestData = InferredRequestData<
        typeof descriptors.leadfyndrListLeads
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.leadfyndrListLeads, TStatus>;
    }

    namespace LeadfyndrListUnlockedLeads {
      type RequestData = InferredRequestData<
        typeof descriptors.leadfyndrListUnlockedLeads
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.leadfyndrListUnlockedLeads,
          TStatus
        >;
    }

    namespace LeadfyndrReserveUnlockedLead {
      type RequestData = InferredRequestData<
        typeof descriptors.leadfyndrReserveUnlockedLead
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.leadfyndrReserveUnlockedLead,
          TStatus
        >;
    }

    namespace LeadfyndrRemoveUnlockedLeadReservation {
      type RequestData = InferredRequestData<
        typeof descriptors.leadfyndrRemoveUnlockedLeadReservation
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.leadfyndrRemoveUnlockedLeadReservation,
          TStatus
        >;
    }

    namespace MailListDeliveryBoxes {
      type RequestData = InferredRequestData<
        typeof descriptors.mailListDeliveryBoxes
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.mailListDeliveryBoxes, TStatus>;
    }

    namespace MailCreateDeliverybox {
      type RequestData = InferredRequestData<
        typeof descriptors.mailCreateDeliverybox
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.mailCreateDeliverybox, TStatus>;
    }

    namespace MailListMailAddresses {
      type RequestData = InferredRequestData<
        typeof descriptors.mailListMailAddresses
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.mailListMailAddresses, TStatus>;
    }

    namespace MailCreateMailAddress {
      type RequestData = InferredRequestData<
        typeof descriptors.mailCreateMailAddress
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.mailCreateMailAddress, TStatus>;
    }

    namespace MailGetDeliveryBox {
      type RequestData = InferredRequestData<
        typeof descriptors.mailGetDeliveryBox
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.mailGetDeliveryBox, TStatus>;
    }

    namespace MailDeleteDeliveryBox {
      type RequestData = InferredRequestData<
        typeof descriptors.mailDeleteDeliveryBox
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.mailDeleteDeliveryBox, TStatus>;
    }

    namespace MailGetMailAddress {
      type RequestData = InferredRequestData<
        typeof descriptors.mailGetMailAddress
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.mailGetMailAddress, TStatus>;
    }

    namespace MailDeleteMailAddress {
      type RequestData = InferredRequestData<
        typeof descriptors.mailDeleteMailAddress
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.mailDeleteMailAddress, TStatus>;
    }

    namespace MailListBackupsForMailAddress {
      type RequestData = InferredRequestData<
        typeof descriptors.mailListBackupsForMailAddress
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.mailListBackupsForMailAddress,
          TStatus
        >;
    }

    namespace MailListProjectMailSettings {
      type RequestData = InferredRequestData<
        typeof descriptors.mailListProjectMailSettings
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.mailListProjectMailSettings,
          TStatus
        >;
    }

    namespace MailMigrationCheckMigrationIsPossible {
      type RequestData = InferredRequestData<
        typeof descriptors.mailMigrationCheckMigrationIsPossible
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.mailMigrationCheckMigrationIsPossible,
          TStatus
        >;
    }

    namespace MailMigrationGetMigration {
      type RequestData = InferredRequestData<
        typeof descriptors.mailMigrationGetMigration
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.mailMigrationGetMigration,
          TStatus
        >;
    }

    namespace MailMigrationListMigrations {
      type RequestData = InferredRequestData<
        typeof descriptors.mailMigrationListMigrations
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.mailMigrationListMigrations,
          TStatus
        >;
    }

    namespace MailMigrationRequestMailMigration {
      type RequestData = InferredRequestData<
        typeof descriptors.mailMigrationRequestMailMigration
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.mailMigrationRequestMailMigration,
          TStatus
        >;
    }

    namespace MailRecoverMailAddressEmails {
      type RequestData = InferredRequestData<
        typeof descriptors.mailRecoverMailAddressEmails
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.mailRecoverMailAddressEmails,
          TStatus
        >;
    }

    namespace MailUpdateDeliveryBoxDescription {
      type RequestData = InferredRequestData<
        typeof descriptors.mailUpdateDeliveryBoxDescription
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.mailUpdateDeliveryBoxDescription,
          TStatus
        >;
    }

    namespace MailUpdateDeliveryBoxPassword {
      type RequestData = InferredRequestData<
        typeof descriptors.mailUpdateDeliveryBoxPassword
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.mailUpdateDeliveryBoxPassword,
          TStatus
        >;
    }

    namespace MailUpdateMailAddressAddress {
      type RequestData = InferredRequestData<
        typeof descriptors.mailUpdateMailAddressAddress
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.mailUpdateMailAddressAddress,
          TStatus
        >;
    }

    namespace MailUpdateMailAddressCatchAll {
      type RequestData = InferredRequestData<
        typeof descriptors.mailUpdateMailAddressCatchAll
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.mailUpdateMailAddressCatchAll,
          TStatus
        >;
    }

    namespace MailUpdateProjectMailSetting {
      type RequestData = InferredRequestData<
        typeof descriptors.mailUpdateProjectMailSetting
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.mailUpdateProjectMailSetting,
          TStatus
        >;
    }

    namespace MarketplaceCustomerGetPaymentMethod {
      type RequestData = InferredRequestData<
        typeof descriptors.marketplaceCustomerGetPaymentMethod
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.marketplaceCustomerGetPaymentMethod,
          TStatus
        >;
    }

    namespace MarketplaceCustomerUpdatePaymentMethod {
      type RequestData = InferredRequestData<
        typeof descriptors.marketplaceCustomerUpdatePaymentMethod
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.marketplaceCustomerUpdatePaymentMethod,
          TStatus
        >;
    }

    namespace MiscGetLlmModelsExperimental {
      type RequestData = InferredRequestData<
        typeof descriptors.miscGetLlmModelsExperimental
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.miscGetLlmModelsExperimental,
          TStatus
        >;
    }

    namespace NewsletterGetInfo {
      type RequestData = InferredRequestData<
        typeof descriptors.newsletterGetInfo
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.newsletterGetInfo, TStatus>;
    }

    namespace NewsletterUnsubscribeUser {
      type RequestData = InferredRequestData<
        typeof descriptors.newsletterUnsubscribeUser
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.newsletterUnsubscribeUser,
          TStatus
        >;
    }

    namespace NotificationsCountUnreadNotifications {
      type RequestData = InferredRequestData<
        typeof descriptors.notificationsCountUnreadNotifications
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.notificationsCountUnreadNotifications,
          TStatus
        >;
    }

    namespace NotificationsListNotifications {
      type RequestData = InferredRequestData<
        typeof descriptors.notificationsListNotifications
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.notificationsListNotifications,
          TStatus
        >;
    }

    namespace NotificationsReadAllNotifications {
      type RequestData = InferredRequestData<
        typeof descriptors.notificationsReadAllNotifications
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.notificationsReadAllNotifications,
          TStatus
        >;
    }

    namespace NotificationsReadNotification {
      type RequestData = InferredRequestData<
        typeof descriptors.notificationsReadNotification
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.notificationsReadNotification,
          TStatus
        >;
    }

    namespace OrderListOrders {
      type RequestData = InferredRequestData<
        typeof descriptors.orderListOrders
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.orderListOrders, TStatus>;
    }

    namespace OrderCreateOrder {
      type RequestData = InferredRequestData<
        typeof descriptors.orderCreateOrder
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.orderCreateOrder, TStatus>;
    }

    namespace OrderCreateTariffChange {
      type RequestData = InferredRequestData<
        typeof descriptors.orderCreateTariffChange
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.orderCreateTariffChange,
          TStatus
        >;
    }

    namespace OrderGetOrder {
      type RequestData = InferredRequestData<typeof descriptors.orderGetOrder>;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.orderGetOrder, TStatus>;
    }

    namespace OrderListCustomerOrders {
      type RequestData = InferredRequestData<
        typeof descriptors.orderListCustomerOrders
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.orderListCustomerOrders,
          TStatus
        >;
    }

    namespace OrderListProjectOrders {
      type RequestData = InferredRequestData<
        typeof descriptors.orderListProjectOrders
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.orderListProjectOrders,
          TStatus
        >;
    }

    namespace OrderPreviewOrder {
      type RequestData = InferredRequestData<
        typeof descriptors.orderPreviewOrder
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.orderPreviewOrder, TStatus>;
    }

    namespace OrderPreviewTariffChange {
      type RequestData = InferredRequestData<
        typeof descriptors.orderPreviewTariffChange
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.orderPreviewTariffChange,
          TStatus
        >;
    }

    namespace PageinsightsGetPerformanceData {
      type RequestData = InferredRequestData<
        typeof descriptors.pageinsightsGetPerformanceData
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.pageinsightsGetPerformanceData,
          TStatus
        >;
    }

    namespace PageinsightsGetStraceData {
      type RequestData = InferredRequestData<
        typeof descriptors.pageinsightsGetStraceData
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.pageinsightsGetStraceData,
          TStatus
        >;
    }

    namespace PageinsightsListPerformanceDataForProject {
      type RequestData = InferredRequestData<
        typeof descriptors.pageinsightsListPerformanceDataForProject
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.pageinsightsListPerformanceDataForProject,
          TStatus
        >;
    }

    namespace PageinsightsScheduleStrace {
      type RequestData = InferredRequestData<
        typeof descriptors.pageinsightsScheduleStrace
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.pageinsightsScheduleStrace,
          TStatus
        >;
    }

    namespace PasswordValidationGetPasswordPolicy {
      type RequestData = InferredRequestData<
        typeof descriptors.passwordValidationGetPasswordPolicy
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.passwordValidationGetPasswordPolicy,
          TStatus
        >;
    }

    namespace ProjectAcceptProjectInvite {
      type RequestData = InferredRequestData<
        typeof descriptors.projectAcceptProjectInvite
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectAcceptProjectInvite,
          TStatus
        >;
    }

    namespace ProjectGetLlmLicencesExperimental {
      type RequestData = InferredRequestData<
        typeof descriptors.projectGetLlmLicencesExperimental
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectGetLlmLicencesExperimental,
          TStatus
        >;
    }

    namespace ProjectCreateLlmBetaLicenceExperimental {
      type RequestData = InferredRequestData<
        typeof descriptors.projectCreateLlmBetaLicenceExperimental
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectCreateLlmBetaLicenceExperimental,
          TStatus
        >;
    }

    namespace ProjectListInvitesForProject {
      type RequestData = InferredRequestData<
        typeof descriptors.projectListInvitesForProject
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectListInvitesForProject,
          TStatus
        >;
    }

    namespace ProjectCreateProjectInvite {
      type RequestData = InferredRequestData<
        typeof descriptors.projectCreateProjectInvite
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectCreateProjectInvite,
          TStatus
        >;
    }

    namespace ProjectCreateProject {
      type RequestData = InferredRequestData<
        typeof descriptors.projectCreateProject
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.projectCreateProject, TStatus>;
    }

    namespace ProjectDeclineProjectInvite {
      type RequestData = InferredRequestData<
        typeof descriptors.projectDeclineProjectInvite
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectDeclineProjectInvite,
          TStatus
        >;
    }

    namespace ProjectRequestProjectAvatarUpload {
      type RequestData = InferredRequestData<
        typeof descriptors.projectRequestProjectAvatarUpload
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectRequestProjectAvatarUpload,
          TStatus
        >;
    }

    namespace ProjectDeleteProjectAvatar {
      type RequestData = InferredRequestData<
        typeof descriptors.projectDeleteProjectAvatar
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectDeleteProjectAvatar,
          TStatus
        >;
    }

    namespace ProjectGetProjectInvite {
      type RequestData = InferredRequestData<
        typeof descriptors.projectGetProjectInvite
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectGetProjectInvite,
          TStatus
        >;
    }

    namespace ProjectDeleteProjectInvite {
      type RequestData = InferredRequestData<
        typeof descriptors.projectDeleteProjectInvite
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectDeleteProjectInvite,
          TStatus
        >;
    }

    namespace ProjectGetProjectMembership {
      type RequestData = InferredRequestData<
        typeof descriptors.projectGetProjectMembership
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectGetProjectMembership,
          TStatus
        >;
    }

    namespace ProjectDeleteProjectMembership {
      type RequestData = InferredRequestData<
        typeof descriptors.projectDeleteProjectMembership
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectDeleteProjectMembership,
          TStatus
        >;
    }

    namespace ProjectUpdateProjectMembership {
      type RequestData = InferredRequestData<
        typeof descriptors.projectUpdateProjectMembership
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectUpdateProjectMembership,
          TStatus
        >;
    }

    namespace ProjectGetProject {
      type RequestData = InferredRequestData<
        typeof descriptors.projectGetProject
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.projectGetProject, TStatus>;
    }

    namespace ProjectDeleteProject {
      type RequestData = InferredRequestData<
        typeof descriptors.projectDeleteProject
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.projectDeleteProject, TStatus>;
    }

    namespace ProjectRequestServerAvatarUpload {
      type RequestData = InferredRequestData<
        typeof descriptors.projectRequestServerAvatarUpload
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectRequestServerAvatarUpload,
          TStatus
        >;
    }

    namespace ProjectDeleteServerAvatar {
      type RequestData = InferredRequestData<
        typeof descriptors.projectDeleteServerAvatar
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectDeleteServerAvatar,
          TStatus
        >;
    }

    namespace ProjectFileSystemGetDirectories {
      type RequestData = InferredRequestData<
        typeof descriptors.projectFileSystemGetDirectories
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectFileSystemGetDirectories,
          TStatus
        >;
    }

    namespace ProjectFileSystemGetDiskUsage {
      type RequestData = InferredRequestData<
        typeof descriptors.projectFileSystemGetDiskUsage
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectFileSystemGetDiskUsage,
          TStatus
        >;
    }

    namespace ProjectFileSystemGetFileContent {
      type RequestData = InferredRequestData<
        typeof descriptors.projectFileSystemGetFileContent
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectFileSystemGetFileContent,
          TStatus
        >;
    }

    namespace ProjectFileSystemGetJwt {
      type RequestData = InferredRequestData<
        typeof descriptors.projectFileSystemGetJwt
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectFileSystemGetJwt,
          TStatus
        >;
    }

    namespace ProjectFileSystemListFiles {
      type RequestData = InferredRequestData<
        typeof descriptors.projectFileSystemListFiles
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectFileSystemListFiles,
          TStatus
        >;
    }

    namespace ProjectGetLlmLicenceExperimental {
      type RequestData = InferredRequestData<
        typeof descriptors.projectGetLlmLicenceExperimental
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectGetLlmLicenceExperimental,
          TStatus
        >;
    }

    namespace ProjectUpdateLlmLicenceExperimental {
      type RequestData = InferredRequestData<
        typeof descriptors.projectUpdateLlmLicenceExperimental
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectUpdateLlmLicenceExperimental,
          TStatus
        >;
    }

    namespace ProjectGetProjectTokenInvite {
      type RequestData = InferredRequestData<
        typeof descriptors.projectGetProjectTokenInvite
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectGetProjectTokenInvite,
          TStatus
        >;
    }

    namespace ProjectGetSelfMembershipForProject {
      type RequestData = InferredRequestData<
        typeof descriptors.projectGetSelfMembershipForProject
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectGetSelfMembershipForProject,
          TStatus
        >;
    }

    namespace ProjectGetServer {
      type RequestData = InferredRequestData<
        typeof descriptors.projectGetServer
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.projectGetServer, TStatus>;
    }

    namespace ProjectListMembershipsForProject {
      type RequestData = InferredRequestData<
        typeof descriptors.projectListMembershipsForProject
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectListMembershipsForProject,
          TStatus
        >;
    }

    namespace ProjectListProjectInvites {
      type RequestData = InferredRequestData<
        typeof descriptors.projectListProjectInvites
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectListProjectInvites,
          TStatus
        >;
    }

    namespace ProjectListProjectMemberships {
      type RequestData = InferredRequestData<
        typeof descriptors.projectListProjectMemberships
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectListProjectMemberships,
          TStatus
        >;
    }

    namespace ProjectListProjects {
      type RequestData = InferredRequestData<
        typeof descriptors.projectListProjects
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.projectListProjects, TStatus>;
    }

    namespace ProjectListServers {
      type RequestData = InferredRequestData<
        typeof descriptors.projectListServers
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.projectListServers, TStatus>;
    }

    namespace ProjectResendProjectInviteMail {
      type RequestData = InferredRequestData<
        typeof descriptors.projectResendProjectInviteMail
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectResendProjectInviteMail,
          TStatus
        >;
    }

    namespace ProjectUpdateProjectDescription {
      type RequestData = InferredRequestData<
        typeof descriptors.projectUpdateProjectDescription
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectUpdateProjectDescription,
          TStatus
        >;
    }

    namespace ProjectUpdateServerDescription {
      type RequestData = InferredRequestData<
        typeof descriptors.projectUpdateServerDescription
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.projectUpdateServerDescription,
          TStatus
        >;
    }

    namespace RelocationCreateLegacyTariffChange {
      type RequestData = InferredRequestData<
        typeof descriptors.relocationCreateLegacyTariffChange
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.relocationCreateLegacyTariffChange,
          TStatus
        >;
    }

    namespace RelocationCreateRelocation {
      type RequestData = InferredRequestData<
        typeof descriptors.relocationCreateRelocation
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.relocationCreateRelocation,
          TStatus
        >;
    }

    namespace SftpUserListSftpUsers {
      type RequestData = InferredRequestData<
        typeof descriptors.sftpUserListSftpUsers
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.sftpUserListSftpUsers, TStatus>;
    }

    namespace SftpUserCreateSftpUser {
      type RequestData = InferredRequestData<
        typeof descriptors.sftpUserCreateSftpUser
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.sftpUserCreateSftpUser,
          TStatus
        >;
    }

    namespace SftpUserGetSftpUser {
      type RequestData = InferredRequestData<
        typeof descriptors.sftpUserGetSftpUser
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.sftpUserGetSftpUser, TStatus>;
    }

    namespace SftpUserDeleteSftpUser {
      type RequestData = InferredRequestData<
        typeof descriptors.sftpUserDeleteSftpUser
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.sftpUserDeleteSftpUser,
          TStatus
        >;
    }

    namespace SftpUserUpdateSftpUser {
      type RequestData = InferredRequestData<
        typeof descriptors.sftpUserUpdateSftpUser
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.sftpUserUpdateSftpUser,
          TStatus
        >;
    }

    namespace SshUserListSshUsers {
      type RequestData = InferredRequestData<
        typeof descriptors.sshUserListSshUsers
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.sshUserListSshUsers, TStatus>;
    }

    namespace SshUserCreateSshUser {
      type RequestData = InferredRequestData<
        typeof descriptors.sshUserCreateSshUser
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.sshUserCreateSshUser, TStatus>;
    }

    namespace SshUserGetSshUser {
      type RequestData = InferredRequestData<
        typeof descriptors.sshUserGetSshUser
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.sshUserGetSshUser, TStatus>;
    }

    namespace SshUserDeleteSshUser {
      type RequestData = InferredRequestData<
        typeof descriptors.sshUserDeleteSshUser
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.sshUserDeleteSshUser, TStatus>;
    }

    namespace SshUserUpdateSshUser {
      type RequestData = InferredRequestData<
        typeof descriptors.sshUserUpdateSshUser
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.sshUserUpdateSshUser, TStatus>;
    }

    namespace SslCheckReplaceCertificate {
      type RequestData = InferredRequestData<
        typeof descriptors.sslCheckReplaceCertificate
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.sslCheckReplaceCertificate,
          TStatus
        >;
    }

    namespace SslListCertificateRequests {
      type RequestData = InferredRequestData<
        typeof descriptors.sslListCertificateRequests
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.sslListCertificateRequests,
          TStatus
        >;
    }

    namespace SslCreateCertificateRequest {
      type RequestData = InferredRequestData<
        typeof descriptors.sslCreateCertificateRequest
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.sslCreateCertificateRequest,
          TStatus
        >;
    }

    namespace SslDeleteCertificateRequest {
      type RequestData = InferredRequestData<
        typeof descriptors.sslDeleteCertificateRequest
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.sslDeleteCertificateRequest,
          TStatus
        >;
    }

    namespace SslDeleteCertificate {
      type RequestData = InferredRequestData<
        typeof descriptors.sslDeleteCertificate
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.sslDeleteCertificate, TStatus>;
    }

    namespace SslGetCertificateRequest {
      type RequestData = InferredRequestData<
        typeof descriptors.sslGetCertificateRequest
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.sslGetCertificateRequest,
          TStatus
        >;
    }

    namespace SslGetCertificate {
      type RequestData = InferredRequestData<
        typeof descriptors.sslGetCertificate
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.sslGetCertificate, TStatus>;
    }

    namespace SslReplaceCertificate {
      type RequestData = InferredRequestData<
        typeof descriptors.sslReplaceCertificate
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.sslReplaceCertificate, TStatus>;
    }

    namespace SslListCertificates {
      type RequestData = InferredRequestData<
        typeof descriptors.sslListCertificates
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.sslListCertificates, TStatus>;
    }

    namespace SslSetCertificateRequestCertificate {
      type RequestData = InferredRequestData<
        typeof descriptors.sslSetCertificateRequestCertificate
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.sslSetCertificateRequestCertificate,
          TStatus
        >;
    }

    namespace StoragespaceGetProjectStatistics {
      type RequestData = InferredRequestData<
        typeof descriptors.storagespaceGetProjectStatistics
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.storagespaceGetProjectStatistics,
          TStatus
        >;
    }

    namespace StoragespaceGetServerStatistics {
      type RequestData = InferredRequestData<
        typeof descriptors.storagespaceGetServerStatistics
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.storagespaceGetServerStatistics,
          TStatus
        >;
    }

    namespace StoragespaceReplaceProjectNotificationThreshold {
      type RequestData = InferredRequestData<
        typeof descriptors.storagespaceReplaceProjectNotificationThreshold
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.storagespaceReplaceProjectNotificationThreshold,
          TStatus
        >;
    }

    namespace StoragespaceReplaceServerNotificationThreshold {
      type RequestData = InferredRequestData<
        typeof descriptors.storagespaceReplaceServerNotificationThreshold
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.storagespaceReplaceServerNotificationThreshold,
          TStatus
        >;
    }

    namespace UserAddPhoneNumber {
      type RequestData = InferredRequestData<
        typeof descriptors.userAddPhoneNumber
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userAddPhoneNumber, TStatus>;
    }

    namespace UserRemovePhoneNumber {
      type RequestData = InferredRequestData<
        typeof descriptors.userRemovePhoneNumber
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userRemovePhoneNumber, TStatus>;
    }

    namespace UserAuthenticateMfa {
      type RequestData = InferredRequestData<
        typeof descriptors.userAuthenticateMfa
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userAuthenticateMfa, TStatus>;
    }

    namespace UserAuthenticate {
      type RequestData = InferredRequestData<
        typeof descriptors.userAuthenticate
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userAuthenticate, TStatus>;
    }

    namespace UserAuthenticateWithAccessTokenRetrievalKey {
      type RequestData = InferredRequestData<
        typeof descriptors.userAuthenticateWithAccessTokenRetrievalKey
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.userAuthenticateWithAccessTokenRetrievalKey,
          TStatus
        >;
    }

    namespace UserGetOwnEmail {
      type RequestData = InferredRequestData<
        typeof descriptors.userGetOwnEmail
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userGetOwnEmail, TStatus>;
    }

    namespace UserChangeEmail {
      type RequestData = InferredRequestData<
        typeof descriptors.userChangeEmail
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userChangeEmail, TStatus>;
    }

    namespace UserChangePassword {
      type RequestData = InferredRequestData<
        typeof descriptors.userChangePassword
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userChangePassword, TStatus>;
    }

    namespace UserCheckToken {
      type RequestData = InferredRequestData<typeof descriptors.userCheckToken>;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userCheckToken, TStatus>;
    }

    namespace UserGetMfaStatus {
      type RequestData = InferredRequestData<
        typeof descriptors.userGetMfaStatus
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userGetMfaStatus, TStatus>;
    }

    namespace UserResetRecoverycodes {
      type RequestData = InferredRequestData<
        typeof descriptors.userResetRecoverycodes
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.userResetRecoverycodes,
          TStatus
        >;
    }

    namespace UserConfirmMfa {
      type RequestData = InferredRequestData<typeof descriptors.userConfirmMfa>;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userConfirmMfa, TStatus>;
    }

    namespace UserDisableMfa {
      type RequestData = InferredRequestData<typeof descriptors.userDisableMfa>;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userDisableMfa, TStatus>;
    }

    namespace UserConfirmPasswordReset {
      type RequestData = InferredRequestData<
        typeof descriptors.userConfirmPasswordReset
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.userConfirmPasswordReset,
          TStatus
        >;
    }

    namespace UserListApiTokens {
      type RequestData = InferredRequestData<
        typeof descriptors.userListApiTokens
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userListApiTokens, TStatus>;
    }

    namespace UserCreateApiToken {
      type RequestData = InferredRequestData<
        typeof descriptors.userCreateApiToken
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userCreateApiToken, TStatus>;
    }

    namespace UserCreateFeedback {
      type RequestData = InferredRequestData<
        typeof descriptors.userCreateFeedback
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userCreateFeedback, TStatus>;
    }

    namespace UserListSshKeys {
      type RequestData = InferredRequestData<
        typeof descriptors.userListSshKeys
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userListSshKeys, TStatus>;
    }

    namespace UserCreateSshKey {
      type RequestData = InferredRequestData<
        typeof descriptors.userCreateSshKey
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userCreateSshKey, TStatus>;
    }

    namespace UserGetApiToken {
      type RequestData = InferredRequestData<
        typeof descriptors.userGetApiToken
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userGetApiToken, TStatus>;
    }

    namespace UserEditApiToken {
      type RequestData = InferredRequestData<
        typeof descriptors.userEditApiToken
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userEditApiToken, TStatus>;
    }

    namespace UserDeleteApiToken {
      type RequestData = InferredRequestData<
        typeof descriptors.userDeleteApiToken
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userDeleteApiToken, TStatus>;
    }

    namespace UserGetSshKey {
      type RequestData = InferredRequestData<typeof descriptors.userGetSshKey>;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userGetSshKey, TStatus>;
    }

    namespace UserEditSshKey {
      type RequestData = InferredRequestData<typeof descriptors.userEditSshKey>;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userEditSshKey, TStatus>;
    }

    namespace UserDeleteSshKey {
      type RequestData = InferredRequestData<
        typeof descriptors.userDeleteSshKey
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userDeleteSshKey, TStatus>;
    }

    namespace UserDeleteUser {
      type RequestData = InferredRequestData<typeof descriptors.userDeleteUser>;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userDeleteUser, TStatus>;
    }

    namespace UserGetPasswordUpdatedAt {
      type RequestData = InferredRequestData<
        typeof descriptors.userGetPasswordUpdatedAt
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.userGetPasswordUpdatedAt,
          TStatus
        >;
    }

    namespace UserGetPersonalizedSettings {
      type RequestData = InferredRequestData<
        typeof descriptors.userGetPersonalizedSettings
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.userGetPersonalizedSettings,
          TStatus
        >;
    }

    namespace UserUpdatePersonalizedSettings {
      type RequestData = InferredRequestData<
        typeof descriptors.userUpdatePersonalizedSettings
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.userUpdatePersonalizedSettings,
          TStatus
        >;
    }

    namespace UserGetPollStatus {
      type RequestData = InferredRequestData<
        typeof descriptors.userGetPollStatus
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userGetPollStatus, TStatus>;
    }

    namespace UserPostPollStatus {
      type RequestData = InferredRequestData<
        typeof descriptors.userPostPollStatus
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userPostPollStatus, TStatus>;
    }

    namespace UserGetSession {
      type RequestData = InferredRequestData<typeof descriptors.userGetSession>;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userGetSession, TStatus>;
    }

    namespace UserTerminateSession {
      type RequestData = InferredRequestData<
        typeof descriptors.userTerminateSession
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userTerminateSession, TStatus>;
    }

    namespace UserGetUser {
      type RequestData = InferredRequestData<typeof descriptors.userGetUser>;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userGetUser, TStatus>;
    }

    namespace UserUpdatePersonalInformation {
      type RequestData = InferredRequestData<
        typeof descriptors.userUpdatePersonalInformation
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.userUpdatePersonalInformation,
          TStatus
        >;
    }

    namespace UserInitMfa {
      type RequestData = InferredRequestData<typeof descriptors.userInitMfa>;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userInitMfa, TStatus>;
    }

    namespace UserInitPasswordReset {
      type RequestData = InferredRequestData<
        typeof descriptors.userInitPasswordReset
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userInitPasswordReset, TStatus>;
    }

    namespace UserListFeedback {
      type RequestData = InferredRequestData<
        typeof descriptors.userListFeedback
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userListFeedback, TStatus>;
    }

    namespace UserListSessions {
      type RequestData = InferredRequestData<
        typeof descriptors.userListSessions
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userListSessions, TStatus>;
    }

    namespace UserRefreshSession {
      type RequestData = InferredRequestData<
        typeof descriptors.userRefreshSession
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userRefreshSession, TStatus>;
    }

    namespace UserTerminateAllSessions {
      type RequestData = InferredRequestData<
        typeof descriptors.userTerminateAllSessions
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.userTerminateAllSessions,
          TStatus
        >;
    }

    namespace UserLogout {
      type RequestData = InferredRequestData<typeof descriptors.userLogout>;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userLogout, TStatus>;
    }

    namespace UserOauthGetAuthorization {
      type RequestData = InferredRequestData<
        typeof descriptors.userOauthGetAuthorization
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.userOauthGetAuthorization,
          TStatus
        >;
    }

    namespace UserOauthRetrieveAccessToken {
      type RequestData = InferredRequestData<
        typeof descriptors.userOauthRetrieveAccessToken
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.userOauthRetrieveAccessToken,
          TStatus
        >;
    }

    namespace UserRegister {
      type RequestData = InferredRequestData<typeof descriptors.userRegister>;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userRegister, TStatus>;
    }

    namespace UserRequestAvatarUpload {
      type RequestData = InferredRequestData<
        typeof descriptors.userRequestAvatarUpload
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.userRequestAvatarUpload,
          TStatus
        >;
    }

    namespace UserRemoveAvatar {
      type RequestData = InferredRequestData<
        typeof descriptors.userRemoveAvatar
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userRemoveAvatar, TStatus>;
    }

    namespace UserResendVerificationEmail {
      type RequestData = InferredRequestData<
        typeof descriptors.userResendVerificationEmail
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.userResendVerificationEmail,
          TStatus
        >;
    }

    namespace UserSupportCodeRequest {
      type RequestData = InferredRequestData<
        typeof descriptors.userSupportCodeRequest
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.userSupportCodeRequest,
          TStatus
        >;
    }

    namespace UserVerifyEmail {
      type RequestData = InferredRequestData<
        typeof descriptors.userVerifyEmail
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userVerifyEmail, TStatus>;
    }

    namespace UserVerifyPhoneNumber {
      type RequestData = InferredRequestData<
        typeof descriptors.userVerifyPhoneNumber
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<typeof descriptors.userVerifyPhoneNumber, TStatus>;
    }

    namespace UserVerifyRegistration {
      type RequestData = InferredRequestData<
        typeof descriptors.userVerifyRegistration
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.userVerifyRegistration,
          TStatus
        >;
    }

    namespace VerificationDetectPhishingEmail {
      type RequestData = InferredRequestData<
        typeof descriptors.verificationDetectPhishingEmail
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.verificationDetectPhishingEmail,
          TStatus
        >;
    }

    namespace VerificationVerifyAddress {
      type RequestData = InferredRequestData<
        typeof descriptors.verificationVerifyAddress
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.verificationVerifyAddress,
          TStatus
        >;
    }

    namespace VerificationVerifyCompany {
      type RequestData = InferredRequestData<
        typeof descriptors.verificationVerifyCompany
      >;
      type ResponseData<TStatus extends HttpStatus = 200> =
        InferredResponseData<
          typeof descriptors.verificationVerifyCompany,
          TStatus
        >;
    }
  }

  namespace Components {
    namespace Schemas {
      /**
       * An Action is a string that describes a runtime concerning action which can be executed on an AppInstallation or an  App  can be capable of.
       */
      export type AppAction = "start" | "stop" | "restart";

      export type AppActionCapabilities =
        MittwaldAPIV2.Components.Schemas.AppAction[];

      /**
       * An App is to be understood as a manifest for AppInstallations. E.g. 'WordPress' only exists inside our ecosystem, because there is an  App -Manifest for it.
       */
      export interface AppApp {
        actionCapabilities?: MittwaldAPIV2.Components.Schemas.AppActionCapabilities;
        id: string;
        name: string;
        tags: string[];
      }

      /**
       * AppInstallationStatus describes the overall runtime status of an AppInstallation.
       */
      export interface AppAppInstallationStatus {
        lastExitCode?: number;
        logFileLocation: string;
        state: "running" | "stopped" | "exited";
        uptimeSeconds?: number;
      }

      export interface AppAppJobImage {
        imageTemplate: string;
      }

      export interface AppAppJobImages {
        reconfigureImage: MittwaldAPIV2.Components.Schemas.AppAppJobImage;
        setupImage: MittwaldAPIV2.Components.Schemas.AppAppJobImage;
        uninstallImage: MittwaldAPIV2.Components.Schemas.AppAppJobImage;
        upgradeImage: MittwaldAPIV2.Components.Schemas.AppAppJobImage;
      }

      /**
       * LockPurpose describes why a given AppInstallation is locked from deletion.
       */
      export type AppLockPurpose = "unspecified" | "copy";

      /**
       * AppUpdatePolicy describes which updates should be applied automatically by our systems.
       */
      export type AppAppUpdatePolicy = "none" | "patchLevel" | "all";

      /**
       * An AppInstallation is a concrete manifestation of an App in a specific AppVersion.
       */
      export interface AppAppInstallation {
        appId: string;
        appVersion: MittwaldAPIV2.Components.Schemas.AppVersionStatus;
        createdAt: string;
        customDocumentRoot?: string;
        description: string;
        disabled: boolean;
        id: string;
        installationPath: string;
        linkedDatabases: MittwaldAPIV2.Components.Schemas.AppLinkedDatabase[];
        lockedBy?: {
          [k: string]: MittwaldAPIV2.Components.Schemas.AppLockPurpose;
        };
        projectId: string;
        screenshotId?: string;
        screenshotRef?: string;
        shortId: string;
        systemSoftware: MittwaldAPIV2.Components.Schemas.AppInstalledSystemSoftware[];
        updatePolicy: MittwaldAPIV2.Components.Schemas.AppAppUpdatePolicy;
        userInputs: MittwaldAPIV2.Components.Schemas.AppSavedUserInput[];
      }

      /**
       * The AppInstallationLifecycle can be used to express a specific point in the AppInstallation Lifecycle, e.g. while installing a new AppInstallation.
       */
      export type AppAppInstallationLifecycle =
        | "installation"
        | "update"
        | "reconfigure";

      /**
       * An AppVersion is an officially supported version of an App, containing the necessary and recommended configuration und dependencies.
       */
      export interface AppAppVersion {
        appId: string;
        backendPathTemplate?: string;
        breakingNote?: MittwaldAPIV2.Components.Schemas.AppBreakingNote;
        databases?: MittwaldAPIV2.Components.Schemas.AppDatabaseDependency[];
        docRoot: string;
        docRootUserEditable: boolean;
        externalVersion: string;
        id: string;
        internalVersion: string;
        recommended?: boolean;
        requestHandler?: MittwaldAPIV2.Components.Schemas.AppRequestHandlerRequirement;
        systemSoftwareDependencies?: MittwaldAPIV2.Components.Schemas.AppSystemSoftwareDependency[];
        userInputs?: MittwaldAPIV2.Components.Schemas.AppUserInput[];
      }

      /**
       * A BreakingNote is a hint that something serious has changed in the AppVersion containing it, so an automatic update is not possible.
       */
      export interface AppBreakingNote {
        faqLink: string;
      }

      /**
       * A DatabaseDependency is a generic description of need for a database, used by AppVersions.
       */
      export interface AppDatabaseDependency {
        description: string;
        kind: "mysql";
        parameters?: {
          [k: string]: string;
        };
        version: string;
      }

      export interface AppError {
        message: string;
        type: string;
      }

      /**
       * InstalledSystemSoftware describes the currently configured and installed SystemSoftwareVersion of a SystemSoftware besides the desired SystemSoftwareUpdatePolicy inside an AppInstallation.
       */
      export interface AppInstalledSystemSoftware {
        systemSoftwareId: string;
        systemSoftwareVersion: MittwaldAPIV2.Components.Schemas.AppVersionStatus;
        updatePolicy: MittwaldAPIV2.Components.Schemas.AppSystemSoftwareUpdatePolicy;
      }

      /**
       * LinkedDatabase is a reference to a concrete Database and DatabaseUsers.
       */
      export interface AppLinkedDatabase {
        databaseId: string;
        databaseUserIds?: {
          [k: string]: string;
        };
        kind: "mysql" | "redis";
        purpose: "primary" | "cache" | "custom";
      }

      /**
       * RequestHandlerRequirement describes the necessary properties to internally resolve the request handler or process to start.
       */
      export interface AppRequestHandlerRequirement {
        exampleValues?: MittwaldAPIV2.Components.Schemas.AppSavedUserInput[];
        name: string;
        namespace: string;
        parametersTemplate: string;
      }

      /**
       * A SavedUserInput is an entered value for a desired UserInput of an AppVersion or SystemSoftwareVersion.
       */
      export interface AppSavedUserInput {
        name: string;
        value: string;
      }

      /**
       * A SystemSoftwareDependency is a description of a need for a specific SystemSoftware in a semver versionRange.
       */
      export interface AppSystemSoftwareDependency {
        systemSoftwareId: string;
        versionRange: string;
      }

      /**
       * SystemSoftwareUpdatePolicy describes which updates should be applied automatically by our systems.
       */
      export type AppSystemSoftwareUpdatePolicy =
        | "none"
        | "inheritedFromApp"
        | "patchLevel"
        | "all";

      /**
       * A SystemSoftware is a software that can be installed for an AppInstallation but mostly is not itself externally reachable and/or deliverable.
       */
      export interface AppSystemSoftware {
        id: string;
        meta?: {
          [k: string]: string;
        };
        name: string;
        tags: string[];
      }

      /**
       * A SystemSoftwareVersion is an officially  supported version of a SystemSoftware, containing the necessary and recommended configuration und dependencies.
       */
      export interface AppSystemSoftwareVersion {
        expiryDate?: string;
        externalVersion: string;
        fee?: MittwaldAPIV2.Components.Schemas.FeeFeeStrategy;
        id: string;
        internalVersion: string;
        recommended?: boolean;
        systemSoftwareDependencies?: MittwaldAPIV2.Components.Schemas.AppSystemSoftwareDependency[];
        userInputs?: MittwaldAPIV2.Components.Schemas.AppUserInput[];
      }

      /**
       * A UserInput is a description of an information which cannot be determined or estimated by mittwald, but has to be given by the person who is requesting an AppInstallation or SystemSoftware.
       */
      export interface AppUserInput {
        additionalValidationSchema?: MittwaldAPIV2.Components.Schemas.AppAdditionalValidationSchema;
        /**
         * Optional field to tell the frontend, which data to put into the select.
         */
        dataSource?: string;
        dataType: MittwaldAPIV2.Components.Schemas.AppUserInputDataType;
        defaultValue?: string;
        format?: MittwaldAPIV2.Components.Schemas.AppUserInputFormat;
        lifecycleConstraint: MittwaldAPIV2.Components.Schemas.AppAppInstallationLifecycle;
        name: string;
        positionMeta?: MittwaldAPIV2.Components.Schemas.AppUserInputPositionMeta;
        required: boolean;
        /**
         * JSON Schema formatted (https://json-schema.org/).
         */
        validationSchema: string;
      }

      /**
       * UserInputDataType is an enum, describing the possible data types of a UserInput.
       */
      export type AppUserInputDataType =
        | "text"
        | "number"
        | "boolean"
        | "select";

      /**
       * UserInputFormat is an enum, describing the possible data formats of a UserInput, the given values can be validated against.
       */
      export type AppUserInputFormat = "email" | "password" | "url" | "uri";

      /**
       * UserInputPositionMeta is a utility information, helping to position the UserInput properly on the frontend.
       */
      export interface AppUserInputPositionMeta {
        index?: number;
        section?: string;
        step?: string;
      }

      /**
       * VersionStatus describes the current and desired version of something like the AppVersion of an AppInstallation. If diverging, an internal process is going to assert, the current value will be aligned.
       */
      export interface AppVersionStatus {
        current?: string;
        desired: string;
      }

      export type BackupRestorePathPhase = "running" | "completed";

      export type BackupBackupSortOrder = "oldestFirst" | "newestFirst";

      export interface BackupBackupTemplate {
        expirationTime: string;
        ignoredSources?: MittwaldAPIV2.Components.Schemas.BackupIgnoredSources;
      }

      export interface BackupDatabaseReference {
        kind: string;
        name: string;
      }

      export interface BackupIgnoredSources {
        databases?: MittwaldAPIV2.Components.Schemas.BackupDatabaseReference[];
        files: boolean;
      }

      export interface BackupProjectBackup {
        createdAt?: string;
        deletable: boolean;
        description?: string;
        expiresAt?: string;
        export?: MittwaldAPIV2.Components.Schemas.BackupProjectBackupExport;
        id: string;
        parentId?: string;
        projectId: string;
        requestedAt: string;
        restorePath?: MittwaldAPIV2.Components.Schemas.BackupProjectBackupRestorePathResponse;
        status: string;
      }

      export interface BackupProjectBackupExport {
        downloadURL?: string;
        expiresAt?: string;
        format: string;
        phase?:
          | ""
          | "Pending"
          | "Exporting"
          | "Failed"
          | "Completed"
          | "Expired";
        sha256Checksum?: string;
        withPassword: boolean;
      }

      export interface BackupProjectBackupRestorePath {
        /**
         * Whether to clear the target path before restoring. If true, existing files in the target path will be deleted before the restore. If false, existing files will be kept and may be overwritten if they exist in the backup.
         */
        clearTargetPath?: boolean;
        /**
         * Source path within the backup to restore from. If not set, it will be determined as '/home/p-shortid/html' as it's originally sourced from there.
         */
        sourcePath?: string;
        /**
         * Target path where the backup should be restored to. If not set, equaled source path with adjusted path mapping. The target path will be determined to equal the origin source, e.g. '/data-p-shortid-userdata/p-shortid/web' will be determined as '/home/p-shortid/html' as it's originally sourced from there.
         */
        targetPath?: string;
      }

      export interface BackupProjectBackupRestorePathResponse {
        clearTargetPath?: boolean;
        determinedSourcePath: string;
        determinedTargetPath: string;
        phase: MittwaldAPIV2.Components.Schemas.BackupRestorePathPhase;
        sourcePath?: string;
        targetPath?: string;
      }

      export interface BackupProjectBackupSchedule {
        createdAt?: string;
        /**
         * Description of this ProjectBackupSchedule.
         */
        description?: string;
        /**
         * ID of this ProjectBackupSchedule.
         */
        id: string;
        /**
         * True if this ProjectBackupSchedule was created and is managed by mittwald.
         */
        isSystemBackup: boolean;
        /**
         * ID of the Project this ProjectBackupSchedule belongs to.
         */
        projectId: string;
        /**
         * Execution schedule in crontab notation.
         */
        schedule: string;
        /**
         * TTL of the ProjectBackupSchedule as time string.
         */
        ttl?: string;
        updatedAt?: string;
      }

      export interface BackupProjectBackupTOC {
        absolutePath: string;
        isDirectory?: boolean;
        isExecutable?: boolean;
        isFile?: boolean;
        isSymlink?: boolean;
        items?: MittwaldAPIV2.Components.Schemas.BackupProjectBackupTOC[];
        name: string;
        size: number;
        target?: string;
      }

      /**
       * The Extension Instance Contract.
       */
      export type ExtensionExtensionInstanceContract =
        MittwaldAPIV2.Components.Schemas.ExtensionSubscriptionBasedContract;

      /**
       * A strategy for Contracts that will be paid periodically.
       */
      export interface ExtensionSubscriptionBasedContract {
        /**
         * monthly price in Euro Cent
         */
        currentPrice?: number;
        interactionDeadline?: string;
        interactionRequired: boolean;
        status: "notStarted" | "pending" | "active" | "terminationPending";
        terminationTargetDate?: string;
      }

      export interface ContainerCreateRegistry {
        credentials?: MittwaldAPIV2.Components.Schemas.ContainerSetRegistryCredentials;
        description: string;
        uri: string;
      }

      export interface ContainerContainerImageConfig {
        /**
         * Command of the container image.
         */
        command?: string[];
        /**
         * Entrypoint of the container image.
         */
        entrypoint?: string[];
        /**
         * List of environment variables the container image has.
         */
        env?: MittwaldAPIV2.Components.Schemas.ContainerContainerImageConfigEnv[];
        /**
         * List of exposed ports the container image has.
         */
        exposedPorts?: MittwaldAPIV2.Components.Schemas.ContainerContainerImageConfigExposedPort[];
        /**
         * Whether the image config has ai generated data.
         */
        hasAiGeneratedData: boolean;
        /**
         * Whether ai generation is available for the image reference.
         */
        isAiAvailable: boolean;
        /**
         * Whether the container user is root.
         */
        isUserRoot: boolean;
        /**
         * @deprecated
         * Deprecated, user will never be overwritten.
         */
        overwritingUser?: number;
        /**
         * The user the container image is running with.
         */
        user: string;
        /**
         * The user id the container image is running with.
         */
        userId: number;
        /**
         * List of volumes the container image has.
         */
        volumes?: MittwaldAPIV2.Components.Schemas.ContainerContainerImageConfigVolume[];
      }

      export interface ContainerContainerImageConfigEnv {
        /**
         * The description of the env key.
         */
        description?: string;
        /**
         * Whether the env has been ai generated.
         */
        isAiGenerated: boolean;
        /**
         * Whether the env key is a sensitive field, e.g. password fields.
         */
        isSensitive?: boolean;
        /**
         * The env key.
         */
        key: string;
        /**
         * The env default value.
         */
        value?: string;
      }

      export interface ContainerContainerImageConfigExposedPort {
        /**
         * The description of the exposed port.
         */
        description?: string;
        /**
         * Whether the port has been ai generated.
         */
        isAiGenerated: boolean;
        /**
         * The exposed port.
         */
        port: string;
      }

      export interface ContainerContainerImageConfigVolume {
        /**
         * The description of the volume path.
         */
        description?: string;
        /**
         * Whether the volume has been ai generated.
         */
        isAiGenerated: boolean;
        /**
         * The volume path.
         */
        volume: string;
      }

      export interface ContainerRegistry {
        credentials?: MittwaldAPIV2.Components.Schemas.ContainerRegistryCredentials;
        description: string;
        id: string;
        projectId: string;
        uri: string;
      }

      export interface ContainerRegistryCredentials {
        /**
         * Your registry username.
         */
        username: string;
        /**
         * Status of the credentials.
         */
        valid: boolean;
      }

      export interface ContainerServiceDeclareRequest {
        /**
         * Defaults to image config on empty
         */
        command?: string[];
        description?: string;
        /**
         * Defaults to image config on empty
         */
        entrypoint?: string[];
        environment?: {
          [k: string]: string;
        };
        /**
         * @deprecated
         * DEPRECATED: Use 'environment' instead. This field will be removed in a future version.
         */
        envs?: {
          [k: string]: string;
        };
        image: string;
        ports?: string[];
        volumes?: string[];
      }

      export interface ContainerServiceRequest {
        /**
         * Defaults to image config on empty
         */
        command?: string[];
        description?: string;
        /**
         * Defaults to image config on empty
         */
        entrypoint?: string[];
        environment?: {
          [k: string]: string;
        };
        /**
         * @deprecated
         * Deprecated by 'environment'. This field will be removed in a future version.
         */
        envs?: {
          [k: string]: string;
        };
        image?: string;
        ports?: string[];
        volumes?: string[];
      }

      export interface ContainerServiceResponse {
        deployedState: MittwaldAPIV2.Components.Schemas.ContainerServiceState;
        description: string;
        id: string;
        message?: string;
        pendingState: MittwaldAPIV2.Components.Schemas.ContainerServiceState;
        projectId: string;
        requiresRecreate: boolean;
        serviceName: string;
        shortId: string;
        stackId: string;
        status: MittwaldAPIV2.Components.Schemas.ContainerServiceStatus;
        statusSetAt: string;
      }

      export interface ContainerServiceState {
        command?: string[];
        entrypoint?: string[];
        envs?: {
          [k: string]: string;
        };
        image: string;
        imageDigest?: string;
        ports?: string[];
        volumes?: string[];
      }

      export type ContainerServiceStatus =
        | "running"
        | "stopped"
        | "restarting"
        | "error"
        | "creating"
        | "starting";

      export interface ContainerSetRegistryCredentials {
        /**
         * Your registry password or access token.
         */
        password: string;
        /**
         * Your registry username, use 'oauth2accesstoken' for access token authentication.
         */
        username: string;
      }

      export type ContainerServiceSortOrder =
        | "descriptionAsc"
        | "descriptionDesc";

      export interface ContainerStackResponse {
        description: string;
        disabled: boolean;
        id: string;
        /**
         * Prefix for all service-names in this stack.
         */
        prefix: string;
        projectId: string;
        services?: MittwaldAPIV2.Components.Schemas.ContainerServiceResponse[];
        volumes?: MittwaldAPIV2.Components.Schemas.ContainerVolumeResponse[];
      }

      export interface ContainerUpdateRegistry {
        credentials?: MittwaldAPIV2.Components.Schemas.ContainerSetRegistryCredentials | null;
        description?: string;
        uri?: string;
      }

      export interface ContainerVolumeDeclareRequest {
        name: string;
      }

      export interface ContainerVolumeRequest {
        name?: string;
      }

      export interface ContainerVolumeResponse {
        id: string;
        linkedServices?: string[];
        name: string;
        /**
         * Whether the Volume is attached to a Stack.
         */
        orphaned: boolean;
        stackId: string;
        storageUsageInBytes: number;
        storageUsageInBytesSetAt: string;
      }

      export interface ContractAggregateReference {
        aggregate: string;
        domain: string;
        id: string;
      }

      export interface ContractArticle {
        amount: number;
        articleTemplateId: string;
        description?: string;
        id: string;
        name: string;
        unitPrice: MittwaldAPIV2.Components.Schemas.ContractPrice;
      }

      export interface ContractContact {
        address: MittwaldAPIV2.Components.Schemas.CommonsAddress;
        company?: string;
        emailAddress?: string;
        firstName?: string;
        lastName?: string;
        phoneNumbers?: string[];
        salutation: MittwaldAPIV2.Components.Schemas.CommonsSalutation;
        title?: string;
        useFormalTerm?: boolean;
      }

      export interface ContractContractItem {
        activationDate?: string;
        aggregateReference?: MittwaldAPIV2.Components.Schemas.ContractAggregateReference;
        articles: MittwaldAPIV2.Components.Schemas.ContractArticle[];
        contractPeriod: number;
        description: string;
        freeTrialDays?: number;
        groupByProjectId?: string;
        /**
         * If this attribute is set, the contract item will currently only be invoiced until this date.
         */
        invoiceStop?: string;
        invoicingPeriod?: number;
        isActivated: boolean;
        isBaseItem: boolean;
        isInFreeTrial?: boolean;
        isInclusive?: boolean;
        itemId: string;
        /**
         * If this attribute is not set, termination is not allowed.
         */
        nextPossibleDowngradeDate?: string;
        /**
         * If this attribute is not set, a tariff change is not allowed.
         */
        nextPossibleTerminationDate?: string;
        /**
         * If this attribute is not set, a tariff change is not allowed.
         */
        nextPossibleUpgradeDate?: string;
        orderDate?: string;
        orderId?: string;
        replacedByItem?: string;
        tariffChange?: MittwaldAPIV2.Components.Schemas.ContractTariffChange;
        termination?: MittwaldAPIV2.Components.Schemas.ContractTermination;
        totalPrice: MittwaldAPIV2.Components.Schemas.ContractPrice;
      }

      export interface ContractContract {
        additionalItems?: MittwaldAPIV2.Components.Schemas.ContractContractItem[];
        baseItem: MittwaldAPIV2.Components.Schemas.ContractContractItem;
        contractId: string;
        contractNumber: string;
        customerId: string;
        termination?: MittwaldAPIV2.Components.Schemas.ContractTermination;
      }

      export interface ContractError {
        message: string;
        type: string;
      }

      export interface ContractPrice {
        currency: "EUR";
        /**
         * The value of the price in the smallest currency unit (e.g. cents)
         */
        value: number;
      }

      export interface ContractTariffChange {
        newArticles: MittwaldAPIV2.Components.Schemas.ContractArticle[];
        scheduledAtDate: string;
        scheduledByUserId?: string;
        targetDate: string;
      }

      export interface ContractTermination {
        /**
         * Indicates whether the User is allowed to cancel the Termination.
         */
        cancellationForbidden?: boolean;
        reason?: string;
        scheduledAtDate: string;
        scheduledByUserId?: string;
        targetDate: string;
      }

      export interface ConversationAggregateReference {
        aggregate: string;
        domain: string;
        id: string;
      }

      export type ConversationCategoryReferenceType = (
        | "unspecified"
        | "server"
        | "project"
        | "organisation"
        | "extensionInstance"
      )[];

      export interface ConversationCategory {
        categoryId: string;
        name: string;
        referenceType: MittwaldAPIV2.Components.Schemas.ConversationCategoryReferenceType;
      }

      export type ConversationConversationMembers =
        (MittwaldAPIV2.Components.Schemas.ConversationUser & {
          active: boolean;
        })[];

      export interface ConversationConversationPreferences {
        customerId: string;
        preferredUsers: {
          categoryUserPairs?: {
            [k: string]: string;
          };
          fallback?: string;
        };
      }

      export interface ConversationConversation {
        category?: MittwaldAPIV2.Components.Schemas.ConversationCategory;
        conversationId: string;
        createdAt: string;
        createdBy?: MittwaldAPIV2.Components.Schemas.ConversationUser;
        lastMessage?: {
          createdAt: string;
          createdBy?: MittwaldAPIV2.Components.Schemas.ConversationUser;
        };
        lastMessageAt?: string;
        lastMessageBy?: MittwaldAPIV2.Components.Schemas.ConversationUser;
        mainUser: MittwaldAPIV2.Components.Schemas.ConversationUser;
        notificationRoles?: MittwaldAPIV2.Components.Schemas.ConversationNotificationRole[];
        relatedTo?: MittwaldAPIV2.Components.Schemas.ConversationRelatedAggregateReference;
        relations?: MittwaldAPIV2.Components.Schemas.ConversationAggregateReference[];
        sharedWith?: MittwaldAPIV2.Components.Schemas.ConversationShareableAggregateReference;
        shortId: string;
        status: MittwaldAPIV2.Components.Schemas.ConversationStatus;
        title: string;
        visibility: "shared" | "private";
      }

      export interface ConversationGetConversationIdResponse {
        conversationId: string;
        shortId: string;
      }

      export type ConversationDepartment =
        | "development"
        | "mail"
        | "accounting"
        | "cloudHosting"
        | "customerService"
        | "productManagement"
        | "generic";

      export interface ConversationError {
        message: string;
        type: string;
      }

      export interface ConversationDeletedFile {
        deletionDate: string;
        id: string;
        name: string;
        status: "deleted";
        type: string;
      }

      export interface ConversationRequestedFile {
        id: string;
        status: "requested";
      }

      export type ConversationFile =
        | MittwaldAPIV2.Components.Schemas.ConversationRequestedFile
        | MittwaldAPIV2.Components.Schemas.ConversationUploadedFile
        | MittwaldAPIV2.Components.Schemas.ConversationDeletedFile;

      export interface ConversationUploadedFile {
        id: string;
        name: string;
        status: "uploaded";
        type: string;
      }

      export interface ConversationMessage {
        conversationId: string;
        createdAt: string;
        createdBy?: MittwaldAPIV2.Components.Schemas.ConversationUser;
        files?: MittwaldAPIV2.Components.Schemas.ConversationFile[];
        internal?: boolean;
        messageContent?: string;
        messageId: string;
        type: "MESSAGE";
      }

      export type ConversationNotificationRole =
        | "customer_owner"
        | "customer_accountant"
        | "customer_member"
        | "project_owner"
        | "project_emailadmin"
        | "project_external";

      export type ConversationRelatedAggregateReference =
        | {
            aggregate: "user";
            domain: "user";
            id: string;
          }
        | {
            aggregate: "customer";
            domain: "customer";
            id: string;
          }
        | {
            aggregate: "project";
            domain: "project";
            id: string;
          }
        | {
            aggregate: "appinstallation";
            domain: "app";
            id: string;
          }
        | {
            aggregate: "placementgroup";
            domain: "project";
            id: string;
          }
        | {
            aggregate: "extensionInstance";
            domain: "extension";
            id: string;
          }
        | {
            aggregate: "container";
            domain: "container";
            id: string;
          };

      export interface ConversationServiceRequestRelocationPayload {
        contact: {
          email: string;
          firstname: string;
          lastname: string;
          phone?: string;
        };
        domain?: {
          allDomains?: boolean;
          domains?: {
            authCode?: string;
            domainName?: string;
          }[];
        };
        notes?: string;
        preferredRelocationDate?: string;
        redirectusKey: number;
        source: {
          providerName: string;
          providerPassword: string;
          providerUrl: string;
          providerUsername: string;
          sourceAccount: string;
        };
        target: {
          accountShortId: string;
          application?: string;
          articleType: string;
          organisation: string;
          prices?: {
            name?: string;
            price?: number;
          }[];
          product: string;
          withDataCompare?: boolean;
        };
        userId: string;
      }

      export interface ConversationServiceRequest {
        conversationId: string;
        createdAt: string;
        /**
         * @maxItems 0
         */
        files?: [];
        internal: boolean;
        messageContent: "relocation" | "call";
        messageId: string;
        meta: MittwaldAPIV2.Components.Schemas.ConversationServiceRequestRelocationPayload;
        type: "SERVICE_REQUEST";
      }

      export type ConversationShareableAggregateReference =
        | {
            aggregate: "user";
            domain: "user";
            id: string;
          }
        | {
            aggregate: "customer";
            domain: "customer";
            id: string;
          }
        | {
            aggregate: "project";
            domain: "project";
            id: string;
          }
        | {
            aggregate: "placementgroup";
            domain: "project";
            id: string;
          };

      export type ConversationStatus =
        | "open"
        | "closed"
        | "answered"
        | "inProgress"
        | "waiting";

      export interface ConversationStatusUpdate {
        conversationId: string;
        createdAt: string;
        internal?: boolean;
        messageContent: string;
        meta?: {
          user?: MittwaldAPIV2.Components.Schemas.ConversationUser;
        };
        type: "STATUS_UPDATE";
      }

      export interface ConversationUser {
        active?: boolean;
        avatarRefId?: string;
        clearName?: string;
        department?: MittwaldAPIV2.Components.Schemas.ConversationDepartment;
        userId: string;
      }

      export interface StraceData {
        actualUrl: string;
        dbQueries: {
          /**
           * The whole DB query.
           */
          query: string;
          stats: MittwaldAPIV2.Components.Schemas.StraceStatistics;
          /**
           * Alerts when the time, syscall count or occurrence count of this group are abnormal.
           */
          warnLevel: "NO" | "WARN" | "SEVERE";
        }[];
        dbStats: MittwaldAPIV2.Components.Schemas.StraceStatistics;
        fileOps: {
          filename?: string;
          filepath?: string;
          stats: MittwaldAPIV2.Components.Schemas.StraceStatistics;
          /**
           * Alerts when the time, syscall count or occurrence count of this group are abnormal.
           */
          warnLevel: "NO" | "WARN" | "SEVERE";
        }[];
        fileOpsStats: MittwaldAPIV2.Components.Schemas.StraceStatistics;
        miscStats: MittwaldAPIV2.Components.Schemas.StraceStatistics;
        networkingOps: {
          connectionType: "UNKNOWN" | "PRIVATE" | "EXTERNAL";
          /**
           * A short description of the network connection to provide additional context.
           */
          description: string;
          /**
           * IP address to which a connection was established.
           */
          ip: string;
          /**
           * Port to which a connection was established.
           */
          port: number;
          stats: MittwaldAPIV2.Components.Schemas.StraceStatistics;
          /**
           * Alerts when the time, syscall count or occurrence count of this group are abnormal.
           */
          warnLevel: "NO" | "WARN" | "SEVERE";
        }[];
        networkingStats: MittwaldAPIV2.Components.Schemas.StraceStatistics;
        /**
         * Shows how much slower the websites TTFB was when it got traced (1.0 = 100% = same TTFB).
         */
        slowdownFactor: number;
        /**
         * Time to first byte in milliseconds while tracing the website.
         */
        ttfbMs: number;
      }

      export interface StraceError {
        errorMessage: string;
      }

      export interface StraceStatistics {
        /**
         * Elapsed kernel space time in milliseconds.
         */
        kernelMs: number;
        /**
         * The number of times this group occurred.
         */
        occurrences: number;
        /**
         * Syscall count.
         */
        syscallCount: number;
        /**
         * Elapsed user space time in milliseconds.
         */
        userspaceMs: number;
      }

      export interface CronjobCronjobCommand {
        interpreter: string;
        parameters?: string;
        path: string;
      }

      export interface CronjobCronjob {
        active: boolean;
        appId: string;
        createdAt: string;
        description: string;
        destination:
          | MittwaldAPIV2.Components.Schemas.CronjobCronjobUrl
          | MittwaldAPIV2.Components.Schemas.CronjobCronjobCommand;
        email?: string;
        id: string;
        interval: string;
        latestExecution?: MittwaldAPIV2.Components.Schemas.CronjobCronjobExecution;
        nextExecutionTime?: string;
        projectId?: string;
        shortId: string;
        timeout: number;
        updatedAt: string;
      }

      export interface CronjobCronjobExecution {
        abortedBy?: {
          id?: string;
        };
        cronjobId: string;
        durationInMilliseconds?: number;
        end?: string;
        /**
         * @deprecated
         */
        executionEnd?: string;
        /**
         * @deprecated
         */
        executionStart?: string;
        id: string;
        logPath?: string;
        start?: string;
        status:
          | "Complete"
          | "Failed"
          | "AbortedBySystem"
          | "Pending"
          | "Running"
          | "AbortedByUser"
          | "TimedOut";
        successful: boolean;
        triggeredBy?: {
          id?: string;
        };
      }

      export type CronjobCronjobExecutionSortOrder =
        | "oldestFirst"
        | "newestFirst"
        | "slowestFirst"
        | "fastestFirst";

      export interface CronjobCronjobRequest {
        active: boolean;
        appId: string;
        description: string;
        destination:
          | MittwaldAPIV2.Components.Schemas.CronjobCronjobUrl
          | MittwaldAPIV2.Components.Schemas.CronjobCronjobCommand;
        email?: string;
        interval: string;
        timeout: number;
      }

      export interface CronjobCronjobUrl {
        url: string;
      }

      export interface CustomerContact {
        address: MittwaldAPIV2.Components.Schemas.CommonsAddress;
        company?: string;
        emailAddress?: string;
        firstName?: string;
        lastName?: string;
        phoneNumbers?: string[];
        salutation: MittwaldAPIV2.Components.Schemas.CommonsSalutation;
        title?: string;
        useFormalTerm?: boolean;
      }

      export type CustomerCustomerFlag = "agency" | "employee";

      export interface CustomerCustomerMeta {
        avatarRefId?: string;
        customerId: string;
        name: string;
      }

      /**
       * the role within a customer
       */
      export type CustomerRole = "owner" | "member" | "accountant";

      export interface CustomerCustomer {
        activeSuspension?: {
          createdAt: string;
        };
        avatarRefId?: string;
        categoryId?: string;
        creationDate: string;
        customerId: string;
        customerNumber: string;
        executingUserRoles?: MittwaldAPIV2.Components.Schemas.CustomerRole[];
        flags?: MittwaldAPIV2.Components.Schemas.CustomerCustomerFlag[];
        isAllowedToPlaceOrders?: boolean;
        isBanned?: boolean;
        isInDefaultOfPayment?: boolean;
        levelOfUndeliverableDunningNotice?: "first" | "second";
        memberCount: number;
        name: string;
        owner?: MittwaldAPIV2.Components.Schemas.CustomerContact;
        projectCount: number;
        vatId?: string;
        vatIdValidationState?: "valid" | "invalid" | "pending" | "unspecified";
      }

      export interface DatabaseCreateMySqlDatabase {
        characterSettings?: MittwaldAPIV2.Components.Schemas.DatabaseCharacterSettings;
        description: string;
        projectId: string;
        version: string;
      }

      export interface DatabaseCreateMySqlUser {
        accessIpMask?: string;
        accessLevel: "full" | "readonly";
        databaseId: string;
        description: string;
        externalAccess?: boolean;
        password: string;
      }

      export interface DatabaseCreateMySqlUserWithDatabase {
        accessIpMask?: string;
        accessLevel: "full" | "readonly";
        externalAccess?: boolean;
        password: string;
      }

      export type DatabaseDatabaseStatus =
        | "pending"
        | "ready"
        | "migrating"
        | "importing"
        | "error";

      export type DatabaseDatabaseUserStatus =
        | "pending"
        | "ready"
        | "error"
        | "terminating"
        | "disabled";

      export interface DatabaseMySqlCharacterSettings {
        collations: string[];
        name: string;
        versionId: string;
      }

      export interface DatabaseCharacterSettings {
        characterSet: string;
        collation: string;
      }

      export interface DatabaseMySqlDatabase {
        characterSettings: MittwaldAPIV2.Components.Schemas.DatabaseCharacterSettings;
        createdAt: string;
        description: string;
        externalHostname: string;
        finalizers?: string[];
        hostname: string;
        id: string;
        isReady: boolean;
        isShared: boolean;
        mainUser?: MittwaldAPIV2.Components.Schemas.DatabaseMySqlUser;
        name: string;
        projectId: string;
        status: MittwaldAPIV2.Components.Schemas.DatabaseDatabaseStatus;
        statusSetAt: string;
        storageUsageInBytes: number;
        storageUsageInBytesSetAt: string;
        updatedAt: string;
        version: string;
      }

      export interface DatabasePhpMyAdminURL {
        url: string;
      }

      export interface DatabaseMySqlUser {
        accessIpMask?: string;
        accessLevel: "full" | "readonly";
        createdAt: string;
        databaseId: string;
        description?: string;
        disabled: boolean;
        externalAccess: boolean;
        id: string;
        mainUser: boolean;
        name: string;
        passwordUpdatedAt: string;
        status: MittwaldAPIV2.Components.Schemas.DatabaseDatabaseUserStatus;
        statusSetAt: string;
        updatedAt: string;
      }

      export interface DatabaseMySqlVersion {
        disabled: boolean;
        id: string;
        name: string;
        number: string;
      }

      /**
       * The configuration for a RedisDatabase.
       */
      export interface DatabaseRedisDatabaseConfiguration {
        /**
         * Additional flags passed to the database.
         */
        additionalFlags?: string[];
        /**
         * The database's maximum memory. This may be a number, optionally suffixed by one of the IEC binary suffixes `Ki`, `Mi` or `Gi`.
         */
        maxMemory?: string;
        /**
         * The database's key eviction policy. See the [Redis documentation on key evictions](https://redis.io/docs/reference/eviction/) for more information.
         */
        maxMemoryPolicy?: string;
        /**
         * Persistent status of the database.
         */
        persistent?: boolean;
      }

      export interface DatabaseRedisDatabase {
        configuration?: MittwaldAPIV2.Components.Schemas.DatabaseRedisDatabaseConfiguration;
        createdAt: string;
        description: string;
        finalizers?: string[];
        hostname: string;
        id: string;
        name: string;
        port: number;
        projectId: string;
        status: MittwaldAPIV2.Components.Schemas.DatabaseDatabaseStatus;
        statusSetAt: string;
        storageUsageInBytes: number;
        storageUsageInBytesSetAt: string;
        updatedAt: string;
        version: string;
      }

      export interface DatabaseRedisVersion {
        disabled: boolean;
        id: string;
        name: string;
        number: string;
      }

      export type DnsRecordCAA =
        | MittwaldAPIV2.Components.Schemas.DnsRecordUnset
        | MittwaldAPIV2.Components.Schemas.DnsRecordCAAComponent;

      export interface DnsRecordCAAComponent {
        /**
         * @minItems 1
         */
        records: [
          MittwaldAPIV2.Components.Schemas.DnsRecordCAARecord,
          ...MittwaldAPIV2.Components.Schemas.DnsRecordCAARecord[],
        ];
        settings: MittwaldAPIV2.Components.Schemas.DnsRecordSettings;
      }

      export interface DnsRecordCAARecord {
        flags: number;
        tag: "issue" | "issuewild" | "iodef";
        value: string;
      }

      export type DnsRecordCNAME =
        | MittwaldAPIV2.Components.Schemas.DnsRecordUnset
        | MittwaldAPIV2.Components.Schemas.DnsRecordCNAMEComponent;

      export interface DnsRecordCNAMEComponent {
        fqdn: string;
        settings: MittwaldAPIV2.Components.Schemas.DnsRecordSettings;
      }

      export type DnsRecordCombinedA =
        | MittwaldAPIV2.Components.Schemas.DnsRecordUnset
        | MittwaldAPIV2.Components.Schemas.DnsCombinedACustom
        | MittwaldAPIV2.Components.Schemas.DnsCombinedAManaged;

      export type DnsCombinedAManagedAAAARecord = string;

      export type DnsCombinedAManagedARecord = string;

      export interface DnsCombinedACustom {
        /**
         * @maxItems 10
         */
        a: MittwaldAPIV2.Components.Schemas.DnsCombinedAManagedARecord[];
        /**
         * @maxItems 10
         */
        aaaa: MittwaldAPIV2.Components.Schemas.DnsCombinedAManagedAAAARecord[];
        settings: MittwaldAPIV2.Components.Schemas.DnsRecordSettings;
      }

      export interface DnsCombinedAManaged {
        managedBy: {
          ingressId: string;
        };
      }

      export type DnsRecordMX =
        | MittwaldAPIV2.Components.Schemas.DnsRecordUnset
        | MittwaldAPIV2.Components.Schemas.DnsRecordMXManaged
        | MittwaldAPIV2.Components.Schemas.DnsRecordMXCustom;

      export interface DnsRecordMXCustom {
        /**
         * @minItems 1
         * @maxItems 10
         */
        records: [
          MittwaldAPIV2.Components.Schemas.DnsRecordMXRecord,
          ...MittwaldAPIV2.Components.Schemas.DnsRecordMXRecord[],
        ];
        settings: MittwaldAPIV2.Components.Schemas.DnsRecordSettings;
      }

      export interface DnsRecordMXManaged {
        managed: boolean;
      }

      export interface DnsRecordMXRecord {
        fqdn: string;
        priority: number;
      }

      export interface DnsRecordSettings {
        ttl?:
          | MittwaldAPIV2.Components.Schemas.DnsTtlSeconds
          | MittwaldAPIV2.Components.Schemas.DnsTtlAuto;
      }

      export type DnsRecordSRV =
        | MittwaldAPIV2.Components.Schemas.DnsRecordUnset
        | MittwaldAPIV2.Components.Schemas.DnsRecordSRVComponent;

      export interface DnsRecordSRVComponent {
        /**
         * @minItems 1
         */
        records: [
          MittwaldAPIV2.Components.Schemas.DnsRecordSRVRecord,
          ...MittwaldAPIV2.Components.Schemas.DnsRecordSRVRecord[],
        ];
        settings: MittwaldAPIV2.Components.Schemas.DnsRecordSettings;
      }

      export interface DnsRecordSRVRecord {
        fqdn: string;
        port: number;
        priority?: number;
        weight?: number;
      }

      export type DnsRecordTXT =
        | MittwaldAPIV2.Components.Schemas.DnsRecordUnset
        | MittwaldAPIV2.Components.Schemas.DnsRecordTXTComponent;

      export interface DnsRecordTXTComponent {
        /**
         * @maxItems 20
         */
        entries: string[];
        settings: MittwaldAPIV2.Components.Schemas.DnsRecordSettings;
      }

      export interface DnsRecordUnset {}

      export interface DnsTtlAuto {
        /**
         * this will always be true
         */
        auto: boolean;
      }

      export interface DnsTtlSeconds {
        seconds: number;
      }

      export interface DnsZone {
        domain: string;
        id: string;
        recordSet: {
          caa: MittwaldAPIV2.Components.Schemas.DnsRecordCAA;
          cname: MittwaldAPIV2.Components.Schemas.DnsRecordCNAME;
          combinedARecords: MittwaldAPIV2.Components.Schemas.DnsRecordCombinedA;
          mx: MittwaldAPIV2.Components.Schemas.DnsRecordMX;
          srv: MittwaldAPIV2.Components.Schemas.DnsRecordSRV;
          txt: MittwaldAPIV2.Components.Schemas.DnsRecordTXT;
        };
      }

      export interface DomainAuthCode {
        expires?: string;
        value: string;
      }

      export interface DomainAuthCode2 {
        expires: string;
      }

      export interface DomainCreateDomainHandleData {
        adminC?: MittwaldAPIV2.Components.Schemas.DomainHandleField[];
        ownerC: MittwaldAPIV2.Components.Schemas.DomainHandleField[];
      }

      export interface DomainDomain {
        authCode?: MittwaldAPIV2.Components.Schemas.DomainAuthCode;
        authCode2?: MittwaldAPIV2.Components.Schemas.DomainAuthCode2;
        connected: boolean;
        contactHash?: string;
        deleted: boolean;
        domain: string;
        domainId: string;
        handles: {
          adminC?: MittwaldAPIV2.Components.Schemas.DomainHandleReadable;
          ownerC: MittwaldAPIV2.Components.Schemas.DomainHandleReadable;
        };
        nameservers: string[];
        processes?: MittwaldAPIV2.Components.Schemas.DomainProcess[];
        projectId: string;
        transferInAuthCode?: string;
        usesDefaultNameserver: boolean;
      }

      export interface DomainHandleData {
        handleFields?: MittwaldAPIV2.Components.Schemas.DomainHandleField[];
        handleRef?: string;
      }

      export interface DomainHandleField {
        name: string;
        value: string;
      }

      export interface DomainHandleReadable {
        current: MittwaldAPIV2.Components.Schemas.DomainHandleData;
        desired?: MittwaldAPIV2.Components.Schemas.DomainHandleData;
      }

      export interface DomainProcess {
        error?: string;
        lastUpdate: string;
        processType: MittwaldAPIV2.Components.Schemas.DomainProcessType;
        state: MittwaldAPIV2.Components.Schemas.DomainProcessState;
        status?: string;
        statusCode?: string;
        transactionId: string;
      }

      export type DomainProcessState = "UNSPECIFIED" | "REQUESTED" | "FAILED";

      export type DomainProcessType =
        | "UNSPECIFIED"
        | "REGISTER"
        | "TRANSFER"
        | "DELETE"
        | "TRANSIT"
        | "RESTORE"
        | "UPDATE"
        | "TRANSFER_OUT"
        | "OWNER_CHANGE"
        | "DECLARE_REQUESTED";

      export type DomainRegistrar = "INTERNETX" | "DENIC" | "HEXONET";

      export interface DomainSuggestedDomains {
        domains: string[];
      }

      export interface DomainTopLevel {
        irtp: boolean;
        rgpDays: number;
        tld: string;
        /**
         * @deprecated
         */
        transferAuthCodeRequired: boolean;
        transferAuthentication: MittwaldAPIV2.Components.Schemas.DomainTransferAuthentication;
      }

      export type DomainTransferAuthentication =
        | "unspecified"
        | "code"
        | "email"
        | "push";

      export interface MarketplaceAggregateReference {
        aggregate: "project" | "customer";
        domain: "project" | "customer";
        id: string;
      }

      export interface MarketplaceAggregateReferenceFilter {
        aggregate?: "project" | "customer";
        domain?: "project" | "customer";
        id?: string;
      }

      export interface MarketplaceContractOwner {
        contact: MittwaldAPIV2.Components.Schemas.CommonsContact;
        inherited: boolean;
      }

      export interface MarketplaceContributor {
        customerId: string;
        description?: string;
        descriptions?: MittwaldAPIV2.Components.Schemas.MarketplaceLocalizedDescription;
        /**
         * @deprecated
         */
        email?: string;
        homepage?: string;
        id: string;
        imprint?: MittwaldAPIV2.Components.Schemas.MarketplaceContributorImprint;
        logoRefId?: string;
        name: string;
        /**
         * @deprecated
         */
        phone?: string;
        state: MittwaldAPIV2.Components.Schemas.MarketplaceContributorState;
        supportInformation: MittwaldAPIV2.Components.Schemas.MarketplaceSupportMeta & {
          /**
           * Whether the support information is inherited from the customer.
           */
          inherited: boolean;
        };
        url?: string;
      }

      export type MarketplaceContributorImprint =
        | {
            text: string;
          }
        | {
            url: string;
          };

      export type MarketplaceContributorState = "enabled" | "disabled";

      export interface MarketplaceExtension {
        /**
         * The assets/media (images and videos) of the extension.
         *
         * @maxItems 4
         */
        assets:
          | []
          | [MittwaldAPIV2.Components.Schemas.MarketplaceExtensionAsset]
          | [
              MittwaldAPIV2.Components.Schemas.MarketplaceExtensionAsset,
              MittwaldAPIV2.Components.Schemas.MarketplaceExtensionAsset,
            ]
          | [
              MittwaldAPIV2.Components.Schemas.MarketplaceExtensionAsset,
              MittwaldAPIV2.Components.Schemas.MarketplaceExtensionAsset,
              MittwaldAPIV2.Components.Schemas.MarketplaceExtensionAsset,
            ]
          | [
              MittwaldAPIV2.Components.Schemas.MarketplaceExtensionAsset,
              MittwaldAPIV2.Components.Schemas.MarketplaceExtensionAsset,
              MittwaldAPIV2.Components.Schemas.MarketplaceExtensionAsset,
              MittwaldAPIV2.Components.Schemas.MarketplaceExtensionAsset,
            ];
        /**
         * @deprecated
         */
        blocked: boolean;
        context: MittwaldAPIV2.Components.Schemas.MarketplaceContext;
        contributorId: string;
        createdAt: string;
        deprecation?: MittwaldAPIV2.Components.Schemas.MarketplaceExtensionDeprecation;
        /**
         * A short description of the capabilites of the Extension.
         */
        description: string;
        detailedDescriptions?: MittwaldAPIV2.Components.Schemas.MarketplaceDetailedDescriptions;
        disabled: boolean;
        externalFrontends?: MittwaldAPIV2.Components.Schemas.MarketplaceExternalComponent[];
        /**
         * @deprecated
         */
        frontendComponents?: MittwaldAPIV2.Components.Schemas.MarketplaceExternalComponent[];
        frontendFragments?: {
          [
            k: string
          ]: MittwaldAPIV2.Components.Schemas.MarketplaceFrontendFragment;
        };
        id: string;
        /**
         * This is the FileId of the Logo. Retrieve the file with this id on `/v2/files/{logoRefId}`.
         */
        logoRefId: string;
        name: string;
        pricing?:
          | MittwaldAPIV2.Components.Schemas.MarketplaceMonthlyPricingStrategy
          | MittwaldAPIV2.Components.Schemas.MarketplaceMonthlyPricePlanStrategy;
        /**
         * Whether the extension has been published by the contributor.
         */
        published: true;
        scopes: string[];
        /**
         * @deprecated
         * deprecated
         */
        state: "enabled" | "blocked" | "disabled";
        statistics: MittwaldAPIV2.Components.Schemas.MarketplaceExtensionStatistics;
        subTitle: MittwaldAPIV2.Components.Schemas.MarketplaceSubTitle;
        support: MittwaldAPIV2.Components.Schemas.MarketplaceSupportMeta & {
          /**
           * Whether the support information is inherited from the contributor.
           */
          inherited: boolean;
        };
        /**
         * @minItems 0
         */
        tags: string[];
      }

      /**
       * The following assets are the media that are associated with the extension and will be shown in extension details page.
       */
      export interface MarketplaceExtensionAsset {
        assetType: "image" | "video";
        /**
         * @deprecated
         */
        fileName?: string;
        /**
         * The asset ID and reference ID to its file. Retrieve the file with this id on `/v2/files/{id}
         */
        id: string;
        /**
         * The index of the asset. Does not have to be successive. Can be used to order the assets.
         */
        index: number;
      }

      /**
       * @deprecated
       */
      export interface MarketplaceBackendComponent {
        url: string;
      }

      /**
       * @deprecated
       */
      export interface MarketplaceBackendComponents {
        extensionAddedToContext?: MittwaldAPIV2.Components.Schemas.MarketplaceBackendComponent;
        extensionInstanceRemovedFromContext?: MittwaldAPIV2.Components.Schemas.MarketplaceBackendComponent;
        extensionInstanceSecretRotated?: MittwaldAPIV2.Components.Schemas.MarketplaceBackendComponent;
        extensionInstanceUpdated?: MittwaldAPIV2.Components.Schemas.MarketplaceBackendComponent;
      }

      export type MarketplaceContext = "project" | "customer";

      /**
       * The Extension is deprecated by the contributor and will expire at the given date.
       */
      export interface MarketplaceExtensionDeprecation {
        deprecatedAt: string;
        note?: string;
        /**
         * The ID of the successor extension.
         */
        successorId?: string;
      }

      /**
       * Language specific descriptions in various formats.
       */
      export interface MarketplaceDescriptionFormats {
        markdown: string;
        plain?: string;
      }

      /**
       * A detailed description of the capabilities of the extension.
       */
      export interface MarketplaceDetailedDescriptions {
        de: MittwaldAPIV2.Components.Schemas.MarketplaceDescriptionFormats;
        en?: MittwaldAPIV2.Components.Schemas.MarketplaceDescriptionFormats;
      }

      export interface MarketplaceExtensionHealth {
        extensionInstances: MittwaldAPIV2.Components.Schemas.MarketplaceExtensionInstanceHealth[];
        functional: boolean;
        id: string;
        inoperableReason?: string;
        published: boolean;
        withdrawalReason?: string;
      }

      export interface MarketplaceExtensionInstance {
        aggregateReference: {
          aggregate: string;
          domain: string;
          id: string;
        };
        chargeability?: MittwaldAPIV2.Components.Schemas.MarketplaceExtensionInstanceChargeability;
        consentedScopes: string[];
        contributorId: string;
        contributorName: string;
        createdAt?: string;
        disabled: boolean;
        extensionId: string;
        extensionName: string;
        extensionSubTitle?: MittwaldAPIV2.Components.Schemas.MarketplaceSubTitle;
        id: string;
        pendingInstallation: boolean;
        pendingRemoval: boolean;
      }

      export interface MarketplaceExtensionInstanceChargeability {
        isChargeable: boolean;
        reasons: {
          isOwnExtension: boolean;
        };
      }

      export interface MarketplaceExtensionInstanceHealth {
        aggregateReference: {
          aggregate: string;
          domain: string;
          id: string;
        };
        id: string;
        instantiationIsPending: boolean;
        pendingWebhooksCount: number;
        removalIsPending: boolean;
        webhooksAreHalted: boolean;
      }

      export interface MarketplaceExtensionSecret {
        secretId: string;
        usableUntil?: string;
      }

      export interface MarketplaceExtensionStatistics {
        /**
         * The amout of instances for this extension. Accurate for the Contributor. Publicly rounded to the next lower hundred.
         */
        amountOfInstances?: number;
      }

      export interface MarketplaceWebhookUrl {
        url: string;
      }

      export interface MarketplaceWebhookUrls {
        extensionAddedToContext: MittwaldAPIV2.Components.Schemas.MarketplaceWebhookUrl;
        extensionInstanceRemovedFromContext: MittwaldAPIV2.Components.Schemas.MarketplaceWebhookUrl;
        extensionInstanceSecretRotated: MittwaldAPIV2.Components.Schemas.MarketplaceWebhookUrl;
        extensionInstanceUpdated: MittwaldAPIV2.Components.Schemas.MarketplaceWebhookUrl;
      }

      export interface MarketplaceExternalComponent {
        name: string;
        url: string;
      }

      export type MarketplaceFrontendFragment = {
        additionalProperties?: {
          [k: string]: string;
        };
      } & MittwaldAPIV2.Components.Schemas.MarketplaceUrlFrontendFragment;

      /**
       * A few words about the introduction as a contributor
       */
      export interface MarketplaceLocalizedDescription {
        de: string;
        en?: string;
      }

      export interface MarketplaceOwnContributor {
        contactPersonUserId: string;
        contractOwner: MittwaldAPIV2.Components.Schemas.MarketplaceContractOwner;
        contributorNumber: string;
        customerId: string;
        description?: string;
        /**
         * @deprecated
         */
        email?: string;
        id: string;
        imprint?: MittwaldAPIV2.Components.Schemas.MarketplaceContributorImprint;
        logoRefId?: string;
        name: string;
        /**
         * @deprecated
         */
        phone?: string;
        state: MittwaldAPIV2.Components.Schemas.MarketplaceContributorState;
        supportInformation: MittwaldAPIV2.Components.Schemas.MarketplaceSupportMeta & {
          /**
           * Whether the support information is inherited from the customer.
           */
          inherited: boolean;
        };
        url?: string;
      }

      export interface MarketplaceOwnExtension {
        assets: MittwaldAPIV2.Components.Schemas.MarketplaceExtensionAsset[];
        backendComponents?: MittwaldAPIV2.Components.Schemas.MarketplaceBackendComponents;
        /**
         * @deprecated
         */
        blocked?: boolean;
        context?: MittwaldAPIV2.Components.Schemas.MarketplaceContext;
        contributorId: string;
        deprecation?: MittwaldAPIV2.Components.Schemas.MarketplaceExtensionDeprecation;
        description?: string;
        detailedDescriptions?: MittwaldAPIV2.Components.Schemas.MarketplaceDetailedDescriptions;
        disabled?: boolean;
        externalFrontends?: MittwaldAPIV2.Components.Schemas.MarketplaceExternalComponent[];
        /**
         * @deprecated
         */
        frontendComponents?: MittwaldAPIV2.Components.Schemas.MarketplaceExternalComponent[];
        frontendFragments?: {
          [
            k: string
          ]: MittwaldAPIV2.Components.Schemas.MarketplaceFrontendFragment;
        };
        functional: boolean;
        id: string;
        /**
         * This is the FileId of the Logo. Retrieve the file with this id on `/v2/files/{logoRefId}`.
         */
        logoRefId?: string;
        name: string;
        pricing?:
          | MittwaldAPIV2.Components.Schemas.MarketplaceMonthlyPricingStrategy
          | MittwaldAPIV2.Components.Schemas.MarketplaceMonthlyPricePlanStrategy;
        published: boolean;
        requestedChanges?: {
          context?: MittwaldAPIV2.Components.Schemas.MarketplaceContext;
          scopes?: string[];
          webhookUrls?:
            | MittwaldAPIV2.Components.Schemas.MarketplaceWebhookUrls
            | {};
        };
        scopes?: string[];
        secrets: MittwaldAPIV2.Components.Schemas.MarketplaceExtensionSecret[];
        /**
         * deprecated
         */
        state?: "enabled" | "blocked" | "disabled";
        statistics: MittwaldAPIV2.Components.Schemas.MarketplaceExtensionStatistics;
        subTitle?: MittwaldAPIV2.Components.Schemas.MarketplaceSubTitle;
        support?: MittwaldAPIV2.Components.Schemas.MarketplaceSupportMeta & {
          /**
           * Whether the support information is inherited from the contributor.
           */
          inherited: boolean;
        };
        /**
         * @minItems 0
         */
        tags?: string[];
        verificationRequested: boolean;
        verified: boolean;
        webhookUrls?: MittwaldAPIV2.Components.Schemas.MarketplaceWebhookUrls;
      }

      /**
       * A price plan with (multiple) variants, including different prices for different included service descriptions
       */
      export type MarketplaceMonthlyPricePlanStrategy = {
        description?: string;
        key: string;
        name?: string;
        /**
         * The monthly price in Euro Cents before tax.
         */
        priceInCents: number;
      }[];

      /**
       * A strategy for pricing that occurs monthly.
       */
      export interface MarketplaceMonthlyPricingStrategy {
        /**
         * The monthly price in Euro Cents before tax.
         */
        netPrice: number;
      }

      export interface MarketplacePublicKey {
        algorithm: string;
        key: string;
        serial: string;
      }

      /**
       * A few words to promote your Extension.
       */
      export interface MarketplaceSubTitle {
        de: string;
        en?: string;
      }

      export interface MarketplaceSupportMeta {
        email: string;
        phone?: string;
      }

      export interface MarketplaceUnpublishedExtension {
        /**
         * The assets/media (images and videos) of the extension.
         *
         * @maxItems 4
         */
        assets:
          | []
          | [MittwaldAPIV2.Components.Schemas.MarketplaceExtensionAsset]
          | [
              MittwaldAPIV2.Components.Schemas.MarketplaceExtensionAsset,
              MittwaldAPIV2.Components.Schemas.MarketplaceExtensionAsset,
            ]
          | [
              MittwaldAPIV2.Components.Schemas.MarketplaceExtensionAsset,
              MittwaldAPIV2.Components.Schemas.MarketplaceExtensionAsset,
              MittwaldAPIV2.Components.Schemas.MarketplaceExtensionAsset,
            ]
          | [
              MittwaldAPIV2.Components.Schemas.MarketplaceExtensionAsset,
              MittwaldAPIV2.Components.Schemas.MarketplaceExtensionAsset,
              MittwaldAPIV2.Components.Schemas.MarketplaceExtensionAsset,
              MittwaldAPIV2.Components.Schemas.MarketplaceExtensionAsset,
            ];
        /**
         * @deprecated
         */
        blocked: boolean;
        context: MittwaldAPIV2.Components.Schemas.MarketplaceContext;
        contributorId: string;
        deprecation?: MittwaldAPIV2.Components.Schemas.MarketplaceExtensionDeprecation;
        /**
         * A short description of the capabilites of the Extension.
         */
        description?: string;
        detailedDescriptions?: MittwaldAPIV2.Components.Schemas.MarketplaceDetailedDescriptions;
        disabled: boolean;
        externalFrontends?: MittwaldAPIV2.Components.Schemas.MarketplaceExternalComponent[];
        /**
         * @deprecated
         */
        frontendComponents?: MittwaldAPIV2.Components.Schemas.MarketplaceExternalComponent[];
        frontendFragments?: {
          [
            k: string
          ]: MittwaldAPIV2.Components.Schemas.MarketplaceFrontendFragment;
        };
        id: string;
        /**
         * This is the FileId of the Logo. Retrieve the file with this id on `/v2/files/{logoRefId}`.
         */
        logoRefId?: string;
        name: string;
        pricing?: MittwaldAPIV2.Components.Schemas.MarketplaceMonthlyPricingStrategy;
        /**
         * Whether the extension has been published by the contributor.
         */
        published?: false;
        scopes: string[];
        /**
         * @deprecated
         * deprecated
         */
        state: "enabled" | "blocked" | "disabled";
        statistics: MittwaldAPIV2.Components.Schemas.MarketplaceExtensionStatistics;
        subTitle?: MittwaldAPIV2.Components.Schemas.MarketplaceSubTitle;
        support?: MittwaldAPIV2.Components.Schemas.MarketplaceSupportMeta & {
          /**
           * Whether the support information is inherited from the contributor.
           */
          inherited: boolean;
        };
        tags: string[];
      }

      export interface MarketplaceUrlFrontendFragment {
        url: string;
      }

      export type MarketplaceWebhookKind =
        | "extension-added-to-context"
        | "extension-instance-updated"
        | "extension-instance-secret-rotated"
        | "extension-instance-removed-from-context";

      /**
       * A strategy for fees of resources.
       */
      export type FeeFeeStrategy =
        | MittwaldAPIV2.Components.Schemas.FeeOneTimePaymentFeeStrategy
        | MittwaldAPIV2.Components.Schemas.FeePeriodBasedFeeStrategy;

      /**
       * A strategy for fees that occur once.
       */
      export interface FeeOneTimePaymentFeeStrategy {
        /**
         * The one-time price in Euro Cents.
         */
        price: number;
      }

      /**
       * A strategy for fees that occur periodically
       */
      export interface FeePeriodBasedFeeStrategy {
        periods: {
          feeValidFrom?: string;
          feeValidUntil?: string;
          /**
           * The monthly price in Euro Cents.
           */
          monthlyPrice: number;
        }[];
      }

      /**
       * A Fee of a Resource
       */
      export interface FeeResourceFee {
        feeStrategy?: MittwaldAPIV2.Components.Schemas.FeeFeeStrategy;
        /**
         * The id of the given Resource
         */
        id: string;
      }

      export interface FileFileMeta {
        /**
         * @deprecated
         * deprecated, see friendlyUrl
         */
        friendlyURL: string;
        friendlyUrl: string;
        id: string;
        mimeType: string;
        name: string;
        sizeInBytes: number;
        /**
         * @deprecated
         * deprecated, see mimeType
         */
        type: string;
      }

      export interface FileFileType {
        extensions: string[];
        mimeType: string;
      }

      export interface FileFileUploadRules {
        extensions: string[];
        fileTypes: MittwaldAPIV2.Components.Schemas.FileFileType[];
        maxNameLength: number;
        maxSizeInBytes: number;
        /**
         * @deprecated
         * deprecated, see maxSizeInBytes
         */
        maxSizeInKB: number;
        /**
         * @deprecated
         * deprecated, see maxSizeInBytes
         */
        maxSizeInKb: number;
        mimeTypes: string[];
        properties?: {
          imageDimensions?: {
            max?: {
              height?: number;
              width?: number;
            };
            min?: {
              height?: number;
              width?: number;
            };
          };
        };
      }

      export interface IngressIngress {
        /**
         * A list of errors that occurred while validating the ingress's dns before requesting a certificate.
         */
        dnsValidationErrors: (
          | "ERROR_UNSPECIFIED"
          | "ERROR_QUAD_A"
          | "ERROR_NO_A_RECORD"
          | "ERROR_ACME_CERTIFICATE_REQUEST_DEADLINE_EXCEEDED"
        )[];
        hostname: string;
        id: string;
        ips: {
          v4: string[];
        };
        /**
         * Whether this ingress is the default ingress or not. A default ingress is automatically created, it cannot be deleted. There can be only one default ingress per project.
         */
        isDefault: boolean;
        isDomain?: boolean;
        isEnabled: boolean;
        ownership: MittwaldAPIV2.Components.Schemas.IngressOwnership;
        /**
         * A list of paths. The default path `/` is always present and cannot be removed.
         */
        paths: MittwaldAPIV2.Components.Schemas.IngressPath[];
        projectId: string;
        tls:
          | MittwaldAPIV2.Components.Schemas.IngressTlsAcme
          | MittwaldAPIV2.Components.Schemas.IngressTlsCertificate;
      }

      export interface IngressIngressDeprecated {
        /**
         * A list of errors that occurred while validating the ingress's dns before requesting a certificate.
         */
        dnsValidationErrors: (
          | "ERROR_UNSPECIFIED"
          | "ERROR_QUAD_A"
          | "ERROR_NO_A_RECORD"
          | "ERROR_ACME_CERTIFICATE_REQUEST_DEADLINE_EXCEEDED"
        )[];
        hostname: string;
        id: string;
        ips: {
          v4: string[];
        };
        /**
         * Whether this ingress is the default ingress or not. A default ingress is automatically created, it cannot be deleted. There can be only one default ingress per project.
         */
        isDefault: boolean;
        isDomain?: boolean;
        isEnabled: boolean;
        ownership: MittwaldAPIV2.Components.Schemas.IngressOwnership;
        /**
         * A list of paths. The default path `/` is always present and cannot be removed.
         */
        paths: MittwaldAPIV2.Components.Schemas.IngressPath[];
        projectId: string;
        tls:
          | MittwaldAPIV2.Components.Schemas.IngressTlsAcmeDeprecated
          | MittwaldAPIV2.Components.Schemas.IngressTlsCertificate;
      }

      export interface IngressOwnership {
        txtRecord?: string;
        /**
         * Whether the domain ownership is verified or not.
         */
        verified: boolean;
      }

      export interface IngressPath {
        path: string;
        target:
          | MittwaldAPIV2.Components.Schemas.IngressTargetUrl
          | MittwaldAPIV2.Components.Schemas.IngressTargetInstallation
          | MittwaldAPIV2.Components.Schemas.IngressTargetUseDefaultPage
          | MittwaldAPIV2.Components.Schemas.IngressTargetContainer;
      }

      export interface IngressTargetContainer {
        container: {
          id: string;
          /**
           * docker-compose port specification in format port/protocol (e.g. 8080/TCP)
           */
          portProtocol: string;
        };
      }

      export interface IngressTargetInstallation {
        installationId: string;
      }

      export interface IngressTargetUrl {
        url: string;
      }

      export interface IngressTargetUseDefaultPage {
        useDefaultPage: boolean;
      }

      export interface IngressTlsAcme {
        /**
         * Has to be `true`, as ssl cannot be deactivated.
         */
        acme: boolean;
        isCreated: boolean;
        requestDeadline?: string;
      }

      export interface IngressTlsAcmeDeprecated {
        acme: boolean;
      }

      export interface IngressTlsCertificate {
        certificateId: string;
      }

      export interface InvoiceBankingInformation {
        accountHolder: string;
        bic?: string;
        iban: string;
      }

      export interface InvoiceCancellation {
        cancellationId: string;
        cancelledAt: string;
        correctionNumber: string;
        pdfId: string;
        reason?: string;
      }

      export interface InvoiceContractInvoiceDefinition {
        contractId: string;
        items: MittwaldAPIV2.Components.Schemas.InvoiceContractItemInvoiceDefinition[];
      }

      export interface InvoiceContractItemInvoiceDefinition {
        contractItemId: string;
        isDue?: boolean;
        serviceDate?: string;
        servicePeriod: MittwaldAPIV2.Components.Schemas.InvoiceDatePeriod;
        vatRate: number;
      }

      export interface InvoiceCorrectionDefinition {
        contractItemId: string;
        creditPeriod: MittwaldAPIV2.Components.Schemas.InvoiceDatePeriod;
      }

      export interface InvoiceDatePeriod {
        end: string;
        start: string;
      }

      export interface InvoiceError {
        message: string;
        type: string;
      }

      export interface InvoiceInvoiceItem {
        additionalDescription?: string;
        contractItemId: string;
        description: string;
        itemCancelledOrCorrectedBy?: {
          sourceInvoiceId?: string;
          sourceInvoiceItemId?: string;
        }[];
        itemId: string;
        price: MittwaldAPIV2.Components.Schemas.InvoicePrice;
        reference?: {
          sourceInvoiceId: string;
          sourceInvoiceItemId: string;
        };
        serviceDate?: string;
        servicePeriod?: MittwaldAPIV2.Components.Schemas.InvoiceDatePeriod;
        vatRate: number;
      }

      export interface InvoiceInvoice {
        amountPaid: number;
        cancellation?: MittwaldAPIV2.Components.Schemas.InvoiceCancellation;
        /**
         * The ID of the invoice that this invoice cancels.
         */
        cancellationOf?: string;
        currency: string;
        customerId: string;
        date: string;
        groups: {
          contractId?: string;
          description?: string;
          items: MittwaldAPIV2.Components.Schemas.InvoiceInvoiceItem[];
        }[];
        id: string;
        invoiceNumber: string;
        invoiceType: "REGULAR" | "REISSUE" | "CORRECTION" | "CANCELLATION";
        paymentSettings?: MittwaldAPIV2.Components.Schemas.InvoicePaymentSettings;
        pdfId: string;
        recipient: MittwaldAPIV2.Components.Schemas.InvoiceRecipient;
        status:
          | "NEW"
          | "CONFIRMED"
          | "DENIED"
          | "PAID"
          | "PARTIALLY_PAID"
          | "OVERPAID";
        totalGross: number;
        totalNet: number;
        vatId?: string;
      }

      export interface InvoiceInvoiceSettings {
        additionalEmailRecipients?: string[];
        debitPaymentStopUntil?: string;
        id: string;
        invoicePeriod?: number;
        lastBankingInformation?: MittwaldAPIV2.Components.Schemas.InvoiceBankingInformation;
        paymentSettings?: MittwaldAPIV2.Components.Schemas.InvoicePaymentSettings;
        printedInvoices?: boolean;
        recipient?: MittwaldAPIV2.Components.Schemas.InvoiceRecipient;
        recipientSameAsOwner?: boolean;
        status?: MittwaldAPIV2.Components.Schemas.InvoiceInvoiceSettingsStatus[];
        targetDay?: number;
      }

      export interface InvoiceInvoiceSettingsStatus {
        message: string;
        severity: "success" | "info" | "warning" | "error";
        type:
          | "returnDebitNote"
          | "returnDebitNoteWaitingForPayment"
          | "debtWrittenOff"
          | "bankrupt";
      }

      export interface InvoicePaymentSettingsDebit {
        accountHolder: string;
        /**
         * Optional. Required for payments outside of the European Union.
         */
        bic?: string;
        iban: string;
        method: "debit";
      }

      export interface InvoicePaymentSettingsInvoice {
        method: "invoice";
      }

      export type InvoicePaymentSettings =
        | MittwaldAPIV2.Components.Schemas.InvoicePaymentSettingsDebit
        | MittwaldAPIV2.Components.Schemas.InvoicePaymentSettingsInvoice;

      export interface InvoicePrice {
        currency: "EUR";
        value: number;
      }

      export interface InvoiceRecipient {
        address: MittwaldAPIV2.Components.Schemas.CommonsAddress;
        company?: string;
        emailAddress?: string;
        firstName?: string;
        lastName?: string;
        phoneNumbers?: string[];
        salutation: MittwaldAPIV2.Components.Schemas.CommonsSalutation;
        title?: string;
        useFormalTerm?: boolean;
      }

      export interface LeadfyndrBasicCompany {
        county: string;
        employeeCount?: number;
        foundingYear?: number;
        salesVolume?: number;
      }

      export interface LeadfyndrBasicMetrics {
        co2?: number;
        contentLoaded?: number;
        desktop: MittwaldAPIV2.Components.Schemas.LeadfyndrLighthouse;
        mobile: MittwaldAPIV2.Components.Schemas.LeadfyndrLighthouse;
        timeToFirstByteMs?: number;
      }

      export interface LeadfyndrCity {
        city: string;
        country: string;
        county?: string;
        postCode: string;
      }

      export interface LeadfyndrContact {
        address?: {
          address_prefix?: string;
          city?: string;
          country_code?: string;
          house_number?: string;
          street?: string;
          zip?: string;
        };
      }

      export type LeadfyndrDetailCompany =
        MittwaldAPIV2.Components.Schemas.LeadfyndrBasicCompany & {
          city: string;
          companyType: string[];
          coreProduct: string[];
          name?: string;
          targetGroup: string[];
          websiteType: string[];
        };

      export interface LeadfyndrDetailMetrics {
        additionalMetrics?: {
          [k: string]: MittwaldAPIV2.Components.Schemas.LeadfyndrMetric;
        };
        basic: MittwaldAPIV2.Components.Schemas.LeadfyndrBasicMetrics;
      }

      export interface LeadfyndrHoster {
        mailServer: string[];
        nameServer: string[];
        server: string[];
      }

      export interface LeadfyndrLead {
        businessFields: string[];
        company: MittwaldAPIV2.Components.Schemas.LeadfyndrBasicCompany;
        description: string;
        hoster: {
          server: string[];
        };
        languages: string[];
        leadId: string;
        mainTechnology?: MittwaldAPIV2.Components.Schemas.LeadfyndrTechnology;
        metrics: MittwaldAPIV2.Components.Schemas.LeadfyndrBasicMetrics;
        potential: number;
        scannedAt?: string;
        screenshot: string;
        technologies: MittwaldAPIV2.Components.Schemas.LeadfyndrTechnology[];
      }

      export interface LeadfyndrTariffOptions {
        nextUnlockRenewalDate?: string;
        reservation: {
          available: number;
          tariffLimit: number;
          used: number;
        };
        unlocked: {
          available: number;
          tariffLimit: number;
          used: number;
        };
      }

      export interface LeadfyndrLighthouse {
        accessibility?: number;
        bestPractice?: number;
        cumulativeLayoutShift?: number;
        firstContentfulPaint?: number;
        largestContentfulPaint?: number;
        performance?: number;
        seo?: number;
        totalBlockingTime?: number;
      }

      export interface LeadfyndrMetric {
        category: string;
        name: string;
        score?: number;
        unit?: string;
        value?: number;
      }

      export interface LeadfyndrProfileRequest {
        createdOn: string;
        customerId: string;
        domain: string;
        profileId: string;
        requestedBy: MittwaldAPIV2.Components.Schemas.LeadfyndrUser;
        resultOn?: string;
        status:
          | "AUTOTEST_INIT"
          | "MANUAL_VERIFICATION"
          | "REJECTED"
          | "APPROVED";
      }

      export interface LeadfyndrProfile {
        approvedOn: string;
        customerId: string;
        disabledOn?: string;
        domain: string;
      }

      export interface LeadfyndrSocialMedia {
        network: string;
        url: string;
      }

      export interface LeadfyndrTechnology {
        categories?: {
          name: string;
          parentCategories?: string[];
          priority: number;
        }[];
        categoryPriority: number;
        name: string;
        version?: string;
      }

      export interface LeadfyndrUnlockedLead {
        actualUrl: string;
        businessFields: string[];
        company: MittwaldAPIV2.Components.Schemas.LeadfyndrDetailCompany;
        contact: MittwaldAPIV2.Components.Schemas.LeadfyndrContact;
        description: string;
        domain: string;
        hoster: MittwaldAPIV2.Components.Schemas.LeadfyndrHoster;
        languages: string[];
        leadId: string;
        mainTechnology?: MittwaldAPIV2.Components.Schemas.LeadfyndrTechnology;
        metrics: MittwaldAPIV2.Components.Schemas.LeadfyndrDetailMetrics;
        potential: number;
        reservationAllowed?: boolean;
        reservedAt?: string;
        scannedAt?: string;
        screenshot: string;
        socialMedia: MittwaldAPIV2.Components.Schemas.LeadfyndrSocialMedia[];
        technologies: MittwaldAPIV2.Components.Schemas.LeadfyndrTechnology[];
        unlockedAt: string;
      }

      export interface LeadfyndrUser {
        userId: string;
      }

      export interface MailCreateMailAddress {
        address: string;
        forwardAddresses?: string[];
        isCatchAll: boolean;
        mailbox: {
          enableSpamProtection: boolean;
          password: string;
          /**
           * 2 GB
           */
          quotaInBytes: number;
        };
      }

      export interface MailDeliverybox {
        authenticationEnabled: boolean;
        description: string;
        id: string;
        name: string;
        passwordUpdatedAt: string;
        projectId: string;
        sendingEnabled: boolean;
        updatedAt: string;
      }

      export interface MailError {
        message: string;
        type: string;
      }

      export interface MailCreateForwardAddress {
        address: string;
        forwardAddresses: string[];
      }

      export interface MailMailAddressBackup {
        name: string;
      }

      export interface MailMailAddress {
        address: string;
        archive: {
          active: boolean;
          quota: number;
          usedBytes: number;
        };
        autoResponder: {
          active: boolean;
          expiresAt?: string;
          message?: string;
          startsAt?: string;
        };
        forwardAddresses: string[];
        id: string;
        isArchived: boolean;
        isBackupInProgress: boolean;
        isCatchAll: boolean;
        mailbox?: {
          name: string;
          passwordUpdatedAt: string;
          sendingEnabled: boolean;
          spamProtection: {
            active: boolean;
            autoDeleteSpam: boolean;
            folder: "spam" | "inbox";
            relocationMinSpamScore: number;
          };
          storageInBytes: {
            current: {
              updatedAt: string;
              value: number;
            };
            limit: number;
          };
        };
        projectId: string;
        receivingDisabled: boolean;
        updatedAt: string;
      }

      export interface MailMailsystemSettings {
        imapClusterId: string;
        mailDirectory: string;
        rateLimitId: string;
      }

      export interface MailmigrationAutoResponder {
        active: boolean;
        expiresAt?: {
          [k: string]: unknown;
        };
        message: string;
        startsAt?: {
          [k: string]: unknown;
        };
      }

      export interface MailmigrationMailSystemSettings {
        imapClusterId: string;
        mailDirectory: string;
        rateLimitId: string;
      }

      export interface MailmigrationMailbox {
        mailsystem: MittwaldAPIV2.Components.Schemas.MailmigrationMailSystemSettings;
        name: string;
        quotaInBytes: number;
        spamProtection?: MittwaldAPIV2.Components.Schemas.MailmigrationSpamProtection;
      }

      export interface MailmigrationMigration {
        aborted: boolean;
        addresses: MittwaldAPIV2.Components.Schemas.MailmigrationMigrationMailAddress[];
        finalizers: MittwaldAPIV2.Components.Schemas.MailmigrationMigrationFinalizeJob;
        finished: boolean;
        id: string;
        mailboxes: MittwaldAPIV2.Components.Schemas.MailmigrationMigrationMailbox[];
        sourceCoabProjectId: string;
        targetNexusProjectId: string;
      }

      export interface MailmigrationMigrationFinalizeJob {
        disableLegacyEntities?: MittwaldAPIV2.Components.Schemas.MailmigrationMigrationFinalizeJobDisableLegacyEntities;
        projectSettingMigrations?: MittwaldAPIV2.Components.Schemas.MailmigrationMigrationFinalizeJobProjectSetting;
      }

      export interface MailmigrationMigrationFinalizeJobDisableLegacyEntities {
        addresses: string[];
        mailboxNames: string[];
      }

      export interface MailmigrationMigrationFinalizeJobProjectSetting {
        blacklistEntries: string[];
        whitelistEntries: string[];
      }

      export interface MailmigrationMigrationMailAddress {
        address: string;
        finished: boolean;
        id: string;
        migrationJobs: MittwaldAPIV2.Components.Schemas.MailmigrationMigrationMailAddressMigrationJob;
        preMigrationJobs: MittwaldAPIV2.Components.Schemas.MailmigrationMigrationMailAddressPreMigrationJob;
      }

      export interface MailmigrationMigrateMailAddressCommandRequirements {
        address?: string;
        autoResponder?: MittwaldAPIV2.Components.Schemas.MailmigrationAutoResponder;
        forwardAddresses?: string[];
        isCatchAll?: boolean;
        mailbox?: MittwaldAPIV2.Components.Schemas.MailmigrationMailbox;
        projectId: string;
      }

      export interface MailmigrationMigrationMailAddressMigrationJob {
        migrate: MittwaldAPIV2.Components.Schemas.MailmigrationMigrationMailAddressMigrationJobMigrate;
      }

      export interface MailmigrationMigrationMailAddressMigrationJobMigrate {
        finished: boolean;
        requirements: MittwaldAPIV2.Components.Schemas.MailmigrationMigrateMailAddressCommandRequirements;
      }

      export interface MailmigrationMigrationMailAddressPreMigrationJob {
        aliasSet: MittwaldAPIV2.Components.Schemas.MailmigrationMigrationMailAddressPreMigrationJobAliasSet[];
        deliveryMigrations: MittwaldAPIV2.Components.Schemas.MailmigrationMigrationMailAddressPreMigrationJobDeliveryMigration[];
      }

      export interface MailmigrationMigrationMailAddressPreMigrationJobAliasSet {
        finished: boolean;
        sourceCoabMailboxName: string;
      }

      export interface MailmigrationMigrationMailAddressPreMigrationJobDeliveryMigration {
        finished: boolean;
        sourceCoabDeliveryMailbox: string;
        sourceCoabDeliveryUid: number;
        targetDeliveryAddress: string;
      }

      export interface MailmigrationMigrationMailbox {
        description?: string;
        finished: boolean;
        id: string;
        migrationJobs: MittwaldAPIV2.Components.Schemas.MailmigrationMigrationMailboxJob;
        name: string;
      }

      export interface MailmigrationMigrationMailboxJob {
        migrate: MittwaldAPIV2.Components.Schemas.MailmigrationMigrationMailboxJobMigrate;
      }

      export interface MailmigrationMigrationMailboxJobMigrate {
        requirements: MittwaldAPIV2.Components.Schemas.MailmigrationMigrateMailboxCommandRequirements;
      }

      export interface MailmigrationMigrateMailboxCommandRequirements {
        mailbox?: MittwaldAPIV2.Components.Schemas.MailmigrationMailbox;
        projectId: string;
      }

      export interface MailmigrationCheckMigrationIsPossibleErrorAlreadyExistingMailAddress {
        address: string;
      }

      export interface MailmigrationCheckMigrationIsPossibleErrorAmbiguousMailAddressDelivery {
        addresses: string[];
        mailboxName: string;
      }

      export interface MailmigrationCheckMigrationIsPossibleErrorAmbiguousMailboxDelivery {
        address: string;
        mailboxes: string[];
      }

      export interface MailmigrationCheckMigrationIsPossibleErrorCatchAllMissingAddress {
        address: string;
      }

      export interface MailmigrationCheckMigrationIsPossibleErrorCatchAllTargetWithoutAlias {
        address: string;
        mailboxName: string;
      }

      export interface MailmigrationCheckMigrationIsPossibleErrorMissingVerifiedIngress {
        hostname: string;
      }

      export interface MailmigrationPossibleCheckErrors {
        alreadyExistingMailAddress: MittwaldAPIV2.Components.Schemas.MailmigrationCheckMigrationIsPossibleErrorAlreadyExistingMailAddress[];
        ambiguousMailAddressDelivery: MittwaldAPIV2.Components.Schemas.MailmigrationCheckMigrationIsPossibleErrorAmbiguousMailAddressDelivery[];
        ambiguousMailboxDelivery: MittwaldAPIV2.Components.Schemas.MailmigrationCheckMigrationIsPossibleErrorAmbiguousMailboxDelivery[];
        catchAllMissingAddress: MittwaldAPIV2.Components.Schemas.MailmigrationCheckMigrationIsPossibleErrorCatchAllMissingAddress[];
        catchAllTargetWithoutAlias: MittwaldAPIV2.Components.Schemas.MailmigrationCheckMigrationIsPossibleErrorCatchAllTargetWithoutAlias[];
        missingVerifiedIngress: MittwaldAPIV2.Components.Schemas.MailmigrationCheckMigrationIsPossibleErrorMissingVerifiedIngress[];
      }

      export interface MailmigrationCheckMigrationIsPossibleErrorResponse {
        errors?: MittwaldAPIV2.Components.Schemas.MailmigrationPossibleCheckErrors;
      }

      export interface MailmigrationSpamProtection {
        active: boolean;
        deleteSensitivity?: number;
        /**
         * SPAM_FOLDER_INBOX_UNSPECIFIED = 0 SPAM_FOLDER_SPAM = 1
         */
        folder: 0 | 1;
        keepDays: number;
        relocateSensitivity?: number;
      }

      export interface MarketplaceContractPartner {
        contractPartner: {
          address: MittwaldAPIV2.Components.Schemas.CommonsAddress;
          company?: string;
          email: string;
          firstName: string;
          lastName: string;
        };
        createdAt: string;
        extensionId: string;
        extensionInstanceId: string;
        parentCustomerId: string;
      }

      export type MembershipCustomerInheritedRoles =
        | "notset"
        | "owner"
        | "member"
        | "accountant";

      export interface MembershipCustomerInvite {
        /**
         * Reference to the Project's avatar.
         */
        avatarRefId?: string;
        /**
         * ID of the Customer the invite is for.
         */
        customerId: string;
        /**
         * Name of the Customer the user is invited to.
         */
        customerName: string;
        /**
         * ID of the CustomerInvite.
         */
        id: string;
        information: MittwaldAPIV2.Components.Schemas.MembershipInviteInformation;
        /**
         * Mail-address of the user the invite is for.
         */
        mailAddress: string;
        /**
         * Time the CustomerMembership should expire at.
         */
        membershipExpiresAt?: string;
        /**
         * Message contained in the CustomerInvite.
         */
        message?: string;
        role: MittwaldAPIV2.Components.Schemas.MembershipCustomerRoles;
      }

      export interface MembershipCustomerMembership {
        /**
         * Avatar file reference id of the user.
         */
        avatarRef?: string;
        /**
         * ID of the Customer the CustomerMembership is for.
         */
        customerId: string;
        /**
         * Email used by the invited user.
         */
        email: string;
        /**
         * Time the CustomerMembership should expire at.
         */
        expiresAt?: string;
        /**
         * First name of the user.
         */
        firstName: string;
        /**
         * ID of the CustomerMembership.
         */
        id: string;
        /**
         * ID of the CustomerInvite the membership was created from.
         */
        inviteId?: string;
        /**
         * Last name of the user.
         */
        lastName: string;
        /**
         * Date the CustomerMembership was created at.
         */
        memberSince?: string;
        /**
         * MFA activated by the user.
         */
        mfa: boolean;
        role: MittwaldAPIV2.Components.Schemas.MembershipCustomerRoles;
        /**
         * ID of the user the CustomerMembership is for.
         */
        userId: string;
      }

      export type MembershipCustomerRoles =
        | "notset"
        | "owner"
        | "member"
        | "accountant";

      export interface MembershipInviteInformation {
        /**
         * Token for authentication purposes.
         */
        invitationToken?: string;
        /**
         * ID of the user that created the invite.
         */
        invitedBy: string;
        /**
         * ID of the user this invite is for.
         */
        userId?: string;
      }

      export interface MembershipProjectInvite {
        /**
         * Reference to the Project's avatar.
         */
        avatarRefId?: string;
        /**
         * ID of the ProjectInvite.
         */
        id: string;
        information: MittwaldAPIV2.Components.Schemas.MembershipInviteInformation;
        /**
         * Mail-address of the user the ProjectInvite is for.
         */
        mailAddress: string;
        /**
         * Time the ProjectMembership should expire at.
         */
        membershipExpiresAt?: string;
        /**
         * Message contained in the ProjectInvite.
         */
        message?: string;
        /**
         * Description of the Project the invite is created for.
         */
        projectDescription: string;
        /**
         * ID of the Project the invitation is for.
         */
        projectId: string;
        role: MittwaldAPIV2.Components.Schemas.MembershipProjectRoles;
      }

      export interface MembershipProjectMembership {
        /**
         * Avatar file reference id of the user.
         */
        avatarRef?: string;
        /**
         * Email used by the invited user.
         */
        email: string;
        /**
         * Time the ProjectMembership should expire at.
         */
        expiresAt?: string;
        /**
         * First name of the user.
         */
        firstName: string;
        /**
         * ID of the ProjectMembership.
         */
        id: string;
        /**
         * Whether the ProjectMembership was inherited from a CustomerMembership.
         */
        inherited: boolean;
        /**
         * ID of the ProjectInvite the membership was created from.
         */
        inviteId?: string;
        /**
         * Last name of the user.
         */
        lastName: string;
        /**
         * Date the projectMembership was created at.
         */
        memberSince?: string;
        /**
         * MFA activated by the user.
         */
        mfa: boolean;
        /**
         * ID of the Project the membership is for.
         */
        projectId: string;
        role: MittwaldAPIV2.Components.Schemas.MembershipProjectRoles;
        /**
         * ID of the user the ProjectMembership is for.
         */
        userId: string;
      }

      export type MembershipProjectRoles =
        | "notset"
        | "owner"
        | "emailadmin"
        | "external";

      export interface MessagingAggregateReference {
        aggregate: string;
        domain: string;
        id: string;
        parents?: {
          aggregate: string;
          domain: string;
          id: string;
        }[];
      }

      export interface MessagingNotification {
        createdAt: string;
        id: string;
        read: boolean;
        reference: MittwaldAPIV2.Components.Schemas.MessagingAggregateReference;
        severity: "success" | "info" | "warning" | "error";
        type: string;
      }

      export type MessagingNotificationStatus = "read";

      export interface OrderAddons {
        hidden?: boolean;
        key: string;
        value: string;
      }

      export interface OrderArticleAddons {
        hidden?: boolean;
        key: string;
        type?: string;
        value: string;
        valueMergeType?: "add" | "set";
      }

      export interface OrderAttributeConfiguration {
        key: string;
        value?: string;
      }

      export interface OrderCustomerOrder {
        contractChangeContractId?: string;
        customerId: string;
        dueDate?: string;
        /**
         * Invoicing period in months
         */
        invoicingPeriod: number;
        items: MittwaldAPIV2.Components.Schemas.OrderOrderItem[];
        orderDate?: string;
        orderId: string;
        orderNumber: string;
        profile?: MittwaldAPIV2.Components.Schemas.OrderProfile;
        status: MittwaldAPIV2.Components.Schemas.OrderOrderStatus;
        summary: MittwaldAPIV2.Components.Schemas.OrderOrderSummary;
        type: MittwaldAPIV2.Components.Schemas.OrderOrderType;
      }

      export interface OrderDomainHandleField {
        name: string;
        value: string;
      }

      export interface OrderDomainOrderPreview {
        authCode?: string;
        domain: string;
        projectId: string;
      }

      export interface OrderDomainOrder {
        authCode?: string;
        domain: string;
        handleData: {
          /**
           * @deprecated
           */
          adminC?: MittwaldAPIV2.Components.Schemas.OrderDomainHandleField[];
          /**
           * @minItems 1
           */
          ownerC: [
            MittwaldAPIV2.Components.Schemas.OrderDomainHandleField,
            ...MittwaldAPIV2.Components.Schemas.OrderDomainHandleField[],
          ];
        };
        projectId: string;
      }

      export interface OrderExternalCertificateOrderPreview {
        certificateRequestId: string;
        projectId: string;
      }

      /**
       * You are able to order an External Certificate if you already created a Certificate Request.
       */
      export interface OrderExternalCertificateOrder {
        certificateRequestId: string;
        projectId: string;
      }

      export interface OrderHardwareSpec {
        ram?: number;
        vcpu?: number;
      }

      export interface OrderLeadFyndrOrderPreview {
        reservationLimit: number;
        unlockLimit: number;
      }

      export interface OrderLeadFyndrOrder {
        customerId: string;
        reservationLimit: number;
        unlockLimit: number;
      }

      export interface OrderLeadFyndrTariffChange {
        contractId: string;
        reservationLimit: number;
        unlockLimit: number;
      }

      export interface OrderMachineTypeSpec {
        machineType?: string;
      }

      export interface OrderMailArchiveOrderPreviewResponse {
        feePrice: number;
        recurringPrice: number;
        totalPrice: number;
      }

      export interface OrderMailArchiveOrderPreview {
        mailAddressId: string;
        useCurrentData?: boolean;
      }

      export interface OrderMailArchiveOrder {
        mailAddressId: string;
        useCurrentData?: boolean;
      }

      export interface OrderOrderItem {
        addons?: MittwaldAPIV2.Components.Schemas.OrderAddons[];
        articleId: string;
        articleName?: string;
        articleTemplateName?: string;
        attributeConfiguration?: MittwaldAPIV2.Components.Schemas.OrderAttributeConfiguration[];
        isInclusive: boolean;
        orderItemId: string;
        predefinedDomainAggregateId?: string;
        price: number;
        reference?: MittwaldAPIV2.Components.Schemas.OrderReference;
      }

      export interface OrderReference {
        contractItemId?: string;
        offerItemId?: string;
        orderItemId?: string;
      }

      export type OrderOrderStatus =
        | "NEW"
        | "CONFIRMED"
        | "REJECTED"
        | "ABORTED"
        | "EXECUTED";

      export interface OrderOrderSummary {
        nonRecurring: number;
        recurring: number;
        /**
         * The total price of the order
         */
        summary: number;
      }

      export type OrderOrderType = "NEW_ORDER" | "CONTRACT_CHANGE";

      export interface OrderLeadFyndrOrderPreviewResponse {
        totalPrice: number;
      }

      export interface OrderDomainOrderPreviewResponse {
        /**
         * Contract duration in months.
         */
        domainContractDuration: number;
        domainPrice: number;
        feePrice: number;
        totalPrice: number;
      }

      export interface OrderExternalCertificateOrderPreviewResponse {
        feePrice: number;
        recurringPrice: number;
        totalPrice: number;
      }

      export interface OrderHostingOrderPreviewResponse {
        machineTypePrice: number;
        possibleFreeTrialDays?: number;
        storagePrice: number;
        totalPrice: number;
      }

      export interface OrderProfile {
        email: string;
        firstName?: string;
        lastName?: string;
        /**
         * @deprecated
         * the users title
         */
        title?: "other" | "mr" | "ms";
        userId: string;
      }

      export interface OrderProjectHostingOrderPreview {
        customerId?: string;
        description?: string;
        diskspaceInGiB: number;
        promotionCode?: string;
        spec:
          | MittwaldAPIV2.Components.Schemas.OrderMachineTypeSpec
          | MittwaldAPIV2.Components.Schemas.OrderHardwareSpec;
      }

      export interface OrderProjectHostingOrder {
        customerId: string;
        description: string;
        diskspaceInGiB: number;
        promotionCode?: string;
        recommendationCode?: string;
        spec:
          | MittwaldAPIV2.Components.Schemas.OrderMachineTypeSpec
          | MittwaldAPIV2.Components.Schemas.OrderHardwareSpec;
        useFreeTrial?: boolean;
      }

      export interface OrderProjectHostingTariffChange {
        contractId: string;
        diskspaceInGiB: number;
        spec:
          | MittwaldAPIV2.Components.Schemas.OrderMachineTypeSpec
          | MittwaldAPIV2.Components.Schemas.OrderHardwareSpec;
      }

      export interface OrderServerOrderPreview {
        customerId?: string;
        description?: string;
        diskspaceInGiB: number;
        machineType: string;
        promotionCode?: string;
      }

      export interface OrderServerOrder {
        customerId: string;
        description: string;
        diskspaceInGiB: number;
        machineType: string;
        promotionCode?: string;
        recommendationCode?: string;
        useFreeTrial?: boolean;
      }

      export interface OrderServerTariffChange {
        contractId: string;
        diskspaceInGiB: number;
        machineType: string;
      }

      export interface ArticleArticleAddons {
        hidden?: boolean;
        key: string;
        type?: string;
        value: string;
        valueMergeType?: "add" | "set";
      }

      export interface ArticleArticleAttributes {
        customerEditable?: boolean;
        key: string;
        mergeType?: "add" | "set";
        readonly?: boolean;
        required?: boolean;
        unit?: string;
        value?: string;
      }

      export interface ArticleReadableBookableArticleOptions {
        articleId: string;
        info?: {
          articleName?: string;
          articleTemplateName?: string;
          fromArticleTemplate?: boolean;
        };
        maxArticleCount?: number;
      }

      export interface ArticleReadableChangeArticleOptions {
        articleId: string;
        info?: {
          articleName?: string;
          articleTemplateName?: string;
          fromArticleTemplate?: boolean;
        };
      }

      export interface ArticleReadableModifierArticleOptions {
        articleId: string;
        info?: {
          articleName?: string;
          articleTemplateName?: string;
          fromArticleTemplate?: boolean;
        };
        maxArticleCount: number;
      }

      export interface ArticleArticleTag {
        description?: string;
        hexColor?: string;
        id: string;
        name?: string;
      }

      export interface ArticleArticleTemplate {
        additionalArticles?: MittwaldAPIV2.Components.Schemas.ArticleReadableBookableArticleOptions[];
        addons?: MittwaldAPIV2.Components.Schemas.ArticleArticleAddons[];
        attributes?: MittwaldAPIV2.Components.Schemas.ArticleArticleAttributes[];
        description?: string;
        id: string;
        isManagedByDomain: boolean;
        isRecurring: boolean;
        modifierArticles?: MittwaldAPIV2.Components.Schemas.ArticleReadableModifierArticleOptions[];
        name: string;
        type:
          | "miscellaneous"
          | "base"
          | "additional"
          | "modifier"
          | "setup_fee";
      }

      export interface ArticleReadableArticle {
        addons?: MittwaldAPIV2.Components.Schemas.ArticleArticleAddons[];
        articleId: string;
        attributes?: MittwaldAPIV2.Components.Schemas.ArticleArticleAttributes[];
        balanceAddonKey?: string;
        contractDurationInMonth: number;
        description?: string;
        forcedInvoicingPeriodInMonth?: number;
        hasIndependentContractPeriod?: boolean;
        hideOnInvoice?: boolean;
        machineType?: {
          cpu: string;
          memory: string;
          name: string;
        };
        modifierArticles?: MittwaldAPIV2.Components.Schemas.ArticleReadableModifierArticleOptions[];
        name: string;
        orderable:
          | "forbidden"
          | "internal"
          | "beta_testing"
          | "full"
          | "deprecated";
        possibleArticleChanges?: MittwaldAPIV2.Components.Schemas.ArticleReadableChangeArticleOptions[];
        price?: number;
        tags?: MittwaldAPIV2.Components.Schemas.ArticleArticleTag[];
        template: MittwaldAPIV2.Components.Schemas.ArticleArticleTemplate;
      }

      export type PolicyPolicy = string;

      export interface ProjectAvatarRules {
        maxSizeInKB: number;
        mimeTypes: string[];
        properties?: {
          imageDimensions?: {
            max?: {
              height?: number;
              width?: number;
            };
            min?: {
              height?: number;
              width?: number;
            };
          };
        };
      }

      /**
       * deprecated by property status
       */
      export type ProjectDeprecatedProjectReadinessStatus =
        | "creating"
        | "ready"
        | "unready";

      /**
       * deprecated by property status
       */
      export type ProjectDeprecatedServerReadinessStatus =
        | "creating"
        | "ready"
        | "unready";

      export interface ProjectFilesystemDirectoryListing {
        absolutePath: string;
        isDirectory?: boolean;
        isExecutable?: boolean;
        isFile?: boolean;
        isSymlink?: boolean;
        items?: MittwaldAPIV2.Components.Schemas.ProjectFilesystemDirectoryListing[];
        name: string;
        size: number;
        target?: string;
      }

      export interface ProjectFilesystemUsagesDisk {
        path?: string;
        totalBytes?: number;
        usedBytes?: number;
      }

      export interface ProjectFsApiJwt {
        jwt: string;
      }

      export interface ProjectHardwareSpec {
        cpu?: string;
        /**
         * @deprecated
         * deprecated by memory
         */
        mem?: string;
        memory?: string;
        storage: string;
      }

      export interface LlmlocksmithContainerMeta {
        containerId?: string;
        errorMessage?: string;
        ingressId?: string;
        stackId?: string;
        status: "created" | "requested" | "failed";
      }

      export interface LlmlocksmithLicence {
        containerMeta?: MittwaldAPIV2.Components.Schemas.LlmlocksmithContainerMeta;
        customerId?: string;
        /**
         * Indicates whether the licence is blocked.
         */
        isBlocked: boolean;
        licenceId: string;
        licenceKey: string;
        models: string[];
        name: string;
        projectId?: string;
        rateLimit: number;
      }

      export interface LlmlocksmithModel {
        displayName: string;
        docLink: string;
        name: string;
        termsOfServiceLink: string;
      }

      export interface ProjectMachineType {
        cpu: string;
        memory: string;
        name: string;
      }

      export type ProjectDisableReason =
        | "maliciousCode"
        | "illegalContent"
        | "maliciousConduct"
        | "suspended";

      export type ProjectProjectFeature = "redis" | "node" | "container";

      export type ProjectProjectStatus =
        | "pending"
        | "ready"
        | "preparingForVolumeMigration"
        | "migratingVolume"
        | "error"
        | "disabled";

      export interface ProjectProject {
        backupStorageUsageInBytes: number;
        backupStorageUsageInBytesSetAt: string;
        clusterDomain?: string;
        /**
         * @deprecated
         * deprecated by property clusterId
         */
        clusterID?: string;
        clusterId?: string;
        createdAt: string;
        customerId: string;
        description: string;
        directories: {
          [k: string]: string;
        };
        disableReason?: MittwaldAPIV2.Components.Schemas.ProjectDisableReason;
        disabledAt?: string;
        enabled: boolean;
        /**
         * @deprecated
         * Deprecated by 'supportedFeatures'.
         */
        features?: MittwaldAPIV2.Components.Schemas.ProjectProjectFeature[];
        id: string;
        imageRefId?: string;
        /**
         * @deprecated
         * deprecated by property status
         */
        isReady: boolean;
        projectHostingId?: string;
        readiness: MittwaldAPIV2.Components.Schemas.ProjectDeprecatedProjectReadinessStatus;
        serverId?: string;
        serverShortId?: string;
        shortId: string;
        spec?:
          | MittwaldAPIV2.Components.Schemas.ProjectVisitorSpec
          | MittwaldAPIV2.Components.Schemas.ProjectHardwareSpec;
        statisticsBaseDomain?: string;
        status: MittwaldAPIV2.Components.Schemas.ProjectProjectStatus;
        statusSetAt: string;
        supportedFeatures: MittwaldAPIV2.Components.Schemas.ProjectProjectFeature[];
        webStorageUsageInBytes: number;
        webStorageUsageInBytesSetAt: string;
      }

      export type ProjectServerDisableReason = "suspended";

      export type ProjectServerStatus =
        | "pending"
        | "ready"
        | "unready"
        | "suspended";

      export interface ProjectServer {
        clusterName: string;
        createdAt: string;
        customerId: string;
        description: string;
        disabledReason?: MittwaldAPIV2.Components.Schemas.ProjectServerDisableReason;
        id: string;
        imageRefId?: string;
        /**
         * @deprecated
         * deprecated by property status
         */
        isReady: boolean;
        machineType: MittwaldAPIV2.Components.Schemas.ProjectMachineType;
        readiness: MittwaldAPIV2.Components.Schemas.ProjectDeprecatedServerReadinessStatus;
        shortId: string;
        statisticsBaseDomain?: string;
        status: MittwaldAPIV2.Components.Schemas.ProjectServerStatus;
        storage: string;
      }

      export interface ProjectVisitorSpec {
        storage: string;
        visitors: number;
      }

      export interface DirectusDomain {
        /**
         * The authcode of the domain. Leave empty when mittwald can generate a authcode on its own
         */
        authCode?: string;
        /**
         * Leave empty when mittwald should keep the same domain owner
         */
        domainOwnerData?: string;
        name: string;
      }

      export interface ScreenshotTarget {
        domain: string;
        path?: string;
        scheme: "http" | "https";
      }

      export interface ScreenshotTask {
        executedAt?: string;
        fileReference?: string;
        id: string;
        priority: number;
        settings: MittwaldAPIV2.Components.Schemas.ScreenshotScreenshotSettings;
        target: MittwaldAPIV2.Components.Schemas.ScreenshotTarget;
        taskState?:
          | MittwaldAPIV2.Components.Schemas.ScreenshotLifecycleState
          | MittwaldAPIV2.Components.Schemas.CommonsError;
      }

      export type ScreenshotLifecycleState = string;

      export interface ScreenshotScreenshotSettings {
        dataType: "jpeg" | "png" | "webp";
        delay: number;
        height: number;
        quality: number;
        width: number;
      }

      export type SshuserEntityTypes = "ssh" | "sftp";

      /**
       * The level of access for an SFTPUser.
       */
      export type SshuserAccessLevel = "full" | "read" | "unspecified";

      /**
       * Method of authentication that a given SFTPUser or SSHuser supports.
       */
      export type SshuserAuthType = "password" | "publicKey";

      /**
       * Method of authentication for an SFTPUser or SSHUser. Can be password or public-keys.
       */
      export type SshuserAuthentication =
        | {
            password: string;
          }
        | {
            publicKeys: MittwaldAPIV2.Components.Schemas.SshuserPublicKey[];
          };

      /**
       * A representation of an ssh-public-key.
       */
      export interface SshuserPublicKey {
        comment: string;
        key: string;
      }

      /**
       * A representation of an SFTPUser.
       */
      export interface SshuserSftpUser {
        accessLevel: MittwaldAPIV2.Components.Schemas.SshuserAccessLevel;
        active?: boolean;
        authUpdatedAt: string;
        createdAt: string;
        description: string;
        directories?: string[];
        expiresAt?: string;
        hasPassword: boolean;
        id: string;
        projectId: string;
        publicKeys?: MittwaldAPIV2.Components.Schemas.SshuserPublicKey[];
        updatedAt?: string;
        userName: string;
      }

      /**
       * A representation of an SSHUser.
       */
      export interface SshuserSshUser {
        active?: boolean;
        authUpdatedAt: string;
        createdAt: string;
        description: string;
        expiresAt?: string;
        hasPassword: boolean;
        id: string;
        projectId: string;
        publicKeys?: MittwaldAPIV2.Components.Schemas.SshuserPublicKey[];
        updatedAt?: string;
        userName: string;
      }

      export interface SslCertificate {
        caBundle?: string;
        certificate: string;
        certificateOrderId?: string;
        certificateRequestId: string;
        certificateType: MittwaldAPIV2.Components.Schemas.SslCertificateType;
        commonName?: string;
        contact?: MittwaldAPIV2.Components.Schemas.SslContact;
        dnsNames?: string[];
        id: string;
        isExpired: boolean;
        issuer?: string;
        lastExpirationThresholdHit: number;
        projectId: string;
        validFrom: string;
        validTo: string;
      }

      export interface SslCertificateData {
        caBundle?: string;
        certificate?: string;
        signingRequest?: string;
      }

      export interface SslCertificateError {
        message:
          | "certificate_read_failed"
          | "certificate_decode_failed"
          | "certificate_parsing_failed"
          | "certificate_self_signed"
          | "certificate_not_authorized_to_sign"
          | "certificate_expired"
          | "ca_not_authorized_for_this_name"
          | "too_many_intermediates"
          | "incompatible_usage"
          | "unknown_authority"
          | "private_key_read_failed"
          | "private_key_decode_failed"
          | "private_key_parse_failed"
          | "private_key_encrypted"
          | "private_key_not_rsa"
          | "private_key_mismatch"
          | "unknown_cloudflare_error"
          | "unknown";
      }

      export interface SslCertificateRequest {
        certificateData: MittwaldAPIV2.Components.Schemas.SslCertificateData;
        certificateType: MittwaldAPIV2.Components.Schemas.SslCertificateType;
        commonName?: string;
        contact?: MittwaldAPIV2.Components.Schemas.SslContact;
        createdAt: string;
        dnsNames?: string[];
        id: string;
        isCompleted: boolean;
        issuer?: string;
        projectId: string;
        validFrom?: string;
        validTo?: string;
      }

      export interface SslCertificateRequestCreateRequest {
        certificate: string;
        privateKey: string;
        projectId: string;
      }

      export interface SslCertificateRequestCreateResponse {
        commonName?: string;
        contact: MittwaldAPIV2.Components.Schemas.SslContact;
        dnsNames?: string[];
        id: string;
        issuer?: string;
        signingRequest?: string;
        validFrom?: string;
        validTo?: string;
      }

      export interface SslCertificateRequestCreateWithCSRRequest {
        commonName: string;
        contact: MittwaldAPIV2.Components.Schemas.SslContact;
        projectId: string;
      }

      export type SslCertificateType = 0 | 1 | 2;

      export interface SslCheckReplaceChanges {
        commonName?: MittwaldAPIV2.Components.Schemas.SslCheckReplaceFieldChange;
        dnsNames?: MittwaldAPIV2.Components.Schemas.SslCheckReplaceSliceChange;
        issuer?: MittwaldAPIV2.Components.Schemas.SslCheckReplaceFieldChange;
        validFrom?: MittwaldAPIV2.Components.Schemas.SslCheckReplaceDateChange;
        validTo?: MittwaldAPIV2.Components.Schemas.SslCheckReplaceDateChange;
      }

      export interface SslCheckReplaceDateChange {
        newValue: string;
        oldValue: string;
      }

      export interface SslCheckReplaceFieldChange {
        newValue: string;
        oldValue: string;
      }

      export interface SslCheckReplaceCertificateResponse {
        changes?: MittwaldAPIV2.Components.Schemas.SslCheckReplaceChanges;
        errors?: MittwaldAPIV2.Components.Schemas.SslCertificateError[];
        isReplaceable: boolean;
      }

      export interface SslCheckReplaceSliceChange {
        addedValues: string[];
        removedValues: string[];
        values: string[];
      }

      export interface SslContact {
        city?: string;
        company?: string;
        /**
         * Two letter abbreviation - country code (ISO 3166-1 Alpha-2).
         */
        country?: string;
        organizationalUnit?: string;
        state?: string;
      }

      export type StoragespaceStatisticsCategoryKind =
        | "webspace"
        | "projectBackup"
        | "mailAddress"
        | "mysqlDatabase"
        | "redisDatabase"
        | "containerVolume";

      export interface StoragespaceStatisticsCategory {
        kind: MittwaldAPIV2.Components.Schemas.StoragespaceStatisticsCategoryKind;
        resources?: MittwaldAPIV2.Components.Schemas.StoragespaceStatisticsResource[];
        totalUsageInBytes: number;
      }

      export type StoragespaceStatisticsKind = "server" | "project";

      export interface StoragespaceStatisticsMeta {
        isExceeding?: boolean;
        /**
         * The last exceedance limit in bytes during the exceedance time, therefore can differ from the current limit. It is retained as a historical record of the most recent exceedance and does not reset once set.
         */
        lastExceedanceLimitInBytes?: number;
        /**
         * The last total exceedance in bytes related to the limit during the exceedance time, see lastExceedanceLimitInBytes. It is retained as a historical record of the most recent exceedance and does not reset once set.
         */
        lastTotalExceedanceInBytes?: number;
        /**
         * The last total exceedance date. It is retained as a historical record of the most recent exceedance and does not reset once set.
         */
        lastTotalExceedanceInBytesSetAt?: string;
        limitInBytes?: number;
        /**
         * If true, set notification threshold is used as limit for meta calculations. E.g. for projects with a parent server.
         */
        notificationThresholdUsedAsLimit?: boolean;
        /**
         * The current total exceedance in bytes.
         */
        totalExceedanceInBytes?: number;
        /**
         * The current total exceedance date.
         */
        totalExceedanceInBytesSetAt?: string;
        totalFreeInBytes?: number;
        totalFreeInPercentage?: number;
        totalUsageInBytes: number;
        totalUsageInPercentage?: number;
      }

      export interface StoragespaceStatisticsResource {
        description?: string;
        id: string;
        name: string;
        usageInBytes: number;
        usageInBytesSetAt: string;
      }

      export interface StoragespaceStatistics {
        childStatistics?: MittwaldAPIV2.Components.Schemas.StoragespaceStatistics[];
        description?: string;
        id: string;
        kind: MittwaldAPIV2.Components.Schemas.StoragespaceStatisticsKind;
        meta: MittwaldAPIV2.Components.Schemas.StoragespaceStatisticsMeta;
        name: string;
        notificationThresholdInBytes?: number;
        statisticCategories?: MittwaldAPIV2.Components.Schemas.StoragespaceStatisticsCategory[];
      }

      export interface TaskAggregateReference {
        aggregate: string;
        domain: string;
        id: string;
      }

      export interface SignupAccount {
        email?: string;
        /**
         * The users mfa details.
         */
        mfaDetails?: {
          mfaConfirmed?: boolean;
          mfaInitialized?: boolean;
        };
        passwordUpdatedAt?: string;
        person?: MittwaldAPIV2.Components.Schemas.CommonsPerson;
        userId?: string;
      }

      export interface SignupApiToken {
        apiTokenId: string;
        createdAt: string;
        description: string;
        expiresAt?: string;
        roles: ("api_read" | "api_write")[];
      }

      export interface SignupDeviceInfo {
        browser?: string;
        model?: string;
        os?: string;
        type?: string;
      }

      export interface SignupDomainError {
        /**
         * A json object, given further information about the error
         */
        info?: {};
        /**
         * Some more detailed information about the error
         */
        message: string;
        /**
         * Unique key for the error type
         */
        name: string;
      }

      export interface SignupLocation {
        city?: string;
        country?: string;
        ipAddress?: string;
      }

      export interface SignupOAuthClient {
        allowedGrantTypes?: string[];
        allowedRedirectUris?: string[];
        allowedScopes?: string[];
        contributorId: string;
        description?: string;
        humanReadableName: string;
        id: string;
      }

      export interface SignupProfile {
        email?: string;
        /**
         * the users mfa details
         */
        mfaDetails?: {
          mfaConfirmed?: boolean;
          mfaInitialized?: boolean;
        };
        passwordUpdatedAt?: string;
        person?: MittwaldAPIV2.Components.Schemas.CommonsPerson;
        userId?: string;
      }

      export interface UserCustomerMembership {
        expiresAt?: string;
        memberSince: string;
        role: "owner" | "member" | "accountant";
      }

      export interface UserUserFeedback {
        id: string;
        message: string;
        origin: string;
        subject: string;
        vote: number;
      }

      export interface UserProjectMembership {
        expiresAt?: string;
        inherited: boolean;
        memberSince: string;
        role: "owner" | "emailadmin" | "external";
      }

      export interface UserUser {
        avatarRef?: string;
        customerMemberships?: {
          [k: string]: MittwaldAPIV2.Components.Schemas.UserCustomerMembership;
        };
        email?: string;
        /**
         * Additional information about mittwald employees.
         */
        employeeInformation?: {
          department: string;
        };
        /**
         * Truth value, whether the user is a mittwald employee
         */
        isEmployee?: boolean;
        mfa?: {
          active: boolean;
          setup: boolean;
        };
        passwordUpdatedAt?: string;
        person: MittwaldAPIV2.Components.Schemas.CommonsPerson;
        phoneNumber?: string;
        projectMemberships?: {
          [k: string]: MittwaldAPIV2.Components.Schemas.UserProjectMembership;
        };
        registeredAt?: string;
        userId: string;
      }

      export interface SignupSshKey {
        algorithm: string;
        comment: string;
        createdAt: string;
        expiresAt?: string;
        fingerprint: string;
        key: string;
        sshKeyId: string;
      }

      export interface PollUserPollSettings {
        completedAt?: string;
        dontShowUntil?: string;
        ignoredAt?: string;
        shouldShow: boolean;
        status: "completed" | "muted" | "ignored" | "new";
        userId: string;
      }

      export interface SignupUserSession {
        created: string;
        device: MittwaldAPIV2.Components.Schemas.SignupDeviceInfo;
        lastAccess?: string;
        location?: MittwaldAPIV2.Components.Schemas.SignupLocation;
        tokenId: string;
      }

      export interface VarnishConfigRevision {
        expire?: number;
        files: MittwaldAPIV2.Components.Schemas.VarnishConfigFileRef[];
        note?: string;
        revision: number;
        updated: string;
      }

      export interface VarnishConfigTemplate {
        /**
         * A set of config file references.
         */
        files: MittwaldAPIV2.Components.Schemas.VarnishConfigFileRef[];
        isGlobal?: boolean;
        note?: string;
        projectId?: string;
        softwareConfigTemplateId: string;
        softwareTemplateId: string;
        updatedAt?: string;
      }

      export interface VarnishConfigFile {
        content: string;
        meta?: MittwaldAPIV2.Components.Schemas.VarnishConfigFileMetadata;
      }

      export interface VarnishConfigFileMetadata {
        name: string;
        path?: string;
      }

      export interface VarnishConfigFileRef {
        meta?: MittwaldAPIV2.Components.Schemas.VarnishConfigFileMetadata;
        refId: string;
      }

      export interface VarnishGlobalConfigTemplate {
        data: string;
        name: string;
        updatedAt: string;
      }

      export interface VarnishSoftware {
        config: MittwaldAPIV2.Components.Schemas.VarnishSoftwareConfig;
        projectId: string;
        settings?: {
          [k: string]: string;
        };
        softwareId: string;
        softwareTemplateId: string;
        softwareVersion: string;
        updatedAt: string;
      }

      export interface VarnishSoftwareConfig {
        configExpiration?: MittwaldAPIV2.Components.Schemas.VarnishConfigExpiration;
        latestConfigRevision?: number;
        revisions?: MittwaldAPIV2.Components.Schemas.VarnishConfigRevision[];
      }

      export interface VarnishConfigExpiration {
        maxVersions?: number;
        retentionTime?: number;
      }

      export interface VarnishSoftwareConfigFileAccessToken {
        accessToken: string;
        expiresAt: string;
      }

      export interface VarnishSoftwareSetting {
        name: string;
        value: string;
      }

      export interface VerificationEmailDetectPhishingMailResponse {
        result: MittwaldAPIV2.Components.Schemas.VerificationEmailOrigin;
      }

      export type VerificationEmailOrigin =
        | "IS_MITTWALD"
        | "IS_NOT_MITTWALD"
        | "COULD_BE_MITTWALD";

      export type ContainerVolumeSortOrder =
        | "nameAsc"
        | "nameDesc"
        | "storageAsc"
        | "storageDesc";

      /**
       * AdditionalValidationSchemaKind is an enum, describing the possible types of an additional validation schema.
       */
      export type AppAdditionalValidationSchemaKind = "password-rule";

      /**
       * AdditionalValidationSchema is a stringified custom validation schema, e.g password rules.
       */
      export interface AppAdditionalValidationSchema {
        kind?: MittwaldAPIV2.Components.Schemas.AppAdditionalValidationSchemaKind;
        schema?: string;
      }

      export interface CommonsAddress {
        street: string;
        houseNumber: string;
        city: string;
        zip: string;
        /**
         * ISO 3166-1 alpha-2 country code
         */
        countryCode: string;
        addressPrefix?: string;
      }

      export interface CommonsContact {
        firstName?: string;
        lastName?: string;
        title?: string;
        salutation: MittwaldAPIV2.Components.Schemas.CommonsSalutation;
        company?: string;
        address: MittwaldAPIV2.Components.Schemas.CommonsAddress;
        emailAddress?: string;
        phoneNumbers?: string[];
        useFormalTerm?: boolean;
      }

      export interface CommonsError {
        message: string;
        type: string;
      }

      /**
       * The users personal information, e.g. first name.
       */
      export interface CommonsPerson {
        /**
         * The users first name
         */
        firstName: string;
        /**
         * The users last name
         */
        lastName: string;
        title?: MittwaldAPIV2.Components.Schemas.CommonsSalutation;
      }

      export type CommonsSalutation = "mr" | "ms" | "other";

      export interface CommonsValidationErrorSchema {
        /**
         * The standard error message
         */
        message: string;
        /**
         * The path to the part of the data that was validated. JavaScript property access notation (e.g., ".prop[1].subProp") is used.
         *
         */
        path: string;
        /**
         * ajv validation error type (e.g. "format", "required", "type") or own validation error types
         */
        type: string;
        /**
         * The object with the additional information about the error that can be used to create custom error messages. Keys depend on the
         * type that failed validation (e.g. "missingProperty" for type "required")
         *
         */
        context?: {
          [k: string]: string;
        };
      }

      export interface CommonsValidationErrors {
        type: "ValidationError";
        message?: string;
        validationErrors: MittwaldAPIV2.Components.Schemas.CommonsValidationErrorSchema[];
      }
    }

    namespace Parameters {}

    namespace RequestBodies {}

    namespace Responses {
      namespace AppGenericResponse {
        export interface ApplicationJson {}
      }

      namespace CustomerGenericResponse {
        export interface ApplicationJson {}
      }

      namespace CustomerFailedPreconditionError {
        export type ApplicationJson =
          MittwaldAPIV2.Components.Schemas.CommonsError;
      }

      namespace DnsGenericResponse {
        export interface ApplicationJson {}
      }

      namespace DomainSuccessResponse {
        export interface ApplicationJson {
          isAsync?: boolean;
          transactionId?: string;
        }
      }

      namespace DomainTransferabilityResponse {
        export interface ApplicationJson {
          reasons: {
            domainAgeTooSmall: boolean;
            domainDoesNotExist: boolean;
            transferLock: boolean;
            wrongAuthCode: boolean;
          };
          transferable: boolean;
        }
      }

      namespace InvoiceEmptyResponse {
        export interface ApplicationJson {}
      }

      namespace MailEmptyResponse {
        export interface ApplicationJson {}
      }

      namespace OrderGenericResponse {
        export interface ApplicationJson {}
      }

      namespace OrderNotFoundError {
        export interface ApplicationJson {}
      }

      namespace SslValidationError {
        export type ApplicationJson =
          MittwaldAPIV2.Components.Schemas.SslCertificateError;
      }

      namespace SignupInternalServerError {
        export type ApplicationJson =
          MittwaldAPIV2.Components.Schemas.SignupDomainError & {
            name?: "InternalServerError";
          };
      }

      namespace SignupNoValidAccessTokenError {
        export type ApplicationJson =
          MittwaldAPIV2.Components.Schemas.SignupDomainError & {
            name?: "NoAccessTokenProvided";
          };
      }

      namespace SignupRemovingLastOwnerNotAllowedError {
        export interface ApplicationJson {
          /**
           * A json object, given further information about the error
           */
          info?: {};
          /**
           * more information about the error
           */
          message: string;
          name: "RemovingLastOwnerNotAllowedError";
        }
      }

      namespace SignupSecondFactorRequiredError {
        export type ApplicationJson =
          MittwaldAPIV2.Components.Schemas.SignupDomainError & {
            name: "SecondFactorRequired";
          };
      }

      namespace CommonsDefaultError {
        export type ApplicationJson =
          MittwaldAPIV2.Components.Schemas.CommonsError;
      }

      namespace CommonsNotFoundError {
        export type ApplicationJson =
          MittwaldAPIV2.Components.Schemas.CommonsError;
      }

      namespace CommonsRateLimitError {
        export interface ApplicationJson {
          message?: string;
          type?: string;
        }
      }

      namespace CommonsValidationError {
        export type ApplicationJson =
          MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
      }
    }

    namespace SecuritySchemes {
      /**
       * Legacy Access Token is required in header
       */
      export interface CommonLegacyAccessToken {
        Authorization: string;
      }

      /**
       * Access Token is required in header
       */
      export interface CommonsAccessToken {
        "x-access-token"?: string;
      }

      /**
       * 'Authorization: Bearer xyz' is required
       */
      export interface CommonsLegacyBearerAuthentication {
        Authorization: string;
      }
    }
  }

  namespace Paths {
    namespace V2AppInstallationsAppInstallationIdActionsAction {
      namespace Post {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
            action: MittwaldAPIV2.Components.Schemas.AppAction;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppsAppId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            appId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppApp;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppInstallationsAppInstallationId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppAppInstallation;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
          };

          export interface RequestBody {
            appVersionId?: string;
            customDocumentRoot?: string;
            description?: string;
            systemSoftware?: {
              [k: string]: {
                systemSoftwareVersion?: string;
                updatePolicy?: MittwaldAPIV2.Components.Schemas.AppSystemSoftwareUpdatePolicy;
              };
            };
            updatePolicy?: MittwaldAPIV2.Components.Schemas.AppAppUpdatePolicy;
            userInputs?: MittwaldAPIV2.Components.Schemas.AppSavedUserInput[];
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppsAppIdVersionsAppVersionId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            appId: string;
            appVersionId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppAppVersion;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppInstallationsAppInstallationIdSystemSoftware {
      namespace Get {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            tagFilter?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppSystemSoftware[];
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppInstallationsAppInstallationIdMissingDependencies {
      namespace Get {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            targetAppVersionID: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                missingSystemSoftwareDependencies?: MittwaldAPIV2.Components.Schemas.AppSystemSoftwareDependency[];
                missingUserInputs?: MittwaldAPIV2.Components.Schemas.AppUserInput[];
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SystemSoftwaresSystemSoftwareId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            systemSoftwareId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppSystemSoftware;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SystemSoftwaresSystemSoftwareIdVersionsSystemSoftwareVersionId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            systemSoftwareId: string;
            systemSoftwareVersionId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppSystemSoftwareVersion;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppInstallationsAppInstallationIdDatabase {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
          };

          export interface RequestBody {
            databaseId: string;
            databaseUserIds?: {
              [k: string]: string;
            };
            purpose: "primary" | "cache" | "custom";
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppInstallations {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            appIds?: string[];
            searchTerm?: string;
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppAppInstallation[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdAppInstallations {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            appIds?: string[];
            searchTerm?: string;
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppAppInstallation[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            appVersionId: string;
            description: string;
            updatePolicy: MittwaldAPIV2.Components.Schemas.AppAppUpdatePolicy;
            userInputs: MittwaldAPIV2.Components.Schemas.AppSavedUserInput[];
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Apps {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header = {};

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppApp[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppsAppIdVersions {
      namespace Get {
        namespace Parameters {
          export type Path = {
            appId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            recommended?: boolean;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppAppVersion[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SystemSoftwares {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppSystemSoftware[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SystemSoftwaresSystemSoftwareIdVersions {
      namespace Get {
        namespace Parameters {
          export type Path = {
            systemSoftwareId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            versionRange?: string;
            recommended?: boolean;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppSystemSoftwareVersion[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppsAppIdVersionsBaseAppVersionIdUpdateCandidates {
      namespace Get {
        namespace Parameters {
          export type Path = {
            appId: string;
            baseAppVersionId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppAppVersion[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppInstallationsAppInstallationIdDatabaseReplace {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
          };

          export interface RequestBody {
            /**
             * The IDs of the users of the database you want the old database to be replaced with.
             */
            databaseUserIds?: {
              [k: string]: string;
            };
            /**
             * The ID of the database you want the old database to be replaced with.
             */
            newDatabaseId: string;
            /**
             * The ID of the database you want to be replaced.
             */
            oldDatabaseId: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppInstallationsAppInstallationIdActionsCopy {
      namespace Post {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
          };

          export interface RequestBody {
            description: string;
            targetProjectId?: string;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppInstallationsAppInstallationIdStatus {
      namespace Get {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.AppAppInstallationStatus;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppInstallationsAppInstallationIdDatabasesDatabaseIdUsers {
      namespace Put {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
            databaseId: string;
          };

          export interface RequestBody {
            databaseUserIds: {
              [k: string]: string;
            };
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppInstallationsAppInstallationIdDatabasesDatabaseId {
      namespace Delete {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
            databaseId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ArticlesArticleId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            articleId: string;
          };

          export type Header = {};

          export type Query = {
            customerId?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ArticleReadableArticle;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Articles {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header = {};

          export type Query = {
            customerId?: string;
            tags?: string[];
            templateNames?: string[];
            articleIds?: string[];
            orderable?: (
              | "forbidden"
              | "internal"
              | "beta_testing"
              | "full"
              | "deprecated"
            )[];
            name?: string;
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ArticleReadableArticle[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectBackupsProjectBackupIdExport {
      namespace Post {
        namespace Parameters {
          export type Path = {
            projectBackupId: string;
          };

          export interface RequestBody {
            /**
             * The desired format to export the ProjectBackup in.
             */
            format: "tar" | "zip";
            /**
             * Password to use to protect the archive.
             */
            password?: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            projectBackupId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdBackupSchedules {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.BackupProjectBackupSchedule[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            /**
             * Description of the BackupSchedule.
             */
            description?: string;
            /**
             * Execution schedule in crontab notation.
             */
            schedule: string;
            /**
             * TTL of the BackupSchedule as time string.
             */
            ttl: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.BackupProjectBackupSchedule;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdBackups {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            searchTerm?: string;
            withExportsOnly?: boolean;
            sortOrder?: MittwaldAPIV2.Components.Schemas.BackupBackupSortOrder;
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.BackupProjectBackup[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            /**
             * Description of the Backup.
             */
            description?: string;
            /**
             * Time when to expire the Backup.
             */
            expirationTime: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.BackupProjectBackup;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectBackupSchedulesProjectBackupScheduleId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectBackupScheduleId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.BackupProjectBackupSchedule;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            projectBackupScheduleId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            projectBackupScheduleId: string;
          };

          export interface RequestBody {
            /**
             * Description of the ProjectBackupSchedule. Note that the description of isSystemBackup true items cannot be changed.
             */
            description?: string;
            /**
             * Execution schedule in crontab notation. Note that the schedule of isSystemBackup true items must be daily once.
             */
            schedule?: string;
            /**
             * TTL of the ProjectBackupSchedule as time string.
             */
            ttl?: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectBackupsProjectBackupId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectBackupId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.BackupProjectBackup;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            projectBackupId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectBackupsTocProjectIdProjectBackupId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
            projectBackupId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            directory?: string;
            namespace?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.BackupProjectBackupTOC;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $502 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectBackupsProjectBackupIdRestorePath {
      namespace Post {
        namespace Parameters {
          export type Path = {
            projectBackupId: string;
          };

          export type RequestBody =
            MittwaldAPIV2.Components.Schemas.BackupProjectBackupRestorePath;

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectBackupsProjectBackupIdDescription {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            projectBackupId: string;
          };

          export interface RequestBody {
            /**
             * Description of the ProjectBackup.
             */
            description?: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdRegistries {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            hasCredentials?: boolean;
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContainerRegistry[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type RequestBody =
            MittwaldAPIV2.Components.Schemas.ContainerCreateRegistry;

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContainerRegistry;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $409 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2StacksStackId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            stackId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContainerStackResponse;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            stackId: string;
          };

          export interface RequestBody {
            services?: {
              [
                k: string
              ]: MittwaldAPIV2.Components.Schemas.ContainerServiceDeclareRequest;
            };
            /**
             * Volumes belonging to a Stack. Removing results in a detach, delete must be explicit.
             */
            volumes?: {
              [
                k: string
              ]: MittwaldAPIV2.Components.Schemas.ContainerVolumeDeclareRequest;
            };
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContainerStackResponse;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            stackId: string;
          };

          export interface RequestBody {
            services?: {
              [
                k: string
              ]: MittwaldAPIV2.Components.Schemas.ContainerServiceRequest;
            };
            /**
             * Volumes belonging to a Stack. Removing results in a detach, delete must be explicit.
             */
            volumes?: {
              [
                k: string
              ]: MittwaldAPIV2.Components.Schemas.ContainerVolumeRequest;
            };
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            recreate?: boolean;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContainerStackResponse;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2RegistriesRegistryId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            registryId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContainerRegistry;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            registryId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            registryId: string;
          };

          export type RequestBody =
            MittwaldAPIV2.Components.Schemas.ContainerUpdateRegistry;

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $409 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2StacksStackIdVolumesVolumeId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            stackId: string;
            volumeId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContainerVolumeResponse;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            stackId: string;
            volumeId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContainerImageConfig {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            imageReference: string;
            useCredentialsForProjectId?: string;
            useCredentialsForRegistryId?: string;
            generateAiData?: boolean;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContainerContainerImageConfig;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2StacksStackIdServicesServiceIdLogs {
      namespace Get {
        namespace Parameters {
          export type Path = {
            stackId: string;
            serviceId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type TextPlain = string;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2StacksStackIdServicesServiceId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            stackId: string;
            serviceId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContainerServiceResponse;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdServices {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            stackId?: string;
            status?: MittwaldAPIV2.Components.Schemas.ContainerServiceStatus;
            requiresRecreate?: boolean;
            searchTerm?: string;
            sortOrder?: MittwaldAPIV2.Components.Schemas.ContainerServiceSortOrder;
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContainerServiceResponse[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdStacks {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContainerStackResponse[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdVolumes {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            stackId?: string;
            searchTerm?: string;
            sortOrder?: MittwaldAPIV2.Components.Schemas.ContainerVolumeSortOrder;
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContainerVolumeResponse[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2StacksStackIdServicesServiceIdActionsPull {
      namespace Post {
        namespace Parameters {
          export type Path = {
            stackId: string;
            serviceId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            skipRecreate?: boolean;
          };
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2StacksStackIdServicesServiceIdActionsRecreate {
      namespace Post {
        namespace Parameters {
          export type Path = {
            stackId: string;
            serviceId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2StacksStackIdServicesServiceIdActionsRestart {
      namespace Post {
        namespace Parameters {
          export type Path = {
            stackId: string;
            serviceId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2StacksStackIdServicesServiceIdActionsStart {
      namespace Post {
        namespace Parameters {
          export type Path = {
            stackId: string;
            serviceId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2StacksStackIdServicesServiceIdActionsStop {
      namespace Post {
        namespace Parameters {
          export type Path = {
            stackId: string;
            serviceId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ActionsValidateContainerRegistryUri {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          /**
           * The Registry URI to validate.
           */
          export interface RequestBody {
            registryUri: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                reason?: string;
                valid: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2RegistriesRegistryIdActionsValidateCredentials {
      namespace Post {
        namespace Parameters {
          export type Path = {
            registryId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                valid: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContractsContractIdItemsContractItemIdTermination {
      namespace Post {
        namespace Parameters {
          export type Path = {
            contractId: string;
            contractItemId: string;
          };

          export interface RequestBody {
            /**
             * A reason for the Termination can be given as plain text.
             */
            reason?: string;
            /**
             * The termination date has to be a valid date according to activation and contract period of the ContractItem. If none given, the next possible termination date will be used.
             */
            terminationTargetDate?: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                contractId?: string;
                contractItemId?: string;
                reason?: string;
                terminationTargetDate?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            contractId: string;
            contractItemId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                contractId?: string;
                contractItemId?: string;
                isCancelled?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContractsContractIdItemsContractItemIdTariffChange {
      namespace Delete {
        namespace Parameters {
          export type Path = {
            contractId: string;
            contractItemId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                contractId?: string;
                contractItemId?: string;
                isCancelled?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContractsContractIdTermination {
      namespace Post {
        namespace Parameters {
          export type Path = {
            contractId: string;
          };

          export interface RequestBody {
            /**
             * A reason for the termination can be given as plain text.
             */
            reason?: string;
            /**
             * The termination date has to be a valid date according to activation and contract period of the base ContractItem. If none given, the next possible termination date will be used.
             */
            terminationTargetDate?: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                contractId?: string;
                itemsScheduledForTermination?: string[];
                reason?: string;
                terminationTargetDate?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            contractId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                contractId?: string;
                isCancelled?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContractsContractIdBaseItems {
      namespace Get {
        namespace Parameters {
          export type Path = {
            contractId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContractContractItem;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CertificatesCertificateIdContract {
      namespace Get {
        namespace Parameters {
          export type Path = {
            certificateId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContractContract;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsDomainIdContract {
      namespace Get {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContractContract;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdLeadFyndrProfileContract {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContractContract;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MailAddressesMailAddressIdContract {
      namespace Get {
        namespace Parameters {
          export type Path = {
            mailAddressId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContractContract;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdContract {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContractContract;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ServersServerIdContract {
      namespace Get {
        namespace Parameters {
          export type Path = {
            serverId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContractContract;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContractsContractIdItemsContractItemId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            contractId: string;
            contractItemId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContractContractItem;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContractsContractId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            contractId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContractContract;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdContracts {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ContractContract[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContributorsContributorIdBillingInformation {
      namespace Get {
        namespace Parameters {
          export type Path = {
            contributorId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                contributorId?: string;
                invoiceFooter?: string;
                onboardingStatus?: "NOT_STARTED" | "STARTED" | "SUCCESSFUL";
                stripeAccountId?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            contributorId: string;
          };

          export interface RequestBody {
            invoiceFooter?: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                contributorId?: string;
                invoiceFooter?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdBillingPortal {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                url?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContributorsContributorIdDashboard {
      namespace Get {
        namespace Parameters {
          export type Path = {
            contributorId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                url?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContributorsContributorIdContractPartners {
      namespace Get {
        namespace Parameters {
          export type Path = {
            contributorId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            extensionId?: string;
            extensionInstanceId?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MarketplaceContractPartner[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContributorsContributorIdInvoicesIncoming {
      namespace Get {
        namespace Parameters {
          export type Path = {
            contributorId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
            sort?: "invoiceNumber"[];
            order?: ("asc" | "desc")[];
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson = {
                currency: string;
                customerId: string;
                customerName: string;
                customerNumber: string;
                date: string;
                id: string;
                invoiceNumber: string;
                pdfId: string;
                recipient: MittwaldAPIV2.Components.Schemas.InvoiceRecipient;
                totalGross: number;
                totalNet: number;
              }[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContributorsContributorIdInvoicesOutgoing {
      namespace Get {
        namespace Parameters {
          export type Path = {
            contributorId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson = {
                invoiceDate: string;
                invoiceId: string;
                invoiceNumber: string;
                pdfLink: string;
                totalGross: number;
                totalNet: number;
                webLink: string;
              }[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContributorsContributorIdInvoicesIncomingContributorReceiptIdFileAccessToken {
      namespace Get {
        namespace Parameters {
          export type Path = {
            contributorId: string;
            contributorReceiptId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                accessToken: string;
                expiresAt: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdSecret {
      namespace Put {
        namespace Parameters {
          export type Path = {
            contributorId: string;
            extensionId: string;
            extensionInstanceId: string;
          };

          export interface RequestBody {
            allowWebhookFailure?: boolean;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                secret: string;
                webhookResult: {
                  failure: boolean;
                  /**
                   * The status code returned by the external application.
                   */
                  statusCode?: string;
                };
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Conversations {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header = {};

          export type Query = {
            sort?: (
              | "createdAt"
              | "lastMessage.createdAt"
              | "title"
              | "priority"
              | "shortId"
              | "conversationId"
            )[];
            order?: ("asc" | "desc")[];
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ConversationConversation[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            categoryId?: string;
            mainUserId?: string;
            notificationRoles?: MittwaldAPIV2.Components.Schemas.ConversationNotificationRole[];
            relatedTo?: MittwaldAPIV2.Components.Schemas.ConversationRelatedAggregateReference;
            sharedWith?: MittwaldAPIV2.Components.Schemas.ConversationShareableAggregateReference;
            title?: string;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                conversationId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ConversationsConversationIdMessages {
      namespace Get {
        namespace Parameters {
          export type Path = {
            conversationId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson = (
                | MittwaldAPIV2.Components.Schemas.ConversationMessage
                | MittwaldAPIV2.Components.Schemas.ConversationStatusUpdate
                | MittwaldAPIV2.Components.Schemas.ConversationServiceRequest
              )[];
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            conversationId: string;
          };

          export interface RequestBody {
            fileIds?: string[];
            messageContent?: string;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                conversationId: string;
                messageId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ConversationCategoriesCategoryId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            categoryId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ConversationCategory;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ConversationsConversationIdMembers {
      namespace Get {
        namespace Parameters {
          export type Path = {
            conversationId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ConversationConversationMembers;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdConversationPreferences {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ConversationConversationPreferences;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ConversationsConversationId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            conversationId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ConversationConversation;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            conversationId: string;
          };

          export interface RequestBody {
            categoryId?: string;
            relatedTo?: MittwaldAPIV2.Components.Schemas.ConversationRelatedAggregateReference;
            title?: string;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                conversationId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ConversationsConversationIdFilesFileIdAccessToken {
      namespace Get {
        namespace Parameters {
          export type Path = {
            conversationId: string;
            fileId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                accessToken: string;
                expiresAt: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ConversationCategories {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ConversationCategory[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ConversationsConversationIdFiles {
      namespace Post {
        namespace Parameters {
          export type Path = {
            conversationId: string;
          };

          export interface RequestBody {}

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                conversationId: string;
                rules: {
                  maxSizeInKB: number;
                  mimeTypes: string[];
                  properties?: {
                    imageDimensions?: {
                      max?: {
                        height?: number;
                        width?: number;
                      };
                      min?: {
                        height?: number;
                        width?: number;
                      };
                    };
                  };
                };
                uploadToken: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ConversationsConversationIdStatus {
      namespace Put {
        namespace Parameters {
          export type Path = {
            conversationId: string;
          };

          export interface RequestBody {
            status: "open" | "answered" | "closed";
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                conversationId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ConversationsConversationIdMessagesMessageId {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            conversationId: string;
            messageId: string;
          };

          export interface RequestBody {
            messageContent?: string;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                messageId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CronjobsCronjobIdExecutionsExecutionIdActionsAbort {
      namespace Post {
        namespace Parameters {
          export type Path = {
            cronjobId: string;
            executionId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdCronjobs {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CronjobCronjob[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type RequestBody =
            MittwaldAPIV2.Components.Schemas.CronjobCronjobRequest;

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CronjobsCronjobIdExecutions {
      namespace Get {
        namespace Parameters {
          export type Path = {
            cronjobId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
            since?: string;
            until?: string;
            status?: string;
            triggeredByUser?: boolean;
            sortOrder?: MittwaldAPIV2.Components.Schemas.CronjobCronjobExecutionSortOrder;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CronjobCronjobExecution[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            cronjobId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * execution-id
                 */
                id: string;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CronjobsCronjobId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            cronjobId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CronjobCronjob;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            cronjobId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            cronjobId: string;
          };

          export interface RequestBody {
            active?: boolean;
            description?: string;
            destination?:
              | MittwaldAPIV2.Components.Schemas.CronjobCronjobUrl
              | MittwaldAPIV2.Components.Schemas.CronjobCronjobCommand;
            email?: string;
            interval?: string;
            timeout?: number;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CronjobsCronjobIdExecutionsExecutionId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            executionId: string;
            cronjobId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CronjobCronjobExecution;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CronjobsCronjobIdAppId {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            cronjobId: string;
          };

          export interface RequestBody {
            appId: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomerInvitesCustomerInviteIdActionsAccept {
      namespace Post {
        namespace Parameters {
          export type Path = {
            customerInviteId: string;
          };

          export interface RequestBody {
            /**
             * Token contained in the invite for authentication.
             */
            invitationToken?: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdInvites {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipCustomerInvite[];
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {
            /**
             * Mail-address of the person to be invited.
             */
            mailAddress: string;
            /**
             * Time the resulting CustomerMembership should expire at.
             */
            membershipExpiresAt?: string;
            /**
             * Message contained in the CustomerInvite.
             */
            message?: string;
            role: MittwaldAPIV2.Components.Schemas.MembershipCustomerRoles;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipCustomerInvite;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $409 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Customers {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            role?: string;
            search?: string;
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CustomerCustomer[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            name: string;
            owner?: MittwaldAPIV2.Components.Schemas.CustomerContact;
            vatId?: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                customerId: string;
                customerNumber: string;
                name: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdRecommendationSuggestions {
      namespace Post {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {
            suggestion: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                customerId?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $409 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdWallet {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                customerId: string;
                points: number;
                recommendationCode?: string;
                walletId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $409 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {}

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                customerId?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $409 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomerInvitesCustomerInviteIdActionsDecline {
      namespace Post {
        namespace Parameters {
          export type Path = {
            customerInviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomerInvitesCustomerInviteId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerInviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipCustomerInvite;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            customerInviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomerMembershipsCustomerMembershipId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerMembershipId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipCustomerMembership;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            customerMembershipId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            customerMembershipId: string;
          };

          export interface RequestBody {
            /**
             * Time the CustomerMembership should expire at.
             */
            expiresAt?: string;
            role: MittwaldAPIV2.Components.Schemas.MembershipCustomerRoles;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CustomerCustomer;
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {
            customerId: string;
            name: string;
            owner?: MittwaldAPIV2.Components.Schemas.CustomerContact;
            vatId?: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                customerId: string;
                customerNumber: string;
                name: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                customerId?: string;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomerTokenInvite {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header = {
            token: string;
          } & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipCustomerInvite;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdLegallyCompetent {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                isLegallyCompetent?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomerInvites {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipCustomerInvite[];
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomerMemberships {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            hasExpiry?: boolean;
            role?: MittwaldAPIV2.Components.Schemas.MembershipCustomerRoles;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipCustomerMembership[];
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdMemberships {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            hasExpiry?: boolean;
            role?: MittwaldAPIV2.Components.Schemas.MembershipCustomerRoles;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipCustomerMembership[];
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdAvatar {
      namespace Post {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {}

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                refId: string;
                rules: {
                  maxSizeInKB: number;
                  mimeTypes: string[];
                  properties?: {
                    imageDimensions?: {
                      max?: {
                        height?: number;
                        width?: number;
                      };
                      min?: {
                        height?: number;
                        width?: number;
                      };
                    };
                  };
                };
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomerInvitesCustomerInviteIdActionsResend {
      namespace Post {
        namespace Parameters {
          export type Path = {
            customerInviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdMysqlDatabases {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DatabaseMySqlDatabase[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            database: MittwaldAPIV2.Components.Schemas.DatabaseCreateMySqlDatabase;
            user: MittwaldAPIV2.Components.Schemas.DatabaseCreateMySqlUserWithDatabase;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
                userId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MysqlDatabasesMysqlDatabaseIdUsers {
      namespace Get {
        namespace Parameters {
          export type Path = {
            mysqlDatabaseId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DatabaseMySqlUser[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            mysqlDatabaseId: string;
          };

          export type RequestBody =
            MittwaldAPIV2.Components.Schemas.DatabaseCreateMySqlUser;

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdRedisDatabases {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DatabaseRedisDatabase[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            configuration?: MittwaldAPIV2.Components.Schemas.DatabaseRedisDatabaseConfiguration;
            /**
             * A description for the database.
             */
            description: string;
            /**
             * The version the database should use.
             */
            version: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MysqlDatabasesMysqlDatabaseId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            mysqlDatabaseId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DatabaseMySqlDatabase;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            mysqlDatabaseId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MysqlUsersMysqlUserId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            mysqlUserId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DatabaseMySqlUser;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            mysqlUserId: string;
          };

          export interface RequestBody {
            accessIpMask?: string;
            accessLevel: "full" | "readonly";
            description: string;
            externalAccess?: boolean;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            mysqlUserId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2RedisDatabasesRedisDatabaseId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            redisDatabaseId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DatabaseRedisDatabase;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            redisDatabaseId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MysqlUsersMysqlUserIdActionsDisable {
      namespace Post {
        namespace Parameters {
          export type Path = {
            mysqlUserId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MysqlUsersMysqlUserIdActionsEnable {
      namespace Post {
        namespace Parameters {
          export type Path = {
            mysqlUserId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MysqlUsersMysqlUserIdPhpMyAdminUrl {
      namespace Get {
        namespace Parameters {
          export type Path = {
            mysqlUserId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DatabasePhpMyAdminURL;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MysqlCharsets {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header = {};

          export type Query = {
            version?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DatabaseMySqlCharacterSettings[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MysqlVersions {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            projectId?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DatabaseMySqlVersion[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2RedisVersions {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            projectId?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DatabaseRedisVersion[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MysqlDatabasesMysqlDatabaseIdDefaultCharset {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            mysqlDatabaseId: string;
          };

          export interface RequestBody {
            characterSettings: MittwaldAPIV2.Components.Schemas.DatabaseCharacterSettings;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MysqlDatabasesMysqlDatabaseIdDescription {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            mysqlDatabaseId: string;
          };

          export interface RequestBody {
            description: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MysqlUsersMysqlUserIdPassword {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            mysqlUserId: string;
          };

          export interface RequestBody {
            password: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2RedisDatabasesRedisDatabaseIdConfiguration {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            redisDatabaseId: string;
          };

          export interface RequestBody {
            configuration?: MittwaldAPIV2.Components.Schemas.DatabaseRedisDatabaseConfiguration;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2RedisDatabasesRedisDatabaseIdDescription {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            redisDatabaseId: string;
          };

          export interface RequestBody {
            description: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AppinstallationsAppInstallationIdDatabases {}

    namespace V2ContractsContractIdItemsContractItemIdNextTerminationDates {}

    namespace V2CustomersCustomerIdActionsLeave {}

    namespace V2DnsZonesZoneIdRecordsetAcombinedCustom {}

    namespace V2DnsZonesZoneIdRecordsetAcombinedManagedIngress {}

    namespace V2DnsZonesZoneIdRecordsetCname {}

    namespace V2DnsZonesZoneIdRecordsetMxCustom {}

    namespace V2DnsZonesZoneIdRecordsetMxManaged {}

    namespace V2DnsZonesZoneIdRecordsetSrv {}

    namespace V2DnsZonesZoneIdRecordsetTxt {}

    namespace V2DomainsDomainIdHandlesOwnerc {}

    namespace V2DomainsDomainIdProjectId {}

    namespace V2Domains {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            projectId?: string;
            page?: number;
            limit?: number;
            domainSearchName?: string;
            contactHash?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DomainDomain[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsDomainIdNameservers {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export interface RequestBody {
            /**
             * @minItems 2
             */
            nameservers?: [string, string, ...string[]];
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsDomainIdDeclarationsAuthcode {}

    namespace V2DomainsDomainIdDeclarationsHandles {}

    namespace V2DomainsHandleSchemaDomainName {}

    namespace V2DomainsDomainIdScreenshotsNewest {}

    namespace V2ProjectsProjectIdDomains {}

    namespace V2FileTokenRulesToken {}

    namespace V2FileTypeRulesName {}

    namespace V2ProjectsProjectIdIngresses {}

    namespace V2IngressesIngressIdPaths {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            ingressId: string;
          };

          export type RequestBody =
            MittwaldAPIV2.Components.Schemas.IngressPath[];

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2IngressesIngressIdTls {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            ingressId: string;
          };

          export type RequestBody =
            | {
                acme: boolean;
                /**
                 * @deprecated
                 * Was added by mistake. Never did anything.
                 */
                isCreated?: boolean;
                /**
                 * @deprecated
                 * Was added by mistake. Never did anything.
                 */
                requestDeadline?: string;
              }
            | {
                certificateId: string;
              };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdInvoicesInvoiceId {}

    namespace V2DeliveryboxesIdDescription {}

    namespace V2DeliveryboxesIdPassword {}

    namespace V2MailaddressesIdAddress {}

    namespace V2ProjectsProjectIdMailsettingsBlacklist {}

    namespace V2ProjectsProjectIdMailsettingsWhitelist {}

    namespace V2MailAddressesMailAddressIdAutoresponder {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            mailAddressId: string;
          };

          export interface RequestBody {
            autoResponder: {
              active: boolean;
              expiresAt?: string;
              message: string;
              startsAt?: string;
            };
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MailAddressesMailAddressIdCatchall {}

    namespace V2MailAddressesMailAddressIdForwardAddresses {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            mailAddressId: string;
          };

          export interface RequestBody {
            forwardAddresses: string[];
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MailAddressesMailAddressIdPassword {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            mailAddressId: string;
          };

          export interface RequestBody {
            password: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MailAddressesMailAddressIdQuota {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            mailAddressId: string;
          };

          export interface RequestBody {
            /**
             * 2 GB
             */
            quotaInBytes: number;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MailAddressesMailAddressIdSpamProtection {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            mailAddressId: string;
          };

          export interface RequestBody {
            spamProtection: {
              active: boolean;
              autoDeleteSpam: boolean;
              folder: "inbox" | "spam";
              relocationMinSpamScore: number;
            };
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdMailSettingsSetting {}

    namespace V2NewsletterSubscriptions {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            firstName?: string;
            lastName?: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                active: boolean;
                email: string;
                registered: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdLeave {}

    namespace V2SignupEmail {}

    namespace V2SignupPasswordResetConfirm {}

    namespace V2UsersSelfIssues {}

    namespace V2SignupTokenApiApiTokenId {}

    namespace V2SignupSshSshKeyId {}

    namespace V2SignupMfa {}

    namespace V2UsersSelfPersonalInformation {
      namespace Put {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            person: MittwaldAPIV2.Components.Schemas.CommonsPerson;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SignupPasswordReset {}

    namespace V2SignupLogout {}

    namespace V2SignupEmailResend {}

    namespace V2UserUserIdAvatar {}

    namespace V2UserFeedback {}

    namespace V2UserIssues {}

    namespace V2UserUserId {}

    namespace V2UserSettings {}

    namespace V2UserUserIdPhone {}

    namespace V2UserUserIdPhoneVerify {}

    namespace V2User {}

    namespace V2SignupSessions {}

    namespace V2SignupSessionsTokenId {}

    namespace V2SignupProfile {}

    namespace V2SignupEmailVerify {}

    namespace V2DnsZones {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            name: string;
            parentZoneId: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DnsZonesDnsZoneId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            dnsZoneId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DnsZone;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            dnsZoneId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdDnsZones {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DnsZone[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DnsZonesDnsZoneIdRecordSetsRecordSetActionsSetManaged {
      namespace Post {
        namespace Parameters {
          export type Path = {
            dnsZoneId: string;
            recordSet: "a" | "mx";
          };

          export interface RequestBody {}

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                ingressId?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DnsZonesDnsZoneIdRecordSetsRecordSet {
      namespace Put {
        namespace Parameters {
          export type Path = {
            dnsZoneId: string;
            recordSet: "a" | "mx" | "txt" | "srv" | "cname" | "caa";
          };

          export type RequestBody =
            | MittwaldAPIV2.Components.Schemas.DnsRecordUnset
            | MittwaldAPIV2.Components.Schemas.DnsCombinedACustom
            | MittwaldAPIV2.Components.Schemas.DnsRecordMXCustom
            | MittwaldAPIV2.Components.Schemas.DnsRecordTXTComponent
            | MittwaldAPIV2.Components.Schemas.DnsRecordSRVComponent
            | MittwaldAPIV2.Components.Schemas.DnsRecordCNAMEComponent
            | MittwaldAPIV2.Components.Schemas.DnsRecordCAAComponent;

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsDomainIdDeclaration {
      namespace Delete {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainRegistrable {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            domain: string;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                isPremium: boolean;
                registrable: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainTransferable {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            authCode?: string;
            domain: string;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsDomainIdActionsAuthCode {
      namespace Post {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                authCode: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsDomainId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DomainDomain;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            transit?: boolean;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsLatestScreenshot {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            domainName: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                reference?: string;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainTldsTldContactSchemas {
      namespace Get {
        namespace Parameters {
          export type Path = {
            tld: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                jsonSchemaAdminC?: {};
                jsonSchemaOwnerC: {};
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainTlds {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DomainTopLevel[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsDomainIdActionsResendEmail {
      namespace Post {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainSuggestions {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            prompt: string;
            domainCount?: number;
            tlds?: string[];
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DomainSuggestedDomains;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsDomainIdAuthCode {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export interface RequestBody {
            authCode: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsDomainIdContactsContact {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            domainId: string;
            contact: "owner";
          };

          export interface RequestBody {
            /**
             * @minItems 1
             */
            contact: [
              MittwaldAPIV2.Components.Schemas.DomainHandleField,
              ...MittwaldAPIV2.Components.Schemas.DomainHandleField[],
            ];
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DomainsDomainIdProjectId {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export interface RequestBody {
            projectId?: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ExtensionInstancesExtensionInstanceIdTokens {
      namespace Post {
        namespace Parameters {
          export type Path = {
            extensionInstanceId: string;
          };

          export interface RequestBody {
            /**
             * The latest secret an external application received via lifecycle webhooks.
             * Namely ExtensionAddedToContext and ExtensionInstanceSecretRotated.
             *
             */
            extensionInstanceSecret: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                expiry: string;
                /**
                 * Set this in the 'x-access-token' header when performing domain actions.
                 */
                publicToken: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AuthenticateSessionToken {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            /**
             * The secret you you generated for your extension.
             */
            extensionSecret?: string;
            /**
             * The session token you received from the mStudio.
             */
            sessionToken: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                expiry: string;
                /**
                 * Set this in the 'x-access-token' header when performing domain actions.
                 */
                publicToken: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ExtensionInstancesExtensionInstanceIdTermination {
      namespace Post {
        namespace Parameters {
          export type Path = {
            extensionInstanceId: string;
          };

          export interface RequestBody {
            /**
             * If set, the Extension Instance will be removed as fast as possible. No credit will be given.
             */
            instantTermination?: boolean;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                extensionInstanceId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            extensionInstanceId: string;
          };

          export interface RequestBody {}

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                extensionInstanceId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContributorsContributorIdExtensionsExtensionIdContext {
      namespace Put {
        namespace Parameters {
          export type Path = {
            contributorId: string;
            extensionId: string;
          };

          export interface RequestBody {
            context: MittwaldAPIV2.Components.Schemas.MarketplaceContext;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * If this value is true the context will change asynchronously after removing all extension-instances of this extension.
                 */
                cleaningUpInstances: boolean;
                currentContext: MittwaldAPIV2.Components.Schemas.MarketplaceContext;
                id: string;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ExtensionInstancesExtensionInstanceIdScopes {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            extensionInstanceId: string;
          };

          export interface RequestBody {
            consentedScopes: string[];
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContributorsContributorIdOnboardingProcess {
      namespace Post {
        namespace Parameters {
          export type Path = {
            contributorId: string;
          };

          export interface RequestBody {
            /**
             * You can restrict your customers to certain countries.
             */
            shippingCountryRestriction: "onlyDomestic";
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                contributorId?: string;
                onboardingLink?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ExtensionInstances {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            context?: MittwaldAPIV2.Components.Schemas.MarketplaceContext;
            contextId?: string;
            extensionId?: string;
            searchTerm?: string;
            limit?: number;
            skip?: number;
            page?: number;
            sort?: ("createdAt" | "extensionId" | "extensionName")[];
            order?: ("asc" | "desc")[];
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MarketplaceExtensionInstance[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            consentedScopes: string[];
            context: MittwaldAPIV2.Components.Schemas.MarketplaceContext;
            contextId: string;
            extensionId: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonsError;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ExtensionInstancesExtensionInstanceIdActionsCreateAccessTokenRetrievalKey {
      namespace Post {
        namespace Parameters {
          export type Path = {
            extensionInstanceId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                accessTokenRetrievalKey: string;
                userId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ExtensionInstancesExtensionInstanceId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            extensionInstanceId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MarketplaceExtensionInstance;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            extensionInstanceId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContributorsContributorIdExtensionsExtensionId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            contributorId: string;
            extensionId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MarketplaceOwnExtension;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            contributorId: string;
            extensionId: string;
          };

          export interface RequestBody {
            reason?: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            contributorId: string;
            extensionId: string;
          };

          export interface RequestBody {
            /**
             * Used to patch asset order.
             */
            assets?: string[];
            deprecation?: MittwaldAPIV2.Components.Schemas.MarketplaceExtensionDeprecation;
            description?: string;
            detailedDescriptions?: MittwaldAPIV2.Components.Schemas.MarketplaceDetailedDescriptions;
            externalFrontends?: MittwaldAPIV2.Components.Schemas.MarketplaceExternalComponent[];
            frontendFragments?: {
              [
                k: string
              ]: MittwaldAPIV2.Components.Schemas.MarketplaceFrontendFragment;
            };
            name?: string;
            scopes?: string[];
            subTitle?: MittwaldAPIV2.Components.Schemas.MarketplaceSubTitle;
            support?: MittwaldAPIV2.Components.Schemas.MarketplaceSupportMeta;
            tags?: string[];
            webhookUrls?: MittwaldAPIV2.Components.Schemas.MarketplaceWebhookUrls;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MarketplaceOwnExtension;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $409 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ExtensionInstancesExtensionInstanceIdActionsDisable {
      namespace Post {
        namespace Parameters {
          export type Path = {
            extensionInstanceId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContributorsContributorIdExtensionsExtensionIdExtensionInstancesExtensionInstanceIdActionsDryRunWebhookKind {
      namespace Post {
        namespace Parameters {
          export type Path = {
            contributorId: string;
            extensionId: string;
            extensionInstanceId: string;
            webhookKind: MittwaldAPIV2.Components.Schemas.MarketplaceWebhookKind;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            contextId?: string;
            scopes?: string[];
            instanceDisabled?: boolean;
            createdAt?: string;
            secret?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * The error message of an internal error.
                 */
                errorMessage?: string;
                responseBody?: string;
                /**
                 * The http status code that the external application responded with.
                 */
                responseCode?: number;
                responseHeaders?: string;
                routeCalled: string;
                /**
                 * This shows if the response of the external application has been accepted as successful.
                 */
                successful: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ExtensionInstancesExtensionInstanceIdActionsEnable {
      namespace Post {
        namespace Parameters {
          export type Path = {
            extensionInstanceId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContributorsContributorIdExtensionsExtensionIdSecret {
      namespace Post {
        namespace Parameters {
          export type Path = {
            contributorId: string;
            extensionId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                secret: string;
                secretId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ExtensionInstancesExtensionInstanceIdSessionsSessionId {
      namespace Post {
        namespace Parameters {
          export type Path = {
            extensionInstanceId: string;
            sessionId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                sessionToken: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContributorsContributorId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            contributorId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                | MittwaldAPIV2.Components.Schemas.MarketplaceContributor
                | MittwaldAPIV2.Components.Schemas.MarketplaceOwnContributor;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdExtensionOrders {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson = {
                extensionId?: string;
              }[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ExtensionInstancesExtensionInstanceIdContract {
      namespace Get {
        namespace Parameters {
          export type Path = {
            extensionInstanceId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ExtensionExtensionInstanceContract;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            extensionInstanceId: string;
          };

          export interface RequestBody {}

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdExtensionsExtensionId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
            extensionId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MarketplaceExtensionInstance;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdExtensionsExtensionId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
            extensionId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MarketplaceExtensionInstance;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ExtensionsExtensionId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            extensionId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                | MittwaldAPIV2.Components.Schemas.MarketplaceExtension
                | MittwaldAPIV2.Components.Schemas.MarketplaceUnpublishedExtension;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdExtensionOrders {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson = {
                extensionId?: string;
              }[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2PublicKeysSerial {
      namespace Get {
        namespace Parameters {
          export type Path = {
            serial: string;
          };

          export type Header = {};

          export type Query = {
            purpose?: "webhook" | "session_token";
            format?: "raw" | "spki";
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MarketplacePublicKey;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContributorsContributorIdExtensionsExtensionIdSecretExtensionSecretId {
      namespace Delete {
        namespace Parameters {
          export type Path = {
            contributorId: string;
            extensionId: string;
            extensionSecretId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Contributors {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header = {};

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MarketplaceContributor[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Extensions {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header = {};

          export type Query = {
            context?: MittwaldAPIV2.Components.Schemas.MarketplaceContext;
            searchTerm?: string;
            includeDeprecated?: boolean;
            limit?: number;
            skip?: number;
            page?: number;
            sort?: "name";
            order?: "asc" | "desc";
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MarketplaceExtension[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContributorsContributorIdExtensions {
      namespace Get {
        namespace Parameters {
          export type Path = {
            contributorId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MarketplaceOwnExtension[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            contributorId: string;
          };

          export interface RequestBody {
            context?: MittwaldAPIV2.Components.Schemas.MarketplaceContext;
            description?: string;
            detailedDescriptions?: MittwaldAPIV2.Components.Schemas.MarketplaceDetailedDescriptions;
            /**
             * @deprecated
             */
            externalFrontend?: MittwaldAPIV2.Components.Schemas.MarketplaceExternalComponent[];
            externalFrontends?: MittwaldAPIV2.Components.Schemas.MarketplaceExternalComponent[];
            frontendFragments?: {
              [
                k: string
              ]: MittwaldAPIV2.Components.Schemas.MarketplaceFrontendFragment;
            };
            name: string;
            scopes?: string[];
            subTitle?: MittwaldAPIV2.Components.Schemas.MarketplaceSubTitle;
            support?: MittwaldAPIV2.Components.Schemas.MarketplaceSupportMeta;
            tags?: string[];
            webhookURLs?: MittwaldAPIV2.Components.Schemas.MarketplaceWebhookUrls & {};
            webhookUrls?: MittwaldAPIV2.Components.Schemas.MarketplaceWebhookUrls;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Scopes {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson = {
                name: string;
              }[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ExtensionsExtensionIdOrder {
      namespace Post {
        namespace Parameters {
          export type Path = {
            extensionId: string;
          };

          export type RequestBody =
            | {
                consentedScopes: string[];
                /**
                 * The customer the extension should be booked for. Either customerId or projectId is required.
                 */
                customerId: string;
              }
            | {
                consentedScopes: string[];
                /**
                 * The project the extension should be installed in. Either customerId or projectId is required.
                 */
                projectId: string;
              };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContributorsContributorIdExtensionsExtensionIdAssetsAssetRefId {
      namespace Delete {
        namespace Parameters {
          export type Path = {
            contributorId: string;
            extensionId: string;
            assetRefId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContributorsContributorIdExtensionsExtensionIdLogo {
      namespace Post {
        namespace Parameters {
          export type Path = {
            contributorId: string;
            extensionId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * Use the logoRefId as updload token at `/v2/files/{logoRefId}`.
                 */
                logoRefId: string;
                /**
                 * Constraints for the logo image upload.
                 */
                rules: {
                  extensions: string[];
                  fileTypes: {
                    extensions: string[];
                    mimeType: string;
                  }[];
                  maxSizeInBytes: number;
                  mimeTypes: string[];
                  properties?: {
                    imageDimensions?: {
                      max: {
                        height?: number;
                        width?: number;
                      };
                      min: {
                        height?: number;
                        width?: number;
                      };
                    };
                  };
                };
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            contributorId: string;
            extensionId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContributorsContributorIdExtensionsExtensionIdAssets {
      namespace Post {
        namespace Parameters {
          export type Path = {
            contributorId: string;
            extensionId: string;
          };

          export interface RequestBody {
            assetType: "image" | "video";
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * Use the ID as upload token at `/v2/files/{assetRefId}`. This ID will also be the ID of your asset in extension.
                 */
                assetRefId: string;
                /**
                 * Constraints for the asset image or video upload, defers on the given assetType.
                 */
                rules: {
                  extensions: string[];
                  fileTypes: {
                    extensions: string[];
                    mimeType: string;
                  }[];
                  maxSizeInBytes: number;
                  mimeTypes: string[];
                  properties?: {
                    imageDimensions?: {
                      max: {
                        height?: number;
                        width?: number;
                      };
                      min: {
                        height?: number;
                        width?: number;
                      };
                    };
                  };
                };
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContributorsContributorIdExtensionsExtensionIdVerificationProcess {
      namespace Post {
        namespace Parameters {
          export type Path = {
            contributorId: string;
            extensionId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContributorsContributorIdExtensionsExtensionIdPublished {
      namespace Put {
        namespace Parameters {
          export type Path = {
            contributorId: string;
            extensionId: string;
          };

          export interface RequestBody {
            /**
             * Whether the extension should be publicly visible.
             */
            published: boolean;
            /**
             * When withdrawing an extension a reason is required.
             */
            reason?: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
                published: boolean;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ContributorsContributorIdExtensionsExtensionIdPricing {
      namespace Put {
        namespace Parameters {
          export type Path = {
            extensionId: string;
            contributorId: string;
          };

          export interface RequestBody {
            /**
             * Price in cents.
             */
            priceInCents?: number;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                extensionId?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Files {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {
            Token: string;
          };

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.FileFileMeta;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $406 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $422 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2FilesFileIdMeta {
      namespace Get {
        namespace Parameters {
          export type Path = {
            fileId: string;
          };

          export type Header = {
            Token?: string;
          };

          export type Query = {
            token?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.FileFileMeta;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $422 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2FileUploadTokensFileUploadTokenRules {
      namespace Get {
        namespace Parameters {
          export type Path = {
            fileUploadToken: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.FileFileUploadRules;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2FileUploadTypesFileUploadTypeRules {
      namespace Get {
        namespace Parameters {
          export type Path = {
            fileUploadType:
              | "avatar"
              | "extensionAssetImage"
              | "extensionAssetVideo"
              | "anchorIcon"
              | "conversation";
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.FileFileUploadRules;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2FilesFileId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            fileId: string;
          };

          export type Header = {
            Accept?: "application/octet-stream" | "text/plain;base64";
            "Content-Disposition"?: "inline" | "attachment";
            Token?: string;
          };

          export type Query = {
            accept?: "application/octet-stream" | "text/plain;base64";
            "content-disposition"?: "inline" | "attachment";
            token?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationOctetStream = string;

              export type TextPlainBase64 = string;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $422 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2FilesFileIdFileName {
      namespace Get {
        namespace Parameters {
          export type Path = {
            fileId: string;
            fileName: string;
          };

          export type Header = {
            Accept?: "application/octet-stream" | "text/plain;base64";
            "Content-Disposition"?: "inline" | "attachment";
            Token?: string;
          };

          export type Query = {
            accept?: "application/octet-stream" | "text/plain;base64";
            "content-disposition"?: "inline" | "attachment";
            token?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationOctetStream = string;

              export type TextPlainBase64 = string;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $422 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Ingresses {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            projectId?: string;
            certificateId?: string;
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.IngressIngress[];
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            hostname: string;
            /**
             * A list of paths. The default path `/` is always present and cannot be removed.
             */
            paths: MittwaldAPIV2.Components.Schemas.IngressPath[];
            projectId: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
                ownership: MittwaldAPIV2.Components.Schemas.IngressOwnership;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2IngressesIngressId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            ingressId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.IngressIngress;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            ingressId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2IngressesIngressIdActionsVerifyOwnership {
      namespace Post {
        namespace Parameters {
          export type Path = {
            ingressId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ActionsListIngressesCompatibleWithCertificate {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            /**
             * PEM-encoded certificate. Linebreaks have to be escaped with
             * .
             */
            certificate: string;
            /**
             * The projects UUID.
             */
            projectId: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.IngressIngress[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2IngressesIngressIdActionsRequestAcmeCertificateIssuance {
      namespace Post {
        namespace Parameters {
          export type Path = {
            ingressId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2InvoicesInvoiceId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            invoiceId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.InvoiceInvoice;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdInvoiceSettings {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.InvoiceInvoiceSettings;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {
            additionalEmailRecipients?: string[];
            invoicePeriod: number;
            paymentSettings: MittwaldAPIV2.Components.Schemas.InvoicePaymentSettings;
            printedInvoices?: boolean;
            recipient?: MittwaldAPIV2.Components.Schemas.InvoiceRecipient;
            recipientSameAsOwner?: boolean;
            /**
             * @deprecated
             * parameter is deprecated and will be ignored
             */
            targetDay?: number;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.InvoiceInvoiceSettings;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdInvoicesInvoiceIdFileAccessToken {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
            invoiceId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                accessToken: string;
                expiresAt: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdInvoices {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            invoiceTypes?: (
              | "REGULAR"
              | "REISSUE"
              | "CORRECTION"
              | "CANCELLATION"
            )[];
            search?: string;
            limit?: number;
            skip?: number;
            page?: number;
            sort?: "invoiceNumber"[];
            order?: ("asc" | "desc")[];
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.InvoiceInvoice[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdLeadFyndrProfileRequest {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.LeadfyndrProfileRequest;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {
            domain: string;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                profileId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $409 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Cities {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header = {};

          export type Query = {
            input: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.LeadfyndrCity[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdLeadFyndrProfileTariff {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.LeadfyndrTariffOptions;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdLeadFyndrProfile {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.LeadfyndrProfile & {
                  tariff: MittwaldAPIV2.Components.Schemas.LeadfyndrTariffOptions;
                };
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdLeadsLeadId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            leadId: string;
            customerId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.LeadfyndrLead;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdUnlockedLeadsLeadId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            leadId: string;
            customerId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.LeadfyndrUnlockedLead;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            leadId: string;
            customerId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                leadId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdLeads {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header = {};

          export type Query = {
            potentialRangeMin?: number;
            potentialRangeMax?: number;
            employeeCountMin?: number;
            employeeCountMax?: number;
            salesVolumeMin?: number;
            salesVolumeMax?: number;
            technologies?: string[];
            /**
             * @maxItems 15
             */
            businessFields?: string[];
            locationCity?: string;
            locationPostCode?: string;
            locationRadiusInKm?: number;
            "basic:timeToFirstByteMs:min"?: number;
            "basic:timeToFirstByteMs:max"?: number;
            "basic:desktop:performance:min"?: number;
            "basic:desktop:performance:max"?: number;
            "basic:mobile:performance:min"?: number;
            "basic:mobile:performance:max"?: number;
            limit?: number;
            skip?: number;
            page?: number;
            sort?: "potential" | "relevance";
            order?: "asc" | "desc";
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                leads: MittwaldAPIV2.Components.Schemas.LeadfyndrLead[];
                limit: number;
                skip: number;
                totalCount: number;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdUnlockedLeads {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header = {};

          export type Query = {
            potentialRangeMin?: number;
            potentialRangeMax?: number;
            employeeCountMin?: number;
            employeeCountMax?: number;
            salesVolumeMin?: number;
            salesVolumeMax?: number;
            technologies?: string[];
            /**
             * @maxItems 15
             */
            businessFields?: string[];
            locationCity?: string;
            locationPostCode?: string;
            locationRadiusInKm?: number;
            "basic:timeToFirstByteMs:min"?: number;
            "basic:timeToFirstByteMs:max"?: number;
            "basic:desktop:performance:min"?: number;
            "basic:desktop:performance:max"?: number;
            "basic:mobile:performance:min"?: number;
            "basic:mobile:performance:max"?: number;
            reserved?: boolean;
            limit?: number;
            skip?: number;
            page?: number;
            sort?: "potential" | "relevance";
            order?: "asc" | "desc";
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                leads: MittwaldAPIV2.Components.Schemas.LeadfyndrUnlockedLead[];
                limit: number;
                skip: number;
                totalCount: number;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdUnlockedLeadsLeadIdReservation {
      namespace Post {
        namespace Parameters {
          export type Path = {
            leadId: string;
            customerId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                leadId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $409 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            leadId: string;
            customerId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                leadId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $409 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdDeliveryBoxes {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            search?: string;
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MailDeliverybox[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            description: string;
            password: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdMailAddresses {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            search?: string;
            forwardAddress?: boolean;
            catchAll?: boolean;
            autoResponder?: boolean;
            limit?: number;
            skip?: number;
            page?: number;
            sort?: (
              | "address.domain"
              | "address.local"
              | "updatedAt"
              | "projectId"
              | "mailbox.quota"
              | "mailbox.name"
              | "mailbox.storageInBytes.current"
              | "mailbox.storageInBytes.limit"
            )[];
            order?: ("asc" | "desc")[];
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MailMailAddress[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type RequestBody =
            | MittwaldAPIV2.Components.Schemas.MailCreateForwardAddress
            | MittwaldAPIV2.Components.Schemas.MailCreateMailAddress;

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DeliveryBoxesDeliveryBoxId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            deliveryBoxId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MailDeliverybox;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            deliveryBoxId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MailAddressesMailAddressId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            mailAddressId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MailMailAddress;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            mailAddressId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MailAddressesMailAddressIdBackups {
      namespace Get {
        namespace Parameters {
          export type Path = {
            mailAddressId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MailMailAddressBackup[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdMailSettings {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                blacklist: string[];
                projectId: string;
                whitelist: string[];
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MailMigrationsActionsPossibilityCheck {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            sourceLegacyProjectId: string;
            targetProjectId: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken &
              MittwaldAPIV2.Components.SecuritySchemes.CommonsLegacyBearerAuthentication;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MailmigrationCheckMigrationIsPossibleErrorResponse;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MailMigrationsMigrationId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            migrationId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MailmigrationMigration;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MailMigrations {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken &
              MittwaldAPIV2.Components.SecuritySchemes.CommonsLegacyBearerAuthentication;

          export type Query = {
            pAccountName?: string;
            projectId?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MailmigrationMigration[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MailMigrationsActionsRequest {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            sourceLegacyProjectId: string;
            targetProjectId: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken &
              MittwaldAPIV2.Components.SecuritySchemes.CommonsLegacyBearerAuthentication;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MailAddressesMailAddressIdBackupsBackupIdRecovery {
      namespace Post {
        namespace Parameters {
          export type Path = {
            mailAddressId: string;
            backupId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DeliveryBoxesDeliveryBoxIdDescription {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            deliveryBoxId: string;
          };

          export interface RequestBody {
            description: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2DeliveryBoxesDeliveryBoxIdPassword {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            deliveryBoxId: string;
          };

          export interface RequestBody {
            password: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MailAddressesMailAddressIdAddress {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            mailAddressId: string;
          };

          export interface RequestBody {
            address: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2MailAddressesMailAddressIdCatchAll {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            mailAddressId: string;
          };

          export interface RequestBody {
            active: boolean;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdMailSettingsMailSetting {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            projectId: string;
            mailSetting: "blacklist" | "whitelist";
          };

          export type RequestBody =
            | {
                blacklist: string[];
              }
            | {
                whitelist: string[];
              };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdPaymentMethod {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                cardDetails?: {
                  brand: string;
                  last4: string;
                };
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {
            customReturnUrl?: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                url?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2LlmModels {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.LlmlocksmithModel[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2NewsletterSubscriptionsSelf {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                active: boolean;
                email: string;
                registered: boolean;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2NotificationUnreadCounts {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                error: number;
                info: number;
                success: number;
                total: number;
                warning: number;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Notifications {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            status?: "unread" | "read";
            severity?: ("success" | "info" | "warning" | "error")[];
            type?: string[];
            "type-not"?: string[];
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MessagingNotification[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2NotificationsStatus {}

    namespace V2NotificationsActionsReadAll {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {}

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            severities?: ("success" | "info" | "warning" | "error")[];
            referenceId?: string;
            referenceAggregate?: string;
            referenceDomain?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                status: MittwaldAPIV2.Components.Schemas.MessagingNotificationStatus;
                /**
                 * The number of notifications that have been updated.
                 */
                updatedCount: number;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2NotificationsNotificationIdStatus {
      namespace Put {
        namespace Parameters {
          export type Path = {
            notificationId: string;
          };

          export interface RequestBody {
            status: MittwaldAPIV2.Components.Schemas.MessagingNotificationStatus;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                status: MittwaldAPIV2.Components.Schemas.MessagingNotificationStatus;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Orders {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
            includesStatus?: MittwaldAPIV2.Components.Schemas.OrderOrderStatus[];
            excludesStatus?: MittwaldAPIV2.Components.Schemas.OrderOrderStatus[];
            templateNames?: string[];
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.OrderCustomerOrder[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            orderData?:
              | MittwaldAPIV2.Components.Schemas.OrderProjectHostingOrder
              | MittwaldAPIV2.Components.Schemas.OrderServerOrder
              | MittwaldAPIV2.Components.Schemas.OrderDomainOrder
              | MittwaldAPIV2.Components.Schemas.OrderExternalCertificateOrder
              | MittwaldAPIV2.Components.Schemas.OrderLeadFyndrOrder
              | MittwaldAPIV2.Components.Schemas.OrderMailArchiveOrder;
            orderType?:
              | "domain"
              | "projectHosting"
              | "server"
              | "externalCertificate"
              | "leadFyndr"
              | "mailArchive";
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                orderId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2TariffChanges {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            tariffChangeData?:
              | MittwaldAPIV2.Components.Schemas.OrderProjectHostingTariffChange
              | MittwaldAPIV2.Components.Schemas.OrderServerTariffChange
              | MittwaldAPIV2.Components.Schemas.OrderLeadFyndrTariffChange;
            tariffChangeType?: "projectHosting" | "server" | "leadFyndr";
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                orderId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2OrdersOrderId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            orderId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.OrderCustomerOrder;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CustomersCustomerIdOrders {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
            includesStatus?: MittwaldAPIV2.Components.Schemas.OrderOrderStatus[];
            excludesStatus?: MittwaldAPIV2.Components.Schemas.OrderOrderStatus[];
            templateNames?: string[];
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.OrderCustomerOrder[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdOrders {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
            includesStatus?: MittwaldAPIV2.Components.Schemas.OrderOrderStatus[];
            excludesStatus?: MittwaldAPIV2.Components.Schemas.OrderOrderStatus[];
            templateNames?: string[];
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.OrderCustomerOrder[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2OrderPreviews {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            orderData?:
              | MittwaldAPIV2.Components.Schemas.OrderProjectHostingOrderPreview
              | MittwaldAPIV2.Components.Schemas.OrderServerOrderPreview
              | MittwaldAPIV2.Components.Schemas.OrderDomainOrderPreview
              | MittwaldAPIV2.Components.Schemas.OrderExternalCertificateOrderPreview
              | MittwaldAPIV2.Components.Schemas.OrderLeadFyndrOrderPreview
              | MittwaldAPIV2.Components.Schemas.OrderMailArchiveOrderPreview;
            orderType?:
              | "domain"
              | "projectHosting"
              | "server"
              | "externalCertificate"
              | "leadFyndr"
              | "mailArchive";
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                | MittwaldAPIV2.Components.Schemas.OrderHostingOrderPreviewResponse
                | MittwaldAPIV2.Components.Schemas.OrderDomainOrderPreviewResponse
                | MittwaldAPIV2.Components.Schemas.OrderExternalCertificateOrderPreviewResponse
                | MittwaldAPIV2.Components.Schemas.OrderLeadFyndrOrderPreviewResponse
                | MittwaldAPIV2.Components.Schemas.OrderMailArchiveOrderPreviewResponse;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $422 {
            namespace Content {
              export interface ApplicationJson {
                error?: {};
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2TariffChangePreviews {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            tariffChangeData?:
              | MittwaldAPIV2.Components.Schemas.OrderProjectHostingTariffChange
              | MittwaldAPIV2.Components.Schemas.OrderServerTariffChange
              | MittwaldAPIV2.Components.Schemas.OrderLeadFyndrTariffChange;
            tariffChangeType?: "projectHosting" | "server" | "leadFyndr";
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                machineTypePrice: number;
                storagePrice: number;
                totalPrice: number;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $422 {
            namespace Content {
              export interface ApplicationJson {
                error?: {};
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2PageInsights {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            domain: string;
            path: string;
            date?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                createdAt?: string;
                domain: string;
                metrics?: {
                  createdAt: string;
                  name: string;
                  score?: number;
                  value: number;
                }[];
                moreDataAvailable?: string[];
                path: string;
                performanceScore: number;
                screenshot?: {
                  createdAt: string;
                  fileRef: string;
                };
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdStracesStraceId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            straceId: string;
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                executedAt: string;
                id: string;
                result:
                  | MittwaldAPIV2.Components.Schemas.StraceError
                  | MittwaldAPIV2.Components.Schemas.StraceData;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdPageInsights {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            domain?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson = {
                domain: string;
                paths: {
                  createdAt: string;
                  path: string;
                  performanceScore: number;
                  screenshotFileRef?: string;
                }[];
              }[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdStraces {
      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            /**
             * A call to this URL is measured via strace.
             */
            url: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $202 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2PasswordPoliciesPasswordPolicy {
      namespace Get {
        namespace Parameters {
          export type Path = {
            passwordPolicy: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.PolicyPolicy;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2PasswordPoliciesPath {}

    namespace V2ProjectInvitesProjectInviteIdActionsAccept {
      namespace Post {
        namespace Parameters {
          export type Path = {
            projectInviteId: string;
          };

          export interface RequestBody {
            /**
             * Token contained in the invite for authentication.
             */
            invitationToken?: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdLlmLicences {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.LlmlocksmithLicence[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            createWebuiContainer?: boolean;
            name: string;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.LlmlocksmithLicence;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $409 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdInvites {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipProjectInvite[];
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            /**
             * Mail-address of the person to be invited.
             */
            mailAddress: string;
            /**
             * Time the resulting ProjectMembership should expire at.
             */
            membershipExpiresAt?: string;
            /**
             * Message contained in the ProjectInvite.
             */
            message?: string;
            role: MittwaldAPIV2.Components.Schemas.MembershipProjectRoles;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipProjectInvite;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $409 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ServersServerIdProjects {
      namespace Post {
        namespace Parameters {
          export type Path = {
            serverId: string;
          };

          export interface RequestBody {
            /**
             * Name of the Project as it is displayed in the mStudio.
             */
            description: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectInvitesProjectInviteIdActionsDecline {
      namespace Post {
        namespace Parameters {
          export type Path = {
            projectInviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdAvatar {
      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                refId: string;
                rules: MittwaldAPIV2.Components.Schemas.ProjectAvatarRules;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectInvitesProjectInviteId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectInviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipProjectInvite;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            projectInviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectMembershipsProjectMembershipId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectMembershipId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipProjectMembership;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            projectMembershipId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            projectMembershipId: string;
          };

          export interface RequestBody {
            /**
             * Time the ProjectMembership should expire at.
             */
            expiresAt?: string;
            role: MittwaldAPIV2.Components.Schemas.MembershipProjectRoles;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ProjectProject;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ServersServerIdAvatar {
      namespace Post {
        namespace Parameters {
          export type Path = {
            serverId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                refId: string;
                rules: MittwaldAPIV2.Components.Schemas.ProjectAvatarRules;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            serverId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdFilesystemDirectories {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            directory?: string;
            name?: string;
            max_depth?: number;
            type?: string[];
            executable?: boolean;
            hidden?: boolean;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ProjectFilesystemDirectoryListing;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $502 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdFilesystemDiskUsage {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            directory?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ProjectFilesystemUsagesDisk;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $502 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdFilesystemFileContent {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            file?: string;
            inline?: boolean;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type TextPlain = string;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $502 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdJwt {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ProjectFsApiJwt;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $502 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdFilesystemFiles {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            file?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ProjectFilesystemDirectoryListing;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $502 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $503 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdLlmLicencesLicenceId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
            licenceId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.LlmlocksmithLicence;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            projectId: string;
            licenceId: string;
          };

          export interface RequestBody {
            createWebuiContainer?: boolean;
            name?: string;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.LlmlocksmithLicence;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $409 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectTokenInvite {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header = {
            token: string;
          } & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipProjectInvite;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdMembershipsSelf {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipProjectMembership;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ServersServerId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            serverId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ProjectServer;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdMemberships {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            hasExpiry?: boolean;
            isInherited?: boolean;
            role?: MittwaldAPIV2.Components.Schemas.MembershipProjectRoles;
            hasMfa?: boolean;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipProjectMembership[];
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectInvites {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipProjectInvite[];
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectMemberships {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            hasExpiry?: boolean;
            isInherited?: boolean;
            role?: MittwaldAPIV2.Components.Schemas.MembershipProjectRoles;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.MembershipProjectMembership[];
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Projects {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            customerId?: string;
            serverId?: string;
            searchTerm?: string;
            limit?: number;
            skip?: number;
            page?: number;
            sort?: "createdAt" | "description";
            order?: "asc" | "desc";
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson = {
                backupStorageUsageInBytes: number;
                backupStorageUsageInBytesSetAt: string;
                createdAt: string;
                customerId: string;
                customerMeta: {
                  id: string;
                };
                description: string;
                disableReason?: MittwaldAPIV2.Components.Schemas.ProjectDisableReason;
                disabledAt?: string;
                enabled: boolean;
                /**
                 * @deprecated
                 * Deprecated by 'supportedFeatures'.
                 */
                features?: MittwaldAPIV2.Components.Schemas.ProjectProjectFeature[];
                id: string;
                imageRefId?: string;
                /**
                 * @deprecated
                 * deprecated
                 */
                isReady: boolean;
                projectHostingId?: string;
                readiness: MittwaldAPIV2.Components.Schemas.ProjectDeprecatedProjectReadinessStatus;
                serverId?: string;
                shortId: string;
                status: MittwaldAPIV2.Components.Schemas.ProjectProjectStatus;
                statusSetAt: string;
                supportedFeatures: MittwaldAPIV2.Components.Schemas.ProjectProjectFeature[];
                webStorageUsageInBytes: number;
                webStorageUsageInBytesSetAt: string;
              }[];
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Servers {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            customerId?: string;
            searchTerm?: string;
            limit?: number;
            skip?: number;
            page?: number;
            sort?: "createdAt" | "description";
            order?: "asc" | "desc";
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.ProjectServer[];
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectInvitesProjectInviteIdActionsResend {
      namespace Post {
        namespace Parameters {
          export type Path = {
            projectInviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdDescription {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            description: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ServersServerIdDescription {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            serverId: string;
          };

          export interface RequestBody {
            description: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2LegacyTariffChange {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            pAccount: string;
            targetTariff: string;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                messageId: string;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Relocation {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            additionalServices: {
              dataCompare: "default" | "additionalCompare";
            };
            /**
             * Should all project releated domains should be transferred to mittwald?
             */
            allDomains?: boolean;
            /**
             * Has to be true. Do you accept that our mittwald team can change and get password from your current provider?
             */
            allowPasswordChange: boolean;
            /**
             * Type of the article you want to relocate.
             */
            articleType:
              | "cms-hosting"
              | "cms-hosting-express"
              | "onlineshop"
              | "onlineshop-express";
            contact: {
              email: string;
              firstName: string;
              lastName: string;
              phoneNumber?: string;
            };
            /**
             * List of domains which should be transferred (when allDomains is not checked).
             */
            domains?: MittwaldAPIV2.Components.Schemas.DirectusDomain[];
            /**
             * Anything our customer service needs to know for the relocation process.
             */
            notes?: string;
            prices: {
              positions: {
                name: string;
                price: number;
              }[];
              total: number;
            };
            provider: {
              /**
               * Url to the control panel of the provider
               */
              loginUrl: string;
              /**
               * Name of your provider
               */
              name: string | ("1und1" | "strato");
              password: string;
              /**
               * Which account of your provider should be moved?
               */
              sourceAccount: string;
              /**
               * Login name to your provider
               */
              userName: string;
            };
            target: {
              /**
               * Your customer or organisation number
               */
              organisation: string;
              /**
               * Help our customer service finding your target account
               */
              product: (
                | string
                | (
                    | "Space-Server"
                    | "proSpace"
                    | "Agentur-Server"
                    | "CMS-Hosting"
                    | "Shop-Hosting"
                  )
              ) &
                string;
              /**
               * In which p-account or short project id your project should be moved.
               */
              projectName: string;
              /**
               * Which mittwald system does the targetProject use?
               */
              system: "kc" | "mstudio";
            };
            userId?: string;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdSftpUsers {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SshuserSftpUser[];
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            accessLevel?: "read" | "full";
            authentication: MittwaldAPIV2.Components.Schemas.SshuserAuthentication;
            description: string;
            /**
             * @minItems 1
             */
            directories: [string, ...string[]];
            expiresAt?: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SshuserSftpUser;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SftpUsersSftpUserId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            sftpUserId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SshuserSftpUser;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            sftpUserId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            sftpUserId: string;
          };

          export interface RequestBody {
            accessLevel?: "read" | "full";
            active?: boolean;
            description?: string;
            /**
             * @minItems 1
             */
            directories?: [string, ...string[]];
            expiresAt?: string;
            password?: string;
            publicKeys?: MittwaldAPIV2.Components.Schemas.SshuserPublicKey[];
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdSshUsers {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SshuserSshUser[];
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            authentication: MittwaldAPIV2.Components.Schemas.SshuserAuthentication;
            description: string;
            expiresAt?: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SshuserSshUser;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2SshUsersSshUserId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            sshUserId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SshuserSshUser;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            sshUserId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            sshUserId: string;
          };

          export interface RequestBody {
            active?: boolean;
            description?: string;
            expiresAt?: string;
            password?: string;
            publicKeys?: MittwaldAPIV2.Components.Schemas.SshuserPublicKey[];
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CertificatesCertificateIdActionsCheckReplaceCertificate {
      namespace Post {
        namespace Parameters {
          export type Path = {
            certificateId: string;
          };

          export interface RequestBody {
            certificate: string;
            privateKey?: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SslCheckReplaceCertificateResponse;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CertificateRequests {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            projectId?: string;
            ingressId?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SslCertificateRequest[];
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export type RequestBody =
            | MittwaldAPIV2.Components.Schemas.SslCertificateRequestCreateRequest
            | MittwaldAPIV2.Components.Schemas.SslCertificateRequestCreateWithCSRRequest;

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SslCertificateRequestCreateResponse;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CertificateRequestCertificateRequestId {
      namespace Delete {
        namespace Parameters {
          export type Path = {
            certificateRequestId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CertificateCertificateId {
      namespace Delete {
        namespace Parameters {
          export type Path = {
            certificateId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CertificateRequestsCertificateRequestId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            certificateRequestId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SslCertificateRequest;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CertificatesCertificateId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            certificateId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SslCertificate;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            certificateId: string;
          };

          export interface RequestBody {
            certificate: string;
            privateKey?: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Certificates {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            projectId?: string;
            ingressId?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SslCertificate[];
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2CertificateRequestsCertificateRequestIdCertificate {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            certificateRequestId: string;
          };

          export interface RequestBody {
            certificate: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdStorageSpaceStatistics {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.StoragespaceStatistics;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ServersServerIdStorageSpaceStatistics {
      namespace Get {
        namespace Parameters {
          export type Path = {
            serverId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.StoragespaceStatistics;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ProjectsProjectIdStorageSpaceNotificationThreshold {
      namespace Put {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            notificationThresholdInBytes?: number;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ServersServerIdStorageSpaceNotificationThreshold {
      namespace Put {
        namespace Parameters {
          export type Path = {
            serverId: string;
          };

          export interface RequestBody {
            notificationThresholdInBytes?: number;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersUserIdPhone {
      namespace Post {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export interface RequestBody {
            phoneNumber: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $409 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AuthenticateMfa {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            /**
             * The email of the user.
             */
            email: string;
            /**
             * The second factor - otp code or recovery code.
             */
            multiFactorCode: string;
            /**
             * The password of the user.
             */
            password: string;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * The expiration date of the token.
                 */
                expires: string;
                /**
                 * Refresh token to refresh your access token even after it has expired.
                 */
                refreshToken: string;
                /**
                 * Public token to identify yourself against the api gateway.
                 */
                token: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
            }
          }

          namespace $408 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SignupDomainError & {
                  name?: "FirstAuthenticationFactorExpired";
                };
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Authenticate {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            /**
             * The users Email-Address.
             */
            email: string;
            /**
             * Password of the User.
             */
            password: string;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * The expiration date of the token.
                 */
                expires: string;
                /**
                 * Refresh token to refresh your access token even after it has expired.
                 */
                refreshToken: string;
                /**
                 * Public token to identify yourself against the api gateway.
                 */
                token: string;
              }
            }
          }

          namespace $202 {
            namespace Content {
              export interface ApplicationJson {
                name?: "SecondFactorRequired";
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $401 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2AuthenticateTokenRetrievalKey {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            accessTokenRetrievalKey: string;
            userId: string;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * The expiration date of the token.
                 */
                expiresAt: string;
                /**
                 * Refresh token to refresh your access token even after it has expired.
                 */
                refreshToken: string;
                /**
                 * Public token to identify yourself against the public api.
                 */
                token: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersSelfCredentialsEmail {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                email: string;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            /**
             * The new Email-Address
             */
            email: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersSelfCredentialsPassword {
      namespace Put {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            /**
             * Multi Factor Code to confirm MFA.
             * This is optional, depending on the MFA activation status of the profile.
             *
             */
            multiFactorCode?: string;
            /**
             * The new password.
             */
            newPassword: string;
            /**
             * The old password.
             */
            oldPassword: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * The expiration date of the token.
                 */
                expires: string;
                /**
                 * Public token to identify yourself against the api gateway.
                 */
                token: string;
              }
            }
          }

          namespace $202 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersSelfCredentialsToken {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {}

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
                publicToken: string;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersSelfCredentialsMfa {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                confirmed: boolean;
                initialized: boolean;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            /**
             * Multi Factor Code to authorize your request.
             */
            multiFactorCode: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * @minItems 20
                 * @maxItems 20
                 */
                recoveryCodesList: [
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                ];
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            /**
             * Multi Factor Code to confirm MFA.
             */
            multiFactorCode: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * @minItems 20
                 * @maxItems 20
                 */
                recoveryCodesList: [
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                  string,
                ];
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            /**
             * Multi Factor Code to confirm MFA.
             */
            multiFactorCode: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersSelfCredentialsPasswordConfirmReset {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            /**
             * The new password.
             */
            password: string;
            /**
             * Password reset token
             */
            token: string;
            /**
             * UserId of the user to reset the password for.
             */
            userId: string;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersSelfApiTokens {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SignupApiToken[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            description: string;
            expiresAt?: string;
            /**
             * Determines the access rights of the ApiToken.
             *
             * @minItems 1
             */
            roles: ["api_read" | "api_write", ...("api_read" | "api_write")[]];
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * The `ApiToken`.
                 */
                token: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersSelfFeedback {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            /**
             * Personal feedback message.
             */
            message?: string;
            /**
             * Origin of the feedback.
             */
            origin?: string;
            /**
             * Descriptive subject.
             */
            subject: string;
            /**
             * Type of feedback.
             */
            type?: "feedback" | "bug";
            /**
             * Feedback rating from bad to good. Set to 0 or skip this field to not vote at all.
             */
            vote?: number;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersSelfSshKeys {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                sshKeys?: MittwaldAPIV2.Components.Schemas.SignupSshKey[];
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            expiresAt?: string;
            publicKey: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersSelfApiTokensApiTokenId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            apiTokenId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SignupApiToken;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            apiTokenId: string;
          };

          export interface RequestBody {
            description: string;
            expiresAt?: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            apiTokenId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersSelfSshKeysSshKeyId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            sshKeyId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                sshKey: MittwaldAPIV2.Components.Schemas.SignupSshKey;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            sshKeyId: string;
          };

          export interface RequestBody {
            comment: string;
            expiresAt?: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            sshKeyId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersSelf {
      namespace Delete {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            /**
             * Multi Factor Code to authorize your request.
             */
            multiFactorCode?: string;
            password: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $202 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
            }
          }

          namespace $409 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersSelfCredentialsPasswordUpdatedAt {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {}

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                passwordUpdatedAt: string;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersUserIdSettings {
      namespace Get {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                settingsString?: string;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export interface RequestBody {
            settingsString: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2PollSettingsUserId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.PollUserPollSettings;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export interface RequestBody {
            status: "completed" | "muted" | "ignored";
            userId: string;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.PollUserPollSettings;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersSelfSessionsTokenId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            tokenId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SignupUserSession;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            tokenId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersUserId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.UserUser;
            }
          }

          namespace $403 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export interface RequestBody {
            person: MittwaldAPIV2.Components.Schemas.CommonsPerson;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersSelfCredentialsInitMfa {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {}

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * base64 encoded barcode content to scan from your mfa app. e.g. `iVBORw0KGgoAAAANSUhEUgAAAMgAAADIEAAAAADYoy...`. You
                 * can display it with `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUh.." />`
                 *
                 */
                barcode: string;
                /**
                 * Same as barcode,  but in URL form.
                 *
                 */
                url: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersSelfCredentialsActionsInitPasswordReset {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            /**
             * Email address to reset the password for.
             */
            email: string;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersUserIdFeedback {
      namespace Get {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            subject?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.UserUserFeedback[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersSelfSessions {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.SignupUserSession[];
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            refreshToken: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * The expiration date of the token.
                 */
                expiresAt: string;
                /**
                 * Refresh token to refresh your access token even after it has expired.
                 */
                refreshToken: string;
                /**
                 * Public token to identify yourself against the public api.
                 */
                token: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Logout {
      namespace Put {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {}

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Oauth2Authorize {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header = {};

          export type Query = {
            grant_consent?: boolean;
            grant_type?: "authorization_code";
            response_type: "code";
            client_id: string;
            redirect_uri?: string;
            scope?: string;
            state?: string;
            code_challenge?: string;
            code_challenge_method?: "S256";
          };
        }
        namespace Responses {
          namespace $302 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                error: "invalid_request";
                error_description?: string;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Oauth2Token {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {
            Authorization?: string;
          };

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * The access token issued by the authorization server.
                 *
                 */
                access_token: string;
                /**
                 * The lifetime in seconds of the access token. For
                 * example, the value "3600" denotes that the access
                 * token will expire in one hour from the time the
                 * response was generated.
                 *
                 */
                expires_in: number;
                /**
                 * The refresh token issued by the authorization server.
                 *
                 */
                refresh_token: string;
                /**
                 * The scope of the access token as described by
                 * [RFC6749](https://datatracker.ietf.org/doc/html/rfc6749#section-3.3).
                 *
                 */
                scope?: string;
                /**
                 * The type of the token issued as described in
                 * [RFC6749](https://datatracker.ietf.org/doc/html/rfc6749#section-7.1).
                 *
                 */
                token_type: "bearer";
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                error:
                  | "invalid_request"
                  | "invalid_client"
                  | "invalid_grant"
                  | "unauthorized_client"
                  | "unsupported_grant_type"
                  | "invalid_scope";
                error_description?: string;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2Register {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            /**
             * The users email address
             */
            email: string;
            /**
             * The users password.
             */
            password: string;
            person: MittwaldAPIV2.Components.Schemas.CommonsPerson;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                userId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersUserIdAvatar {
      namespace Post {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export interface RequestBody {}

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * The `refId` to be used to upload your avatar to the /v2/files/:refId route.
                 */
                refId: string;
                /**
                 * Contstraints for the avatar image upload.
                 */
                rules: {
                  /**
                   * Maximum size in Bytes of the avatar image.
                   */
                  maxSizeInBytes: number;
                  /**
                   * @deprecated
                   * Deprecated. Maximum size in kilobytes of the avatar image.
                   */
                  maxSizeInKB: number;
                  /**
                   * List of supported mime types.
                   */
                  mimeTypes: string[];
                  properties?: {
                    /**
                     * Supported range of dimensions for the avatar image.
                     */
                    imageDimensions?: {
                      max?: {
                        height?: number;
                        width?: number;
                      };
                      min?: {
                        height?: number;
                        width?: number;
                      };
                    };
                  };
                };
              }
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersSelfCredentialsEmailActionsResendEmail {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            email: string;
            userId: string;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersSelfCredentialsSupportCode {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {
            forceRecreate?: boolean;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * Expiration of the support code
                 */
                expiresAt: string;
                /**
                 * support code to authenticate yourself against the mittwald support via telephone
                 */
                supportCode: string;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersSelfCredentialsEmailActionsVerifyEmail {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            /**
             * The Email-Address to verify.
             */
            email: string;
            /**
             * The token found in the verification email.
             */
            token?: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2UsersUserIdActionsVerifyPhone {
      namespace Post {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export interface RequestBody {
            code: string;
            phoneNumber: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $409 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2VerifyRegistration {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            /**
             * The users email address.
             */
            email: string;
            /**
             * The token that was send to your email address
             */
            token: string;
            /**
             * UUID of the registered user.
             */
            userId: string;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.CommonsValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ActionsDetectPhishingEmail {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.VerificationEmailDetectPhishingMailResponse;
            }
          }

          namespace $400 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ActionsVerifyAddress {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            city: string;
            /**
             * Accepts the whole english or german name as well as the ISO 3166-2 country codes.
             */
            country: string;
            /**
             * Includes the house number.
             */
            street: string;
            zip: string;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                exists: boolean;
              }
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }

    namespace V2ActionsVerifyCompany {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            name: string;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                exists: boolean;
              }
            }
          }

          namespace $412 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace $429 {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export type Empty = unknown;
            }
          }

          namespace Default {
            namespace Content {
              export interface ApplicationJson {
                [k: string]: unknown;
              }
            }
          }
        }
      }
    }
  }
}
