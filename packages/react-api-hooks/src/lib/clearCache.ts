import { executionSubscriber } from "./ExecutionSubscriber";

export const clearCache = (): void => executionSubscriber.refreshAllCache();
export const clearCacheByUrl = (url: string): void => executionSubscriber.refreshCacheByTag(url);

export default clearCache;
