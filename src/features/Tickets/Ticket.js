import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { formatDateTime } from '../../services'

const Ticket = ({ticketData}) => {
  const navigate = useNavigate()
  const navigateToCheckout = () => {
    navigate('/ticket/checkout', { state: ticketData})
  }

  return (
    <Card sx={{ maxWidth: '80vw', height: '70vh', marginTop: '0px', borderRadius: '20px', minWidth: '80vw' }} variant="outlined">
        <CardContent>
            <Typography test-id="parkingName" gutterBottom variant="h5" component="div" align="center">
              Nhà Xe {ticketData.parkingLotName}
            </Typography>
        </CardContent>
        <Box alignItems="center" justifyContent="center" display="flex">
            <CardMedia
              component="img"
              sx={{height: 156, width: 120}}
              image="./toro15.webp"
              alt="qrcode"
            />
        </Box>
        <CardContent>
            <Typography gutterBottom sx={{fontSize: 20}} component="div" align='center' color='black'>
                {ticketData.status === false ? "Chưa thanh toán" : "Đã thanh toán"}
            </Typography>
            <Typography sx={{fontSize: 14, color: "#727F8C"}}  component="div">
              {ticketData.vehicleType}: {ticketData.licensePlate}
            </Typography> 
            <Typography sx={{fontSize: 14, color: "#727F8C"}}>
              Giờ vào: {formatDateTime(ticketData.checkInTime)}
            </Typography>
        </CardContent>
        <Box alignItems="center" justifyContent="center" display="flex">
            <Button size='small' variant="outlined" sx={{align: 'center'}} onClick={navigateToCheckout}>Thanh Toán</Button>
        </Box>
    </Card>
  )
}

export default Ticket