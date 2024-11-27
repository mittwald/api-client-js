import { MittwaldAPIV2 } from "@mittwald/api-client";

export type ProjectMembershipData =
  MittwaldAPIV2.Operations.ProjectGetProjectMembership.ResponseData;

export type ProjectMembershipListItemData =
  MittwaldAPIV2.Operations.ProjectListProjectMemberships.ResponseData[number];
