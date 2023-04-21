import MittwaldApiClientV2 from "./generated/v2/client.js";
import ApiClientError from "@mittwald/api-client-commons/dist/core/ApiClientError.js";

export * from "./generated/v2/types";

export class MittwaldApiClient extends MittwaldApiClientV2 {
  private readonly apiToken: string | undefined;

  private constructor(apiToken?: string) {
    super({
      baseURL: "https://api.mittwald.de/",
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

  public static newUnauthenticated(): MittwaldApiClient {
    return new MittwaldApiClient();
  }

  public static newWithToken(apiToken: string): MittwaldApiClient {
    return new MittwaldApiClient(apiToken);
  }

  public static async newWithCredentials(
    email: string,
    password: string,
  ): Promise<MittwaldApiClient> {
    const client = MittwaldApiClient.newUnauthenticated();

    const authResult = await client.signupApiAuthenticate({
      data: {
        email,
        password,
      },
    });

    if (authResult.status === 200) {
      return new MittwaldApiClient(authResult.data.token);
    }

    throw ApiClientError.fromResponse("Login failed", authResult);
  }
}

export default MittwaldApiClient;
