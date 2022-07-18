import React from 'react';
import { useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';

function Map() {
    var {value} = useParams();
    value = value.substr(1);
    value = '1';
    const src = "./1.png";
    return (
        <Paper style={ {height: 'calc(100vh - 112px)'}}>  <img src={require("./../../models/map/1.png")}/></Paper>
       
    )
}

export default Map;