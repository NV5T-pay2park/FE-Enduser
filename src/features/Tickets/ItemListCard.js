import { Avatar, Box, ListItem, Typography } from '@mui/material'
import React from 'react'
import { formatDateTime } from '../../services'

const ItemListCard = ({ticket}) => {
  return (
    <ListItem alignItems="flex-start" sx={{ borderRadius: 2, marginTop: '0px', marginBottom: '10px', maxHeight: 100, bgcolor: 'white'}}>
            <Avatar alt="parking" src="./p2p_logo.webp" sx={{ width: 40, height: 40, marginRight: 1 }}/>
        <Box sx={{ width: '100%', padding: 0, margin: 0}}>
            <Typography>Nhà xe {ticket.parkingLotName}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box><Typography sx={{fontSize: 12, color: "#727F8C"}}>Giờ gửi: {formatDateTime(ticket.checkInTime)}</Typography></Box>
                <Box><Typography sx={{fontSize: 12, fontWeight: 'bold', color: 'red'}}>chưa thanh toán</Typography></Box>
            </Box>
        </Box>
    </ListItem>
  )
}

export default ItemListCard