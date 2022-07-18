import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';
import {DataGarage} from '../../models/Garage';


PaperCard.propTypes = {
};

function PaperCard() {
  var {value} = useParams();
  value = value.substr(1);
  let v = DataGarage[0];
  for(let i = 0; i < DataGarage.length; i++)
    if (DataGarage[i].id === value) {
      v = DataGarage[i];
      break;
    }
  
  return (
    <div style={ {flexDirection: 'row', maxHeight: 'calc(100vh - 112px)' }}>
    <Card sx={{ maxWidth: '80vw', height: '70vh', marginTop: '0px', borderRadius: '20px', minWidth: '80vw', align: "center",  }} variant="outlined">
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="center">
          Thông tin chi tiết
        </Typography>
      </CardContent>
      <Box alignItems="center" justifyContent="center" display="flex">
        <Avatar sx={{ width: 80, height: 80 }}>
              </Avatar>
      </Box>
      <CardContent style={{ lineHeight: "24px" }}>
        <Typography gutterBottom variant="h8" component="div" align='center' >
          <b>{v.name}</b> 
        </Typography>
        <Typography variant="h7" component="div">
          <b> Địa chỉ: </b>{v.address}
        </Typography>
        <Typography variant="h7" component="div">
          <b> Số điện thoại: </b>{v.phone}
        </Typography>
        <Typography variant="h7" component="div">
          <b> Giờ làm việc: </b> {v.timeWorking}
        </Typography>
        <Typography variant='h7'>
         <b> Trạng thái: </b>{v.status === "available" ? <div style={{color:'green'}}> Còn chỗ</div> : <div style={{color: 'red'}}> Hết chỗ</div> }
        </Typography>
        <Typography variant="h7" component="div" paragraph>
          <b> Mô tả: </b> {v.discription}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    </div>
  )
}

export default PaperCard