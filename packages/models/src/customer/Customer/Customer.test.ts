import { jest } from "@jest/globals";
import { config } from "../../config/config.js";
import ObjectNotFoundError from "../../errors/ObjectNotFoundError.js";
import {
  Customer,
  CustomerDetailed,
  CustomerList,
  CustomerListItem,
  CustomerListQuery,
} from "./Customer.js";
import { CustomerBehaviors } from "./behaviors/types.js";
import { CustomerData, CustomerListItemData } from "./types.js";
import { ServerBehaviors } from "../../server/Server/behaviors/types.js";
import { ProjectBehaviors } from "../../project/Project/behaviors/types.js";

const customerData = (overrides: Partial<CustomerData> = {}): CustomerData =>
  ({
    customerId: "customer-1",
    name: "ACME Inc.",
    ...overrides,
  }) as unknown as CustomerData;

const listItemData = (
  overrides: Partial<CustomerData> = {},
): CustomerListItemData =>
  customerData(overrides) as unknown as CustomerListItemData;

const customer = {
  find: jest.fn<CustomerBehaviors["find"]>(),
  list: jest.fn<CustomerBehaviors["list"]>(),
  update: jest.fn<CustomerBehaviors["update"]>(),
};

const server = {
  find: jest.fn<ServerBehaviors["find"]>(),
  list: jest.fn<ServerBehaviors["list"]>(),
};

const project = {
  find: jest.fn<ProjectBehaviors["find"]>(),
  list: jest.fn<ProjectBehaviors["list"]>(),
  create: jest.fn<ProjectBehaviors["create"]>(),
  leave: jest.fn<ProjectBehaviors["leave"]>(),
  delete: jest.fn<ProjectBehaviors["delete"]>(),
  updateDescription: jest.fn<ProjectBehaviors["updateDescription"]>(),
};

beforeEach(() => {
  [customer, server, project].forEach((behaviors) =>
    Object.values(behaviors).forEach((mock) => mock.mockReset()),
  );
  config.behaviors.customer = customer;
  config.behaviors.server = server;
  config.behaviors.project = project;
});

describe("Customer reference", () => {
  test("ofId keeps the id", () => {
    expect(Customer.ofId("customer-1").id).toBe("customer-1");
  });

  test("describes itself with class name and id", () => {
    expect(Customer.ofId("customer-1").describe()).toBe("Customer@customer-1");
  });

  test("exposes a server query scoped to itself", async () => {
    server.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Customer.ofId("customer-1").servers.execute();

    expect(server.list).toHaveBeenCalledWith(
      expect.objectContaining({ customerId: "customer-1" }),
    );
  });

  test("exposes a project query scoped to itself", async () => {
    project.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Customer.ofId("customer-1").projects.execute();

    expect(project.list).toHaveBeenCalledWith(
      expect.objectContaining({ customerId: "customer-1" }),
    );
  });
});

describe("Customer.find", () => {
  test("wraps the found data in a CustomerDetailed", async () => {
    customer.find.mockResolvedValue(customerData());

    const found = await Customer.find("customer-1");

    expect(customer.find).toHaveBeenCalledWith("customer-1");
    expect(found).toBeInstanceOf(CustomerDetailed);
  });

  test("returns undefined when the behavior finds nothing", async () => {
    customer.find.mockResolvedValue(undefined);

    await expect(Customer.find("missing")).resolves.toBeUndefined();
  });
});

describe("Customer.get", () => {
  test("returns the customer when it exists", async () => {
    customer.find.mockResolvedValue(customerData());

    await expect(Customer.get("customer-1")).resolves.toBeInstanceOf(
      CustomerDetailed,
    );
  });

  test("throws a named ObjectNotFoundError when it does not exist", async () => {
    customer.find.mockResolvedValue(undefined);

    await expect(Customer.get("missing")).rejects.toThrow(ObjectNotFoundError);
    await expect(Customer.get("missing")).rejects.toThrow(
      "Customer@missing not found",
    );
  });
});

