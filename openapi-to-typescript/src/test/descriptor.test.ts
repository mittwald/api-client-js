import { getDescriptorName } from "../descriptor";
import { Operation } from "../IntermediateFormat";

test("should return a function name for operation and method", () => {
    const operation = {
        operationId: "DoSomethingUseful",
    } as Operation;

    const name = getDescriptorName("gEt", operation);
    expect(name).toBe("getDoSomethingUseful");
});
