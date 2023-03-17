import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>("red");

    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "purple",
        "pink"
    ];

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    const renderColorOptions = () => {
        return colors.map((color: string) => (
            <Form.Check
                key={color}
                type="radio"
                label={color}
                inline
                value={color}
                checked={selectedColor === color}
                onChange={handleColorChange}
                style={{
                    backgroundColor: color,
                    borderRadius: "5px",
                    padding: "5px",
                    margin: "30px",
                    border: "3px color black",
                    color: "white",
                    textShadow: "1px 1px 0 black"
                }}
            />
        ));
    };

    return (
        <div>
            <h3>Change Color</h3>
            {renderColorOptions()}
            <div
                data-testid="colored-box"
                style={{
                    color: "white",
                    textShadow: "1px 1px 0 black",
                    backgroundColor: selectedColor,
                    padding: "10px",
                    width: "20%",
                    margin: "0 auto",
                    borderRadius: "15px"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
