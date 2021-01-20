import * as Client from "./Client";
import { mapHeaders } from "./headers";
import debug from "../debug";

const d = debug.extend("mapResponse");

export const getMediaType = (headers: Headers): string | undefined => {
    const mappedHeaders = mapHeaders(headers);

    const rawMediaType = mappedHeaders["content-type"];
    // when header includes meta data like "base64; charset=UTF-8"
    return rawMediaType ? rawMediaType.split(";")[0] : undefined;
};

export const mapBody = async (body: Body, headers: Headers): Promise<any> => {
    const mediaType = getMediaType(headers);

    let content: any;

    if (body.body) {
        try {
            switch (mediaType?.toLowerCase()) {
                case "application/json":
                    content = await body.json();
                    break;
                default:
                    content = await body.text();
                    break;
            }
        } catch (err) {
            d("Error while decoding body of response: %O", err);
        }
    }

    return content;
};

export const mapResponse = async (response: Response): Promise<Client.Response> => {
    const mediaType = getMediaType(response.headers);

    return {
        status: response.status,
        mediaType,
        content: await mapBody(response, response.headers),
        headers: mapHeaders(response.headers),
    };
};
