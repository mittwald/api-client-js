import {
  ApiClientOptions,
  ApiClientError,
  AxiosHeaders,
  CreateAxiosDefaults,
  withAccessToken,
  withEventConsistencyHandling,
} from "@mittwald/api-client-commons";
import MittwaldApiV2Client from "../generated/v2/client.js";
import { MittwaldAPIClientVersion } from "../version.js";
import { isBrowser } from "browser-or-node";

export type { MittwaldAPIV2 } from "../generated/v2/types.js";

/** Options accepted by the `MittwaldAPIClient` factories. */
export type MittwaldAPIClientOptions = ApiClientOptions;

const defaultUserAgent = "mittwald-api-client/" + MittwaldAPIClientVersion;

export class MittwaldAPIClient extends MittwaldApiV2Client {
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

  public static async newWithCredentials(
    email: string,
    password: string,
    options?: MittwaldAPIClientOptions,
  ): Promise<MittwaldAPIClient> {
    const client = MittwaldAPIClient.newUnauthenticated(options);

    const authResult = await client.user.authenticate({
      data: {
        email,
        password,
      },
    });

    if (authResult.status === 200) {
      return new MittwaldAPIClient(authResult.data.token, options);
    }

    throw ApiClientError.fromResponse("Login failed", authResult);
  }

  public withEventConsistencyHandling() {
    withEventConsistencyHandling(this);
    return this;
  }
}

export default MittwaldAPIClient;
