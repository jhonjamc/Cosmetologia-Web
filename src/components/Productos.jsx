import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Productos = () => {

    const navigate = useNavigate();
    const irAInicio = () => {
    navigate('/');
    };

  // Estado para la categoría activa
  const [categoriaActiva, setCategoriaActiva] = useState('Faciales');

  // Productos por categoría
  const productos = {
    Faciales: [
      { id: 1, nombre: 'Limpiador Facial Hidratante', precio: 35000, imagen: '/api/placeholder/300/300', descripcion: 'Limpiador suave para todo tipo de piel', rating: 4.8 },
      { id: 2, nombre: 'Mascarilla de Arcilla', precio: 42000, imagen: '/api/placeholder/300/300', descripcion: 'Desintoxica y purifica la piel', rating: 4.5 },
      { id: 3, nombre: 'Sérum de Vitamina C', precio: 65000, imagen: '/api/placeholder/300/300', descripcion: 'Ilumina y reduce manchas', rating: 4.9 },
    ],
    Corporales: [
      { id: 4, nombre: 'Crema Reafirmante', precio: 48000, imagen: '/api/placeholder/300/300', descripcion: 'Para piel más firme y tersa', rating: 4.6 },
      { id: 5, nombre: 'Aceite de Masaje Relajante', precio: 38000, imagen: '/api/placeholder/300/300', descripcion: 'Con esencias naturales', rating: 4.7 },
      { id: 6, nombre: 'Exfoliante Corporal', precio: 45000, imagen: '/api/placeholder/300/300', descripcion: 'Renueva la piel y elimina impurezas', rating: 4.4 },
    ],
    Cabello: [
      { id: 7, nombre: 'Shampoo Reparador', precio: 32000, imagen: '/api/placeholder/300/300', descripcion: 'Para cabello dañado o teñido', rating: 4.5 },
      { id: 8, nombre: 'Mascarilla Capilar', precio: 55000, imagen: '/api/placeholder/300/300', descripcion: 'Nutrición profunda para el cabello', rating: 4.8 },
      { id: 9, nombre: 'Aceite de Argán', precio: 48000, imagen: '/api/placeholder/300/300', descripcion: 'Hidrata y da brillo', rating: 4.7 },
    ],
    Maquillaje: [
      { id: 10, nombre: 'Base de Maquillaje', precio: 52000, imagen: '/api/placeholder/300/300', descripcion: 'Cobertura media-alta, acabado natural', rating: 4.6 },
      { id: 11, nombre: 'Paleta de Sombras', precio: 85000, imagen: '/api/placeholder/300/300', descripcion: '12 tonos versátiles', rating: 4.9 },
      { id: 12, nombre: 'Máscara de Pestañas', precio: 38000, imagen: '/api/placeholder/300/300', descripcion: 'Volumen y longitud', rating: 4.5 },
    ],
    'Kit de regalo': [
      { id: 13, nombre: 'Kit Facial Completo', precio: 120000, imagen: '/api/placeholder/300/300', descripcion: '4 productos esenciales para la rutina facial', rating: 4.9 },
      { id: 14, nombre: 'Set de Spa en Casa', precio: 95000, imagen: '/api/placeholder/300/300', descripcion: 'Todo lo necesario para un día de spa', rating: 4.8 },
      { id: 15, nombre: 'Kit de Maquillaje Básico', precio: 150000, imagen: '/api/placeholder/300/300', descripcion: '5 productos imprescindibles', rating: 4.7 },
    ],
  };

  // Función para manejar la compra
  const handleCompra = (producto) => {
    alert(`Has añadido "${producto.nombre}" al carrito.`);
    // Aquí iría la lógica para añadir al carrito
  };

  // Componente para mostrar estrellas de valoración
  const RatingStars = ({ rating }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="halfStarGradient">
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#e5e7eb" />
              </linearGradient>
            </defs>
            <path fill="url(#halfStarGradient)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        );
      }
    }
    
    return <div className="flex">{stars} <span className="ml-1 text-xs text-gray-500">({rating})</span></div>;
  };

  // Componente para una tarjeta de producto
  const ProductCard = ({ producto }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-pink-100">
      <div className="relative pb-2/3">
        <img 
          src={producto.imagen} 
          alt={producto.nombre} 
          className="w-full h-48 object-cover object-center"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-800 mb-1">{producto.nombre}</h3>
        <RatingStars rating={producto.rating} />
        <p className="text-sm text-gray-600 mt-2 h-12">{producto.descripcion}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-pink-600 font-bold">${producto.precio.toLocaleString()}</span>
          <button 
            onClick={() => handleCompra(producto)}
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-sm font-medium px-3 py-1.5 rounded transition-colors duration-200"
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
  
  // Lista de categorías
  const categorias = ['Faciales', 'Corporales', 'Cabello', 'Maquillaje', 'Kit de regalo'];

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-serif font-bold text-pink-600">Nuestros Productos</h1>
          <div className="flex justify-center mt-2 mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">Descubre nuestra exclusiva selección de productos de alta calidad para realzar tu belleza natural y cuidar tu piel.</p>
        </div>
        
        {/* Navegación de categorías */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
                categoriaActiva === categoria
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-pink-100'
              }`}
              onClick={() => setCategoriaActiva(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>
        
        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos[categoriaActiva].map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>

        {/* Nota promocional */}
        <div className="mt-16 text-center bg-white p-6 rounded-lg shadow-md border border-pink-100">
          <h2 className="text-xl font-serif font-medium text-pink-600 mb-3">¿No encuentras lo que buscas?</h2>
          <p className="text-gray-600 mb-4">Contamos con muchos más productos en nuestra tienda física. Visítanos o contáctanos para conocer todo nuestro catálogo.</p>
          <button className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200">
            Contáctanos
          </button>
          <button onClick={irAInicio} type="button"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-medium py-3 px-4 rounded-md transition ease-in-out duration-200 flex-1 shadow-md"
            >
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
      </div>
    </div>
  );
};

export default Productos;