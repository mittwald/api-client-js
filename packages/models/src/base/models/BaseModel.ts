import type { AbstractClass, Class } from "type-fest";

import { assertInstanceOf } from "../lib/assertInstanceOf";

export abstract class BaseModel {
  public assertType<T extends AbstractClass<any> | Class<any>>(
    type: T,
  ): asserts this is InstanceType<T> {
    assertInstanceOf(this, type);
  }

  public asType<T extends AbstractClass<any> | Class<any>>(
    type: T,
  ): InstanceType<T> {
    this.assertType(type);
    return this;
  }

  public isOfType<T extends AbstractClass<any> | Class<any>>(
    type: T,
  ): this is InstanceType<T> {
    return this instanceof type;
  }
}
