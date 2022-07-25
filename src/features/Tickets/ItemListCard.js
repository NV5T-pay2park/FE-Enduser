import React from 'react'
import { Avatar, Box, ListItem, ListItemAvatar, Typography } from '@mui/material'

const ItemListCard = ({ticket}) => {
  return (
    <ListItem alignItems="flex-start" sx={{ borderRadius: 2, marginTop: '0px', marginBottom: '10px', maxHeight: 100, bgcolor: 'white'}}>
        <ListItemAvatar>
            <Avatar alt="parking" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <Box sx={{ width: '100%', padding: 0, margin: 0}}>
            <Typography>Vé xe {ticket.parkingLot?.parkingLotName}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box><Typography sx={{fontSize: 12}}>Giờ gửi: 15h32 01/06/2022</Typography></Box>
                <Box><Typography sx={{fontSize: 12, fontWeight: 'bold', color: 'red'}}>chưa thanh toán</Typography></Box>
            </Box>
        </Box>
    </ListItem>
  )
}

export default ItemListCard