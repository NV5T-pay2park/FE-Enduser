import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../AppContext';
const QrPage = () => {

  const context = useContext(AppContext)
  const navigate = useNavigate();

  const [scanResult, setScanResult] = useState('');
  //const [parkingId, setParkingId] = useState()
  //const [ticketData, setTicketData] = useState({})
  let ticketData

  const handleErrorCam = (error) => {
    console.log(error);
  }

  const handleScanCam = (result) => {
    if (result) {
      // window.open(result.text);
      const json2 = '{"id": 100, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz", "address": { "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874", "geo": { "lat": "-37.3159", "lng": "81.1496" }}, "phone": "1-770-736-8031 x56442", "website": "hildegard.org", "company": { "name": "Romaguera-Crona", "catchPhrase": "Multi-layered client-server neural-net", "bs": "harness real-time e-markets"}}'
      const obj = JSON.parse(json2);
      let parkingId = obj.id
      //setParkingId(obj.parkingId)

      if (parkingId !== undefined) {
        const headers = { 'Content-Type': 'application/json' }
        fetch('https://jsonplaceholder.typicode.com/posts/1', { headers })
            .then(response => response.json())
            .then(data => {
              ticketData = obj
              context.insertTicket(ticketData)
              navigate('/')
            });      
        //setScanResult(result.text);
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