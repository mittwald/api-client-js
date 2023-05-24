/* eslint-disable */
/* prettier-ignore */
/* This file is auto-generated with acg (@mittwald/api-code-generator) */
declare namespace MittwaldAPIV2 {
  namespace Components {
    namespace Schemas {
      /**
       * An `Action` is a string that describes a runtime concerning action which can be executed on an `AppInstallation` or an `App` can be capable of
       */
      export type DeMittwaldV1AppAction = "start" | "stop" | "restart";

      /**
       * `ActionCapabilities` is an array that contains supported actions of an `App`
       */
      export type DeMittwaldV1AppActionCapabilities =
        MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppAction[];

      /**
       * An `App` is to be understood as a manifest for `AppInstallations`. E.g. "WordPress" only exists inside our ecosystem, because there is an `App`-Manifest for it
       */
      export interface DeMittwaldV1AppApp {
        actionCapabilities?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppActionCapabilities;
        id: string;
        name: string;
        tags: string[];
      }

      /**
       * `AppInstallationStatus` describes the overall runtime status of an `AppInstallation`
       */
      export interface DeMittwaldV1AppAppInstallationStatus {
        lastExitCode?: number;
        logFileLocation: string;
        state: "running" | "stopped" | "exited";
        uptimeSeconds?: number;
      }

      /**
       * `AppUpdatePolicy` describes which updates should be applied automatically by our systems
       */
      export type DeMittwaldV1AppAppUpdatePolicy =
        | "none"
        | "patchLevel"
        | "all";

      /**
       * An `AppInstallation` is a concrete manifestation of an `App` in a specific `AppVersion`.
       */
      export interface DeMittwaldV1AppAppInstallation {
        appId: string;
        appVersion: MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppVersionStatus;
        customDocumentRoot?: string;
        description: string;
        disabled: boolean;
        id: string;
        installationPath: string;
        linkedDatabases?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppLinkedDatabase[];
        processes?: string[];
        projectId?: string;
        screenshotId?: string;
        screenshotRef?: string;
        systemSoftware?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppInstalledSystemSoftware[];
        updatePolicy?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppAppUpdatePolicy;
        userInputs?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppSavedUserInput[];
      }

      /**
       * The `AppInstallationLifecycle` can be used to express a specific point in the `AppInstallation` Lifecycle, e.g. while installing a new `AppInstallation`
       */
      export type DeMittwaldV1AppAppInstallationLifecycle =
        | "installation"
        | "update"
        | "reconfigure";

      /**
       * An `AppVersion` is an officially supported version of an `App`, containing the necessary and recommended configuration und dependencies
       */
      export interface DeMittwaldV1AppAppVersion {
        breakingNote?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppBreakingNote;
        databases?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppDatabaseDependency[];
        docRoot: string;
        docRootUserEditable: boolean;
        externalVersion: string;
        id: string;
        internalVersion: string;
        recommended?: boolean;
        requestHandler?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppRequestHandlerRequirement;
        systemSoftwareDependencies?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppSystemSoftwareDependency[];
        userInputs?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppUserInput[];
      }

      export interface DeMittwaldV1AppBreakingNote {
        faqLink: string;
      }

      export interface DeMittwaldV1AppDatabaseDependency {
        description: string;
        kind: "mysql";
        parameters?: {
          [k: string]: string;
        };
        version: string;
      }

      export interface DeMittwaldV1AppError {
        message: string;
        type: string;
      }

      export interface DeMittwaldV1AppInstalledSystemSoftware {
        systemSoftwareId: string;
        systemSoftwareVersion: MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppVersionStatus;
        updatePolicy: MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppSystemSoftwareUpdatePolicy;
      }

      export interface DeMittwaldV1AppLinkedDatabase {
        databaseId: string;
        databaseUserIds?: {
          [k: string]: string;
        };
        kind: "mysql" | "redis";
        purpose: "primary" | "cache" | "custom";
      }

      export interface DeMittwaldV1AppRequestHandlerRequirement {
        exampleValues?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppSavedUserInput[];
        name: string;
        namespace: string;
        parametersTemplate: string;
      }

      export interface DeMittwaldV1AppSavedUserInput {
        name: string;
        value: string;
      }

      export interface DeMittwaldV1AppSystemSoftwareDependency {
        systemSoftwareId: string;
        versionRange: string;
      }

      export type DeMittwaldV1AppSystemSoftwareUpdatePolicy =
        | "none"
        | "inheritedFromApp"
        | "patchLevel"
        | "all";

      export interface DeMittwaldV1AppSystemSoftware {
        id: string;
        name: string;
        tags: string[];
      }

      /**
       * A `SystemSoftwareVersion` is an officially  supported version of a `SystemSoftware`, containing the necessary and recommended configuration und dependencies
       */
      export interface DeMittwaldV1AppSystemSoftwareVersion {
        externalVersion: string;
        id: string;
        internalVersion: string;
        recommended?: boolean;
        systemSoftwareDependencies?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppSystemSoftwareDependency[];
        userInputs?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppUserInput[];
      }

      export interface DeMittwaldV1AppUserInput {
        /**
         * Optional field to tell the frontend, which data to put into the select
         */
        dataSource?: string;
        dataType: MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppUserInputDataType;
        defaultValue?: string;
        format?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppUserInputFormat;
        lifecycleConstraint: MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppAppInstallationLifecycle;
        name: string;
        positionMeta?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppUserInputPositionMeta;
        required: boolean;
        /**
         * JSON Schema formatted (https://json-schema.org/)
         */
        validationSchema: string;
      }

      export type DeMittwaldV1AppUserInputDataType =
        | "text"
        | "number"
        | "boolean"
        | "select";

      export type DeMittwaldV1AppUserInputFormat = "email" | "password" | "url";

      export interface DeMittwaldV1AppUserInputPositionMeta {
        index?: number;
        section?: string;
        step?: string;
      }

      export interface DeMittwaldV1AppVersionStatus {
        current?: string;
        desired: string;
      }

      export interface DeMittwaldV1ArticleArticleAddons {
        hidden?: boolean;
        key: string;
        type?: string;
        value: string;
        valueMergeType?: "add" | "set";
      }

      export interface DeMittwaldV1ArticleArticleAttributes {
        customerEditable?: boolean;
        key: string;
        mergeType?: "add" | "set";
        readonly?: boolean;
        required?: boolean;
        unit?: string;
        value: string;
      }

      export interface DeMittwaldV1ArticleReadableBookableArticleOptions {
        articleId: string;
        info?: {
          articleName?: string;
          articleTemplateName?: string;
          fromArticleTemplate?: boolean;
        };
        maxArticleCount?: number;
      }

      export interface DeMittwaldV1ArticleReadableChangeArticleOptions {
        articleId: string;
        info?: {
          articleName?: string;
          articleTemplateName?: string;
          fromArticleTemplate?: boolean;
        };
      }

      export interface DeMittwaldV1ArticleReadableModifierArticleOptions {
        articleId: string;
        info?: {
          articleName?: string;
          articleTemplateName?: string;
          fromArticleTemplate?: boolean;
        };
        maxArticleCount: number;
      }

      export interface DeMittwaldV1ArticleArticleTag {
        description: string;
        hexColor: string;
        id: string;
        name: string;
      }

      export interface DeMittwaldV1ArticleArticleTemplate {
        additionalArticles?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ArticleReadableBookableArticleOptions[];
        addons?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ArticleArticleAddons[];
        attributes?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ArticleArticleAttributes[];
        description?: string;
        id?: string;
        isManagedByDomain: boolean;
        isRecurring: boolean;
        modifierArticles?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ArticleReadableModifierArticleOptions[];
        name: string;
        type:
          | "miscellaneous"
          | "base"
          | "additional"
          | "modifier"
          | "setup_fee";
      }

      export interface DeMittwaldV1ArticleReadableArticle {
        additionalArticles?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ArticleReadableBookableArticleOptions[];
        addons?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ArticleArticleAddons[];
        articleId: string;
        attributes?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ArticleArticleAttributes[];
        balanceAddonKey?: string;
        contractDurationInMonth: number;
        description: string;
        hasIndependentContractPeriod?: boolean;
        hideOnInvoice?: boolean;
        machineType?: {
          cpu: string;
          memory: string;
          name: string;
        };
        modifierArticles?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ArticleReadableModifierArticleOptions[];
        name: string;
        orderable:
          | "forbidden"
          | "internal"
          | "beta_testing"
          | "full"
          | "deprecated";
        picture?: string;
        possibleArticleChanges?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ArticleReadableChangeArticleOptions[];
        price?: number;
        tags?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ArticleArticleTag[];
        template: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ArticleArticleTemplate;
      }

      export interface DeMittwaldV1BackupBackupTemplate {
        expirationTime: string;
        ignoredSources?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1BackupIgnoredSources;
      }

      export interface DeMittwaldV1BackupDatabaseReference {
        kind: string;
        name: string;
      }

      export interface DeMittwaldV1BackupIgnoredSources {
        databases?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1BackupDatabaseReference[];
        files: boolean;
      }

      export interface DeMittwaldV1BackupProjectBackup {
        createdAt?: string;
        deletable: boolean;
        description?: string;
        expiresAt?: string;
        export?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1BackupProjectBackupExport;
        id: string;
        parentId?: string;
        projectId: string;
        status: string;
      }

      export interface DeMittwaldV1BackupProjectBackupExport {
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
        withPassword: boolean;
      }

      export interface DeMittwaldV1BackupProjectBackupSchedule {
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

      export interface DeMittwaldV1ContractAggregateReference {
        aggregate: string;
        domain: string;
        id: string;
      }

