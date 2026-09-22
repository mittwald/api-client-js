import type { ContainerData } from "../../container/Container/types";

export function buildContainerData(
  overrides?: Partial<ContainerData>,
): ContainerData {
  return {
    deployedState: { image: "nginx:latest" },
    pendingState: { image: "nginx:latest" },
    statusSetAt: "2024-01-01T00:00:00.000Z",
    description: "test container",
    projectId: "project-id",
    requiresRecreate: false,
    stackId: "stack-id",
    id: "container-id",
    serviceName: "web",
    shortId: "abc123",
    status: "running",
    ...overrides,
  };
}
