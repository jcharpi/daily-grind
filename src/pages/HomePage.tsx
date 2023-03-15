import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function HomePage() {

    const navigate = useNavigate()

    function handleMinutes() {
        navigate('/select')
    }

    return (
        <div className="text-center">
            <h1>Welcome</h1>
            <Button onClick={handleMinutes} className="home--new--button shadow-none">Find Coffee ☕</Button>
        </div>
    )
}