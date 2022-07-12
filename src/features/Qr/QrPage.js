import React from 'react'
import { useState } from 'react';
import { QrReader } from 'react-qr-reader';
const QrPage = () => {

  const [scanResult, setScanResult] = useState('');

  const handleErrorCam = (error) => {
    console.log(error);
  }

  const handleScanCam = (result) => {
    if (result) {
      setScanResult(result);
    }
  }

  return (
    <div className="App">
    <QrReader delay={300} style={{ width: '100px' }} onError={handleErrorCam} onScan={handleScanCam}></QrReader>
    <h3> Scanned by webcam code: {scanResult}</h3>
  </div>
  )
}

export default QrPage