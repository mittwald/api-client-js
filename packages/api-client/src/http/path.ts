import { objectEntries } from "@mittwald/awesome-node-utils/object/entries";
import { match } from "path-to-regexp";
import parsePath from "parse-path";

/**
 * Set path params for a Swagger/OpenAPI formatted path (like /path/with/{foo}/param)
 * @see https://swagger.io/docs/specification/describing-parameters/#path-parameters
 */
export const setPathParams = (path: string, params?: object): string => {
    let finalPath = path;
    objectEntries(params || {}).forEach(([key, value]) => {
        finalPath = finalPath.replace(`{${key}}`, encodeURIComponent(value));
    });
    return finalPath.startsWith("/") ? finalPath.substring(1) : finalPath;
};

const convertPathParam = (openApiPathParam: string): string => `:${openApiPathParam.slice(1, -1)}`;

type ParamsMatcher = (pathOrUrl: string) => object | undefined;

/**
 * Generates a `ParamsMatcher` which can get the values of path params
 */
export const buildPathParamsMatcher = (pathOrUrl: string): ParamsMatcher => {
    const { pathname } = parsePath(pathOrUrl);
    const convertedPath = pathname.replace(/{(.*?)}/g, convertPathParam);
    const matcher = match(convertedPath, { decode: decodeURIComponent });

    return (pathOrUrlToParse: string): object | undefined => {
        const { pathname } = parsePath(pathOrUrlToParse);
        const matchResult = matcher(pathname);
        return matchResult ? matchResult.params : undefined;
    };
};
