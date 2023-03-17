import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleIsStudentChange = () => {
        setIsStudent(!isStudent);
    };

    const handleSwitchChange = () => {
        setEditMode(!editMode);
    };

    const renderEditMode = () => {
        return (
            <Form>
                <Form.Group className="NameForm" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        style={{ width: "40%", margin: "0 auto" }}
                    />
                </Form.Group>
                <Form.Group className="isStudentForm" controlId="isStudent">
                    <Form.Check
                        type="checkbox"
                        label="Student?"
                        checked={isStudent}
                        onChange={handleIsStudentChange}
                        style={{ width: "15%", margin: "0 auto" }}
                    />
                </Form.Group>
                <br></br>
                <div className="d-flex justify-content-center">
                    <Button variant="primary" onClick={handleSwitchChange}>
                        Save
                    </Button>
                </div>
            </Form>
        );
    };

    const renderText = () => {
        const studentStatus = isStudent ? "is a student" : "is not a student";
        return <div>{`${name} ${studentStatus}`}</div>;
    };

    return (
        <div>
            <h3 className="text-center">Edit Mode</h3>
            <div className="d-flex justify-content-center">
                <Form.Switch
                    id="editSwitch"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={handleSwitchChange}
                />
            </div>
            {editMode ? renderEditMode() : renderText()}
        </div>
    );
}
