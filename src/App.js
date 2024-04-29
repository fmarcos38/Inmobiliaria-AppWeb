import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Redes from './components/Redes';
import Footbar from './components/Footbar';
import Card from './components/Card';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">      
      {/*--------- navbar------ */}
      <Navbar/>
      {/* ---barra lateral Redes ssoc. */}
      <Redes className='redes'/>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* rutas para el desarrollador */}
        <Route path='/card' element={<Card/>}/>
      </Routes>
      {/* footer */}
      <Footbar/>
    </div>
  );
}

export default App;
