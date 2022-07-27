import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useLocation, useNavigate } from 'react-router-dom'
import QrTicket from '../../features/Tickets/QrTicket'
import axios from 'axios'
import * as Constant from '../../config/config'
import * as TicketAPI from '../../api/ticketAPI'
import * as Service from '../../services/index'

const TicketCheckout = () => {

  const location = useLocation();
  const ticketData = location.state

  const [countdown, setCountdown] = useState(15)

  const navigate = useNavigate();

  const intervalID = useRef()
  const timeoutID = useRef()
  const prevCount = useRef()

  // const fetchPaymentCheckout = () => {
  //   axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
  //   .then(res => {
  //     const post = res.data;
  //     console.log(post)
  //     stopPingRequest()
  //     window.location.href = "https://sbgateway.zalopay.vn/openinapp?order=eyJ6cHRyYW5zdG9rZW4iOiIyMjA3MjYwMDAwMDk2MDR5NVpWdzA3IiwiYXBwaWQiOjk5OTg4OH0"
  //   })
  //   .catch(error => console.log("err: " + error));
  // }

  const fetchPaymentCheckout = () => {
    let x = Math.floor((Math.random() * 1000) + 200);
    // console.log("random user id: " + x)
      const param = {
        "userId": x,
        "ticketId": 4322312,
        "amount": 1000
      }

      // axios.post(Constant.SERVER_BASE_URL + '/api/createOrder', param, {
      //   headers: {
      //     'Accept': 'application/json',
      //   'Content-Type': 'application/json'
      //   }
      // })
      // .then(function (response) {
      //   console.log("response localhost: " + response);
      //   const orderDataJSON = response.json()
      //   // const ticketListDataJSON = await TicketAPI.getTicketByEndUserId(2)
      //   const orderDara = orderDataJSON.data
      //   stopPingRequest()
      //   window.location.href = orderDara.orderUrl
      //   // navigate('/')
      // })
      // .catch(function (error) {
      //   console.log("error: " + error);
      //   // context.insertTicket(mockNewTicket)

      //   navigate('/')
      // });

      
      
      
      // const url = Constant.SERVER_BASE_URL + `/api/getCreateOrder?userId=${x}&ticketId=22&amount=2000`
      const url = Constant.SERVER_BASE_URL + `/api/queryPaymentUrl?endUserId=${ticketData.endUserID}&ticketId=${ticketData.ticketID}`


      fetch(url, {
        method: 'GET', // or 'PUT'
        credentials: 'omit', // include, *same-origin, omit
        mode: 'cors',
        headers: {
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'
        },
      })
      .then((response) => response.json())
      .then((orderDataJSON) => {
        // console.log('Success:', orderDataJSON);
        const orderData = orderDataJSON.data
        stopPingRequest()
        // window.location.href = orderDara.orderUrl

        const zpTransToken = orderData.zpTransToken
        window.ZaloPay.payOrder({
          appid: 805,
          zptranstoken: zpTransToken,
          }, cb)

          var cb = function (data) {
            // window.ZaloPay.showDialog({
            //   title: "Checkout Info: ",
            //   message: "status: " + JSON.stringify(data),
            //   button: "OK"
            // }); 
          };
      })
      .catch((error) => {
        // console.error('Error:', error);
        navigate('/')
      });
      








      // const response = await fetch(url, {
      //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
      //   mode: 'cors', // no-cors, *cors, same-origin
      //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //   credentials: 'same-origin', // include, *same-origin, omit
      //   headers: {
      //     'Content-Type': 'application/json'
      //     // 'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   redirect: 'follow', // manual, *follow, error
      //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //   body: JSON.stringify(param) // body data type must match "Content-Type" header
      // });
      // return response.json(); // parses JSON response into native JavaScript objects

      
      // const sample = { username: 'example' };
      // fetch('https://pay2park.ep-eng.io/api/createOrder', {
      //   method: 'POST', // or 'PUT'
      //   headers: {
      //     'Accept': 'application/json, text/plain',
      //     'Content-Type': 'application/json',
      //   },
      //   body: {
      //     "userId": 1000,
      //     "ticketId": 4322312,
      //     "amount": 1000
      //   },
      // })
      // .then((response) => response.json())
      // .then((orderDataJSON) => {
      //   console.log('Success:', orderDataJSON);
      //   const orderDara = orderDataJSON.data
      //   stopPingRequest()
      //   window.location.href = orderDara.orderUrl
      // })
      // .catch((error) => {
      //   console.error('Error:', error);
      //   navigate('/')
      // });

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