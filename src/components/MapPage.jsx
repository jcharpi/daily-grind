import { Card } from "react-bootstrap";
import GoogleMap from "./GoogleMap";
import { useState, useEffect } from "react";

export default function MapPage () {

    const [nearbyPlaces, setNearbyPlaces] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const position = await new Promise((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            });
      
            const currentCoords = `${position.coords.latitude},${position.coords.longitude}`
            
            const response = await fetch(`http://localhost:3000/location?location=${currentCoords}`);
            
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            
            const data = await response.json();
            setNearbyPlaces(data.results);
            console.log(currentCoords)
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
                                Start Location: 
                            </Card.Text>

                            <Card.Text>
                                End Location: Memorial Union
                            </Card.Text>

                            <Card.Text>
                                Current Weather: Sunny ☀️
                            </Card.Text>
                        </Card.Body>
                </Card>
                <GoogleMap nearbyPlaces={nearbyPlaces} />
            </div>           
        </>
    )
}