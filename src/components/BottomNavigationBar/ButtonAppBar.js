import { AppBar, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ButtonAppBar = () => {
  return (
    <Box>
      <AppBar style={{ top: 0, position: 'sticky' }}>
        <Toolbar>App bar</Toolbar>
      </AppBar>
    </Box>
  )
}

export default ButtonAppBar