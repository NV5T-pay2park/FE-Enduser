import { Box, Button, Container } from '@mui/material';
import React, { useContext, useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { AppContext } from '../../AppContext';
import NotFoundCard from '../../components/NotFoundCard';
import Ticket from '../../features/Tickets/Ticket';
import styles from './style.css';
import * as LoginAPI from '../../api/loginAPI';
import * as TicketAPI from '../../api/ticketAPI';
import * as Service from '../../services/index';

const mockData = {"status":"OK","message":"Success","data":[{"ticketID":7,"checkInTime":"2022-07-18T14:27:45Z","amount":null,"licensePlate":"77C1-99794","vehicleType":"Xe mÃ¡y","endUserID":3,"endUserName":"Jenna1021 neccernpogrlinzi15","parkingLotID":5,"parkingLotName":"BÃ¬nh Chiá»ƒu","status":false},{"ticketID":16,"checkInTime":"2022-07-18T14:27:48Z","amount":null,"licensePlate":"77C1-10662","vehicleType":"Xe mÃ¡y","endUserID":3,"endUserName":"Jenna1021 neccernpogrlinzi15","parkingLotID":2,"parkingLotName":"Thá»§ ThiÃªm","status":false},{"ticketID":26,"checkInTime":"2022-07-26T00:24:02Z","amount":null,"licensePlate":"77C1-67567","vehicleType":"Xe mÃ¡y","endUserID":3,"endUserName":"Jenna1021 neccernpogrlinzi15","parkingLotID":4,"parkingLotName":"Báº¿n NghÃ©","status":false}]}
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
        // const ticketListData = await TicketAPI.getTicketByEndUserId(2)
        const zaloPayID = await Service.getZaloPayID()
        let userId
        try {
          const loginDataResponse = await LoginAPI.requestLogin(zaloPayID)
          userId = loginDataResponse.endUserID !== undefined ? loginDataResponse.endUserID : 1
        } catch (error) {
          userId = 4
        }
        context.setUserInfo({
          zlpId: zaloPayID,
          id: userId,
        })
        const ticketListData = await TicketAPI.getTicketByEndUserId(userId)
        if (window.ZaloPay.isZaloPay) {
          window.ZaloPay.hideLoading();
        }
        tempList = ticketListData
        await context.setTicketList(ticketListData)
      }catch(err){
        console.log(err);
        if (window.ZaloPay.isZaloPay) {
          window.ZaloPay.hideLoading();
        }
        await context.setTicketList(mockData.data)
      }
     
    }
    getTickets();
  
  }, [])
  ticketElements = Service.getCheckedNullList(context.ticketList).map(ticket =><SwiperSlide key={ticket.ticketID}><Ticket ticketData={ticket}/></SwiperSlide>)
  
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
       
            <Box test-id="button" size='small' variant="text" sx={{color: 'white', align: 'center'}} >User ID: {context.userInfo.id}</Box>

            <Button size='small' variant="text" sx={{color: 'white', align: 'center'}} onClick={() => navigate('/history')}>Xem tất cả</Button>


            {/* <Button size='small' variant="text" sx={{color: 'white', align: 'center'}} onClick={() => navigate('/user')}>Thông tin cá nhân</Button> */}
    </Container>
  )
}

export default HomePage