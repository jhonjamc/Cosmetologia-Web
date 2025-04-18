import React from 'react';
import '../estilos/Servicios.css';

const Servicios = () => {
  return (
    <section className="servicios-container">
      {/* Título con estilos Tailwind intactos */}
      <div className="text-center mb-16 ml-30">
        <h2 className="text-3xl md:text-4xl font-serif text-pink-800 mb-4">Nuestros Servicios</h2>
        <div className="w-20 h-1 bg-pink-400 mx-auto"></div>
      </div>

      {/* Contenedor flex para las tarjetas */}
      <div className="card-container">

          <div className="card" style={{ backgroundImage: "url('/img/Rostro.jpg')" }}>
            <div className="card-details">
            </div>
          <button className="card-button">Limpieza Facial</button>
          </div>

          <div className="card" style={{ backgroundImage: "url('/img/Masajes.jpg')" }}>
            <div className="card-details">            
            </div>
            <button className="card-button">Masaje Corporal</button>
          </div>

          <div className="card" style={{ backgroundImage: "url('/img/Maquillaje.png')" }}>
            <div className="card-details">           
            </div>
            <button className="card-button">Makeup</button>
          </div>

          <div className="card" style={{ backgroundImage: "url('/img/Cabello.jpg')" }}>
            <div className="card-details">      
            </div>
            <button className="card-button">Tratamiento Capilar</button>
          </div>

      </div>
    </section>
  );
};

export default Servicios;



