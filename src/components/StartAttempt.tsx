import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    const onStartQuiz = () => {
        setAttempts((prevAttempts) => prevAttempts - 1);
        setInProgress(true);
    };

    const onStopQuiz = () => {
        setInProgress(false);
    };

    const onMulligan = () => {
        setAttempts((prevAttempts) => prevAttempts + 1);
    };

    return (
        <div>
            <div>Number of attempts: {attempts}</div>
            <Button
                variant="primary"
                onClick={onStartQuiz}
                disabled={inProgress || attempts === 0}
            >
                Start Quiz
            </Button>{" "}
            <Button
                variant="danger"
                onClick={onStopQuiz}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>{" "}
            <Button
                variant="success"
                onClick={onMulligan}
                disabled={inProgress}
            >
                Mulligan
            </Button>
        </div>
    );
}
