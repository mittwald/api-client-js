import { afterEach, expect, test } from "vitest";

import { buildAppUserInputData } from "../../testing/builders/buildAppUserInputData";
import { resetBehaviors } from "../../testing/installBehaviors";
import { UserInput } from "./UserInput";
import { DataModel } from "../../base";

afterEach(resetBehaviors);

test("exposes its input data", () => {
  const input = new UserInput(
    buildAppUserInputData({
      validationSchema: "{\"type\":\"string\"}",
      defaultValue: "admin@example.com",
      name: "admin-email",
      dataSource: "users",
      dataType: "text",
      required: false,
      format: "email",
    }),
  );

  expect(input.name).toBe("admin-email");
  expect(input.dataType).toBe("text");
  expect(input.required).toBe(false);
  expect(input.validationSchema).toBe("{\"type\":\"string\"}");
  expect(input.format).toBe("email");
  expect(input.dataSource).toBe("users");
  expect(input.defaultValue).toBe("admin@example.com");
});

test("derives lifecycle and an explicit step", () => {
  const input = new UserInput(
    buildAppUserInputData({
      lifecycleConstraint: "installation",
      positionMeta: { step: "database" },
    }),
  );

  expect(input.lifecycle).toBe("installation");
  expect(input.step).toBe("database");
});

test("uses common as the default step", () => {
  const input = new UserInput(buildAppUserInputData());

  expect(input.step).toBe("common");
});

test("exposes a password-rule validation schema", () => {
  const input = new UserInput(
    buildAppUserInputData({
      additionalValidationSchema: { kind: "password-rule", schema: "PW" },
    }),
  );

  expect(input.passwordValidationSchema).toBe("PW");
});

test("does not expose other additional validation schemas", () => {
  const absent = new UserInput(buildAppUserInputData());
  const other = new UserInput(
    buildAppUserInputData({
      additionalValidationSchema: { schema: "OTHER" },
    }),
  );

  expect(absent.passwordValidationSchema).toBeUndefined();
  expect(other.passwordValidationSchema).toBeUndefined();
});

test("is a DataModel", () => {
  expect(new UserInput(buildAppUserInputData())).toBeInstanceOf(DataModel);
});
