import { Route, Routes } from 'react-router-dom';
import BottomNavigationBar from './components/BottomNavigationBar/BottomNavigationBar';
import ButtonAppBar from './components/BottomNavigationBar/ButtonAppBar';
import HomePage from './features/home/pages/index';
import Search from './features/search/pages/index';
import QrPage from './features/qrcode/pages/index';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/qr' element={<QrPage />} />
        <Route path='/search' element={<Search />} />
      </Routes>
      <BottomNavigationBar />
    </div>
  );
}

export default App;
