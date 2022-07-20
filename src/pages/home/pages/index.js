import React, { useContext, useEffect, useLayoutEffect, } from 'react'
import Ticket from '../../../components/Ticket/Ticket'
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import styles from './style.css';
import { AppContext } from '../../../AppContext';
import NotFoundCard from '../../../components/notFoundCard';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  const context = useContext(AppContext)
  const navigate = useNavigate()
  const [isFirstTime, setIsFirstTime] = useState(true)

  useLayoutEffect(() => {
    console.log("call fetch data in home")
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(posts => {
    //   context.setTicketList(posts)
    // })

    const getTickets = async () => {
      if (window.ZaloPay.isZaloPay) {
        window.ZaloPay.showLoading();
      }
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      if (window.ZaloPay.isZaloPay) {
        window.ZaloPay.hideLoading();
      }
      await context.setTicketList(data)
    }
    getTickets()
    setIsFirstTime(false)
  }, [])

  const ticketElements = context.ticketList.map(ticket =><SwiperSlide key={ticket.id}><Ticket ticketData={ticket}/></SwiperSlide>)
  const notFoundElement = <SwiperSlide><NotFoundCard/></SwiperSlide>
  const emptyElement = <SwiperSlide><Box></Box></SwiperSlide>

  return (
    <Container sx={{ backgroundColor: '#008FE5', height: 'calc(100vh - 56px)'}}>
        <Swiper
          spaceBetween={150}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        >
          { isFirstTime ? emptyElement : context.ticketList.length <= 0 ?
            notFoundElement :
            ticketElements
          }
          
          {/* {ticketElements} */}
        </Swiper>
        <Box textAlign='center' alignItems='center'>
            <Button size='small' variant="text" sx={{color: 'white', align: 'center'}} onClick={() => navigate('/history')}>Xem tất cả</Button>
        </Box>
    </Container>
  )
}

export default HomePage