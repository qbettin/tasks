import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState(1);
    const [rightDie, setRightDie] = useState(4);

    const rollLeft = () => {
        setLeftDie(d6());
    };

    const rollRight = () => {
        setRightDie(d6());
    };

    const result = leftDie === rightDie ? (leftDie === 1 ? "Lose" : "Win") : "";

    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <Button variant="secondary" onClick={rollLeft}>
                    Roll Left
                </Button>
            </div>
            <div>
                <span data-testid="right-die">{rightDie}</span>
                <Button variant="secondary" onClick={rollRight}>
                    Roll Right
                </Button>
            </div>
            {result && <div>{result}</div>}
        </div>
    );
}
