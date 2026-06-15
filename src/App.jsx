import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Servicios from './components/Servicios';
import Citas from './components/Citas';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Nosotros from './components/Nosotros';
import Productos from './components/Productos';

import LoginAdmin from "./pages/LoginAdmin";
import LoginCliente from "./pages/LoginCliente";
import RegistroCliente from "./pages/RegistroCliente";
import DashboardAdmin from "./pages/DashboardAdmin";
import DashboardEmpleado from "./pages/DashboardEmpleado";
import DashboardCliente from "./pages/DashboardCliente";

function App() {
  return (
    <Router >
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

        <Route path="/login-admin" element={<LoginAdmin />} />
<Route path="/login" element={<LoginCliente />} />
<Route path="/registro" element={<RegistroCliente />} />
<Route path="/dashboard-admin" element={<DashboardAdmin />} />
<Route path="/dashboard-empleado" element={<DashboardEmpleado />} />
<Route path="/dashboard-cliente" element={<DashboardCliente />} />
      </Routes>
    </Router>
  );
}

export default App;

