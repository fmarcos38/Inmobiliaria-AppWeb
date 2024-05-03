import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Redes from './components/Redes';
import Footbar from './components/Footbar';
import Card from './components/Card';
import Home from './pages/Home';
import { InmobiliariaProvider } from './Context';
import DetalleProp from './pages/DetallePropiedad';
import Carrusel from './components/Carrusel';


function App() {
  return (
    <InmobiliariaProvider>
      <div className="App">      
      {/*--------- navbar------ */}
      <Navbar/>
      {/* ---barra lateral Redes ssoc. */}
      <Redes className='redes'/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detalle/:id' element={<DetalleProp/>}/>

        {/* rutas para el desarrollador */}
        <Route path='/card' element={<Card/>}/>
        <Route path='/carrusel' element={<Carrusel/>} />
      </Routes>
      {/* footer */}
      <Footbar/>
    </div>
    </InmobiliariaProvider>
  );
}

export default App;
