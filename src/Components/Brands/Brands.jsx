import React from 'react';
import './Brands.css';  // Asegúrate de importar el archivo de estilos
import hondaLogo from '../../images/honda-logo.jpg';
import yamahaLogo from '../../images/yamaha-logo.jpg';

const Brands = () => {
  return (
    <div className="brands-container">
      <h2>Las Mejores Marcas del Mercado</h2>
      <p>Descubre las motos de las marcas líderes: Honda y Yamaha.</p>
      <div className="brand">
        <img src={hondaLogo} alt="Honda" />
        <p>Honda: Rendimiento y Estilo</p>
      </div>
      <div className="brand">
        <img src={yamahaLogo} alt="Yamaha" />
        <p>Yamaha: Innovación y Calidad</p>
      </div>
    </div>
  );
};

export default Brands;