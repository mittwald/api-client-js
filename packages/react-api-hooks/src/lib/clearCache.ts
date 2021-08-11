import { executionSubscriber } from "./ExecutionSubscriber";

export const clearCache = (): void => executionSubscriber.clearCache();

export default clearCache;
