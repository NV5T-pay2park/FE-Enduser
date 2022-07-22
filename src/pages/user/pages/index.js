import { Button } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useContext } from 'react'
import { AppContext } from '../../../AppContext'

const UserPage = () => {

  const context = useContext(AppContext)


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
    // window.ZaloPay.showDialog({
    //   title: "User Info: ",
    //   message: "User Info: " + JSON.stringify(info),
    //   button: "OK"
    // });
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
    // window.ZaloPay.showDialog({
    //   title: "User Token: ",
    //   message: "User Token: " + JSON.stringify(info),
    //   button: "OK"
    // });
    console.log("call ZLP.getUserToken()")
  }

  return (
    <Container sx={{ backgroundColor: '#008FE5', height: 'calc(100vh - 56px)'}}>

        <Box>User</Box>
        <Button onClick={getUserZaloPayInfo} variant="contained" color='secondary'>ZaloPay.getUserInfo()</Button>
        <Button onClick={getUserZaloPayInfo2} variant="contained" color='secondary'>ZaloPay.getUserInfo() with then</Button>

        <Button onClick={getUserZLPInfo} variant="contained" color='secondary' sx={{marginTop: 1}}>ZLP.getUserInfo()</Button>
        <Button onClick={getUserZLPInfo2} variant="contained" color='secondary' sx={{marginTop: 1}}>ZLP.getUserInfo() with then</Button>
        <Button onClick={getUserToken} variant="contained" color='secondary' sx={{marginTop: 1}}>ZLP.getUserToken() with then</Button>


    </Container>
  )
}

export default UserPage