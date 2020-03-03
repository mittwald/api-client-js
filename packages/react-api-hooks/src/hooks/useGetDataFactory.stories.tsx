import React, { FC, ReactElement } from "react";
import { mockFetch } from "../dev/mockFetch";
import { useGetCake } from "../dev/cakeHooks";

interface CakeNameProps {
    id: string;
    loading?: boolean;
}

const CakeName: FC<CakeNameProps> = (props) => {
    const pet = useGetCake(
        {
            path: {
                id: props.id,
            },
        },
        {
            loading: props.loading ? <>Loading</> : undefined,
            pristine: <>...</>,
            notFound: <>Not found</>,
            noAccess: <>No access</>,
        },
    );

    if (!pet.hasLoaded) {
        return pet.view;
    }

    return <>{pet.data.name}</>;
};

export const examples = (): ReactElement => {
    const id = mockFetch({
        name: "Cheese Cake",
    });

    const idNotFound = mockFetch(
        {
            name: "Cheese Cake",
        },
        undefined,
        404,
    );

    const idNoAccess = mockFetch(
        {
            name: "Cheese Cake",
        },
        undefined,
        401,
    );

    return (
        <>
            <dl style={{ fontFamily: "sans-serif" }}>
                <dt>Status 200</dt>
                <dd>
                    <CakeName id={id} loading />
                </dd>
                <dt>Status 200 (no loading view)</dt>
                <dd>
                    <CakeName id={id} />
                </dd>
                <dt>Status 404</dt>
                <dd>
                    <CakeName id={idNotFound} loading />
                </dd>
                <dt>Status 401</dt>
                <dd>
                    <CakeName id={idNoAccess} loading />
                </dd>
            </dl>
        </>
    );
};

export default {
    title: "useGetData",
};
