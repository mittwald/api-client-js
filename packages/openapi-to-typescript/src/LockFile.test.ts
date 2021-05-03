import { LockFile } from "./LockFile";

describe("Loading", () => {
    test("empty spec works", () => {
        const lockfile = LockFile.fromString(`
version: v1
spec:
    paths: []
namespace: test
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
