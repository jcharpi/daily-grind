import { Container, Row } from "react-bootstrap";
import ExerciseCard from "../components/ExerciseCard"
import Images from '../images/imageArray'
export default function SelectPage() {
    
    const exercises: string[] = ["Walk", "Jog", "Run", "Bike"]
    
    return (
        <>
            <h2 className="select--title">Select Exercise</h2>
            <Container fluid className="select--container">
                <Row>
                    {exercises.map(exercise => 
                        <ExerciseCard key={exercise} image={Images[(exercises.indexOf(exercise))]} exercise={exercise}/>
                    )}
                </Row>
            </Container>   
        </>
    )
}