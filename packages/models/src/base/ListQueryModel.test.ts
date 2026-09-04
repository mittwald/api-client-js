import { ListQueryModel } from "./ListQueryModel.js";

interface Query {
  limit?: number;
  search?: string;
}

class TestQuery extends ListQueryModel<Query> {
  public constructor(query: Query, dependencies?: string[]) {
    super(query, { dependencies });
  }
}

test("derives a stable query id from equal queries", () => {
  expect(new TestQuery({ limit: 10 }).queryId).toBe(
    new TestQuery({ limit: 10 }).queryId,
  );
});

test("ignores key order when hashing the query", () => {
  expect(new TestQuery({ limit: 10, search: "foo" }).queryId).toBe(
    new TestQuery({ search: "foo", limit: 10 }).queryId,
  );
});

test("derives different ids for different queries", () => {
  expect(new TestQuery({ limit: 10 }).queryId).not.toBe(
    new TestQuery({ limit: 20 }).queryId,
  );
});

test("includes dependencies in the query id", () => {
  const withoutDeps = new TestQuery({ limit: 10 });
  const withDeps = new TestQuery({ limit: 10 }, ["project-1"]);

  expect(withDeps.queryId).not.toBe(withoutDeps.queryId);
  expect(withDeps.queryId).toContain("project-1");
});

test("distinguishes different dependencies for the same query", () => {
  expect(new TestQuery({ limit: 10 }, ["project-1"]).queryId).not.toBe(
    new TestQuery({ limit: 10 }, ["project-2"]).queryId,
  );
});

test("treats an empty dependency list like no dependencies", () => {
  expect(new TestQuery({ limit: 10 }, []).queryId).toBe(
    new TestQuery({ limit: 10 }).queryId,
  );
});
