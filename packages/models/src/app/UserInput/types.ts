import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type AppUserInputData = MittwaldAPIV2.Components.Schemas.AppUserInput;

export type AppLifecycle =
  MittwaldAPIV2.Components.Schemas.AppAppInstallationLifecycle;

export type UserInputData = Omit<
  AppUserInputData,
  "lifecycleConstraint" | "step"
> & {
  lifecycleConstraint?: AppLifecycle;
};
