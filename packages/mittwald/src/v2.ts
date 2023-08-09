import { ApiClientError } from "@mittwald/api-client-commons";
import MittwaldApiV2Client from "./generated/v2/client.js";
import { MittwaldAPIClientVersion } from "./version.js";
export type { MittwaldAPIV2 } from "./generated/v2/types.js";

const defaultUserAgent = "mittwald-api-client/" + MittwaldAPIClientVersion;

export class MittwaldAPIClient extends MittwaldApiV2Client {
  private readonly apiToken: string | undefined;

  private constructor(apiToken?: string) {
    super({
      baseURL: "https://api.mittwald.de/",
      headers: {
        "User-Agent": defaultUserAgent,
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

  public static newUnauthenticated(): MittwaldAPIClient {
    return new MittwaldAPIClient();
  }

  public static newWithToken(apiToken: string): MittwaldAPIClient {
    return new MittwaldAPIClient(apiToken);
  }

  public static async newWithCredentials(
    email: string,
    password: string,
  ): Promise<MittwaldAPIClient> {
    const client = MittwaldAPIClient.newUnauthenticated();

    const authResult = await client.user.authenticate({
      data: {
        email,
        password,
      },
    });

    if (authResult.status === 200) {
      return new MittwaldAPIClient(authResult.data.token);
    }

    throw ApiClientError.fromResponse("Login failed", authResult);
  }
}

export default MittwaldAPIClient;
