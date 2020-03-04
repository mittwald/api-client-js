import React, { FC, ReactElement } from "react";
import { mockFetch } from "../dev/mockFetch";
import { useGetCake } from "../dev/cakeHooks";

interface CakeNameProps {
    id: string;
    showLoading?: boolean;
}

const CakeName: FC<CakeNameProps> = (props) => {
    const cake = useGetCake(
        {
            path: {
                id: props.id,
            },
        },
        {
            loading: props.showLoading ? <>Loading</> : undefined,
            pristine: <>...</>,
            notFound: <>Not found</>,
            noAccess: <>No access</>,
        },
    );

    if (!cake.hasLoaded) {
        return cake.view;
    }

    return <>{cake.data.name}</>;
};

export const examples = (): ReactElement => {
    const id = mockFetch({
        name: "Cheese Cake",
    });

    const idNotFound = mockFetch({}, undefined, 404);

    const idNoAccess = mockFetch({}, undefined, 401);

    return (
        <>
            <dl style={{ fontFamily: "sans-serif" }}>
                <dt>Status 200</dt>
                <dd>
                    <CakeName id={id} showLoading />
                </dd>
                <dt>Status 200 (no loading view)</dt>
                <dd>
                    <CakeName id={id} />
                </dd>
                <dt>Status 404</dt>
                <dd>
                    <CakeName id={idNotFound} showLoading />
                </dd>
                <dt>Status 401</dt>
                <dd>
                    <CakeName id={idNoAccess} showLoading />
                </dd>
            </dl>
        </>
    );
};

export default {
    title: "useGetData",
};
