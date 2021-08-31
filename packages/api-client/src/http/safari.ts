type Fetch = typeof global.fetch;

// eslint-disable-next-line no-undef
const isSafari = typeof navigator === "object" && navigator.vendor === "Apple Computer, Inc.";

/**
 * Safari wraps the requests in body into a readable stream
 * which causes trouble during request mocking.
 */
export const patchedFetchForSafari: Fetch = async (input, init) => {
    if (isSafari && typeof input === "object" && ["POST", "PUT", "PATCH", "DELETE"].includes(input.method)) {
        const clonedInput = input.clone();
        const body = await clonedInput.text();
        // eslint-disable-next-line no-undef
        return fetch(input, { ...clonedInput, body });
    }
    // eslint-disable-next-line no-undef
    return fetch(input, init);
};
