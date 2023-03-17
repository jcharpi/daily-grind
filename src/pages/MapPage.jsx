import GoogleMap from "../components/GoogleMap";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function MapPage () {
    const [nearbyPlaces, setNearbyPlaces] = useState(null);
    const currentCoords = useRef()
    const navigate = useNavigate();

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
        const fetchData = async () => {
          try {
            const position = await new Promise((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            });
            const lat = position.coords.latitude
            const lng = position.coords.longitude
            currentCoords.current = {lat, lng}
            
            const response = await fetch(`https://daily-grind-3ecb4.cloudfunctions.net/location?location=${lat},${lng}&radius=${minToMeter(parseInt(localStorage.getItem("minutes")))}`);
            
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            
            const data = await response.json();

            data.results.length === 0 ?
            navigate("/select") 
            :
            setNearbyPlaces(data.results.sort(() => Math.random() - 0.5).slice(0, 5))
            
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, [navigate]);

    return (
        <>
          <div className="center--map">
            <GoogleMap currentLocation={currentCoords.current} nearbyPlaces={nearbyPlaces} />
          </div>           
        </>
    )
}