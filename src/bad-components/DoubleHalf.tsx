import React from "react";
import { Button } from "react-bootstrap";
import { useDoubleHalfState } from "./DoubleHalfState";

export function DoubleHalf() {
    const { value, doubleValue, halfValue } = useDoubleHalfState(10);

    return (
        <div>
            <h1>{value}</h1>
            <Button variant="success" onClick={doubleValue}>
                Double
            </Button>
            <Button variant="danger" onClick={halfValue}>
                Halve
            </Button>
        </div>
    );
}
