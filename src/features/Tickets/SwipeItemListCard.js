import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar, ListItem, ListItemAvatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SwipeToDelete from 'react-swipe-to-delete-component';
import 'react-swipe-to-delete-component/dist/swipe-to-delete.css';

const SwipeItemListCard = ({ticket}) => {

  return (
    <SwipeToDelete key={ticket.id} deleteSwipe={0.3} onDelete={() => {console.log("deleteed")}} style={{background: 'black'}} background={<Box style={{backgroundColor: '#f6f7f8', height: 100}}><DeleteIcon/></Box>} >
        <ListItem alignItems="flex-start" sx={{ borderRadius: 2, marginTop: '0px', marginBottom: '10px', maxHeight: 100, bgcolor: 'white'}}>
            <ListItemAvatar>
                <Avatar alt="parking" src="./logo192.png" />
            </ListItemAvatar>
            <Box sx={{ width: '100%', padding: 0, margin: 0}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box><Typography>Vé xe {ticket.parkingLotName}</Typography></Box>
                    <Box><Typography sx={{fontSize: 10, fontWeight: 'bold', color: 'black'}}>-{ticket.total}đ</Typography></Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box><Typography sx={{fontSize: 12}}>Giờ gửi: 15h32 01/06/2022</Typography></Box>
                    <Box><Typography sx={{fontSize: 12, fontWeight: 'bold', color: 'green'}}>đã thanh toán</Typography></Box>
                </Box>
            </Box>
        </ListItem>
    </SwipeToDelete>
  )
}

export default SwipeItemListCard