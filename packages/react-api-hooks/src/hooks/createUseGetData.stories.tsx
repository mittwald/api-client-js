import React, { FC, ReactElement } from "react";
import { mockFetch } from "../dev/mockFetch";
import { useGetCake } from "../dev/cakeHooks";

interface CakeNameProps {
    id: string;
    noLoadingView?: boolean;
}

const CakeName: FC<CakeNameProps> = (props) => {
    const cake = useGetCake({
        path: {
            id: props.id,
        },
    });

    if (cake.state === "loading") {
        return <>Loading</>;
    }
    if (cake.state === "notFound") {
        return <>Not found</>;
    }
    if (cake.state === "noAccess") {
        return <>No access</>;
    }

    return <>{cake.data?.name ?? "..."}</>;
};

export const examples = (): ReactElement => {
    const id = mockFetch({
        name: "Cheese Cake",
    });

    const idNotFound = mockFetch({}, undefined, 404);

    const idNoAccess = mockFetch({}, undefined, 401);

    return (
        <>
            <h3>Status 200</h3>
            <p>
                <CakeName id={id} />
            </p>
            <h3>Status 200 (no loading view)</h3>
            <p>
                <CakeName id={id} noLoadingView />
            </p>
            <h3>Status 404</h3>
            <p>
                <CakeName id={idNotFound} />
            </p>
            <h3>Status 401</h3>
            <p>
                <CakeName id={idNoAccess} />
            </p>
        </>
    );
};

export default {
    title: "useGetData",
};
