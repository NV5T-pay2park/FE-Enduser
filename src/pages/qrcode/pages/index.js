import React, { useContext, useRef } from 'react'
import { useState, useEffect } from 'react';
// import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../AppContext';
import LoadingIndicator from '../../../components/LoadingIndicator';


// begin: test qr-camera-reader
import QrReader from 'react-camera-qr'
import { Button } from '@mui/material';
import { Box } from '@mui/system';



// end: test qr-camera-reader


const QrPage = () => {

  // begin - test qr-scanner
  // const qrRef = useRef(null);
  const [facingMode, setFacingMode] = useState("user")


  // end - test qr-scanner
  const context = useContext(AppContext)
  const navigate = useNavigate();

  const [scanResult, setScanResult] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  //const [parkingId, setParkingId] = useState()
  //const [ticketData, setTicketData] = useState({})
  //let ticketData

  const handleErrorCam = (error) => {
    console.log(error);
  }

  const handleScanCam = (result) => {
    if (result) {
      // console.log("result: " + JSON.stringify(result))
      //window.open(result);

      const json2 = '{"id": 100, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz", "address": { "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874", "geo": { "lat": "-37.3159", "lng": "81.1496" }}, "phone": "1-770-736-8031 x56442", "website": "hildegard.org", "company": { "name": "Romaguera-Crona", "catchPhrase": "Multi-layered client-server neural-net", "bs": "harness real-time e-markets"}}'
      const obj = JSON.parse(json2);
      let parkingId = obj.id
      //setParkingId(obj.parkingId)

      if (parkingId !== undefined) {
        setShowLoading(true)
        
      
        const headers = { 'Content-Type': 'application/json' }
        fetch('https://jsonplaceholder.typicode.com/posts/1', { headers })
            .then(response => response.json())
            .then(data => {
              let ticketData = obj
              setShowLoading(true)
              context.insertTicket(ticketData)
              
              navigate('/')
            })
            // .finally(
            //   setShowLoading(false)
            // );      
        //setScanResult(result.text);
      }
    }
  }

  const handleSwitchCam = () => {
    console.log("before switch cam: " + facingMode)
    setFacingMode(facingMode == 'environment' ? 'user' : 'environment')
  }


  return (
    <div style={{ backgroundColor: 'white', height: 'calc(100vh - 56px)', justifyContent: 'center', justifyItems: 'center', alignItems: 'center'}}>
      { showLoading && <LoadingIndicator />}
      {/* <QrReader facingMode={facingMode} delay={1000} style={{ width: '100%', height: '100%', backgroundColor: 'white' }} onError={handleErrorCam} onResult={handleScanCam}></QrReader> */}
      
      { /* test qr-camet */ }
      <QrReader
          delay={300}
          onError={handleErrorCam}
          onScan={handleScanCam}
          style={{ width: '100%' }}
          facingMode={facingMode}
        />
      
      
      <Box textAlign='center' alignItems='center'>
        <Button onClick={handleSwitchCam}>Switch Cam</Button>
      </Box>
      <Box textAlign='center' alignItems='center'>
        <Button onClick={() => navigate('/test-qr')}>TrucJ test other cam</Button>
      </Box>
    </div>
  )
}

export default QrPage