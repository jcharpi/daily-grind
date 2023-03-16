import { InputGroup, Card, Col, Form, Button } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import { useState, memo } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    exercise: string;
    image: string;
}

const TravelCard = (props: Props) => {
    const [minutes, setMinutes] = useState("")
    const [isFlipped, setIsFlipped] = useState(false)
    const navigate = useNavigate();

    
    function handleFlip(event: React.MouseEvent<HTMLDivElement>) {
        if (event.target instanceof HTMLDivElement) {
            setIsFlipped(prev => !prev)
        }
    }

    function nothing(event: React.MouseEvent<HTMLInputElement>) {
        event.stopPropagation();
    }
    
    function handleMinutes() {
        if(minutes !== "" && !verifyMinutes(minutes)) {
            return
        } else if(minutes === "") {
            alert("No length provided")
            return
        }
        localStorage.setItem("type", props.exercise)
        localStorage.setItem("minutes", minutes)
        navigate('/map')
        window.location.reload()
    }

    const verifyMinutes = (min: string): boolean => {
        if(parseInt(min) < 1 || parseInt(min) > 300) {
            alert("Invalid minute amount")
            return false
        }
        return true
    }
    
    return <Col className="select--col" xs={12} sm={12} md={6} xl={4}>
        <ReactCardFlip infinite={true} isFlipped={isFlipped} flipDirection="horizontal">
            <Card onClick={handleFlip} className="select--card stretched-link">
                <Card.Title className="select--card--title">{props.exercise}</Card.Title>
                <Card.Img variant="bottom" className="select--image" alt="Exercise" src={props.image}/>
            </Card>

            <Card onClick={handleFlip} className="select--card">
                <Card.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label className="card--length--title">Travel Length</Form.Label>
                            <div className="card--length--input">
                                <Form.Control value={minutes} onChange={e => setMinutes(e.target.value)} className="card--length--input no--highlight" onClick={nothing} type="text" placeholder="Length" />
                                <InputGroup.Text className="card--length--unit">minutes</InputGroup.Text>
                            </div>
                        </Form.Group>
                    </Form>
                </Card.Body>
                <div className="center--align">
                    <Button size="lg" onClick={handleMinutes} className="card--length--button">Find Places</Button>
                </div>
            </Card>
        </ReactCardFlip>
        
    </Col>
}

export default memo(TravelCard)
