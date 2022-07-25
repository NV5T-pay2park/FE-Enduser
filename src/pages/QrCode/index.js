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
const mockNewTicket = {"id":101,"checkInTime":"2022-07-18T07:27:48Z","checkOutTime":null,"licensePlates":"77C1-44094","vehicleType":{"id":1,"vehicleTypeName":"Xe máy","hibernateLazyInitializer":{}},"endUser":{"id":2,"firstName":"Partypooper009","lastName":"throwaway217217","gender":0,"phone":"0790529870","email":"throwaway217217@gmail.com"},"parkingLot":{"id":6,"parkingLotName":"Hiệp Phú","numberSlot":101,"numberSlotRemaining":101,"address":"Bình Chiểu, Thành phố Thủ Đức, TPHCM","status":0,"merchant":{"id":1,"name":"Thành phố Thủ Đức","represent":"Lee4an","email":"Lee4an@gmail.com","phone":"0906094163","hibernateLazyInitializer":{}},"lat":10.884166717529297,"ing":106.73027801513672,"timeOpen":5,"timeClose":22,"phoneNumber":"982347126","hibernateLazyInitializer":{}}}

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
 
        
      
          const headers = { 'Content-Type': 'application/json' }
          fetch('https://jsonplaceholder.typicode.com/posts/1', { headers })
              .then(response => response.json())
              .then(data => {
                let ticketData = obj
              
                context.insertTicket(mockNewTicket)
                
                navigate('/')
              })
        }
        // setScanResult(parkingId)
        return value 
      })
    }
  }
  

  // useLayoutEffect(() => {
  //   scanWithZaloPayQR()

  // }, [])


  // const getPermissionsAsync = async () => {
  //   const { status } = await Permissions.askAsync(Permissions.CAMERA);
  //   if(status === "granted"){
  //       // use the camera or location service
  //       console.log("status: " + status)
  //    }
  
  // };
  // getPermissionsAsync()

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
        //setShowLoading(true)
        
      
        // const headers = { 'Content-Type': 'application/json' }
        // fetch('https://jsonplaceholder.typicode.com/posts/1', { headers })
        //     .then(response => response.json())
        //     .then(data => {
        //       let ticketData = obj
        //       setShowLoading(true)
        //       context.insertTicket(mockNewTicket)
              
        //       navigate('/')
        //     })
           
        // const json = JSON.stringify({
        //   endUserID: 2,
        //   parkingLotID: 4
        // });
        axios.post(Constant.SERVER_BASE_URL + '/api/checkIn', {
          endUserID: 2,
          parkingLotID: 4
        })
        .then(function (response) {
          console.log("response localhost: " + response);
          context.insertTicket(mockNewTicket)
          navigate('/')
        })
        .catch(function (error) {
          console.log("error: " + error);
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