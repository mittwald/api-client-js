import {
  makeGhost,
  type MaybeReactAsyncProxy,
} from "@mittwald/react-async-proxy";

export const CustomerProxy = makeGhost(Models.Customer);
export type CustomerProxy = MaybeReactAsyncProxy<Models.Customer>;

export const CustomerListQueryProxy = makeGhost(Models.CustomerListQuery);
export type CustomerListQueryProxy =
  MaybeReactAsyncProxy<Models.CustomerListQuery>;
