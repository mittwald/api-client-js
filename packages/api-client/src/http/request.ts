import { URLSearchParams } from 'url';

/**
 * Our wonderfull client is generates from a list of query params a comma seperated list and will crash the api gateway.
 * We have to transform the query to URLSearchParams to prevent this issue.
 *
 * This stuff fixes the ky url from this:
 * https://api.dev.mittwald.systems/v2/internal/products/articles/?tags=22d4f,3d00f923
 * To this:
 * https://api.dev.mittwald.systems/v2/internal/products/articles/?tags=22d4f&tags=3d00f923
 * @param query
 */
export const convertQueryToUrlSerachParams = (query?: any): URLSearchParams => {
    const params = new URLSearchParams();
    for (const key of Object.keys(query)) {
        if (typeof query[key] === "object") {
            //TODO: Possible bug: When array has one item, gateway may transform it into string. Has to be checked after deploy (test works). Just duplicate the entry? KEKW
            for (const value of query[key]) {
                params.append(key, value);
            }
        } else {
            params.append(key, query[key]);
        }
    }
    return params;
}