      export interface DeMittwaldV1ContractArticle {
        amount: number;
        articleTemplateId: string;
        description: string;
        id: string;
        name: string;
        unitPrice: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ContractPrice;
      }

      export interface DeMittwaldV1ContractContact {
        address: MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonsAddress;
        company?: string;
        emailAddress?: string;
        firstName?: string;
        lastName?: string;
        phoneNumbers?: string[];
        salutation: MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonsSalutation;
        title?: string;
        useFormalTerm?: boolean;
      }

      export interface DeMittwaldV1ContractContractItem {
        activationDate?: string;
        aggregateReference?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ContractAggregateReference;
        articles: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ContractArticle[];
        contractPeriod: number;
        description: string;
        groupByProjectId?: string;
        invoicingPeriod: number;
        isActivated: boolean;
        isBaseItem: boolean;
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
        orderDate: string;
        replacedByItem?: string;
        tariffChange?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ContractTariffChange;
        termination?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ContractTermination;
        totalPrice: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ContractPrice;
      }

      export interface DeMittwaldV1ContractContract {
        additionalItems?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ContractContractItem[];
        baseItem: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ContractContractItem;
        contractId: string;
        contractNumber: string;
        customerId: string;
        isInvoicingDeactivated?: boolean;
        isInvoicingPaused?: boolean;
        owner: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ContractContact;
        termination?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ContractTermination;
      }

      export interface DeMittwaldV1ContractError {
        message: string;
        type: string;
      }

      export interface DeMittwaldV1ContractPrice {
        currency: "EUR";
        value: number;
      }

      export interface DeMittwaldV1ContractTariffChange {
        /**
         * This is only set if the tariff change has already been carried out.
         */
        executedAtDate?: string;
        newArticles: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ContractArticle[];
        scheduledAtDate: string;
        scheduledByUserId?: string;
        targetDate: string;
      }

      export interface DeMittwaldV1ContractTermination {
        reason?: string;
        scheduledAtDate: string;
        scheduledByUserId?: string;
        targetDate: string;
      }

      export interface DeMittwaldV1ConversationAggregateReference {
        aggregate: string;
        domain: string;
        id: string;
      }

      export interface DeMittwaldV1ConversationCategory {
        categoryId: string;
        name: string;
        parentId?: string;
        subCategories?: {
          categoryId: string;
          name: string;
          parentId: string;
        }[];
      }

      export interface DeMittwaldV1ConversationConversation {
        category?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ConversationCategory;
        conversationId: string;
        createdAt: string;
        createdBy?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ConversationUser;
        lastMessageAt?: string;
        lastMessageBy?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ConversationUser;
        relatedTo?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ConversationAggregateReference;
        relations?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ConversationAggregateReference[];
        sharedWith?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ConversationAggregateReference;
        shortId: string;
        status: "open" | "closed" | "answered";
        title: string;
      }

      export interface DeMittwaldV1ConversationGetConversationIdResponse {
        conversationId: string;
        shortId: string;
      }

      export type DeMittwaldV1ConversationDepartment =
        | "development"
        | "mail"
        | "infra"
        | "marketing"
        | "network"
        | "dataCenter"
        | "accounting"
        | "customerService"
        | "cloudHosting"
        | "software"
        | "generic"
        | "security";

      export interface DeMittwaldV1ConversationError {
        message: string;
        type: string;
      }

      export interface DeMittwaldV1ConversationRequestedFile {
        id: string;
        status: "requested";
      }

      export type DeMittwaldV1ConversationFile =
        | MittwaldAPIV2.Components.Schemas.DeMittwaldV1ConversationRequestedFile
        | MittwaldAPIV2.Components.Schemas.DeMittwaldV1ConversationUploadedFile;

      export interface DeMittwaldV1ConversationUploadedFile {
        id: string;
        name: string;
        status: "uploaded";
        type: string;
      }

      export interface DeMittwaldV1ConversationMessageHistoryItem {
        content: string;
        updatedAt: string;
        updatedBy?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ConversationUser;
      }

      export interface DeMittwaldV1ConversationMessage {
        conversationId: string;
        createdAt: string;
        createdBy?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ConversationUser;
        files?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ConversationFile[];
        history: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ConversationMessageHistoryItem[];
        internal?: boolean;
        messageContent?: string;
        messageId: string;
        type: "MESSAGE";
      }

      export interface DeMittwaldV1ConversationStatusUpdate {
        conversationId: string;
        createdAt: string;
        internal?: boolean;
        messageContent: string;
        meta?: {
          user?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ConversationUser;
        };
        type: "STATUS_UPDATE";
      }

      export interface DeMittwaldV1ConversationUser {
        avatarRefId?: string;
        clearName?: string;
        department?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ConversationDepartment;
        userId: string;
      }

      export interface DeMittwaldV1CronjobCronjobCommand {
        interpreter: string;
        parameters?: string;
        path: string;
      }

      export interface DeMittwaldV1CronjobCronjob {
        active: boolean;
        appId: string;
        createdAt: string;
        description: string;
        destination:
          | MittwaldAPIV2.Components.Schemas.DeMittwaldV1CronjobCronjobUrl
          | MittwaldAPIV2.Components.Schemas.DeMittwaldV1CronjobCronjobCommand;
        email?: string;
        id: string;
        interval: string;
        latestExecution?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1CronjobCronjobExecution;
        nextExecutionTime?: string;
        projectId?: string;
        shortId: string;
        updatedAt: string;
      }

      export interface DeMittwaldV1CronjobCronjobExecution {
        abortedBy?: {
          id?: string;
        };
        durationInMilliseconds: number;
        executionEnd?: string;
        executionStart?: string;
        id: string;
        logPath: string;
        status:
          | "Complete"
          | "Failed"
          | "AbortedBySystem"
          | "Pending"
          | "Running"
          | "AbortedByUser";
        successful: boolean;
        triggeredBy?: {
          id?: string;
        };
      }

      export interface DeMittwaldV1CronjobCronjobRequest {
        active: boolean;
        appId: string;
        description: string;
        destination:
          | MittwaldAPIV2.Components.Schemas.DeMittwaldV1CronjobCronjobUrl
          | MittwaldAPIV2.Components.Schemas.DeMittwaldV1CronjobCronjobCommand;
        email?: string;
        interval: string;
      }

      export interface DeMittwaldV1CronjobCronjobSpecific {
        active: boolean;
        appId: string;
        createdAt: string;
        description: string;
        destination:
          | MittwaldAPIV2.Components.Schemas.DeMittwaldV1CronjobCronjobUrl
          | MittwaldAPIV2.Components.Schemas.DeMittwaldV1CronjobCronjobCommand;
        email?: string;
        executions?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1CronjobCronjobExecution[];
        id: string;
        interval: string;
        nextExecutionTime?: string;
        shortId: string;
        updatedAt: string;
      }

      export interface DeMittwaldV1CronjobCronjobUrl {
        url: string;
      }

      export interface DeMittwaldV1CustomerCategory {
        id: string;
        isPublic: boolean;
        name: string;
        useAgencyDomainPrices: boolean;
        useAgencySslPrices: boolean;
      }

      export interface DeMittwaldV1CustomerContact {
        address: MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonsAddress;
        company?: string;
        emailAddress?: string;
        firstName?: string;
        lastName?: string;
        phoneNumbers?: string[];
        salutation: MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonsSalutation;
        title?: string;
        useFormalTerm?: boolean;
      }

      export interface DeMittwaldV1CustomerCustomerMeta {
        avatarRefId?: string;
        customerId: string;
        name: string;
      }

      /**
       * the role within a customer
       */
      export type DeMittwaldV1CustomerRole = "owner" | "member" | "accountant";

      export interface DeMittwaldV1CustomerCustomer {
        avatarRefId?: string;
        categoryId?: string;
        creationDate: string;
        customerId: string;
        customerNumber: string;
        executingUserRoles?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1CustomerRole[];
        memberCount: number;
        name: string;
        owner?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1CustomerContact;
        projectCount: number;
        vatId?: string;
        vatIdValidationState?: "valid" | "invalid" | "pending" | "unspecified";
      }

      export interface DeMittwaldV1CustomerNote {
        author: string;
        creationDate: string;
        id: string;
        isImportant: boolean;
        message: string;
        subject: string;
      }

      export interface DeMittwaldV1DatabaseMySqlCharacterSettings {
        collations: string[];
        name: string;
        versionId: string;
      }

      export interface DeMittwaldV1DatabaseCharacterSettings {
        characterSet: string;
        collation: string;
      }

      export interface DeMittwaldV1DatabaseMySqlDatabase {
        characterSettings?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DatabaseCharacterSettings;
        createdAt?: string;
        description?: string;
        finalizers?: string[];
        hostname?: string;
        id: string;
        isReady: boolean;
        isShared: boolean;
        name?: string;
        projectId: string;
        size?: number;
        updatedAt?: string;
        version: string;
      }

      export interface DeMittwaldV1DatabasePhpMyAdminURL {
        url: string;
      }

      export interface DeMittwaldV1DatabaseMySqlUser {
        accessIpMask?: string;
        accessLevel: "full" | "readonly";
        createdAt?: string;
        databaseId: string;
        description?: string;
        disabled?: boolean;
        externalAccess?: boolean;
        id: string;
        mainUser?: boolean;
        name?: string;
        password: string;
        passwordUpdatedAt?: string;
        updatedAt?: string;
      }

      export interface DeMittwaldV1DatabaseMySqlVersion {
        disabled: boolean;
        id: string;
        name: string;
        number: string;
      }

      /**
       * The configuration for a RedisDatabase.
       */
      export interface DeMittwaldV1DatabaseRedisDatabaseConfiguration {
        /**
         * Additional flags passed to the database.
         */
        additionalFlags?: string[];
        /**
         * The database's maximum memory.
         */
        maxMemory?: string;
        /**
         * The database's key eviction policy.
         */
        maxMemoryPolicy?: string;
      }

