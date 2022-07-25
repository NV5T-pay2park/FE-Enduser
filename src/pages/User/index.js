import { Button } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../AppContext'

const UserPage = () => {

  const context = useContext(AppContext)
  const [data, setData] = useState({data: "nothing"})

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
        setData(result)
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
      setData(info)
      window.ZaloPay.showDialog({
        title: "User Info: ",
        message: "User Info: " + JSON.stringify(info),
        button: "OK"
      });
      // console.log("call ZLP.getUserInfo()")
  }

  const getUserZLPInfo2 = () => {
    const info = window.ZLP.User().getUserInfo().then(value => { 
      setData(value)
      window.ZaloPay.showDialog({
        title: "User Info: ",
        message: "Inside User Info: " + JSON.stringify(value),
        button: "OK"
      });  
      return value; 
    })

    // console.log("call ZLP.getUserInfo()2")
  }

  const getUserToken = () => {
    const info = window.ZLP.User().getOTToken().then(value => {
      setData(value)
      window.ZaloPay.showDialog({
        title: "User Token: ",
        message: "Inside User Token: " + JSON.stringify(value),
        button: "OK"
      });
      
      return value 
    })

    // console.log("call ZLP.getUserToken()")
  }

  const scanQR = () => {
    const info = window.ZLP.Device().scanQRCode({ "needResult": 1, "scanType": 'qrCode'}).then(value => {
      setData(value)
      window.ZaloPay.showDialog({
        title: "QR response",
        message: "QR response: " + JSON.stringify(value),
        button: "OK"
      });
      // setData(value)
      return value 
    })
    // console.log("Info: " + JSON.stringify(info))
  }

  const scanQR2 = () => {
    const info = window.ZLP.Device().scanQRCode({ "needResult": 1, "scanType": 'qrCode'}).then(value => {
      setData(value)
      return value 
    })
    // console.log("Info: " + JSON.stringify(info))
  }

  const scanQR4 = () => {
    const param = {
      needResult: 1,
      scanType: 'qrCode'
    }
    const info = window.ZLP.Device().scanQRCode(param).then(value => {
      setData(value)
      window.ZaloPay.showDialog({
        title: "QR response",
        message: "QR response: " + JSON.stringify(value),
        button: "OK"
      });
      return value 
    })
    // console.log("Info: " + JSON.stringify(info))
  }


  // get app info
  const getAppZaloPayInfo = () => {
    if (window.ZaloPay.isZaloPay) {
      setData(window.ZaloPay.getAppZaloPayInfo)
    } else {
      setData("called getAppUserInfo")
    }

    // console.log("call ZLP.getUserInfo()2")
  }

  const getUserZalPayInfo2 = () => {
    const info = window.ZaloPay.getUserInfo().then(value => { 
      setData(value)
      window.ZaloPay.showDialog({
        title: "User Info: ",
        message: "ZaloPay User Info: " + JSON.stringify(value),
        button: "OK"
      });  
      return value; 
    })

    // console.log("call ZLP.getUserInfo()2")
  }

  const getUserZPIinfo3 = () => {
    const info = window.ZPI_ZPA_SDK.getProfile().then(value => { 
      setData(value)
      window.ZaloPay.showDialog({
        title: "User Info: ",
        message: "ZaloPay User Info: " + JSON.stringify(value),
        button: "OK"
      });  
      return value; 
    })

    // console.log("call ZLP.getUserInfo()2")
  }



  // test order
  const ZlpPayOrder = () => {
    const zpTransToken = "22072500000075601sNQ8o"
    const info = window.ZLP.Payment().payOrder({zptranstoken: "22072500000075601sNQ8o"}).then(value => { 
      setData(value)
      window.ZaloPay.showDialog({
        title: "User Info: ",
        message: "ZaloPay User Info: " + JSON.stringify(value),
        button: "OK"
      });  
      return value; 
    })

    // console.log("call ZLP.getUserInfo()2")
  }

  const ZlpPayOrderV2 = () => {
    const zpTransToken = "22072500000075601sNQ8o"
    const info = window.ZLP.Payment().payOrderV2({zptranstoken: "22072500000075601sNQ8o"}).then(value => { 
      setData(value)
      window.ZaloPay.showDialog({
        title: "User Info: ",
        message: "ZaloPay User Info: " + JSON.stringify(value),
        button: "OK"
      });  
      return value; 
    })

    // console.log("call ZLP.getUserInfo()2")
  }

  const ZlpPayOrder3 = () => {
    const zpTransToken = "22072500000075601sNQ8o"
    const info = window.ZLP.Payment().payOrder({
        "zptranstoken": "22072500000075601sNQ8o",
        "appid": 999888
      }).then(value => { 
      setData(value)
      window.ZaloPay.showDialog({
        title: "User Info: ",
        message: "ZaloPay User Info: " + JSON.stringify(value),
        button: "OK"
      });  
      return value; 
    })

    // console.log("call ZLP.getUserInfo()2")
  }

  const ZlpPayOrderV4 = () => {
    const zpTransToken = "22072500000075601sNQ8o"
    const info = window.ZLP.Payment().payOrderV2({
        "zptranstoken": "22072500000075601sNQ8o",
        "appid": 999888
      }).then(value => { 
      setData(value)
      window.ZaloPay.showDialog({
        title: "User Info: ",
        message: "ZaloPay User Info: " + JSON.stringify(value),
        button: "OK"
      });  
      return value; 
    })

    // console.log("call ZLP.getUserInfo()2")
  }

  const ZlpPayOrderV5 = () => {
    const zpTransToken = "22072500000075601sNQ8o"
    const info = window.ZLP.Payment().payOrderV2({
      appid: 999888,
      zptranstoken: "22072500000075601sNQ8o"
      }, cb)

    var cb = function (data) {
      window.ZaloPay.showDialog({
        title: "Checkout Info: ",
        message: "status: " + JSON.stringify(data),
        button: "OK"
      }); 
    };
    // console.log("call ZLP.getUserInfo()2")
  }

  const ZlpPayOrderV6 = () => {
    const zpTransToken = "22072500000075601sNQ8o"
    const info = window.ZLP.Payment().payOrderV2({
      appid: 999888,
      zptranstoken: "gOAWGD_NK4DFoq0mTA0iTw"
      }, cb)

    var cb = function (data) {
      window.ZaloPay.showDialog({
        title: "Checkout Info: ",
        message: "status: " + JSON.stringify(data),
        button: "OK"
      }); 
    };
    // console.log("call ZLP.getUserInfo()2")
  }

  const ZlpPayOrderV7 = () => {
    const zpTransToken = "22072500000075601sNQ8o"
    const info = window.ZLP.Payment().payOrderV2({
      appid: 3,
      zptranstoken: "gOAWGD_NK4DFoq0mTA0iTw"
      }, cb)

    var cb = function (data) {
      window.ZaloPay.showDialog({
        title: "Checkout Info: ",
        message: "status: " + JSON.stringify(data),
        button: "OK"
      }); 
    };
    // console.log("call ZLP.getUserInfo()2")
  }




  return (
    <Container sx={{ backgroundColor: '#008FE5', height: 'calc(100vh - 56px)'}}>

        <Box>User</Box>
        <Button onClick={getUserZLPInfo} variant="contained" color='secondary' sx={{marginTop: 1}}>ZLP.getUserInfo()</Button>
        <Button onClick={getUserZLPInfo2} variant="contained" color='secondary' sx={{marginTop: 1}}>ZLP.getUserInfo() with then</Button>
        <Button onClick={getUserToken} variant="contained" color='secondary' sx={{marginTop: 1}}>ZLP.getUserToken() with then</Button>

        <Button onClick={scanQR} variant="contained" color='secondary' sx={{marginTop: 1}}>ScanQR</Button>
        <Button onClick={scanQR2} variant="contained" color='secondary' sx={{marginTop: 1}}>ScanQR2</Button>
        <Button onClick={scanQR4} variant="contained" color='secondary' sx={{marginTop: 1}}>ScanQR4</Button>

        <Box>test get app info</Box>
        <Button onClick={getAppZaloPayInfo} variant="contained" color='secondary' sx={{marginTop: 1}}>getAppZaloPayInfo</Button>
        <Button onClick={getUserZalPayInfo2} variant="contained" color='secondary' sx={{marginTop: 1}}>getUserZalPayInfo2</Button>
        <Button onClick={getUserZPIinfo3} variant="contained" color='secondary' sx={{marginTop: 1}}>getUserZPIinfo3</Button>
        
        <Box>test oder</Box>
        <Button onClick={ZlpPayOrder} variant="contained" color='secondary' sx={{marginTop: 1}}>ZlpPayOrder</Button>
        <Button onClick={ZlpPayOrderV2} variant="contained" color='secondary' sx={{marginTop: 1}}>ZlpPayOrderV2</Button>
        <Button onClick={ZlpPayOrder3} variant="contained" color='secondary' sx={{marginTop: 1}}>ZlpPayOrder3withAppId</Button>
        <Button onClick={ZlpPayOrderV4} variant="contained" color='secondary' sx={{marginTop: 1}}>ZlpPayOrderV4</Button>
        <Button onClick={ZlpPayOrderV5} variant="contained" color='secondary' sx={{marginTop: 1}}>ZlpPayOrderV5</Button>
        <Button onClick={ZlpPayOrderV6} variant="contained" color='secondary' sx={{marginTop: 1}}>ZlpPayOrderV6</Button>
        <Button onClick={ZlpPayOrderV7} variant="contained" color='secondary' sx={{marginTop: 1}}>ZlpPayOrderV7</Button>
        


        <Button onClick={() => setData("hihi")}>Update value data</Button>
        <Box>Data: {JSON.stringify(data)}</Box>        

    </Container>
  )
}

export default UserPage