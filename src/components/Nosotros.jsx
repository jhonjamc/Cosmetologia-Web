import React from 'react';
import { useNavigate } from 'react-router-dom';

function Nosotros() {

  const navigate = useNavigate();
  const irACitas = () => {
    navigate('/Citas');
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-pink-800 mb-4">Sobre Nosotros</h2>
          <div className="w-20 h-1 bg-pink-400 mx-auto"></div>
        </div>

        {/* Contenido principal */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Imagen del salón */}
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-rose-100 rounded-full opacity-50"></div>
              <img 
                src="./img/SalonBelleza.jpg" 
                alt="Interior de nuestro salón de belleza" 
                className="rounded-lg shadow-lg relative z-10 w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-pink-100 rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Texto sobre el salón */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-serif text-pink-700 mb-4">Nuestra Historia</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Fundado en 2010, nuestro Centro de Belleza y Estética nació de la pasión por realzar la belleza natural de cada persona. 
              Desde entonces, nos hemos convertido en referentes en el sector, ofreciendo tratamientos personalizados con los más altos 
              estándares de calidad y atención.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Nuestro equipo de profesionales certificados combina técnicas tradicionales con los últimos avances en cosmetología, 
              brindando una experiencia única de bienestar y belleza a todos nuestros clientes.
            </p>
            
            {/* Valores */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-rose-50 p-4 rounded-md">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h4 className="font-medium text-pink-800">Calidad</h4>
                </div>
                <p className="text-sm text-gray-600">Utilizamos productos de alta gama y tecnología avanzada</p>
              </div>
              
              <div className="bg-rose-50 p-4 rounded-md">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                    </svg>
                  </div>
                  <h4 className="font-medium text-pink-800">Confianza</h4>
                </div>
                <p className="text-sm text-gray-600">Profesionales certificados y con amplia experiencia</p>
              </div>
              
              <div className="bg-rose-50 p-4 rounded-md">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <h4 className="font-medium text-pink-800">Personalización</h4>
                </div>
                <p className="text-sm text-gray-600">Tratamientos adaptados a las necesidades de cada cliente</p>
              </div>
              
              <div className="bg-rose-50 p-4 rounded-md">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <h4 className="font-medium text-pink-800">Bienestar</h4>
                </div>
                <p className="text-sm text-gray-600">Priorizamos la salud y el confort en cada servicio</p>
              </div>
            </div>
          </div>
        </div>

        {/* Equipo */}
        <div className="mt-24">
          <h3 className="text-2xl font-serif text-pink-800 text-center mb-12">Nuestro Equipo</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Miembro del equipo 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <img 
                src="/api/placeholder/300/300" 
                alt="Directora del centro" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-gradient-to-b from-white to-rose-50">
                <h4 className="font-serif text-lg text-pink-800 mb-1">Ana Martínez</h4>
                <p className="text-pink-600 text-sm mb-3">Directora & Esteticista Senior</p>
                <p className="text-gray-600 text-sm">Con más de 15 años de experiencia en el sector de la belleza y certificaciones internacionales.</p>
              </div>
            </div>

            {/* Miembro del equipo 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <img 
                src="/api/placeholder/300/300" 
                alt="Cosmetóloga" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-gradient-to-b from-white to-rose-50">
                <h4 className="font-serif text-lg text-pink-800 mb-1">Laura Gómez</h4>
                <p className="text-pink-600 text-sm mb-3">Cosmetóloga</p>
                <p className="text-gray-600 text-sm">Especialista en tratamientos faciales y anti-edad con formación en las últimas tecnologías.</p>
              </div>
            </div>

            {/* Miembro del equipo 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <img 
                src="/api/placeholder/300/300" 
                alt="Especialista en uñas" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-gradient-to-b from-white to-rose-50">
                <h4 className="font-serif text-lg text-pink-800 mb-1">Carlos Ruiz</h4>
                <p className="text-pink-600 text-sm mb-3">Especialista en Uñas</p>
                <p className="text-gray-600 text-sm">Artista de nail art con técnicas innovadoras y diseños personalizados para cada cliente.</p>
              </div>
            </div>

            {/* Miembro del equipo 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <img 
                src="/api/placeholder/300/300" 
                alt="Maquilladora profesional" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-gradient-to-b from-white to-rose-50">
                <h4 className="font-serif text-lg text-pink-800 mb-1">Elena Torres</h4>
                <p className="text-pink-600 text-sm mb-3">Maquilladora Profesional</p>
                <p className="text-gray-600 text-sm">Experta en maquillaje social y de eventos con experiencia en producciones de moda.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-20 text-center bg-gradient-to-r from-rose-100 to-pink-100 py-12 px-6 rounded-xl shadow-sm">
          <h3 className="text-2xl font-serif text-pink-800 mb-4">Ven a conocernos</h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Descubre por qué nuestros clientes confían en nosotros para realzar su belleza natural. 
            Te esperamos para ofrecerte una experiencia única de bienestar y cuidado personal.
          </p>
          <button onClick={irACitas} className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition duration-300 shadow-md">
            Reserva tu primera visita
          </button>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;