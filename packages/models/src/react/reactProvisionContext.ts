import { createCascade } from "context";

export const reactProvisionContext = createCascade<{
  id: string;
}>();
