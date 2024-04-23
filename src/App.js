import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">      
      <Navbar/>
      
      <Routes>
        <Route path='/home' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;