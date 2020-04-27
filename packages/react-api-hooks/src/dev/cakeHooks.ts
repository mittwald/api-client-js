import { KyClient } from "@mittwald/api-client/dist/http/KyClient";
import { OperationDescriptor } from "@mittwald/api-client/dist/OperationDescriptor";
import { createUseGetData } from "../hooks/useGetDataFactory";

export const client = new KyClient();

const getCakeDescriptor: OperationDescriptor<
    { path: { id: string } },
    {
        status: 200;
        content: {
            name: string;
            topping: string;
        };
    }
> = {
    method: "get",
    path: "/cake/{id}",
};

const getCake = client.requestFunctionFactory(getCakeDescriptor);
export const useGetCake = createUseGetData(getCake);
