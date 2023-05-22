import { asyncStringJoin } from "./asyncStringJoin.js";

test("asyncStringJoin() joins each item with an async generator function", async () => {
  const result = await asyncStringJoin(["Foo", "Bar"], (item) =>
    Promise.resolve(`Async${item}`),
  );
  expect(result).toMatch("AsyncFoo\r\nAsyncBar");
});
