import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import TicketMini from './TicketMini'

const ListTicket = () => {
  return (
    <List sx={{ width: '100%', maxWidth: 500, bgcolor: '#f6f7f8' }}>
      <ListItem alignItems="flex-start" sx={{ borderRadius: 2, marginTop: '10px', maxHeight: 100, bgcolor: 'white'}}>
        <ListItemAvatar>
          <Avatar alt="parking" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <Box sx={{ width: '100%', padding: 0, margin: 0}}>
            <Typography>Vé xe Sư phạm</Typography>
            <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
                    >
                    <Box><Typography sx={{fontSize: 12}}>Giờ gửi: 15h32 01/06/2022</Typography></Box>
                    <Box><Typography sx={{fontSize: 12, fontWeight: 'bold', color: 'green'}}>đã thanh toán</Typography></Box>
            </Box>
        </Box>
        {/* <TicketMini/> */}
      </ListItem>
      <ListItem alignItems="flex-start" sx={{ borderRadius: 2, marginTop: '10px', maxHeight: 100, bgcolor: 'white'}}>
        <ListItemAvatar>
          <Avatar alt="parking" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <Box sx={{ width: '100%', padding: 0, margin: 0}}>
            <Typography>Vé xe Sư phạm</Typography>
            <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
                    >
                    <Box><Typography sx={{fontSize: 12}}>Giờ gửi: 15h32 01/06/2022</Typography></Box>
                    <Box><Typography sx={{fontSize: 12, fontWeight: 'bold', color: 'green'}}>đã thanh toán</Typography></Box>
            </Box>
        </Box>
        {/* <TicketMini/> */}
      </ListItem>
      <ListItem alignItems="flex-start" sx={{ borderRadius: 2, marginTop: '10px', maxHeight: 100, bgcolor: 'white'}}>
        <ListItemAvatar>
          <Avatar alt="parking" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <Box sx={{ width: '100%', padding: 0, margin: 0}}>
            <Typography>Vé xe Sư phạm</Typography>
            <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
                    >
                    <Box><Typography sx={{fontSize: 12}}>Giờ gửi: 15h32 01/06/2022</Typography></Box>
                    <Box><Typography sx={{fontSize: 12, fontWeight: 'bold', color: 'green'}}>đã thanh toán</Typography></Box>
            </Box>
        </Box>
        {/* <TicketMini/> */}
      </ListItem>

      
      
    </List>
  )
}

export default ListTicket