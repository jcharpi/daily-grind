import { Card } from "react-bootstrap";
import GoogleMap from "../components/GoogleMap";
import { useState, useEffect, useRef } from "react";
export default function MapPage () {

    const [nearbyPlaces, setNearbyPlaces] = useState(null);
    
    const currentCoords = useRef()

    useEffect(() => {
        const fetchData = async () => {
          try {
            const position = await new Promise((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            });
            const lat = position.coords.latitude
            const lng = position.coords.longitude
            currentCoords.current = {lat, lng}
            
            const response = await fetch(`http://localhost:3000/location?location=${lat},${lng}`);
            
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            
            const data = await response.json();
            setNearbyPlaces(data.results.slice(0,3));
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, []);

    return (
        <>
            <div className="center--map">
                <Card className="map--card">
                    <Card.Header className="map--card--header">Your Trip</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Type: Run
                            </Card.Text>

                            <Card.Text>
                                Start: Current Location
                            </Card.Text>

                            <Card.Text>
                                End: Memorial Union
                            </Card.Text>

                            <Card.Text>
                                Current Weather: Sunny ☀️
                            </Card.Text>
                        </Card.Body>
                </Card>
                <GoogleMap currentLocation={currentCoords.current} nearbyPlaces={nearbyPlaces} />
            </div>           
        </>
    )
}