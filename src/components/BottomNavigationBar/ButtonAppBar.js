import { AppBar, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ButtonAppBar = () => {
  return (
    <Box>
        <AppBar position="static" >
        <Toolbar>App bar</Toolbar>
        </AppBar>
    </Box>
  )
}

export default ButtonAppBar