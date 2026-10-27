import {
  ApiClientOptions,
  AxiosHeaders,
  CreateAxiosDefaults,
  withAccessToken,
  withEventConsistencyHandling,
} from "@mittwald/api-client-commons";
import { isBrowser } from "browser-or-node";
import MittwaldApiV3NextClient from "../generated/v3-next/client.js";
import { MittwaldAPIClientVersion } from "../version.js";

export type { MittwaldAPIV3Next } from "../generated/v3-next/types.js";

/** Options accepted by the `MittwaldAPIClient` factories. */
export type MittwaldAPIClientOptions = ApiClientOptions;

const defaultUserAgent = "mittwald-api-client/" + MittwaldAPIClientVersion;

export class MittwaldAPIClient extends MittwaldApiV3NextClient {
  private readonly apiToken: string | undefined;

  private constructor(
    apiToken?: string,
    options: MittwaldAPIClientOptions = {},
  ) {
    super(MittwaldAPIClient.createAxiosDefaults(), options);
    this.apiToken = apiToken;
    this.setupInterceptors();
  }

  private static createAxiosDefaults(): CreateAxiosDefaults {
    const headers: Partial<AxiosHeaders> = {};

    // Setting user agent is not allowed in browser environment
    if (!isBrowser) {
      headers["User-Agent"] = defaultUserAgent;
    }

    return {
      baseURL: "https://api.mittwald.de/",
      headers: headers,
    };
  }

  private setupInterceptors(): void {
    withAccessToken(this, this.apiToken);
  }

  public static newUnauthenticated(
    options?: MittwaldAPIClientOptions,
  ): MittwaldAPIClient {
    return new MittwaldAPIClient(undefined, options);
  }

  public static newWithToken(
    apiToken: string,
    options?: MittwaldAPIClientOptions,
  ): MittwaldAPIClient {
    return new MittwaldAPIClient(apiToken, options);
  }

  public withEventConsistencyHandling() {
    withEventConsistencyHandling(this);
    return this;
  }
}

export default MittwaldAPIClient;
