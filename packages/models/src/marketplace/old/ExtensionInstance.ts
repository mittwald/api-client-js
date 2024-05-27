import assertStatus from "@mittwald/api-client/dist/types/assertStatus";
import { mittwaldApi, MittwaldApi } from "../../api/Mittwald";
import { Signup } from "../signup/Signup";
import Contributor from "./Contributor";
import Extension from "./Extension";

export type ExtensionInstanceApiData =
  MittwaldApi.Components.Schemas.De_Mittwald_V1_Marketplace_ExtensionInstance;

export type AddToContextValues =
  MittwaldApi.Paths.V2_Extension_Instances.Post.Parameters.RequestBody;

interface ConsentToScopeValues {
  consentedScopes: string[];
}

class ExtensionInstance {
  public readonly data: ExtensionInstanceApiData;
  public readonly id: string;
  public readonly extensionId: string;
  public readonly isDisabled: boolean;
  public readonly hasProjectContext: boolean;
  public readonly hasCustomerContext: boolean;

  public constructor(data: ExtensionInstanceApiData) {
    this.data = Object.freeze(data);
    this.id = data.id;
    this.extensionId = data.extensionId;
    this.isDisabled = data.disabled;
    this.hasProjectContext = data.aggregateReference.domain === "project";
    this.hasCustomerContext = data.aggregateReference.domain === "customer";
  }

  public static async addToContext(
    values: AddToContextValues,
  ): Promise<string> {
    const response = await mittwaldApi.extensionCreateExtensionInstance.request(
      {
        requestBody: { ...values },
      },
    );

    assertStatus(response, 201);

    return response.content.id;
  }

  public static async addToCustomerContext(
    values: Omit<AddToContextValues, "context">,
  ): Promise<string> {
    return await ExtensionInstance.addToContext({
      ...values,
      context: "customer",
    });
  }

  public static async addToProjectContext(
    values: Omit<AddToContextValues, "context">,
  ): Promise<string> {
    return await ExtensionInstance.addToContext({
      ...values,
      context: "project",
    });
  }

  public static useLoadById(extensionInstanceId: string): ExtensionInstance {
    const data = mittwaldApi.extensionGetExtensionInstance
      .getResource({ path: { extensionInstanceId } })
      .useWatchData();

    return new ExtensionInstance(data);
  }

  public async consentToScopes(values: ConsentToScopeValues): Promise<void> {
    const response =
      await mittwaldApi.extensionConsentToExtensionScopes.request({
        path: { extensionInstanceId: this.id },
        requestBody: { ...values },
      });

    assertStatus(response, 204);
  }

  public async enable(): Promise<void> {
    const response = await mittwaldApi.extensionEnableExtensionInstance.request(
      { path: { extensionInstanceId: this.id } },
    );

    assertStatus(response, 204);
  }

  public async disable(): Promise<void> {
    const response =
      await mittwaldApi.extensionDisableExtensionInstance.request({
        path: { extensionInstanceId: this.id },
      });

    assertStatus(response, 204);
  }

  public async delete(): Promise<void> {
    const response = await mittwaldApi.extensionDeleteExtensionInstance.request(
      {
        path: { extensionInstanceId: this.id },
      },
    );

    assertStatus(response, 204);
  }

  public useExtension(): Extension {
    return Extension.useLoadById(this.extensionId);
  }

  public useContributor(): Contributor {
    return this.useExtension().useContributor();
  }

  public static async replaceFrontendComponentUrlParams(
    url: string,
  ): Promise<string> {
    const accessTokenRetrievalKeyData =
      await Signup.getAccessTokenRetrievalKey();

    return url
      .replace(":userId", accessTokenRetrievalKeyData.userId)
      .replace(
        ":accessTokenRetrievalKey",
        accessTokenRetrievalKeyData.accessTokenRetrievalKey,
      );
  }
}

export default ExtensionInstance;
