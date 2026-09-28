import type { RegistryData } from "../../container/Registry/types.js";

export function buildRegistryData(
  overrides?: Partial<RegistryData>,
): RegistryData {
  return {
    credentials: { username: "user", valid: true },
    description: "test registry",
    uri: "registry.example.com",
    projectId: "project-id",
    id: "registry-id",
    ...overrides,
  };
}
