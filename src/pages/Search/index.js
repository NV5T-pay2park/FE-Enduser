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
  const [firstRender, setFirstRender] = useState(true);
  const [DataGarage, setDataGarage] = useState([]);
  const [DisplayDataGarage, setDisplayDataGarage] = useState([]);

  const getUserLocation = async () => {
    if (window.ZaloPay.isZaloPay) {
      const location = window.ZLP.Device().getCurLocation().then((location) => {return location})
      const temp = {
        lat: location.latitude,
        lng: location.longitude
      }
      setUserLocation(temp);
    } else {
      await navigator.geolocation.getCurrentPosition((location) => {
        const temp = {
          lat: location.coords.latitude,
          lng: location.coords.longitude
        }
        setUserLocation(temp);
      })
    }
  }
  

  async function getData() {
    if (window.ZaloPay.isZaloPay) {
      window.ZaloPay.showLoading()
    }
    const temp = await GarageAPI.getGaragesList(userLocation, ["1"]);
    if (window.ZaloPay.isZaloPay) {
      window.ZaloPay.hideLoading()
    }
    setDataGarage(temp.data.map((item) => item.parkingLotName));
    setDisplayDataGarage(temp.data);
  }

  if (firstRender) {
      getUserLocation();  
      getData();
      setFirstRender(false);
  }

  const handleFilter = async (vehicles) => {
    if (window.ZaloPay.isZaloPay) {
      window.ZaloPay.showLoading()
    }
    const tempData = await GarageAPI.getGaragesList(userLocation, vehicles);
    if (window.ZaloPay.isZaloPay) {
      window.ZaloPay.hideLoading()
    }
    setDisplayDataGarage(tempData.data);
  }

  const handleSearch = async (str) => {
    if (window.ZaloPay.isZaloPay) {
      window.ZaloPay.showLoading()
    }
    const tempData = await GarageAPI.getParkingListSearch(str);
    if (window.ZaloPay.isZaloPay) {
      window.ZaloPay.showLoading()
    }
    setDisplayDataGarage(tempData.data);
  }

  useEffect(() => {
    setDataGarage(DisplayDataGarage.map((item) => item.parkingLotName));
  }, [DisplayDataGarage]);
  
  const navigate = useNavigate();

  return (
    <div style={{ flexDirection: 'row', height: 'calc(100vh - 30px)' }}>

    <Grid container spacing={0} mt={0.8}>
      <Grid item xs={8} ml={2}>
        <ComboBox listName={DataGarage} handleChoose={handleSearch} />
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
      <ListCard list={DisplayDataGarage} location={userLocation}/>
    </div>
  )
}

export default Search