      export interface DeMittwaldV1DatabaseRedisDatabase {
        configuration?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DatabaseRedisDatabaseConfiguration;
        createdAt: string;
        description: string;
        finalizers: string[];
        hostname: string;
        id: string;
        name: string;
        port: number;
        projectId: string;
        updatedAt: string;
        version: string;
      }

      export interface DeMittwaldV1DatabaseRedisVersion {
        disabled: boolean;
        id: string;
        name: string;
        number: string;
      }

      export type DeMittwaldV1MembershipCustomerInviteList =
        MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerInvite[];

      export type DeMittwaldV1MembershipCustomerMembershipList =
        MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerMembership[];

      export type DeMittwaldV1MembershipEntityTypes = "project" | "customer";

      export type DeMittwaldV1MembershipIdentifierTypes = "id" | "token";

      export type DeMittwaldV1MembershipProjectInviteList =
        MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectInvite[];

      export type DeMittwaldV1MembershipProjectMembershipList =
        MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectMembership[];

      export type DeMittwaldV1DnsRecordCNAME =
        | MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordUnset
        | MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordCNAMEComponent;

      export interface DeMittwaldV1DnsRecordCNAMEComponent {
        fqdn: string;
        settings: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordSettings;
      }

      export type DeMittwaldV1DnsRecordCombinedA =
        | MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordUnset
        | MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsCombinedACustom
        | MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsCombinedAManaged;

      export type DeMittwaldV1DnsCombinedAManagedAAAARecord = string;

      export type DeMittwaldV1DnsCombinedAManagedARecord = string;

      export interface DeMittwaldV1DnsCombinedACustom {
        /**
         * @maxItems 6
         */
        a: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsCombinedAManagedARecord[];
        /**
         * @maxItems 6
         */
        aaaa: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsCombinedAManagedAAAARecord[];
        settings: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordSettings;
      }

      export interface DeMittwaldV1DnsCombinedAManaged {
        managedBy?: {
          ingressId: string;
        };
      }

      export type DeMittwaldV1DnsRecordMX =
        | MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordUnset
        | MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordMXManaged
        | MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordMXCustom;

      export interface DeMittwaldV1DnsRecordMXCustom {
        /**
         * @minItems 1
         * @maxItems 5
         */
        records:
          | [MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordMXRecord]
          | [
              MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordMXRecord,
              MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordMXRecord
            ]
          | [
              MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordMXRecord,
              MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordMXRecord,
              MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordMXRecord
            ]
          | [
              MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordMXRecord,
              MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordMXRecord,
              MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordMXRecord,
              MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordMXRecord
            ]
          | [
              MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordMXRecord,
              MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordMXRecord,
              MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordMXRecord,
              MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordMXRecord,
              MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordMXRecord
            ];
        settings: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordSettings;
      }

      export interface DeMittwaldV1DnsRecordMXManaged {
        managed: boolean;
      }

      export interface DeMittwaldV1DnsRecordMXRecord {
        fqdn: string;
        priority: number;
      }

      export interface DeMittwaldV1DnsRecordSettings {
        ttl?:
          | MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsTtlSeconds
          | MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsTtlAuto;
      }

      export type DeMittwaldV1DnsRecordTXT =
        | MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordUnset
        | MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordTXTComponent;

      export interface DeMittwaldV1DnsRecordTXTComponent {
        /**
         * @maxItems 20
         */
        entries: string[];
        settings: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordSettings;
      }

      export interface DeMittwaldV1DnsRecordUnset {}

      export interface DeMittwaldV1DnsTtlAuto {
        /**
         * this will always be true
         */
        auto: boolean;
      }

      export interface DeMittwaldV1DnsTtlSeconds {
        seconds: number;
      }

      export interface DeMittwaldV1DnsZone {
        domain: string;
        id: string;
        recordSet: {
          cname: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordCNAME;
          combinedARecords: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordCombinedA;
          mx: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordMX;
          txt: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsRecordTXT;
        };
      }

      export interface DeMittwaldV1DomainAuthCode {
        expires?: string;
        value: string;
      }

      export interface DeMittwaldV1DomainAuthCode2 {
        expires: string;
      }

      export interface DeMittwaldV1DomainCreateDomainHandleData {
        adminC?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DomainHandleField[];
        ownerC: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DomainHandleField[];
      }

      export interface DeMittwaldV1DomainDomainOwnership {
        domain: string;
        id: string;
        projectId: string;
        txtRecord: string;
      }

      export interface DeMittwaldV1DomainDomain {
        authCode?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DomainAuthCode;
        authCode2?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DomainAuthCode2;
        connected: boolean;
        deleted: boolean;
        domain: string;
        domainId: string;
        handles: {
          adminC?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DomainHandleReadable;
          ownerC: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DomainHandleReadable;
        };
        hasAuthCode: boolean;
        /**
         * @minItems 2
         */
        nameservers: [string, string, ...string[]];
        processes?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DomainProcess[];
        projectId: string;
        transferInAuthCode?: string;
        usesDefaultNameserver: boolean;
      }

      export interface DeMittwaldV1DomainHandleData {
        handleFields?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DomainHandleField[];
        handleRef?: string;
      }

      export interface DeMittwaldV1DomainHandleField {
        name: string;
        value: string;
      }

      export interface DeMittwaldV1DomainHandleReadable {
        current: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DomainHandleData;
        desired?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DomainHandleData;
      }

      export interface DeMittwaldV1DomainProcess {
        error?: string;
        lastUpdate: string;
        processType: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DomainProcessType;
        state: MittwaldAPIV2.Components.Schemas.DeMittwaldV1DomainProcessState;
        status?: string;
        statusCode?: string;
        transactionId: string;
      }

      export type DeMittwaldV1DomainProcessState =
        | "UNSPECIFIED"
        | "REQUESTED"
        | "FAILED";

      export type DeMittwaldV1DomainProcessType =
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

      export type DeMittwaldV1DomainRegistrar =
        | "INTERNETX"
        | "DENIC"
        | "HEXONET";

      export interface DeMittwaldV1DomainTopLevel {
        rgpDays: number;
        tld: string;
        transitAllowed: boolean;
        type:
          | "unknown"
          | "countryCode"
          | "generic"
          | "newGeneric"
          | "centralNic"
          | "other";
      }

      export interface DeMittwaldV1FileFileMeta {
        friendlyURL: string;
        id: string;
        name: string;
        sizeInBytes: number;
        type: string;
      }

      export interface DeMittwaldV1FileFileUploadRules {
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

      export interface DeMittwaldV1IngressIngress {
        /**
         * A list of errors that occurred while validating the ingress's dns before requesting a certificate.
         */
        dnsValidationErrors: (
          | "ERROR_UNSPECIFIED"
          | "ERROR_QUAD_A"
          | "ERROR_NO_A_RECORD"
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
        isEnabled: boolean;
        /**
         * A list of paths. The default path `/` is always present and cannot be removed.
         */
        paths: MittwaldAPIV2.Components.Schemas.DeMittwaldV1IngressPath[];
        projectId: string;
        tls:
          | MittwaldAPIV2.Components.Schemas.DeMittwaldV1IngressTlsAcme
          | MittwaldAPIV2.Components.Schemas.DeMittwaldV1IngressTlsCertificate;
      }

      export interface DeMittwaldV1IngressPath {
        path: string;
        target:
          | MittwaldAPIV2.Components.Schemas.DeMittwaldV1IngressTargetDirectory
          | MittwaldAPIV2.Components.Schemas.DeMittwaldV1IngressTargetUrl
          | MittwaldAPIV2.Components.Schemas.DeMittwaldV1IngressTargetInstallation;
      }

      export interface DeMittwaldV1IngressTargetDirectory {
        directory: string;
      }

      export interface DeMittwaldV1IngressTargetInstallation {
        installationId: string;
      }

      export interface DeMittwaldV1IngressTargetUrl {
        url: string;
      }

      export interface DeMittwaldV1IngressTlsAcme {
        /**
         * Has to be `true`, as ssl cannot be deactivated.
         */
        acme: boolean;
      }

      export interface DeMittwaldV1IngressTlsCertificate {
        certificateId: string;
      }

      export interface DeMittwaldV1InvoiceCancellation {
        cancelledAt: string;
        correctionNumber: string;
        pdfId: string;
        reason?: string;
      }

      export interface DeMittwaldV1InvoiceContractInvoiceDefinition {
        contractId: string;
        items: MittwaldAPIV2.Components.Schemas.DeMittwaldV1InvoiceContractItemInvoiceDefinition[];
      }

      export interface DeMittwaldV1InvoiceContractItemInvoiceDefinition {
        contractItemId: string;
        isDue?: boolean;
        serviceDate?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1InvoiceServiceDate;
        servicePeriod: MittwaldAPIV2.Components.Schemas.DeMittwaldV1InvoiceDatePeriod;
        vatRate: number;
      }

      export interface DeMittwaldV1InvoiceCorrectionDefinition {
        contractItemId: string;
        creditPeriod: MittwaldAPIV2.Components.Schemas.DeMittwaldV1InvoiceDatePeriod;
      }

      export interface DeMittwaldV1InvoiceDatePeriod {
        end: string;
        start: string;
      }

      export interface DeMittwaldV1InvoiceError {
        message: string;
        type: string;
      }

      export interface DeMittwaldV1InvoiceInvoiceItem {
        additionalDescription?: string;
        contractItemId: string;
        description: string;
        id: string;
        price: MittwaldAPIV2.Components.Schemas.DeMittwaldV1InvoicePrice;
        reference?: {
          sourceInvoiceId: string;
          sourceInvoiceItemId: string;
        };
        serviceDate?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1InvoiceServiceDate;
        servicePeriod?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1InvoiceDatePeriod;
        vatRate: number;
      }

