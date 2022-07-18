import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const NotFoundCard = () => {

const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: '80vw', height: '70vh', marginTop: '0px', borderRadius: '20px', minWidth: '80vw' }} variant="outlined">
    {/* <CardContent>
      <Typography gutterBottom variant="h5" component="div" align="center">
        Thẻ Giữ Xe {ticketData.username}
      </Typography>
    </CardContent> */}
    <Box alignItems="center" justifyContent="center" display="flex">
      <CardMedia
        component="img"
        sx={{height: 140, width: 140, marginTop: 5}}
        image="./toro_cry_rmbg.png"
        alt="toro_cry"
      />
    </Box>
    <CardContent>
      <Typography gutterBottom sx={{fontSize: 16}} component="div" align='center' color='blue'>
          Bạn không có thẻ xe cần thanh toán
      </Typography>
      <Typography sx={{fontSize: 13}} color="text.secondary" component="div">
        Quét mã checkin để gửi xe
      </Typography>
      <Button onClick={() => {navigate('/qr')}} align='center' variant="contained" fullWidth="true" sx={{backgroundColor: '#008fe5', maxWidth: 290, marginTop: 10}}>Quét mã QR</Button>
    </CardContent>
  </Card>
  )
}

export default NotFoundCard