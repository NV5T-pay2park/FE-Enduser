import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { BottomNavigationAction, hexToRgb, Paper } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import BookOnlineIcon from '@mui/icons-material/BookOnline';

import css from './bottom.css'

import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import * as Constant from '../../config/config'
import * as CheckInOutAPI from '../../api/checkInOutAPI'

const mockNewTicket = {"id":101,"checkInTime":"2022-07-18T07:27:48Z","checkOutTime":null,"licensePlates":"77C1-44094","vehicleType":{"id":1,"vehicleTypeName":"Xe máy","hibernateLazyInitializer":{}},"endUser":{"id":2,"firstName":"Partypooper009","lastName":"throwaway217217","gender":0,"phone":"0790529870","email":"throwaway217217@gmail.com"},"parkingLot":{"id":6,"parkingLotName":"Hiệp Phú","numberSlot":101,"numberSlotRemaining":101,"address":"Bình Chiểu, Thành phố Thủ Đức, TPHCM","status":0,"merchant":{"id":1,"name":"Thành phố Thủ Đức","represent":"Lee4an","email":"Lee4an@gmail.com","phone":"0906094163","hibernateLazyInitializer":{}},"lat":10.884166717529297,"ing":106.73027801513672,"timeOpen":5,"timeClose":22,"phoneNumber":"982347126","hibernateLazyInitializer":{}}}

const BottomNavigationBar = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const context = useContext(AppContext);

  const handleScanQR = async () => {
    if (window.ZaloPay.isZaloPay) {
        await scanWithZaloPayQR()
    } else {
        navigate('/qr')
    }
  }

  const scanWithZaloPayQR = async () => {
      window.ZLP.Device().scanQRCode({ "needResult": 1, "scanType": 'qrCode'}).then(async (value) => {        
        let parkingId = value.page
        if (parkingId !== undefined) {
          window.ZaloPay.showLoading()
          try {
            parkingId = parseInt(parkingId)
            if (isNaN(parkingId) || parkingId < 0) parkingId = 12
            const res = await CheckInOutAPI.requestCheckIn(context.userInfo.id, parkingId)
            if (res.message === "Success") {

              const newTicket = res.data
              window.ZaloPay.hideLoading()
              if (newTicket.ticketID !== undefined) {
                context.insertTicket(newTicket)
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
    <BottomNavigation
      showLabels
      sx={{ width: '100%', position: 'absolute', bottom: 0 }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Vé" icon={<BookOnlineIcon />} onClick={() => navigate('/')} />
      <BottomNavigationAction icon={<QrCodeScannerIcon />} onClick={handleScanQR} className={css.qr} />
      <BottomNavigationAction label="Tìm kiếm" icon={<LocationSearchingOutlinedIcon />} onClick={() => navigate('/search')} />
    </BottomNavigation>

  )
}

export default BottomNavigationBar