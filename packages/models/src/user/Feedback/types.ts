import { MittwaldAPIV2 } from "@mittwald/api-client";

export type FeedbackListItemData =
  MittwaldAPIV2.Operations.UserListFeedback.ResponseData[number];

export type FeedbackListQuery =
  MittwaldAPIV2.Paths.V2UsersUserIdFeedback.Get.Parameters.Query;

export type FeedbackCreateData =
  MittwaldAPIV2.Paths.V2UsersSelfFeedback.Post.Parameters.RequestBody;
