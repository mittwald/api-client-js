import { apiResourceStore } from "../apiResourceStore";

export const refreshCache = (): void => apiResourceStore.findByTag("*").forEach((r) => r.reload());
export const refreshCacheByUrl = (url: string): void => apiResourceStore.findByTag(url).forEach((r) => r.reload());

export default refreshCache;