      export interface DeMittwaldV1InvoiceInvoice {
        amountPaid: number;
        cancellation?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1InvoiceCancellation;
        /**
         * The ID of the invoice that this invoice cancels.
         */
        cancellationOf?: string;
        currency: string;
        customerId: string;
        date: string;
        groups: {
          contractId?: string;
          description: string;
          items: MittwaldAPIV2.Components.Schemas.DeMittwaldV1InvoiceInvoiceItem[];
        }[];
        id: string;
        invoiceNumber: string;
        invoiceType: "REGULAR" | "REISSUE" | "CORRECTION" | "CANCELLATION";
        paymentSettings?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1InvoicePaymentSettings;
        pdfId: string;
        recipient: MittwaldAPIV2.Components.Schemas.DeMittwaldV1InvoiceRecipient;
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

      export interface DeMittwaldV1InvoiceInvoiceSettings {
        additionalEmailRecipients?: string[];
        id: string;
        invoicePeriod?: number;
        nextInvoiceCheck?: string;
        paymentSettings?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1InvoicePaymentSettings;
        printedInvoices?: boolean;
        recipient?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1InvoiceRecipient;
        recipientSameAsOwner?: boolean;
        targetDay?: number;
      }

      export interface DeMittwaldV1InvoicePaymentSettingsDebit {
        accountHolder: string;
        bic: string;
        iban: string;
        method: "debit";
      }

      export interface DeMittwaldV1InvoicePaymentSettingsInvoice {
        method: "invoice";
      }

      export type DeMittwaldV1InvoicePaymentSettings =
        | MittwaldAPIV2.Components.Schemas.DeMittwaldV1InvoicePaymentSettingsDebit
        | MittwaldAPIV2.Components.Schemas.DeMittwaldV1InvoicePaymentSettingsInvoice;

      export interface DeMittwaldV1InvoicePrice {
        currency: "EUR";
        value: number;
      }

      export interface DeMittwaldV1InvoiceRecipient {
        address: MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonsAddress;
        company?: string;
        emailAddress?: string;
        firstName?: string;
        lastName?: string;
        phoneNumbers?: string[];
        salutation: MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonsSalutation;
        title?: string;
        useFormalTerm?: boolean;
      }

      export type DeMittwaldV1InvoiceServiceDate = string;

      export interface DeMittwaldV1MailCreateMailAddress {
        address: string;
        isCatchAll: boolean;
        mailbox: {
          enableSpamProtection: boolean;
          password: string;
          quotaInBytes: number;
        };
      }

      export interface DeMittwaldV1MailDeliverybox {
        authenticationEnabled: boolean;
        description: string;
        id: string;
        name: string;
        passwordUpdatedAt: string;
        projectId: string;
        sendingEnabled: boolean;
        updatedAt: string;
      }

      export interface DeMittwaldV1MailError {
        message: string;
        type: string;
      }

      export interface DeMittwaldV1MailCreateForwardAddress {
        address: string;
        forwardAddresses: string[];
      }

