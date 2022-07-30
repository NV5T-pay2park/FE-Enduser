import { Card, CardContent, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import * as CheckInOutAPI from '../../api/checkInOutAPI'
import * as Constant from '../../config/config'
import QrTicket from '../../features/Tickets/QrTicket'
const TicketCheckout = () => {

  const location = useLocation();
  const ticketData = location.state

  const [countdown, setCountdown] = useState(15)

  const navigate = useNavigate();

  const intervalID = useRef()
  const timeoutID = useRef()
  const prevCount = useRef()

  const fetchPaymentCheckout = async () => {
      let x = Math.floor((Math.random() * 1000) + 200);
      const param = {
        "userId": x,
        "ticketId": 4322312,
        "amount": 1000
      }  
      
      // const url = Constant.SERVER_BASE_URL + `/api/getCreateOrder?userId=${x}&ticketId=22&amount=2000`
      const url = Constant.SERVER_BASE_URL + `/api/queryPaymentUrl?endUserId=${ticketData.endUserID}&ticketId=${ticketData.ticketID}`

      try {
        const checkoutResult = await CheckInOutAPI.getCheckoutPaymentData(ticketData.endUserID, ticketData.ticketID)
        const paymentData = checkoutResult.data
        const zpTransToken = paymentData.zpTransToken
        if (zpTransToken !== undefined && zpTransToken !== "") {
            stopPingRequest()
            var cb = function (data) {
          
            };

            const res = await window.ZaloPay.payOrder({
              appid: Constant.APP_ID,
              zptranstoken: zpTransToken,
            }, cb)
            
            

            // if (res?.code === 1) {
            //   navigate('/')
            // } else {
            //   navigate('/search')
            // }
        }
        // kích hoạt quá trình thanh toán đối với trường hợp hoá đơn >= 2 KB
        
      } catch (err) {
        console.log(err)
      }
  }

  const stopPingRequest = () => {
    clearInterval(intervalID.current)
    clearTimeout(timeoutID.current);
    // navigate('/')
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
      clearInterval(intervalID.current)
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