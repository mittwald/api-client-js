import * as Client from "./Client";
import { mapHeaders } from "./headers";

export const mapResponse = async (response: Response): Promise<Client.Response> => {
    return {
        status: response.status,
        content: response.bodyUsed === false ? undefined : await response.json(),
        header: mapHeaders(response.headers),
    };
};
