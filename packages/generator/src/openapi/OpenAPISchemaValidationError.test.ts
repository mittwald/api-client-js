import { OpenAPISchemaValidationError } from "./OpenAPISchemaValidationError.js";

type Errors = ConstructorParameters<typeof OpenAPISchemaValidationError>[0];

const errors = (...items: unknown[]): Errors => items as Errors;

test("prefixes the message so the source of the failure is clear", () => {
  const error = new OpenAPISchemaValidationError(
    errors({ instancePath: "/paths", message: "is required" }),
  );

  expect(error.message).toContain("OpenAPI is invalid:");
});

test("numbers each validation error", () => {
  const error = new OpenAPISchemaValidationError(
    errors(
      { instancePath: "/paths", message: "is required" },
      { instancePath: "/info", message: "is required" },
    ),
  );

  expect(error.message).toContain("#1");
  expect(error.message).toContain("#2");
});

test("dumps each error as YAML so nested details stay readable", () => {
  const error = new OpenAPISchemaValidationError(
    errors({ instancePath: "/paths", message: "is required" }),
  );

  expect(error.message).toContain("instancePath: /paths");
  expect(error.message).toContain("message: is required");
});

test("uses its own name instead of the inherited one", () => {
  expect(new OpenAPISchemaValidationError(errors()).name).toBe(
    "OpenAPISchemaValidationError",
  );
});

test("is recognizable via instanceof after the prototype fix-up", () => {
  const error = new OpenAPISchemaValidationError(errors());

  expect(error).toBeInstanceOf(OpenAPISchemaValidationError);
  expect(error).toBeInstanceOf(Error);
});

test("handles an empty error list", () => {
  expect(new OpenAPISchemaValidationError(errors()).message).toBe(
    "OpenAPI is invalid: ",
  );
});
