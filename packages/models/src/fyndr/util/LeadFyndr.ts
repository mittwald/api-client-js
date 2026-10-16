import { FinderProfileRequest } from "../FinderProfileRequest/index.js";
import { FinderProfile } from "../FinderProfile/index.js";

export class LeadFyndr {
  public static async customerIdHasAccess(customerId: string) {
    const finderProfile = await FinderProfile.ofCustomer(
      customerId,
    ).findDetailed({
      retryCache: {
        cache: false,
        retry: false,
      },
    });
    return finderProfile !== undefined && finderProfile.hasAccess();
  }

  public static async customerIdHasAccessRequest(customerId: string) {
    return (
      (await FinderProfileRequest.ofCustomer(customerId).findDetailed({
        retryCache: {
          cache: false,
          retry: false,
        },
      })) !== undefined
    );
  }
}
