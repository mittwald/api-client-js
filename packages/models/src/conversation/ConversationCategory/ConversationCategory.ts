import type {
  ConversationCategoryReferenceType,
  ConversationCategoryData,
} from "./types";

import { DataModel } from "../../base";

export class ConversationCategory extends DataModel<ConversationCategoryData> {
  public static readonly aiHostingCategoryId =
    "0e3c0ace-869c-4869-9462-18dd190c9bea";
  public static readonly appCategoryId = "b1c735fd-185b-4e50-bb68-36daf6778c85";
  public static readonly articleCategoryId =
    "d011822d-9411-440f-a659-6a39d7ed8203";
  public static readonly containerCategoryId =
    "3a15b987-0f7f-4167-a2f7-eb6960d418f2";
  public static readonly databaseCategoryId =
    "359b512b-1775-4f7d-8832-c64e78a94e1a";
  public static readonly domainCategoryId =
    "43181e29-0268-4570-9dca-e5988b1d33bf";
  public static readonly extensionCategoryId =
    "1b761a9d-cc93-41fd-becb-8858f7a67d10";
  public static readonly generalCategoryId =
    "44bf568f-fb45-4b89-b810-bf558535b09d";
  public static readonly invoiceCategoryId =
    "a678478b-8377-4c63-a596-7602fc5c136f";
  public static readonly leadFyndrCategoryId =
    "5fa4c7e4-dfaa-4d81-9e99-54554fb74819";
  public static readonly mailCategoryId =
    "b6ba8b8e-b137-4430-950b-10a40a239e0c";
  public static readonly relocationCategoryId =
    "6014d6a6-75dc-43f6-8086-755436b9dfe4";
  public static readonly sshCategoryId = "9e86970d-3fc5-4395-901c-cb1db3571939";

  public readonly id: string;
  public readonly name: string;
  public readonly referenceType: ConversationCategoryReferenceType;

  public constructor(data: ConversationCategoryData) {
    super(data);
    this.id = data.categoryId;
    this.name = data.name;
    this.referenceType = data.referenceType;
  }
}
