import type { MittwaldAPIV2Client } from "@mittwald/api-client";

import type { FinderProfileListItemData } from "../types";
import type { FinderProfileBehaviors } from "./types";

import { withAxiosRequestConfig } from "../../../base/api/withModelRequestOptions";
import { Customer } from "../../../customer/Customer";

export const apiFinderProfileBehaviors = (
  client: MittwaldAPIV2Client,
): FinderProfileBehaviors => ({
  list: async () => {
    const customerList = await Customer.query().execute();

    const customersAndFinderProfile = await Promise.all(
      customerList.items.map(async (customer) => {
        const finderProfileResult =
          await client.leadFyndr.leadfyndrGetLeadFyndrProfile({
            customerId: customer.id,
          });

        return finderProfileResult.status === 200
          ? finderProfileResult.data
          : undefined;
      }),
    );

    const finderProfiles = customersAndFinderProfile.filter(
      (e) => e !== undefined,
    ) as FinderProfileListItemData[];

    return {
      totalCount: finderProfiles.length,
      items: finderProfiles,
    };
  },

  find: async (customerId, options) => {
    const response = await client.leadFyndr.leadfyndrGetLeadFyndrProfile(
      {
        customerId,
      },
      withAxiosRequestConfig(options),
    );

    if (response.status === 200) {
      return response.data;
    }
  },

  findContract: async (customerId) => {
    const response = await client.contract.getDetailOfContractByLeadFyndr({
      customerId,
    });

    if (response.status === 200) {
      return response.data;
    }
  },
});
