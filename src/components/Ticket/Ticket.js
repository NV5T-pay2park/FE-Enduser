import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import QrTicket from './QrTicket'

const Ticket = ({ticketData}) => {

  //console.log(ticketData)

  return (
    <Card sx={{ maxWidth: '80vw', height: '70vh', marginTop: '0px', borderRadius: '20px', minWidth: '80vw' }} variant="outlined">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          Thẻ Giữ Xe {ticketData.username}
        </Typography>
      </CardContent>
      <Box alignItems="center" justifyContent="center" display="flex">
        {/* <CardMedia
          component="img"
          sx={{height: 140, width: 140}}
          image="./qr.jpeg"
          alt="qrcode"
        /> */}
        <QrTicket data={ticketData}/>
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h8" component="div" align='center' color='red'>
            Chưa thanh toán
        </Typography>
        <Typography variant="h7" color="text.secondary" component="div">
          id: {ticketData.id}
        </Typography>
        <Typography variant="h7" color="text.secondary">
          Giờ vào: 23h59p
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}

export default Ticket