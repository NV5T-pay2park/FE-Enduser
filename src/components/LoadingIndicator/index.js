import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoadingIndicator() {
  return (
    <Box sx={{ display: 'flex', justifyItems: 'center', justifyContent: 'center', alignItems: 'center', zIndex: 10, width: '100%', height: 'calc(100vh - 112px)', position: 'absolute', backgroundColor: '#77777A', opacity: '90%'}}>
      <CircularProgress />
    </Box>
  );
}
