import deepFreezeLib from "another-deep-freeze";
import { ReadonlyDeep } from "type-fest";
export { ReadonlyDeep } from "type-fest";

type DeepFreeze = <T>(subject: T) => ReadonlyDeep<T>;

const deepFreeze = deepFreezeLib.default as DeepFreeze;

export default deepFreeze;
