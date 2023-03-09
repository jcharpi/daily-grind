import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function HomePage() {

    const navigate = useNavigate()

    function handleMinutes() {
        navigate('/select')
    }

    return (
        <div className="text-center">
            <h1>Welcome Back, User</h1>
            <Button onClick={handleMinutes} size="lg" className="home--new--button">New Trip</Button>
        </div>
    )
}