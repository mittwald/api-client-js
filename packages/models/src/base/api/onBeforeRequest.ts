import type { ApiClientRequest } from "./types";

export type OnBeforeRequestHandler = (request: ApiClientRequest) => void;

const defaultOnBeforeRequestHandler = new Set<OnBeforeRequestHandler>();

export const registerDefaultOnBeforeRequestHandler = (
  handler: OnBeforeRequestHandler,
): OnBeforeRequestHandler => {
  defaultOnBeforeRequestHandler.add(handler);
  return handler;
};

export const executeDefaultOnBeforeRequestHandlers = (
  config: ApiClientRequest,
): void => {
  defaultOnBeforeRequestHandler.forEach((handler) => {
    handler(config);
  });
};
