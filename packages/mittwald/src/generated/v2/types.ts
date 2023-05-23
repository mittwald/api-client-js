/* eslint-disable */
/* prettier-ignore */

/**
* This file is auto-generated with openapi2ts (@mittwald/openapi-to-typescript)
*/

export declare module MittwaldApiV2 {
  namespace Paths {
    namespace V2_Apps_AppId {
      namespace Get {
        namespace Parameters {
          interface Path {
            appId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_App;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Apps {
      namespace Get {
        namespace Parameters {
          interface Query {
            limit?: number;
            page?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_App[];
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Appinstallations_AppInstallationId_Actions_Action {
      namespace Post {
        namespace Parameters {
          interface Path {
            appInstallationId: string;
            action: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_Action;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {}
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Appinstallations_AppInstallationId {
      namespace Get {
        namespace Parameters {
          interface Path {
            appInstallationId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_AppInstallation;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          interface Path {
            appInstallationId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            appVersionId?: string;
            customDocumentRoot?: string;
            description?: string;
            systemSoftware?: {
              [a: string]: any;
            };
            updatePolicy?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_AppUpdatePolicy;
            userInputs?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_SavedUserInput[];
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          interface Path {
            appInstallationId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Appinstallations {
      namespace Get {
        namespace Parameters {
          interface Query {
            limit?: number;
            page?: number;
            skip?: number;
          }

          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_AppInstallation[];
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            appVersionId: string;
            description: string;
            updatePolicy: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_AppUpdatePolicy;
            userInputs: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_SavedUserInput[];
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {
                id: string;
                processId: string;
              }
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Appinstallations_AppInstallationId_Databases {
      namespace Put {
        namespace Parameters {
          interface Path {
            appInstallationId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            databaseId: string;
            databaseUserIds?: {
              [a: string]: any;
            };
            purpose: "primary" | "cache" | "custom";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Appinstallations_AppInstallationId_Status {
      namespace Get {
        namespace Parameters {
          interface Path {
            appInstallationId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_AppInstallationStatus;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Appinstallations_AppInstallationId_Databases_DatabaseId {
      namespace Put {
        namespace Parameters {
          interface Path {
            appInstallationId: string;
            databaseId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            databaseUserIds: {
              [a: string]: any;
            };
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          interface Path {
            appInstallationId: string;
            databaseId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Appinstallations_Id_Actions_Update_Status {
      namespace Post {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            status: {
              appJob: {
                name: string;
                namespace: string;
              };
            };
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_App_AppId_Versions_AppVersionId {
      namespace Get {
        namespace Parameters {
          interface Path {
            appId: string;
            appVersionId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_AppVersion;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_App_AppId_Versions {
      namespace Get {
        namespace Parameters {
          interface Path {
            appId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_AppVersion[];
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Articles_ArticleId {
      namespace Get {
        namespace Parameters {
          interface Path {
            articleId: string;
          }

          interface Query {
            customerId?: string;
          }

          type Header = {
            Accept?: "application/json";
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Article_ReadableArticle;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Articles {
      namespace Get {
        namespace Parameters {
          interface Query {
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
          }

          type Header = {
            Accept?: "application/json";
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Article_ReadableArticle[];
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Contracts_ContractId_Items_ContractItemId_Termination {
      namespace Delete {
        namespace Parameters {
          interface Path {
            contractId: string;
            contractItemId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json = {
                contractId?: string;
                contractItemId?: string;
                isCancelled?: boolean;
              };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          interface Path {
            contractId: string;
            contractItemId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            reason?: string;
            terminationTargetDate?: string;
          };
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              type Application_Json = {
                contractId?: string;
                contractItemId?: string;
                reason?: string;
                terminationTargetDate?: string;
              };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Contracts_ContractId_Items_ContractItemId_Tariff_Change {
      namespace Delete {
        namespace Parameters {
          interface Path {
            contractId: string;
            contractItemId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json = {
                contractId?: string;
                contractItemId?: string;
                isCancelled?: boolean;
              };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Contracts_ContractId_Termination {
      namespace Delete {
        namespace Parameters {
          interface Path {
            contractId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json = {
                contractId?: string;
                isCancelled?: boolean;
              };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          interface Path {
            contractId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            reason?: string;
            terminationTargetDate?: string;
          };
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              type Application_Json = {
                contractId?: string;
                itemsScheduledForTermination?: string[];
                reason?: string;
                terminationTargetDate?: string;
              };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Contracts_ContractId {
      namespace Get {
        namespace Parameters {
          interface Path {
            contractId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Contract_Contract;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Contracts {
      namespace Get {
        namespace Parameters {
          interface Query {
            projectId?: string;
            placementgroupId?: string;
            domainId?: string;
            projectHostingId?: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Contract_Contract;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customers_CustomerId_Contracts_ContractId {
      namespace Get {
        namespace Parameters {
          interface Path {
            customerId: string;
            contractId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Contract_Contract;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json = {
                msg?: string;
              };
            }
          }

          namespace $500 {
            namespace Content {
              type Application_Json = {
                msg?: string;
              };
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Contracts_ContractId_Items_ContractItemId {
      namespace Get {
        namespace Parameters {
          interface Path {
            contractId: string;
            contractItemId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Contract_ContractItem;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customers_CustomerId_Contracts {
      namespace Get {
        namespace Parameters {
          interface Path {
            customerId: string;
          }

          interface Query {
            limit?: number;
            skip?: number;
            page?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Contract_Contract[];
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Contracts_ContractId_Items_ContractItemId_Next_Termination_Date {
      namespace Get {
        namespace Parameters {
          interface Path {
            contractId: string;
            contractItemId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json = {
                contractItemId: string;
                nextTerminationDate: string;
              };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Conversations {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            categoryId?: string;
            relatedTo?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Conversation_AggregateReference;
            title: string;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {
                conversationId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Conversation_Conversation[];
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Conversations_ConversationId_Messages {
      namespace Post {
        namespace Parameters {
          interface Path {
            conversationId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            fileIds?: string[];
            messageContent?: string;
          };
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {
                conversationId: string;
                messageId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            conversationId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json = (
                | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Conversation_Message
                | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Conversation_StatusUpdate
              )[];
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Conversation_Categories {
      namespace Get {
        namespace Parameters {
          interface Query {
            includeSubCategories?: boolean;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Conversation_Category[];
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Conversation_Categories_CategoryId {
      namespace Get {
        namespace Parameters {
          interface Path {
            categoryId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Conversation_Category;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Conversations_ConversationId {
      namespace Get {
        namespace Parameters {
          interface Path {
            conversationId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Conversation_Conversation;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          interface Path {
            conversationId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            categoryId?: string;
            relatedTo?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Conversation_AggregateReference;
            title?: string;
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                conversationId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Conversations_ConversationId_Files {
      namespace Post {
        namespace Parameters {
          interface Path {
            conversationId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {}
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {
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
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Conversations_ConversationId_Status {
      namespace Put {
        namespace Parameters {
          interface Path {
            conversationId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            status: "open" | "answered" | "closed";
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                conversationId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Conversations_ConversationId_Messages_MessageId {
      namespace Patch {
        namespace Parameters {
          interface Path {
            conversationId: string;
            messageId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            messageContent?: string;
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                messageId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Cronjobs {
      namespace Post {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody =
            MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Cronjob_CronjobRequest;
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $412 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Query {
            limit?: number;
            skip?: number;
            page?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Cronjob_Cronjob[];
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Cronjobs_CronjobId_Executions {
      namespace Post {
        namespace Parameters {
          interface Path {
            cronjobId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {
                id: string;
              }
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $412 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            cronjobId: string;
          }

          interface Query {
            limit?: number;
            skip?: number;
            page?: number;
            since?: string;
            until?: string;
            status?: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Cronjob_CronjobExecution[];
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Cronjobs_CronjobId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            cronjobId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $412 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            cronjobId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Cronjob_Cronjob;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          interface Path {
            cronjobId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            active?: boolean;
            description?: string;
            destination?:
              | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Cronjob_CronjobUrl
              | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Cronjob_CronjobCommand;
            email?: string;
            interval?: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {}
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $412 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Cronjobs_CronjobId_Executions_ExecutionId {
      namespace Get {
        namespace Parameters {
          interface Path {
            executionId: string;
            cronjobId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Cronjob_CronjobExecution;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customers_CustomerId_Avatar {
      namespace Delete {
        namespace Parameters {
          interface Path {
            customerId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              interface Application_Json {}
            }
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          interface Path {
            customerId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
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
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              interface Application_Json {}
            }
          }

          namespace $500 {
            namespace Content {
              interface Application_Json {}
            }
          }
        }
      }
    }

    namespace V2_Customercategories {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody =
            MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Customer_Category;
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {
                customerId?: string;
                isPublic?: boolean;
                name?: string;
                useAgencyDomainPrices?: boolean;
                useAgencySslPrices?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json = {
                categories?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Customer_Category[];
              };
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customers {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            categoryId?: string;
            name: string;
            owner?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Customer_Contact;
            vatId?: string;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {
                customerId: string;
                customerNumber: string;
                name: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Query {
            role?: string;
            limit?: number;
            skip?: number;
            page?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Customer_Customer[];
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customers_CustomerId_Notes {
      namespace Post {
        namespace Parameters {
          interface Path {
            customerId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            isImportant?: boolean;
            message: string;
            subject: string;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {
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
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            customerId: string;
          }

          interface Query {
            limit?: number;
            skip?: number;
            page?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Customer_Note[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customers_CustomerId_Legally_Competent {
      namespace Get {
        namespace Parameters {
          interface Path {
            customerId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                isLegallyCompetent?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customercategories_CategoryId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            categoryId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {}
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            categoryId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Customer_Category;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          interface Path {
            categoryId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody =
            MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Customer_Category;
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                customerId?: string;
                isPublic?: boolean;
                name?: string;
                useAgencyDomainPrices?: boolean;
                useAgencySslPrices?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customers_CustomerId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            customerId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {}
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            customerId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Customer_Customer;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          interface Path {
            customerId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            categoryId?: string;
            customerId: string;
            name: string;
            owner?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Customer_Contact;
            vatId?: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                customerId: string;
                customerNumber: string;
                name: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customers_CustomerId_Notes_NoteId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            customerId: string;
            noteId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {}
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          interface Path {
            customerId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody =
            MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Customer_Note;
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
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
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Mysql_Charsets_Version {
      namespace Get {
        namespace Parameters {
          interface Path {
            version: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {}
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Mysql_Charsets {
      namespace Get {
        namespace Parameters {
          interface Query {
            version: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_MySqlCharacterSettings[];
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Database_Mysql_Databases {
      namespace Post {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody =
            MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_MySqlDatabase;
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_MySqlDatabase[];
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Mysql_Databases_Id {
      namespace Delete {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $412 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $503 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_MySqlDatabase;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Mysql_Databases_Id_Default_Charset {
      namespace Patch {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            characterSettings: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_CharacterSettings;
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            characterSettings: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_CharacterSettings;
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Mysql_Databases_Id_Description {
      namespace Patch {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            description: string;
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            description: string;
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Database_Mysql_Databases_With_User {
      namespace Post {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            database: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_MySqlDatabase;
            user: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_MySqlUser;
          }
        }

        namespace Responses {
          namespace $202 {
            namespace Content {
              interface Application_Json {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Mysql_Databases_DatabaseId_Users {
      namespace Post {
        namespace Parameters {
          interface Path {
            databaseId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody =
            MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_MySqlUser;
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            databaseId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_MySqlUser[];
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Mysql_Databases_Users_UserId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            userId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            userId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_MySqlUser;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          interface Path {
            userId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            accessIpMask?: string;
            accessLevel: "full" | "readonly";
            description: string;
            externalAccess?: boolean;
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Mysql_Databases_Users_UserId_Disable {
      namespace Put {
        namespace Parameters {
          interface Path {
            userId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Mysql_Databases_Users_UserId_Enable {
      namespace Put {
        namespace Parameters {
          interface Path {
            userId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Mysql_Databases_Users_UserId_Php_My_Admin {
      namespace Get {
        namespace Parameters {
          interface Path {
            userId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_PhpMyAdminUrl;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Mysql_Databases_Users_UserId_Password {
      namespace Put {
        namespace Parameters {
          interface Path {
            userId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            password: string;
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          interface Path {
            userId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            password: string;
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Database_Mysql_Versions {
      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_MySqlVersion[];
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Database_Redis_Databases {
      namespace Post {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            description: string;
            version: string;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_RedisDatabase[];
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Redis_Databases_Id {
      namespace Delete {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $412 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $503 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_RedisDatabase;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Redis_Databases_Id_Description {
      namespace Patch {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            description: string;
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            description: string;
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Database_Redis_Versions {
      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_RedisVersion[];
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Dns_Zones_ZoneId_Recordset_Acombined_Custom {
      namespace Put {
        namespace Parameters {
          interface Path {
            zoneId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody =
            | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordUnset
            | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_CombinedACustom;
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Dns_Zones_ZoneId_Recordset_Acombined_Managed_Ingress {
      namespace Post {
        namespace Parameters {
          interface Path {
            zoneId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {}
        }

        namespace Responses {
          namespace $204 {
            namespace Content {
              interface Application_Json {
                ingressId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Dns_Zones_ZoneId_Recordset_Cname {
      namespace Put {
        namespace Parameters {
          interface Path {
            zoneId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody =
            | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordUnset
            | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordCnameComponent;
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Dns_Zones_ZoneId_Recordset_Mx_Custom {
      namespace Put {
        namespace Parameters {
          interface Path {
            zoneId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody =
            | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordUnset
            | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordMxCustom;
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Dns_Zones_ZoneId_Recordset_Mx_Managed {
      namespace Post {
        namespace Parameters {
          interface Path {
            zoneId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {}
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Dns_Zones_ZoneId_Recordset_Txt {
      namespace Put {
        namespace Parameters {
          interface Path {
            zoneId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody =
            | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordUnset
            | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordTxtComponent;
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Dns_Zones_ZoneId {
      namespace Get {
        namespace Parameters {
          interface Path {
            zoneId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_Zone;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Dns_Zones {
      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_Zone[];
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Domains_DomainId_Declarations {
      namespace Delete {
        namespace Parameters {
          interface Path {
            domainId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Domains_DomainId_Handles_Ownerc {
      namespace Put {
        namespace Parameters {
          interface Path {
            domainId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            ownerC: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Domain_HandleField[];
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                isAsync?: boolean;
                transactionId?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Domains_DomainId_ProjectId {
      namespace Put {
        namespace Parameters {
          interface Path {
            domainId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            projectId?: string;
          };
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Domains {
      namespace Post {
        namespace Parameters {
          type Header = {
            Accept?: "application/json";
          };

          type RequestBody = {
            domain: string;
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                available: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Domains_DomainId_Actions_Create_Authcode {
      namespace Post {
        namespace Parameters {
          interface Path {
            domainId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {
                authCode: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Domains_DomainId_Actions_Create_Authcode2 {
      namespace Post {
        namespace Parameters {
          interface Path {
            domainId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Domains_DomainId_Nameservers {
      namespace Put {
        namespace Parameters {
          interface Path {
            domainId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            nameservers?: string[];
          };
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Domains_DomainId_Declarations_Authcode {
      namespace Put {
        namespace Parameters {
          interface Path {
            domainId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            authCode: string;
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                isAsync?: boolean;
                transactionId?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Domains_DomainId_Declarations_Handles {
      namespace Put {
        namespace Parameters {
          interface Path {
            domainId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            ownerC: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Domain_HandleField[];
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                isAsync?: boolean;
                transactionId?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Domains_DomainId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            domainId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            transit?: boolean;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                isAsync?: boolean;
                transactionId?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            domainId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Domain_Domain;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Domains_Handle_Schema_DomainName {
      namespace Get {
        namespace Parameters {
          interface Path {
            domainName: string;
          }

          type Header = {
            Accept?: "application/json";
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                jsonSchemaAdminC?: {};
                jsonSchemaOwnerC: {};
              }
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Domain_Ownerships_DomainOwnershipId {
      namespace Get {
        namespace Parameters {
          interface Path {
            domainOwnershipId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Domain_DomainOwnership;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          interface Path {
            domainOwnershipId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Toplevel_Domains_Tld {
      namespace Get {
        namespace Parameters {
          interface Path {
            tld: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Domain_TopLevel;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Domain_Ownerships {
      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Domain_DomainOwnership[];
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Domains {
      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Query {
            page?: number;
            limit?: number;
            domainSearchName?: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Domain_Domain[];
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Toplevel_Domains {
      namespace Get {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Domain_TopLevel[];
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Domains_DomainId_Actions_Resend_Email {
      namespace Post {
        namespace Parameters {
          interface Path {
            domainId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Files {
      namespace Post {
        namespace Parameters {
          interface Header {
            Token: string;
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_File_FileMeta;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Files_Id {
      namespace Get {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            Accept?: "application/octet-stream,base64" | "application/json";
            Download?: boolean;
            "x-access-token"?: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Octet_Stream = string;

              type Base64 = string;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Files_Id_Meta {
      namespace Get {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_File_FileMeta;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_File_Token_Rules_Token {
      namespace Get {
        namespace Parameters {
          interface Path {
            token: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_File_FileUploadRules;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Ingresses {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            hostname: string;
            paths: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Ingress_Path[];
            projectId: string;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {
                id: string;
              }
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Ingresses_IngressId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            ingressId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            ingressId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Ingress_Ingress;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Ingresses {
      namespace Get {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Ingress_Ingress[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Ingresses_IngressId_Paths {
      namespace Put {
        namespace Parameters {
          interface Path {
            ingressId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody =
            MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Ingress_Path[];
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Ingresses_IngressId_Tls {
      namespace Put {
        namespace Parameters {
          interface Path {
            ingressId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody =
            | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Ingress_TlsAcme
            | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Ingress_TlsCertificate;
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {}
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customers_CustomerId_Invoices_InvoiceId {
      namespace Get {
        namespace Parameters {
          interface Path {
            customerId: string;
            invoiceId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_Invoice;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customers_CustomerId_Invoicesettings {
      namespace Get {
        namespace Parameters {
          interface Path {
            customerId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_InvoiceSettings;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          interface Path {
            customerId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            additionalEmailRecipients?: string[];
            invoicePeriod: number;
            paymentSettings: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_PaymentSettings;
            printedInvoices?: boolean;
            recipient?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_Recipient;
            recipientSameAsOwner?: boolean;
            targetDay?: number;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_InvoiceSettings;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customers_CustomerId_Invoices {
      namespace Get {
        namespace Parameters {
          interface Path {
            customerId: string;
          }

          interface Query {
            invoiceTypes?: (
              | "REGULAR"
              | "REISSUE"
              | "CORRECTION"
              | "CANCELLATION"
            )[];
            limit?: number;
            skip?: number;
            page?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_Invoice[];
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Deliveryboxes {
      namespace Post {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            description: string;
            password: string;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {
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

      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Mail_Deliverybox[];
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

    namespace V2_Deliveryboxes_Id {
      namespace Delete {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: string;
          }
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

      namespace Get {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Mail_Deliverybox;
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

    namespace V2_Deliveryboxes_Id_Description {
      namespace Put {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: string;
          }

          type RequestBody = {
            description: string;
          };
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

    namespace V2_Deliveryboxes_Id_Password {
      namespace Put {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: string;
          }

          type RequestBody = {
            password: string;
          };
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

    namespace V2_Projects_ProjectId_Mailaddresses {
      namespace Post {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody =
            | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Mail_CreateForwardAddress
            | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Mail_CreateMailAddress;
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
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

      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Mail_MailAddress[];
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

    namespace V2_Mailaddresses_Id {
      namespace Delete {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: string;
          }
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

      namespace Get {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Mail_MailAddress;
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

    namespace V2_Mailaddresses_Id_Address {
      namespace Put {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: string;
          }

          type RequestBody = {
            address: string;
          };
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

    namespace V2_Mailaddresses_Id_AutoResponder {
      namespace Put {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: string;
          }

          type RequestBody = {
            autoResponder: {
              active: boolean;
              expiresAt?: string;
              message: string;
              startsAt?: string;
            };
          };
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

    namespace V2_Mailaddresses_Id_CatchAll {
      namespace Put {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            active: boolean;
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
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

    namespace V2_Mailaddresses_Id_Forwardaddresses {
      namespace Put {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: string;
          }

          type RequestBody = {
            forwardAddresses: string[];
          };
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

    namespace V2_Mailaddresses_Id_Password {
      namespace Put {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: string;
          }

          type RequestBody = {
            password: string;
          };
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

    namespace V2_Mailaddresses_Id_Quota {
      namespace Put {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: string;
          }

          type RequestBody = {
            quotaInBytes: number;
          };
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

    namespace V2_Mailaddresses_Id_Spamprotection {
      namespace Put {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: string;
          }

          type RequestBody = {
            spamProtection: {
              active: boolean;
              autoDeleteSpam: boolean;
              folder: "inbox" | "spam";
              relocationMinSpamScore: number;
            };
          };
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

    namespace V2_Projects_ProjectId_Mailsettings {
      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
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

    namespace V2_Projects_ProjectId_Mailsettings_Blacklist {
      namespace Put {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: string;
          }

          interface RequestBody {
            blacklist: string[];
          }
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

    namespace V2_Projects_ProjectId_Mailsettings_Whitelist {
      namespace Put {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: string;
          }

          interface RequestBody {
            whitelist: string[];
          }
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

    namespace V2_Invites_Customer_InviteId_Accept {
      namespace Post {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            invitationToken?: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $412 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites_Customer_Accept {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            invitationToken?: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $412 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites_Project_InviteId_Accept {
      namespace Post {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            invitationToken?: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $412 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites_Project_Accept {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            invitationToken?: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $412 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Memberships_Customer_MembershipId {
      namespace Put {
        namespace Parameters {
          interface Path {
            membershipId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            expiresAt?: string;
            role: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerRoles;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          interface Path {
            membershipId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Memberships_Project_MembershipId {
      namespace Put {
        namespace Parameters {
          interface Path {
            membershipId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            expiresAt?: string;
            role: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectRoles;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          interface Path {
            membershipId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites_Customer {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            customerId: string;
            mailAddress: string;
            membershipExpiresAt?: string;
            message?: string;
            role: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerRoles;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerInvite;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $409 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites_Project {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            mailAddress: string;
            membershipExpiresAt?: string;
            message?: string;
            projectId: string;
            role: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectRoles;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectInvite;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $409 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites_Customer_InviteId_Decline {
      namespace Delete {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites_Project_InviteId_Decline {
      namespace Delete {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites_Customers_Specific_InviteId {
      namespace Get {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerInvite;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Memberships_Customers_CustomerId_Specific_MembershipId {
      namespace Get {
        namespace Parameters {
          interface Path {
            membershipId: string;
            customerId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerMembership;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Memberships_Me {
      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectMembership;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites_Projects_Specific_InviteId {
      namespace Get {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectInvite;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Memberships_Projects_ProjectId_Specific_MembershipId {
      namespace Get {
        namespace Parameters {
          interface Path {
            membershipId: string;
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectMembership;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Memberships_Customer_MembershipId_Leave {
      namespace Delete {
        namespace Parameters {
          interface Path {
            membershipId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Memberships_Project_MembershipId_Leave {
      namespace Delete {
        namespace Parameters {
          interface Path {
            membershipId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Memberships_Customers {
      namespace Get {
        namespace Parameters {
          interface Query {
            limit?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerMembership[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites_Customers_CustomerId {
      namespace Get {
        namespace Parameters {
          interface Path {
            customerId: string;
          }

          interface Query {
            limit?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerInvite[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites_Projects_ProjectId {
      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Query {
            limit?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectInvite[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Memberships_Customers_CustomerId {
      namespace Get {
        namespace Parameters {
          interface Path {
            customerId: string;
          }

          interface Query {
            limit?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerMembership[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Memberships_Projects_ProjectId {
      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Query {
            limit?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectMembership[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites_Customers_Me {
      namespace Get {
        namespace Parameters {
          interface Query {
            limit?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerInvite[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites_Projects_Me {
      namespace Get {
        namespace Parameters {
          interface Query {
            limit?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectInvite[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Memberships_Projects {
      namespace Get {
        namespace Parameters {
          interface Query {
            limit?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectMembership[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites_Customer_InviteId_Resend {
      namespace Post {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = any;
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites_Project_InviteId_Resend {
      namespace Post {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = any;
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites_Customer_InviteId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites_Project_InviteId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Notifications_Unread_Counts {
      namespace Get {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                error: number;
                info: number;
                success: number;
                total: number;
                warning: number;
              }
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Notifications {
      namespace Get {
        namespace Parameters {
          interface Query {
            status?: "unread" | "read";
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Messaging_Notification[];
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Notifications_Status {
      namespace Put {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {}
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                status: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Messaging_NotificationStatus;
              }
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Notifications_MessageId_Status {
      namespace Put {
        namespace Parameters {
          interface Path {
            messageId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            status: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Messaging_NotificationStatus;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                status: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Messaging_NotificationStatus;
              }
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Newsletter_Subscriptions_Email {
      namespace Get {
        namespace Parameters {
          interface Path {
            email: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                active: boolean;
                email: string;
                registered: boolean;
              }
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          interface Path {
            email: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Newsletter_Subscriptions {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            email: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                active: boolean;
                email: string;
                registered: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Orders_Actions_Change_Projecthosting {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            contractId: string;
            diskspaceInGiB: number;
            spec:
              | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_MachineTypeSpec
              | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_HardwareSpec;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              type Application_Json = {
                orderId: string;
              };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Orders_Actions_Change_Server {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            contractId: string;
            diskspaceInGiB: number;
            machineType: string;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              type Application_Json = {
                orderId: string;
              };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Orders_OrderId {
      namespace Get {
        namespace Parameters {
          interface Path {
            orderId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_CustomerOrder;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customers_CustomerId_Orders {
      namespace Get {
        namespace Parameters {
          interface Path {
            customerId: string;
          }

          interface Query {
            limit?: number;
            skip?: number;
            page?: number;
            includesStatus?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_OrderStatus[];
            excludesStatus?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_OrderStatus[];
            templateNames?: string[];
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_CustomerOrder[];
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Orders_Actions_Order_Domain {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            authCode?: string;
            domain: string;
            handleData: {
              adminC?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_DomainHandleField[];
              ownerC: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_DomainHandleField[];
            };
            projectId: string;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              type Application_Json = {
                dueDate?: string;
                orderId: string;
              };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Orders_Actions_Order_Projecthosting {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            customerId: string;
            description: string;
            diskspaceInGiB: number;
            spec:
              | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_MachineTypeSpec
              | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_HardwareSpec;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              type Application_Json = {
                orderId: string;
              };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Orders_Actions_Order_Server {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            customerId: string;
            description: string;
            diskspaceInGiB: number;
            machineType: string;
            useFreeTrial?: boolean;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              type Application_Json = {
                orderId: string;
              };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Orders_Actions_Preview_Change_Projecthosting {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            contractId: string;
            diskspaceInGiB: number;
            spec:
              | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_MachineTypeSpec
              | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_HardwareSpec;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json = {
                machineTypePrice: number;
                storagePrice: number;
                totalPrice: number;
              };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Orders_Actions_Preview_Change_Server {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            contractId: string;
            diskspaceInGiB: number;
            machineType: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json = {
                machineTypePrice: number;
                storagePrice: number;
                totalPrice: number;
              };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Orders_Actions_Preview_Order_Domain {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            authCode?: string;
            domain: string;
            projectId: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json = {
                domainPrice?: number;
                feePrice?: number;
                totalPrice?: number;
              };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Orders_Actions_Preview_Order_Projecthosting {
      namespace Post {
        namespace Parameters {
          type Header = {
            Accept?: "application/json";
          };

          interface RequestBody {
            customerId?: string;
            description?: string;
            diskspaceInGiB: number;
            spec:
              | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_MachineTypeSpec
              | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_HardwareSpec;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json = {
                machineTypePrice: number;
                storagePrice: number;
                totalPrice: number;
              };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Orders_Actions_Preview_Order_Server {
      namespace Post {
        namespace Parameters {
          type Header = {
            Accept?: "application/json";
          };

          interface RequestBody {
            customerId?: string;
            description?: string;
            diskspaceInGiB: number;
            machineType: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json = {
                machineTypePrice: number;
                storagePrice: number;
                totalPrice: number;
              };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Password_Policies_Path {
      namespace Get {
        namespace Parameters {
          interface Path {
            path: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Policy_Policy;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Filesystem_Directories {
      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Query {
            directory?: string;
            name?: string;
            max_depth?: number;
            type?: string[];
            executable?: boolean;
            hidden?: boolean;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Project_FilesystemDirectoryListing;
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $503 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Filesystem_Files_Raw {
      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Query {
            file?: string;
            inline?: boolean;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "text/plain" | "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Text_Plain = string;
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $503 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Filesystem_Files {
      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Query {
            file?: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Project_FilesystemDirectoryListing;
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $503 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Jwt {
      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Project_FsApiJwt;
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $503 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Filesystem_Usages_Disk {
      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Query {
            directory?: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Project_FilesystemUsagesDisk;
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $503 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Avatar {
      namespace Delete {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                refId: string;
                rules: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Project_AvatarRules;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {}
            }
          }

          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $412 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_Id {
      namespace Get {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Project_Project;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_Id_Description {
      namespace Patch {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            description: string;
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects {
      namespace Get {
        namespace Parameters {
          interface Query {
            customerId?: string;
            serverId?: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json = {
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
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Relocation {
      namespace Post {
        namespace Parameters {
          type Header = {
            Accept?: "application/json";
          };

          interface RequestBody {
            allDomains?: boolean;
            allowPasswordChange: boolean;
            contact: {
              email: string;
              firstName: string;
              lastName: string;
              phoneNumber?: string;
            };
            domains?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Directus_Domain[];
            notes?: string;
            provider: {
              loginUrl: string;
              name: string | "1und1" | "strato";
              password: string;
              sourceAccount: string;
              userName: string;
            };
            target: {
              organisation: string;
              product: string;
              projectName: string;
              system: "kc" | "mstudio";
            };
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Signup_Token_Api {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            description: string;
            expiresAt?: string;
            roles: ("api_read" | "api_write")[];
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {
                token: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_ApiToken[];
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Token_Api_ApiTokenId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            apiTokenId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          interface Path {
            apiTokenId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            description: string;
            expiresAt?: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            apiTokenId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_ApiToken;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Authentication {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            email: string;
            password: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                expires: string;
                token: string;
              }
            }
          }

          namespace $202 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "SecondFactorRequired";
                };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Authentication_Legacy {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            account: string;
            password: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Authentication_Mfa {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            email?: string;
            multiFactorCode: string;
            password?: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                expires: string;
                token: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $408 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "FirstAuthenticationFactorExpired";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Avatar {
      namespace Delete {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                refId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Email {
      namespace Put {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            email: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                email: string;
              }
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Email_Resend {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            email?: string;
            userId?: string;
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Email_Verify {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            email: string;
            token?: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Logout {
      namespace Put {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Mfa_Confirm {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            multiFactorCode: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                recoveryCodesList: string[];
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Mfa {
      namespace Delete {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            multiFactorCode: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                confirmed: boolean;
                initialized: boolean;
              }
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                barcode: string;
                url: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Password {
      namespace Put {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            multiFactorCode?: string;
            newPassword: string;
            oldPassword: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                expires: string;
                token: string;
              }
            }
          }

          namespace $202 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "SecondFactorRequired";
                };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                passwordUpdatedAt: string;
              }
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Password_Reset_Confirm {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            password: string;
            token: string;
            userId: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Password_Reset {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            email: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Phone {
      namespace Delete {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            phoneNumber: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                phoneNumber?: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            phoneNumber: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Phone_Verify {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            code: string;
            phoneNumber: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Profile {
      namespace Put {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            person: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_Person;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            multiFactorCode?: string;
            password: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $202 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "SecondFactorRequired";
                };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "RemovingLastOwnerNotAllowedError";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_Profile;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Mfa_Reset_Recoverycodes {
      namespace Put {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            multiFactorCode: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                recoveryCodesList: string[];
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Registration {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            email: string;
            legacyAccount?: {
              account?: string;
              password?: string;
            };
            password: string;
            person: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_Person;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {
                userId: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $408 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "LegacyAuthenticationExpired";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Registration_Verification {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            email: string;
            token: string;
            userId: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "EmailNotFound";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Sessions_TokenId {
      namespace Get {
        namespace Parameters {
          interface Path {
            tokenId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_UserSession;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          interface Path {
            tokenId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError;
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Sessions {
      namespace Get {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_UserSession[];
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Ssh {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            expiresAt?: string;
            publicKey: string;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                sshKeys?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_SshKey[];
              }
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Ssh_SshKeyId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            sshKeyId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          interface Path {
            sshKeyId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            comment: string;
            expiresAt?: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            sshKeyId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                sshKey: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_SshKey;
              }
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "SshKeyNotFound";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Supportcode {
      namespace Get {
        namespace Parameters {
          interface Query {
            forceRecreate?: boolean;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                expiresAt?: string;
                supportCode?: string;
              }
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Signup_Token_Check {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                id: string;
                publicToken: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "NoAccessTokenProvided";
                };
            }
          }

          namespace $429 {
            namespace Content {}
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DomainError & {
                  name?: "InternalServerError";
                };
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Sshuser_Sftp {
      namespace Post {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            accessLevel?: "read" | "full";
            authentication: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_Authentication;
            description: string;
            directories: string[];
            expiresAt?: string;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_SftpUser;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Query {
            limit?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_SftpUser[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Sshuser_Ssh {
      namespace Post {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            authentication: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_Authentication;
            description: string;
            expiresAt?: string;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_SshUser;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Query {
            limit?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_SshUser[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Sshuser_Sftp_SftpUserId {
      namespace Get {
        namespace Parameters {
          interface Path {
            sftpUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_SftpUser;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          interface Path {
            sftpUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            accessLevel?: "read" | "full";
            active?: boolean;
            description?: string;
            directories?: string[];
            expiresAt?: string;
            password?: string;
            publicKeys?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_PublicKey[];
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          interface Path {
            sftpUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Sshuser_Ssh_SshUserId {
      namespace Get {
        namespace Parameters {
          interface Path {
            sshUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_SshUser;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          interface Path {
            sshUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            active?: boolean;
            description?: string;
            expiresAt?: string;
            password?: string;
            publicKeys?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_PublicKey[];
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          interface Path {
            sshUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Sshuser_Sftp_SftpUserId_Access_Level {
      namespace Put {
        namespace Parameters {
          interface Path {
            sftpUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            accessLevel: "read" | "full";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Sshuser_Sftp_SftpUserId_Active {
      namespace Put {
        namespace Parameters {
          interface Path {
            sftpUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            active: boolean;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Sshuser_Ssh_SshUserId_Active {
      namespace Put {
        namespace Parameters {
          interface Path {
            sshUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            active: boolean;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Sshuser_Sftp_SftpUserId_Description {
      namespace Put {
        namespace Parameters {
          interface Path {
            sftpUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            description: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Sshuser_Ssh_SshUserId_Description {
      namespace Put {
        namespace Parameters {
          interface Path {
            sshUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            description: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Sshuser_Sftp_SftpUserId_Directories {
      namespace Put {
        namespace Parameters {
          interface Path {
            sftpUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            directories: string[];
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Sshuser_Sftp_SftpUserId_Expiry {
      namespace Put {
        namespace Parameters {
          interface Path {
            sftpUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            expiresAt?: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Sshuser_Ssh_SshUserId_Expiry {
      namespace Put {
        namespace Parameters {
          interface Path {
            sshUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            expiresAt?: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Sshuser_Sftp_SftpUserId_Password {
      namespace Put {
        namespace Parameters {
          interface Path {
            sftpUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            password: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Sshuser_Ssh_SshUserId_Password {
      namespace Put {
        namespace Parameters {
          interface Path {
            sshUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            password: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Sshuser_Sftp_SftpUserId_Public_Keys {
      namespace Put {
        namespace Parameters {
          interface Path {
            sftpUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            publicKeys?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_PublicKey[];
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Sshuser_Ssh_SshUserId_Public_Keys {
      namespace Put {
        namespace Parameters {
          interface Path {
            sshUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            publicKeys?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_PublicKey[];
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Systemsoftwares_SystemSoftwareId {
      namespace Get {
        namespace Parameters {
          interface Path {
            systemSoftwareId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_SystemSoftware;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Systemsoftwares {
      namespace Get {
        namespace Parameters {
          interface Query {
            limit?: number;
            page?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_SystemSoftware[];
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Systemsoftware_SystemSoftwareId_Versions_SystemSoftwareVersionId {
      namespace Get {
        namespace Parameters {
          interface Path {
            systemSoftwareId: string;
            systemSoftwareVersionId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_SystemSoftwareVersion;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Systemsoftware_SystemSoftwareId_Versions {
      namespace Get {
        namespace Parameters {
          interface Path {
            systemSoftwareId: string;
          }

          interface Query {
            versionRange?: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_SystemSoftwareVersion[];
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_User_UserId_Avatar {
      namespace Delete {
        namespace Parameters {
          interface Path {
            userId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          interface Path {
            userId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
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
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_User_Feedback {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            message?: string;
            origin: string;
            subject: string;
            vote: number;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {}
            }
          }

          namespace $401 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Query {
            subject?: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_User_UserFeedback[];
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_User_Issues {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            message: string;
            origin?: string;
            subject?: string;
            type: "feedback" | "bug";
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_User_UserId {
      namespace Put {
        namespace Parameters {
          interface Path {
            userId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            person: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_Person;
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            userId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_User_User;
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $412 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_User_Settings {
      namespace Get {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                settingsString?: string;
              }
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            settingsString: string;
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_User_UserId_Phone {
      namespace Post {
        namespace Parameters {
          interface Path {
            userId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            phoneNumber: string;
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $409 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          interface Path {
            userId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_User_UserId_Phone_Verify {
      namespace Post {
        namespace Parameters {
          interface Path {
            userId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            code: string;
            phoneNumber: string;
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $409 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_User {
      namespace Get {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_User_User;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Varnish_Config_Validate {
      namespace Get {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json = {
                name: string;
                version: string;
              }[];
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            files: {
              content: string;
              meta?: {
                name: string;
                path?: string;
              };
            }[];
            name: string;
            version: string;
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                stages?: {
                  errorContext?: {};
                  errorMessage?: string;
                  errorType?: string;
                  name?: string;
                }[];
                success: boolean;
              }
            }
          }
        }
      }
    }

    namespace V2_File_Type_Rules_Name {
      namespace Get {
        namespace Parameters {
          interface Path {
            name: "avatar" | "conversation";
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_File_FileUploadRules;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $500 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Orders {
      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Query {
            limit?: number;
            skip?: number;
            page?: number;
            includesStatus?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_OrderStatus[];
            excludesStatus?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_OrderStatus[];
            templateNames?: string[];
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_CustomerOrder[];
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Cronjobs_CronjobId_Executions_ExecutionId_Actions_Abort {
      namespace Post {
        namespace Parameters {
          interface Path {
            cronjobId: string;
            executionId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {}
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Backups {
      namespace Post {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            description?: string;
            expirationTime: string;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Backup_ProjectBackup;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Backup_ProjectBackup[];
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Backup_Schedules {
      namespace Post {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            description?: string;
            schedule: string;
            ttl: string;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Backup_ProjectBackupSchedule;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Backup_ProjectBackupSchedule[];
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Project_Backups_ProjectBackupId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            projectBackupId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            projectBackupId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Backup_ProjectBackup;
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Project_Backups_ProjectBackupId_Export {
      namespace Post {
        namespace Parameters {
          interface Path {
            projectBackupId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            format: "tar" | "zip";
            password?: string;
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Delete {
        namespace Parameters {
          interface Path {
            projectBackupId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Project_Backup_Schedules_ProjectBackupScheduleId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            projectBackupScheduleId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            projectBackupScheduleId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Backup_ProjectBackupSchedule;
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          interface Path {
            projectBackupScheduleId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            description?: string;
            schedule?: string;
            ttl?: string;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $412 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Project_Backups_ProjectBackupId_Description {
      namespace Patch {
        namespace Parameters {
          interface Path {
            projectBackupId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            description?: string;
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Cronjobs_CronjobId_App_Id {
      namespace Patch {
        namespace Parameters {
          interface Path {
            cronjobId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            appId: string;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {}
            }
          }

          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $412 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Contracts_ContractId_Items_ContractItemId_Terminations {
      namespace Delete {
        namespace Parameters {
          interface Path {
            contractId: string;
            contractItemId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json = {
                contractId?: string;
                contractItemId?: string;
                isCancelled?: boolean;
              };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          interface Path {
            contractId: string;
            contractItemId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            reason?: string;
            terminationTargetDate?: string;
          };
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              type Application_Json = {
                contractId?: string;
                contractItemId?: string;
                reason?: string;
                terminationTargetDate?: string;
              };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Contracts_ContractId_Items_ContractItemId_Tariff_Changes {
      namespace Delete {
        namespace Parameters {
          interface Path {
            contractId: string;
            contractItemId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json = {
                contractId?: string;
                contractItemId?: string;
                isCancelled?: boolean;
              };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Contracts_ContractId_Terminations {
      namespace Delete {
        namespace Parameters {
          interface Path {
            contractId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json = {
                contractId?: string;
                isCancelled?: boolean;
              };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          interface Path {
            contractId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            reason?: string;
            terminationTargetDate?: string;
          };
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              type Application_Json = {
                contractId?: string;
                itemsScheduledForTermination?: string[];
                reason?: string;
                terminationTargetDate?: string;
              };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Contracts_ContractId_Base_Items {
      namespace Get {
        namespace Parameters {
          interface Path {
            contractId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Contract_ContractItem;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Contracts_ContractId_Items_ContractItemId_Next_Termination_Dates {
      namespace Get {
        namespace Parameters {
          interface Path {
            contractId: string;
            contractItemId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json = {
                contractItemId: string;
                nextTerminationDate: string;
              };
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customer_Categories {
      namespace Post {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody =
            MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Customer_Category;
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {
                customerId?: string;
                isPublic?: boolean;
                name?: string;
                useAgencyDomainPrices?: boolean;
                useAgencySslPrices?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json = {
                categories?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Customer_Category[];
              };
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customer_Categories_CategoryId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            categoryId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {}
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            categoryId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Customer_Category;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          interface Path {
            categoryId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody =
            MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Customer_Category;
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                customerId?: string;
                isPublic?: boolean;
                name?: string;
                useAgencyDomainPrices?: boolean;
                useAgencySslPrices?: boolean;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Contracts_ContractId_Base_Item {
      namespace Get {
        namespace Parameters {
          interface Path {
            contractId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Contract_ContractItem;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customers_CustomerId_Invoice_Settings {
      namespace Get {
        namespace Parameters {
          interface Path {
            customerId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_InvoiceSettings;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          interface Path {
            customerId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            additionalEmailRecipients?: string[];
            invoicePeriod: number;
            paymentSettings: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_PaymentSettings;
            printedInvoices?: boolean;
            recipient?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_Recipient;
            recipientSameAsOwner?: boolean;
            targetDay?: number;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_InvoiceSettings;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Servers_ServerId_Projects {
      namespace Post {
        namespace Parameters {
          interface Path {
            serverId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            description: string;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $412 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Servers_ServerId_Avatar {
      namespace Delete {
        namespace Parameters {
          interface Path {
            serverId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Post {
        namespace Parameters {
          interface Path {
            serverId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              interface Application_Json {
                refId: string;
                rules: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Project_AvatarRules;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Servers_ServerId {
      namespace Get {
        namespace Parameters {
          interface Path {
            serverId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Project_Server;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Servers {
      namespace Get {
        namespace Parameters {
          interface Query {
            customerId?: string;
            limit?: number;
            page?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Project_Server[];
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Servers_ServerId_Description {
      namespace Patch {
        namespace Parameters {
          interface Path {
            serverId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            description: string;
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }
        }
      }
    }

    namespace V2_Customer_CustomerId_Memberships_MembershipId {
      namespace Put {
        namespace Parameters {
          interface Path {
            membershipId: string;
            customerId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            expiresAt?: string;
            role: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerRoles;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites_InviteId_Actions_Accept {
      namespace Post {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Query {
            type: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_EntityTypes;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            invitationToken?: string;
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $412 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites_InviteId_Actions_Decline {
      namespace Post {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Query {
            type: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_EntityTypes;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = any;
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Memberships_MembershipId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            membershipId: string;
          }

          interface Query {
            type: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_EntityTypes;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            membershipId: string;
          }

          interface Query {
            type: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_EntityTypes;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectMembership
                | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerMembership;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites_InviteIdentifier {
      namespace Get {
        namespace Parameters {
          interface Path {
            inviteIdentifier: string;
          }

          interface Query {
            type: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_EntityTypes;
            identifierType: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_IdentifierTypes;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerInvite
                | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectInvite;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Memberships_MembershipId_Actions_Leave {
      namespace Post {
        namespace Parameters {
          interface Path {
            membershipId: string;
          }

          interface Query {
            type: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_EntityTypes;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = any;
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites {
      namespace Get {
        namespace Parameters {
          interface Query {
            type: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_EntityTypes;
            limit?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerInviteList
                | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectInviteList;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Memberships {
      namespace Get {
        namespace Parameters {
          interface Query {
            type: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_EntityTypes;
            limit?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerMembershipList
                | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectMembershipList;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites_InviteId_Actions_Resend {
      namespace Post {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Query {
            type: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_EntityTypes;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = any;
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Invites_InviteId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Query {
            type: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_EntityTypes;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Project_ProjectId_Memberships_MembershipId {
      namespace Put {
        namespace Parameters {
          interface Path {
            membershipId: string;
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            expiresAt?: string;
            role: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectRoles;
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Apps_AppId_Versions_AppVersionId {
      namespace Get {
        namespace Parameters {
          interface Path {
            appId: string;
            appVersionId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_AppVersion;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Apps_AppId_Versions {
      namespace Get {
        namespace Parameters {
          interface Path {
            appId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_AppVersion[];
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Domains_DomainId_Contracts {
      namespace Get {
        namespace Parameters {
          interface Path {
            domainId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Contract_Contract;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Servers_ServerId_Contracts {
      namespace Get {
        namespace Parameters {
          interface Path {
            serverId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Contract_Contract;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Contracts {
      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Contract_Contract;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customer_Invites_InviteId_Actions_Accept {
      namespace Post {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            invitationToken?: string;
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $412 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customer_CustomerId_Invites {
      namespace Post {
        namespace Parameters {
          interface Path {
            customerId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            mailAddress: string;
            membershipExpiresAt?: string;
            message?: string;
            role: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerRoles;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerInvite;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $409 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customer_Invites_InviteId_Actions_Decline {
      namespace Post {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = any;
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customer_Invites_InviteId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerInvite;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customer_Memberships_MembershipId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            membershipId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            membershipId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerMembership;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          interface Path {
            membershipId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            expiresAt?: string;
            role: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerRoles;
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customer_Token_Invite {
      namespace Get {
        namespace Parameters {
          interface Header {
            token: string;
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerInvite;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customer_CustomerId_Actions_Leave {
      namespace Post {
        namespace Parameters {
          interface Path {
            customerId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = any;
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customer_Invites {
      namespace Get {
        namespace Parameters {
          interface Query {
            limit?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerInvite[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customer_Memberships {
      namespace Get {
        namespace Parameters {
          interface Query {
            limit?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerMembership[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customers_CustomerId_Invites {
      namespace Get {
        namespace Parameters {
          interface Path {
            customerId: string;
          }

          interface Query {
            limit?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerInvite[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customers_CustomerId_Memberships {
      namespace Get {
        namespace Parameters {
          interface Path {
            customerId: string;
          }

          interface Query {
            limit?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerMembership[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Customer_Invites_InviteId_Actions_Resend {
      namespace Post {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = any;
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Mysql_Databases {
      namespace Post {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            database: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_MySqlDatabase;
            user?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_MySqlUser;
          }
        }

        namespace Responses {
          namespace $202 {
            namespace Content {
              interface Application_Json {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_MySqlDatabase[];
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Redis_Databases {
      namespace Post {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            description: string;
            version: string;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              interface Application_Json {
                id: string;
              }
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_RedisDatabase[];
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Mysql_Users_Id {
      namespace Delete {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_MySqlUser;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Put {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            accessIpMask?: string;
            accessLevel: "full" | "readonly";
            description: string;
            externalAccess?: boolean;
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Mysql_Users_Id_Actions_Disable {
      namespace Post {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Mysql_Users_Id_Actions_Enable {
      namespace Post {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Mysql_Users_Id_Php_My_Admin_Url {
      namespace Get {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_PhpMyAdminUrl;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Mysql_Versions {
      namespace Get {
        namespace Parameters {
          interface Query {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_MySqlVersion[];
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Redis_Versions {
      namespace Get {
        namespace Parameters {
          interface Query {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_RedisVersion[];
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Mysql_Users_Id_Password {
      namespace Patch {
        namespace Parameters {
          interface Path {
            id: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = {
            password: string;
          };
        }

        namespace Responses {
          namespace $200 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Ingresses {
      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Ingress_Ingress[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Project_Invites_InviteId_Actions_Accept {
      namespace Post {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            invitationToken?: string;
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace $412 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Project_ProjectId_Invites {
      namespace Post {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            mailAddress: string;
            membershipExpiresAt?: string;
            message?: string;
            role: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectRoles;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectInvite;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace $409 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Project_Invites_InviteId_Actions_Decline {
      namespace Post {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = any;
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Project_Invites_InviteId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectInvite;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Project_Memberships_MembershipId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            membershipId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            membershipId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectMembership;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          interface Path {
            membershipId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            expiresAt?: string;
            role: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectRoles;
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Project_Token_Invite {
      namespace Get {
        namespace Parameters {
          interface Header {
            token: string;
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectInvite;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Leave {
      namespace Post {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = any;
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Invites {
      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Query {
            limit?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectInvite[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Memberships {
      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Query {
            limit?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectMembership[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Project_Invites {
      namespace Get {
        namespace Parameters {
          interface Query {
            limit?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectInvite[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Project_Memberships {
      namespace Get {
        namespace Parameters {
          interface Query {
            limit?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectMembership[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Project_Invites_InviteId_Actions_Resend {
      namespace Post {
        namespace Parameters {
          interface Path {
            inviteId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          type RequestBody = any;
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $403 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Sftp_Users {
      namespace Post {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            accessLevel?: "read" | "full";
            authentication: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_Authentication;
            description: string;
            directories: string[];
            expiresAt?: string;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_SftpUser;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Sftp_Users_SftpUserId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            sftpUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            sftpUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_SftpUser;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Patch {
        namespace Parameters {
          interface Path {
            sftpUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            accessLevel?: "read" | "full";
            active?: boolean;
            description?: string;
            directories?: string[];
            expiresAt?: string;
            password?: string;
            publicKeys?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_PublicKey[];
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Project_ProjectId_Sftp_Users {
      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Query {
            limit?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_SftpUser[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Projects_ProjectId_Ssh_Users {
      namespace Post {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            authentication: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_Authentication;
            description: string;
            expiresAt?: string;
          }
        }

        namespace Responses {
          namespace $201 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_SshUser;
            }
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            projectId: string;
          }

          interface Query {
            limit?: number;
            skip?: number;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            interface Headers {
              "X-Pagination-Limit"?: number;
              "X-Pagination-Skip"?: number;
              "X-Pagination-TotalCount"?: number;
            }

            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_SshUser[];
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Ssh_Users_SshUserId {
      namespace Delete {
        namespace Parameters {
          interface Path {
            sshUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }

      namespace Get {
        namespace Parameters {
          interface Path {
            sshUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }
        }

        namespace Responses {
          namespace $200 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_SshUser;
            }
          }

          namespace $404 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }

    namespace V2_Sshusers_SshUserId {
      namespace Patch {
        namespace Parameters {
          interface Path {
            sshUserId: string;
          }

          interface Header {
            "x-access-token"?: string;
            Accept?: "application/json";
          }

          interface RequestBody {
            active?: boolean;
            description?: string;
            expiresAt?: string;
            password?: string;
            publicKeys?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_PublicKey[];
          }
        }

        namespace Responses {
          namespace $204 {
            namespace Content {}
          }

          namespace $400 {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrors;
            }
          }

          namespace Default {
            namespace Content {
              type Application_Json =
                MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Error;
            }
          }
        }
      }
    }
  }

  namespace Components {
    namespace Schemas {
      type De_Mittwald_V1_App_Action = "start" | "stop" | "restart";

      type De_Mittwald_V1_App_ActionCapabilities =
        MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_Action[];

      interface De_Mittwald_V1_App_App {
        actionCapabilities?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_ActionCapabilities;
        id: string;
        name: string;
        tags: string[];
      }

      interface De_Mittwald_V1_App_AppInstallationStatus {
        lastExitCode?: number;
        logFileLocation: string;
        state: "running" | "stopped" | "exited";
        uptimeSeconds?: number;
      }

      type De_Mittwald_V1_App_AppUpdatePolicy = "none" | "patchLevel" | "all";

      interface De_Mittwald_V1_App_AppInstallation {
        appId: string;
        appVersion: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_VersionStatus;
        customDocumentRoot?: string;
        description: string;
        disabled: boolean;
        id: string;
        installationPath: string;
        linkedDatabases?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_LinkedDatabase[];
        processes?: string[];
        projectId?: string;
        screenshotId?: string;
        screenshotRef?: string;
        systemSoftware?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_InstalledSystemSoftware[];
        updatePolicy?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_AppUpdatePolicy;
        userInputs?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_SavedUserInput[];
      }

      type De_Mittwald_V1_App_AppInstallationLifecycle =
        | "installation"
        | "update"
        | "reconfigure";

      interface De_Mittwald_V1_App_AppVersion {
        breakingNote?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_BreakingNote;
        databases?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_DatabaseDependency[];
        docRoot: string;
        docRootUserEditable: boolean;
        externalVersion: string;
        id: string;
        internalVersion: string;
        recommended?: boolean;
        requestHandler?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_RequestHandlerRequirement;
        systemSoftwareDependencies?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_SystemSoftwareDependency[];
        userInputs?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_UserInput[];
      }

      interface De_Mittwald_V1_App_BreakingNote {
        faqLink: string;
      }

      interface De_Mittwald_V1_App_DatabaseDependency {
        description: string;
        kind: "mysql";
        parameters?: {
          [a: string]: any;
        };
        version: string;
      }

      interface De_Mittwald_V1_App_Error {
        message: string;
        type: string;
      }

      interface De_Mittwald_V1_App_InstalledSystemSoftware {
        systemSoftwareId: string;
        systemSoftwareVersion: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_VersionStatus;
        updatePolicy: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_SystemSoftwareUpdatePolicy;
      }

      interface De_Mittwald_V1_App_LinkedDatabase {
        databaseId: string;
        databaseUserIds?: {
          [a: string]: any;
        };
        kind: "mysql" | "redis";
        purpose: "primary" | "cache" | "custom";
      }

      interface De_Mittwald_V1_App_RequestHandlerRequirement {
        exampleValues?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_SavedUserInput[];
        name: string;
        namespace: string;
        parametersTemplate: string;
      }

      interface De_Mittwald_V1_App_SavedUserInput {
        name: string;
        value: string;
      }

      interface De_Mittwald_V1_App_SystemSoftwareDependency {
        systemSoftwareId: string;
        versionRange: string;
      }

      type De_Mittwald_V1_App_SystemSoftwareUpdatePolicy =
        | "none"
        | "inheritedFromApp"
        | "patchLevel"
        | "all";

      interface De_Mittwald_V1_App_SystemSoftware {
        id: string;
        name: string;
        tags: string[];
      }

      interface De_Mittwald_V1_App_SystemSoftwareVersion {
        externalVersion: string;
        id: string;
        internalVersion: string;
        recommended?: boolean;
        systemSoftwareDependencies?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_SystemSoftwareDependency[];
        userInputs?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_UserInput[];
      }

      interface De_Mittwald_V1_App_UserInput {
        dataSource?: string;
        dataType: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_UserInputDataType;
        defaultValue?: string;
        format?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_UserInputFormat;
        lifecycleConstraint: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_AppInstallationLifecycle;
        name: string;
        positionMeta?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_App_UserInputPositionMeta;
        required: boolean;
        validationSchema: string;
      }

      type De_Mittwald_V1_App_UserInputDataType =
        | "text"
        | "number"
        | "boolean"
        | "select";

      type De_Mittwald_V1_App_UserInputFormat = "email" | "password" | "url";

      interface De_Mittwald_V1_App_UserInputPositionMeta {
        index?: number;
        section?: string;
        step?: string;
      }

      interface De_Mittwald_V1_App_VersionStatus {
        current?: string;
        desired: string;
      }

      interface De_Mittwald_V1_Article_ArticleAddons {
        hidden?: boolean;
        key: string;
        type?: string;
        value: string;
        valueMergeType?: "add" | "set";
      }

      interface De_Mittwald_V1_Article_ArticleAttributes {
        customerEditable?: boolean;
        key: string;
        mergeType?: "add" | "set";
        readonly?: boolean;
        required?: boolean;
        unit?: string;
        value: string;
      }

      interface De_Mittwald_V1_Article_ReadableBookableArticleOptions {
        articleId: string;
        info?: {
          articleName?: string;
          articleTemplateName?: string;
          fromArticleTemplate?: boolean;
        };
        maxArticleCount?: number;
      }

      interface De_Mittwald_V1_Article_ReadableChangeArticleOptions {
        articleId: string;
        info?: {
          articleName?: string;
          articleTemplateName?: string;
          fromArticleTemplate?: boolean;
        };
      }

      interface De_Mittwald_V1_Article_ReadableModifierArticleOptions {
        articleId: string;
        info?: {
          articleName?: string;
          articleTemplateName?: string;
          fromArticleTemplate?: boolean;
        };
        maxArticleCount: number;
      }

      interface De_Mittwald_V1_Article_ArticleTag {
        description: string;
        hexColor: string;
        id: string;
        name: string;
      }

      interface De_Mittwald_V1_Article_ArticleTemplate {
        additionalArticles?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Article_ReadableBookableArticleOptions[];
        addons?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Article_ArticleAddons[];
        attributes?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Article_ArticleAttributes[];
        description?: string;
        id?: string;
        isManagedByDomain: boolean;
        isRecurring: boolean;
        modifierArticles?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Article_ReadableModifierArticleOptions[];
        name: string;
        type:
          | "miscellaneous"
          | "base"
          | "additional"
          | "modifier"
          | "setup_fee";
      }

      interface De_Mittwald_V1_Article_ReadableArticle {
        additionalArticles?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Article_ReadableBookableArticleOptions[];
        addons?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Article_ArticleAddons[];
        articleId: string;
        attributes?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Article_ArticleAttributes[];
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
        modifierArticles?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Article_ReadableModifierArticleOptions[];
        name: string;
        orderable:
          | "forbidden"
          | "internal"
          | "beta_testing"
          | "full"
          | "deprecated";
        picture?: string;
        possibleArticleChanges?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Article_ReadableChangeArticleOptions[];
        price?: number;
        tags?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Article_ArticleTag[];
        template: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Article_ArticleTemplate;
      }

      interface De_Mittwald_V1_Backup_BackupTemplate {
        expirationTime: string;
        ignoredSources?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Backup_IgnoredSources;
      }

      interface De_Mittwald_V1_Backup_DatabaseReference {
        kind: string;
        name: string;
      }

      interface De_Mittwald_V1_Backup_IgnoredSources {
        databases?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Backup_DatabaseReference[];
        files: boolean;
      }

      interface De_Mittwald_V1_Backup_ProjectBackup {
        createdAt?: string;
        deletable: boolean;
        description?: string;
        expiresAt?: string;
        export?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Backup_ProjectBackupExport;
        id: string;
        parentId?: string;
        projectId: string;
        status: string;
      }

      interface De_Mittwald_V1_Contract_AggregateReference {
        aggregate: string;
        domain: string;
        id: string;
      }

      interface De_Mittwald_V1_Contract_Article {
        amount: number;
        articleTemplateId: string;
        description: string;
        id: string;
        name: string;
        unitPrice: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Contract_Price;
      }

      interface De_Mittwald_V1_Contract_Contact {
        address: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Address;
        company?: string;
        emailAddress?: string;
        firstName?: string;
        lastName?: string;
        phoneNumbers?: string[];
        salutation: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Salutation;
        title?: string;
        useFormalTerm?: boolean;
      }

      interface De_Mittwald_V1_Contract_ContractItem {
        activationDate?: string;
        aggregateReference?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Contract_AggregateReference;
        articles: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Contract_Article[];
        contractPeriod: number;
        description: string;
        groupByProjectId?: string;
        invoicingPeriod: number;
        isActivated: boolean;
        isBaseItem: boolean;
        isInclusive?: boolean;
        itemId: string;
        nextPossibleDowngradeDate?: string;
        nextPossibleTerminationDate?: string;
        nextPossibleUpgradeDate?: string;
        orderDate: string;
        replacedByItem?: string;
        tariffChange?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Contract_TariffChange;
        termination?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Contract_Termination;
        totalPrice: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Contract_Price;
      }

      interface De_Mittwald_V1_Contract_Contract {
        additionalItems?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Contract_ContractItem[];
        baseItem: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Contract_ContractItem;
        contractId: string;
        contractNumber: string;
        customerId: string;
        isInvoicingDeactivated?: boolean;
        isInvoicingPaused?: boolean;
        owner: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Contract_Contact;
        termination?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Contract_Termination;
      }

      interface De_Mittwald_V1_Contract_Error {
        message: string;
        type: string;
      }

      interface De_Mittwald_V1_Contract_Price {
        currency: "EUR";
        value: number;
      }

      interface De_Mittwald_V1_Contract_TariffChange {
        executedAtDate?: string;
        newArticles: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Contract_Article[];
        scheduledAtDate: string;
        scheduledByUserId?: string;
        targetDate: string;
      }

      interface De_Mittwald_V1_Contract_Termination {
        reason?: string;
        scheduledAtDate: string;
        scheduledByUserId?: string;
        targetDate: string;
      }

      interface De_Mittwald_V1_Conversation_AggregateReference {
        aggregate: string;
        domain: string;
        id: string;
      }

      interface De_Mittwald_V1_Conversation_Category {
        categoryId: string;
        name: string;
        parentId?: string;
        subCategories?: {
          categoryId: string;
          name: string;
          parentId: string;
        }[];
      }

      interface De_Mittwald_V1_Conversation_Conversation {
        category?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Conversation_Category;
        conversationId: string;
        createdAt: string;
        createdBy?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Conversation_User;
        lastMessageAt?: string;
        lastMessageBy?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Conversation_User;
        relatedTo?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Conversation_AggregateReference;
        relations?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Conversation_AggregateReference[];
        sharedWith?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Conversation_AggregateReference;
        shortId: string;
        status: "open" | "closed" | "answered";
        title: string;
      }

      interface De_Mittwald_V1_Conversation_GetConversationIdResponse {
        conversationId: string;
        shortId: string;
      }

      type De_Mittwald_V1_Conversation_Department =
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

      interface De_Mittwald_V1_Conversation_Error {
        message: string;
        type: string;
      }

      interface De_Mittwald_V1_Conversation_RequestedFile {
        id: string;
        status: "requested";
      }

      type De_Mittwald_V1_Conversation_File =
        | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Conversation_RequestedFile
        | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Conversation_UploadedFile;

      interface De_Mittwald_V1_Conversation_UploadedFile {
        id: string;
        name: string;
        status: "uploaded";
        type: string;
      }

      interface De_Mittwald_V1_Conversation_MessageHistoryItem {
        content: string;
        updatedAt: string;
        updatedBy?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Conversation_User;
      }

      interface De_Mittwald_V1_Conversation_Message {
        conversationId: string;
        createdAt: string;
        createdBy?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Conversation_User;
        files?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Conversation_File[];
        history: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Conversation_MessageHistoryItem[];
        internal?: boolean;
        messageContent?: string;
        messageId: string;
        type: "MESSAGE";
      }

      interface De_Mittwald_V1_Conversation_StatusUpdate {
        conversationId: string;
        createdAt: string;
        internal?: boolean;
        messageContent: string;
        meta?: {
          user?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Conversation_User;
        };
        type: "STATUS_UPDATE";
      }

      interface De_Mittwald_V1_Conversation_User {
        avatarRefId?: string;
        clearName?: string;
        department?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Conversation_Department;
        userId: string;
      }

      interface De_Mittwald_V1_Cronjob_Cronjob {
        active: boolean;
        appId: string;
        createdAt: string;
        description: string;
        destination:
          | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Cronjob_CronjobUrl
          | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Cronjob_CronjobCommand;
        email?: string;
        id: string;
        interval: string;
        latestExecution?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Cronjob_CronjobExecution;
        nextExecutionTime?: string;
        projectId?: string;
        shortId: string;
        updatedAt: string;
      }

      interface De_Mittwald_V1_Cronjob_CronjobCommand {
        interpreter: string;
        parameters?: string;
        path: string;
      }

      interface De_Mittwald_V1_Cronjob_CronjobExecution {
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

      interface De_Mittwald_V1_Cronjob_CronjobRequest {
        active: boolean;
        appId: string;
        description: string;
        destination:
          | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Cronjob_CronjobUrl
          | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Cronjob_CronjobCommand;
        email?: string;
        interval: string;
      }

      interface De_Mittwald_V1_Cronjob_CronjobSpecific {
        active: boolean;
        appId: string;
        createdAt: string;
        description: string;
        destination:
          | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Cronjob_CronjobUrl
          | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Cronjob_CronjobCommand;
        email?: string;
        executions?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Cronjob_CronjobExecution[];
        id: string;
        interval: string;
        nextExecutionTime?: string;
        shortId: string;
        updatedAt: string;
      }

      interface De_Mittwald_V1_Cronjob_CronjobUrl {
        url: string;
      }

      interface De_Mittwald_V1_Customer_Category {
        id: string;
        isPublic: boolean;
        name: string;
        useAgencyDomainPrices: boolean;
        useAgencySslPrices: boolean;
      }

      interface De_Mittwald_V1_Customer_Contact {
        address: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Address;
        company?: string;
        emailAddress?: string;
        firstName?: string;
        lastName?: string;
        phoneNumbers?: string[];
        salutation: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Salutation;
        title?: string;
        useFormalTerm?: boolean;
      }

      interface De_Mittwald_V1_Customer_CustomerMeta {
        avatarRefId?: string;
        customerId: string;
        name: string;
      }

      type De_Mittwald_V1_Customer_Role = "owner" | "member" | "accountant";

      interface De_Mittwald_V1_Customer_Customer {
        avatarRefId?: string;
        categoryId?: string;
        creationDate: string;
        customerId: string;
        customerNumber: string;
        executingUserRoles?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Customer_Role[];
        memberCount: number;
        name: string;
        owner?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Customer_Contact;
        projectCount: number;
        vatId?: string;
        vatIdValidationState?: "valid" | "invalid" | "pending" | "unspecified";
      }

      interface De_Mittwald_V1_Customer_Note {
        author: string;
        creationDate: string;
        id: string;
        isImportant: boolean;
        message: string;
        subject: string;
      }

      interface De_Mittwald_V1_Database_CharacterSettings {
        characterSet: string;
        collation: string;
      }

      interface De_Mittwald_V1_Database_MySqlDatabase {
        characterSettings?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_CharacterSettings;
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

      interface De_Mittwald_V1_Database_MySqlUser {
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

      interface De_Mittwald_V1_Database_PhpMyAdminUrl {
        url: string;
      }

      interface De_Mittwald_V1_Database_MySqlVersion {
        disabled: boolean;
        id: string;
        name: string;
        number: string;
      }

      interface De_Mittwald_V1_Database_RedisDatabase {
        configuration?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Database_RedisDatabaseConfiguration;
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

      interface De_Mittwald_V1_Database_RedisDatabaseConfiguration {
        additionalFlags?: string[];
        maxMemory?: string;
        maxMemoryPolicy?: string;
      }

      interface De_Mittwald_V1_Database_RedisVersion {
        disabled: boolean;
        id: string;
        name: string;
        number: string;
      }

      type De_Mittwald_V1_Dns_RecordCname =
        | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordUnset
        | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordCnameComponent;

      interface De_Mittwald_V1_Dns_RecordCnameComponent {
        fqdn: string;
        settings: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordSettings;
      }

      type De_Mittwald_V1_Dns_RecordCombinedA =
        | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordUnset
        | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_CombinedACustom
        | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_CombinedAManaged;

      type De_Mittwald_V1_Dns_CombinedAManagedAaaaRecord = string;

      type De_Mittwald_V1_Dns_CombinedAManagedARecord = string;

      interface De_Mittwald_V1_Dns_CombinedACustom {
        a: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_CombinedAManagedARecord[];
        aaaa: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_CombinedAManagedAaaaRecord[];
        settings: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordSettings;
      }

      interface De_Mittwald_V1_Dns_CombinedAManaged {
        managedBy?: {
          ingressId: string;
        };
      }

      type De_Mittwald_V1_Dns_RecordMx =
        | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordUnset
        | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordMxManaged
        | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordMxCustom;

      interface De_Mittwald_V1_Dns_RecordMxCustom {
        records: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordMxRecord[];
        settings: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordSettings;
      }

      interface De_Mittwald_V1_Dns_RecordMxManaged {
        managed: boolean;
      }

      interface De_Mittwald_V1_Dns_RecordMxRecord {
        fqdn: string;
        priority: number;
      }

      interface De_Mittwald_V1_Dns_RecordSettings {
        ttl?:
          | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_TtlSeconds
          | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_TtlAuto;
      }

      type De_Mittwald_V1_Dns_RecordTxt =
        | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordUnset
        | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordTxtComponent;

      interface De_Mittwald_V1_Dns_RecordTxtComponent {
        entries: string[];
        settings: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordSettings;
      }

      interface De_Mittwald_V1_Dns_RecordUnset {}

      interface De_Mittwald_V1_Dns_TtlAuto {
        auto: boolean;
      }

      interface De_Mittwald_V1_Dns_TtlSeconds {
        seconds: number;
      }

      interface De_Mittwald_V1_Dns_Zone {
        domain: string;
        id: string;
        recordSet: {
          cname: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordCname;
          combinedARecords: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordCombinedA;
          mx: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordMx;
          txt: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Dns_RecordTxt;
        };
      }

      interface De_Mittwald_V1_Domain_AuthCode {
        expires?: string;
        value: string;
      }

      interface De_Mittwald_V1_Domain_AuthCode2 {
        expires: string;
      }

      interface De_Mittwald_V1_Domain_CreateDomainHandleData {
        adminC?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Domain_HandleField[];
        ownerC: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Domain_HandleField[];
      }

      interface De_Mittwald_V1_Domain_DomainOwnership {
        domain: string;
        id: string;
        projectId: string;
        txtRecord: string;
      }

      interface De_Mittwald_V1_Domain_Domain {
        authCode?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Domain_AuthCode;
        authCode2?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Domain_AuthCode2;
        connected: boolean;
        deleted: boolean;
        domain: string;
        domainId: string;
        handles: {
          adminC?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Domain_HandleReadable;
          ownerC: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Domain_HandleReadable;
        };
        hasAuthCode: boolean;
        nameservers: string[];
        processes?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Domain_Process[];
        projectId: string;
        transferInAuthCode?: string;
        usesDefaultNameserver: boolean;
      }

      interface De_Mittwald_V1_Domain_HandleData {
        handleFields?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Domain_HandleField[];
        handleRef?: string;
      }

      interface De_Mittwald_V1_Domain_HandleField {
        name: string;
        value: string;
      }

      interface De_Mittwald_V1_Domain_HandleReadable {
        current: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Domain_HandleData;
        desired?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Domain_HandleData;
      }

      interface De_Mittwald_V1_Domain_Process {
        error?: string;
        lastUpdate: string;
        processType: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Domain_ProcessType;
        state: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Domain_ProcessState;
        status?: string;
        statusCode?: string;
        transactionId: string;
      }

      type De_Mittwald_V1_Domain_ProcessState =
        | "UNSPECIFIED"
        | "REQUESTED"
        | "FAILED";

      type De_Mittwald_V1_Domain_ProcessType =
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

      type De_Mittwald_V1_Domain_Registrar = "INTERNETX" | "DENIC" | "HEXONET";

      interface De_Mittwald_V1_Domain_TopLevel {
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

      interface De_Mittwald_V1_File_FileMeta {
        friendlyURL: string;
        id: string;
        name: string;
        sizeInBytes: number;
        type: string;
      }

      interface De_Mittwald_V1_File_FileUploadRules {
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

      interface De_Mittwald_V1_Ingress_Ingress {
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
        isDefault: boolean;
        isEnabled: boolean;
        paths: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Ingress_Path[];
        projectId: string;
        tls:
          | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Ingress_TlsAcme
          | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Ingress_TlsCertificate;
      }

      interface De_Mittwald_V1_Ingress_Path {
        path: string;
        target:
          | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Ingress_TargetDirectory
          | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Ingress_TargetUrl
          | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Ingress_TargetInstallation;
      }

      interface De_Mittwald_V1_Ingress_TargetDirectory {
        directory: string;
      }

      interface De_Mittwald_V1_Ingress_TargetInstallation {
        installationId: string;
      }

      interface De_Mittwald_V1_Ingress_TargetUrl {
        url: string;
      }

      interface De_Mittwald_V1_Ingress_TlsAcme {
        acme: boolean;
      }

      interface De_Mittwald_V1_Ingress_TlsCertificate {
        certificateId: string;
      }

      interface De_Mittwald_V1_Invoice_Cancellation {
        cancelledAt: string;
        correctionNumber: string;
        pdfId: string;
        reason?: string;
      }

      interface De_Mittwald_V1_Invoice_ContractInvoiceDefinition {
        contractId: string;
        items: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_ContractItemInvoiceDefinition[];
      }

      interface De_Mittwald_V1_Invoice_ContractItemInvoiceDefinition {
        contractItemId: string;
        isDue?: boolean;
        serviceDate?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_ServiceDate;
        servicePeriod: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_DatePeriod;
        vatRate: number;
      }

      interface De_Mittwald_V1_Invoice_CorrectionDefinition {
        contractItemId: string;
        creditPeriod: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_DatePeriod;
      }

      interface De_Mittwald_V1_Invoice_DatePeriod {
        end: string;
        start: string;
      }

      interface De_Mittwald_V1_Invoice_Error {
        message: string;
        type: string;
      }

      interface De_Mittwald_V1_Invoice_InvoiceItem {
        additionalDescription?: string;
        contractItemId: string;
        description: string;
        id: string;
        price: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_Price;
        reference?: {
          sourceInvoiceId: string;
          sourceInvoiceItemId: string;
        };
        serviceDate?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_ServiceDate;
        servicePeriod?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_DatePeriod;
        vatRate: number;
      }

      interface De_Mittwald_V1_Invoice_Invoice {
        amountPaid: number;
        cancellation?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_Cancellation;
        cancellationOf?: string;
        currency: string;
        customerId: string;
        date: string;
        groups: {
          contractId?: string;
          description: string;
          items: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_InvoiceItem[];
        }[];
        id: string;
        invoiceNumber: string;
        invoiceType: "REGULAR" | "REISSUE" | "CORRECTION" | "CANCELLATION";
        paymentSettings?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_PaymentSettings;
        pdfId: string;
        recipient: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_Recipient;
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

      interface De_Mittwald_V1_Invoice_InvoiceSettings {
        additionalEmailRecipients?: string[];
        id: string;
        invoicePeriod?: number;
        nextInvoiceCheck?: string;
        paymentSettings?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_PaymentSettings;
        printedInvoices?: boolean;
        recipient?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_Recipient;
        recipientSameAsOwner?: boolean;
        targetDay?: number;
      }

      interface De_Mittwald_V1_Invoice_PaymentSettingsDebit {
        accountHolder: string;
        bic: string;
        iban: string;
        method: "debit";
      }

      interface De_Mittwald_V1_Invoice_PaymentSettingsInvoice {
        method: "invoice";
      }

      type De_Mittwald_V1_Invoice_PaymentSettings =
        | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_PaymentSettingsDebit
        | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Invoice_PaymentSettingsInvoice;

      interface De_Mittwald_V1_Invoice_Price {
        currency: "EUR";
        value: number;
      }

      interface De_Mittwald_V1_Invoice_Recipient {
        address: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Address;
        company?: string;
        emailAddress?: string;
        firstName?: string;
        lastName?: string;
        phoneNumbers?: string[];
        salutation: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Salutation;
        title?: string;
        useFormalTerm?: boolean;
      }

      type De_Mittwald_V1_Invoice_ServiceDate = string;

      interface De_Mittwald_V1_Mail_CreateMailAddress {
        address: string;
        isCatchAll: boolean;
        mailbox: {
          enableSpamProtection: boolean;
          password: string;
          quotaInBytes: number;
        };
      }

      interface De_Mittwald_V1_Mail_Deliverybox {
        authenticationEnabled: boolean;
        description: string;
        id: string;
        name: string;
        passwordUpdatedAt: string;
        projectId: string;
        sendingEnabled: boolean;
        updatedAt: string;
      }

      interface De_Mittwald_V1_Mail_Error {
        message: string;
        type: string;
      }

      interface De_Mittwald_V1_Mail_CreateForwardAddress {
        address: string;
        forwardAddresses: string[];
      }

      interface De_Mittwald_V1_Mail_MailAddress {
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

      type De_Mittwald_V1_Membership_CustomerInheritedRoles =
        | "notset"
        | "owner"
        | "member"
        | "accountant";

      interface De_Mittwald_V1_Membership_CustomerInvite {
        avatarRefId: string;
        customerId: string;
        customerName: string;
        id: string;
        information: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_InviteInformation;
        mailAddress: string;
        membershipExpiresAt?: string;
        message?: string;
        role: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerRoles;
      }

      interface De_Mittwald_V1_Membership_CustomerMembership {
        customerId: string;
        expiresAt?: string;
        id: string;
        inviteId: string;
        memberSince?: string;
        role: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerRoles;
        userId: string;
      }

      type De_Mittwald_V1_Membership_CustomerRoles =
        | "owner"
        | "member"
        | "accountant";

      interface De_Mittwald_V1_Membership_InviteInformation {
        invitationToken: string;
        invitedBy: string;
        userId: string;
      }

      interface De_Mittwald_V1_Membership_ProjectInvite {
        id: string;
        information: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_InviteInformation;
        mailAddress: string;
        membershipExpiresAt?: string;
        message?: string;
        projectDescription: string;
        projectId: string;
        role: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectRoles;
      }

      interface De_Mittwald_V1_Membership_ProjectMembership {
        expiresAt?: string;
        id: string;
        inherited: boolean;
        inviteId: string;
        memberSince?: string;
        projectId: string;
        role: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectRoles;
        userId: string;
      }

      type De_Mittwald_V1_Membership_ProjectRoles =
        | "notset"
        | "owner"
        | "emailadmin"
        | "external";

      interface De_Mittwald_V1_Messaging_AggregateReference {
        aggregate: string;
        domain: string;
        id: string;
      }

      interface De_Mittwald_V1_Messaging_Notification {
        createdAt: string;
        id: string;
        read: boolean;
        reference: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Messaging_AggregateReference;
        severity: "success" | "info" | "warning" | "error";
        type: string;
      }

      type De_Mittwald_V1_Messaging_NotificationStatus = "read";

      interface De_Mittwald_V1_Order_ArticleAddons {
        hidden?: boolean;
        key: string;
        type?: string;
        value: string;
        valueMergeType?: "add" | "set";
      }

      interface De_Mittwald_V1_Order_CustomerOrder {
        contractChangeContractId?: string;
        customerId: string;
        dueDate?: string;
        invoicingPeriod: number;
        items: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_OrderItem[];
        offerId?: string;
        orderDate: string;
        orderId: string;
        orderNumber: string;
        profile?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_Profile;
        refLink?: string;
        status: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_OrderStatus;
        summary: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_OrderSummary;
        type: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_OrderType;
      }

      interface De_Mittwald_V1_Order_DomainHandleField {
        name: string;
        value: string;
      }

      interface De_Mittwald_V1_Order_HardwareSpec {
        ram?: number;
        vcpu?: number;
      }

      interface De_Mittwald_V1_Order_MachineTypeSpec {
        machineType?: string;
      }

      interface De_Mittwald_V1_Order_Addons {
        hidden?: boolean;
        key: string;
        value: string;
      }

      interface De_Mittwald_V1_Order_AttributeConfiguration {
        key: string;
        value: string;
      }

      interface De_Mittwald_V1_Order_OrderItem {
        addons?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_Addons[];
        amount: number;
        articleId: string;
        articleTemplateName?: string;
        attributeConfiguration?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_AttributeConfiguration[];
        isInclusive: boolean;
        offerItemId?: string;
        orderItemId: string;
        predefinedDomainAggregateId?: string;
        price: number;
        reference?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Order_Reference;
      }

      interface De_Mittwald_V1_Order_Reference {
        contractItemId?: string;
        offerItemId?: string;
        orderItemId?: string;
      }

      type De_Mittwald_V1_Order_OrderStatus =
        | "NEW"
        | "CONFIRMED"
        | "REJECTED"
        | "ABORTED"
        | "EXECUTED";

      interface De_Mittwald_V1_Order_OrderSummary {
        nonRecurring: number;
        recurring: number;
        summary: number;
      }

      type De_Mittwald_V1_Order_OrderType = "NEW_ORDER" | "CONTRACT_CHANGE";

      interface De_Mittwald_V1_Order_Profile {
        email: string;
        first_name?: string;
        last_name?: string;
        title?: "other" | "mr" | "ms";
        userId: string;
      }

      type De_Mittwald_V1_Policy_Policy = string;

      interface De_Mittwald_V1_Project_AvatarRules {
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

      interface De_Mittwald_V1_Project_MachineType {
        cpu: string;
        memory: string;
        name: string;
      }

      interface De_Mittwald_V1_Project_Project {
        clusterDomain?: string;
        clusterID?: string;
        createdAt: string;
        customerId: string;
        description: string;
        directories: {
          [a: string]: any;
        };
        disableReason?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Project_DisableReason;
        enabled: boolean;
        id: string;
        imageRefId?: string;
        isReady: boolean;
        projectHostingId?: string;
        serverId?: string;
        serverShortId?: string;
        shortId: string;
        spec?:
          | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Project_VisitorSpec
          | MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Project_HardwareSpec;
      }

      interface De_Mittwald_V1_Project_FsApiJwt {
        jwt: string;
      }

      interface De_Mittwald_V1_Project_FilesystemDirectoryListing {
        absolutePath: string;
        isDirectory?: boolean;
        isExecutable?: boolean;
        isFile?: boolean;
        isSymlink?: boolean;
        items?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Project_FilesystemDirectoryListing[];
        name: string;
        size: number;
        target?: string;
      }

      interface De_Mittwald_V1_Project_FilesystemUsagesDisk {
        path?: string;
        totalBytes?: number;
        usedBytes?: number;
      }

      interface De_Mittwald_V1_Project_HardwareSpec {
        cpu: string;
        mem: string;
        storage: string;
      }

      interface De_Mittwald_V1_Project_VisitorSpec {
        storage: string;
        visitors: number;
      }

      interface De_Mittwald_V1_Directus_Domain {
        authCode?: string;
        domainOwnerData?: string;
        name: string;
      }

      interface De_Mittwald_V1_Domain_EmptyResponse {
        error_props: {};
        error_reason: string;
      }

      interface De_Mittwald_V1_Domain_Error {
        message: string;
        type: string;
      }

      interface De_Mittwald_V1_Signup_ApiToken {
        apiTokenId: string;
        createdAt: string;
        description: string;
        expiresAt?: string;
        roles: ("api_read" | "api_write")[];
      }

      interface De_Mittwald_V1_Signup_DeviceInfo {
        browser?: string;
        model?: string;
        os?: string;
        type?: string;
      }

      interface De_Mittwald_V1_Signup_DomainError {
        info?: {};
        message: string;
        name: string;
      }

      interface De_Mittwald_V1_Signup_Location {
        city?: string;
        country?: string;
        ipAddress?: string;
      }

      interface De_Mittwald_V1_Signup_Person {
        firstName: string;
        lastName: string;
        title?: "other" | "mr" | "ms";
      }

      interface De_Mittwald_V1_Signup_Profile {
        avatarRef?: string;
        email?: string;
        mfaDetails?: {
          mfaConfirmed?: boolean;
          mfaInitialized?: boolean;
        };
        passwordUpdatedAt?: string;
        person?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_Person;
        userId?: string;
      }

      interface De_Mittwald_V1_Signup_SshKey {
        algorithm: string;
        comment: string;
        createdAt: string;
        expiresAt?: string;
        fingerprint: string;
        key: string;
        sshKeyId: string;
      }

      interface De_Mittwald_V1_Signup_UserSession {
        created: string;
        device: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_DeviceInfo;
        lastAccess?: string;
        location?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_Location;
        tokenId: string;
      }

      interface De_Mittwald_V1_Common_ValidationError {
        context?: {
          [a: string]: any;
        };
        message: string;
        path: string;
        type: string;
      }

      interface De_Mittwald_V1_Common_ValidationErrors {
        errorObjects: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Common_ValidationError[];
        name: "ValidationError";
      }

      type De_Mittwald_V1_Sshuser_AccessLevel = "full" | "read" | "unspecified";

      type De_Mittwald_V1_Sshuser_AuthType = "password" | "publicKey";

      type De_Mittwald_V1_Sshuser_Authentication =
        | {
            password: string;
          }
        | {
            publicKeys: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_PublicKey[];
          };

      interface De_Mittwald_V1_Sshuser_PublicKey {
        comment: string;
        key: string;
      }

      interface De_Mittwald_V1_Sshuser_SftpUser {
        accessLevel: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_AccessLevel;
        active?: boolean;
        authUpdatedAt: string;
        createdAt: string;
        description: string;
        directories?: string[];
        expiresAt?: string;
        hasPassword: boolean;
        id: string;
        projectId: string;
        publicKeys?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_PublicKey[];
        updatedAt?: string;
        userName: string;
      }

      interface De_Mittwald_V1_Sshuser_SshUser {
        active?: boolean;
        authUpdatedAt: string;
        createdAt: string;
        description: string;
        expiresAt?: string;
        hasPassword: boolean;
        id: string;
        projectId: string;
        publicKeys?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Sshuser_PublicKey[];
        updatedAt?: string;
        userName: string;
      }

      interface De_Mittwald_V1_User_UserFeedback {
        id: string;
        message: string;
        origin: string;
        subject: string;
        vote: number;
      }

      interface De_Mittwald_V1_User_User {
        avatarRef?: string;
        email?: string;
        person: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Signup_Person;
        phoneNumber?: string;
        userId: string;
      }

      interface De_Mittwald_V1_Varnish_ConfigRevision {
        expire?: number;
        files: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Varnish_ConfigFileRef[];
        note?: string;
        revision: number;
        updated: string;
      }

      interface De_Mittwald_V1_Varnish_ConfigTemplate {
        files: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Varnish_ConfigFileRef[];
        isGlobal?: boolean;
        note?: string;
        projectId?: string;
        softwareConfigTemplateId: string;
        softwareTemplateId: string;
        updatedAt?: string;
      }

      interface De_Mittwald_V1_Varnish_ConfigFile {
        content: string;
        meta?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Varnish_ConfigFileMetadata;
      }

      interface De_Mittwald_V1_Varnish_ConfigFileMetadata {
        name: string;
        path?: string;
      }

      interface De_Mittwald_V1_Varnish_ConfigFileRef {
        meta?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Varnish_ConfigFileMetadata;
        refId?: string;
      }

      interface De_Mittwald_V1_Varnish_GlobalConfigTemplate {
        data: string;
        name: string;
        updatedAt: string;
      }

      interface De_Mittwald_V1_Varnish_Software {
        config: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Varnish_SoftwareConfig;
        projectId: string;
        settings?: {
          [a: string]: any;
        };
        softwareId: string;
        softwareTemplateId: string;
        softwareVersion: string;
        updatedAt: string;
      }

      interface De_Mittwald_V1_Varnish_SoftwareConfig {
        configExpiration?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Varnish_ConfigExpiration;
        latestConfigRevision?: number;
        revisions?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Varnish_ConfigRevision[];
      }

      interface De_Mittwald_V1_Varnish_ConfigExpiration {
        maxVersions?: number;
        retentionTime?: number;
      }

      interface De_Mittwald_V1_Varnish_SoftwareSetting {
        name: string;
        value: string;
      }

      interface De_Mittwald_V1_Commons_Error {
        message: string;
        type: string;
      }

      interface De_Mittwald_V1_Commons_ValidationErrorSchema {
        message: string;
        path: string;
        type: string;
        context?: {
          [a: string]: any;
        };
      }

      interface De_Mittwald_V1_Commons_ValidationErrors {
        type: "ValidationError";
        message?: string;
        validationErrors: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_ValidationErrorSchema[];
      }

      interface De_Mittwald_V1_Backup_ProjectBackupExport {
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

      interface De_Mittwald_V1_Backup_ProjectBackupSchedule {
        createdAt?: string;
        description?: string;
        id: string;
        isSystemBackup: boolean;
        projectId: string;
        schedule: string;
        ttl?: string;
        updatedAt?: string;
      }

      type De_Mittwald_V1_Project_DisableReason =
        | "maliciousCode"
        | "illegalContent"
        | "maliciousConduct";

      interface De_Mittwald_V1_Commons_Address {
        street: string;
        houseNumber: string;
        city: string;
        zip: string;
        countryCode: string;
      }

      interface De_Mittwald_V1_Commons_Person {
        firstName: string;
        lastName: string;
        title?: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Commons_Salutation;
      }

      type De_Mittwald_V1_Commons_Salutation = "mr" | "ms" | "other";

      interface De_Mittwald_V1_Project_Server {
        customerId: string;
        description: string;
        id: string;
        imageRefId?: string;
        isReady: boolean;
        machineType: MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Project_MachineType;
        shortId: string;
        storage: string;
      }

      type De_Mittwald_V1_Membership_CustomerInviteList =
        MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerInvite[];

      type De_Mittwald_V1_Membership_CustomerMembershipList =
        MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_CustomerMembership[];

      type De_Mittwald_V1_Membership_EntityTypes = "project" | "customer";

      type De_Mittwald_V1_Membership_IdentifierTypes = "id" | "token";

      type De_Mittwald_V1_Membership_ProjectInviteList =
        MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectInvite[];

      type De_Mittwald_V1_Membership_ProjectMembershipList =
        MittwaldApiV2.Components.Schemas.De_Mittwald_V1_Membership_ProjectMembership[];

      interface De_Mittwald_V1_Database_MySqlCharacterSettings {
        collations: string[];
        name: string;
      }

      type De_Mittwald_V1_Sshuser_EntityTypes = "ssh" | "sftp";
    }

    namespace Parameters {}

    namespace Responses {
      type De_Mittwald_V1_App_GenericResponse = any;

      type De_Mittwald_V1_Contract_GenericResponse = any;

      type De_Mittwald_V1_Customer_GenericResponse = any;

      type De_Mittwald_V1_Customer_FailedPreconditionError = any;

      type De_Mittwald_V1_Datev_TransactionModifiedResponse = any;

      type De_Mittwald_V1_Dns_GenericResponse = any;

      type De_Mittwald_V1_Domain_SuccessResponse = any;

      type De_Mittwald_V1_Invoice_GenericResponse = any;

      type De_Mittwald_V1_Invoice_EmptyResponse = any;

      type De_Mittwald_V1_Mail_EmptyResponse = any;

      type De_Mittwald_V1_Order_DefaultError = any;

      type De_Mittwald_V1_Order_GenericResponse = any;

      type De_Mittwald_V1_Order_NotFoundError = any;

      type De_Mittwald_V1_Domain_DefaultError = any;

      type De_Mittwald_V1_Domain_GenericResponse = any;

      type De_Mittwald_V1_Domain_EmptyResponse = any;

      type De_Mittwald_V1_Domain_NotFoundError = any;

      type De_Mittwald_V1_Domain_ValidationError = any;

      type De_Mittwald_V1_Signup_InternalServerError = any;

      type De_Mittwald_V1_Signup_NoValidAccessTokenError = any;

      type De_Mittwald_V1_Common_RateLimitError = any;

      type De_Mittwald_V1_Signup_RemovingLastOwnerNotAllowedError = any;

      type De_Mittwald_V1_Signup_SecondFactorRequiredError = any;

      type De_Mittwald_V1_Commons_DefaultError = any;

      type De_Mittwald_V1_Commons_NotFoundError = any;

      type De_Mittwald_V1_Commons_ValidationError = any;
    }

    namespace RequestBodies {}
  }

  namespace Definitions {}
}
