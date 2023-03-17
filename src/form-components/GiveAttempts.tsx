import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [newRequestedAttempts, setNewRequestedAttempts] =
        useState<string>("");

    const handleUseAttemptClick = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleRequestedAttemptsChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNewRequestedAttempts(event.target.value);
    };

    const handleGainAttemptsClick = () => {
        const parsedRequestedAttempts = parseInt(newRequestedAttempts);
        if (!isNaN(parsedRequestedAttempts)) {
            setAttemptsLeft(attemptsLeft + parsedRequestedAttempts);
            setNewRequestedAttempts("");
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <Form>
                <Form.Group controlId="formRequestedAttempts">
                    <Form.Label>Requested Attempts:</Form.Label>
                    <Form.Control
                        type="number"
                        value={newRequestedAttempts}
                        onChange={handleRequestedAttemptsChange}
                        style={{ width: "20%", margin: "0 auto" }}
                    />
                </Form.Group>
            </Form>
            <Button
                onClick={handleUseAttemptClick}
                disabled={attemptsLeft === 0}
                variant="primary"
            >
                Use
            </Button>
            <Button onClick={handleGainAttemptsClick} variant="success">
                Gain
            </Button>
        </div>
    );
}
