import React, { useContext, useLayoutEffect, useRef } from 'react'
import { useState, useEffect } from 'react';
// import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import LoadingIndicator from '../../components/LoadingIndicator';


// begin: test qr-camera-reader
import QrReader from 'react-camera-qr'
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios'
import * as Constant from '../../config/config'

// end: test qr-camera-reader
const mockNewTicket = {
  "ticketID": 26,
  "checkInTime": "2022-07-26T00:24:02Z",
  "amount": null,
  "licensePlate": "77C1-67567",
  "vehicleType": "Xe máy",
  "endUserID": 3,
  "endUserName": "Jenna1021 neccernpogrlinzi15",
  "parkingLotID": 4,
  "parkingLotName": "Brủh",
  "status": false
}
const QrPage = () => {

  const context = useContext(AppContext)
  const navigate = useNavigate();

  // const qrRef = useRef(null);
  const [facingMode, setFacingMode] = useState("user")
  const [scanResult, setScanResult] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  //const [parkingId, setParkingId] = useState()
  //const [ticketData, setTicketData] = useState({})
  //let ticketData

  const scanWithZaloPayQR = () => {
    if (window.ZaloPay.isZaloPay) {
      const info = window.ZLP.Device().scanQRCode({ "needResult": 1, "scanType": 'qrCode'}).then(value => {        
        // window.ZaloPay.showDialog({
        //   title: "QR response",
        //   message: "QR response: " + JSON.stringify(value),
        //   button: "OK"
        // });
        // const scanObject = JSON.parse(value)
        let parkingId = value.page
        // setScanResult(parkingId)
        window.ZaloPay.showDialog({
          title: "QR response",
          message: "QR response: " + "---id: " + parkingId + "---raw: " + JSON.stringify(value),
          button: "OK"
        });
        if (parkingId !== undefined) {
          const json2 = '{"id": 100, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz", "address": { "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874", "geo": { "lat": "-37.3159", "lng": "81.1496" }}, "phone": "1-770-736-8031 x56442", "website": "hildegard.org", "company": { "name": "Romaguera-Crona", "catchPhrase": "Multi-layered client-server neural-net", "bs": "harness real-time e-markets"}}'
          const obj = JSON.parse(json2);
 
        
        }
        // setScanResult(parkingId)
        return value 
      })
    }
  }

  const handleErrorCam = (error) => {
    console.log(error);
  }

  const handleScanCam = (result) => {
    if (result) {
      // console.log("result: " + JSON.stringify(result))
      //window.open(result);
      console.log("result")
      console.log(result)
      const json2 = '{"id": 100, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz", "address": { "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874", "geo": { "lat": "-37.3159", "lng": "81.1496" }}, "phone": "1-770-736-8031 x56442", "website": "hildegard.org", "company": { "name": "Romaguera-Crona", "catchPhrase": "Multi-layered client-server neural-net", "bs": "harness real-time e-markets"}}'
      const obj = JSON.parse(json2);
      let parkingId = obj.id
      
      //setParkingId(obj.parkingId)

      if (parkingId !== undefined) {
        const param = JSON.stringify({
          "endUserID": 3,
          "parkingLotID": 4
        })

        // test post checkin
        const url = Constant.SERVER_BASE_URL + '/api/checkIn'

        fetch(url, {
          method: 'POST', // or 'PUT'
          headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "endUserID": "3",
            "parkingLotID": "14"
          }),
        })
        .then((response) => response.json())
        .then((ticketDataJSON) => {
          console.log('Success:', ticketDataJSON);
          const newTicket = ticketDataJSON.data
          if (window.ZaloPay.isZaloPay) {
            window.ZaloPay.showDialog({
              title: "QR response",
              message: "Ticket response: " + JSON.stringify(newTicket),
              button: "OK"
            });
          }
          context.insertTicket(newTicket)
          navigate('/')
        })
        .catch((error) => {
          console.error('Error:', error);
          if (window.ZaloPay.isZaloPay) {
            window.ZaloPay.showDialog({
              title: "QR response",
              message: "Ticket response: " + JSON.stringify(error),
              button: "OK"
            });
          }
          context.insertTicket(mockNewTicket)
          navigate('/')
        });
      }
    }
  }

  const handleSwitchCam = () => {
    console.log("before switch cam: " + facingMode)
    setFacingMode(facingMode == 'environment' ? 'user' : 'environment')
  }

  const showManualQr = () => {
    return (
      <div>
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
            <Button onClick={() => navigate('/test-qr')}>Test qr-scanner lib</Button>
          </Box>
          <Box>{JSON.stringify(scanResult)}</Box>     
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: 'white', height: 'calc(100vh - 56px)', justifyContent: 'center', justifyItems: 'center', alignItems: 'center'}}>
      { showLoading && <LoadingIndicator />}
      {/* <QrReader facingMode={facingMode} delay={1000} style={{ width: '100%', height: '100%', backgroundColor: 'white' }} onError={handleErrorCam} onResult={handleScanCam}></QrReader> */}
      
      { /* test qr-camet */ }
      
      {!window.ZaloPay.isZaloPay ? showManualQr() : () => {navigate('/')}}
      {/* <QrReader
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
        <Button onClick={() => navigate('/test-qr')}>Test qr-scanner lib</Button>
      </Box>
      <Box>{JSON.stringify(scanResult)}</Box>         */}
    </div>
  )
}

export default QrPage