
import React from 'react';
import banner from '../../images/Banner.jpg';
import './Home.css';  // Asegúrate de importar el archivo de estilos

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner-rectangle">
        <img src={banner} alt="Banner" />
        <p>¡Oferta Especial! ¡Compre su moto ahora!</p>
      </div>
      <h1>Bienvenido a nuestra tienda de motos</h1>
      <p>Encuentra la moto perfecta para tus aventuras. ¡Explora nuestra selección y elige la mejor opción para ti!</p>
      {/* Agrega más contenido atractivo */}
      {/* ... */}
    </div>
  );
}

export default Home;