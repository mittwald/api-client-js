import { afterEach, describe, expect, test } from "vitest";

import { buildDomainHandleFieldData } from "../../testing/builders/buildDomainHandleFieldData.js";
import { buildDomainHandleData } from "../../testing/builders/buildDomainHandleData.js";
import { resetBehaviors } from "../../testing/installBehaviors.js";
import { DomainHandle } from "./DomainHandle.js";
import { DataModel } from "../../base/index.js";

afterEach(resetBehaviors);

describe("DomainHandle", () => {
  test("constructs from data and exposes derived fields", () => {
    const data = buildDomainHandleData();
    const handle = new DomainHandle(data);

    expect(handle).toBeInstanceOf(DomainHandle);
    expect(handle).toBeInstanceOf(DataModel);
    expect(handle.handleRef).toBe(data.handleRef);
    for (const name of [
      "name",
      "organization",
      "email",
      "street",
      "city",
      "zip",
      "country",
      "phone",
    ] as const) {
      expect(handle[name]).toBe(
        data.handleFields?.find((field) => field.name === name)?.value,
      );
    }
  });

  test("defaults missing fields and derived values", () => {
    const handle = new DomainHandle({});

    expect(handle.fields).toEqual([]);
    expect(handle.name).toBeUndefined();
    expect(handle.organization).toBeUndefined();
    expect(handle.email).toBeUndefined();
    expect(handle.street).toBeUndefined();
    expect(handle.city).toBeUndefined();
    expect(handle.zip).toBeUndefined();
    expect(handle.country).toBeUndefined();
    expect(handle.phone).toBeUndefined();
  });

  test("gets a field value by name", () => {
    const handle = new DomainHandle(buildDomainHandleData());

    expect(handle.getFieldValue("email")).toBe("owner@example.com");
    expect(handle.getFieldValue("missing")).toBeUndefined();
  });

  test("returns all fields as a record", () => {
    const data = buildDomainHandleData();
    const handle = new DomainHandle(data);

    expect(handle.getAsRecord()).toEqual(
      Object.fromEntries(
        (data.handleFields ?? []).map(({ value, name }) => [name, value]),
      ),
    );
  });

  test("returns only additional, non-excluded fields", () => {
    const handle = new DomainHandle(
      buildDomainHandleData({
        handleFields: [
          buildDomainHandleFieldData({ value: "Owner", name: "name" }),
          buildDomainHandleFieldData({ value: "123", name: "fax" }),
          buildDomainHandleFieldData({ name: "department", value: "Sales" }),
        ],
      }),
    );

    expect(handle.getAdditionalFields(["department"])).toEqual([
      buildDomainHandleFieldData({ value: "123", name: "fax" }),
    ]);
  });

  test("constructs from handle fields", () => {
    const fields = [
      buildDomainHandleFieldData({ value: "Other Owner", name: "name" }),
      buildDomainHandleFieldData({ value: "other@example.com", name: "email" }),
    ];

    const handle = DomainHandle.fromHandleFields(fields);

    expect(handle.fields).toBe(fields);
    expect(handle.name).toBe("Other Owner");
    expect(handle.email).toBe("other@example.com");
  });
});
