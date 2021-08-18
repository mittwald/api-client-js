import { executionSubscriber } from "./ExecutionSubscriber";

export const clearCache = (): void => executionSubscriber.clearCache();
export const clearCacheByUrl = (url: string): void => executionSubscriber.refreshCacheByTag(url);

export default clearCache;
