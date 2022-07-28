import React from 'react'
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import Locations from '../../models/Locations';
import * as Service from '../../services/index';
import { useLocation } from 'react-router-dom';

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
      googleMapsApiKey="AIzaSyCuIMJTEeifSs3ISPf2WOCsoiMjsuurP5w" >
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