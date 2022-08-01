import { Button, Grid, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as GarageAPI from '../../api/garageAPI';
import * as Service from '../../services/index';
import FilterChip from '../../components/Chip/index'
import ComboBox from '../../components/ComboBox/index'
import ListCard from '../../components/ListCard/index'


const Search = () => {

  const ZaloPay = Service.ZaloPay(window.ZaloPay);

  const [userLocation, setUserLocation] = useState({lat: 10.75833859950882, lng: 106.74563506930951});
  const [DisplayDataGarage, setDisplayDataGarage] = useState([]);
  const [vehicleType, setVehicleType] = useState(["1"]);
  const [district, setDistrict] = useState("Tất cả")
  const [districtList, setDistrictList] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [listLocation, setListLocation] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);

  function getCoordinates() {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  const getUserLocation = async () => {
    if (userLocation == null) {
      const position = await getCoordinates(); 
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      const temp = {
        lat: latitude,
        lng: longitude,
      }
      return temp;
    }
    return userLocation;

  }

  async function getData(location) {
    const temp = await Service.checkIfNullDataListParking(GarageAPI.getParkingListSearch("", district, location , ["1"]));
    setDisplayDataGarage(temp.data);
    return temp.data;
  }

  async function getFirstRenderData(location) {
    const listData = await getData(location);
    const listTemp = ["Tất cả"].concat([...new Set(listData.map((item) => item.district))].sort());
    const tempLocationList = Service.getCheckedNullList(listData.map((item) => {
      return ({  
        lat: item.lat,
        lng: item.lng,
      })
    }));
    
    setDistrictList(listTemp);
    setListLocation(tempLocationList);
  }

  const firstLoading = async () => {
    if (isFirstRender) {

      
      if (ZaloPay.isZaloPay) {
        ZaloPay.showLoading()
      }

      setIsFirstRender(false);
      const location = await getUserLocation();
      getFirstRenderData(location);
      if (location != null) {
        setUserLocation(location);
      }
      

      if (ZaloPay.isZaloPay) {
        ZaloPay.hideLoading()
      }

    }
  }

  firstLoading();

  const handleFilter = async (vehicles) => {
    if (ZaloPay.isZaloPay) {
        ZaloPay.showLoading()
    }
      const tempData = await Service.checkIfNullDataListParking(GarageAPI.getParkingListSearch(searchString, district, userLocation, vehicles));
      setDisplayDataGarage(tempData.data);
      setVehicleType(vehicles);
    if (ZaloPay.isZaloPay) {
      ZaloPay.hideLoading()
    }
 }

  const handleDistrict = async (event) => {
    var tempDistrict = event.target.value;
    if (ZaloPay.isZaloPay) {
      ZaloPay.showLoading();
    }
   
      const tempData = await Service.checkIfNullDataListParking(GarageAPI.getParkingListSearch(searchString, tempDistrict, userLocation, vehicleType));
      setDisplayDataGarage(tempData.data);
      setDistrict(tempDistrict);
   
   if (ZaloPay.isZaloPay) {
      ZaloPay.hideLoading();
    }
  }

  const handleSearch = async (str) => {
      const tempData = await Service.checkIfNullDataListParking(GarageAPI.getParkingListSearch(str, district, userLocation, vehicleType));
      setDisplayDataGarage(tempData.data);
      setSearchString(str);
  }

  const navigate = useNavigate();

  return (
    <div style={{ flexDirection: 'row', height: 'calc(100vh - 70px)' }}>

    <Grid container spacing={0} mt={0.8}>
      <Grid item xs={8} ml={2}>
        <ComboBox listName={[]} handleChoose={handleSearch} />
      </Grid>
      <Grid item xs={3} style={{width: '100%'}} mt={0.5} ml={1} mr={0.5}>
        <Button variant="contained" style={{width: '95%'}} onClick={() => {
            navigate('/markers', {state: {Locations: listLocation, userLocation: userLocation}}) 
        }}> Bản đồ</Button>
     
      </Grid>
     <Grid container spacing={0}>
        <Grid item xs={8} ml={2} mt={0.25} mb={1}>
          <Select
            options={districtList}
            value={district}
            onChange={handleDistrict}
            sx={{}}
            label="Quận"
            style={{width: '100%'}}
          >
           {districtList.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)} 
          </Select>
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