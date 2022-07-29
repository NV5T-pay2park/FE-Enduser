import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';
import { useLocation } from 'react-router-dom';
import * as Service from '../../services/index';

const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 56px)'
};


function Markers() {
    
    const loc = useLocation();
    const Locations = Service.getCheckedNullList(loc.state.Locations);
    const userLocation = Service.checkIfLocationNull(loc.state.userLocation);

    const handleOnClick = () => {
      console.log("Hello tan")
    }

     return ( 
     <LoadScript
      googleMapsApiKey="AIzaSyDH75bfzU1Vy1VqSOAPBrVZ_OUCOlnLE8E" >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={userLocation}
        zoom={14}>
        { Locations.map((item) => {return <Marker position={{lat: item.lat, lng: item.lng}} onClick={handleOnClick()}/>})  }
        <Marker position={userLocation} shape="MarkerShapeCircle" onClick={handleOnClick()} />
      </GoogleMap>
    </LoadScript>)
}

export default Markers;