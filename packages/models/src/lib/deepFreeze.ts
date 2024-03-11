import deepFreezeLib from "another-deep-freeze";
import type { ReadonlyDeep } from "type-fest";
export type { ReadonlyDeep } from "type-fest";

type DeepFreeze = <T>(subject: T) => ReadonlyDeep<T>;

// eslint-disable-next-line
const deepFreeze = (deepFreezeLib as any).default as DeepFreeze;

export default deepFreeze;
