import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import '../../components/ComboBox/index';
import ComboBox from '../../components/ComboBox/index';
import ListCard from '../../components/ListCard/index';
import { DataGarage } from '../../models/Garage';
import FilterChip from '../../components/Chip/index';
import { Navigate, useNavigate } from 'react-router-dom';


const Search = () => {

  navigator.geolocation.getCurrentPosition((location) => {
    console.log(location);
  })
 
  const [DisplayDataGarage, setDataGarage] = useState(DataGarage);

  const handleChoose = (str) => {
    var tempData = []
    for (let i = 0; i < DataGarage.length; i++) {
      if (DataGarage[i].name === str || typeof str !== 'string') {
        tempData.push(DataGarage[i])
      }
    }
    setDataGarage(tempData);
  }

  
  const navigate = useNavigate()
  return (
    <div style={{ flexDirection: 'row', height: 'calc(100vh - 56px)' }}>

    <Grid container spacing={0} mt={0.8}>
      <Grid item xs={8} ml={2}>
      <ComboBox  listName={DataGarage} handleChoose={handleChoose} />
      </Grid>
      <Grid item xs={3} style={{width: '100%'}} mt={0.5} ml={1} mr={0.5}>
      <Button variant="contained" style={{width: '95%'}} onClick={() => {
          navigate('/markers') 
      }}> Bản đồ</Button>
     
      </Grid>
     <Grid ml={2} mt={0.25} mb={1}>
        <FilterChip handleChoose={handleChoose}></FilterChip>
      </Grid>
    </Grid>
      <ListCard list={DisplayDataGarage} />
    </div>
  )
}

export default Search