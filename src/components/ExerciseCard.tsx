import { Card, Col, Form, Button } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import { InputGroup } from "react-bootstrap";

interface Props {
    exercise: string;
}

const ExerciseCard = (props: Props) => {

    const [isFlipped, setIsFlipped] = useState(false)

    function handleClick(event: React.MouseEvent<HTMLDivElement>) {
        if (event.target instanceof HTMLDivElement) {
            setIsFlipped(prev => !prev);
        }
    }

    function nothing(event: React.MouseEvent<HTMLInputElement>) {
        event.stopPropagation();
        // Do nothing
    }
    


    return <Col className="select--col" xs={12} sm={12} md={6} lg={6} xl={4}>
        <ReactCardFlip infinite={true} isFlipped={isFlipped} flipDirection="horizontal">
            <Card onClick={handleClick} className="select--card stretched-link">
                <Card.Title className="select--card--title">{props.exercise}</Card.Title>
                <Card.Img variant="bottom" className="select--image" alt="Exercise" src="https://www.nhm.ac.uk/content/dam/nhmwww/discover/frog-eyes-evolution/frog-eyes-chubby-frog-flower-full-width.jpg"/>
            </Card>

            <Card onClick={handleClick} className="select--card">
                <Card.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label className="card--length--title">Workout Length</Form.Label>
                            <div className="card--length--input">
                                <Form.Control className="card--length--input no--highlight" onClick={nothing} type="text" placeholder="Enter length" />
                                <InputGroup.Text className="card--length--unit">minutes</InputGroup.Text>
                            </div>
                        </Form.Group>
                    </Form>
                </Card.Body>
                <div className="center--align">
                    <Button className="card--length--button">Submit</Button>
                </div>
            </Card>
        </ReactCardFlip>
        
    </Col>
}

export default ExerciseCard