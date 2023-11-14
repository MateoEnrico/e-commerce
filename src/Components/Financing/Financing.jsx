import React, { useState, useEffect } from 'react';
import './Financing.css';  // Asegúrate de importar el archivo de estilos
import hondaWaveImage from '../../images/wave.jpg';

const Financing = () => {
  // Datos de la moto seleccionada
  const selectedBike = {
    name: 'Honda Wave',
    price: 700000,
    description: 'Una moto argentina de la marca Honda con características ideales para la ciudad.',
    image: hondaWaveImage,
  };

  // Datos del financiamiento
  const financingOption = {
    months: 12,  // Número de meses de financiamiento
    interestRate: 0.1,  // Tasa de interés (10%)
  };

  // Calcula el precio de las cuotas en pesos
  const calculateCuotasPesos = () => {
    const totalAmount = selectedBike.price * (1 + financingOption.interestRate);
    const cuotaPesos = totalAmount / financingOption.months;
    return cuotaPesos.toFixed(2);
  };

  // Calcula el precio de las cuotas en dólares (suponiendo un valor del dólar)
  const calculateCuotasDolares = (dollarRate) => {
    const cuotaDolares = calculateCuotasPesos() / dollarRate;
    return cuotaDolares.toFixed(2);
  };

  return (
    <div className="financing-container">
      <h2>Opción de Financiamiento</h2>
      <p>Explora nuestra opción de financiamiento para la moto {selectedBike.name}:</p>
      <img src={selectedBike.image} alt={selectedBike.name} />
      <p>{selectedBike.description}</p>
      <p>Precio en AR$: ${selectedBike.price}</p>
      <p>Financiamiento a {financingOption.months} meses con una tasa de interés del {financingOption.interestRate * 100}%.</p>
      <p>El precio de las cuotas en AR$ es de ${calculateCuotasPesos()}.</p>
      {/* Suponiendo un valor del dólar de 100 AR$ */}
      <p>El precio de las cuotas en U$ es de ${calculateCuotasDolares(100)}.</p>
    </div>
  );
};

export default Financing;