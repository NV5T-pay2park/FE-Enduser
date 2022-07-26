import React, { useContext, useEffect, useLayoutEffect, } from 'react'
import Ticket from '../../features/Tickets/Ticket';
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Box, Button, Container } from '@mui/material';
import styles from './style.css';
import { AppContext } from '../../AppContext';
import NotFoundCard from '../../components/NotFoundCard';
import { useNavigate } from 'react-router-dom';

import * as Constant from '../../config/config'
import * as TicketAPI from '../../api/ticketAPI'
import * as Service from '../../services/index'
import NotFoundSwipeCard from '../../components/NotFoundSwiperSlide/NotFoundSwipeCard';
import EmptySwipeSlide from '../../components/NotFoundSwiperSlide/EmptySwipeSlide';

const mockData = {"status":"OK","message":"Success","data":[{"id":18,"checkInTime":"2022-07-18T07:27:48Z","checkOutTime":null,"licensePlates":"77C1-44094","vehicleType":{"id":1,"vehicleTypeName":"Xe máy","hibernateLazyInitializer":{}},"endUser":{"id":2,"firstName":"Partypooper009","lastName":"throwaway217217","gender":0,"phone":"0790529870","email":"throwaway217217@gmail.com"},"parkingLot":{"id":6,"parkingLotName":"Hiệp Phú","numberSlot":101,"numberSlotRemaining":101,"address":"Bình Chiểu, Thành phố Thủ Đức, TPHCM","status":0,"merchant":{"id":1,"name":"Thành phố Thủ Đức","represent":"Lee4an","email":"Lee4an@gmail.com","phone":"0906094163","hibernateLazyInitializer":{}},"lat":10.884166717529297,"ing":106.73027801513672,"timeOpen":5,"timeClose":22,"phoneNumber":"982347126","hibernateLazyInitializer":{}}},{"id":25,"checkInTime":"2022-07-24T17:03:51Z","checkOutTime":null,"licensePlates":"77C1-67567","vehicleType":{"id":1,"vehicleTypeName":"Xe máy","hibernateLazyInitializer":{}},"endUser":{"id":2,"firstName":"Partypooper009","lastName":"throwaway217217","gender":0,"phone":"0790529870","email":"throwaway217217@gmail.com"},"parkingLot":{"id":4,"parkingLotName":"Bến Nghé","numberSlot":71,"numberSlotRemaining":71,"address":"Linh Trung, Thành phố Thủ Đức, TPHCM","status":0,"merchant":{"id":1,"name":"Thành phố Thủ Đức","represent":"Lee4an","email":"Lee4an@gmail.com","phone":"0906094163","hibernateLazyInitializer":{}},"lat":10.86388874053955,"ing":106.78277587890625,"timeOpen":5,"timeClose":22,"phoneNumber":"982347126","hibernateLazyInitializer":{}}}]}

const HomePage = () => {

  const context = useContext(AppContext)
  const navigate = useNavigate()
  const isFirstTime = useRef(true)
  let ticketElements

  useLayoutEffect(() => {
    isFirstTime.current = false
    const getTickets = async () => {
      if (window.ZaloPay.isZaloPay) {
        window.ZaloPay.showLoading();
      }
      let tempList
      // test call local api
      try{
        const apiResponseData = await fetch(Constant.SERVER_BASE_URL + '/api/getTicketByEndUserId?endUserID=3')
        const ticketListDataJSON = await apiResponseData.json()
        // const ticketListDataJSON = await TicketAPI.getTicketByEndUserId(2)
        const ticketListData = ticketListDataJSON.data
        console.log("home api response: ")
        console.log(ticketListData)
        if (window.ZaloPay.isZaloPay) {
          window.ZaloPay.hideLoading();
        }
        tempList = ticketListData
        await context.setTicketList(ticketListData)
      }catch(err){
        console.error("error: ")
        console.log(err);
        // if (window.ZaloPay.isZaloPay) {
        //   window.ZaloPay.hideLoading();
        // }
        if (window.ZaloPay.isZaloPay) {
          window.ZaloPay.hideLoading();
        }
        await context.setTicketList(mockData.data)
        tempList = mockData.data
        console.log("after set data")
      }
     
      
      // const apiResponseData = await fetch(Constant.SERVER_BASE_URL + '/api/getTicketByEndUserId?endUserID=7')
      // const ticketListDataJSON = await apiResponseData.json()
      // const ticketListData = ticketListDataJSON.data
      // console.log("home api response: ")
      // console.log(ticketListData)

      // if (window.ZaloPay.isZaloPay) {
      //   window.ZaloPay.hideLoading();
      // }
      // await context.setTicketList(mockData.data)
      // await context.setTicketList(ticketListData)
      
      // end test

      // old versio

      // const res = await fetch('https://jsonplaceholder.typicode.com/users')
      // const data = await res.json()
      // if (window.ZaloPay.isZaloPay) {
      //   window.ZaloPay.hideLoading();
      // }
      // await context.setTicketList(data)
      
      // end old version
    }
    getTickets();
  
  }, [])
  // console.log(context.ticketList)
  ticketElements = Service.getCheckedNullList(context.ticketList).map(ticket =><SwiperSlide key={ticket.id}><Ticket ticketData={ticket}/></SwiperSlide>)
  console.log("first time" + isFirstTime.current)
  // ticketElements = context.ticketList.map(ticket =><SwiperSlide key={ticket.id}><Ticket ticketData={ticket}/></SwiperSlide>)
  
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
          { isFirstTime.current && context.ticketList.length === 0 ? emptyElement : context.ticketList.length === 0 ?
            notFoundElement :
            ticketElements
          }
        </Swiper>
        <Box textAlign='center' alignItems='center'>
            <Button size='small' variant="text" sx={{color: 'white', align: 'center'}} onClick={() => navigate('/history')}>Xem tất cả</Button>
        </Box>
        <Box textAlign='center' alignItems='center'>
            <Button size='small' variant="text" sx={{color: 'white', align: 'center'}} onClick={() => navigate('/user')}>Thông tin cá nhân</Button>
        </Box>
    </Container>
  )
}

export default HomePage