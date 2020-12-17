import * as Client from "./Client";
import { mapHeaders } from "./headers";
import debug from "../debug";

const d = debug.extend("mapResponse");

export const mapResponse = async (response: Response): Promise<Client.Response> => {
    const headers = mapHeaders(response.headers);
    const mediaType = headers["content-type"];

    d("Headers: %O", headers);

    let content: any;

    try {
        switch (mediaType) {
            case "application/json":
                content = await response.json();
                break;
            default:
                content = await response.text();
                break;
        }
    } catch (err) {
        // response might be empty
        d("Error: %O", err);
    }

    return {
        status: response.status,
        mediaType,
        content,
        headers,
    };
};
