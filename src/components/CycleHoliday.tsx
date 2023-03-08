import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidays = [
    { name: "Halloween", emoji: "🎃", month: 10 },
    { name: "Thanksgiving", emoji: "🦃", month: 11 },
    { name: "Christmas", emoji: "🎄", month: 12 },
    { name: "Valentine's Day", emoji: "❤️", month: 2 },
    { name: "Easter", emoji: "🐰", month: 4 }
];

function nextHolidayByAlphabet(current: string): string {
    const sortedHolidays = holidays
        .slice() //creates a copy of holidays
        .sort((curr, next) => curr.name.localeCompare(next.name));
    //sorts new holiday array with alphabetical order
    const index = sortedHolidays.findIndex((h) => h.name === current);
    //finds index of current holiday
    return sortedHolidays[(index + 1) % sortedHolidays.length].name;
}

function nextHolidayByYear(current: string): string {
    const currentHoliday = holidays.find((h) => h.name === current);
    const sortedHolidays = holidays.slice().sort((a, b) => a.month - b.month);
    const index = sortedHolidays.findIndex(
        (h) => h.month > (currentHoliday?.month ?? -1)
    ); //sorts while checking the holiday exists if not returns -1
    return sortedHolidays[index === -1 ? 0 : index].name;
}
export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState(holidays[0]);

    function handleAdvanceByAlphabet() {
        setCurrentHoliday((current) => {
            return {
                ...current,
                name: nextHolidayByAlphabet(current.name)
            };
        });
    }

    function handleAdvanceByYear() {
        setCurrentHoliday((current) => {
            return {
                ...current,
                name: nextHolidayByYear(current.name)
            };
        });
    }

    return (
        <div>
            <div>
                Holiday:{" "}
                {holidays.find((h) => h.name === currentHoliday.name)?.emoji}
            </div>
            <Button
                data-testid="byAlphabet"
                variant="info"
                onClick={handleAdvanceByAlphabet}
            >
                Advance by Alphabet
            </Button>
            <Button
                data-testid="byYear"
                variant="warning"
                onClick={handleAdvanceByYear}
            >
                Advance by Year
            </Button>
        </div>
    );
}
