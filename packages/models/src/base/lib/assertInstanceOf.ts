import type { AbstractClass } from "type-fest";
import type { Class } from "@sindresorhus/is";

import invariant from "tiny-invariant";

export function assertInstanceOf<T extends AbstractClass<any> | Class<any>>(
  instance: InstanceType<any>,
  type: T,
): asserts instance is InstanceType<T> {
  invariant(
    instance instanceof type,
    `Expected value which is \`${type.name}\`, received value of type \`${instance.constructor.name}\`.`,
  );
}
