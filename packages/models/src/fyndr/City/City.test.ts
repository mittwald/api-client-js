import { afterEach, describe, expect, test, vi } from "vitest";

import { buildCityData } from "../../testing/builders/buildCityData";
import { CityListItem, CityList, City } from "./City";
import {
  installBehaviors,
  resetBehaviors,
} from "../../testing/installBehaviors";

afterEach(resetBehaviors);

describe("City", () => {
  test("queries cities and maps list items", async () => {
    const query = { input: "Kiel" };
    const list = vi.fn().mockResolvedValue({
      items: [buildCityData()],
      totalCount: 7,
    });
    installBehaviors({ city: { list } });

    const result = await City.query(query).execute();

    expect(list).toHaveBeenCalledWith(query);
    expect(result).toBeInstanceOf(CityList);
    expect(result.totalCount).toBe(7);
    expect(result.items[0]).toBeInstanceOf(CityListItem);
    expect(result.items[0]).toMatchObject({
      zipCode: "24103",
      country: "DE",
      city: "Kiel",
    });
  });

  test("refine merges additional query fields", async () => {
    const list = vi.fn().mockResolvedValue({ totalCount: 0, items: [] });
    installBehaviors({ city: { list } });

    await City.query({ input: "Ki" }).refine({ input: "Kiel" }).execute();

    expect(list).toHaveBeenCalledWith({ input: "Kiel" });
  });
});
