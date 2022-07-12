import styled from '@emotion/styled';
import { Divider, Paper, Stack } from '@mui/material'
import React from 'react'
import Ticket from '../../../components/Ticket/Ticket';


const HomePage = () => {
  return (
    <div>
      <div style={{ margin: 50 }}>
        <Ticket />
      </div>
      <div style={{
        overflowX: 'scroll',
        overflowY: 'none',
        height: '80px',

      }}>
      </div>
    </div>


  )
}

export default HomePage