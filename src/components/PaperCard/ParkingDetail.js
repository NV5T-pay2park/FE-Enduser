import { Avatar, Button, Card, Stack, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';
import {DataGarage} from '../../models/Garage';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AssistantDirectionOutlinedIcon from '@mui/icons-material/AssistantDirectionOutlined';
import TablePrice from '../Table/TablePrice';



ParkingDetail.propTypes = {
};

function ParkingDetail() {
  var {value} = useParams();
  value = value.substr(1);
  let v = DataGarage[0];
  for(let i = 0; i < DataGarage.length; i++)
    if (DataGarage[i].id === value) {
      v = DataGarage[i];
      break;
    }

    function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
    }
    
    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    
    
    

  
  const navigate = useNavigate();
  return (
    <Paper style={ {height: 'calc(100vh - 56px)', display: 'flex', justifyContent: 'center', backgroundColor: '#f6f7f8'}}>
        <Stack alignItems="center">
            <Card sx={{ width: '100%', height: '80vh', marginTop: '0px', borderRadius: '0px', overflow: 'auto',}} variant="outlined">
              <CardContent>
                <Typography gutterBottom fontSize={20} component="div" align="center" color={"#24272B"}>
                  Thông tin chi tiết
                </Typography>
              </CardContent>
              <Box alignItems="center" justifyContent="center" display="flex">
                <Avatar sx={{ width: 80, height: 80 }}>
                      </Avatar>
              </Box>
              <CardContent style={{ lineHeight: "28px" }}>
                <Typography gutterBottom fontSize={24} component="div" align='center' >
                  <b>{v.name}</b> 
                </Typography>
                <Stack direction="row" marginTop={1}>
                  <LocationOnOutlinedIcon sx={{color: '#4286F6', marginRight: "12px"}}/>
                  <Typography fontSize={14} component="div">{v.address}</Typography>
                </Stack>
                <Stack direction="row" marginTop={1}>
                  <AccessTimeOutlinedIcon sx={{color: '#4286F6', marginRight: "12px"}}/>
                  <Typography fontSize={14} component="div">
                      {v.status === "available" ? <text style={{color:'green'}}> Còn chỗ</text> : <text style={{color: 'red'}}> Hết chỗ</text> }
                  </Typography>
                  <Typography fontSize={14} component="div" marginLeft={1}>{v.timeWorking} giờ</Typography>
                </Stack>
                <Stack direction="row" marginTop={1}>
                  <LocalPhoneIcon sx={{color: '#4286F6', marginRight: "12px"}}/>
                  <Typography fontSize={14} component="div">{v.phone}</Typography>
                </Stack>
                {/* <Typography variant="h7" component="div" paragraph>
                  <b> Mô tả: </b> {v.discription}
                </Typography>
                <Typography variant='h7' component="div" paragraph>
                  <b> Điều khoản sử dụng: </b>
                </Typography>
                <Typography variant="h7" component="div" paragraph> 
                  <b> Hướng dẫn sử dụng: </b>
                </Typography> */}

                <TablePrice />


              </CardContent>
          
              



            </Card>
            <Button 
                variant="outlined" 
                startIcon={<AssistantDirectionOutlinedIcon />} 
                sx={{marginTop: 2, width: '90vw'}} 
                onClick={() => {navigate('/googlemap/' + v.id);}}
                
            >
                Hiển thị bản đồ
            </Button>
            
        </Stack>
    </Paper>
  )
}

export default ParkingDetail