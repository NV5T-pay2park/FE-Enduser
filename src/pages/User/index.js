import { Button } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../AppContext'
import * as Constant from '../../config/config'
const UserPage = () => {

  const context = useContext(AppContext)
  const [data, setData] = useState({data: "nothing"})

  // UserInfo: { access_token: string; display_name: string; id: string; phone?: number | string; zlp_id: string }
  const getUserZaloPayInfo = async () => {
      if (window.ZaloPay.isZaloPay) {
        const info = await window.ZaloPay.getUserInfo()
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

  const getUserZLPInfo = async () => {
      const info = await window.ZLP.User().getUserInfo()
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
    const info = window.ZLP.Payment().payOrder({zptranstoken: "220726000014001R0P8r61"}).then(value => { 
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
    const info = window.ZLP.Payment().payOrderV2({zptranstoken: "220726000014001R0P8r61"}).then(value => { 
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
        "zptranstoken": "220726000014001R0P8r61",
        "appid": -9999
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
        "zptranstoken": "220726000014001R0P8r61",
        "appid": -9999
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
    window.ZLP.Payment().payOrderV2({
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
    window.ZLP.Payment().payOrderV2({
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
    window.ZLP.Payment().payOrderV2({
      appid: 3,
      zptranstoken: "220726000014001R0P8r61"
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

  const ZlpPayOrderV8 = () => {
    const zpTransToken = "22072500000075601sNQ8o"
    window.ZLP.Payment().payOrderV2({
      appid: -9999,
      zptranstoken: "220726000014001R0P8r61"
      }, cb)

      var cb = function (data) {
        if (typeof data === "object") {
          if (data.error === 1) {
            alert("Thanh toán đơn hàng thành công");
            // Merchant Server gọi truy vấn trạng thái đơn hàng để lấy kết quả thanh toán.
          } else if (data.error === 4) {
            alert("Người dùng huỷ việc thanh toán đơn hàng");
          } else {
            alert("Thanh toán đơn hàng thất bại với mã lỗi " + data.errorCode);
            // Khi thanh toán thất bại, có thể xem nguyên nhân chi tiết trong bảng mã lỗi
          }
        }
      };
    // console.log("call ZLP.getUserInfo()2")
  }

  const ZlpPayOrderV9 = () => {
    const zpTransToken = "22072500000075601sNQ8o"
    window.ZLP.Payment().payOrderV2({
      appid: 999888,
      zptranstoken: "220726000014001R0P8r61"
      }, cb)

      var cb = function (data) {
        if (typeof data === "object") {
          if (data.error === 1) {
            alert("Thanh toán đơn hàng thành công");
            // Merchant Server gọi truy vấn trạng thái đơn hàng để lấy kết quả thanh toán.
          } else if (data.error === 4) {
            alert("Người dùng huỷ việc thanh toán đơn hàng");
          } else {
            alert("Thanh toán đơn hàng thất bại với mã lỗi " + data.errorCode);
            // Khi thanh toán thất bại, có thể xem nguyên nhân chi tiết trong bảng mã lỗi
          }
        }
      };
    // console.log("call ZLP.getUserInfo()2")
  }

  const ZlpPayOrderV10 = () => {
    const zpTransToken = "220725000002870SV3uZvs"
    window.ZLP.Payment().payOrderV2({
      appid: -9999,
      zptranstoken: "220726000014001R0P8r61"
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

  const ZlpPayOrderV11 = () => {
    const zpTransToken = "220725000002870SV3uZvs"
    window.ZaloPay.payOrder({
      appid: -9999,
      zptranstoken: "220726000014001R0P8r61"
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

  const ZlpPayOrderV12 = () => {
    const zpTransToken = "220725000002870SV3uZvs"
    window.ZaloPay.payOrder({
      appid: 999888,
      zptranstoken: "2207270000005871306N42"
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

  const ZlpPayOrderV13 = () => {
    const zpTransToken = "220726000014001R0P8r61"
    window.ZaloPay.payOrder({
      appid: Constant.APP_ID,
      zptranstoken: "2207270000005871306N42"
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

  const ZlpPayOrderV14 = () => {
    const zpTransToken = "220726000014001R0P8r61"
    window.ZPI_ZPA_SDK.showOrderPopup({
      appid: -9999,
      zptranstoken: "220726000014001R0P8r61"
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

  const ZlpPayOrderV15 = () => {
    const zpTransToken = "220725000002870SV3uZvs"
    window.ZPI_ZPA_SDK.showOrderPopup({
      appid: -9999,
      zptranstoken: "220726000014001R0P8r61"
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

  const callPaymentAPI = () => {
    const zpTransToken = "220725000002870SV3uZvs"
    window.ZPI_ZPA_SDK.showOrderPopup({
      appid: -9999,
      zptranstoken: "220726000014001R0P8r61"
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

  const getLocation1 = () => {
    const location = window.ZLP.Device().getCurLocation().then((location) => {
      window.ZaloPay.showDialog({
        title: "Location",
        message: "Location response: " + JSON.stringify(location),
        button: "OK"
      });
      return location
    })
  }

  const getLocation2 = async () => {
    const location = await window.ZLP.Device().getCurLocation()
    window.ZaloPay.showDialog({
      title: "Location",
      message: "Location response: " + JSON.stringify(location),
      button: "OK"
    });
  }

  const getLocation3 = async () => {
    const location = await window.ZPI_ZPA_SDK.getLocation()
    window.ZaloPay.showDialog({
      title: "Location",
      message: "Location response: " + JSON.stringify(location),
      button: "OK"
    });
  }

  const getLocation4 = async () => {
    const location = await window.ZPI_ZPA_SDK.getLocation().then((location) => {
      window.ZaloPay.showDialog({
        title: "Location",
        message: "Location response: " + JSON.stringify(location),
        button: "OK"
      });
      return location
    })
  }

  const getZaloPayID = async () => {
    if (window.ZaloPay.isZaloPay) {

      const zlpIDJSON = await window.ZLP.User().getUserInfo()
      window.ZaloPay.showDialog({
        title: "Login Info: ",
        message: "status: " + zlpIDJSON.id,
        button: "OK"
      }); 
    }
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
        <Button onClick={ZlpPayOrderV8} variant="contained" color='secondary' sx={{marginTop: 1}}>ZlpPayOrderV8</Button>
        <Button onClick={ZlpPayOrderV9} variant="contained" color='secondary' sx={{marginTop: 1}}>ZlpPayOrderV9</Button>
        <Button onClick={ZlpPayOrderV10} variant="contained" color='secondary' sx={{marginTop: 1}}>ZlpPayOrderV10</Button>
        <Button onClick={ZlpPayOrderV11} variant="contained" color='secondary' sx={{marginTop: 1}}>ZlpPayOrderV11</Button>
        <Button onClick={ZlpPayOrderV12} variant="contained" color='secondary' sx={{marginTop: 1}}>ZlpPayOrderV12</Button>
        <Button onClick={ZlpPayOrderV13} variant="contained" color='secondary' sx={{marginTop: 1}}>ZlpPayOrderV13</Button>
        <Button onClick={ZlpPayOrderV14} variant="contained" color='secondary' sx={{marginTop: 1}}>ZlpPayOrderV14</Button>
        <Button onClick={ZlpPayOrderV15} variant="contained" color='secondary' sx={{marginTop: 1}}>ZlpPayOrderV15</Button>
        
        <Button onClick={() => {window.location.href = "https://sbgateway.zalopay.vn/openinapp?order=eyJ6cHRyYW5zdG9rZW4iOiIyMjA3MjYwMDAwMDk2MDR5NVpWdzA3IiwiYXBwaWQiOjk5OTg4OH0"}} variant="contained" color='secondary' sx={{marginTop: 1}}>href link</Button>
        <Button onClick={() => {window.location.href = "https://sbgateway.zalopay.vn/openinapp?order=eyJ6cHRyYW5zdG9rZW4iOiIyMjA3MjYwMDAwMTMxMjJXNjhXWDNXIiwiYXBwaWQiOjk5OTg4OH0"}} variant="contained" color='secondary' sx={{marginTop: 1}}>new Thanh toán url</Button>
        <Button onClick={() => setData("hihi")}>Update value data</Button>
        <Box>Data: {JSON.stringify(data)}</Box>        

        {/* <Button onClick={getLocation1} variant="contained" color='secondary' sx={{marginTop: 1}}>getLocation1</Button>
        <Button onClick={getLocation2} variant="contained" color='secondary' sx={{marginTop: 1}}>getLocation1</Button>
        <Button onClick={getLocation3} variant="contained" color='secondary' sx={{marginTop: 1}}>getLocation1</Button>
        <Button onClick={getLocation4} variant="contained" color='secondary' sx={{marginTop: 1}}>getLocation1</Button> */}
        <Button onClick={getZaloPayID} variant="contained" color='secondary' sx={{marginTop: 1}}>get zalopayid</Button>

    </Container>
  )
}

export default UserPage