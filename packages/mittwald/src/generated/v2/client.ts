/* eslint-disable */
/* prettier-ignore */
/* This file is auto-generated with acg (@mittwald/api-code-generator) */
import * as descriptors from "./descriptors.js";
import { ApiClientBase } from "@mittwald/api-client-commons";

export class MittwaldAPIV2Client extends ApiClientBase {
  /** The App API allows you to manage your apps within a project, and all the system softwares that are installed as dependencies. */
  public readonly app = {
    /** Trigger a runtime action belonging to an AppInstallation. */
    executeAction: this.requestFunctionFactory(descriptors.appExecuteAction),
    /** Get an App. */
    getApp: this.requestFunctionFactory(descriptors.appGetApp),
    /** Get an AppInstallation. */
    getAppinstallation: this.requestFunctionFactory(
      descriptors.appGetAppinstallation,
    ),
    /** Trigger an uninstallation process for an AppInstallation. */
    uninstallAppinstallation: this.requestFunctionFactory(
      descriptors.appUninstallAppinstallation,
    ),
    /** Update properties belonging to an AppInstallation. */
    patchAppinstallation: this.requestFunctionFactory(
      descriptors.appPatchAppinstallation,
    ),
    /** Get an AppVersion. */
    getAppversion: this.requestFunctionFactory(descriptors.appGetAppversion),
    /** Get the installed `SystemSoftware' for a specific `AppInstallation`. */
    getInstalledSystemsoftwareForAppinstallation: this.requestFunctionFactory(
      descriptors.appGetInstalledSystemsoftwareForAppinstallation,
    ),
    /** Get the missing requirements of an appInstallation for a specific target AppVersion. */
    getMissingDependenciesForAppinstallation: this.requestFunctionFactory(
      descriptors.appGetMissingDependenciesForAppinstallation,
    ),
    /** Get a SystemSoftware. */
    getSystemsoftware: this.requestFunctionFactory(
      descriptors.appGetSystemsoftware,
    ),
    /** Get a SystemSoftwareVersion. */
    getSystemsoftwareversion: this.requestFunctionFactory(
      descriptors.appGetSystemsoftwareversion,
    ),
    /** Create linkage between an AppInstallation and a MySQLDatabase. */
    linkDatabase: this.requestFunctionFactory(descriptors.appLinkDatabase),
    /** List AppInstallations that a user has access to. */
    listAppinstallationsForUser: this.requestFunctionFactory(
      descriptors.appListAppinstallationsForUser,
    ),
    /** List AppInstallations belonging to a Project. */
    listAppinstallations: this.requestFunctionFactory(
      descriptors.appListAppinstallations,
    ),
    /** Request an AppInstallation. */
    requestAppinstallation: this.requestFunctionFactory(
      descriptors.appRequestAppinstallation,
    ),
    /** List Apps. */
    listApps: this.requestFunctionFactory(descriptors.appListApps),
    /** List AppVersions belonging to an App. */
    listAppversions: this.requestFunctionFactory(
      descriptors.appListAppversions,
    ),
    /** List SystemSoftwares. */
    listSystemsoftwares: this.requestFunctionFactory(
      descriptors.appListSystemsoftwares,
    ),
    /** List SystemSoftwareVersions belonging to a SystemSoftware. */
    listSystemsoftwareversions: this.requestFunctionFactory(
      descriptors.appListSystemsoftwareversions,
    ),
    /** List update candidates belonging to an AppVersion. */
    listUpdateCandidatesForAppversion: this.requestFunctionFactory(
      descriptors.appListUpdateCandidatesForAppversion,
    ),
    /** Replace a MySQL Database with another MySQL Database. */
    replaceDatabase: this.requestFunctionFactory(
      descriptors.appReplaceDatabase,
    ),
    /** Request a copy of an AppInstallation. */
    requestAppinstallationCopy: this.requestFunctionFactory(
      descriptors.appRequestAppinstallationCopy,
    ),
    /** Get runtime status belonging to an AppInstallation. */
    retrieveStatus: this.requestFunctionFactory(descriptors.appRetrieveStatus),
    /** Create linkage between an AppInstallation and DatabaseUsers. */
    setDatabaseUsers: this.requestFunctionFactory(
      descriptors.appSetDatabaseUsers,
    ),
    /** Remove linkage between an AppInstallation and a Database. */
    unlinkDatabase: this.requestFunctionFactory(descriptors.appUnlinkDatabase),
  };

  /** The article API allows you to read article information. */
  public readonly article = {
    /** Get an Article. */
    getArticle: this.requestFunctionFactory(descriptors.articleGetArticle),
    /** List Articles. */
    listArticles: this.requestFunctionFactory(descriptors.articleListArticles),
  };

  /** The backup API allows you to manage your project backups. */
  public readonly backup = {
    /** Export a ProjectBackup for download. */
    createProjectBackupExport: this.requestFunctionFactory(
      descriptors.backupCreateProjectBackupExport,
    ),
    /** Delete a ProjectBackupExport. */
    deleteProjectBackupExport: this.requestFunctionFactory(
      descriptors.backupDeleteProjectBackupExport,
    ),
    /** List BackupSchedules belonging to a Project. */
    listProjectBackupSchedules: this.requestFunctionFactory(
      descriptors.backupListProjectBackupSchedules,
    ),
    /** Create a BackupSchedule for a Project. */
    createProjectBackupSchedule: this.requestFunctionFactory(
      descriptors.backupCreateProjectBackupSchedule,
    ),
    /** List Backups belonging to a Project. */
    listProjectBackups: this.requestFunctionFactory(
      descriptors.backupListProjectBackups,
    ),
    /** Create a Backup of a Project. */
    createProjectBackup: this.requestFunctionFactory(
      descriptors.backupCreateProjectBackup,
    ),
    /** Get a ProjectBackupSchedule. */
    getProjectBackupSchedule: this.requestFunctionFactory(
      descriptors.backupGetProjectBackupSchedule,
    ),
    /** Delete a ProjectBackupSchedule. */
    deleteProjectBackupSchedule: this.requestFunctionFactory(
      descriptors.backupDeleteProjectBackupSchedule,
    ),
    /** Update a ProjectBackupSchedule. */
    updateProjectBackupSchedule: this.requestFunctionFactory(
      descriptors.backupUpdateProjectBackupSchedule,
    ),
    /** Get a ProjectBackup. */
    getProjectBackup: this.requestFunctionFactory(
      descriptors.backupGetProjectBackup,
    ),
    /** Delete a ProjectBackup. */
    deleteProjectBackup: this.requestFunctionFactory(
      descriptors.backupDeleteProjectBackup,
    ),
    /** Get table of contents for a Project Backup. */
    getProjectBackupToc: this.requestFunctionFactory(
      descriptors.backupGetProjectBackupToc,
    ),
    /** Restore a ProjectBackup's path. */
    requestProjectBackupRestorePath: this.requestFunctionFactory(
      descriptors.backupRequestProjectBackupRestorePath,
    ),
    /** Change the description of a ProjectBackup. */
    updateProjectBackupDescription: this.requestFunctionFactory(
      descriptors.backupUpdateProjectBackupDescription,
    ),
  };

