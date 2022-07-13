import React from 'react'
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

const HomePage = () => (
  <Container sx={{ backgroundColor: '#008FE5', height: '90vh'}}>
      <Swiper
        spaceBetween={150}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
      >
        <SwiperSlide><Ticket /></SwiperSlide>
        <SwiperSlide><Ticket /></SwiperSlide>
        <SwiperSlide><Ticket /></SwiperSlide>
        <SwiperSlide><Ticket /></SwiperSlide>
      </Swiper>
  </Container>


)

export default HomePage