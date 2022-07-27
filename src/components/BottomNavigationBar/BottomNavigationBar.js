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

const mockNewTicket = {"id":101,"checkInTime":"2022-07-18T07:27:48Z","checkOutTime":null,"licensePlates":"77C1-44094","vehicleType":{"id":1,"vehicleTypeName":"Xe máy","hibernateLazyInitializer":{}},"endUser":{"id":2,"firstName":"Partypooper009","lastName":"throwaway217217","gender":0,"phone":"0790529870","email":"throwaway217217@gmail.com"},"parkingLot":{"id":6,"parkingLotName":"Hiệp Phú","numberSlot":101,"numberSlotRemaining":101,"address":"Bình Chiểu, Thành phố Thủ Đức, TPHCM","status":0,"merchant":{"id":1,"name":"Thành phố Thủ Đức","represent":"Lee4an","email":"Lee4an@gmail.com","phone":"0906094163","hibernateLazyInitializer":{}},"lat":10.884166717529297,"ing":106.73027801513672,"timeOpen":5,"timeClose":22,"phoneNumber":"982347126","hibernateLazyInitializer":{}}}

const BottomNavigationBar = () => {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();
  const context = useContext(AppContext);

  const scanWithZaloPayQR = () => {
    if (window.ZaloPay.isZaloPay) {
      const info = window.ZLP.Device().scanQRCode({ "needResult": 1, "scanType": 'qrCode'}).then(value => {        
        let parkingId = value.page
        if (parkingId !== undefined) {
          window.ZaloPay.showLoading()
          const url = Constant.SERVER_BASE_URL + '/api/checkIn'

          fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
              'Accept': 'application/json, text/plain',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "endUserID": "3",
              "parkingLotID": "14"
            }),
          })
          .then((response) => response.json())
          .then((ticketDataJSON) => {
            const newTicket = ticketDataJSON.data
            window.ZaloPay.hideLoading()
            context.insertTicket(newTicket)
            navigate('/')
          })
          .catch((error) => {
            if (window.ZaloPay.isZaloPay) {
              window.ZaloPay.showDialog({
                title: "Checkin",
                message: "Quét mã không thành công:" + JSON.stringify(error),
                button: "OK"
              });
            }
            window.ZaloPay.hideLoading()
            // context.insertTicket(mockNewTicket)
            navigate('/')
          });
          }
          return value 
          })
      } else {
        navigate('/qr')
      }
    }

  return (
    <BottomNavigation
      showLabels
      sx={{ width: '100%', position: 'sticky', bottom: 0 }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Vé" icon={<BookOnlineIcon />} onClick={() => navigate('/')} />
      {/* <BottomNavigationAction icon={<QrCodeScannerIcon />} onClick={() => navigate('/qr')} className={css.qr} /> */}
      <BottomNavigationAction icon={<QrCodeScannerIcon />} onClick={scanWithZaloPayQR} className={css.qr} />
      <BottomNavigationAction label="Tìm kiếm" icon={<LocationSearchingOutlinedIcon />} onClick={() => navigate('/search')} />
    </BottomNavigation>

  )
}

export default BottomNavigationBar