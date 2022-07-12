import styled from '@emotion/styled';
import { Divider, Paper, Stack } from '@mui/material'
import React from 'react'
import Ticket from '../../components/Ticket/Ticket'


const HomePage = () => {
  return (
    <div>
      <div style={{margin: 50}}> 
        <Ticket/>
      </div>
      <div style={{
        overflowX: 'scroll',
        overflowY: 'none',
        height: '80px',
        
      }}>
        <Stack
          direction={{ xs: 'row', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Paper>Item 1</Paper>
          <Paper>Item 2</Paper>
          <Paper>Item 3</Paper>
          <Paper>Item 4</Paper>
          <Paper>Item 5</Paper>
          <Paper>Item 6</Paper>
          <Paper>Item 7</Paper>
          <Paper>Item 8</Paper>
          <Paper>Item 9</Paper>
          <Paper>Item 10</Paper>
          <Paper>Item 11</Paper>
          <Paper>Item 12</Paper>
          <Paper>Item 13</Paper>
          <Paper>Item 14</Paper>
          <Paper>Item 15</Paper>
        </Stack>
      </div>
    </div>
   
      
  )
}

export default HomePage