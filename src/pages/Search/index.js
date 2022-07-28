import { Autocomplete, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import '../../components/ComboBox/index';
import ComboBox from '../../components/ComboBox/index';
import ListCard from '../../components/ListCard/index';
import FilterChip from '../../components/Chip/index';
import { Navigate, useNavigate } from 'react-router-dom';
import * as GarageAPI from '../../api/garageAPI';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { maxHeight } from '@mui/system';


const Search = () => {

  const [userLocation, setUserLocation] = useState({lat: 10.8782444, lng: 106.8062906}) ;
  const [firstRender, setFirstRender] = useState(true);
  const [DataGarage, setDataGarage] = useState([]);
  const [DisplayDataGarage, setDisplayDataGarage] = useState([]);
  const [vehicleType, setVehicleType] = useState(["1"]);
  const [district, setDistrict] = useState("Tất cả")
  const [districtList, setDistrictList] = useState([]);
  const [searchString, setSearchString] = useState("");

  const getUserLocation = async () => {

      await navigator.geolocation.getCurrentPosition((location) => {
        const temp = {
          lat: location.coords.latitude,
          lng: location.coords.longitude
        }
        if (firstRender) {
          setUserLocation(temp);
          setFirstRender(false);
        }
      })
    }
  

  async function getData() {
    const temp = await GarageAPI.getParkingListSearch("", district, userLocation , ["1"]);
    setDisplayDataGarage(temp.data);
    return temp.data;
  }

  async function getFirstRenderData() {
      const listData = await getData();
      const listTemp = ["Tất cả"].concat([... new Set(listData.map((item) => item.district))].sort());
      setDistrictList(listTemp);
  }

  async function firstRenderData ()  {
      await getUserLocation();  
      await getFirstRenderData();
  }

  useEffect(() => {
    if (window.ZaloPay.isZaloPay) {
      window.ZaloPay.showLoading()
    }

    firstRenderData();
    if (window.ZaloPay.isZaloPay) {
      window.ZaloPay.hideLoading()
    }
  }, [])

  const handleFilter = async (vehicles) => {
    if (window.ZaloPay.isZaloPay) {
      window.ZaloPay.showLoading()
    }
    const tempData = await GarageAPI.getParkingListSearch(searchString, district, userLocation, vehicles);
    if (window.ZaloPay.isZaloPay) {
      window.ZaloPay.hideLoading()
    }
    setDisplayDataGarage(tempData.data);
    setVehicleType(vehicles);
  }

  const handleDistrict = async (tempDistrict) => {
    if (window.ZaloPay.isZaloPay) {
      window.ZaloPay.showLoading();
    }
   
    if (tempDistrict == null) {
      tempDistrict = "Tất cả";
    }
    const tempData = await GarageAPI.getParkingListSearch(searchString, tempDistrict, userLocation, vehicleType);
    setDisplayDataGarage(tempData.data);
    setDistrict(tempDistrict);
    if (window.ZaloPay.isZaloPay) {
      window.ZaloPay.hideLoading();
    }
  }

  const handleSearch = async (str) => {
    if (window.ZaloPay.isZaloPay) {
      window.ZaloPay.showLoading()
    }
    const tempData = await GarageAPI.getParkingListSearch(str, district, userLocation, vehicleType);
    if (window.ZaloPay.isZaloPay) {
      window.ZaloPay.hideLoading()
    }
    setDisplayDataGarage(tempData.data);
    setSearchString(str);
  }

  
  const navigate = useNavigate();

  return (
    <div style={{ flexDirection: 'row', height: 'calc(100vh - 0px)' }}>

    <Grid container spacing={0} mt={0.8}>
      <Grid item xs={8} ml={2}>
        <ComboBox listName={[]} handleChoose={handleSearch} />
      </Grid>
      <Grid item xs={3} style={{width: '100%'}} mt={0.5} ml={1} mr={0.5}>
        <Button variant="contained" style={{width: '95%'}} onClick={() => {
            navigate('/markers') 
        }}> Bản đồ</Button>
     
      </Grid>
     <Grid container spacing={0}>
        <Grid item xs={8} ml={2} mt={0.25} mb={1}>
          <Autocomplete
            options={districtList}
            value={district}
            onChange={(event, value) => handleDistrict(value)}
            sx={{}}
            renderInput={(params) => <TextField {...params} label="Quận" />}
          />
        </Grid>
        <Grid item xs={3}  mt={0.25} mb={1} ml={1}>
          <FilterChip handleChoose={handleFilter}></FilterChip>
        </Grid>
     </Grid>
   
    </Grid>
      <div >
        <ListCard list={DisplayDataGarage} location={userLocation}/>
      </div>
    </div>
  )
}

export default Search