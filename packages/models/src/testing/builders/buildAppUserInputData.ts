import type { UserInputData } from "../../app/UserInput/types";

export function buildAppUserInputData(
  overrides: Partial<UserInputData> = {},
): UserInputData {
  return {
    validationSchema: "{}",
    dataType: "text",
    required: true,
    name: "input",
    ...overrides,
  };
}
