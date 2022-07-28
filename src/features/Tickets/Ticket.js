import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const Ticket = ({ticketData}) => {

  //console.log(ticketData)
  const navigate = useNavigate()

  return (
    <Card sx={{ maxWidth: '80vw', height: '70vh', marginTop: '0px', borderRadius: '20px', minWidth: '80vw' }} variant="outlined">
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" align="center">
              Thẻ Giữ Xe {ticketData.parkingLotName}
            </Typography>
        </CardContent>
        <Box alignItems="center" justifyContent="center" display="flex">
            <CardMedia
              component="img"
              sx={{height: 140, width: 140}}
              image="./toro_cry_rmbg.png"
              alt="qrcode"
            />
            {/* <QrTicket data={ticketData}/> */}
        </Box>
        <CardContent>
            <Typography gutterBottom variant="h8" component="div" align='center' color='black'>
                {ticketData.status === false ? "Chưa thanh toán" : "Đã thanh toán"}
            </Typography>
            <Typography variant="h7" color="text.secondary" component="div">
              Loại xe: {ticketData.vehicleType}
            </Typography> 
            <Typography variant="h7" color="text.secondary">
              Giờ vào: {ticketData.checkInTime}
            </Typography>
        </CardContent>
        <Box alignItems="center" justifyContent="center" display="flex">
            <Button size='small' variant="outlined" sx={{align: 'center'}} onClick={() => navigate('/ticket/checkout', { state: ticketData})}>Thanh Toán</Button>
        </Box>
    </Card>
  )
}

export default Ticket