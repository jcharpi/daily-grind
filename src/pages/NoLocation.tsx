import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

export default function NoMatch() {
    const navigate = useNavigate()

    function handleHome() {
        navigate('/')
        window.location.reload()
    }

    return (
        <div className="text-center">
            <h2>No location could be found!</h2>
            <h2>Try making sure your location is enabled in both your browser & your device settings</h2>
            <Button  onClick={handleHome} className="home--new--button shadow-none">Back to Home</Button>
        </div>
    )
}