import { afterEach, expect, test } from "vitest";

import { AggregateMetaData } from "./AggregateMetaData";
import { resetBehaviors } from "../testing";
import { Container } from "../container";
import { Project } from "../project";

afterEach(resetBehaviors);

test("exposes its domain and aggregate", () => {
  const metadata = new AggregateMetaData("project", "billing");

  expect(metadata.domain).toBe("project");
  expect(metadata.aggregate).toBe("billing");
});

test("models expose aggregate metadata", () => {
  expect(Project.aggregateMetaData).toBeInstanceOf(AggregateMetaData);
  expect(Project.aggregateMetaData.domain).not.toBe("");
  expect(Project.aggregateMetaData.aggregate).not.toBe("");
});

test("Container.findAggregate returns an aggregate reference descriptor", () => {
  expect(Container.findAggregate("c-1")).toEqual({
    aggregate: Container.aggregateMetaData.aggregate,
    domain: Container.aggregateMetaData.domain,
    id: "c-1",
  });
});

test("Container.findAggregate returns undefined without an id", () => {
  expect(Container.findAggregate(undefined)).toBeUndefined();
});
