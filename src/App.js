import { lazy, Suspense, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import BottomNavigationBar from './components/BottomNavigationBar/BottomNavigationBar';
import { Box } from '@mui/material';
import { AppContext } from './AppContext';



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

  const context = useContext(AppContext)

  return (
    <Box>
      {/* <ButtonAppBar /> */}

      <Routes>
        <Route
            path='/'
            element={
              <Suspense fallback={<></>}>
                <HomePage context={context}/>
              </Suspense>
            }
          />
        <Route
            path='/qr'
            element={
              <Suspense fallback={<></>}>
                <QrPage />
              </Suspense>
            }
          />
        <Route
            path='/search'
            element={
              <Suspense fallback={<></>}>
                <Search />
              </Suspense>
            }
          />
        <Route
            path='/history'
            element={
              <Suspense fallback={<></>}>
                <HistoryTicketPage ticketList={context.ticketList}/>
              </Suspense>
            }
          />
        <Route
            path='/qrimg'
            element={
              <Suspense fallback={<></>}>
                <QrTicket />
              </Suspense>
            }
          />
        <Route
            path='/search/detail'
            element={
              <Suspense fallback={<></>}>
                <ParkingDetail />
              </Suspense>
            }
          />
        <Route
            path='/googlemap'
            element={
              <Suspense fallback={<></>}>
                <Map />
              </Suspense>
            }
          />
        <Route
            path='/ticket/checkout'
            element={
              <Suspense fallback={<></>}>
                <TicketCheckout />
              </Suspense>
            }
          />
        <Route
            path='/markers'
            element={
              <Suspense fallback={<></>}>
                <Markers />
              </Suspense>
            }
          />
      </Routes>
      <BottomNavigationBar userInfo={context.userInfo} insertTicket={context.insertTicket}/>
    </Box>
  );
}

export default App;
