import type { DomainData } from "../../domain/Domain/types";

export function buildDomainDomainData(
  overrides: Partial<DomainData> = {},
): DomainData {
  return {
    nameservers: [
      "ns01.agenturserver.de",
      "ns01.agenturserver.it",
      "ns01.agenturserver.co",
    ],
    handles: { ownerC: { current: { handleFields: [] } } },
    usesDefaultNameserver: true,
    projectId: "project-id",
    domain: "example.com",
    domainId: "domain-id",
    connected: false,
    deleted: false,
    processes: [],
    ...overrides,
  };
}
