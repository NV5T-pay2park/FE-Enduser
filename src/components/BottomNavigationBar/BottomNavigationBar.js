import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { BottomNavigationAction, hexToRgb } from '@mui/material';
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
    <div>

        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Ticket" icon={<BookOnlineIcon />} onClick={() => navigate('/')}/>
            <BottomNavigationAction icon={<QrCodeScannerIcon />} onClick={() => navigate('/qr')} className={css.qr}/>
            <BottomNavigationAction label="Search" icon={<LocationSearchingOutlinedIcon />} onClick={() => navigate('/search')}/>
          </BottomNavigation>
        </Box>
    </div>
  )
}

export default BottomNavigationBar