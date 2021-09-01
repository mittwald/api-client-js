import { executionSubscriber } from "./ExecutionSubscriber";

export const refreshCache = (): void => executionSubscriber.refreshAllCache();
export const refreshCacheByUrl = (url: string): void => executionSubscriber.refreshCacheByTag(url);

export default refreshCache;
