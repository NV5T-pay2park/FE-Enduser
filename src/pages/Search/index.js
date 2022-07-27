import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import '../../components/ComboBox/index';
import ComboBox from '../../components/ComboBox/index';
import ListCard from '../../components/ListCard/index';
import FilterChip from '../../components/Chip/index';
import { Navigate, useNavigate } from 'react-router-dom';
import * as GarageAPI from '../../api/garageAPI';


const Search = () => {

  const [userLocation, setUserLocation] = useState(null) ;
  const [vehicleType, setVehicalType] = useState(["1"]);
  const [searchString, setSearchString] = useState("");

  navigator.geolocation.getCurrentPosition((location) => {
    const temp = {
      lat: location.coords.latitude,
      lng: location.coords.longitude
    }
    setUserLocation(temp);
  })

  var DataGarage;
  useEffect( async () => {
    DataGarage = await GarageAPI.getGaragesList(userLocation, vehicleType).data;
  }, []);

  const [DisplayDataGarage, setDataGarage] = useState(DataGarage);

  const handleChoose = async () => {
    const tempData = await GarageAPI.getParkingListSearch(searchString);
    setDataGarage(tempData.data);
  }

  const handleFilter = (vehicles) => {
    setVehicalType(vehicles);
    handleChoose();
  }

  const handleSearch = async (str) => {
    setSearchString(str);
    const tempData = await GarageAPI.getGaragesList(userLocation, vehicleType);
    setDataGarage(tempData.data);
  }
  
  const navigate = useNavigate()
  return (
    <div style={{ flexDirection: 'row', height: 'calc(100vh - 56px)' }}>

    <Grid container spacing={0} mt={0.8}>
      <Grid item xs={8} ml={2}>
        <ComboBox  listName={DataGarage} handleChoose={handleSearch} />
      </Grid>
      <Grid item xs={3} style={{width: '100%'}} mt={0.5} ml={1} mr={0.5}>
        <Button variant="contained" style={{width: '95%'}} onClick={() => {
            navigate('/markers') 
        }}> Bản đồ</Button>
     
      </Grid>
     <Grid ml={2} mt={0.25} mb={1}>
        <FilterChip handleChoose={handleFilter}></FilterChip>
      </Grid>
    </Grid>
      <ListCard list={DisplayDataGarage} />
    </div>
  )
}

export default Search