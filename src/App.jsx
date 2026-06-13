import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Servicios from './components/Servicios';
import Citas from './components/Citas';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Nosotros from './components/Nosotros';
import Productos from './components/Productos';

function App() {
  return (
    <Router basename="/Cosmetologia-Web">
      <Routes>
        {/* Ruta principal con toda tu estructura */}
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Header />
              <Servicios />
              <Nosotros />
              <Footer />
            </>
          }
        />
        
        {/* Ruta solo para la vista de agendamiento */}
        <Route path="/Citas" element={<Citas />} />
        <Route path="/Productos" element={<Productos />} />
      </Routes>
    </Router>
  );
}

export default App;

