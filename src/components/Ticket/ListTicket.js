import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'
import TicketMini from './TicketMini'

// Import the react-swipe-to-delete-component
import SwipeToDelete from 'react-swipe-to-delete-component';
// Import styles of the react-swipe-to-delete-component
import 'react-swipe-to-delete-component/dist/swipe-to-delete.css';
import DeleteIcon from '@mui/icons-material/Delete';
const ListTicket = ({status}) => {

  const context = useContext(AppContext)
  console.log("list: " + context.ticketList.length)
  const filterTickets = context.ticketList.filter((ticket) => { 
    // return ticket.status == {status}
    return ticket

  })
  const tickets = filterTickets.map(ticket => {
    return (
      <SwipeToDelete key={ticket.id} deleteSwipe={0.3} onDelete={() => {console.log("deleteed")}} style={{background: 'white'}} background={<Box style={{backgroundColor: '#f6f7f8', height: 100}}><DeleteIcon/></Box>} >

      <ListItem alignItems="flex-start" sx={{ borderRadius: 2, marginTop: '0px', marginBottom: '10px', maxHeight: 100, bgcolor: 'white'}}>
        <ListItemAvatar>
          <Avatar alt="parking" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <Box sx={{ width: '100%', padding: 0, margin: 0}}>
            <Typography>Vé xe {ticket.username}</Typography>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
            >
                    <Box><Typography sx={{fontSize: 12}}>Giờ gửi: 15h32 01/06/2022</Typography></Box>
                    <Box><Typography sx={{fontSize: 12, fontWeight: 'bold', color: 'green'}}>đã thanh toán</Typography></Box>
            </Box>
        </Box>
      </ListItem>
      </SwipeToDelete>
    )
  })


  return (
      <List sx={{ width: '100%', maxWidth: 500, bgcolor: '#f6f7f8', maxHeight: 'calc(100vh - 210px)', overflow: 'auto'}}>
        {tickets}   
      </List>
  )
}

export default ListTicket