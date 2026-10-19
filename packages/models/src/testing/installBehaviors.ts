import type { Behaviors } from "../config/config.js";

import { config } from "../config/config.js";

export type FakeBehaviors = {
  [K in keyof Behaviors]?: Partial<Behaviors[K]>;
};

function installBehavior<K extends keyof Behaviors>(
  key: K,
  partial: Partial<Behaviors[K]>,
): void {
  // Object.keys avoids the Proxy's throwing get trap for missing behaviors.
  const existing = Object.keys(config.behaviors).includes(key)
    ? config.behaviors[key]
    : {};

  config.behaviors[key] = {
    ...existing,
    ...partial,
  } as Behaviors[K];
}

export function installBehaviors(partial: FakeBehaviors): void {
  for (const key of Object.keys(partial) as (keyof Behaviors)[]) {
    installBehavior(key, partial[key] ?? {});
  }
}

export function resetBehaviors(): void {
  for (const key of Object.keys(config.behaviors)) {
    delete config.behaviors[key as keyof Behaviors];
  }
}
