import { Route, Routes } from 'react-router-dom';
import BottomNavigationBar from './components/BottomNavigationBar/BottomNavigationBar';
import ButtonAppBar from './components/BottomNavigationBar/ButtonAppBar';
import HomePage from './pages/Home/index';
import Search from './pages/Search/index';
import QrPage from './pages/QrCode/index';
import HistoryTicketPage from './pages/History/index';
import { Box } from '@mui/material';
import TicketMini from './features/Tickets/TicketMini';
import QrTicket from './features/Tickets/QrTicket';
import Map from './pages/Map/index';
import TicketCheckout from './features/Tickets/TicketCheckout';
import Test from './test';
import ParkingDetail from './components/PaperCard/ParkingDetail';
import UserPages from './pages/User/index';
import Markers from './pages/Map/markers';


function App() {
  return (
    <Box>
      {/* <ButtonAppBar /> */}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/qr' element={<QrPage />} />
        <Route path='/search' element={<Search />} />
        <Route path='/history' element={<HistoryTicketPage />} />
        <Route path='/mini' element={<TicketMini />} />
        <Route path='/qrimg' element={<QrTicket />} />
        <Route path='/search/detail/:value' element={<ParkingDetail />} />
        <Route path='/googlemap/:value' element={<Map />} />
        <Route path='/ticket/checkout' element={<TicketCheckout />} />
        <Route path='/test-qr' element={<Test />} />
        <Route path='/user' element={<UserPages />} />
        <Route path='/markers' element={<Markers/>} />
      </Routes>
      <BottomNavigationBar />
    </Box>
  );
}

export default App;
