import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar, ListItem, ListItemAvatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SwipeToDelete from 'react-swipe-to-delete-component';
import 'react-swipe-to-delete-component/dist/swipe-to-delete.css';
import { formatDateTime, formatMoney } from '../../services';
const SwipeItemListCard = ({ticket}) => {

  return (
    <SwipeToDelete key={ticket.id} deleteSwipe={0.3} onDelete={() => {console.log("deleteed")}} style={{background: 'black'}} background={<Box style={{backgroundColor: '#f6f7f8', height: 100}}><DeleteIcon/></Box>} >
        <ListItem alignItems="flex-start" sx={{ borderRadius: 2, marginTop: '0px', marginBottom: '10px', maxHeight: 100, bgcolor: 'white'}}>
            <Avatar alt="parking" src="./p2p_logo.webp" sx={{ width: 40, height: 40, marginRight: 1 }}/>
            <Box sx={{ width: '100%', padding: 0, margin: 0}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box><Typography>Nhà xe {ticket.parkingLotName}</Typography></Box>
                    {/* <Box><Typography sx={{fontSize: 10, fontWeight: 'bold', color: 'black'}}>-{ticket.total}đ</Typography></Box> */}
                    <Box><Typography sx={{fontSize: 10, fontWeight: 'bold', color: 'black'}}>-{ticket.total} đ</Typography></Box>
                
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box><Typography sx={{fontSize: 12, color: "#727F8C"}}>Giờ gửi: {formatDateTime(ticket.checkInTime)}</Typography></Box>
                    <Box><Typography sx={{fontSize: 12, fontWeight: 'bold', color: 'green'}}>đã thanh toán</Typography></Box>
                </Box>
            </Box>
        </ListItem>
    </SwipeToDelete>
  )
}

export default SwipeItemListCard