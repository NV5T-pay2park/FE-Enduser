import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';
import {DataGarage} from '../../models/Garage';


PaperCard.propTypes = {
  value: PropTypes.object,
};

function PaperCard() {
  var {value} = useParams();
  value = value.substr(1);
  console.log(value);
  let v = DataGarage[0];
  for(let i = 0; i < DataGarage.length; i++)
    if (DataGarage[i].id === value) {
      v = DataGarage[i];
      break;
    }
  
  return (
    <Card sx={{ maxWidth: '80vw', height: '70vh', marginTop: '0px', borderRadius: '20px', minWidth: '80vw', align: "center" }} variant="outlined">
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="center">
          Thông tin chi tiết
        </Typography>
      </CardContent>
      <Box alignItems="center" justifyContent="center" display="flex">
      
          <Avatar sx={{ width: 80, height: 80 }}>
                
              </Avatar>
        
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h8" component="div" align='center' >
          <b>{v.name}</b> 
        </Typography>
        <Typography variant="h7" color="text.secondary" component="div">
          {v.address}
        </Typography>
        <Typography variant="h7" color="text.secondary" component="div">
          {v.phone}

        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}

export default PaperCard