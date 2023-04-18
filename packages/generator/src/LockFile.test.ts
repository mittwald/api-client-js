import { LockFile } from "./LockFile";
import { NormalizedSpec } from "./NormalizedSpec";

describe("Loading", () => {
  test("empty spec works", () => {
    const lockfile = LockFile.fromString(`
version: v1
namespace: test
spec:
    paths: []
    `);
    expect(lockfile.content).toMatchInlineSnapshot(`
      {
        "namespace": "test",
        "spec": {
          "paths": [],
        },
        "version": "v1",
      }
    `);
  });
});

describe("Comparing", () => {
  test("Comparing empty spec works", () => {
    const lockfile = LockFile.fromSpec({
      paths: {},
    });

    expect(
      lockfile.compare({
        paths: {},
      }),
    ).toHaveLength(0);
  });

  test("Comparing detects new paths", () => {
    const lockfile = LockFile.fromSpec({
      paths: {},
    });

    expect(
      lockfile.compare({
        paths: {
          "/foo": {},
        },
      }),
    ).toMatchInlineSnapshot(`
      [
        {
          "changeType": "new",
          "name": "/foo",
          "target": "path",
        },
      ]
    `);
  });

  test("Comparing detects removed paths", () => {
    const lockfile = LockFile.fromSpec({
      paths: {
        "/foo": {},
      },
    });

    expect(
      lockfile.compare({
        paths: {},
      }),
    ).toMatchInlineSnapshot(`
      [
        {
          "changeType": "removed",
          "name": "/foo",
          "target": "path",
        },
      ]
    `);
  });

  test("Comparing detects changed paths", () => {
    const lockfile = LockFile.fromSpec({
      paths: {
        "/foo": {
          get: {
            operationId: "getFoo",
            parameters: {},
            responses: {
              200: {
                "application/json": {
                  content: {},
                  headers: {},
                  mediaType: "application/json",
                },
              },
            },
          },
        },
      },
    });

    expect(
      lockfile.compare({
        paths: {
          "/foo": {
            get: {
              operationId: "getFoo",
              parameters: {},
              responses: {
                200: {
                  "application/json": {
                    content: {},
                    headers: {},
                    mediaType: "application/json",
                  },
                },
                400: {
                  "application/json": {
                    content: {},
                    headers: {},
                    mediaType: "application/json",
                  },
                },
              },
            },
          },
        },
      }),
    ).toMatchInlineSnapshot(`
      [
        {
          "changeType": "changed",
          "diffInfos": [
            {
              "count": 9,
              "value": "get:
        operationId: getFoo
        parameters: {}
        responses:
          '200':
            application/json:
              content: {}
              headers: {}
              mediaType: application/json
      ",
            },
            {
              "added": true,
              "count": 5,
              "removed": undefined,
              "value": "    '400':
            application/json:
              content: {}
              headers: {}
              mediaType: application/json
      ",
            },
          ],
          "name": "/foo",
          "target": "path",
        },
      ]
    `);
  });

  test("Comparing detects no changes if there are no", () => {
    const lockfile = LockFile.fromSpec({
      paths: {
        "/foo": {
          get: {
            operationId: "getFoo",
            parameters: {},
            responses: {
              200: {
                "application/json": {
                  content: {},
                  headers: {},
                  mediaType: "application/json",
                },
              },
            },
          },
        },
      },
    });

    expect(
      lockfile.compare({
        paths: {
          "/foo": {
            get: {
              operationId: "getFoo",
              parameters: {},
              responses: {
                200: {
                  "application/json": {
                    headers: {},
                    content: {},
                    mediaType: "application/json",
                  },
                },
              },
            },
          },
        },
      }),
    ).toHaveLength(0);
  });
});

describe("Syncing", () => {
  test("Does nothing when there are no accepted changes", () => {
    const lockfile = LockFile.fromSpec({
      paths: {
        "/foo": {
          get: {
            operationId: "getFoo",
            parameters: {},
            responses: {
              200: {
                "application/json": {
                  content: {},
                  headers: {},
                  mediaType: "application/json",
                },
              },
            },
          },
        },
      },
    });

    const spec: NormalizedSpec = {
      paths: {
        "/newFoo": {
          get: {
            operationId: "newFoo",
            parameters: {},
            responses: {
              200: {
                "application/json": {
                  content: {},
                  headers: {},
                  mediaType: "application/json",
                },
              },
            },
          },
        },
      },
    };

    expect(lockfile.applyChanges(spec, [])).toMatchInlineSnapshot(`
      {
        "paths": {
          "/foo": {
            "get": {
              "operationId": "getFoo",
              "parameters": {},
              "responses": {
                "200": {
                  "application/json": {
                    "content": {},
                    "headers": {},
                    "mediaType": "application/json",
                  },
                },
              },
            },
          },
        },
      }
    `);
  });

  test("Removes accepted changes", () => {
    const lockfile = LockFile.fromSpec({
      paths: {
        "/foo": {
          get: {
            operationId: "getFoo",
            parameters: {},
            responses: {
              200: {
                "application/json": {
                  content: {},
                  headers: {},
                  mediaType: "application/json",
                },
              },
            },
          },
        },
      },
    });

    const spec: NormalizedSpec = {
      paths: {},
    };

    expect(
      lockfile.applyChanges(spec, [
        {
          target: "path",
          changeType: "removed",
          name: "/foo",
        },
      ]),
    ).toMatchInlineSnapshot(`
      {
        "paths": {},
      }
    `);
  });

  test("Updates accepted changes", () => {
    const lockfile = LockFile.fromSpec({
      paths: {
        "/foo": {
          get: {
            operationId: "getFoo",
            parameters: {},
            responses: {
              200: {
                "application/json": {
                  content: {},
                  headers: {},
                  mediaType: "application/json",
                },
              },
            },
          },
        },
      },
    });

    const spec: NormalizedSpec = {
      paths: {
        "/foo": {
          get: {
            operationId: "getFoo",
            parameters: {},
            responses: {
              404: {
                "application/json": {
                  content: {},
                  headers: {},
                  mediaType: "application/json",
                },
              },
            },
          },
        },
      },
    };

    expect(
      lockfile.applyChanges(spec, [
        {
          target: "path",
          changeType: "changed",
          name: "/foo",
        },
      ]),
    ).toMatchInlineSnapshot(`
      {
        "paths": {
          "/foo": {
            "get": {
              "operationId": "getFoo",
              "parameters": {},
              "responses": {
                "404": {
                  "application/json": {
                    "content": {},
                    "headers": {},
                    "mediaType": "application/json",
                  },
                },
              },
            },
          },
        },
      }
    `);
  });

  test("Adds accepted changes", () => {
    const lockfile = LockFile.fromSpec({
      paths: {},
    });

    const spec: NormalizedSpec = {
      paths: {
        "/foo": {
          get: {
            operationId: "getFoo",
            parameters: {},
            responses: {
              200: {
                "application/json": {
                  content: {},
                  headers: {},
                  mediaType: "application/json",
                },
              },
            },
          },
        },
      },
    };

    expect(
      lockfile.applyChanges(spec, [
        {
          target: "path",
          changeType: "new",
          name: "/foo",
        },
      ]),
    ).toMatchInlineSnapshot(`
      {
        "paths": {
          "/foo": {
            "get": {
              "operationId": "getFoo",
              "parameters": {},
              "responses": {
                "200": {
                  "application/json": {
                    "content": {},
                    "headers": {},
                    "mediaType": "application/json",
                  },
                },
              },
            },
          },
        },
      }
    `);
  });
});
