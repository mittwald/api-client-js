import { MittwaldAPIV2Client } from "@mittwald/api-client";
import { config } from "../config.js";
import { apiProjectBehaviors } from "../../project/Project/behaviors/index.js";
import { apiServerBehaviors } from "../../server/Server/behaviors/index.js";
import { apiCustomerBehaviors } from "../../customer/Customer/behaviors/index.js";
import { apiIngressBehaviors } from "../../domain/Ingress/behaviors/index.js";
import { apiAppInstallationBehaviors } from "../../app/AppInstallation/behaviors/index.js";
import { addUrlTagToProvideReactCache } from "../../react/index.js";
import { apiArticleBehaviors } from "../../article/Article/behaviors/index.js";
import { apiContractBehaviors } from "../../contract/Contract/behaviors/index.js";
import { apiContractItemBehaviors } from "../../contract/ContractItem/behaviors/index.js";
import { apiAppBehaviors } from "../../app/App/behaviors/api.js";
import { apiAppVersionBehaviors } from "../../app/AppVersion/behaviors/index.js";
import { apiSystemSoftwareBehaviors } from "../../app/SystemSoftware/behaviors/index.js";
import { apiSystemSoftwareVersionBehaviors } from "../../app/SystemSoftwareVersion/behaviors/index.js";
import { apiInvoiceSettingsBehaviors } from "../../customer/InvoiceSettings/behaviors/index.js";
import { apiUserBehaviors } from "../../user/User/behaviors/index.js";
import { apiInvoiceBehaviors } from "../../invoice/Invoice/behaviors/index.js";
import { apiNotificationBehaviors } from "../../notification/Notification/behaviors/index.js";
import { apiConversationBehaviors } from "../../conversation/Conversation/behaviors/index.js";
import { apiExtensionBehaviors } from "../../extension/Extension/behaviors/index.js";
import { apiExtensionInstanceBehaviors } from "../../extension/ExtensionInstance/behaviors/index.js";
import { apiFileBehaviors } from "../../file/File/behaviors/index.js";
import { apiCustomerMembershipBehaviors } from "../../customer/CustomerMembership/behaviors/index.js";
import { apiProjectMembershipBehaviors } from "../../project/ProjectMembership/behaviors/index.js";

class ApiSetupState {
  private _client: MittwaldAPIV2Client | undefined;

  public setupWithClient(client: MittwaldAPIV2Client) {
    if (this._client !== undefined) {
      throw new Error(
        "API already setup. If you want to operate on the API client use api.client.",
      );
    }
    this._client = client;
    this._client.defaultRequestOptions.onBeforeRequest =
      addUrlTagToProvideReactCache;

    config.behaviors.app = apiAppBehaviors(client);
    config.behaviors.appInstallation = apiAppInstallationBehaviors(client);
    config.behaviors.appVersion = apiAppVersionBehaviors(client);
    config.behaviors.article = apiArticleBehaviors(client);
    config.behaviors.contract = apiContractBehaviors(client);
    config.behaviors.contractItem = apiContractItemBehaviors(client);
    config.behaviors.conversation = apiConversationBehaviors(client);
    config.behaviors.customer = apiCustomerBehaviors(client);
    config.behaviors.customerMembership =
      apiCustomerMembershipBehaviors(client);
    config.behaviors.extension = apiExtensionBehaviors(client);
    config.behaviors.extensionInstance = apiExtensionInstanceBehaviors(client);
    config.behaviors.file = apiFileBehaviors(client);
    config.behaviors.ingress = apiIngressBehaviors(client);
    config.behaviors.invoice = apiInvoiceBehaviors(client);
    config.behaviors.invoiceSettings = apiInvoiceSettingsBehaviors(client);
    config.behaviors.notification = apiNotificationBehaviors(client);
    config.behaviors.project = apiProjectBehaviors(client);
    config.behaviors.projectMembership = apiProjectMembershipBehaviors(client);
    config.behaviors.server = apiServerBehaviors(client);
    config.behaviors.systemSoftware = apiSystemSoftwareBehaviors(client);
    config.behaviors.systemSoftwareVersion =
      apiSystemSoftwareVersionBehaviors(client);
    config.behaviors.user = apiUserBehaviors(client);
  }

  public setupWithApiToken(apiToken: string) {
    return this.setupWithClient(MittwaldAPIV2Client.newWithToken(apiToken));
  }

  public setupUnauthenticated() {
    return this.setupWithClient(MittwaldAPIV2Client.newUnauthenticated());
  }

  public get client(): MittwaldAPIV2Client {
    if (!this._client) {
      throw new Error("Could not get client. Behavior not initialized.");
    }
    return this._client;
  }

  public get defaults(): (typeof this.client)["axios"]["defaults"] {
    return this.client.axios.defaults;
  }

  public get interceptors(): (typeof this.client)["axios"]["interceptors"] {
    return this.client.axios.interceptors;
  }
}

export const api = new ApiSetupState();
