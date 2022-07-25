import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'
import 'react-swipe-to-delete-component/dist/swipe-to-delete.css';
import SwipeItemListCard from './SwipeItemListCard';
import ItemListCard from './ItemListCard';


const ListTicket = ({status}) => {

  // BEGIN: helper function:
  const getCheckedNullList = (list) => {
    if (!list?.length || list?.length <= 0) {
        return [];
    }
    return list
  }
  // END: helper function.

  const context = useContext(AppContext)
  const filterTickets = getCheckedNullList(context.ticketList).filter((ticket) => { 
    // return ticket.status == {status}
    ticket.status = ticket.id % 2==0 ? 'paid' : 'unpaid'
    ticket.money = Math.floor(Math.random()*10 + 1)*1000
    return ticket.status == status

  })
  const tickets = getCheckedNullList(filterTickets).map(ticket => {
    if (ticket.status == 'paid') {
      return <SwipeItemListCard ticket={ticket}/>
    } else {
      return <ItemListCard ticket={ticket} />
    }
  })
  
  return (
      <List sx={{ width: '100%', maxWidth: 500, bgcolor: '#f6f7f8', maxHeight: 'calc(100vh - 154px)', overflow: 'auto'}}>
        {tickets}   
      </List>
  )
}

export default ListTicket