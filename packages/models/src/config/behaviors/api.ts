import { MittwaldAPIV2Client } from "@mittwald/api-client";
import { config } from "../config.js";
import { apiProjectBehaviors } from "../../project/Project/behaviors/index.js";
import { apiServerBehaviors } from "../../server/Server/behaviors/index.js";
import { apiCustomerBehaviors } from "../../customer/Customer/behaviors/index.js";
import { apiIngressBehaviors } from "../../domain/Ingress/behaviors/index.js";
import { apiAppInstallationBehaviors } from "../../app/AppInstallation/behaviors/index.js";
import { apiSessionBehaviors } from "../../user/Session/behaviors/index.js";

class ApiSetupState {
  private _client: MittwaldAPIV2Client | undefined;

  public setupWithClient(client: MittwaldAPIV2Client) {
    if (this._client !== undefined) {
      throw new Error(
        "API already setup. If you want to operate on the API client use api.client.",
      );
    }
    this._client = client;

    config.behaviors.project = apiProjectBehaviors(client);
    config.behaviors.server = apiServerBehaviors(client);
    config.behaviors.customer = apiCustomerBehaviors(client);
    config.behaviors.ingress = apiIngressBehaviors(client);
    config.behaviors.appInstallation = apiAppInstallationBehaviors(client);
    config.behaviors.session = apiSessionBehaviors(client);
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
