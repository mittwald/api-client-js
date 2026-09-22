import { afterEach, expect, test } from "vitest";

import { resetBehaviors } from "../testing";
import { Container } from "../container";
import { Customer } from "../customer";
import { Project } from "../project";
import { Server } from "../server";
import {
  tryResolveAggregateReference,
  resolveAggregateReference,
} from "./AggregateReference";

afterEach(resetBehaviors);

test("resolves a project reference", () => {
  const project = resolveAggregateReference({
    aggregate: Project.aggregateMetaData.aggregate,
    domain: Project.aggregateMetaData.domain,
    id: "p-1",
  });

  expect(project).toBeInstanceOf(Project);
  expect(project.id).toBe("p-1");
});

test("resolves a server reference", () => {
  const server = resolveAggregateReference({
    aggregate: Server.aggregateMetaData.aggregate,
    domain: Server.aggregateMetaData.domain,
    id: "s-1",
  });

  expect(server).toBeInstanceOf(Server);
  expect(server.id).toBe("s-1");
});

test("resolves a customer reference", () => {
  const customer = resolveAggregateReference({
    aggregate: Customer.aggregateMetaData.aggregate,
    domain: Customer.aggregateMetaData.domain,
    id: "cu-1",
  });

  expect(customer).toBeInstanceOf(Customer);
  expect(customer.id).toBe("cu-1");
});

test("resolves a container reference using its parent id", () => {
  const container = resolveAggregateReference({
    parent: {
      aggregate: Container.aggregateMetaData.aggregate,
      domain: Container.aggregateMetaData.domain,
      id: "st-1",
    },
    aggregate: Container.aggregateMetaData.aggregate,
    domain: Container.aggregateMetaData.domain,
    id: "c-1",
  });

  expect(container).toBeInstanceOf(Container);
  if (!(container instanceof Container)) {
    throw new Error("Expected a Container reference");
  }
  expect(container.id).toBe("c-1");
  expect(container.stackId).toBe("st-1");
});

test("throws for an unknown aggregate mapping", () => {
  expect(() =>
    resolveAggregateReference({
      aggregate: "nope",
      domain: "nope",
      id: "x",
    }),
  ).toThrowError(/not found/);
});

test("returns undefined for an unknown aggregate mapping", () => {
  expect(
    tryResolveAggregateReference({
      aggregate: "nope",
      domain: "nope",
      id: "x",
    }),
  ).toBeUndefined();
});
