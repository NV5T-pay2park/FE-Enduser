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
import { Box, Container, Grid, Typography } from '@mui/material';
import styles from './style.css';
import { AppContext } from '../../../AppContext';
import NotFoundCard from '../../../components/notFoundCard';

const HomePage = () => {

  const context = useContext(AppContext)
  
  useLayoutEffect(() => {
    console.log("call fetch data in home")
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(posts => {
      context.setTicketList(posts)
    })
  }, [])

  const ticketElements = context.ticketList.map(ticket =><SwiperSlide key={ticket.id}><Ticket ticketData={ticket}/></SwiperSlide>)
  const notFoundElement = <SwiperSlide><NotFoundCard/></SwiperSlide>

  return (
    <Container sx={{ backgroundColor: '#008FE5', height: '90vh'}}>
        <Swiper
          spaceBetween={150}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        >
          { context.ticketList.length <= 0 ?
            notFoundElement :
            ticketElements
          }
          
          {/* {ticketElements} */}
        </Swiper>
    </Container>
  )
}

export default HomePage