      export interface DeMittwaldV1MailMailAddress {
        address: string;
        autoResponder: {
          active: boolean;
          expiresAt?: string;
          message: string;
          startsAt?: string;
        };
        forwardAddresses: string[];
        id: string;
        isArchived: boolean;
        isCatchAll: boolean;
        mailbox?: {
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

      export type DeMittwaldV1MembershipCustomerInheritedRoles =
        | "notset"
        | "owner"
        | "member"
        | "accountant";

      export interface DeMittwaldV1MembershipCustomerInvite {
        /**
         * Reference to the Customer's avatar.
         */
        avatarRefId: string;
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
        information: MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipInviteInformation;
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
        role: MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerRoles;
      }

      export interface DeMittwaldV1MembershipCustomerMembership {
        /**
         * ID of the Customer the CustomerMembership is for.
         */
        customerId: string;
        /**
         * Time the CustomerMembership should expire at.
         */
        expiresAt?: string;
        /**
         * ID of the CustomerMembership.
         */
        id: string;
        /**
         * ID of the CustomerInvite the membership was created from.
         */
        inviteId: string;
        /**
         * Date the CustomerMembership was created at.
         */
        memberSince?: string;
        role: MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerRoles;
        /**
         * ID of the user the CustomerMembership is for.
         */
        userId: string;
      }

      export type DeMittwaldV1MembershipCustomerRoles =
        | "owner"
        | "member"
        | "accountant";

      export interface DeMittwaldV1MembershipInviteInformation {
        /**
         * Token for authentication purposes.
         */
        invitationToken: string;
        /**
         * ID of the user that created the invite.
         */
        invitedBy: string;
        /**
         * ID of the user this invite is for.
         */
        userId: string;
      }

      export interface DeMittwaldV1MembershipProjectInvite {
        /**
         * ID of the ProjectInvite.
         */
        id: string;
        information: MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipInviteInformation;
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
        role: MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectRoles;
      }

      export interface DeMittwaldV1MembershipProjectMembership {
        /**
         * Time the ProjectMembership should expire at.
         */
        expiresAt?: string;
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
        inviteId: string;
        /**
         * Date the projectMembership was created at.
         */
        memberSince?: string;
        /**
         * ID of the Project the membership is for.
         */
        projectId: string;
        role: MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectRoles;
        /**
         * ID of the user the ProjectMembership is for.
         */
        userId: string;
      }

      export type DeMittwaldV1MembershipProjectRoles =
        | "notset"
        | "owner"
        | "emailadmin"
        | "external";

      export interface DeMittwaldV1MessagingAggregateReference {
        aggregate: string;
        domain: string;
        id: string;
      }

      export interface DeMittwaldV1MessagingNotification {
        createdAt: string;
        id: string;
        read: boolean;
        reference: MittwaldAPIV2.Components.Schemas.DeMittwaldV1MessagingAggregateReference;
        severity: "success" | "info" | "warning" | "error";
        type: string;
      }

      export type DeMittwaldV1MessagingNotificationStatus = "read";

      export interface DeMittwaldV1OrderAddons {
        hidden?: boolean;
        key: string;
        value: string;
      }

      export interface DeMittwaldV1OrderArticleAddons {
        hidden?: boolean;
        key: string;
        type?: string;
        value: string;
        valueMergeType?: "add" | "set";
      }

      export interface DeMittwaldV1OrderAttributeConfiguration {
        key: string;
        value: string;
      }

      export interface DeMittwaldV1OrderCustomerOrder {
        contractChangeContractId?: string;
        customerId: string;
        dueDate?: string;
        invoicingPeriod: number;
        items: MittwaldAPIV2.Components.Schemas.DeMittwaldV1OrderOrderItem[];
        offerId?: string;
        orderDate: string;
        orderId: string;
        orderNumber: string;
        profile?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1OrderProfile;
        refLink?: string;
        status: MittwaldAPIV2.Components.Schemas.DeMittwaldV1OrderOrderStatus;
        summary: MittwaldAPIV2.Components.Schemas.DeMittwaldV1OrderOrderSummary;
        type: MittwaldAPIV2.Components.Schemas.DeMittwaldV1OrderOrderType;
      }

      export interface DeMittwaldV1OrderDomainHandleField {
        name: string;
        value: string;
      }

      export interface DeMittwaldV1OrderHardwareSpec {
        ram?: number;
        vcpu?: number;
      }

      export interface DeMittwaldV1OrderMachineTypeSpec {
        machineType?: string;
      }

      export interface DeMittwaldV1OrderOrderItem {
        addons?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1OrderAddons[];
        amount: number;
        articleId: string;
        articleTemplateName?: string;
        attributeConfiguration?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1OrderAttributeConfiguration[];
        isInclusive: boolean;
        offerItemId?: string;
        orderItemId: string;
        predefinedDomainAggregateId?: string;
        price: number;
        reference?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1OrderReference;
      }

      export interface DeMittwaldV1OrderReference {
        contractItemId?: string;
        offerItemId?: string;
        orderItemId?: string;
      }

      export type DeMittwaldV1OrderOrderStatus =
        | "NEW"
        | "CONFIRMED"
        | "REJECTED"
        | "ABORTED"
        | "EXECUTED";

      export interface DeMittwaldV1OrderOrderSummary {
        nonRecurring: number;
        recurring: number;
        summary: number;
      }

      export type DeMittwaldV1OrderOrderType = "NEW_ORDER" | "CONTRACT_CHANGE";

      export interface DeMittwaldV1OrderProfile {
        email: string;
        first_name?: string;
        last_name?: string;
        /**
         * the users title
         */
        title?: "other" | "mr" | "ms";
        userId: string;
      }

      export type DeMittwaldV1PolicyPolicy = string;

      export interface DeMittwaldV1ProjectAvatarRules {
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

      export type DeMittwaldV1ProjectDisableReason =
        | "maliciousCode"
        | "illegalContent"
        | "maliciousConduct";

      export interface DeMittwaldV1ProjectFilesystemDirectoryListing {
        absolutePath: string;
        isDirectory?: boolean;
        isExecutable?: boolean;
        isFile?: boolean;
        isSymlink?: boolean;
        items?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ProjectFilesystemDirectoryListing[];
        name: string;
        size: number;
        target?: string;
      }

      export interface DeMittwaldV1ProjectFilesystemUsagesDisk {
        path?: string;
        totalBytes?: number;
        usedBytes?: number;
      }

      export interface DeMittwaldV1ProjectFsApiJwt {
        jwt: string;
      }

      export interface DeMittwaldV1ProjectHardwareSpec {
        cpu: string;
        mem: string;
        storage: string;
      }

      export interface DeMittwaldV1ProjectMachineType {
        cpu: string;
        memory: string;
        name: string;
      }

      export interface DeMittwaldV1ProjectProject {
        clusterDomain?: string;
        clusterID?: string;
        createdAt: string;
        customerId: string;
        description: string;
        directories: {
          [k: string]: string;
        };
        disableReason?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ProjectDisableReason;
        enabled: boolean;
        id: string;
        imageRefId?: string;
        isReady: boolean;
        projectHostingId?: string;
        serverId?: string;
        serverShortId?: string;
        shortId: string;
        spec?:
          | MittwaldAPIV2.Components.Schemas.DeMittwaldV1ProjectVisitorSpec
          | MittwaldAPIV2.Components.Schemas.DeMittwaldV1ProjectHardwareSpec;
      }

      export interface DeMittwaldV1ProjectServer {
        customerId: string;
        description: string;
        id: string;
        imageRefId?: string;
        isReady: boolean;
        machineType: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ProjectMachineType;
        shortId: string;
        storage: string;
      }

      export interface DeMittwaldV1ProjectVisitorSpec {
        storage: string;
        visitors: number;
      }

      export interface DeMittwaldV1DirectusDomain {
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

      export interface DeMittwaldV1DomainEmptyResponse {
        error_props: {};
        error_reason: string;
      }

      export interface DeMittwaldV1DomainError {
        message: string;
        type: string;
      }

      export interface DeMittwaldV1SignupApiToken {
        apiTokenId: string;
        createdAt: string;
        description: string;
        expiresAt?: string;
        roles: ("api_read" | "api_write")[];
      }

      export interface DeMittwaldV1SignupDeviceInfo {
        browser?: string;
        model?: string;
        os?: string;
        type?: string;
      }

      export interface DeMittwaldV1SignupDomainError {
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

      export interface DeMittwaldV1SignupLocation {
        city?: string;
        country?: string;
        ipAddress?: string;
      }

      /**
       * The users personal information, e.g. first name.
       */
      export interface DeMittwaldV1SignupPerson {
        /**
         * The users first name
         */
        firstName: string;
        /**
         * the users last name
         */
        lastName: string;
        /**
         * the users title
         */
        title?: "other" | "mr" | "ms";
      }

      export interface DeMittwaldV1SignupProfile {
        avatarRef?: string;
        email?: string;
        /**
         * the users mfa details
         */
        mfaDetails?: {
          mfaConfirmed?: boolean;
          mfaInitialized?: boolean;
        };
        passwordUpdatedAt?: string;
        person?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1SignupPerson;
        userId?: string;
      }

      export interface DeMittwaldV1SignupSshKey {
        algorithm: string;
        comment: string;
        createdAt: string;
        expiresAt?: string;
        fingerprint: string;
        key: string;
        sshKeyId: string;
      }

      export interface DeMittwaldV1SignupUserSession {
        created: string;
        device: MittwaldAPIV2.Components.Schemas.DeMittwaldV1SignupDeviceInfo;
        lastAccess?: string;
        location?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1SignupLocation;
        tokenId: string;
      }

      export interface DeMittwaldV1CommonValidationError {
        /**
         * The object with the additional information about the error that can be used to create custom error messages. Keys depend on the
         * type that failed validation (e.g. "missingProperty" for type "required")
         *
         */
        context?: {
          [k: string]: string;
        };
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
         * ajv validation error type (e.g. "format", "required", "type") or own valiation error types
         */
        type: string;
      }

      export interface DeMittwaldV1CommonValidationErrors {
        errorObjects: MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationError[];
        name: "ValidationError";
      }

      export type DeMittwaldV1SshuserEntityTypes = "ssh" | "sftp";

      /**
       * The level of access for an SFTPUser.
       */
      export type DeMittwaldV1SshuserAccessLevel =
        | "full"
        | "read"
        | "unspecified";

      /**
       * Method of authentication that a given SFTPUser or SSHuser supports.
       */
      export type DeMittwaldV1SshuserAuthType = "password" | "publicKey";

      /**
       * Method of authentication for an SFTPUser or SSHUser. Can be password or public-keys.
       */
      export type DeMittwaldV1SshuserAuthentication =
        | {
            password: string;
          }
        | {
            publicKeys: MittwaldAPIV2.Components.Schemas.DeMittwaldV1SshuserPublicKey[];
          };

      /**
       * A representation of an ssh-public-key.
       */
      export interface DeMittwaldV1SshuserPublicKey {
        comment: string;
        key: string;
      }

      /**
       * A representation of an SFTPUser.
       */
      export interface DeMittwaldV1SshuserSftpUser {
        accessLevel: MittwaldAPIV2.Components.Schemas.DeMittwaldV1SshuserAccessLevel;
        active?: boolean;
        authUpdatedAt: string;
        createdAt: string;
        description: string;
        directories?: string[];
        expiresAt?: string;
        hasPassword: boolean;
        id: string;
        projectId: string;
        publicKeys?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1SshuserPublicKey[];
        updatedAt?: string;
        userName: string;
      }

      /**
       * A representation of an SSHUser.
       */
      export interface DeMittwaldV1SshuserSshUser {
        active?: boolean;
        authUpdatedAt: string;
        createdAt: string;
        description: string;
        expiresAt?: string;
        hasPassword: boolean;
        id: string;
        projectId: string;
        publicKeys?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1SshuserPublicKey[];
        updatedAt?: string;
        userName: string;
      }

      export interface DeMittwaldV1UserUserFeedback {
        id: string;
        message: string;
        origin: string;
        subject: string;
        vote: number;
      }

      export interface DeMittwaldV1UserUser {
        avatarRef?: string;
        email?: string;
        person: MittwaldAPIV2.Components.Schemas.DeMittwaldV1SignupPerson;
        phoneNumber?: string;
        userId: string;
      }

      export interface DeMittwaldV1VarnishConfigRevision {
        expire?: number;
        files: MittwaldAPIV2.Components.Schemas.DeMittwaldV1VarnishConfigFileRef[];
        note?: string;
        revision: number;
        updated: string;
      }

      export interface DeMittwaldV1VarnishConfigTemplate {
        /**
         * A set of config file references.
         */
        files: MittwaldAPIV2.Components.Schemas.DeMittwaldV1VarnishConfigFileRef[];
        isGlobal?: boolean;
        note?: string;
        projectId?: string;
        softwareConfigTemplateId: string;
        softwareTemplateId: string;
        updatedAt?: string;
      }

      export interface DeMittwaldV1VarnishConfigFile {
        content: string;
        meta?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1VarnishConfigFileMetadata;
      }

      export interface DeMittwaldV1VarnishConfigFileMetadata {
        name: string;
        path?: string;
      }

      export interface DeMittwaldV1VarnishConfigFileRef {
        meta?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1VarnishConfigFileMetadata;
        refId?: string;
      }

      export interface DeMittwaldV1VarnishGlobalConfigTemplate {
        data: string;
        name: string;
        updatedAt: string;
      }

      export interface DeMittwaldV1VarnishSoftware {
        config: MittwaldAPIV2.Components.Schemas.DeMittwaldV1VarnishSoftwareConfig;
        projectId: string;
        settings?: {
          [k: string]: string;
        };
        softwareId: string;
        softwareTemplateId: string;
        softwareVersion: string;
        updatedAt: string;
      }

      export interface DeMittwaldV1VarnishSoftwareConfig {
        configExpiration?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1VarnishConfigExpiration;
        latestConfigRevision?: number;
        revisions?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1VarnishConfigRevision[];
      }

      export interface DeMittwaldV1VarnishConfigExpiration {
        maxVersions?: number;
        retentionTime?: number;
      }

      export interface DeMittwaldV1VarnishSoftwareSetting {
        name: string;
        value: string;
      }

      export interface DeMittwaldV1CommonsAddress {
        street: string;
        houseNumber: string;
        city: string;
        zip: string;
        /**
         * ISO 3166-1 alpha-2 country code
         */
        countryCode: string;
      }

      export interface DeMittwaldV1CommonsError {
        message: string;
        type: string;
      }

      /**
       * The users personal information, e.g. first name.
       */
      export interface DeMittwaldV1CommonsPerson {
        /**
         * The users first name
         */
        firstName: string;
        /**
         * the users last name
         */
        lastName: string;
        title?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonsSalutation;
      }

      export type DeMittwaldV1CommonsSalutation = "mr" | "ms" | "other";

      export interface DeMittwaldV1CommonsValidationErrorSchema {
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

      export interface DeMittwaldV1CommonsValidationErrors {
        type: "ValidationError";
        message?: string;
        validationErrors: MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonsValidationErrorSchema[];
      }
    }

    namespace Parameters {}

    namespace RequestBodies {}

    namespace Responses {
      namespace DeMittwaldV1AppGenericResponse {
        export interface ApplicationJson {
          [k: string]: unknown;
        }
      }

      namespace DeMittwaldV1CustomerGenericResponse {
        export interface ApplicationJson {
          [k: string]: unknown;
        }
      }

      namespace DeMittwaldV1CustomerFailedPreconditionError {
        export interface ApplicationJson {
          [k: string]: unknown;
        }
      }

      namespace DeMittwaldV1DnsGenericResponse {
        export interface ApplicationJson {
          [k: string]: unknown;
        }
      }

      namespace DeMittwaldV1DomainSuccessResponse {
        export interface ApplicationJson {
          [k: string]: unknown;
        }
      }

      namespace DeMittwaldV1InvoiceEmptyResponse {
        export interface ApplicationJson {
          [k: string]: unknown;
        }
      }

      namespace DeMittwaldV1MailEmptyResponse {
        export interface ApplicationJson {
          [k: string]: unknown;
        }
      }

      namespace DeMittwaldV1OrderGenericResponse {
        export interface ApplicationJson {
          [k: string]: unknown;
        }
      }

      namespace DeMittwaldV1OrderNotFoundError {
        export interface ApplicationJson {
          [k: string]: unknown;
        }
      }

      namespace DeMittwaldV1DomainDefaultError {
        export interface ApplicationJson {
          [k: string]: unknown;
        }
      }

      namespace DeMittwaldV1DomainGenericResponse {
        export interface ApplicationJson {
          [k: string]: unknown;
        }
      }

      namespace DeMittwaldV1DomainEmptyResponse {
        export interface ApplicationJson {
          [k: string]: unknown;
        }
      }

      namespace DeMittwaldV1DomainNotFoundError {
        export interface ApplicationJson {
          [k: string]: unknown;
        }
      }

      namespace DeMittwaldV1DomainValidationError {
        export interface ApplicationJson {
          [k: string]: unknown;
        }
      }

      namespace DeMittwaldV1SignupInternalServerError {
        export interface ApplicationJson {
          [k: string]: unknown;
        }
      }

      namespace DeMittwaldV1SignupNoValidAccessTokenError {
        export interface ApplicationJson {
          [k: string]: unknown;
        }
      }

      namespace DeMittwaldV1CommonRateLimitError {}

      namespace DeMittwaldV1SignupRemovingLastOwnerNotAllowedError {
        export interface ApplicationJson {
          [k: string]: unknown;
        }
      }

      namespace DeMittwaldV1SignupSecondFactorRequiredError {
        export interface ApplicationJson {
          [k: string]: unknown;
        }
      }

      namespace DeMittwaldV1CommonsDefaultError {
        export interface ApplicationJson {
          [k: string]: unknown;
        }
      }

      namespace DeMittwaldV1CommonsNotFoundError {
        export interface ApplicationJson {
          [k: string]: unknown;
        }
      }

      namespace DeMittwaldV1CommonsValidationError {
        export interface ApplicationJson {
          [k: string]: unknown;
        }
      }
    }

    namespace SecuritySchemes {
      /**
       * Access Token is required in header
       */
      export interface DeMittwaldV1CommonAccessToken {
        "x-access-token"?: string;
      }

      /**
       * Legacy Access Token is required in header
       */
      export interface DeMittwaldV1CommonLegacyAccessToken {
        Authorization: string;
      }

      /**
       * Access Token is required in header
       */
      export interface DeMittwaldV1CommonsAccessToken {
        "x-access-token"?: string;
      }
    }
  }

  namespace Paths {
    namespace V2AppinstallationsAppInstallationIdActionsAction {
      namespace Post {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
            action: MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppAction;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppApp;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2AppinstallationsAppInstallationId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppAppInstallation;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppAppVersion;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SystemsoftwaresSystemSoftwareId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            systemSoftwareId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppSystemSoftware;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SystemsoftwareSystemSoftwareIdVersionsSystemSoftwareVersionId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            systemSoftwareId: string;
            systemSoftwareVersionId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppSystemSoftwareVersion;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2AppinstallationsAppInstallationIdDatabases {
      namespace Put {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdAppinstallations {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            page?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppAppInstallation[];
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                id: string;
                processId: string;
              }
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2Apps {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            page?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppApp[];
            }
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppAppVersion[];
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2Systemsoftwares {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            page?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppSystemSoftware[];
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SystemsoftwareSystemSoftwareIdVersions {
      namespace Get {
        namespace Parameters {
          export type Path = {
            systemSoftwareId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            versionRange?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppSystemSoftwareVersion[];
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2AppinstallationsAppInstallationIdStatus {
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
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppAppInstallationStatus;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2AppinstallationsAppInstallationIdDatabasesDatabaseId {
      namespace Put {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
            databaseId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            appInstallationId: string;
            databaseId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2AppinstallationsIdActionsUpdateStatus {
      namespace Post {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ArticleReadableArticle;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            limit?: number;
            skip?: number;
            page?: number;
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
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ArticleReadableArticle[];
            }
          }

          namespace Default {
            namespace Content {}
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
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            projectBackupId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1BackupProjectBackupSchedule[];
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1BackupProjectBackupSchedule;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1BackupProjectBackup[];
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1BackupProjectBackup;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1BackupProjectBackupSchedule;
            }
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            projectBackupScheduleId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            projectBackupScheduleId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $412 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1BackupProjectBackup;
            }
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            projectBackupId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            contractId: string;
            contractItemId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            contractId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ContractContractItem;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DomainsDomainIdContracts {
      namespace Get {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ContractContract;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ServersServerIdContracts {
      namespace Get {
        namespace Parameters {
          export type Path = {
            serverId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ContractContract;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdContracts {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ContractContract;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ContractContractItem;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ContractContract;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ContractsContractIdItemsContractItemIdNextTerminationDates {
      namespace Get {
        namespace Parameters {
          export type Path = {
            contractId: string;
            contractItemId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                contractItemId: string;
                nextTerminationDate: string;
              }
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ContractContract[];
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2Conversations {
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
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ConversationConversation[];
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

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
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                conversationId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
                | MittwaldAPIV2.Components.Schemas.DeMittwaldV1ConversationMessage
                | MittwaldAPIV2.Components.Schemas.DeMittwaldV1ConversationStatusUpdate
              )[];
            }
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            conversationId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
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
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ConversationCategory;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ConversationConversation;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            conversationId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
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
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ConversationCategories {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header = {};

          export type Query = {
            includeSubCategories?: boolean;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ConversationCategory[];
            }
          }

          namespace Default {
            namespace Content {}
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

          export interface RequestBody {
            [k: string]: unknown;
          }

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
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            [k: string]: unknown;
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
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            [k: string]: unknown;
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
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CronjobCronjob[];
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $412 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
            since?: string;
            until?: string;
            status?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CronjobCronjobExecution[];
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            cronjobId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $412 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CronjobCronjob;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            cronjobId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $412 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            cronjobId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $412 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CronjobCronjobExecution;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $412 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2CustomerInvitesInviteIdActionsAccept {
      namespace Post {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $412 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2Customercategories {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                categories?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1CustomerCategory[];
              }
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                customerId?: string;
                isPublic?: boolean;
                name?: string;
                useAgencyDomainPrices?: boolean;
                useAgencySslPrices?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2CustomerCategories {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                categories?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1CustomerCategory[];
              }
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                customerId?: string;
                isPublic?: boolean;
                name?: string;
                useAgencyDomainPrices?: boolean;
                useAgencySslPrices?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2CustomerCustomerIdInvites {
      namespace Post {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerInvite;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $409 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2Customers {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            role?: string;
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CustomerCustomer[];
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2CustomersCustomerIdNotes {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CustomerNote[];
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                author?: string;
                customerId: string;
                isImportant?: boolean;
                message?: string;
                noteId: string;
                subject?: string;
              }
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2CustomerInvitesInviteIdActionsDecline {
      namespace Post {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2CustomercategoriesCategoryId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            categoryId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CustomerCategory;
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            categoryId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                customerId?: string;
                isPublic?: boolean;
                name?: string;
                useAgencyDomainPrices?: boolean;
                useAgencySslPrices?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            categoryId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2CustomerCategoriesCategoryId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            categoryId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CustomerCategory;
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            categoryId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                customerId?: string;
                isPublic?: boolean;
                name?: string;
                useAgencyDomainPrices?: boolean;
                useAgencySslPrices?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            categoryId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2CustomerInvitesInviteId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerInvite;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2CustomerMembershipsMembershipId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            membershipId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerMembership;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            membershipId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            membershipId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CustomerCustomer;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2CustomersCustomerIdNotesNoteId {
      namespace Post {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                author?: string;
                customerId: string;
                isImportant?: boolean;
                message?: string;
                noteId: string;
                subject?: string;
              }
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            customerId: string;
            noteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
          } & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerInvite;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2CustomerCustomerIdActionsLeave {
      namespace Post {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2CustomerInvites {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerInvite[];
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2CustomerMemberships {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerMembership[];
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerInvite[];
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerMembership[];
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $401 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2CustomerInvitesInviteIdActionsResend {
      namespace Post {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DatabaseMySqlDatabase[];
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MysqlDatabasesDatabaseIdUsers {
      namespace Get {
        namespace Parameters {
          export type Path = {
            databaseId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DatabaseMySqlUser[];
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            databaseId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DatabaseRedisDatabase[];
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MysqlDatabasesId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DatabaseMySqlDatabase;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $412 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MysqlUsersId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DatabaseMySqlUser;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2RedisDatabasesId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DatabaseRedisDatabase;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $412 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MysqlUsersIdActionsDisable {
      namespace Post {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MysqlUsersIdActionsEnable {
      namespace Post {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MysqlUsersIdPhpMyAdminUrl {
      namespace Get {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DatabasePhpMyAdminURL;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MysqlCharsets {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            version?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DatabaseMySqlCharacterSettings[];
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MysqlVersions {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            projectId?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DatabaseMySqlVersion[];
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2RedisVersions {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            projectId?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DatabaseRedisVersion[];
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MysqlDatabasesIdDefaultCharset {
      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MysqlDatabasesIdDescription {
      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MysqlUsersIdPassword {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2RedisDatabasesIdDescription {
      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2AppAppIdVersionsAppVersionId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            appId: string;
            appVersionId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppAppVersion;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2AppAppIdVersions {
      namespace Get {
        namespace Parameters {
          export type Path = {
            appId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1AppAppVersion[];
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ContractsContractIdItemsContractItemIdTerminations {
      namespace Post {
        namespace Parameters {
          export type Path = {
            contractId: string;
            contractItemId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            contractId: string;
            contractItemId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ContractsContractIdItemsContractItemIdTariffChanges {
      namespace Delete {
        namespace Parameters {
          export type Path = {
            contractId: string;
            contractItemId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ContractsContractIdTerminations {
      namespace Post {
        namespace Parameters {
          export type Path = {
            contractId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            contractId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2CustomersCustomerIdContractsContractId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
            contractId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ContractContract;
            }
          }

          namespace $404 {
            namespace Content {
              export interface ApplicationJson {
                msg?: string;
              }
            }
          }

          namespace $500 {
            namespace Content {
              export interface ApplicationJson {
                msg?: string;
              }
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ContractsContractIdBaseItem {
      namespace Get {
        namespace Parameters {
          export type Path = {
            contractId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ContractContractItem;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2Contracts {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            projectId?: string;
            placementgroupId?: string;
            domainId?: string;
            projectHostingId?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ContractContract;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ContractsContractIdItemsContractItemIdNextTerminationDate {
      namespace Get {
        namespace Parameters {
          export type Path = {
            contractId: string;
            contractItemId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                contractItemId: string;
                nextTerminationDate: string;
              }
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesCustomerInviteIdAccept {
      namespace Post {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $412 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesCustomerAccept {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $412 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MembershipsCustomerMembershipId {
      namespace Put {
        namespace Parameters {
          export type Path = {
            membershipId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            membershipId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesCustomer {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerInvite;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $409 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesCustomerInviteIdDecline {
      namespace Delete {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesCustomersSpecificInviteId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerInvite;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MembershipsCustomersCustomerIdSpecificMembershipId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            membershipId: string;
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerMembership;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MembershipsCustomerMembershipIdLeave {
      namespace Delete {
        namespace Parameters {
          export type Path = {
            membershipId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MembershipsCustomers {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerMembership[];
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesCustomersCustomerId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerInvite[];
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MembershipsCustomersCustomerId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerMembership[];
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesCustomersMe {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerInvite[];
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesCustomerInviteIdResend {
      namespace Post {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesCustomerInviteId {
      namespace Delete {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2CustomerCustomerIdMembershipsMembershipId {
      namespace Put {
        namespace Parameters {
          export type Path = {
            membershipId: string;
            customerId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdDatabaseMysqlDatabases {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DatabaseMySqlDatabase[];
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdDatabaseMysqlDatabasesWithUser {
      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdDatabaseRedisDatabases {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DatabaseRedisDatabase[];
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MysqlDatabasesUsersUserId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DatabaseMySqlUser;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MysqlDatabasesUsersUserIdDisable {
      namespace Put {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MysqlDatabasesUsersUserIdEnable {
      namespace Put {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MysqlDatabasesUsersUserIdPhpMyAdmin {
      namespace Get {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DatabasePhpMyAdminURL;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MysqlCharsetsVersion {
      namespace Get {
        namespace Parameters {
          export type Path = {
            version: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              /**
               * A list of available MySQL character sets and collations for the given version.
               */
              export interface ApplicationJson {}
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdDatabaseMysqlVersions {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DatabaseMySqlVersion[];
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdDatabaseRedisVersions {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DatabaseRedisVersion[];
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MysqlDatabasesUsersUserIdPassword {
      namespace Put {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2CustomersCustomerIdInvoicesettings {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1InvoiceInvoiceSettings;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1InvoiceInvoiceSettings;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesInviteIdActionsAccept {
      namespace Post {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            type: MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipEntityTypes;
          };
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $412 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesInviteIdActionsDecline {
      namespace Post {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            type: MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipEntityTypes;
          };
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MembershipsMembershipId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            membershipId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            type: MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipEntityTypes;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                | MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectMembership
                | MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerMembership;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            membershipId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            type: MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipEntityTypes;
          };
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesInviteIdentifier {
      namespace Get {
        namespace Parameters {
          export type Path = {
            inviteIdentifier: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            type: MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipEntityTypes;
            identifierType: MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipIdentifierTypes;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                | MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerInvite
                | MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectInvite;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MembershipsMembershipIdActionsLeave {
      namespace Post {
        namespace Parameters {
          export type Path = {
            membershipId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            type: MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipEntityTypes;
          };
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2Invites {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            type: MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipEntityTypes;
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                | MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerInviteList
                | MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectInviteList;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2Memberships {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            type: MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipEntityTypes;
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                | MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipCustomerMembershipList
                | MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectMembershipList;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesInviteIdActionsResend {
      namespace Post {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            type: MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipEntityTypes;
          };
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesInviteId {
      namespace Delete {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            type: MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipEntityTypes;
          };
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesProjectInviteIdAccept {
      namespace Post {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $412 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesProjectAccept {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $412 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MembershipsProjectMembershipId {
      namespace Put {
        namespace Parameters {
          export type Path = {
            membershipId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            membershipId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesProject {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectInvite;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $409 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesProjectInviteIdDecline {
      namespace Delete {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesProjectsSpecificInviteId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectInvite;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MembershipsProjectsProjectIdSpecificMembershipId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            membershipId: string;
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectMembership;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MembershipsProjectMembershipIdLeave {
      namespace Delete {
        namespace Parameters {
          export type Path = {
            membershipId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesProjectsProjectId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectInvite[];
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MembershipsProjectsProjectId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectMembership[];
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesProjectsMe {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectInvite[];
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MembershipsProjects {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectMembership[];
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesProjectInviteIdResend {
      namespace Post {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2InvitesProjectInviteId {
      namespace Delete {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectProjectIdMembershipsMembershipId {
      namespace Put {
        namespace Parameters {
          export type Path = {
            membershipId: string;
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DnsZonesZoneIdRecordsetAcombinedCustom {
      namespace Put {
        namespace Parameters {
          export type Path = {
            zoneId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DnsZonesZoneIdRecordsetAcombinedManagedIngress {
      namespace Post {
        namespace Parameters {
          export type Path = {
            zoneId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {
              export interface ApplicationJson {
                ingressId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DnsZonesZoneIdRecordsetCname {
      namespace Put {
        namespace Parameters {
          export type Path = {
            zoneId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DnsZonesZoneIdRecordsetMxCustom {
      namespace Put {
        namespace Parameters {
          export type Path = {
            zoneId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DnsZonesZoneIdRecordsetMxManaged {
      namespace Post {
        namespace Parameters {
          export type Path = {
            zoneId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DnsZonesZoneIdRecordsetTxt {
      namespace Put {
        namespace Parameters {
          export type Path = {
            zoneId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DnsZonesZoneId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            zoneId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsZone;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DnsZone[];
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DomainsDomainIdDeclarations {
      namespace Delete {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DomainsDomainIdHandlesOwnerc {
      namespace Put {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DomainsDomainIdProjectId {
      namespace Put {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2Domains {
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
              export interface ApplicationJson {
                available: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DomainsDomainIdActionsCreateAuthcode {
      namespace Post {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DomainsDomainIdActionsCreateAuthcode2 {
      namespace Post {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DomainsDomainIdNameservers {
      namespace Put {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DomainsDomainIdDeclarationsAuthcode {
      namespace Put {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DomainsDomainIdDeclarationsHandles {
      namespace Put {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DomainDomain;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            domainId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DomainsHandleSchemaDomainName {
      namespace Get {
        namespace Parameters {
          export type Path = {
            domainName: string;
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

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DomainOwnershipsDomainOwnershipId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            domainOwnershipId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DomainDomainOwnership;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            domainOwnershipId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ToplevelDomainsTld {
      namespace Get {
        namespace Parameters {
          export type Path = {
            tld: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DomainTopLevel;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdDomainOwnerships {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DomainDomainOwnership[];
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdDomains {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            page?: number;
            limit?: number;
            domainSearchName?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DomainDomain[];
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ToplevelDomains {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1DomainTopLevel[];
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1FileFileMeta;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2FilesIdMeta {
      namespace Get {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1FileFileMeta;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2FileTokenRulesToken {
      namespace Get {
        namespace Parameters {
          export type Path = {
            token: string;
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1FileFileUploadRules;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2FileTypeRulesName {
      namespace Get {
        namespace Parameters {
          export type Path = {
            name: "avatar" | "conversation";
          };

          export type Header = {};

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1FileFileUploadRules;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2FilesId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header = {
            Accept?: "binary" | "base64";
            Download?: boolean;
          };

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationOctetStream = string;

              export type Base64 = string;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2Ingresses {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1IngressIngress;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            ingressId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2Ingresses {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1IngressIngress[];
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdIngresses {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1IngressIngress[];
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2IngressesIngressIdPaths {
      namespace Put {
        namespace Parameters {
          export type Path = {
            ingressId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2IngressesIngressIdTls {
      namespace Put {
        namespace Parameters {
          export type Path = {
            ingressId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2CustomersCustomerIdInvoicesInvoiceId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            customerId: string;
            invoiceId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1InvoiceInvoice;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1InvoiceInvoiceSettings;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            customerId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1InvoiceInvoiceSettings;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            invoiceTypes?: (
              | "REGULAR"
              | "REISSUE"
              | "CORRECTION"
              | "CANCELLATION"
            )[];
            limit?: number;
            skip?: number;
            page?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1InvoiceInvoice[];
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdDeliveryboxes {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              /**
               * A set of deliveryboxes
               */
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MailDeliverybox[];
            }
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DeliveryboxesId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MailDeliverybox;
            }
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DeliveryboxesIdDescription {
      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2DeliveryboxesIdPassword {
      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdMailaddresses {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              /**
               * A set of mail addresses
               */
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MailMailAddress[];
            }
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MailaddressesId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MailMailAddress;
            }
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MailaddressesIdAddress {
      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MailaddressesIdAutoResponder {
      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MailaddressesIdCatchAll {
      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MailaddressesIdForwardaddresses {
      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MailaddressesIdPassword {
      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MailaddressesIdQuota {
      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2MailaddressesIdSpamprotection {
      namespace Put {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdMailsettings {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdMailsettingsBlacklist {
      namespace Put {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdMailsettingsWhitelist {
      namespace Put {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2NewsletterSubscriptionsEmail {
      namespace Get {
        namespace Parameters {
          export type Path = {
            email: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            email: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2NewsletterSubscriptions {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2NotificationsUnreadCounts {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2Notifications {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            status?: "unread" | "read";
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MessagingNotification[];
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2NotificationsStatus {
      namespace Put {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                status: MittwaldAPIV2.Components.Schemas.DeMittwaldV1MessagingNotificationStatus;
              }
            }
          }

          namespace $403 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2NotificationsMessageIdStatus {
      namespace Put {
        namespace Parameters {
          export type Path = {
            messageId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                status: MittwaldAPIV2.Components.Schemas.DeMittwaldV1MessagingNotificationStatus;
              }
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2OrdersActionsChangeProjecthosting {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2OrdersActionsChangeServer {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1OrderCustomerOrder;
            }
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
            includesStatus?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1OrderOrderStatus[];
            excludesStatus?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1OrderOrderStatus[];
            templateNames?: string[];
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1OrderCustomerOrder[];
            }
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
            page?: number;
            includesStatus?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1OrderOrderStatus[];
            excludesStatus?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1OrderOrderStatus[];
            templateNames?: string[];
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1OrderCustomerOrder[];
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2OrdersActionsOrderDomain {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                dueDate?: string;
                orderId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2OrdersActionsOrderProjecthosting {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2OrdersActionsOrderServer {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2OrdersActionsPreviewChangeProjecthosting {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2OrdersActionsPreviewChangeServer {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2OrdersActionsPreviewOrderDomain {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                domainPrice?: number;
                feePrice?: number;
                totalPrice?: number;
              }
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2OrdersActionsPreviewOrderProjecthosting {
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
              export interface ApplicationJson {
                machineTypePrice: number;
                storagePrice: number;
                totalPrice: number;
              }
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2OrdersActionsPreviewOrderServer {
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
              export interface ApplicationJson {
                machineTypePrice: number;
                storagePrice: number;
                totalPrice: number;
              }
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2PasswordPoliciesPath {
      namespace Get {
        namespace Parameters {
          export type Path = {
            path: string;
          };

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
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1PolicyPolicy;
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectInvitesInviteIdActionsAccept {
      namespace Post {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $412 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectProjectIdInvites {
      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectInvite;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $409 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $412 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectInvitesInviteIdActionsDecline {
      namespace Post {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                refId: string;
                rules: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ProjectAvatarRules;
              }
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectInvitesInviteId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectInvite;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectMembershipsMembershipId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            membershipId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectMembership;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            membershipId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            membershipId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectId {
      namespace Delete {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $412 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                refId: string;
                rules: MittwaldAPIV2.Components.Schemas.DeMittwaldV1ProjectAvatarRules;
              }
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            serverId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ProjectFilesystemDirectoryListing;
            }
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdFilesystemUsagesDisk {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            directory?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ProjectFilesystemUsagesDisk;
            }
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdFilesystemFilesRaw {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ProjectFsApiJwt;
            }
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            file?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ProjectFilesystemDirectoryListing;
            }
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $503 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdMembershipsMe {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectMembership;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
          } & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectInvite;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ProjectProject;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ProjectServer;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdLeave {
      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectInvite[];
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectMembership[];
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectInvites {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectInvite[];
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectMemberships {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1MembershipProjectMembership[];
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2Projects {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            customerId?: string;
            serverId?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson = {
                createdAt: string;
                customerId: string;
                customerMeta: {
                  id: string;
                };
                description: string;
                enabled: boolean;
                id: string;
                imageRefId?: string;
                isReady: boolean;
                projectHostingId?: string;
                serverId?: string;
                shortId: string;
              }[];
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2Servers {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            customerId?: string;
            limit?: number;
            page?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1ProjectServer[];
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectInvitesInviteIdActionsResend {
      namespace Post {
        namespace Parameters {
          export type Path = {
            inviteId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsIdDescription {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            id: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2Relocation {
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
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectsProjectIdSftpUsers {
      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1SshuserSftpUser;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1SshuserSftpUser;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            sftpUserId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          export type Path = {
            sftpUserId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2ProjectProjectIdSftpUsers {
      namespace Get {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1SshuserSftpUser[];
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupTokenApi {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1SignupApiToken[];
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * The `ApiToken`
                 */
                token: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonsValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupTokenApiApiTokenId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            apiTokenId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1SignupApiToken;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            apiTokenId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonsValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            apiTokenId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonsValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupAuthentication {
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
              export interface ApplicationJson {
                /**
                 * Expiration unix timestamp
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
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1SignupDomainError & {
                  name?: "SecondFactorRequired";
                };
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupAuthenticationLegacy {
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
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupAuthenticationMfa {
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
              export interface ApplicationJson {
                /**
                 * Expiration unix timestamp
                 */
                expires: string;
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
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $408 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1SignupDomainError & {
                  name?: "FirstAuthenticationFactorExpired";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupAvatar {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                refId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupEmail {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupEmailResend {
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
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupEmailVerify {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupLogout {
      namespace Put {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupMfaConfirm {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                recoveryCodesList: string[];
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupMfa {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
                 * Same as barcode,  but in URL form. e.g.
                 * `otpauth://totp/Google:test@gmail.com?algorithm=SHA1&digits=6&issuer=Google&period=30&secret=HTXT7KJFVNAJUPYWQRWMNVQE5AF5YZI2"`
                 *
                 */
                url: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupPassword {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * Expiration unix timestamp
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
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupPasswordResetConfirm {
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
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupPasswordReset {
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
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupPhone {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                /**
                 * The phone number
                 */
                phoneNumber?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupPhoneVerify {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupProfile {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1SignupProfile;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $202 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupMfaResetRecoverycodes {
      namespace Put {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                recoveryCodesList: string[];
              }
            }
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupRegistration {
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
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $408 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1SignupDomainError & {
                  name?: "LegacyAuthenticationExpired";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupRegistrationVerification {
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
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1SignupDomainError & {
                  name?: "EmailNotFound";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupSessionsTokenId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            tokenId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1SignupUserSession;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1SignupDomainError;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            tokenId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1SignupDomainError;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupSessions {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1SignupUserSession[];
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupSsh {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                sshKeys?: MittwaldAPIV2.Components.Schemas.DeMittwaldV1SignupSshKey[];
              }
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupSshSshKeyId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            sshKeyId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export interface ApplicationJson {
                sshKey: MittwaldAPIV2.Components.Schemas.DeMittwaldV1SignupSshKey;
              }
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1SignupDomainError & {
                  name?: "SshKeyNotFound";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            sshKeyId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            sshKeyId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupSupportcode {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
                expiresAt?: string;
                /**
                 * support code to authenticate yourself against the mittwald support via telephone
                 */
                supportCode?: string;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SignupTokenCheck {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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

          namespace $400 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1CommonsValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            limit?: number;
            skip?: number;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1SshuserSshUser[];
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {
            projectId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1SshuserSshUser;
            }
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
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
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1SshuserSshUser;
            }
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            sshUserId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2SshusersSshUserId {
      namespace Patch {
        namespace Parameters {
          export type Path = {
            sshUserId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2UserUserIdAvatar {
      namespace Post {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2UserFeedback {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {
            subject?: string;
          };
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1UserUserFeedback[];
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {
              export interface ApplicationJson {}
            }
          }

          namespace $401 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2UserIssues {
      namespace Post {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $201 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2UserUserId {
      namespace Get {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1UserUser;
            }
          }

          namespace $403 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $412 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2UserSettings {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

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

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Put {
        namespace Parameters {
          export type Path = {};

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2UserUserIdPhone {
      namespace Post {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $409 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2UserUserIdPhoneVerify {
      namespace Post {
        namespace Parameters {
          export type Path = {
            userId: string;
          };

          export interface RequestBody {
            [k: string]: unknown;
          }

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {}
          }

          namespace $409 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2User {
      namespace Get {
        namespace Parameters {
          export type Path = {};

          export type Header =
            {} & MittwaldAPIV2.Components.SecuritySchemes.DeMittwaldV1CommonsAccessToken;

          export type Query = {};
        }
        namespace Responses {
          namespace $200 {
            namespace Content {
              export type ApplicationJson =
                MittwaldAPIV2.Components.Schemas.DeMittwaldV1UserUser;
            }
          }

          namespace Default {
            namespace Content {}
          }
        }
      }
    }

    namespace V2VarnishConfigValidate {
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
                /**
                 * The name of the validator.
                 */
                name: string;
                /**
                 * Semantic version describing all of supported versions
                 */
                version: string;
              }[];
            }
          }
        }
      }

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
              export interface ApplicationJson {
                stages?: {
                  /**
                   * The 'error_context' may contain validator / error_type specific content like
                   * 'line' and 'pos'.
                   *
                   */
                  errorContext?: {};
                  /**
                   * The 'errorMessage' may contain a human readable error message,
                   * if the error could be parsed / is known
                   * or the complete, unparsed validator output otherwise.
                   *
                   */
                  errorMessage?: string;
                  /**
                   * The 'errorType' is
                   * * empty, when the stage is successful
                   * * unknown, when the error type is now known / not parsed
                   * * or some validator specific string.
                   *
                   */
                  errorType?: string;
                  /**
                   * The name of the stage.
                   */
                  name?: string;
                }[];
                /**
                 * A validation request is successful, if all stages are successful.
                 */
                success: boolean;
              }
            }
          }
        }
      }
    }
  }
}
