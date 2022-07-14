import { Route, Routes } from 'react-router-dom';
import BottomNavigationBar from './components/BottomNavigationBar/BottomNavigationBar';
import ButtonAppBar from './components/BottomNavigationBar/ButtonAppBar';
import HomePage from './pages/home/pages/index';
import Search from './pages/search/pages/index';
import QrPage from './pages/qrcode/pages/index';


function App() {
  return (
    <div className="container">
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
