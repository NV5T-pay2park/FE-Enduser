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
      window.open(result.text);
      setScanResult(result.text);
    }
  }

  return (
    <div>
      <QrReader delay={1000} style={{ width: '100%', height: '100%' }} onError={handleErrorCam} onResult={handleScanCam}></QrReader>

    </div>
  )
}

export default QrPage