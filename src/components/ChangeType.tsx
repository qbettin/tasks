import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    const changeType = () => {
        setType((prevType) =>
            prevType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    };

    return (
        <div>
            <Button variant="outline-info" onClick={changeType}>
                Change Type
            </Button>
            {type === "short_answer_question" && <p>Short Answer</p>}
            {type === "multiple_choice_question" && <p>Multiple Choice</p>}
        </div>
    );
}
