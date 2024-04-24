import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Redes from './components/Redes';
import Footbar from './components/Footbar';

function App() {
  return (
    <div className="App">      
      <Navbar/>
      <Redes/>

      <Routes>
        <Route path='/home' element={<Home/>} />
      </Routes>

      <Footbar/>
    </div>
  );
}

export default App;
