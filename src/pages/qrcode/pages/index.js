import React from 'react'
import { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
const QrPage = (props) => {

  const [scanResult, setScanResult] = useState('');
  //const [parkingId, setParkingId] = useState()
  //const [ticketData, setTicketData] = useState({})
  let ticketData

  const handleErrorCam = (error) => {
    console.log(error);
  }

  const handleScanCam = (result) => {
    if (result) {
      window.open(result.text);
    
      const json = '{"idTicket": 123456, "parkingId":42, "licenseId: "APTX-4869", "parkingName": "VNG", "checkinTime": "16:34 22/06/2022"}';
      const obj = JSON.parse(json);
    
      let parkingId = obj.parkingId
      //setParkingId(obj.parkingId)
   
      console.log("id: " + parkingId)
      if (parkingId !== undefined) {
        const headers = { 'Content-Type': 'application/json' }
        fetch('https://jsonplaceholder.typicode.com/posts/1', { headers })
            .then(response => response.json())
            .then(data => {
              ticketData = obj
              console.log("ticket: " + JSON.stringify(ticketData))
              props.handleInsert(ticketData)
            });      
        
      }
    }
  }

  return (
    <div style={{ backgroundColor: 'white', height: 'calc(100vh - 112px)' }}>
      <QrReader delay={1000} style={{ width: '100%', height: '100%', backgroundColor: 'white' }} onError={handleErrorCam} onResult={handleScanCam}></QrReader>
    </div>
  )
}

export default QrPage