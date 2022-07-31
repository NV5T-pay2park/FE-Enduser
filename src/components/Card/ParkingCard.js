import { Box, Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

const ParkingCard = ({ value }) => {
    const getAddress = (value) => {
        return `${value.street}, ${value.ward}, ${value.district}`
    }

    const address = getAddress(value);
    const timeOpen = value.timeOpen.toString().substr(0, 5);
    const timeClose = value.timeClose.toString().substr(0, 5);

  return (
    <Card sx={{ display: 'flex', width: '100%', }}>
        <CardMedia
            component="img"
            sx={{ width: 100, height: 100, margin: 0.5 }}

            image="./toro_cry.webp"

            alt="parking"
        />
        <Box sx={{padding: 0, height: 110}}>
            <CardContent sx={{padding: "1px"}}>
                {value.status === 0 ? <Typography component="div" fontSize={12} color="#06BE04" fontWeight={"bold"} marginTop={1}>
                    Còn chỗ
                </Typography> : <Typography component="div" fontSize={12} color="red" fontWeight={"bold"} marginTop={1}>
                    Hết chỗ
                </Typography>}
                <Typography fontSize={15} component="div" marginTop="1px" fontWeight={"bold"}>
                {(value.parkingLotName.length <= 20) ? value.parkingLotName : value.parkingLotName.substr(0, 20) + "..."}
                </Typography>
                <Typography fontSize={10} component="div">
                {(address.length <= 35) ? address : address.substr(0, 35) + "..."}
                </Typography>
                <Typography fontSize={10} component="div">
                    {value.timeMoving} phút • {value.distance} km • {value.phoneNumber}
                </Typography>
                <Typography fontSize={10} component="div">
                    Giờ mở cửa: {timeOpen} AM - {timeClose} PM
                </Typography>
            </CardContent>
        </Box>
    </Card>
  )
}

export default ParkingCard