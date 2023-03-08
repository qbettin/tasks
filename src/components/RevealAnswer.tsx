import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <Button
                variant="outline-dark"
                onClick={handleClick}
                data-testid="reveal-button"
            >
                Reveal Answer
            </Button>
            {isVisible && <p>42</p>}
        </>
    );
}
