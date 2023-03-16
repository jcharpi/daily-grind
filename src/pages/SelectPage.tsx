import { Container, Row } from "react-bootstrap";
import TravelCard from "../components/TravelCard"
import Images from '../images/imageArray'

export default function SelectPage() {
    const exercises: string[] = ["Walk", "Run", "Bike"]

    return (
        <>
            <h1 className="select--title">Select Travel Type</h1>
            <Container fluid className="select--container">
                <Row>
                    {exercises.map(exercise => 
                        <TravelCard key={exercise} image={Images[(exercises.indexOf(exercise))]} exercise={exercise}/>
                    )}
                </Row>
            </Container>   
        </>
    )
}