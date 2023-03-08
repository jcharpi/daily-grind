import React from 'react'
import { GoogleMap, LoadScript, InfoWindowF } from '@react-google-maps/api';

const containerStyle = {
  width: '80%',
  height: '95vh'
};

const center = {
  lat: 43.07187621109797,
  lng: -89.40345392394327
};

function Map(props) {

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDzor3AfBqVGEEtLnHBCnwwGJ_4uRMHEJc"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        >
        { /* Child components, such as markers, info windows, etc. */ }
        

      
      {props.nearbyPlaces == null 
      ? 
      <h6>loading</h6> 
      : 
      props.nearbyPlaces.map((place) => (<InfoWindowF className="info-window-container" key={place.name} position={place.geometry.location}>
            <>
              <h6>{place.name}</h6>
              <p>{`Rating: ${place.rating}/5 ⭐️`}</p>
              
              {place.price_level > 0 ? 
                <p>
                  {`Price Level: ${Array.from({ length: place.price_level }).map(() => `$`).join('')}`}
                </p> : 
                <p>
                  {`Price Level: ???`}
                </p>
              }
            </>
        </InfoWindowF>
      ))}
      
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)