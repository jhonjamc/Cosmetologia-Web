import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Citas = () => {
  const navigate = useNavigate();
  const irAInicio = () => navigate('/');
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await fetch("https://formspree.io/f/mgobpyrj", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setEnviado(true);
      e.target.reset();
    } else {
      setError(true);
    }
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

        {enviado ? (
          <div className="text-center py-8">
            <div className="text-pink-500 text-5xl mb-4">✓</div>
            <h3 className="text-xl font-serif text-pink-600 mb-2">¡Cita enviada!</h3>
            <p className="text-gray-500 text-sm mb-6">Te contactaremos pronto para confirmar.</p>
            <button onClick={() => setEnviado(false)} className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-md text-sm">
              Agendar otra cita
            </button>
          </div>
        ) : (
          <form className="flex flex-wrap" onSubmit={handleSubmit}>
            <div className="w-full md:w-[48%] md:mr-[2%] mb-4">
              <label className="block text-xs font-medium text-gray-600 mb-1 pl-1">Nombre Completo</label>
              <input type="text" name="nombre" required placeholder="Tu nombre"
                className="bg-pink-50 text-gray-800 border border-pink-200 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-pink-400 focus:border-pink-400 transition ease-in-out duration-150" />
            </div>

            <div className="w-full md:w-[48%] md:ml-[2%] mb-4">
              <label className="block text-xs font-medium text-gray-600 mb-1 pl-1">Servicio</label>
              <select name="servicio" required
                className="bg-pink-50 text-gray-800 border border-pink-200 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-pink-400 focus:border-pink-400 transition ease-in-out duration-150">
                <option value="" disabled defaultValue>Selecciona un servicio</option>
                <option value="Limpieza Facial">Limpieza Facial</option>
                <option value="Maquillaje">Maquillaje</option>
                <option value="Masajes">Masajes</option>
                <option value="Cabello">Cabello</option>
              </select>
            </div>

            <div className="w-full md:w-[48%] md:mr-[2%] mb-4">
              <label className="block text-xs font-medium text-gray-600 mb-1 pl-1">Hora</label>
              <input type="time" name="hora" required
                className="bg-pink-50 text-gray-800 border border-pink-200 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-pink-400 focus:border-pink-400 transition ease-in-out duration-150" />
            </div>

            <div className="w-full md:w-[48%] md:ml-[2%] mb-4">
              <label className="block text-xs font-medium text-gray-600 mb-1 pl-1">Fecha</label>
              <input type="date" name="fecha" required
                className="bg-pink-50 text-gray-800 border border-pink-200 rounded-md p-2 w-full focus:outline-none focus:ring-1 focus:ring-pink-400 focus:border-pink-400 transition ease-in-out duration-150" />
            </div>

            <div className="w-full mb-4">
              <label className="block text-xs font-medium text-gray-600 mb-1 pl-1">Comentarios Adicionales</label>
              <textarea name="message" placeholder="Cuéntanos cualquier detalle importante..."
                className="bg-pink-50 text-gray-800 border border-pink-200 rounded-md p-2 w-full h-24 focus:outline-none focus:ring-1 focus:ring-pink-400 focus:border-pink-400 transition ease-in-out duration-150" />
            </div>

            {error && <p className="w-full text-center text-red-500 text-sm mb-3">Hubo un error. Intenta de nuevo.</p>}

            <div className="flex w-full gap-4">
              <button type="submit"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium py-3 px-4 rounded-md transition ease-in-out duration-200 flex-1 shadow-md">
                Enviar Cita
              </button>

              <button onClick={irAInicio} type="button"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-medium py-3 px-4 rounded-md transition ease-in-out duration-200 flex-1 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Regresar
              </button>
            </div>

            <div className="w-full text-center mt-4">
              <p className="text-xs text-gray-500">Responderemos a tu solicitud lo antes posible</p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Citas;