import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './layout/components/Header';
import { Content } from './layout/components/Content';
import { Footer } from './layout/components/Footer';
import { Articles } from './articles/components/Articles';
import { Oferts } from './ofert/components/Oferts';
import { Favorites } from './favorites/components/Favorites';
import { Compras } from './compra/components/Compras';
import { MiCuenta } from './cuenta/components/MiCuenta';
import CssBaseline from '@mui/material/CssBaseline';

function App() {


  const [favoritos, setFavoritos] = useState(0);
  const [carrito, setCarrito] = useState(0);

  
  return (
    <>
      <CssBaseline />
      
      <HashRouter>
        <Header favoritos={favoritos} carrito={carrito} />

        <Routes>
          <Route path='/' element={<Content />} />

          <Route path='/articles' element={<Articles
            setFavoritos={setFavoritos}
            setCarrito={setCarrito} />} />
            
          <Route path='/ofert' element={<Oferts />} />

          <Route path='/favorites' element={<Favorites />} />
          
          <Route path='/compra' element={<Compras />} />

          <Route path='/cuenta' element={<MiCuenta />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
