import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState(options[0]);
    const isCorrect = selectedChoice === expectedAnswer;

    function handleChange(
        event: React.ChangeEvent<
            HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
        >
    ) {
        setSelectedChoice(event.currentTarget.value);
    }

    return (
        <div
            style={{
                border: "1px solid",
                borderRadius: "5px",
                padding: "10px",
                marginBottom: "10px"
            }}
        >
            <h3 style={{ marginBottom: "10px" }}>Multiple Choice Question</h3>
            <Form>
                <Form.Group controlId="formMultipleChoice">
                    <Form.Label>Select an answer:</Form.Label>
                    <Form.Control
                        as="select"
                        value={selectedChoice}
                        onChange={handleChange}
                        style={{ width: "30%", margin: "0 auto" }}
                    >
                        {options.map((option) => (
                            <option key={option} style={{ margin: "0 auto" }}>
                                {option}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
            </Form>
            {isCorrect ? (
                <div style={{ color: "green" }}>✔️ Correct</div>
            ) : (
                <div style={{ color: "red" }}>❌ Incorrect</div>
            )}
        </div>
    );
}
