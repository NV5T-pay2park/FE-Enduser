import { Garage } from '@mui/icons-material';
import React, { useState } from 'react';
import '../../../components/ComboBox/index';
import ComboBox from '../../../components/ComboBox/index';
import ListCard from '../../../components/ListCard/index';
import Box from '@mui/material/Box';
import { flexbox } from '@mui/system';
import { DataGarage } from '../../../models/Garage';

const Search = () => {
 
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

  return (
    <div style={{ flexDirection: 'row', height: 'calc(100vh - 112px)' }}>

      <ComboBox listName={DataGarage} handleChoose={handleChoose} />
      <ListCard list={DisplayDataGarage} />

    </div>
  )
}

export default Search