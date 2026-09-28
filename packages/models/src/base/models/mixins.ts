/**
 * Zero-dependency capability mixins (ADR-0004). They bolt a data payload onto
 * an identity-chain base (a {@link BaseModel}/{@link ReferenceModel} subclass)
 * while preserving native `instanceof` across the whole prototype chain.
 *
 * Each mixin only contributes a typed marker (`declare readonly …`); the
 * concrete class re-declares and assigns its own field(s) and threads the base
 * constructor arguments through `super(...)`. See
 * `docs/adr/0004-mixin-functions-instead-of-polytype.md`.
 */

// A base-class expression a mixin can extend. `...args: any[]` is required so the
// mixin can sit in front of bases with differing constructor signatures.
export type Ctor<T = object> = new (...args: any[]) => T;

/**
 * Bolt a readonly `data: TData` onto `Base`.
 *
 * @example
 *   export class TldCommon extends WithData<TldData>()(Tld) {
 *     public override readonly data: TldData;
 *     public constructor(data: TldData) {
 *       super(data.tld);
 *       this.data = data;
 *     }
 *   }
 */
export function WithData<TData>() {
  return function <TBase extends Ctor>(Base: TBase) {
    abstract class WithDataModel extends Base {
      declare readonly data: TData;
    }
    return WithDataModel;
  };
}

/**
 * Bolt readonly `items`/`totalCount` onto `Base` (the list counterpart of
 * {@link WithData}). Mirrors the shape of `ListDataModel`.
 */
export function WithListData<TItem>() {
  return function <TBase extends Ctor>(Base: TBase) {
    abstract class WithListDataModel extends Base {
      declare readonly items: readonly TItem[];
      declare readonly totalCount: number;
    }
    return WithListDataModel;
  };
}
