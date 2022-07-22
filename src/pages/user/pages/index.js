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
          title: "User Info: " + JSON.stringify(info),
          message: `"Test"`,
          button: "OK"
        });
      } else {
        console.log("isZaloPay: " + window.ZaloPay.isZaloPay)
      }
  }


  return (
    <Container sx={{ backgroundColor: '#008FE5', height: 'calc(100vh - 56px)'}}>

        <Box>User</Box>
        <Button onClick={getUserZaloPayInfo} variant="contained" color='secondary'>Get Info</Button>

    </Container>
  )
}

export default UserPage