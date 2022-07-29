import {lazy, Suspense} from 'react'
import loadable from '@loadable/component';
import { Route, Routes } from 'react-router-dom';

import BottomNavigationBar from './components/BottomNavigationBar/BottomNavigationBar';
import ButtonAppBar from './components/BottomNavigationBar/ButtonAppBar';
// import HomePage from './pages/Home/index';
// import Search from './pages/Search/index';
// import QrPage from './pages/QrCode/index';
// import HistoryTicketPage from './pages/History/index';
import { Box } from '@mui/material';
// import QrTicket from './features/Tickets/QrTicket';
// import Map from './pages/Map/index';
// import TicketCheckout from './pages/Checkout';
import Test from './test';
// import ParkingDetail from './components/PaperCard/ParkingDetail';
import UserPages from './pages/User/index';
// import Markers from './pages/Map/markers';

const HomePage = lazy(() => import('./pages/Home'))
const QrPage = lazy(() => import('./pages/QrCode'))
const Search = lazy(() => import('./pages/Search'))
const HistoryTicketPage = lazy(() => import('./pages/History/index'))
const Map = lazy(() => import('./pages/Map/index'))
const TicketCheckout = lazy(() => import('./pages/Checkout/index'))
const Markers = lazy(() => import('./pages/Map/markers'))
const ParkingDetail = lazy(() => import('./components/PaperCard/ParkingDetail'));
const QrTicket = lazy(() => import('./features/Tickets/QrTicket'))


function App() {
  return (
    <Box>
      {/* <ButtonAppBar /> */}

      <Routes>
        <Route
            path='/'
            element={
              <Suspense fallback={<>...</>}>
                <HomePage />
              </Suspense>
            }
          />
        <Route
            path='/qr'
            element={
              <Suspense fallback={<>...</>}>
                <QrPage />
              </Suspense>
            }
          />
        <Route
            path='/search'
            element={
              <Suspense fallback={<>...</>}>
                <Search />
              </Suspense>
            }
          />
        <Route
            path='/history'
            element={
              <Suspense fallback={<>...</>}>
                <HistoryTicketPage />
              </Suspense>
            }
          />
        <Route
            path='/qrimg'
            element={
              <Suspense fallback={<>...</>}>
                <QrTicket />
              </Suspense>
            }
          />
        <Route
            path='/search/detail'
            element={
              <Suspense fallback={<>...</>}>
                <ParkingDetail />
              </Suspense>
            }
          />
        <Route
            path='/googlemap'
            element={
              <Suspense fallback={<>...</>}>
                <Map />
              </Suspense>
            }
          />
        <Route
            path='/ticket/checkout'
            element={
              <Suspense fallback={<>...</>}>
                <TicketCheckout />
              </Suspense>
            }
          />
        <Route
            path='/markers'
            element={
              <Suspense fallback={<>...</>}>
                <Markers />
              </Suspense>
            }
          />
    



        {/* <Route path='/' element={<HomePage />} /> */}
        {/* <Route path='/qr' element={<QrPage />} /> */}
        {/* <Route path='/search' element={<Search />} /> */}
        {/* <Route path='/history' element={<HistoryTicketPage />} /> */}
        {/* <Route path='/qrimg' element={<QrTicket />} /> */}
        {/* <Route path='/search/detail' element={<ParkingDetail />} /> */}
        {/* <Route path='/googlemap' element={<Map />} /> */}
        {/* <Route path='/ticket/checkout' element={<TicketCheckout />} /> */}
        <Route path='/test-qr' element={<Test />} />
        <Route path='/user' element={<UserPages />} />
        {/* <Route path='/markers' element={<Markers/>} /> */}
      </Routes>
      <BottomNavigationBar />
    </Box>
  );
}

export default App;