  /** The container API allows you to manage your stacks, containers, volumes and registries. */
  public readonly container = {
    /** List Registries belonging to a Project. */
    listRegistries: this.requestFunctionFactory(
      descriptors.containerListRegistries,
    ),
    /** Create a Registry. */
    createRegistry: this.requestFunctionFactory(
      descriptors.containerCreateRegistry,
    ),
    /** Get a Stack. */
    getStack: this.requestFunctionFactory(descriptors.containerGetStack),
    /** Declaratively create, update or delete Services or Volumes belonging to a Stack. */
    declareStack: this.requestFunctionFactory(
      descriptors.containerDeclareStack,
    ),
    /** Create, update or delete Services or Volumes belonging to a Stack. */
    updateStack: this.requestFunctionFactory(descriptors.containerUpdateStack),
    /** Get a Registry. */
    getRegistry: this.requestFunctionFactory(descriptors.containerGetRegistry),
    /** Delete a Registry. */
    deleteRegistry: this.requestFunctionFactory(
      descriptors.containerDeleteRegistry,
    ),
    /** Update a Registry. */
    updateRegistry: this.requestFunctionFactory(
      descriptors.containerUpdateRegistry,
    ),
    /** Get a Volume belonging to a Stack. */
    getVolume: this.requestFunctionFactory(descriptors.containerGetVolume),
    /** Delete a Volume belonging to a Stack. */
    deleteVolume: this.requestFunctionFactory(
      descriptors.containerDeleteVolume,
    ),
    /** Get a ContainerImageConfig. */
    getContainerImageConfig: this.requestFunctionFactory(
      descriptors.containerGetContainerImageConfig,
    ),
    /** Get logs belonging to a Service. */
    getServiceLogs: this.requestFunctionFactory(
      descriptors.containerGetServiceLogs,
    ),
    /** Get a Service belonging to a Stack. */
    getService: this.requestFunctionFactory(descriptors.containerGetService),
    /** List Services belonging to a Project. */
    listServices: this.requestFunctionFactory(
      descriptors.containerListServices,
    ),
    /** List Stacks belonging to a Project. */
    listStacks: this.requestFunctionFactory(descriptors.containerListStacks),
    /** List Volumes belonging to a Project. */
    listVolumes: this.requestFunctionFactory(descriptors.containerListVolumes),
    /** Pulls the latest version of the Service's image and optionally recreates the Service. */
    pullImageForService: this.requestFunctionFactory(
      descriptors.containerPullImageForService,
    ),
    /** Recreate a Service. */
    recreateService: this.requestFunctionFactory(
      descriptors.containerRecreateService,
    ),
    /** Restart a started Service. */
    restartService: this.requestFunctionFactory(
      descriptors.containerRestartService,
    ),
    /** Start a stopped Service. */
    startService: this.requestFunctionFactory(
      descriptors.containerStartService,
    ),
    /** Stop a started Service. */
    stopService: this.requestFunctionFactory(descriptors.containerStopService),
    /** Validate a Registries' URI. */
    validateContainerRegistryUri: this.requestFunctionFactory(
      descriptors.containerValidateContainerRegistryUri,
    ),
    /** Validate a Registries' credentials. */
    validateRegistryCredentials: this.requestFunctionFactory(
      descriptors.containerValidateRegistryCredentials,
    ),
  };

