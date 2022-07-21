import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React, { Component, useState } from 'react'
// import QrReader from 'react-qr-scanner'
import QrReader from 'modern-react-qr-reader'

const Test = () => {

    const [facingMode, setFacingMode] = useState("user")
    const [resultScan, setResultScan] = useState()
    const [enableLegacyMode, setEnableLegacyMode] = useState(false)

    const previewStyle = {
        height: 240,
        width: 320,
    }

    const handleErrorCam = (error) => {
        console.log(error);
      }
    
      const handleScanCam = (result) => {
        if (result) {
          // console.log("result: " + JSON.stringify(result))
          //window.open(result);
    
          console.log("result: " + JSON.stringify(result))
            setResultScan(result)
         
        }
      }
    
      const handleSwitchCam = () => {
        console.log("before switch cam: " + facingMode)
        setFacingMode(facingMode == 'environment' ? 'user' : 'environment')
      }

      const handleLegacyMode = () => {
        console.log("lagacyMode:  " + enableLegacyMode)
        setEnableLegacyMode(enableLegacyMode == false ? true : false)
      }

    return (
        <div style={{ backgroundColor: 'white', height: 'calc(100vh - 56px)', justifyContent: 'center', justifyItems: 'center', alignItems: 'center'}}>
            <QrReader
                style={{ width: '100%' }}
                onError={handleErrorCam}
                onScan={handleScanCam}
                facingMode={facingMode}
                legacyMode={enableLegacyMode}
            />
            <Box textAlign='center' alignItems='center'>
                <Button onClick={handleSwitchCam}>Switch Cam</Button>
            </Box>
            <Box textAlign='center' alignItems='center'>
                <Button onClick={handleLegacyMode}>{enableLegacyMode == false ? 'turn on legacyMode' : 'turn off legacyMode'}</Button>
            </Box>
        </div>
    )
}

export default Test


