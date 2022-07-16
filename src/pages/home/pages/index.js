import React, { useContext, useEffect } from 'react'
import Ticket from '../../../components/Ticket/Ticket'
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { Box, Container, Grid } from '@mui/material';
import styles from './style.css';
import { AppContext } from '../../../AppContext';

const HomePage = () => {

  const context = useContext(AppContext)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(posts => {
        context.setTicketList(posts)
    })
  }, [])
  
  const ticketElements = context.ticketList.map(ticket =><SwiperSlide key={ticket.id}><Ticket ticketData={ticket}/></SwiperSlide>)

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
          {/* <SwiperSlide><Ticket /></SwiperSlide>
          <SwiperSlide><Ticket /></SwiperSlide>
          <SwiperSlide><Ticket /></SwiperSlide>
          <SwiperSlide><Ticket /></SwiperSlide> */}
          {ticketElements}
        </Swiper>
    </Container>
  )
}

export default HomePage