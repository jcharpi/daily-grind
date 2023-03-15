import { Card } from "react-bootstrap";
import GoogleMap from "../components/GoogleMap";
import { useState, useEffect, useRef } from "react";
export default function MapPage () {
    const [nearbyPlaces, setNearbyPlaces] = useState(null);
    const currentCoords = useRef()
    
    const minToMeter = (min) => {
      const AVG_WALK_METERS_PER_MIN = 1.4 * 60
      const AVG_RUN_METERS_PER_MIN = 2.9 * 60
      const AVG_BIKE_METERS_PER_MIN = 4.4 * 60

      let range = 0
      switch(localStorage.getItem("type")) {
        case "Walk":
          range = AVG_WALK_METERS_PER_MIN * min
          return range
        case "Run":
          range = AVG_RUN_METERS_PER_MIN * min
          return range
        case "Bike":
          range = AVG_BIKE_METERS_PER_MIN * min
          return range
        default:
          return 0
      }
    }


    useEffect(() => {
        console.log(minToMeter(localStorage.getItem("minutes")))
        const fetchData = async () => {
          try {
            const position = await new Promise((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            });
            const lat = position.coords.latitude
            const lng = position.coords.longitude
            currentCoords.current = {lat, lng}
            
            const response = await fetch(`http://localhost:3000/location?location=${lat},${lng}&radius=${minToMeter(parseInt(localStorage.getItem("minutes")))}`);
            
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
                                Type: {localStorage.getItem("type")}
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