  /** The contract API allows you to manage your contracts and orders */
  public readonly contract = {
    /** Schedule the Termination of a ContractItem. */
    terminateContractItem: this.requestFunctionFactory(
      descriptors.contractTerminateContractItem,
    ),
    /** Cancel the Termination for the referred ContractItem. */
    cancelContractItemTermination: this.requestFunctionFactory(
      descriptors.contractCancelContractItemTermination,
    ),
    /** Cancel the TariffChange for the referred ContractItem. */
    cancelContractTariffChange: this.requestFunctionFactory(
      descriptors.contractCancelContractTariffChange,
    ),
    /** Schedule the Termination of a Contract. */
    terminateContract: this.requestFunctionFactory(
      descriptors.contractTerminateContract,
    ),
    /** Cancel the Termination for the referred Contract. */
    cancelContractTermination: this.requestFunctionFactory(
      descriptors.contractCancelContractTermination,
    ),
    /** Return the BaseItem of the Contract with the given ID. */
    getBaseItemOfContract: this.requestFunctionFactory(
      descriptors.contractGetBaseItemOfContract,
    ),
    /** Return the Contract for the given Certificate. */
    getDetailOfContractByCertificate: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContractByCertificate,
    ),
    /** Return the Contract for the given Domain. */
    getDetailOfContractByDomain: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContractByDomain,
    ),
    /** Return the Contract for the given LeadFyndrProfile. */
    getDetailOfContractByLeadFyndr: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContractByLeadFyndr,
    ),
    /** Return the Contract for the given Project. */
    getDetailOfContractByProject: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContractByProject,
    ),
    /** Return the Contract for the given Server. */
    getDetailOfContractByServer: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContractByServer,
    ),
    /** Get the ContractItem with the given ID. */
    getDetailOfContractItem: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContractItem,
    ),
    /** Returns the Contract with the given ID. */
    getDetailOfContract: this.requestFunctionFactory(
      descriptors.contractGetDetailOfContract,
    ),
    /** Return a list of Contracts for the given Customer. */
    listContracts: this.requestFunctionFactory(
      descriptors.contractListContracts,
    ),
    /** Get details of an Invoice. */
    invoiceDetail: this.requestFunctionFactory(descriptors.invoiceDetail),
    /** Get InvoiceSettings of a Customer. */
    invoiceGetDetailOfInvoiceSettings: this.requestFunctionFactory(
      descriptors.invoiceGetDetailOfInvoiceSettings,
    ),
    /** Update InvoiceSettings of a Customer. */
    invoiceUpdateInvoiceSettings: this.requestFunctionFactory(
      descriptors.invoiceUpdateInvoiceSettings,
    ),
    /** Request an Access Token for the Invoice file. */
    invoiceGetFileAccessToken: this.requestFunctionFactory(
      descriptors.invoiceGetFileAccessToken,
    ),
    /** List Invoices of a Customer. */
    invoiceListCustomerInvoices: this.requestFunctionFactory(
      descriptors.invoiceListCustomerInvoices,
    ),
    /** Get list of Orders. */
    orderListOrders: this.requestFunctionFactory(descriptors.orderListOrders),
    /** Create an Order. */
    orderCreateOrder: this.requestFunctionFactory(descriptors.orderCreateOrder),
    /** Create TariffChange Order. */
    orderCreateTariffChange: this.requestFunctionFactory(
      descriptors.orderCreateTariffChange,
    ),
    /** Get Order for Customer. */
    orderGetOrder: this.requestFunctionFactory(descriptors.orderGetOrder),
    /** Get list of Orders of a Customer. */
    orderListCustomerOrders: this.requestFunctionFactory(
      descriptors.orderListCustomerOrders,
    ),
    /** Get list of Orders of a Project. */
    orderListProjectOrders: this.requestFunctionFactory(
      descriptors.orderListProjectOrders,
    ),
    /** Preview Order. */
    orderPreviewOrder: this.requestFunctionFactory(
      descriptors.orderPreviewOrder,
    ),
    /** Preview TariffChange. */
    orderPreviewTariffChange: this.requestFunctionFactory(
      descriptors.orderPreviewTariffChange,
    ),
  };

  /** The marketplace API allows you to manage extensions and more information regaring the marketplace. */
  public readonly marketplace = {
    /** Get Contributor Billing Information. */
    contributorGetBillingInformation: this.requestFunctionFactory(
      descriptors.contributorGetBillingInformation,
    ),
    /** Update Contributor Billing Information. */
    contributorUpdateBillingInformation: this.requestFunctionFactory(
      descriptors.contributorUpdateBillingInformation,
    ),
    /** Get the Stripe Billing Portal Link for a Customer */
    contributorGetCustomerBillingPortalLink: this.requestFunctionFactory(
      descriptors.contributorGetCustomerBillingPortalLink,
    ),
    /** Get the Stripe Dashboard Link for a Contributor. */
    contributorGetLoginLink: this.requestFunctionFactory(
      descriptors.contributorGetLoginLink,
    ),
    /** List incoming Invoices of a Contributor. */
    contributorListIncomingInvoices: this.requestFunctionFactory(
      descriptors.contributorListIncomingInvoices,
    ),
    /** List all invoices on behalf of a contributor. */
    contributorListOnbehalfInvoices: this.requestFunctionFactory(
      descriptors.contributorListOnbehalfInvoices,
    ),
    /** Request an Access Token for the Incoming Invoice file. */
    contributorReceiptGetFileAccessToken: this.requestFunctionFactory(
      descriptors.contributorReceiptGetFileAccessToken,
    ),
    /** Authenticate your external application using the extensionInstanceSecret. */
    extensionAuthenticateInstance: this.requestFunctionFactory(
      descriptors.extensionAuthenticateInstance,
    ),
    /** Authenticate your external application using a session token and an extension secret */
    extensionAuthenticateWithSessionToken: this.requestFunctionFactory(
      descriptors.extensionAuthenticateWithSessionToken,
    ),
    /** Schedule an Extension Instance Termination for the next possible date. */
    extensionScheduleExtensionTermination: this.requestFunctionFactory(
      descriptors.extensionScheduleExtensionTermination,
    ),
    /** Cancel an Extension Instance Termination. */
    extensionCancelExtensionTermination: this.requestFunctionFactory(
      descriptors.extensionCancelExtensionTermination,
    ),
    /** Create the OnboardingProcess of a Contributor. */
    extensionCreateContributorOnboardingProcess: this.requestFunctionFactory(
      descriptors.extensionCreateContributorOnboardingProcess,
    ),
    /** Get all open extension orders for given customer */
    extensionGetCustomerExtensionInstanceOrders: this.requestFunctionFactory(
      descriptors.extensionGetCustomerExtensionInstanceOrders,
    ),
    /** Get the Contract Strategy of an Extension Instance */
    extensionGetExtensionInstanceContract: this.requestFunctionFactory(
      descriptors.extensionGetExtensionInstanceContract,
    ),
    /** Update or Create Contract for existing Extension Instances. */
    extensionUpdateExtensionInstanceContract: this.requestFunctionFactory(
      descriptors.extensionUpdateExtensionInstanceContract,
    ),
    /** Get all open extension orders for given project */
    extensionGetProjectExtensionInstanceOrders: this.requestFunctionFactory(
      descriptors.extensionGetProjectExtensionInstanceOrders,
    ),
    /** Order Extension with saved payment method */
    extensionOrderExtension: this.requestFunctionFactory(
      descriptors.extensionOrderExtension,
    ),
    /** Creates or Updates Pricing for an Extension. */
    extensionUpdateExtensionPricing: this.requestFunctionFactory(
      descriptors.extensionUpdateExtensionPricing,
    ),
    /** Get payment method details */
    customerGetPaymentMethod: this.requestFunctionFactory(
      descriptors.marketplaceCustomerGetPaymentMethod,
    ),
    /** Get the link to update the marketplace payment method */
    customerUpdatePaymentMethod: this.requestFunctionFactory(
      descriptors.marketplaceCustomerUpdatePaymentMethod,
    ),
    /** Start the verification process of an Extension. */
    extensionRequestExtensionVerification: this.requestFunctionFactory(
      descriptors.extensionRequestExtensionVerification,
    ),
    /** Get the public key to verify the webhook signature. */
    extensionGetPublicKey: this.requestFunctionFactory(
      descriptors.extensionGetPublicKey,
    ),
    /** List ContractPartners of the contributor. */
    contributorListContractPartnersOfContributor: this.requestFunctionFactory(
      descriptors.contributorListContractPartnersOfContributor,
    ),
    /** Get an Extension. */
    extensionGetExtension: this.requestFunctionFactory(
      descriptors.extensionGetExtension,
    ),
    /** Invalidate the given Extension secret immediately. */
    extensionInvalidateExtensionSecret: this.requestFunctionFactory(
      descriptors.extensionInvalidateExtensionSecret,
    ),
    /** Consent to extension scopes. */
    extensionConsentToExtensionScopes: this.requestFunctionFactory(
      descriptors.extensionConsentToExtensionScopes,
    ),
    /** Get Extension of own contributor. */
    extensionGetOwnExtension: this.requestFunctionFactory(
      descriptors.extensionGetOwnExtension,
    ),
    /** Delete an extension. */
    extensionDeleteExtension: this.requestFunctionFactory(
      descriptors.extensionDeleteExtension,
    ),
    /** Patch Extension. */
    extensionPatchExtension: this.requestFunctionFactory(
      descriptors.extensionPatchExtension,
    ),
    /** Add a logo to an extension. */
    extensionRequestLogoUpload: this.requestFunctionFactory(
      descriptors.extensionRequestLogoUpload,
    ),
    /** Remove the logo of an extension. */
    extensionRemoveLogo: this.requestFunctionFactory(
      descriptors.extensionRemoveLogo,
    ),
    /** Generate a session token to transmit it to the extensions frontend fragment. */
    extensionGenerateSessionToken: this.requestFunctionFactory(
      descriptors.extensionGenerateSessionToken,
    ),
    /** Change the context of an Extension. */
    extensionChangeContext: this.requestFunctionFactory(
      descriptors.extensionChangeContext,
    ),
    /** Disable an ExtensionInstance. */
    extensionDisableExtensionInstance: this.requestFunctionFactory(
      descriptors.extensionDisableExtensionInstance,
    ),
    /** Get an ExtensionInstance. */
    extensionGetExtensionInstance: this.requestFunctionFactory(
      descriptors.extensionGetExtensionInstance,
    ),
    /** Delete a free ExtensionInstance. If the Extension is chargable the contract must be terminated instead. */
    extensionDeleteExtensionInstance: this.requestFunctionFactory(
      descriptors.extensionDeleteExtensionInstance,
    ),
    /** Get a Contributor. */
    extensionGetContributor: this.requestFunctionFactory(
      descriptors.extensionGetContributor,
    ),
    /** Get the ExtensionInstance of a specific project and extension, if existing. */
    extensionGetExtensionInstanceForProject: this.requestFunctionFactory(
      descriptors.extensionGetExtensionInstanceForProject,
    ),
    /** Remove an asset of an extension. */
    extensionRemoveAsset: this.requestFunctionFactory(
      descriptors.extensionRemoveAsset,
    ),
    /** List Extensions of own contributor. */
    extensionListOwnExtensions: this.requestFunctionFactory(
      descriptors.extensionListOwnExtensions,
    ),
    /** Register an Extension. */
    extensionRegisterExtension: this.requestFunctionFactory(
      descriptors.extensionRegisterExtension,
    ),
    /** Enable an ExtensionInstance. */
    extensionEnableExtensionInstance: this.requestFunctionFactory(
      descriptors.extensionEnableExtensionInstance,
    ),
    /** Publish or withdraw an Extension. */
    extensionSetExtensionPublishedState: this.requestFunctionFactory(
      descriptors.extensionSetExtensionPublishedState,
    ),
    /** Get the ExtensionInstance of a specific customer and extension, if existing. */
    extensionGetExtensionInstanceForCustomer: this.requestFunctionFactory(
      descriptors.extensionGetExtensionInstanceForCustomer,
    ),
    /** List Contributors. */
    extensionListContributors: this.requestFunctionFactory(
      descriptors.extensionListContributors,
    ),
    /** Rotate the secret for an extension instance. */
    contributorRotateSecretForExtensionInstance: this.requestFunctionFactory(
      descriptors.contributorRotateSecretForExtensionInstance,
    ),
    /** Add an asset to an extension. */
    extensionRequestAssetUpload: this.requestFunctionFactory(
      descriptors.extensionRequestAssetUpload,
    ),
    /** List Scopes. */
    extensionListScopes: this.requestFunctionFactory(
      descriptors.extensionListScopes,
    ),
    /** Create an access token retrieval key for an extension instance. */
    extensionCreateRetrievalKey: this.requestFunctionFactory(
      descriptors.extensionCreateRetrievalKey,
    ),
    /** Generate an Extension secret for the given Extension. */
    extensionGenerateExtensionSecret: this.requestFunctionFactory(
      descriptors.extensionGenerateExtensionSecret,
    ),
    /** Dry run a webhook with random or given values. */
    extensionDryRunWebhook: this.requestFunctionFactory(
      descriptors.extensionDryRunWebhook,
    ),
    /** List ExtensionInstances. */
    extensionListExtensionInstances: this.requestFunctionFactory(
      descriptors.extensionListExtensionInstances,
    ),
    /** Create an ExtensionInstance. */
    extensionCreateExtensionInstance: this.requestFunctionFactory(
      descriptors.extensionCreateExtensionInstance,
    ),
    /** List Extensions. */
    extensionListExtensions: this.requestFunctionFactory(
      descriptors.extensionListExtensions,
    ),
  };

  /** The conversation API allows you to manage your support conversations. */
  public readonly conversation = {
    /** Get all conversation the authenticated user has created or has access to. */
    listConversations: this.requestFunctionFactory(
      descriptors.conversationListConversations,
    ),
    /** Create a conversation. */
    createConversation: this.requestFunctionFactory(
      descriptors.conversationCreateConversation,
    ),
    /** Get all message of the conversation. */
    listMessagesByConversation: this.requestFunctionFactory(
      descriptors.conversationListMessagesByConversation,
    ),
    /** Send a new message in the conversation. */
    createMessage: this.requestFunctionFactory(
      descriptors.conversationCreateMessage,
    ),
    /** Get a specific conversation category. */
    getCategory: this.requestFunctionFactory(
      descriptors.conversationGetCategory,
    ),
    /** Get members of a support conversation. */
    getConversationMembers: this.requestFunctionFactory(
      descriptors.conversationGetConversationMembers,
    ),
    /** Get preferences for customer conversations. */
    getConversationPreferencesOfCustomer: this.requestFunctionFactory(
      descriptors.conversationGetConversationPreferencesOfCustomer,
    ),
    /** Get a support conversation. */
    getConversation: this.requestFunctionFactory(
      descriptors.conversationGetConversation,
    ),
    /** Update the basic properties of the conversation. */
    updateConversation: this.requestFunctionFactory(
      descriptors.conversationUpdateConversation,
    ),
    /** Request an access token for the File belonging to the Conversation. */
    getFileAccessToken: this.requestFunctionFactory(
      descriptors.conversationGetFileAccessToken,
    ),
    /** Get all conversation categories. */
    listCategories: this.requestFunctionFactory(
      descriptors.conversationListCategories,
    ),
    /** Request a file upload token for the conversation. */
    requestFileUpload: this.requestFunctionFactory(
      descriptors.conversationRequestFileUpload,
    ),
    /** Update the status of a conversation. */
    setConversationStatus: this.requestFunctionFactory(
      descriptors.conversationSetConversationStatus,
    ),
    /** Update the content of the message */
    updateMessage: this.requestFunctionFactory(
      descriptors.conversationUpdateMessage,
    ),
  };

  /** The cronjob API allows you to manage cronjobs within a project. */
  public readonly cronjob = {
    /** Abort a CronjobExecution. */
    abortExecution: this.requestFunctionFactory(
      descriptors.cronjobAbortExecution,
    ),
    /** List Cronjobs belonging to a Project. */
    listCronjobs: this.requestFunctionFactory(descriptors.cronjobListCronjobs),
    /** Create a Cronjob. */
    createCronjob: this.requestFunctionFactory(
      descriptors.cronjobCreateCronjob,
    ),
    /** List CronjobExecutions belonging to a Cronjob. */
    listExecutions: this.requestFunctionFactory(
      descriptors.cronjobListExecutions,
    ),
    /** Trigger a Cronjob. */
    createExecution: this.requestFunctionFactory(
      descriptors.cronjobCreateExecution,
    ),
    /** Get a Cronjob. */
    getCronjob: this.requestFunctionFactory(descriptors.cronjobGetCronjob),
    /** Delete a Cronjob. */
    deleteCronjob: this.requestFunctionFactory(
      descriptors.cronjobDeleteCronjob,
    ),
    /** Update a Cronjob. */
    updateCronjob: this.requestFunctionFactory(
      descriptors.cronjobUpdateCronjob,
    ),
    /** Get a CronjobExecution. */
    getExecution: this.requestFunctionFactory(descriptors.cronjobGetExecution),
    /** Update a Cronjob's app id. */
    updateCronjobAppId: this.requestFunctionFactory(
      descriptors.cronjobUpdateCronjobAppId,
    ),
  };

  /** The customer API allows you to manage your own organizations and users. */
  public readonly customer = {
    /** Accept a CustomerInvite. */
    acceptCustomerInvite: this.requestFunctionFactory(
      descriptors.customerAcceptCustomerInvite,
    ),
    /** List Invites belonging to a Customer. */
    listInvitesForCustomer: this.requestFunctionFactory(
      descriptors.customerListInvitesForCustomer,
    ),
    /** Create a CustomerInvite. */
    createCustomerInvite: this.requestFunctionFactory(
      descriptors.customerCreateCustomerInvite,
    ),
    /** Get all customer profiles the authenticated user has access to. */
    listCustomers: this.requestFunctionFactory(
      descriptors.customerListCustomers,
    ),
    /** Create a new customer profile. */
    createCustomer: this.requestFunctionFactory(
      descriptors.customerCreateCustomer,
    ),
    /** Lets us know your idea for our recommendation programm. */
    createRecommendationSuggestion: this.requestFunctionFactory(
      descriptors.customerCreateRecommendationSuggestion,
    ),
    /** Gets the Wallet of the Customer. */
    getWallet: this.requestFunctionFactory(descriptors.customerGetWallet),
    /** Create the Wallet for the Customer. */
    createWallet: this.requestFunctionFactory(descriptors.customerCreateWallet),
    /** Decline a CustomerInvite. */
    declineCustomerInvite: this.requestFunctionFactory(
      descriptors.customerDeclineCustomerInvite,
    ),
    /** Get a CustomerInvite. */
    getCustomerInvite: this.requestFunctionFactory(
      descriptors.customerGetCustomerInvite,
    ),
    /** Delete a CustomerInvite. */
    deleteCustomerInvite: this.requestFunctionFactory(
      descriptors.customerDeleteCustomerInvite,
    ),
    /** Get a CustomerMembership. */
    getCustomerMembership: this.requestFunctionFactory(
      descriptors.customerGetCustomerMembership,
    ),
    /** Delete a CustomerMembership. */
    deleteCustomerMembership: this.requestFunctionFactory(
      descriptors.customerDeleteCustomerMembership,
    ),
    /** Update a CustomerMembership. */
    updateCustomerMembership: this.requestFunctionFactory(
      descriptors.customerUpdateCustomerMembership,
    ),
    /** Get a customer profile. */
    getCustomer: this.requestFunctionFactory(descriptors.customerGetCustomer),
    /** Update a customer profile. */
    updateCustomer: this.requestFunctionFactory(
      descriptors.customerUpdateCustomer,
    ),
    /** Delete a customer profile. */
    deleteCustomer: this.requestFunctionFactory(
      descriptors.customerDeleteCustomer,
    ),
    /** Get a CustomerInvite by token. */
    getCustomerTokenInvite: this.requestFunctionFactory(
      descriptors.customerGetCustomerTokenInvite,
    ),
    /** Check if the customer profile has a valid contract partner configured. */
    isCustomerLegallyCompetent: this.requestFunctionFactory(
      descriptors.customerIsCustomerLegallyCompetent,
    ),
    /** List CustomerInvites belonging to the executing user. */
    listCustomerInvites: this.requestFunctionFactory(
      descriptors.customerListCustomerInvites,
    ),
    /** List CustomerMemberships belonging to the executing user. */
    listCustomerMemberships: this.requestFunctionFactory(
      descriptors.customerListCustomerMemberships,
    ),
    /** List Memberships belonging to a Customer. */
    listMembershipsForCustomer: this.requestFunctionFactory(
      descriptors.customerListMembershipsForCustomer,
    ),
    /** Request a new avatar upload for the customer profile. */
    requestAvatarUpload: this.requestFunctionFactory(
      descriptors.customerRequestAvatarUpload,
    ),
    /** Remove the avatar picture of the customer profile. */
    removeAvatar: this.requestFunctionFactory(descriptors.customerRemoveAvatar),
    /** Resend the mail for a CustomerInvite. */
    resendCustomerInviteMail: this.requestFunctionFactory(
      descriptors.customerResendCustomerInviteMail,
    ),
  };

  /** The database API allows you to manage your databases, like MySQL and Redis databases. */
  public readonly database = {
    /** List MySQLDatabases belonging to a Project. */
    listMysqlDatabases: this.requestFunctionFactory(
      descriptors.databaseListMysqlDatabases,
    ),
    /** Create a MySQLDatabase with a MySQLUser. */
    createMysqlDatabase: this.requestFunctionFactory(
      descriptors.databaseCreateMysqlDatabase,
    ),
    /** List MySQLUsers belonging to a Database. */
    listMysqlUsers: this.requestFunctionFactory(
      descriptors.databaseListMysqlUsers,
    ),
    /** Create a MySQLUser. */
    createMysqlUser: this.requestFunctionFactory(
      descriptors.databaseCreateMysqlUser,
    ),
    /** List RedisDatabases belonging to a Project. */
    listRedisDatabases: this.requestFunctionFactory(
      descriptors.databaseListRedisDatabases,
    ),
    /** Create a RedisDatabase. */
    createRedisDatabase: this.requestFunctionFactory(
      descriptors.databaseCreateRedisDatabase,
    ),
    /** Get a MySQLDatabase. */
    getMysqlDatabase: this.requestFunctionFactory(
      descriptors.databaseGetMysqlDatabase,
    ),
    /** Delete a MySQLDatabase. */
    deleteMysqlDatabase: this.requestFunctionFactory(
      descriptors.databaseDeleteMysqlDatabase,
    ),
    /** Get a MySQLUser. */
    getMysqlUser: this.requestFunctionFactory(descriptors.databaseGetMysqlUser),
    /** Update a MySQLUser. */
    updateMysqlUser: this.requestFunctionFactory(
      descriptors.databaseUpdateMysqlUser,
    ),
    /** Delete a MySQLUser. */
    deleteMysqlUser: this.requestFunctionFactory(
      descriptors.databaseDeleteMysqlUser,
    ),
    /** Get a RedisDatabase. */
    getRedisDatabase: this.requestFunctionFactory(
      descriptors.databaseGetRedisDatabase,
    ),
    /** Delete a RedisDatabase. */
    deleteRedisDatabase: this.requestFunctionFactory(
      descriptors.databaseDeleteRedisDatabase,
    ),
    /** Disable a MySQLUser. */
    disableMysqlUser: this.requestFunctionFactory(
      descriptors.databaseDisableMysqlUser,
    ),
    /** Enable a MySQLUser. */
    enableMysqlUser: this.requestFunctionFactory(
      descriptors.databaseEnableMysqlUser,
    ),
    /** Get a MySQLUser's PhpMyAdmin-URL. */
    getMysqlUserPhpMyAdminUrl: this.requestFunctionFactory(
      descriptors.databaseGetMysqlUserPhpMyAdminUrl,
    ),
    /** List available MySQL character sets and collations, optionally filtered by a MySQLVersion. */
    listMysqlCharsets: this.requestFunctionFactory(
      descriptors.databaseListMysqlCharsets,
    ),
    /** List MySQLVersions. */
    listMysqlVersions: this.requestFunctionFactory(
      descriptors.databaseListMysqlVersions,
    ),
    /** List RedisVersions. */
    listRedisVersions: this.requestFunctionFactory(
      descriptors.databaseListRedisVersions,
    ),
    /** Update a MySQLDatabase's default character settings. */
    updateMysqlDatabaseDefaultCharset: this.requestFunctionFactory(
      descriptors.databaseUpdateMysqlDatabaseDefaultCharset,
    ),
    /** Update a MySQLDatabase's description. */
    updateMysqlDatabaseDescription: this.requestFunctionFactory(
      descriptors.databaseUpdateMysqlDatabaseDescription,
    ),
    /** Update a MySQLUser's password. */
    updateMysqlUserPassword: this.requestFunctionFactory(
      descriptors.databaseUpdateMysqlUserPassword,
    ),
    /** Update a RedisDatabase's configuration. */
    updateRedisDatabaseConfiguration: this.requestFunctionFactory(
      descriptors.databaseUpdateRedisDatabaseConfiguration,
    ),
    /** Update a RedisDatabase's description. */
    updateRedisDatabaseDescription: this.requestFunctionFactory(
      descriptors.databaseUpdateRedisDatabaseDescription,
    ),
  };

  /** The domain API allows you to manage your domains, DNS records, SSL certificates and ingress resources. */
  public readonly domain = {
    /** List Domains */
    listDomains: this.requestFunctionFactory(descriptors.domainListDomains),
    /** Update the nameservers of a Domain. */
    updateDomainNameservers: this.requestFunctionFactory(
      descriptors.domainUpdateDomainNameservers,
    ),
    /** Update the paths of an Ingress. */
    ingressUpdateIngressPaths: this.requestFunctionFactory(
      descriptors.ingressUpdateIngressPaths,
    ),
    /** Update the tls settings of an Ingress. */
    ingressUpdateIngressTls: this.requestFunctionFactory(
      descriptors.ingressUpdateIngressTls,
    ),
    /** Create a DNSZone. */
    dnsCreateDnsZone: this.requestFunctionFactory(descriptors.dnsCreateDnsZone),
    /** Get a DNSZone. */
    dnsGetDnsZone: this.requestFunctionFactory(descriptors.dnsGetDnsZone),
    /** Delete a DNSZone. */
    dnsDeleteDnsZone: this.requestFunctionFactory(descriptors.dnsDeleteDnsZone),
    /** List DNSZones belonging to a Project. */
    dnsListDnsZones: this.requestFunctionFactory(descriptors.dnsListDnsZones),
    /** Set a record set on a DNSZone to managed. */
    dnsSetRecordSetManaged: this.requestFunctionFactory(
      descriptors.dnsSetRecordSetManaged,
    ),
    /** Update a record set on a DNSZone. */
    dnsUpdateRecordSet: this.requestFunctionFactory(
      descriptors.dnsUpdateRecordSet,
    ),
    /** Abort a Domain declaration. */
    abortDomainDeclaration: this.requestFunctionFactory(
      descriptors.domainAbortDomainDeclaration,
    ),
    /** Check if a Domain is available to register. */
    checkDomainRegistrability: this.requestFunctionFactory(
      descriptors.domainCheckDomainRegistrability,
    ),
    /** Check if a Domain is available to transfer. */
    checkDomainTransferability: this.requestFunctionFactory(
      descriptors.domainCheckDomainTransferability,
    ),
    /** Create an auth code for a Domains transfer-out process. */
    createDomainAuthCode: this.requestFunctionFactory(
      descriptors.domainCreateDomainAuthCode,
    ),
    /** Get a Domain. */
    getDomain: this.requestFunctionFactory(descriptors.domainGetDomain),
    /** Delete a Domain. */
    deleteDomain: this.requestFunctionFactory(descriptors.domainDeleteDomain),
    /** Get the latest screenshot's FileReference belonging to a Domain. */
    getLatestScreenshot: this.requestFunctionFactory(
      descriptors.domainGetLatestScreenshot,
    ),
    /** List the contact schemas for a TLD. */
    listTldContactSchemas: this.requestFunctionFactory(
      descriptors.domainListTldContactSchemas,
    ),
    /** List TLDs. */
    listTlds: this.requestFunctionFactory(descriptors.domainListTlds),
    /** Resend a Domain email. */
    resendDomainEmail: this.requestFunctionFactory(
      descriptors.domainResendDomainEmail,
    ),
    /** Suggest a list of domains based on a prompt using AI. */
    suggest: this.requestFunctionFactory(descriptors.domainSuggest),
    /** Update the auth code of a Domain. */
    updateDomainAuthCode: this.requestFunctionFactory(
      descriptors.domainUpdateDomainAuthCode,
    ),
    /** Update a contact of a Domain. */
    updateDomainContact: this.requestFunctionFactory(
      descriptors.domainUpdateDomainContact,
    ),
    /** Update a Domain's project id. */
    updateDomainProjectId: this.requestFunctionFactory(
      descriptors.domainUpdateDomainProjectId,
    ),
    /** List Ingresses. */
    ingressListIngresses: this.requestFunctionFactory(
      descriptors.ingressListIngresses,
    ),
    /** Create an Ingress. */
    ingressCreateIngress: this.requestFunctionFactory(
      descriptors.ingressCreateIngress,
    ),
    /** Get an Ingress. */
    ingressGetIngress: this.requestFunctionFactory(
      descriptors.ingressGetIngress,
    ),
    /** Delete an Ingress. */
    ingressDeleteIngress: this.requestFunctionFactory(
      descriptors.ingressDeleteIngress,
    ),
    /** Verifiy the ownership of an Ingress. */
    ingressIngressVerifyOwnership: this.requestFunctionFactory(
      descriptors.ingressIngressVerifyOwnership,
    ),
    /** List Ingresses compatible with a certificate. */
    ingressListIngressesCompatibleWithCertificate: this.requestFunctionFactory(
      descriptors.ingressListIngressesCompatibleWithCertificate,
    ),
    /** Request the ACME certificate issuance of an Ingress. */
    ingressRequestIngressAcmeCertificateIssuance: this.requestFunctionFactory(
      descriptors.ingressRequestIngressAcmeCertificateIssuance,
    ),
    /** Check the replacement of a Certificate. */
    sslCheckReplaceCertificate: this.requestFunctionFactory(
      descriptors.sslCheckReplaceCertificate,
    ),
    /** List CertificateRequests belonging to a Project or an Ingress. */
    sslListCertificateRequests: this.requestFunctionFactory(
      descriptors.sslListCertificateRequests,
    ),
    /** Create a CertificateRequest. */
    sslCreateCertificateRequest: this.requestFunctionFactory(
      descriptors.sslCreateCertificateRequest,
    ),
    /** Delete a CertificateRequest. */
    sslDeleteCertificateRequest: this.requestFunctionFactory(
      descriptors.sslDeleteCertificateRequest,
    ),
    /** Delete a Certificate. */
    sslDeleteCertificate: this.requestFunctionFactory(
      descriptors.sslDeleteCertificate,
    ),
    /** Get a CertificateRequest. */
    sslGetCertificateRequest: this.requestFunctionFactory(
      descriptors.sslGetCertificateRequest,
    ),
    /** Get a Certificate. */
    sslGetCertificate: this.requestFunctionFactory(
      descriptors.sslGetCertificate,
    ),
    /** Update a Certificate. */
    sslReplaceCertificate: this.requestFunctionFactory(
      descriptors.sslReplaceCertificate,
    ),
    /** List Certificates belonging to a Project or an Ingress. */
    sslListCertificates: this.requestFunctionFactory(
      descriptors.sslListCertificates,
    ),
    /** Update the certificate of a CertificateRequest. */
    sslSetCertificateRequestCertificate: this.requestFunctionFactory(
      descriptors.sslSetCertificateRequestCertificate,
    ),
  };

  /** The mail API allows you to manage your mail accounts. */
  public readonly mail = {
    /** Update the autoresponder of a MailAddress. */
    updateMailAddressAutoresponder: this.requestFunctionFactory(
      descriptors.mailUpdateMailAddressAutoresponder,
    ),
    /** Update the forward addresses of a MailAddresses. */
    updateMailAddressForwardAddresses: this.requestFunctionFactory(
      descriptors.mailUpdateMailAddressForwardAddresses,
    ),
    /** Update the password for a MailAddress. */
    updateMailAddressPassword: this.requestFunctionFactory(
      descriptors.mailUpdateMailAddressPassword,
    ),
    /** Update the quota of a MailAddress. */
    updateMailAddressQuota: this.requestFunctionFactory(
      descriptors.mailUpdateMailAddressQuota,
    ),
    /** Update the spam protection of a MailAddress. */
    updateMailAddressSpamProtection: this.requestFunctionFactory(
      descriptors.mailUpdateMailAddressSpamProtection,
    ),
    /** List DeliveryBoxes belonging to a Project. */
    listDeliveryBoxes: this.requestFunctionFactory(
      descriptors.mailListDeliveryBoxes,
    ),
    /** Create a DeliveryBox. */
    createDeliverybox: this.requestFunctionFactory(
      descriptors.mailCreateDeliverybox,
    ),
    /** List MailAddresses belonging to a Project. */
    listMailAddresses: this.requestFunctionFactory(
      descriptors.mailListMailAddresses,
    ),
    /** Create a MailAddress. */
    createMailAddress: this.requestFunctionFactory(
      descriptors.mailCreateMailAddress,
    ),
    /** Get a DeliveryBox. */
    getDeliveryBox: this.requestFunctionFactory(descriptors.mailGetDeliveryBox),
    /** Delete a DeliveryBox. */
    deleteDeliveryBox: this.requestFunctionFactory(
      descriptors.mailDeleteDeliveryBox,
    ),
    /** Get a MailAddress. */
    getMailAddress: this.requestFunctionFactory(descriptors.mailGetMailAddress),
    /** Delete a MailAddress. */
    deleteMailAddress: this.requestFunctionFactory(
      descriptors.mailDeleteMailAddress,
    ),
    /** List backups belonging to a MailAddress. */
    listBackupsForMailAddress: this.requestFunctionFactory(
      descriptors.mailListBackupsForMailAddress,
    ),
    /** List mail settings of a Project. */
    listProjectMailSettings: this.requestFunctionFactory(
      descriptors.mailListProjectMailSettings,
    ),
    /** Check if a Migration between two projects is possible. */
    migrationCheckMigrationIsPossible: this.requestFunctionFactory(
      descriptors.mailMigrationCheckMigrationIsPossible,
    ),
    /** Get a Migration. */
    migrationGetMigration: this.requestFunctionFactory(
      descriptors.mailMigrationGetMigration,
    ),
    /** List Migrations belonging to a Project in customer center or mStudio. */
    migrationListMigrations: this.requestFunctionFactory(
      descriptors.mailMigrationListMigrations,
    ),
    /** Request a Mail Migration between two projects. */
    migrationRequestMailMigration: this.requestFunctionFactory(
      descriptors.mailMigrationRequestMailMigration,
    ),
    /** Recover emails for a MailAddress from a backup. */
    recoverMailAddressEmails: this.requestFunctionFactory(
      descriptors.mailRecoverMailAddressEmails,
    ),
    /** Update the description of a DeliveryBox. */
    updateDeliveryBoxDescription: this.requestFunctionFactory(
      descriptors.mailUpdateDeliveryBoxDescription,
    ),
    /** Update the password of a DeliveryBox. */
    updateDeliveryBoxPassword: this.requestFunctionFactory(
      descriptors.mailUpdateDeliveryBoxPassword,
    ),
    /** Update a MailAddress. */
    updateMailAddressAddress: this.requestFunctionFactory(
      descriptors.mailUpdateMailAddressAddress,
    ),
    /** Update the catch-all of a MailAddress. */
    updateMailAddressCatchAll: this.requestFunctionFactory(
      descriptors.mailUpdateMailAddressCatchAll,
    ),
    /** Update a mail setting of a Project. */
    updateProjectMailSetting: this.requestFunctionFactory(
      descriptors.mailUpdateProjectMailSetting,
    ),
  };

  /** The notification API allows you to manage your notifications. */
  public readonly notification = {
    /** Subscribe a user to the mStudio newsletter. */
    newsletterSubscribeUser: this.requestFunctionFactory(
      descriptors.newsletterSubscribeUser,
    ),
    /** Getting the subscription status of the subscription. */
    newsletterGetInfo: this.requestFunctionFactory(
      descriptors.newsletterGetInfo,
    ),
    /** Unsubscribe a user from the mStudio newsletter. */
    newsletterUnsubscribeUser: this.requestFunctionFactory(
      descriptors.newsletterUnsubscribeUser,
    ),
    /** Get the counts for unread notifications of the user. */
    scountUnreadNotifications: this.requestFunctionFactory(
      descriptors.notificationsCountUnreadNotifications,
    ),
    /** List all unread notifications. */
    slistNotifications: this.requestFunctionFactory(
      descriptors.notificationsListNotifications,
    ),
    /** Mark all notifications as read. */
    sreadAllNotifications: this.requestFunctionFactory(
      descriptors.notificationsReadAllNotifications,
    ),
    /** Mark notification as read. */
    sreadNotification: this.requestFunctionFactory(
      descriptors.notificationsReadNotification,
    ),
  };

  /** The user API allows you to manage your own user and access information of other users that might be visible to you. */
  public readonly user = {
    /** Update your account information. */
    updateAccount: this.requestFunctionFactory(descriptors.userUpdateAccount),
    /** Get a PasswordPolicy. */
    passwordValidationGetPasswordPolicy: this.requestFunctionFactory(
      descriptors.passwordValidationGetPasswordPolicy,
    ),
    /** Add phone number and start verification process. */
    addPhoneNumber: this.requestFunctionFactory(descriptors.userAddPhoneNumber),
    /** Remove phone number. */
    removePhoneNumber: this.requestFunctionFactory(
      descriptors.userRemovePhoneNumber,
    ),
    /** Validate your second factor. */
    authenticateMfa: this.requestFunctionFactory(
      descriptors.userAuthenticateMfa,
    ),
    /** Authenticate yourself to get an access token. */
    authenticate: this.requestFunctionFactory(descriptors.userAuthenticate),
    /** Authenticate an user with an access token retrieval key. */
    authenticateWithAccessTokenRetrievalKey: this.requestFunctionFactory(
      descriptors.userAuthenticateWithAccessTokenRetrievalKey,
    ),
    /** Get your verified Email-Address. */
    getOwnEmail: this.requestFunctionFactory(descriptors.userGetOwnEmail),
    /** Change your Email-Address. */
    changeEmail: this.requestFunctionFactory(descriptors.userChangeEmail),
    /** Change your password. */
    changePassword: this.requestFunctionFactory(descriptors.userChangePassword),
    /** Check token for validity. */
    checkToken: this.requestFunctionFactory(descriptors.userCheckToken),
    /** Get your current multi factor auth status. */
    getMfaStatus: this.requestFunctionFactory(descriptors.userGetMfaStatus),
    /** Reset RecoveryCodes for MFA. */
    resetRecoverycodes: this.requestFunctionFactory(
      descriptors.userResetRecoverycodes,
    ),
    /** Confirm Multi Factor Authentication. */
    confirmMfa: this.requestFunctionFactory(descriptors.userConfirmMfa),
    /** Disable Multi Factor Authentication. */
    disableMfa: this.requestFunctionFactory(descriptors.userDisableMfa),
    /** Confirm password reset. */
    confirmPasswordReset: this.requestFunctionFactory(
      descriptors.userConfirmPasswordReset,
    ),
    /** List all of your ApiTokens. */
    listApiTokens: this.requestFunctionFactory(descriptors.userListApiTokens),
    /** Store a new ApiToken. */
    createApiToken: this.requestFunctionFactory(descriptors.userCreateApiToken),
    /** Submit your user feedback. */
    createFeedback: this.requestFunctionFactory(descriptors.userCreateFeedback),
    /** Get your stored ssh-keys. */
    listSshKeys: this.requestFunctionFactory(descriptors.userListSshKeys),
    /** Store a new ssh-key. */
    createSshKey: this.requestFunctionFactory(descriptors.userCreateSshKey),
    /** Get a specific ApiToken. */
    getApiToken: this.requestFunctionFactory(descriptors.userGetApiToken),
    /** Update an existing `ApiToken`. */
    editApiToken: this.requestFunctionFactory(descriptors.userEditApiToken),
    /** Deletes an ApiToken. */
    deleteApiToken: this.requestFunctionFactory(descriptors.userDeleteApiToken),
    /** Get a specific stored ssh-key. */
    getSshKey: this.requestFunctionFactory(descriptors.userGetSshKey),
    /** Edit a stored ssh-key. */
    editSshKey: this.requestFunctionFactory(descriptors.userEditSshKey),
    /** Remove a ssh-key. */
    deleteSshKey: this.requestFunctionFactory(descriptors.userDeleteSshKey),
    /** Delete your account and all your personal data. */
    deleteUser: this.requestFunctionFactory(descriptors.userDeleteUser),
    /** The timestamp of your latest password change. */
    getPasswordUpdatedAt: this.requestFunctionFactory(
      descriptors.userGetPasswordUpdatedAt,
    ),
    /** Get personalized settings. */
    getPersonalizedSettings: this.requestFunctionFactory(
      descriptors.userGetPersonalizedSettings,
    ),
    /** Update personalized GUI settings. */
    updatePersonalizedSettings: this.requestFunctionFactory(
      descriptors.userUpdatePersonalizedSettings,
    ),
    /** Get poll settings for the specified user. */
    getPollStatus: this.requestFunctionFactory(descriptors.userGetPollStatus),
    /** Store new or update poll settings. */
    postPollStatus: this.requestFunctionFactory(descriptors.userPostPollStatus),
    /** Get a specific session. */
    getSession: this.requestFunctionFactory(descriptors.userGetSession),
    /** Terminate a specific Session. */
    terminateSession: this.requestFunctionFactory(
      descriptors.userTerminateSession,
    ),
    /** Get profile information for a user. */
    getUser: this.requestFunctionFactory(descriptors.userGetUser),
    /** Change personal information. */
    updatePersonalInformation: this.requestFunctionFactory(
      descriptors.userUpdatePersonalInformation,
    ),
    /** Initialize Multi Factor Authentication. If successful, it needs to be confirmed, before usage of mfa. */
    initMfa: this.requestFunctionFactory(descriptors.userInitMfa),
    /** Initialize password reset process. */
    initPasswordReset: this.requestFunctionFactory(
      descriptors.userInitPasswordReset,
    ),
    /** Submitted feedback of the given user. */
    listFeedback: this.requestFunctionFactory(descriptors.userListFeedback),
    /** List all sessions. */
    listSessions: this.requestFunctionFactory(descriptors.userListSessions),
    /** Refresh a session. */
    refreshSession: this.requestFunctionFactory(descriptors.userRefreshSession),
    /** Terminate all sessions, except the current session. */
    terminateAllSessions: this.requestFunctionFactory(
      descriptors.userTerminateAllSessions,
    ),
    /** Terminate session and invalidate access token. */
    logout: this.requestFunctionFactory(descriptors.userLogout),
    /** Obtain authorization from the resource owner. */
    oauthGetAuthorization: this.requestFunctionFactory(
      descriptors.userOauthGetAuthorization,
    ),
    /** Retrieve Access Token from Authorization Code. */
    oauthRetrieveAccessToken: this.requestFunctionFactory(
      descriptors.userOauthRetrieveAccessToken,
    ),
    /** Register with email and password. */
    register: this.requestFunctionFactory(descriptors.userRegister),
    /** Request a new avatar image upload. */
    requestAvatarUpload: this.requestFunctionFactory(
      descriptors.userRequestAvatarUpload,
    ),
    /** Remove Avatar. */
    removeAvatar: this.requestFunctionFactory(descriptors.userRemoveAvatar),
    /** Resend the Email-Address verification email. */
    resendVerificationEmail: this.requestFunctionFactory(
      descriptors.userResendVerificationEmail,
    ),
    /** Request a support code. */
    supportCodeRequest: this.requestFunctionFactory(
      descriptors.userSupportCodeRequest,
    ),
    /** Verify an added Email-Address. */
    verifyEmail: this.requestFunctionFactory(descriptors.userVerifyEmail),
    /** Verify phone number. */
    verifyPhoneNumber: this.requestFunctionFactory(
      descriptors.userVerifyPhoneNumber,
    ),
    /** Verify your registration. */
    verifyRegistration: this.requestFunctionFactory(
      descriptors.userVerifyRegistration,
    ),
  };

  /** The file API allows you to manage your files, for example for conversations attachments and avatar uploads. */
  public readonly file = {
    /** Create a File. */
    createFile: this.requestFunctionFactory(descriptors.fileCreateFile),
    /** Get a File's meta. */
    getFileMeta: this.requestFunctionFactory(descriptors.fileGetFileMeta),
    /** Get a FileUploadToken's rules. */
    getFileUploadTokenRules: this.requestFunctionFactory(
      descriptors.fileGetFileUploadTokenRules,
    ),
    /** Get a FileUploadType's rules. */
    getFileUploadTypeRules: this.requestFunctionFactory(
      descriptors.fileGetFileUploadTypeRules,
    ),
    /** Get a File. */
    getFile: this.requestFunctionFactory(descriptors.fileGetFile),
    /** Get a File with user-friendly url. */
    getFileWithName: this.requestFunctionFactory(
      descriptors.fileGetFileWithName,
    ),
  };

  /** The lead fyndr api allow you to manage you leads and your fyndr profile. */
  public readonly leadFyndr = {
    /** Get your LeadFyndr request. */
    leadfyndrGetLeadFyndrProfileRequest: this.requestFunctionFactory(
      descriptors.leadfyndrGetLeadFyndrProfileRequest,
    ),
    /** Create a new access request for LeadFyndr. */
    leadfyndrCreateLeadFyndrAccessRequest: this.requestFunctionFactory(
      descriptors.leadfyndrCreateLeadFyndrAccessRequest,
    ),
    /** Get cities in DACH. */
    leadfyndrGetCities: this.requestFunctionFactory(
      descriptors.leadfyndrGetCities,
    ),
    /** Get lead tariff options. How many leads did you unlock this month? */
    leadfyndrGetLeadFyndrProfileTariffOptions: this.requestFunctionFactory(
      descriptors.leadfyndrGetLeadFyndrProfileTariffOptions,
    ),
    /** Get your LeadFyndr profile. */
    leadfyndrGetLeadFyndrProfile: this.requestFunctionFactory(
      descriptors.leadfyndrGetLeadFyndrProfile,
    ),
    /** Get a simple lead. Use the unlocked route for more detail leads. */
    leadfyndrGetLead: this.requestFunctionFactory(descriptors.leadfyndrGetLead),
    /** Get a detail of a unlocked lead. Organisation can unlock leads. */
    leadfyndrGetUnlockedLead: this.requestFunctionFactory(
      descriptors.leadfyndrGetUnlockedLead,
    ),
    /** Unlock a lead for the given customerId. */
    leadfyndrUnlockLead: this.requestFunctionFactory(
      descriptors.leadfyndrUnlockLead,
    ),
    /** Get all leads. Use the unlocked routes for more lead details. */
    leadfyndrListLeads: this.requestFunctionFactory(
      descriptors.leadfyndrListLeads,
    ),
    /** Get all unlocked leads. Organisation can unlock leads. */
    leadfyndrListUnlockedLeads: this.requestFunctionFactory(
      descriptors.leadfyndrListUnlockedLeads,
    ),
    /** Reserve a unlocked lead for the given customerId. */
    leadfyndrReserveUnlockedLead: this.requestFunctionFactory(
      descriptors.leadfyndrReserveUnlockedLead,
    ),
    /** Removes a reservation on a unlocked lead for the given customerId. */
    leadfyndrRemoveUnlockedLeadReservation: this.requestFunctionFactory(
      descriptors.leadfyndrRemoveUnlockedLeadReservation,
    ),
  };

  /** API endpoints that are not related to any specific API domain */
  public readonly misc = {
    /** Get a list of currently active llm models. */
    getLlmModelsExperimental: this.requestFunctionFactory(
      descriptors.miscGetLlmModelsExperimental,
    ),
    /** Check if an email is from mittwald. */
    verificationDetectPhishingEmail: this.requestFunctionFactory(
      descriptors.verificationDetectPhishingEmail,
    ),
    /** Check if an address exists. */
    verificationVerifyAddress: this.requestFunctionFactory(
      descriptors.verificationVerifyAddress,
    ),
    /** Check if a company exists. */
    verificationVerifyCompany: this.requestFunctionFactory(
      descriptors.verificationVerifyCompany,
    ),
  };

  /** The page insights API allows you to get page insights information. */
  public readonly pageInsights = {
    /** Get detailed performance data for a given domain and path. */
    pageinsightsGetPerformanceData: this.requestFunctionFactory(
      descriptors.pageinsightsGetPerformanceData,
    ),
    /** Get all data for a given strace. */
    pageinsightsGetStraceData: this.requestFunctionFactory(
      descriptors.pageinsightsGetStraceData,
    ),
    /** List websites (specified as domain and path) from a project where performance data is available. */
    pageinsightsListPerformanceDataForProject: this.requestFunctionFactory(
      descriptors.pageinsightsListPerformanceDataForProject,
    ),
    /** Schedule a strace measurement for a single http request. */
    pageinsightsScheduleStrace: this.requestFunctionFactory(
      descriptors.pageinsightsScheduleStrace,
    ),
  };

  /** The project API allows you to manage your projects, and also any kinds of user memberships concerning these projects. */
  public readonly project = {
    /** Accept a ProjectInvite. */
    acceptProjectInvite: this.requestFunctionFactory(
      descriptors.projectAcceptProjectInvite,
    ),
    /** Get a list of already created llm licences. */
    getLlmLicencesExperimental: this.requestFunctionFactory(
      descriptors.projectGetLlmLicencesExperimental,
    ),
    /** Creates a new llm beta Licence for a project. Will be purged on end of beta. */
    createLlmBetaLicenceExperimental: this.requestFunctionFactory(
      descriptors.projectCreateLlmBetaLicenceExperimental,
    ),
    /** List Invites belonging to a Project. */
    listInvitesForProject: this.requestFunctionFactory(
      descriptors.projectListInvitesForProject,
    ),
    /** Create a ProjectInvite. */
    createProjectInvite: this.requestFunctionFactory(
      descriptors.projectCreateProjectInvite,
    ),
    /** Create a Project belonging to a Server. */
    createProject: this.requestFunctionFactory(
      descriptors.projectCreateProject,
    ),
    /** Decline a ProjectInvite. */
    declineProjectInvite: this.requestFunctionFactory(
      descriptors.projectDeclineProjectInvite,
    ),
    /** Request a Project avatar upload. */
    requestProjectAvatarUpload: this.requestFunctionFactory(
      descriptors.projectRequestProjectAvatarUpload,
    ),
    /** Delete a Project's avatar. */
    deleteProjectAvatar: this.requestFunctionFactory(
      descriptors.projectDeleteProjectAvatar,
    ),
    /** Get a ProjectInvite. */
    getProjectInvite: this.requestFunctionFactory(
      descriptors.projectGetProjectInvite,
    ),
    /** Delete a ProjectInvite. */
    deleteProjectInvite: this.requestFunctionFactory(
      descriptors.projectDeleteProjectInvite,
    ),
    /** Get a ProjectMembership */
    getProjectMembership: this.requestFunctionFactory(
      descriptors.projectGetProjectMembership,
    ),
    /** Delete a ProjectMembership. */
    deleteProjectMembership: this.requestFunctionFactory(
      descriptors.projectDeleteProjectMembership,
    ),
    /** Update a ProjectMembership. */
    updateProjectMembership: this.requestFunctionFactory(
      descriptors.projectUpdateProjectMembership,
    ),
    /** Get a Project. */
    getProject: this.requestFunctionFactory(descriptors.projectGetProject),
    /** Delete a Project. */
    deleteProject: this.requestFunctionFactory(
      descriptors.projectDeleteProject,
    ),
    /** Request a Server avatar upload. */
    requestServerAvatarUpload: this.requestFunctionFactory(
      descriptors.projectRequestServerAvatarUpload,
    ),
    /** Delete a Server's avatar. */
    deleteServerAvatar: this.requestFunctionFactory(
      descriptors.projectDeleteServerAvatar,
    ),
    /** Get a licence of a project. */
    getLlmLicenceExperimental: this.requestFunctionFactory(
      descriptors.projectGetLlmLicenceExperimental,
    ),
    /** Update a llm Licence for a project. */
    updateLlmLicenceExperimental: this.requestFunctionFactory(
      descriptors.projectUpdateLlmLicenceExperimental,
    ),
    /** Get a ProjectInvite by token. */
    getProjectTokenInvite: this.requestFunctionFactory(
      descriptors.projectGetProjectTokenInvite,
    ),
    /** Get the executing user's membership in a Project. */
    getSelfMembershipForProject: this.requestFunctionFactory(
      descriptors.projectGetSelfMembershipForProject,
    ),
    /** Get a Server. */
    getServer: this.requestFunctionFactory(descriptors.projectGetServer),
    /** List Memberships belonging to a Project. */
    listMembershipsForProject: this.requestFunctionFactory(
      descriptors.projectListMembershipsForProject,
    ),
    /** List ProjectInvites belonging to the executing user. */
    listProjectInvites: this.requestFunctionFactory(
      descriptors.projectListProjectInvites,
    ),
    /** List ProjectMemberships belonging to the executing user. */
    listProjectMemberships: this.requestFunctionFactory(
      descriptors.projectListProjectMemberships,
    ),
    /** List Projects belonging to the executing user. */
    listProjects: this.requestFunctionFactory(descriptors.projectListProjects),
    /** List Servers belonging to the executing user. */
    listServers: this.requestFunctionFactory(descriptors.projectListServers),
    /** Resend the mail for a ProjectInvite. */
    resendProjectInviteMail: this.requestFunctionFactory(
      descriptors.projectResendProjectInviteMail,
    ),
    /** Update a Project's description. */
    updateProjectDescription: this.requestFunctionFactory(
      descriptors.projectUpdateProjectDescription,
    ),
    /** Update a Servers's description. */
    updateServerDescription: this.requestFunctionFactory(
      descriptors.projectUpdateServerDescription,
    ),
    /** Get storage space Statistics belonging to a Project. */
    storagespaceGetProjectStatistics: this.requestFunctionFactory(
      descriptors.storagespaceGetProjectStatistics,
    ),
    /** Get storage space Statistics belonging to a Server. */
    storagespaceGetServerStatistics: this.requestFunctionFactory(
      descriptors.storagespaceGetServerStatistics,
    ),
    /** Update a Project's storage space notification threshold. */
    storagespaceReplaceProjectNotificationThreshold:
      this.requestFunctionFactory(
        descriptors.storagespaceReplaceProjectNotificationThreshold,
      ),
    /** Update a Server's storage space notification threshold. */
    storagespaceReplaceServerNotificationThreshold: this.requestFunctionFactory(
      descriptors.storagespaceReplaceServerNotificationThreshold,
    ),
  };

  /** The filesystem API allows you to directly access the filesystem of your project. */
  public readonly projectFileSystem = {
    /** List directories belonging to a Project. */
    getDirectories: this.requestFunctionFactory(
      descriptors.projectFileSystemGetDirectories,
    ),
    /** Get a Project directory filesystem usage. */
    getDiskUsage: this.requestFunctionFactory(
      descriptors.projectFileSystemGetDiskUsage,
    ),
    /** Get a Project file's content. */
    getFileContent: this.requestFunctionFactory(
      descriptors.projectFileSystemGetFileContent,
    ),
    /** Get a Project's file/filesystem authorization token. */
    getJwt: this.requestFunctionFactory(descriptors.projectFileSystemGetJwt),
    /** Get a Project file's information. */
    listFiles: this.requestFunctionFactory(
      descriptors.projectFileSystemListFiles,
    ),
  };

  /** The relocation API allows you to manage your relocations. */
  public readonly relocation = {
    /** Register a tariff change for a legacy tariff. */
    createLegacyTariffChange: this.requestFunctionFactory(
      descriptors.relocationCreateLegacyTariffChange,
    ),
    /** Relocate an external Project to mittwald. */
    createRelocation: this.requestFunctionFactory(
      descriptors.relocationCreateRelocation,
    ),
  };

  /** The SSH/SFTP User API allows you to manage your SSH/SFTP users within a project. */
  public readonly sshsftpUser = {
    /** Get all SFTPUsers for a Project. */
    sftpUserListSftpUsers: this.requestFunctionFactory(
      descriptors.sftpUserListSftpUsers,
    ),
    /** Create an SFTPUser for a Project. */
    sftpUserCreateSftpUser: this.requestFunctionFactory(
      descriptors.sftpUserCreateSftpUser,
    ),
    /** Get an SFTPUser. */
    sftpUserGetSftpUser: this.requestFunctionFactory(
      descriptors.sftpUserGetSftpUser,
    ),
    /** Delete an SFTPUser. */
    sftpUserDeleteSftpUser: this.requestFunctionFactory(
      descriptors.sftpUserDeleteSftpUser,
    ),
    /** Update an SFTPUser. */
    sftpUserUpdateSftpUser: this.requestFunctionFactory(
      descriptors.sftpUserUpdateSftpUser,
    ),
    /** Get all SSHUsers for a Project. */
    sshUserListSshUsers: this.requestFunctionFactory(
      descriptors.sshUserListSshUsers,
    ),
    /** Create an SSHUser for a Project. */
    sshUserCreateSshUser: this.requestFunctionFactory(
      descriptors.sshUserCreateSshUser,
    ),
    /** Get an SSHUser. */
    sshUserGetSshUser: this.requestFunctionFactory(
      descriptors.sshUserGetSshUser,
    ),
    /** Delete an SSHUser. */
    sshUserDeleteSshUser: this.requestFunctionFactory(
      descriptors.sshUserDeleteSshUser,
    ),
    /** Update an SSHUser. */
    sshUserUpdateSshUser: this.requestFunctionFactory(
      descriptors.sshUserUpdateSshUser,
    ),
  };
}

export default MittwaldAPIV2Client;
