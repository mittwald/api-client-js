import type { DomainListItemData } from "../../domain/Domain/types";

export function buildDomainListItemData(
  overrides?: Partial<DomainListItemData>,
): DomainListItemData {
  return {
    handles: { ownerC: { current: {} } },
    usesDefaultNameserver: true,
    projectId: "project-id",
    domainId: "domain-id",
    domain: "example.com",
    connected: true,
    nameservers: [],
    deleted: false,
    ...overrides,
  };
}
