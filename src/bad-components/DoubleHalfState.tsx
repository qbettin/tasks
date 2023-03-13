import { useState } from "react";

export function useDoubleHalfState(initialValue: number) {
    const [value, setValue] = useState(initialValue);

    const doubleValue = () => {
        setValue(value * 2);
    };

    const halfValue = () => {
        setValue(value / 2);
    };

    return { value, doubleValue, halfValue };
}
