import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();
    const irACitas = () => {
      navigate('/Citas');
    };
  return (
    <header className="bg-gradient-to-r from-rose-100 to-pink-100 py-40 px-8 shadow-md">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-light text-pink-800 mb-4">
          <span className="font-normal">Centro de Belleza</span> & <span className="italic">Estética</span>
        </h1>
        
        <div className="w-24 h-1 bg-pink-400 mx-auto my-4"></div>
        
        <p className="text-gray-700 text-lg md:text-xl font-light max-w-2xl mx-auto">
          Bienvenid@ a tu espacio de belleza y bienestar. Descubre nuestros servicios exclusivos para realzar tu belleza natural.
        </p>
        
        <div className="flex justify-center mt-8 space-x-6">
          <button onClick={irACitas} className="px-6 py-2 bg-white text-pink-700 border border-pink-300 rounded-full hover:bg-pink-50 transition duration-300 shadow-sm">
            Reservar Cita
          </button>
          <button className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition duration-300 shadow-sm">
            Servicios
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;