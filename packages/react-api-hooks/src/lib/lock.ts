import AsyncLock from "async-lock";

/**
 * Acquires a lock and returns a function for releasing the lock.
 *
 * ```typescript
 * const release = await acquireLock("doFoo", lock);
 *
 * try {
 *   // some locked code here
 * } finally {
 *     release();
 * }
 * ```
 *
 * @param key - key used for locking
 * @param lock - The AsyncLock instance to be used (see https://www.npmjs.com/package/async-lock)
 * @returns A promise which resolves to the release function
 */
export const acquireLock = (key: string, lock: AsyncLock): Promise<() => void> =>
    new Promise((res, rej) => {
        lock.acquire(key, (done) => {
            res(done);
        }).catch(rej);
    });
