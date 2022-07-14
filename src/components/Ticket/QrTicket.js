import React from 'react'
import { QRCode } from 'react-qrcode-logo';

const QrTicket = () => {
  return (
    <QRCode value="https://zalopay.vn" size='140' logoImage='./ZaloPay-logo.png' logoWidth='40' logoHeight='40' bgColor='#FFFFFF'/>
  )
}

export default QrTicket