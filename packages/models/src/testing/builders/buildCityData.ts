import type { CitiesListItemData } from "../../fyndr/City/types";

export function buildCityData(
  overrides?: Partial<CitiesListItemData>,
): CitiesListItemData {
  return {
    postCode: "24103",
    country: "DE",
    city: "Kiel",
    ...overrides,
  };
}
