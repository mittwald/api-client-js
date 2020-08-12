import * as Client from "./Client";
import { mapHeaders } from "./headers";

export const mapResponse = async (response: Response): Promise<Client.Response> => {
    let content: any;

    try {
        content = await response.json();
    } catch (err) {
        // response might be empty
    }

    return {
        status: response.status,
        content,
        header: mapHeaders(response.headers),
    };
};
