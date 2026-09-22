import type { MittwaldAPIV2 } from "@mittwald/api-client";

export type ProjectMembershipData =
  MittwaldAPIV2.Operations.ProjectGetProjectMembership.ResponseData;

export type ProjectMembershipListItemData =
  MittwaldAPIV2.Operations.ProjectListProjectMemberships.ResponseData[number];

export type ProjectMembershipListQueryData =
  MittwaldAPIV2.Paths.V2ProjectsProjectIdMemberships.Get.Parameters.Query;

export type ProjectRole =
  MittwaldAPIV2.Components.Schemas.MembershipProjectRoles;

export type ProjectMembershipUpdateRequestData =
  MittwaldAPIV2.Paths.V2ProjectMembershipsProjectMembershipId.Patch.Parameters.RequestBody;
