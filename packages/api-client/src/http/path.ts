import { objectEntries } from "@mittwald/awesome-node-utils/object/entries";

export const setPathParams = (path: string, params?: object): string => {
    let finalPath = path;
    objectEntries(params || {}).forEach(([key, value]) => {
        finalPath = finalPath.replace(`{${key}}`, encodeURIComponent(value));
    });
    return finalPath.startsWith("/") ? finalPath.substring(1) : finalPath;
};
