/**
 * Creates URLSearchParams while converting array values into new params
 */
export const convertQueryToUrlSearchParams = (query?: any): URLSearchParams | undefined => {
    if (query === undefined || query === null) {
        return undefined;
    }

    if (query instanceof URLSearchParams) {
        return query;
    }

    if (typeof query === "string") {
        return new URLSearchParams(query);
    }

    if (typeof query === "object") {
        const searchParams = new URLSearchParams();

        for (const [key, value] of Object.entries(query)) {
            if (Array.isArray(value)) {
                for (const arrayItem of value) {
                    searchParams.append(key, arrayItem);
                }
            } else {
                searchParams.append(
                    key,
                    typeof value === "string" || typeof value === "number" || typeof value === "boolean"
                        ? value.toString()
                        : JSON.stringify(value),
                );
            }
        }

        return searchParams;
    }

    throw new Error("Unexpected query parameter type");
};
