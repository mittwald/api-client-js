import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type RelocationRequestApiData =
  MittwaldAPIV2.Operations.RelocationCreateRelocation.RequestData;
export type RelocationDomain = MittwaldAPIV2.Components.Schemas.DirectusDomain;
export type RelocationMailInbox =
  MittwaldAPIV2.Components.Schemas.DirectusEmailInbox;

export interface RelocationRequestData {
  addOns: {
    dataComparison: "additionalComparison" | "default";
    emailInboxes?: RelocationMailInbox[];
    domains?: RelocationDomain[];
  };
  loginData: {
    allowPasswordChange: boolean;
    providerName: string;
    loginUrl: string;
    password: string;
    userName: string;
  };
  contact: {
    phoneNumber?: string;
    firstName: string;
    lastName: string;
    message?: string;
    email: string;
  };
  articleType:
    | "cms-hosting-express"
    | "onlineshop-express"
    | "cms-hosting"
    | "onlineshop";
  target: {
    targetMode: "project" | "server";
    id: string;
  };
  websiteToRelocate: string;
  userId: string;
}
