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


const mockNewTicket = {"id":101,"checkInTime":"2022-07-18T07:27:48Z","checkOutTime":null,"licensePlates":"77C1-44094","vehicleType":{"id":1,"vehicleTypeName":"Xe máy","hibernateLazyInitializer":{}},"endUser":{"id":2,"firstName":"Partypooper009","lastName":"throwaway217217","gender":0,"phone":"0790529870","email":"throwaway217217@gmail.com"},"parkingLot":{"id":6,"parkingLotName":"Hiệp Phú","numberSlot":101,"numberSlotRemaining":101,"address":"Bình Chiểu, Thành phố Thủ Đức, TPHCM","status":0,"merchant":{"id":1,"name":"Thành phố Thủ Đức","represent":"Lee4an","email":"Lee4an@gmail.com","phone":"0906094163","hibernateLazyInitializer":{}},"lat":10.884166717529297,"ing":106.73027801513672,"timeOpen":5,"timeClose":22,"phoneNumber":"982347126","hibernateLazyInitializer":{}}}

const BottomNavigationBar = () => {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();
  const context = useContext(AppContext);

  const scanWithZaloPayQR = () => {
    if (window.ZaloPay.isZaloPay) {
      const info = window.ZLP.Device().scanQRCode({ "needResult": 1, "scanType": 'qrCode'}).then(value => {        
        let parkingId = value.page
        window.ZaloPay.showDialog({
          title: "QR response",
          message: "QR response: " + "---id: " + parkingId + "---raw: " + JSON.stringify(value),
          button: "OK"
        });
        if (parkingId !== undefined) {
          const json2 = '{"id": 100, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz", "address": { "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874", "geo": { "lat": "-37.3159", "lng": "81.1496" }}, "phone": "1-770-736-8031 x56442", "website": "hildegard.org", "company": { "name": "Romaguera-Crona", "catchPhrase": "Multi-layered client-server neural-net", "bs": "harness real-time e-markets"}}'
          const obj = JSON.parse(json2);
          window.ZaloPay.showLoading()
        
      
          const headers = { 'Content-Type': 'application/json' }
          fetch('https://jsonplaceholder.typicode.com/posts/1', { headers })
              .then(response => response.json())
              .then(data => {
                let ticketData = obj
                window.ZaloPay.hideLoading()
                //context.insertTicket(ticketData)
                context.insertTicket(mockNewTicket)
                navigate('/')
              })
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