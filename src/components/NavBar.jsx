import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Navbar() {

    const navigate = useNavigate();
    const irACitas = () => {
    navigate('/Citas');
    };
    const irAProductos = () => {
      navigate('/Productos'); // esta también con tu <Route path="/productos" />
    };
  

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-pink-800 font-serif text-xl italic">Glow</span>
            <span className="text-pink-600 font-serif text-xl">Lexia</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-pink-600 transition duration-200">Inicio</a>
            <a href="/" className="text-gray-700 hover:text-pink-600 transition duration-200">Servicios</a>
            <button onClick={irAProductos} className="text-gray-700 hover:text-pink-600 transition duration-200">Productos</button>
            <a href="/" className="text-gray-700 hover:text-pink-600 transition duration-200">Nosotros</a>
            <a href="#Footer" className="text-gray-700 hover:text-pink-600 transition duration-200">Contáctanos</a>
          </div>
          
          {/* Reservation Button */}
          <div className="hidden md:flex">
            <button onClick={irACitas} className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-pink-500 hover:to-rose-500 transition duration-300"> 
              Reservar Cita
            </button> 
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-gray-700 hover:text-pink-600 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4">
          <div className="flex flex-col space-y-4">
            <a href="/" className="text-gray-700 hover:text-pink-600 transition duration-200">Inicio</a>
            <a href="/" className="text-gray-700 hover:text-pink-600 transition duration-200">Servicios</a>
            <a href="/" className="text-gray-700 hover:text-pink-600 transition duration-200">Tratamientos</a>
            <div className="pl-4 flex flex-col space-y-2 border-l-2 border-pink-100 mt-1">
              <a href="/" className="text-gray-600 hover:text-pink-600 text-sm">Faciales</a>
              <a href="/" className="text-gray-600 hover:text-pink-600 text-sm">Corporales</a>
              <a href="/" className="text-gray-600 hover:text-pink-600 text-sm">Manicura & Pedicura</a>
              <a href="/" className="text-gray-600 hover:text-pink-600 text-sm">Maquillaje</a>
            </div>
            <button onClick={irAProductos} className="text-gray-700 hover:text-pink-600 transition duration-200">Productos</button>
            <a href="/" className="text-gray-700 hover:text-pink-600 transition duration-200">Nosotros</a>
            <a href="/" className="text-gray-700 hover:text-pink-600 transition duration-200">Contacto</a>
            
            <button onClick={irACitas} className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-4 py-2 rounded-full text-center text-sm font-medium hover:from-pink-500 hover:to-rose-500 transition duration-300 mt-2">
              Reservar Cita
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;