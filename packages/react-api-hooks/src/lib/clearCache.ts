import { executionSubscriber } from "@mittwald/awesome-node-utils/funcs/ExecutionSubscriber";

export const clearCache = (): void => executionSubscriber.clearCache();

export default clearCache;
