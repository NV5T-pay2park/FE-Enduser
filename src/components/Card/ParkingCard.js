import { Box, Card } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import React from 'react'
import { useTheme } from '@mui/material/styles';

const ParkingCard = ({ value }) => {
  const theme = useTheme();
//   const value = {
//     name: "Nhà xe VNG tên dài 1 2 4 tên dài part 2 3 4 5",
//     address: "Khu chế xuất Tân Thuận, Z06, Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam"
//   }

  return (
    <Card sx={{ display: 'flex', width: '100%', }}>
        <CardMedia
            component="img"
            sx={{ width: 100, height: 100, margin: 0.5 }}
            image="./toro_cry_rmbg.png"
            alt="parking"
        />

{/* sx={{ display: 'flex', flexDirection: 'column',}} */}
    {/* sx={{ flex: '1 0 auto' }} */}   
        <Box sx={{padding: 0, height: 110}}>
            <CardContent sx={{padding: "1px"}}>
                {value.status === "available" ? <Typography component="div" fontSize={13} color="#06BE04" fontWeight={"lightWeight"} marginTop={1}>
                    Còn chỗ
                </Typography> : <Typography component="div" fontSize={13} color="red" fontWeight={"lightWeight"} marginTop={1}>
                    Hết chỗ
                </Typography>}
                <Typography fontSize={15} component="div" marginTop="1px" fontWeight={"bold"}>
                {(value.name.length <= 20) ? value.name : value.name.substr(0, 20) + "..."}
                </Typography>
                <Typography fontSize={10} component="div">
                {(value.address.length <= 35) ? value.address : value.address.substr(0, 35) + "..."}
                </Typography>
                <Typography fontSize={10} component="div">
                    25 phút • 1,9 km • {value.phone}
                </Typography>
                <Typography fontSize={10} component="div">
                    Giờ mở cửa: {value.timeWorking}
                </Typography>
            </CardContent>
        </Box>
    </Card>
  )
}

export default ParkingCard