import { List } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'
import 'react-swipe-to-delete-component/dist/swipe-to-delete.css';
import SwipeItemListCard from './SwipeItemListCard';
import ItemListCard from './ItemListCard';

import * as Service from '../../services'

const ListTicket = ({status}) => {

  const context = useContext(AppContext)
  const filterTickets = Service.getCheckedNullList(context.ticketList).filter((ticket) => { 
    // return ticket.status == {status}
    ticket.status = ticket.id % 2===0 ? 'paid' : 'unpaid'
    ticket.money = Math.floor(Math.random()*10 + 1)*1000
    return ticket.status === status

  })
  const tickets = Service.getCheckedNullList(filterTickets).map(ticket => {
    if (ticket.status === 'paid') {
      return <SwipeItemListCard key={ticket.ticketID} ticket={ticket}/>
    } else {
      return <ItemListCard key={ticket.ticketID} ticket={ticket} />
    }
  })
  
  return (
      <List sx={{ width: '100%', maxWidth: 500, bgcolor: '#f6f7f8', maxHeight: 'calc(100vh - 154px)', overflow: 'auto'}}>
        {tickets}   
      </List>
  )
}

export default ListTicket