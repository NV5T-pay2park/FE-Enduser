import React from 'react'
import { QRCode } from 'react-qrcode-logo';

const QrTicket = ({data}) => {

  const json = JSON.stringify({
    "ticketId": data.id,
    "userId": 452452,
    "parkingId": 1231,
    "time": 1435134513,
  })
  
  return (
    // <QRCode value="https://zalopay.vn" size='140' logoImage='./ZaloPay-logo.png' logoWidth='40' logoHeight='40' bgColor='#FFFFFF'/>
    <QRCode value={json} size='140' logoImage='./ZaloPay-logo.png' logoWidth='40' logoHeight='40' bgColor='#FFFFFF'/>
    
  )
}

export default QrTicket