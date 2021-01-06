import * as Client from "./Client";
import { mapHeaders } from "./headers";
import debug from "../debug";

const d = debug.extend("mapResponse");

export const mapResponse = async (response: Response): Promise<Client.Response> => {
    const headers = mapHeaders(response.headers);

    const rawMediaType = headers["content-type"];
    // when header includes meta data like "base64; charset=UTF-8"
    const mediaType = rawMediaType ? rawMediaType.split(";")[0] : undefined;

    d("Headers: %O", headers);

    let content: any;

    if (response.body) {
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
            d("Error while decoding body of response: %O", err);
        }
    }

    return {
        status: response.status,
        mediaType,
        content,
        headers,
    };
};
