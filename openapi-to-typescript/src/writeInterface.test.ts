import { join } from "path";
import { createTypedApiFromOpenAPIFile } from "./createTypedAPI";
import { renderNamespace } from "./namespace";
import { createTypedDescriptors } from "./createTypedDescriptors";

describe("interfaceTemplate()", () => {
    // test("render props to interface correct", () => {
    //     const renderedInterface = renderInterface("foo", {
    //         foo: "string",
    //         bar: "date",
    //         baz: "Array<{hello: string}>",
    //     });
    //
    //     expect(renderedInterface).toMatchSnapshot();
    // });

    test("render namespace", () => {
        const renderedSubNamespace = renderNamespace("bar");
        const renderedNamespace = renderNamespace("foo", renderedSubNamespace);

        // expect(renderedNamespace).toMatchSnapshot();
    });

    test("render complete namespace", async () => {
        const apiFile = join(__dirname, "examples/simple.yaml");
        const tmpFile = join(__dirname, "tmp/api.ts");
        await createTypedApiFromOpenAPIFile(apiFile, tmpFile);
        // createTypedDescriptors(apiFile);
        //
        // const fileContent = await readAsync(join(__dirname, "examples/simple.yaml"), "utf8");
        // const spec = yaml.safeLoad(fileContent);
        // const namespace = extractNamespace("test", spec);
        // const result = namespaceToTypeScript(namespace);
        // console.log(result);

        // console.log(foo);
        // expect(renderedNamespace).toMatchSnapshot();
    });
});
