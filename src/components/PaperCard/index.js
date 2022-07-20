import { Avatar, Button, Card, Stack, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';
import {DataGarage} from '../../models/Garage';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';


PaperCard.propTypes = {
};

function PaperCard() {
  var {value} = useParams();
  value = value.substr(1);
  let v = DataGarage[0];
  for(let i = 0; i < DataGarage.length; i++)
    if (DataGarage[i].id === value) {
      v = DataGarage[i];
      break;
    }

  const navigate = useNavigate();
  return (
    <Paper style={ {height: 'calc(100vh - 56px)', display: 'flex', justifyContent: 'center', backgroundColor: '#f6f7f8'}}>
      <Stack>
    <Card sx={{ maxWidth: '85vw', height: '70vh', marginTop: '30px', borderRadius: '20px', minWidth: '85vw'}} variant="outlined">
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" align="center">
          Thông tin chi tiết
        </Typography>
      </CardContent>
      <Box alignItems="center" justifyContent="center" display="flex">
        <Avatar sx={{ width: 80, height: 80 }}>
              </Avatar>
      </Box>
      <CardContent style={{ lineHeight: "28px" }}>
        <Typography gutterBottom variant="h8" component="div" align='center' >
          <b>{v.name}</b> 
        </Typography>
        <Typography variant="h7" component="div">
          <b> Địa chỉ: </b>{v.address}
        </Typography>
        <Typography variant="h7" component="div">
          <b> Số điện thoại: </b>{v.phone}
        </Typography>
        <Typography variant="h7" component="div">
          <b> Giờ làm việc: </b> {v.timeWorking}
        </Typography>
        <Typography variant='h7'>
         <b> Trạng thái: </b>{v.status === "available" ? <text style={{color:'green'}}> Còn chỗ</text> : <text style={{color: 'red'}}> Hết chỗ</text> }
        </Typography>
        <Typography variant="h7" component="div" paragraph>
          <b> Mô tả: </b> {v.discription}
        </Typography>
        <Typography variant='h7' component="div" paragraph>
          <b> Điều khoản sử dụng: </b>
        </Typography>
        <Typography variant="h7" component="div" paragraph> 
          <b> Hướng dẫn sử dụng: </b>
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    <Button variant="contained" sx={{marginTop: 5 }} onClick={() => {
        navigate('/googlemap/:' + v.id);
    }}>
    Hiển thị bản đồ
    </Button>
    </Stack>
    </Paper>
  )
}

export default PaperCard