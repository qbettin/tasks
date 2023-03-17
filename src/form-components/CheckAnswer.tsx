import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    function handleAnswerChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }

    const isCorrect = userAnswer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <Form>
                <Form.Group controlId="formCheckAnswer">
                    <Form.Control
                        type="text"
                        onChange={handleAnswerChange}
                        isInvalid={!isCorrect && userAnswer !== ""}
                        style={{ width: "20%", margin: "0 auto" }}
                    />
                </Form.Group>
            </Form>
            {isCorrect ? "✔️" : "❌"}
        </div>
    );
}
