import {React, useState} from 'react'
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript} from '@react-google-maps/api';


const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 56px)'
};

const center = {
  lat: 10.75766401459632,
   lng:106.74603203425715
};

const destination = {
  lat: 10.739992847744777, 
  lng: 106.72301089610434
}

function Map() {

  var [direction, setDirection] = useState(null);

  const Direction = (response) => {
      if (response != null) {
        setDirection(response);
      }
  }

  
  return ( 
  <LoadScript
      googleMapsApiKey="AIzaSyCuIMJTEeifSs3ISPf2WOCsoiMjsuurP5w"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        <DirectionsService
          options={{ 
                destination: destination,
                origin: center ,
                travelMode: 'DRIVING'
          }}
          callback={Direction}
        />
      
        <DirectionsRenderer
          options={{ 
              directions: direction
          }}
        />
      </GoogleMap>
    </LoadScript>)
}

export default Map;