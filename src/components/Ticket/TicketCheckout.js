import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useLocation, useNavigate } from 'react-router-dom'
import QrTicket from './QrTicket'
import axios from 'axios'

const TicketCheckout = () => {

  const location = useLocation();
  const ticketData = location.state

  const [countdown, setCountdown] = useState(15)

  const navigate = useNavigate();

  const intervalID = useRef()
  const timeoutID = useRef()
  const prevCount = useRef()

  const fetchPaymentCheckout = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/t`)
    .then(res => {
      const post = res.data;
      console.log(post)
      stopPingRequest()
    })
    .catch(error => console.log("err: " + error));
  }

  const stopPingRequest = () => {
    clearInterval(intervalID.current)
    clearTimeout(timeoutID.current);
    navigate('/')
  }

  useEffect(() => {
    intervalID.current = setInterval(() => {
      fetchPaymentCheckout()                // ping request
      setCountdown(prev => prev - 1)
    }, 1000);
    timeoutID.current = setTimeout(() => {
      clearInterval(intervalID.current);
      navigate('/')
    }, 15000);
    return () => {
      clearTimeout(timeoutID.current);
    }
  }, [])

  useEffect(() => {
    prevCount.current = countdown
  }, [countdown])


  return (
    <Container sx={{ backgroundColor: '#008FE5', height: 'calc(100vh - 56px)', display: "flex", justifyContent: "center", alignItems: "center"}}>

      <Card sx={{ maxWidth: '80vw', height: '70vh', marginTop: '0px', borderRadius: '20px', minWidth: '80vw' }} variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            Thẻ Giữ Xe {ticketData.name}
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
          <Typography gutterBottom component="div" align='center' color='black' fontSize={12}>
              Ẩn thông tin sau: {countdown}s
          </Typography>
          {/* <Typography variant="h7" color="text.secondary" component="div">
            id: {ticketData.id}
          </Typography>
          <Typography variant="h7" color="text.secondary">
            Giờ vào: 23h59p
          </Typography> */}
        </CardContent>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </Container>
  )
}

export default TicketCheckout