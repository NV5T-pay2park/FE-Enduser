import { Route, Routes } from 'react-router-dom';
import BottomNavigationBar from './components/BottomNavigationBar';
import ButtonAppBar from './components/ButtonAppBar';
import HomePage from './features/Home/HomePage';
import logo from './logo.svg';
import Search from './features/Search/Search';
import QrPage from './features/Qr/QrPage';


function App() {
  return (
    <div className="App">
      <ButtonAppBar/>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/qr' element={<QrPage/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
      <BottomNavigationBar  />
    </div>
  );
}

export default App;
