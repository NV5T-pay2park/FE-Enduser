import BookOnlineIcon from '@mui/icons-material/BookOnline';
import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { BottomNavigationAction } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import React, { useContext } from 'react';

import css from './bottom.css';

import { useNavigate } from 'react-router-dom';
import * as CheckInOutAPI from '../../api/checkInOutAPI';
// import { AppContext } from '../../AppContext';

const mockNewTicket = {"id":101,"checkInTime":"2022-07-18T07:27:48Z","checkOutTime":null,"licensePlates":"77C1-44094","vehicleType":{"id":1,"vehicleTypeName":"Xe máy","hibernateLazyInitializer":{}},"endUser":{"id":2,"firstName":"Partypooper009","lastName":"throwaway217217","gender":0,"phone":"0790529870","email":"throwaway217217@gmail.com"},"parkingLot":{"id":6,"parkingLotName":"Hiệp Phú","numberSlot":101,"numberSlotRemaining":101,"address":"Bình Chiểu, Thành phố Thủ Đức, TPHCM","status":0,"merchant":{"id":1,"name":"Thành phố Thủ Đức","represent":"Lee4an","email":"Lee4an@gmail.com","phone":"0906094163","hibernateLazyInitializer":{}},"lat":10.884166717529297,"lng":106.73027801513672,"timeOpen":5,"timeClose":22,"phoneNumber":"982347126","hibernateLazyInitializer":{}}}

const BottomNavigationBar = ({userInfo, insertTicket}) => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  // const context = useContext(AppContext);

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

  const navigateToSearch = () => {
    navigate('/search')
  }

  return (
    <BottomNavigation
      showLabels
      // sx={{ width: '100%', position: 'absolute', bottom: 0 }}
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Vé" icon={<BookOnlineIcon />} onClick={() => navigate('/')} />
      <BottomNavigationAction label="Quét" showLabel={false} data-testid="qr-page" icon={<QrCodeScannerIcon />} onClick={handleScanQR} className={css.qr} />
      <BottomNavigationAction label="Tìm kiếm" icon={<LocationSearchingOutlinedIcon />} onClick={navigateToSearch} />
    </BottomNavigation>

  )
}

export default BottomNavigationBar