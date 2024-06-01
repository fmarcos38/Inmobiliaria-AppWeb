import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Redes from './components/Redes';
import Footbar from './components/Footbar';
import Card from './components/Card';
import Carrusel from './components/Carrusel';
import Modal from './components/Modal';
import Contactanos from './pages/Contactanos';
import Home from './pages/Home';
import DetalleProp from './pages/DetallePropiedad';
import PropsVenta from './pages/PropsVenta';
import PropsAlquiler from './pages/PropsAlquiler';
import Nosotros from './pages/Nosotros';
import PropsDestacadas from './pages/Destacadas';
import { InmobiliariaProvider } from './Context';



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
        <Route path='/venta' element={<PropsVenta/>} />
        <Route path='/alquiler' element={<PropsAlquiler/>} />
        <Route path='/destacadas' element={<PropsDestacadas/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/contacto' element={<Contactanos/>} />

        {/* rutas para el desarrollador */}
        <Route path='/card' element={<Card/>}/>
        <Route path='/carrusel' element={<Carrusel/>} />
        <Route path='/modal' element={<Modal/>} />
        
      </Routes>
      {/* footer */}
      <Footbar/>
    </div>
    </InmobiliariaProvider>
  );
}

export default App;
