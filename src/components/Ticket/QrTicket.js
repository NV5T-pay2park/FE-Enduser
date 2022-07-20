import React from 'react'
import { QRCode } from 'react-qrcode-logo';

const QrTicket = ({data}) => {

  const json = JSON.stringify({
    "userId": 452452,
    "parkingId": 1231,
    "time": 1435134513,
  })
  
  return (
    // <QRCode value="https://zalopay.vn" eyeRadius={5} size='140' removeQrCodeBehindLogo="true" logoImage='https://play-lh.googleusercontent.com/yHmIm7FYKe_dW2WHTwWizp2p_gt7_ctdpCUevX654E1dsj5c9McWO03k_S6PPLG_DNz7' logoWidth='40' logoHeight='40' bgColor='#FFFFFF'/>
    <QRCode 
      value="https://zalopay.vn" 
      eyeRadius={[
        { // top/left eye
          outer: [10, 10, 0, 10],
          inner: [0, 10, 10, 10],
        },
        [10, 10, 10, 0], // top/right eye
        [10, 0, 10, 10], // bottom/left
      ]}
      size='200' 
      logoImage="https://res.cloudinary.com/mernteam/image/upload/v1658311022/ZaloPay/zplogo_qn7xic.png" 
      logoWidth='120' 
      logoHeight='120' 
      bgColor='#FFFFFF'
      // removeQrCodeBehindLogo='true'
      logoOpacity={0.5}
    />
    // <QRCode value={data} size='140' logoImage='./ZaloPay-logo.png' logoWidth='40' logoHeight='40' bgColor='#FFFFFF'/>
    
  )
}

export default QrTicket