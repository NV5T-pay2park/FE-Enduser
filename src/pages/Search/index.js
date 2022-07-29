import { Button, MenuItem, Select } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as GarageAPI from '../../api/garageAPI';
import FilterChip from '../../components/Chip/index';
import '../../components/ComboBox/index';
import ComboBox from '../../components/ComboBox/index';
import ListCard from '../../components/ListCard/index';
import * as Service from '../../services/index';

const Search = () => {

  const [userLocation, setUserLocation] = useState(null);
  const [firstRender, setFirstRender] = useState(true);
  const [DataGarage, setDataGarage] = useState([]);
  const [DisplayDataGarage, setDisplayDataGarage] = useState([]);
  const [vehicleType, setVehicleType] = useState(["1"]);
  const [district, setDistrict] = useState("Tất cả")
  const [districtList, setDistrictList] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [listLocation, setListLocation] = useState([]);

  function getCoordinates() {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  const getUserLocation = async () => {

      const position = await getCoordinates(); 
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      const temp = {
        lat: latitude,
        lng: longitude,
      }
      console.log(temp);
      setUserLocation(temp);
    }
  

  async function getData() {
    try {
      console.log(userLocation)
      const temp = await Service.checkIfNullDataListParking(GarageAPI.getParkingListSearch("", district, userLocation , ["1"]));
      setDisplayDataGarage(temp.data);
      return temp.data;
    } catch(err) {
      console.log(err);
      return [];
    }
  }

  async function getFirstRenderData() {
      const listData = await getData();
      const listTemp = ["Tất cả"].concat([... new Set(listData.map((item) => item.district))].sort());
      console.log(listData);
      const tempLocationList = Service.getCheckedNullList(listData.map((item) => {
        return ({  
          lat: item.lat,
          lng: item.ing,
        })
      }));
      
      setDistrictList(listTemp);
      setListLocation(tempLocationList);
  }

  async function firstRenderData ()  {
      await getFirstRenderData();
  }

  async function getUserLocationSync() {
    await getUserLocation();
    console.log(userLocation);
  }

  useEffect(() => {getUserLocationSync();}, [])

  useEffect(() => {
    if (window.ZaloPay.isZaloPay) {
      window.ZaloPay.showLoading()
    }

    firstRenderData();

    if (window.ZaloPay.isZaloPay) {
      window.ZaloPay.hideLoading()
    }

  }, [userLocation])


  const handleFilter = async (vehicles) => {
    if (window.ZaloPay.isZaloPay) {
        window.ZaloPay.showLoading()
    }
    try {
      const tempData = await Service.checkIfNullDataListParking(GarageAPI.getParkingListSearch(searchString, district, userLocation, vehicles));
      setDisplayDataGarage(tempData.data);
      setVehicleType(vehicles);
    } catch (err) {
      console.log(err);
      setDisplayDataGarage([]);
      setVehicleType(["1"]);
    }
    if (window.ZaloPay.isZaloPay) {
      window.ZaloPay.hideLoading()
    }
 }

  const handleDistrict = async (event) => {
    var tempDistrict = event.target.value;
    if (window.ZaloPay.isZaloPay) {
      window.ZaloPay.showLoading();
    }
   
    try {
      if (tempDistrict == null) {
        tempDistrict = "Tất cả";
      }
    
      const tempData = await Service.checkIfNullDataListParking(GarageAPI.getParkingListSearch(searchString, tempDistrict, userLocation, vehicleType));
      setDisplayDataGarage(tempData.data);
      setDistrict(tempDistrict);
    } catch (err) {
      console.log(err);
      setDisplayDataGarage([]);
      setDistrict("Tất cả");
    }
  
   if (window.ZaloPay.isZaloPay) {
      window.ZaloPay.hideLoading();
    }
  }

  const handleSearch = async (str) => {
   
    try {
      const tempData = await Service.checkIfNullDataListParking(GarageAPI.getParkingListSearch(str, district, userLocation, vehicleType));
      setDisplayDataGarage(tempData.data);
      setSearchString(str);
    } catch(err) {
      console.log(err);
      setDisplayDataGarage([]);
      setSearchString("");
    }
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
           {districtList.map((item) => <MenuItem value={item}>{item}</MenuItem>)} 
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