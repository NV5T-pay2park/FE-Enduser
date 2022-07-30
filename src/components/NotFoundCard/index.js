import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// import { AppContext } from '../../AppContext'
import axios from 'axios'
import * as Constant from '../../config/config'
import * as CheckInOutAPI from '../../api/checkInOutAPI';

const mockNewTicket = {"id":101,"checkInTime":"2022-07-18T07:27:48Z","checkOutTime":null,"licensePlates":"77C1-44094","vehicleType":{"id":1,"vehicleTypeName":"Xe máy","hibernateLazyInitializer":{}},"endUser":{"id":2,"firstName":"Partypooper009","lastName":"throwaway217217","gender":0,"phone":"0790529870","email":"throwaway217217@gmail.com"},"parkingLot":{"id":6,"parkingLotName":"Hiệp Phú","numberSlot":101,"numberSlotRemaining":101,"address":"Bình Chiểu, Thành phố Thủ Đức, TPHCM","status":0,"merchant":{"id":1,"name":"Thành phố Thủ Đức","represent":"Lee4an","email":"Lee4an@gmail.com","phone":"0906094163","hibernateLazyInitializer":{}},"lat":10.884166717529297,"ing":106.73027801513672,"timeOpen":5,"timeClose":22,"phoneNumber":"982347126","hibernateLazyInitializer":{}}}

const NotFoundCard = ({userInfo, insertTicket}) => {

  const navigate = useNavigate();
  // const context = useContext(AppContext);

  const scanWithZaloPayQR = async () => {
    window.ZLP.Device().scanQRCode({ "needResult": 1, "scanType": 'qrCode'}).then(async (value) => {        
      let parkingId = value.page
      if (parkingId !== undefined) {
        window.ZaloPay.showLoading()
        try {
          parkingId = parseInt(parkingId)
          if (isNaN(parkingId) || parkingId < 0) parkingId = 12
          const res = await CheckInOutAPI.requestCheckIn(userInfo.id, parkingId)
          if (res.message === "Success") {

            const newTicket = res.data
            window.ZaloPay.hideLoading()
            if (newTicket.ticketID !== undefined) {
              insertTicket(newTicket)
            }
          } else {
            window.ZaloPay.hideLoading()
          }
          navigate('/')
        } catch (err) {
          window.ZaloPay.hideLoading()
          navigate('/')
        } 
      }
    })
}

  return (
    <Card sx={{ maxWidth: '80vw', height: '70vh', marginTop: '0px', borderRadius: '20px', minWidth: '80vw' }} variant="outlined">
    <Box alignItems="center" justifyContent="center" display="flex">
      <CardMedia
        component="img"
        sx={{height: 140, width: 140, marginTop: 5}}
        // image="./toro_cry_rmbg.png"
        image="./toro_cry.webp"

        alt="toro_cry"
      />
    </Box>
    <CardContent>
      <Typography gutterBottom sx={{fontSize: 16}} component="div" align='center' color='blue'>
          Bạn không có thẻ xe cần thanh toán
      </Typography>
      <Typography sx={{fontSize: 13}} color="text.secondary" component="div">
        Quét mã checkin để gửi xe
      </Typography>
      <Button onClick={scanWithZaloPayQR} align='center' variant="contained" fullWidth="true" sx={{backgroundColor: '#008fe5', maxWidth: 290, marginTop: 10}}>Quét mã QR</Button>
    </CardContent>
  </Card>
  )
}

export default NotFoundCard