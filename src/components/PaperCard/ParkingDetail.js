import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AssistantDirectionOutlinedIcon from '@mui/icons-material/AssistantDirectionOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import { Avatar, Button, Card, CardContent, Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as GarageAPI from '../../api/garageAPI';
import * as Service from '../../services/index';
import TablePrice from '../Table/TablePrice';


ParkingDetail.propTypes = {
};

function ParkingDetail() {

  const ZaloPay = Service.ZaloPay(window.ZaloPay);

  const loc = useLocation();
  const id = Service.checkIfStringNull(loc.state.id);
  const userLocation = Service.checkIfLocationNull(loc.state.location);
  const [value, setValue] = useState({});
  
  useEffect(() => {
    async function getDetailData() {
      if (ZaloPay.isZaloPay) {
        ZaloPay.showLoading()
      }
      
      const tempData = await Service.checkIfDetailParkingNull(GarageAPI.getDetailGarage(id, userLocation));
      setValue(tempData.data);

      if (ZaloPay.isZaloPay) {
        ZaloPay.hideLoading()
      }
     
    }
    getDetailData();
  }, [])

  const navigate = useNavigate();
  return (
    <Paper style={ {height: 'calc(100vh - 56px)', display: 'flex', justifyContent: 'center', backgroundColor: '#f6f7f8'}}>
        <Stack alignItems="center">
            <Card sx={{ width: '100%', height: '80vh', marginTop: '0px', borderRadius: '0px', overflow: 'auto',}} variant="outlined">
              <CardContent>
                <Typography gutterBottom fontSize={20} component="div" align="center" color={"#24272B"}>
                  Thông tin chi tiết
                </Typography>
              </CardContent>
              <Box alignItems="center" justifyContent="center" display="flex">
                <Avatar sx={{ width: 80, height: 80 }}>
                      </Avatar>
              </Box>
              <CardContent style={{ lineHeight: "28px" }}>
                <Typography gutterBottom fontSize={24} component="div" align='center' >
                  <b>{value.parkingLotName}</b> 
                </Typography>
                <Stack direction="row" marginTop={1}>
                  <TwoWheelerIcon sx={{color: '#4286F6', marginRight: "12px"}}/>
                  <Typography fontSize={14} component="div" > {value.timeMoving} phút - {value.distance} km</Typography>
                </Stack>
                <Stack direction="row" marginTop={1}>
                  <LocationOnOutlinedIcon sx={{color: '#4286F6', marginRight: "12px"}}/>
                  <Typography fontSize={14} component="div" >{value.street}, {value.ward}, {value.district}, {value.city}</Typography>
                </Stack>
                
                <Stack direction="row" marginTop={1}>
                  <AccessTimeOutlinedIcon sx={{color: '#4286F6', marginRight: "12px"}}/>
                  <Typography fontSize={14} component="div">
                      {value.status === 0 ? <text style={{color:'green', fontWeight: 'bold'}}> Còn chỗ</text> : <text style={{color: 'red', fontWeight: 'bold'}}> Hết chỗ</text> }
                  </Typography>
                  <Typography fontSize={14} component="div" marginLeft={1} >{value.timeOpen}:00 AM - {value.timeClose}:00 PM</Typography>
                </Stack>
                <Stack direction="row" marginTop={1}>
                  <LocalPhoneOutlinedIcon sx={{color: '#4286F6', marginRight: "12px"}}/>
                  <Typography fontSize={14} component="div">0{value.phoneNumber}</Typography>
                </Stack>
                {/* <Typography variant="h7" component="div" paragraph>
                  <b> Mô tả: </b> {v.discription}
                </Typography>
                <Typography variant='h7' component="div" paragraph>
                  <b> Điều khoản sử dụng: </b>
                </Typography>
                <Typography variant="h7" component="div" paragraph> 
                  <b> Hướng dẫn sử dụng: </b>
                </Typography> */}

                <TablePrice />


              </CardContent>
          
            </Card>
            <Button 
                variant="outlined" 
                startIcon={<AssistantDirectionOutlinedIcon />} 
                sx={{marginTop: 2, width: '90vw'}} 
                onClick={() => {navigate('/googlemap', {state: {origin: userLocation, destination: {
                  lat: value.lat,
                  lng: value.lng,
                }}});}}
            >

                Hiển thị bản đồ
            </Button>
            
        </Stack>
    </Paper>
  )
}

export default ParkingDetail