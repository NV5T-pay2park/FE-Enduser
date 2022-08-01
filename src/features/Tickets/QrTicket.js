import React from 'react';
import { QRCode } from 'react-qrcode-logo';

const QrTicket = ({data}) => {

  const ticketJSON = {
    endUserID: data.endUserID,
    ticketID: data.ticketID
  }

  const json = JSON.stringify(ticketJSON)

  
  
  
  return (
    <QRCode 
      value={json}
      eyeRadius={[
        {
          outer: [10, 10, 0, 10],
          inner: [0, 10, 10, 10],
        },
        [10, 10, 10, 0], 
        [10, 0, 10, 10], 
      ]}
      size='200' 
      logoImage="https://res.cloudinary.com/mernteam/image/upload/v1658311022/ZaloPay/zplogo_qn7xic.png" 
      logoWidth='100' 
      logoHeight='100' 
      bgColor='#FFFFFF'
      logoOpacity={0.6}
    />
    
  )
}

export default QrTicket