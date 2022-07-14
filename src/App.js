import { Route, Routes } from 'react-router-dom';
import BottomNavigationBar from './components/BottomNavigationBar/BottomNavigationBar';
import ButtonAppBar from './components/BottomNavigationBar/ButtonAppBar';
import HomePage from './pages/home/pages/index';
import Search from './pages/search/pages/index';
import QrPage from './pages/qrcode/pages/index';
import HistoryTicketPage from './pages/histoticket/pages';
import { Box } from '@mui/material';
import TicketMini from './components/Ticket/TicketMini';
import QrTicket from './components/Ticket/QrTicket';


function App() {
  return (
    <Box>
      <ButtonAppBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/qr' element={<QrPage />} />
        <Route path='/search' element={<Search />} />
        <Route path='/history' element={<HistoryTicketPage />} />
        <Route path='/mini' element={<TicketMini />} />
        <Route path='/qrimg' element={<QrTicket />} />
      </Routes>
      <BottomNavigationBar />
    </Box>
  );
}

export default App;