describe("update", () => {
  /** The request body repeats the customer id alongside the changed fields. */
  const payload = { customerId: "customer-1", name: "New name" };

  test("passes id and payload to the behavior", async () => {
    customer.update.mockResolvedValue(undefined);

    await Customer.ofId("customer-1").update(payload);

    expect(customer.update).toHaveBeenCalledWith("customer-1", payload);
  });

  test("propagates behavior failures", async () => {
    customer.update.mockRejectedValue(new Error("forbidden"));

    await expect(Customer.ofId("customer-1").update(payload)).rejects.toThrow(
      "forbidden",
    );
  });
});

describe("CustomerDetailed", () => {
  /** Customer data identifies itself via `customerId`, not `id`. */
  test("takes its id from the customerId field", () => {
    expect(new CustomerDetailed(customerData()).id).toBe("customer-1");
  });

  test("exposes the raw data", () => {
    expect(new CustomerDetailed(customerData()).data.name).toBe("ACME Inc.");
  });
});

describe("CustomerListQuery", () => {
  test("applies the default pagination limit", async () => {
    customer.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Customer.query().execute();

    expect(customer.list).toHaveBeenCalledWith({
      limit: config.defaultPaginationLimit,
    });
  });

  test("lets an explicit limit win over the default", async () => {
    customer.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Customer.query({ limit: 5 }).execute();

    expect(customer.list).toHaveBeenCalledWith({ limit: 5 });
  });

  test("wraps the response into a CustomerList of CustomerListItems", async () => {
    customer.list.mockResolvedValue({
      items: [listItemData()],
      totalCount: 3,
    });

    const result = await Customer.query().execute();

    expect(result).toBeInstanceOf(CustomerList);
    expect(result.totalCount).toBe(3);
    expect(result.items[0]).toBeInstanceOf(CustomerListItem);
    expect(result.items[0].id).toBe("customer-1");
  });

  test("refine merges the new query on top of the existing one", async () => {
    customer.list.mockResolvedValue({ items: [], totalCount: 0 });

    await Customer.query({ limit: 5 }).refine({ limit: 10 }).execute();

    expect(customer.list).toHaveBeenCalledWith({ limit: 10 });
  });

  test("refine returns a new query rather than mutating the old one", () => {
    const query = Customer.query({ limit: 5 });

    const refined = query.refine({ limit: 10 });

    expect(refined).not.toBe(query);
    expect(refined).toBeInstanceOf(CustomerListQuery);
    expect(refined.queryId).not.toBe(query.queryId);
  });

  test("getTotalCount asks for a single item and reports the reported total", async () => {
    customer.list.mockResolvedValue({
      items: [listItemData()],
      totalCount: 42,
    });

    await expect(Customer.query().getTotalCount()).resolves.toBe(42);
    expect(customer.list).toHaveBeenCalledWith({ limit: 1 });
  });

  test("findOneAndOnly returns the single match", async () => {
    customer.list.mockResolvedValue({
      items: [listItemData()],
      totalCount: 1,
    });

    const found = await Customer.query().findOneAndOnly();

    expect(found?.id).toBe("customer-1");
    expect(customer.list).toHaveBeenCalledWith({ limit: 2 });
  });

  test("findOneAndOnly returns undefined when the total count is not one", async () => {
    customer.list.mockResolvedValue({
      items: [listItemData(), listItemData({ customerId: "customer-2" })],
      totalCount: 2,
    });

    await expect(Customer.query().findOneAndOnly()).resolves.toBeUndefined();
  });
});

describe("Customer.list", () => {
  test("returns just the items of the query result", async () => {
    customer.list.mockResolvedValue({
      items: [listItemData()],
      totalCount: 1,
    });

    const items = await Customer.list();

    expect(items).toHaveLength(1);
    expect(items[0]).toBeInstanceOf(CustomerListItem);
  });
});
