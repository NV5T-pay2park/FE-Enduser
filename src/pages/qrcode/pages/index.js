import React from 'react'
import { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
const QrPage = () => {

  const [scanResult, setScanResult] = useState('');
  //const [parkingId, setParkingId] = useState('')
  //const [ticketData, setTicketData] = useState({})
  let ticketData
  let parkingId

  const handleErrorCam = (error) => {
    console.log(error);
  }

  // call checkin api
  useEffect(() => {
    console.log("call checkin api")
    const headers = { 'Content-Type': 'application/json' }
    console.log('id: ' + parkingId)
    if (parkingId) {
      fetch('https://jsonplaceholder.typicode.com/posts/1', { headers })
          .then(response => response.json())
          .then(data => ticketData = data);
    
      console.log(JSON.stringify(ticketData))
    }
  }, [parkingId])


  const handleScanCam = (result) => {
    console.log("call handleScanCam")
    console.log("result: " + result)
    if (result !== undefined) {
      window.open(result.text);
      
      //setScanResult(result.text);
      console.log(JSON.stringify(result.text))
      const obj = JSON.parse(result.text);
      parkingId = obj.parkingId
      //setParkingId(obj.parkingId)
      // console.log("\n\n" + obj.parkingid)
    }
  }

  return (
    <div style={{ backgroundColor: 'red', height: 'calc(100vh - 112px)' }}>
      <QrReader delay={20000} style={{ width: '100%', height: '100%', backgroundColor: 'red' }} onError={handleErrorCam} onResult={handleScanCam}></QrReader>

    </div>
  )
}

export default QrPage