import { ApiClientError } from "@mittwald/api-client-commons";
import MittwaldApiV2Client from "./generated/v2/client.js";
import { MittwaldAPIClientVersion } from "./version.js";
export type { MittwaldAPIV2 } from "./generated/v2/types.js";

/** Options for the mittwald API client. */
export interface MittwaldAPIClientOptions {
  /**
   * The user agent to use for requests. If omitted, this will default to
   * `mittwald-api-client/VERSION`, with `VERSION` being the respective build
   * version.
   */
  userAgent: string;
}

const defaultOpts: MittwaldAPIClientOptions = {
  userAgent: "mittwald-api-client/" + MittwaldAPIClientVersion,
};

export class MittwaldAPIClient extends MittwaldApiV2Client {
  private readonly apiToken: string | undefined;

  private constructor(
    apiToken: string | undefined,
    opts: Partial<MittwaldAPIClientOptions>,
  ) {
    const optsWithDefaults = { ...defaultOpts, ...opts };

    super({
      baseURL: "https://api.mittwald.de/",
      headers: {
        "User-Agent": optsWithDefaults.userAgent,
      },
    });
    this.apiToken = apiToken;
    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.axios.interceptors.request.use((conf) => {
      const token = this.apiToken;
      if (token) {
        conf.headers.set("x-access-token", token);
      }
      return conf;
    });
  }

  public static newUnauthenticated(
    opts: Partial<MittwaldAPIClientOptions> = {},
  ): MittwaldAPIClient {
    return new MittwaldAPIClient(undefined, opts);
  }

  public static newWithToken(
    apiToken: string,
    opts: Partial<MittwaldAPIClientOptions> = {},
  ): MittwaldAPIClient {
    return new MittwaldAPIClient(apiToken, opts);
  }

  public static async newWithCredentials(
    email: string,
    password: string,
    opts: Partial<MittwaldAPIClientOptions> = {},
  ): Promise<MittwaldAPIClient> {
    const client = MittwaldAPIClient.newUnauthenticated();

    const authResult = await client.user.authenticate({
      data: {
        email,
        password,
      },
    });

    if (authResult.status === 200) {
      return new MittwaldAPIClient(authResult.data.token, opts);
    }

    throw ApiClientError.fromResponse("Login failed", authResult);
  }
}

export default MittwaldAPIClient;
