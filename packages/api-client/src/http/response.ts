import { mapHeaders } from "./headers";
import * as Client from "./Client";

export const mapResponse = async (response: Response): Promise<Client.Response> => {
    return {
        status: response.status,
        content: await response.json(),
        header: mapHeaders(response.headers),
    };
};
