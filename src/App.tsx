/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import forest from "./images/forest.png";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1 className="App-joke">
                when im not coding, I actually touch grass, unlike some of
                yall... all jokes
            </h1>
            <Container>
                <Row>
                    <Col>
                        <div className="imgtxt">
                            <p>me walking up a path to a cliff jumping spot</p>
                        </div>
                    </Col>
                    <Col>
                        <img
                            className="forest-pic"
                            src={forest}
                            height={270}
                            width={480}
                            alt="forest"
                        />
                    </Col>
                </Row>
            </Container>
            <ul>
                <li>3 fun facts about me:</li>
                <li>I am 6'6" and can backflip (on ground)</li>
                <li>I often use adobe after effects to edit videos</li>
                <li>I love cliff jumping</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        <div className="rectangle1"></div>
                    </Col>
                    <Col>
                        <div className="rectangle2"></div>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <hr></hr>
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
            <h1>CISC275</h1>
            <p>Hello World</p>
        </div>
    );
}

export default App;
