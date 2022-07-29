import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript } from '@react-google-maps/api';
import { React, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as Service from '../../services/index';

const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 56px)'
};


function Map() {

  const loc = useLocation();

  const origin = Service.checkIfLocationNull(loc.state.origin);
  const destination = Service.checkIfLocationNull(loc.state.destination);

  var [direction, setDirection] = useState(null);

  const Direction = (response) => {
      if (response != null) {
        setDirection(response);
      }
  }

  
  return ( 
  <LoadScript
      googleMapsApiKey="AIzaSyDH75bfzU1Vy1VqSOAPBrVZ_OUCOlnLE8E"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={origin}
        zoom={16}
      >
        <DirectionsService
          options={{ 
                destination: destination,
                origin: origin ,
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