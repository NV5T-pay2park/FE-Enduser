import React from 'react'
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import Locations from '../../models/Locations';

const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 56px)'
};

const center = {
  lat: 10.75766401459632,
  lng: 106.74603203425715
};



function Markers() {
    
     return ( 
     <LoadScript
      googleMapsApiKey="AIzaSyCuIMJTEeifSs3ISPf2WOCsoiMjsuurP5w" >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}>
        { Locations.map( (item) => {return <Marker position={{lat: item.lat, lng: item.lng}}/>})  }
      </GoogleMap>
    </LoadScript>)
}

export default Markers;