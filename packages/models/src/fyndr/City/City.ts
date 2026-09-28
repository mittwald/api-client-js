import type { CitiesListQueryData, CitiesListItemData } from "./types.js";

import { ListQueryModel, WithListData, DataModel } from "../../base/index.js";
import { config } from "../../config/config.js";

export const LOCATION_DACH_ZIP_CODE = "DACH-RAUM";

export class City {
  public static query(query: CitiesListQueryData) {
    return new CityListQuery(query);
  }
}

export class CityCommon extends DataModel<CitiesListItemData> {
  public readonly city: string;
  public readonly country: string;
  public readonly zipCode: string;

  public constructor(data: CitiesListItemData) {
    super(data);

    this.city = data.city;
    this.zipCode = data.postCode;
    this.country = data.country;
  }
}

export class CityListItem extends CityCommon {
  public constructor(data: CitiesListItemData) {
    super(data);
  }
}

export class CityListQuery extends ListQueryModel<CitiesListQueryData> {
  public constructor(query: CitiesListQueryData) {
    super(query);
  }

  public async execute() {
    const { totalCount, items } = await config.behaviors.city.list(this.query);
    return new CityList(
      this.query,
      items.map((item) => new CityListItem(item)),
      totalCount,
    );
  }

  public refine(query: CitiesListQueryData) {
    return new CityListQuery({ ...this.query, ...query });
  }
}

export class CityList extends WithListData<CityListItem>()(CityListQuery) {
  public override readonly items: readonly CityListItem[];
  public override readonly totalCount: number;

  public constructor(
    query: CitiesListQueryData,
    cities: CityListItem[],
    totalCount: number,
  ) {
    super(query);
    this.items = Object.freeze(cities);
    this.totalCount = totalCount;
  }
}
