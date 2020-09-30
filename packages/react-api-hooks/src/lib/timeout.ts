/**
 * Creates a promise that is resolved after the given time (milliseconds).
 *
 * @param ms - number of milliseconds to wait.
 */
export const timeout = (ms: number): Promise<void> =>
    new Promise((res) => {
        setTimeout(res, ms);
    });

/**
 * Alias for [[timeout]]
 */
export const sleep = timeout;
