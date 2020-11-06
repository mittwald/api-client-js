import { useEffect, useRef, useState } from "react";

/**
 * Only updates the state, if the component is mounted.
 */
export const useSafeState = <T>(initial: T): [T, (newValue: T) => void] => {
    const isMounted = useRef(true);

    useEffect(
        () => () => {
            isMounted.current = false;
        },
        [],
    );

    const [state, setState] = useState<T>(initial);

    const setStateIfMounted: typeof setState = (result) => {
        if (!isMounted.current) {
            return;
        }
        setState(result);
    };

    return [state, setStateIfMounted];
};
