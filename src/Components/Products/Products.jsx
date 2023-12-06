import React, { useState, useEffect } from 'react';
import './Products.css'; // Importa el archivo de estilos
import hondaWaveImage from '../../images/wave.jpg';
import hondaTornadoImage from '../../images/tornado.jpg';
import yamahaCryptonImage from '../../images/crypton.jpg';
import yamahaXTZImage from '../../images/xtz.jpg';

const Products = () => {
  const [cartItems, setCartItems] = useState([]);
  const [dolarPrice, setDolarPrice] = useState(null);
  const [apiLoaded, setApiLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Realiza la solicitud a la API para obtener el precio del dólar
    fetch("https://dolarapi.com/v1/dolares/blue")
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setDolarPrice(data.oficial);
        setApiLoaded(true);
      })
      .catch(error => {
        console.error('Error al obtener el precio del dólar:', error);
        setError(error);
        setApiLoaded(true);
      });
  }, []);

  const defaultDolarPrice = 905; // Valor predeterminado en caso de fallo de la API

  const calculatePriceInDollars = (priceInPesos) => {
    const effectiveDolarPrice = dolarPrice !== null && !isNaN(dolarPrice) ? dolarPrice : defaultDolarPrice;
    return (priceInPesos / effectiveDolarPrice).toFixed(2);
  };

  // Datos de los productos con las imágenes importadas
  const productsData = [
    { name: 'Honda Wave', price: 700000, description: 'Una moto argentina de la marca Honda con características ideales para la ciudad.', image: hondaWaveImage },
    { name: 'Honda Tornado', price: 4000000, description: 'Una potente moto argentina diseñada para aventuras off-road y experiencias emocionantes.', image: hondaTornadoImage },
    { name: 'Yamaha Crypton', price: 800000, description: 'Una moto ágil y eficiente fabricada en Argentina por Yamaha, ideal para la movilidad urbana.', image: yamahaCryptonImage },
    { name: 'Yamaha XTZ', price: 3987570, description: 'Una moto versátil y resistente, fabricada en Argentina por Yamaha, perfecta para todo tipo de terrenos.', image: yamahaXTZImage },
  ];

  useEffect(() => {
    // Realiza cálculos adicionales o actualizaciones cuando dolarPrice cambie
    // Este efecto se ejecutará después de que la solicitud de la API se complete
    // y dolarPrice esté disponible
    console.log("Calculando precios en dólares...");
  }, [dolarPrice]);

  if (!apiLoaded) {
    return <div>Cargando...</div>;
  }

  if (error) {
    console.warn('Falló la solicitud a la API. Se utilizará el valor predeterminado para el precio del dólar.');
  }

  const addToCart = (product) => {
    setCartItems([...cartItems, product]); // Agregar el producto al carrito
  };

  return (
    <div className="products-container">
      {productsData.map((product, index) => (
        <div key={index} className="product">
          <img src={product.image} alt={product.name} />
          <div>
            <h3>{product.name}</h3>
            <p>Precio en AR$: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Comprar</button>
          </div>
        </div>
      ))}
      <div className="cart">
        <h2>Carrito de compras</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Products;