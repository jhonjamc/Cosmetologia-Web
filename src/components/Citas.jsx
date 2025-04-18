import React from 'react';
import { useNavigate } from 'react-router-dom';

const Citas = () => {

  const navigate = useNavigate();
  const irAInicio = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombre = e.target.nombre.value;
    const servicio = e.target.servicio.value;
    const hora = e.target.hora.value;
    const fecha = e.target.fecha.value;
    const comentarios = e.target.message.value;

    const mensaje = `*Nueva solicitud de cita*
    👤 *Nombre:* ${nombre}
    💆 *Servicio:* ${servicio}
    📅 *Fecha:* ${fecha}
    🕒 *Hora:* ${hora}
    📝 *Comentarios:* ${comentarios}`;
    const url = `https://wa.me/573106524191?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-50 to-purple-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 border border-pink-100">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-serif font-bold text-pink-600 mb-1">Agenda tu Cita</h2>
          <p className="text-sm text-gray-500">Completa el formulario y reserva tu momento de belleza</p>
          <div className="flex justify-center my-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
          </div>
        </div>

        <form className="flex flex-wrap" onSubmit={handleSubmit}>
          <div className="w-full md:w-[48%] md:mr-[2%] mb-4">
            <label className="block text-xs font-medium text-gray-600 mb-1 pl-1">Nombre Completo</label>
            <input
              type="text"
              name="nombre"
              required
              placeholder="Tu nombre"
              className="bg-pink-50 text-gray-800 border border-pink-200 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-pink-400 focus:border-pink-400 transition ease-in-out duration-150"
            />
          </div>

          <div className="w-full md:w-[48%] md:ml-[2%] mb-4">
            <label className="block text-xs font-medium text-gray-600 mb-1 pl-1">Servicio</label>
            <select
              name="servicio"
              required
              className="bg-pink-50 text-gray-800 border border-pink-200 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-pink-400 focus:border-pink-400 transition ease-in-out duration-150"
            >
              <option value="" disabled selected>Selecciona un servicio</option>
              <option value="Limpieza Facial">Limpieza Facial</option>
              <option value="Maquillaje">Maquillaje</option>
              <option value="Masajes">Masajes</option>
              <option value="Cabello">Cabello</option>
            </select>
          </div>

          <div className="w-full md:w-[48%] md:mr-[2%] mb-4">
            <label className="block text-xs font-medium text-gray-600 mb-1 pl-1">Hora</label>
            <input
              type="time"
              name="hora"
              required
              className="bg-pink-50 text-gray-800 border border-pink-200 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-pink-400 focus:border-pink-400 transition ease-in-out duration-150"
            />
          </div>

          <div className="w-full md:w-[48%] md:ml-[2%] mb-4">
            <label className="block text-xs font-medium text-gray-600 mb-1 pl-1">Fecha</label>
            <input
              type="date"
              name="fecha"
              required
              className="bg-pink-50 text-gray-800 border border-pink-200 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-pink-400 focus:border-pink-400 transition ease-in-out duration-150"
            />
          </div>

          <div className="w-full mb-4">
            <label className="block text-xs font-medium text-gray-600 mb-1 pl-1">Comentarios Adicionales</label>
            <textarea
              name="message"
              placeholder="Cuéntanos cualquier detalle importante..."
              className="bg-pink-50 text-gray-800 border border-pink-200 rounded-md p-2 w-full h-24 focus:outline-none focus:ring-1 focus:ring-pink-400 focus:border-pink-400 transition ease-in-out duration-150"
            />
          </div>

          <div className="flex w-full gap-4">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium py-3 px-4 rounded-md transition ease-in-out duration-200 flex-1 shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M12.004 2.003a9.94 9.94 0 0 0-8.799 14.994l-1.18 4.309 4.423-1.163a9.94 9.94 0 1 0 5.556-18.14zm5.717 14.088c-.237.663-1.38 1.294-1.9 1.38-.488.087-1.093.125-1.758-.112-.405-.15-.925-.3-1.593-.587a10.57 10.57 0 0 1-2.92-2.007 8.99 8.99 0 0 1-1.635-2.41c-.15-.3-.3-.663-.3-1.05 0-.437.15-.675.3-.862.15-.187.337-.3.525-.3h.45c.15 0 .337 0 .487.375.188.45.638 1.537.688 1.65.05.112.088.262.013.412-.075.15-.113.225-.225.337-.112.112-.237.262-.337.375-.113.112-.238.225-.1.45.15.225.675 1.125 1.45 1.837.988.9 1.825 1.187 2.062 1.312.237.112.375.1.525-.05.15-.15.6-.675.763-.9.187-.225.3-.187.487-.112.188.075 1.2.562 1.406.675.188.075.3.112.338.187.037.075.037.45-.2 1.112z" />
              </svg>
              WhatsApp
            </button>
            
            <button onClick={irAInicio} type="button"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-medium py-3 px-4 rounded-md transition ease-in-out duration-200 flex-1 shadow-md">
              <svg 
               xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Regresar
            </button>
          </div>
          
          <div className="w-full text-center mt-4">
            <p className="text-xs text-gray-500">Responderemos a tu solicitud lo antes posible</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Citas;

