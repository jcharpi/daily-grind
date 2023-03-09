import React from 'react'
import { GoogleMap, LoadScript, InfoWindowF, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '80%',
  height: '95vh'
};

function Map(props) {

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDzor3AfBqVGEEtLnHBCnwwGJ_4uRMHEJc"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={props.currentLocation}
        zoom={16}
        >
        { /* Child components, such as markers, info windows, etc. */ }
        
      <MarkerF position={props.currentLocation}/>
      
      {props.nearbyPlaces == null 
      ? 
      <h6>Loading...</h6> 
      : 
      props.nearbyPlaces.map((place) => (
            <InfoWindowF className="info-window-container" key={place.vicinity} position={place.geometry.location}>
              <>
                <h6>{place.name}</h6> 
                
                {(place.rating > 1 && place.rating < 6) ? 
                  <p>{`Rating: ${place.rating}/5 ⭐️`}</p> : <p>Rating: None</p>
                }

                {place.price_level > 0 && place.price_level < 6 ? 
                  <p>
                    {`Price Level: ${Array.from({ length: place.price_level }).map(() => `$`).join('')}`}
                  </p> 
                  : 
                  <p>
                    {`Price Level: ???`}
                  </p>
                }
              </>
            </InfoWindowF>
          )
        )
      }
      
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)