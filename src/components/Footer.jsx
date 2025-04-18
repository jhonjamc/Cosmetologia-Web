import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {

  const navigate = useNavigate();
  const irACitas = () => {
    navigate('/Citas');
  };
  
  return (
    <footer id= "Footer" className="bg-gradient-to-r from-rose-100 to-pink-100 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Información de contacto y dirección */}
          <div>
            <h4 className="font-serif text-xl text-pink-800 mb-4">Contáctanos</h4>
            <div className="w-12 h-1 bg-pink-400 mb-6"></div>
            
            <div className="mb-4 flex items-start">
              <div className="text-pink-600 mr-3 mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h5 className="font-medium text-pink-800">Dirección</h5>
                <p className="text-sm text-gray-700 mt-1">
                  Calle Belleza 123<br/>
                  Colonia Centro<br/>
                  Ciudad de México, CP 12345
                </p>
              </div>
            </div>
            
            <div className="mb-4 flex items-start">
              <div className="text-pink-600 mr-3 mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h5 className="font-medium text-pink-800">Teléfono</h5>
                <p className="text-sm text-gray-700 mt-1">+52 55 1234 5678</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-pink-600 mr-3 mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h5 className="font-medium text-pink-800">Email</h5>
                <p className="text-sm text-gray-700 mt-1">info@centrobelleza.com</p>
              </div>
            </div>
          </div>
          
          {/* Horario */}
          <div>
            <h4 className="font-serif text-xl text-pink-800 mb-4">Horario</h4>
            <div className="w-12 h-1 bg-pink-400 mb-6"></div>
            
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-700">Lunes - Viernes</span>
              <span className="text-pink-800 font-medium">9:00 - 20:00</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-700">Sábados</span>
              <span className="text-pink-800 font-medium">10:00 - 18:00</span>
            </div>
            <div className="flex justify-between text-sm mb-6">
              <span className="text-gray-700">Domingos</span>
              <span className="text-pink-800 font-medium">Cerrado</span>
            </div>
            
            <div className="bg-white bg-opacity-70 rounded-lg p-4 mt-4 shadow-sm">
              <h5 className="font-medium text-pink-800 mb-2">Reserva tu cita</h5>
              <p className="text-sm text-gray-700 mb-3">
                Programa tu visita con anticipación para asegurar disponibilidad
              </p>
              <button onClick={irACitas} className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-sm py-2 px-4 rounded-full transition duration-300" >
                Agendar ahora
              </button>
            </div>
          </div>
          
          {/* Promociones */}
          <div>
            <h4 className="font-serif text-xl text-pink-800 mb-4">Promociones</h4>
            <div className="w-12 h-1 bg-pink-400 mb-6"></div>
            
            <div className="space-y-4">
              <div className="bg-white bg-opacity-70 p-3 rounded-md shadow-sm">
                <h5 className="font-medium text-pink-700 mb-1">Feliz Cumpleaños</h5>
                <p className="text-sm text-gray-700">20% de descuento en cualquier tratamiento durante tu mes de cumpleaños</p>
              </div>
              
              <div className="bg-white bg-opacity-70 p-3 rounded-md shadow-sm">
                <h5 className="font-medium text-pink-700 mb-1">Martes de Amigas</h5>
                <p className="text-sm text-gray-700">2x1 en tratamientos faciales todos los martes</p>
              </div>
              
              <div className="bg-white bg-opacity-70 p-3 rounded-md shadow-sm">
                <h5 className="font-medium text-pink-700 mb-1">Primera Visita</h5>
                <p className="text-sm text-gray-700">15% de descuento en tu primer servicio</p>
              </div>
            </div>
          </div>
          
          {/* Productos y Redes Sociales */}
          <div>
            <h4 className="font-serif text-xl text-pink-800 mb-4">Productos</h4>
            <div className="w-12 h-1 bg-pink-400 mb-6"></div>
            
            <ul className="space-y-2 mb-8">
              <li>
                <a href="#" className="text-gray-700 hover:text-pink-700 transition duration-200">Faciales</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-pink-700 transition duration-200">Corporales</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-pink-700 transition duration-200">Cabello</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-pink-700 transition duration-200">Maquillaje</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-pink-700 transition duration-200">Kits de regalo</a>
              </li>
            </ul>
            
            {/* Redes Sociales */}
            <h5 className="font-medium text-pink-800 mb-3">Síguenos</h5>
            <div className="flex space-x-4 justify-start lg:justify-end">
              {/* Facebook */}
              <a href="#" className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full transition duration-300 shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0501 2C6.50001 2 2 6.58001 2 12.25C2 17.25 5.62999 21.3699 10.33 22V15.1899H7.84003V12.25H10.33V10.0399C10.33 7.49994 11.85 6.09998 14.15 6.09998C15.24 6.09998 16.4 6.29993 16.4 6.29993V8.75H15.16C13.95 8.75 13.5101 9.49994 13.5101 10.25V12.25H16.3L15.8699 15.1899H13.5001V22C18.2001 21.3899 21.8301 17.27 21.8301 12.25C21.8301 6.58001 17.5501 2 12.0501 2Z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="#" className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full transition duration-300 shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"/>
                </svg>
              </a>
              
              {/* TikTok */}
              <a href="#" className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full transition duration-300 shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6 5.82C15.9165 5.03962 15.5397 4.03743 15.54 3H12.45V15.4C12.4262 16.071 12.1429 16.7066 11.6598 17.1729C11.1767 17.6393 10.5313 17.8999 9.85997 17.9C8.43997 17.9 7.25997 16.74 7.25997 15.3C7.25997 13.58 8.91997 12.29 10.63 12.82V9.66C7.17997 9.2 4.15997 11.88 4.15997 15.3C4.15997 18.63 6.91997 21 9.85997 21C12.99 21 15.54 18.45 15.54 15.3V9.01C16.793 9.90985 18.2974 10.3926 19.84 10.39V7.3C19.84 7.3 18 7.39 16.6 5.82Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 mt-6 border-t border-pink-200 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Centro de Belleza y Estética | GlowLexia. Todos los derechos reservados.
          </p>
          <div className="flex justify-center mt-4 space-x-4 text-xs text-gray-600">
            <a href="#" className="hover:text-pink-700 transition duration-200">Política de Privacidad</a>
            <span>|</span>
            <a href="#" className="hover:text-pink-700 transition duration-200">Términos y Condiciones</a>
            <span>|</span>
            <a href="#" className="hover:text-pink-700 transition duration-200">Mapa del Sitio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



