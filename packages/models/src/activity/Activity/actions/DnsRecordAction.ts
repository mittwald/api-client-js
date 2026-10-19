import type { ActivityActionData } from "../types.js";

import { ActivityAction } from "../ActivityAction.js";

/**
 * Both the custom (`dns.<type>-record-set`) and the mittwald managed
 * (`dns.<type>-record-set-managed`) record set actions. The managed ones send
 * the literal `"managed"` in `changes.after` and the replaced records in
 * `changes.before` – differing shapes the generated schemas do not express.
 */
type DnsRecordActionData = Extract<
  ActivityActionData,
  { name: `dns.${string}-record-set-managed` | `dns.${string}-record-set` }
>;

export abstract class DnsRecordAction<
  T extends DnsRecordActionData = DnsRecordActionData,
> extends ActivityAction<T> {
  public readonly parameters: T["parameters"];

  public constructor(data: T) {
    super(data);

    this.parameters = data.parameters;
    this.displayName = data.parameters.domain.name;
    this.type = "edit";

    this.valuesAreCopyable = true;
    this.hasWideChanges = true;
  }
}
