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
            Object {
              "namespace": "test",
              "spec": Object {
                "paths": Array [],
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
            Array [
              Object {
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
            Array [
              Object {
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
            Array [
              Object {
                "changeType": "changed",
                "diffInfos": Array [
                  Object {
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
                  Object {
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
            Object {
              "paths": Object {
                "/foo": Object {
                  "get": Object {
                    "operationId": "getFoo",
                    "parameters": Object {},
                    "responses": Object {
                      "200": Object {
                        "application/json": Object {
                          "content": Object {},
                          "headers": Object {},
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
            Object {
              "paths": Object {},
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
            Object {
              "paths": Object {
                "/foo": Object {
                  "get": Object {
                    "operationId": "getFoo",
                    "parameters": Object {},
                    "responses": Object {
                      "404": Object {
                        "application/json": Object {
                          "content": Object {},
                          "headers": Object {},
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
            Object {
              "paths": Object {
                "/foo": Object {
                  "get": Object {
                    "operationId": "getFoo",
                    "parameters": Object {},
                    "responses": Object {
                      "200": Object {
                        "application/json": Object {
                          "content": Object {},
                          "headers": Object {},
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
