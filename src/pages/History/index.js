import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import React, { useState } from 'react'
import ListTicket from '../../features/Tickets/ListTicket'

const HistoryTicketPage = () => {
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={ {flexDirection: 'row', maxHeight: 'calc(100vh - 56px)' }}>

    {/* <Box sx={{height: 'calc(100vh - 56px)'}}> */}
      <TabContext value={value}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered variant="fullWidth">
            <Tab label='Chưa thanh toán'  value='1'/>
            <Tab label='Đã thanh toán'  value='2'/>
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ bgcolor: '#f6f7f8', height: 'calc(100vh - 104px)'}}>
            <ListTicket status="unpaid"/>
        </TabPanel>
        <TabPanel value="2" sx={{ bgcolor: '#f6f7f8', height: 'calc(100vh - 104px)'}}>
            <ListTicket status="paid"/>
        </TabPanel>
      </TabContext>  
    {/* </Box> */}

    </div>
  )
}


export default HistoryTicketPage