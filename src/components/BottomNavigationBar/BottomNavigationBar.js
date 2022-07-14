import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { BottomNavigationAction, hexToRgb, Paper } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import BookOnlineIcon from '@mui/icons-material/BookOnline';

import css from './bottom.css'

import { useNavigate } from 'react-router-dom';


const BottomNavigationBar = () => {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  return (
          <BottomNavigation
            showLabels
            sx={{width: '100%', position: 'fixed', bottom: 0}}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Ticket" icon={<BookOnlineIcon />} onClick={() => navigate('/')}/>
            <BottomNavigationAction icon={<QrCodeScannerIcon />} onClick={() => navigate('/qr')} className={css.qr}/>
            <BottomNavigationAction label="Search" icon={<LocationSearchingOutlinedIcon />} onClick={() => navigate('/search')}/>
          </BottomNavigation>
  )
}

export default BottomNavigationBar