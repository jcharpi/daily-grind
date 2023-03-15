import { Card, Col, Form, Button } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


interface Props {
    exercise: string;
    image: string;
}

const ExerciseCard = (props: Props) => {

    const [isFlipped, setIsFlipped] = useState(false)
    const navigate = useNavigate();

    
    function handleFlip(event: React.MouseEvent<HTMLDivElement>) {
        if (event.target instanceof HTMLDivElement) {
            setIsFlipped(prev => !prev)
        }
    }

    function nothing(event: React.MouseEvent<HTMLInputElement>) {
        event.stopPropagation();
        // Do nothing
    }
    
    function handleMinutes() {
        localStorage.setItem("type", props.exercise)
        navigate('/map')
        window.location.reload();
    }

    return <Col className="select--col" xs={12} sm={12} md={6} lg={4} xl={3}>
        <ReactCardFlip infinite={true} isFlipped={isFlipped} flipDirection="horizontal">
            <Card onClick={handleFlip} className="select--card stretched-link">
                <Card.Title className="select--card--title">{props.exercise}</Card.Title>
                <Card.Img variant="bottom" className="select--image" alt="Exercise" src={props.image}/>
            </Card>

            <Card onClick={handleFlip} className="select--card">
                <Card.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label className="card--length--title">Workout Length</Form.Label>
                            <div className="card--length--input">
                                <Form.Control className="card--length--input no--highlight" onClick={nothing} type="text" placeholder="Length" />
                                <InputGroup.Text className="card--length--unit">minutes</InputGroup.Text>
                            </div>
                        </Form.Group>
                    </Form>
                </Card.Body>
                <div className="center--align">
                    <Button size="lg" onClick={handleMinutes} className="card--length--button">Submit</Button>
                </div>
            </Card>
        </ReactCardFlip>
        
    </Col>
}

export default ExerciseCard