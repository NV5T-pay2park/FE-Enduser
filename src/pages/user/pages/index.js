import { Button } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../../AppContext'

const UserPage = () => {

  const context = useContext(AppContext)
  const [data, setData] = useState({})

  // UserInfo: { access_token: string; display_name: string; id: string; phone?: number | string; zlp_id: string }
  const getUserZaloPayInfo = () => {
      if (window.ZaloPay.isZaloPay) {
        const info = window.ZaloPay.getUserInfo()
        window.ZaloPay.showDialog({
          title: "User Info: ",
          message: "User Info: " + JSON.stringify(info),
          button: "OK"
        });
      } else {
        console.log("isZaloPay: " + window.ZaloPay.isZaloPay)
      }
  }

  const getUserZaloPayInfo2 = () => {
    if (window.ZaloPay.isZaloPay) {
      const info = window.ZaloPay.getUserInfo().then(result => {
        window.ZaloPay.showDialog({
          title: "User Info: ",
          message: "Inside User Info: " + JSON.stringify(result),
          button: "OK"
        });  
        return result
      })
      // window.ZaloPay.showDialog({
      //   title: "User Info: ",
      //   message: "User Info: " + JSON.stringify(info),
      //   button: "OK"
      // });
    } else {
      console.log("isZaloPay2: " + window.ZaloPay.isZaloPay)
    }
}

  const getUserZLPInfo = () => {
      const info = window.ZLP.User().getUserInfo()
      window.ZaloPay.showDialog({
        title: "User Info: ",
        message: "User Info: " + JSON.stringify(info),
        button: "OK"
      });
      console.log("call ZLP.getUserInfo()")
  }

  const getUserZLPInfo2 = () => {
    const info = window.ZLP.User().getUserInfo().then(value => { 
      window.ZaloPay.showDialog({
        title: "User Info: ",
        message: "Inside User Info: " + JSON.stringify(value),
        button: "OK"
      });  
      return value; 
    })

    console.log("call ZLP.getUserInfo()2")
  }

  const getUserToken = () => {
    const info = window.ZLP.User().getOTToken().then(value => {
      window.ZaloPay.showDialog({
        title: "User Token: ",
        message: "Inside User Token: " + JSON.stringify(value),
        button: "OK"
      });
      
      return value 
    })

    console.log("call ZLP.getUserToken()")
  }

  const scanQR = () => {
    const info = window.ZLP.Device().scanQRCode({ needResult: 1, scanType: 'qrCode'}).then(value => {
      setData(value)
      window.ZaloPay.showDialog({
        title: "QR response",
        message: "QR response: " + JSON.stringify(value),
        button: "OK"
      });
      setData(value)
      return value 
    })
    console.log("Info: " + JSON.stringify(info))
  }

  const scanQR2 = () => {
    const info = window.ZLP.Device().scanQRCode({ needResult: 1, scanType: 'qrCode'}).then(value => {
      setData(value)
      return value 
    })
    console.log("Info: " + JSON.stringify(info))
  }

  const scanQR3 = () => {
    const info = window.ZLP.Device().scanQRCode(1, 'qrCode').then(value => {
      setData(value)
      window.ZaloPay.showDialog({
        title: "QR response",
        message: "QR response: " + JSON.stringify(value),
        button: "OK"
      });
      setData(value)
      return value 
    })
    console.log("Info: " + JSON.stringify(info))
  }

  const scanQR4 = () => {
    const param = {
      needResult: 1,
      scanType: 'qrCode'
    }
    const info = window.ZLP.Device().scanQRCode(param).then(value => {
      setData(value)
      
      setData(value)
      return value 
    })
    console.log("Info: " + JSON.stringify(info))
  }

  return (
    <Container sx={{ backgroundColor: '#008FE5', height: 'calc(100vh - 56px)'}}>

        <Box>User</Box>
        <Button onClick={getUserZaloPayInfo} variant="contained" color='secondary'>ZaloPay.getUserInfo()</Button>
        <Button onClick={getUserZaloPayInfo2} variant="contained" color='secondary'>ZaloPay.getUserInfo() with then</Button>

        <Button onClick={getUserZLPInfo} variant="contained" color='secondary' sx={{marginTop: 1}}>ZLP.getUserInfo()</Button>
        <Button onClick={getUserZLPInfo2} variant="contained" color='secondary' sx={{marginTop: 1}}>ZLP.getUserInfo() with then</Button>
        <Button onClick={getUserToken} variant="contained" color='secondary' sx={{marginTop: 1}}>ZLP.getUserToken() with then</Button>

        <Button onClick={scanQR} variant="contained" color='secondary' sx={{marginTop: 1}}>ScanQR</Button>
        <Button onClick={scanQR2} variant="contained" color='secondary' sx={{marginTop: 1}}>ScanQR2</Button>
        <Button onClick={scanQR3} variant="contained" color='secondary' sx={{marginTop: 1}}>ScanQR3</Button>
        <Button onClick={scanQR4} variant="contained" color='secondary' sx={{marginTop: 1}}>ScanQR3</Button>

        <Box>{JSON.stringify(data)}</Box>        

    </Container>
  )
}

export default UserPage