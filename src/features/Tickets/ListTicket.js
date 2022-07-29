import { List } from '@mui/material';
import React, { useContext } from 'react';
import 'react-swipe-to-delete-component/dist/swipe-to-delete.css';
import { AppContext } from '../../AppContext';
import ItemListCard from './ItemListCard';
import SwipeItemListCard from './SwipeItemListCard';

import * as Service from '../../services';

const ListTicket = ({status}) => {

  const context = useContext(AppContext)
  const filterTickets = Service.getCheckedNullList(context.ticketList).filter((ticket) => { 
    return ticket.status === status
  })
  const tickets = Service.getCheckedNullList(filterTickets).map(ticket => {
    if (ticket.status === true) {
      return <SwipeItemListCard key={ticket.ticketID} ticket={ticket}/>
    } else {
      return <ItemListCard id-test="unpaid-card" key={ticket.ticketID} ticket={ticket} />
    }
  })
  
  return (
      <List sx={{ width: '100%', maxWidth: 500, bgcolor: '#f6f7f8', maxHeight: 'calc(100vh - 154px)', overflow: 'auto'}}>
        {tickets}   
      </List>
  )
}

export default ListTicket