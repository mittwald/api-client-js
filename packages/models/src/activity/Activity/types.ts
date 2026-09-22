import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type ActivityListItemData =
  MittwaldAPIV2.Components.Schemas.ActivitylogLogEntry;

export type ActivityGenericActionData =
  MittwaldAPIV2.Components.Schemas.ActivitylogGenericAction;

export type ActivityActionData = ActivityListItemData["action"];

export type ActivityListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdActivities.Get.Parameters.Query;

export type ActivityType =
  | "update"
  | "delete"
  | "create"
  | "copy"
  | "edit"
  | "fail"
  | "info";

/** A title placeholder that has to be translated rather than printed. */
interface TranslatableValue {
  translationKey: string;
}

export const translatable = (translationKey: string): TranslatableValue => ({
  translationKey,
});

export const isTranslatableValue = (
  value: unknown,
): value is TranslatableValue =>
  typeof value === "object" && value !== null && "translationKey" in value;

/**
 * `ActivityActionData["name"]` alone is `string`: the generic fallback action
 * types its name that way and widens the union. Dropping the member whose name
 * did not narrow leaves the literal union the action registry needs.
 */
export type KnownActionName<T = ActivityActionData> = T extends {
  name: infer TName;
}
  ? string extends TName
    ? never
    : TName
  : never;

export type ActionDataByName<TName extends KnownActionName> = Extract<
  ActivityActionData,
  { name: TName }
>;
