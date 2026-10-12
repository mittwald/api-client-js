/** @jest-environment jsdom */

import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { ReferenceModel } from "../base/index.js";
import { provideReact } from "./provideReact.js";
import React, { act, FC, PropsWithChildren, Suspense } from "react";
import { beforeEach, jest } from "@jest/globals";
import { MittwaldApiModelProvider } from "./MittwaldApiModelProvider.js";
import {
  addTagToProvideReactCache,
  refreshProvideReactCache,
} from "./asyncResourceInvalidation.js";
import { asyncResourceStore } from "@mittwald/react-use-promise";
import { Store } from "@mittwald/react-use-promise/store";

const simulatedDataLoad = jest.fn();
let rerender: ReturnType<typeof render>["rerender"] | undefined;

beforeEach(() => {
  jest.resetAllMocks();
  jest.useFakeTimers();
  asyncResourceStore.clear();
  rerender = undefined;

  simulatedDataLoad.mockImplementation(() => {
    return new Promise((res) => setTimeout(res, 100));
  });
});

class TestModel extends ReferenceModel {
  public readonly lazyDependency: number;

  public static ofId(id: number, lazyDependency = 0) {
    return new TestModel(String(id), lazyDependency);
  }

  public constructor(id: string, lazyDependency: number) {
    super(id);
    this.lazyDependency = lazyDependency;
  }

  public getDetailed = provideReact(async () => {
    addTagToProvideReactCache(`test/get/${this.id}`);
    await simulatedDataLoad();
    return {
      id: this.id,
      foo: true,
    };
  }, [this.id, () => this.lazyDependency]);
}

const TestComponent: FC<{ id: number; lazyDependency?: number }> = (props) => {
  const model = TestModel.ofId(
    props.id,
    props.lazyDependency,
  ).getDetailed.use();
  return <span>{model.id}</span>;
};

const TestWrapper: FC<PropsWithChildren> = (props) => (
  <MittwaldApiModelProvider>
    <Suspense>{props.children}</Suspense>
  </MittwaldApiModelProvider>
);

const runTest = async (
  id: number,
  expectedDataLoadingCount: number,
  dynamicId = 0,
) => {
  const ui = rerender
    ? rerender(<TestComponent id={id} lazyDependency={dynamicId} />)
    : render(<TestComponent id={id} lazyDependency={dynamicId} />, {
        wrapper: TestWrapper,
      });

  if (ui) {
    rerender = ui.rerender;
  }
  expect(await screen.findByText(id)).toBeInTheDocument();
  expect(simulatedDataLoad).toHaveBeenCalledTimes(expectedDataLoadingCount);
};

test("Model data can be used", async () => {
  await runTest(42, 1);
  await runTest(43, 2);
});

test("Model caches data", async () => {
  await runTest(42, 1);
  await runTest(43, 2);
  await runTest(42, 2);
  await runTest(43, 2);
});

test("Model caches data with lazy dependency", async () => {
  await runTest(43, 1);
  await runTest(43, 2, 42);
  await runTest(43, 2, 42);
  await runTest(43, 3, 43);
});

test("Model cache can be refreshed", async () => {
  await runTest(42, 1);
  // Tag does not exist
  act(() => refreshProvideReactCache("foo"));
  await runTest(42, 1);
  // Tag exist
  act(() => refreshProvideReactCache("test/get/42"));
  await runTest(42, 2);
  // Tag exist
  act(() => refreshProvideReactCache("test/**/*"));
  await runTest(42, 3);
});

test("Model cache refreshes all resources matching the tag", async () => {
  render(
    <>
      <TestComponent id={42} />
      <TestComponent id={43} />
    </>,
    { wrapper: TestWrapper },
  );
  expect(await screen.findByText(42)).toBeInTheDocument();
  expect(await screen.findByText(43)).toBeInTheDocument();
  expect(simulatedDataLoad).toHaveBeenCalledTimes(2);

  act(() => refreshProvideReactCache("test/**/*"));
  await waitFor(() => expect(simulatedDataLoad).toHaveBeenCalledTimes(4));
});

test("Model cache can be refreshed after its resource was recreated", async () => {
  await runTest(42, 1);
  asyncResourceStore.clear();
  act(() => refreshProvideReactCache("test/get/42"));
  await runTest(42, 2);
  act(() => refreshProvideReactCache("test/get/42"));
  await runTest(42, 3);
});

test("Model cache releases tags without any existing resource", async () => {
  const releaseBy = jest.spyOn(Store.prototype, "releaseBy");

  await runTest(42, 1);
  act(() => refreshProvideReactCache("test/get/42"));
  expect(releaseBy).not.toHaveBeenCalled();

  asyncResourceStore.clear();
  act(() => refreshProvideReactCache("test/get/42"));
  expect(releaseBy).toHaveBeenCalledTimes(1);

  const isReleased = releaseBy.mock.calls[0]![0];
  expect(isReleased(new Set())).toBe(true);
  expect(isReleased(new Set(["id"]))).toBe(false);

  releaseBy.mockRestore();
});

test("Model cache can be refreshed with react-use-promise before 4.1", async () => {
  await runTest(42, 1);
  asyncResourceStore.getAll().forEach((resource) => {
    Object.assign(resource, { meta: undefined });
  });
  act(() => refreshProvideReactCache("test/get/42"));
  await runTest(42, 2);
});
