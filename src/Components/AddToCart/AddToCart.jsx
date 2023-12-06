import { useState } from 'react';
import './cartstyle.css';

const Product = ({ id, name, price, addToCart }) => {
    const handleAddToCart = () => {
        addToCart({ id, name, price }); // Agregar el producto al carrito
    };

    return (
        <div className="product">
            <h3>{name}</h3>
            <p>Precio: ${price}</p>
            <button onClick={handleAddToCart}>Comprar</button>
        </div>
    );
};

const ProductsList = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]); // Agregar producto al estado del carrito
    };

    // Función para calcular el total del carrito
    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    const products = [
        { name: 'Honda Wave', price: 700000, description: 'Una moto argentina de la marca Honda con características ideales para la ciudad.', image: hondaWaveImage },
        { name: 'Honda Tornado', price: 4000000, description: 'Una potente moto argentina diseñada para aventuras off-road y experiencias emocionantes.', image: hondaTornadoImage },
        { name: 'Yamaha Crypton', price: 800000, description: 'Una moto ágil y eficiente fabricada en Argentina por Yamaha, ideal para la movilidad urbana.', image: yamahaCryptonImage },
        { name: 'Yamaha XTZ', price: 3987570, description: 'Una moto versátil y resistente, fabricada en Argentina por Yamaha, perfecta para todo tipo de terrenos.', image: yamahaXTZImage },
    ];// Ejemplo de lista de productos, sustitúyela por tus datos reales

    return (
        <div>
            <h2>Lista de productos</h2>
            <div className="products-container">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        addToCart={addToCart}
                    />
                ))}
            </div>
            <div className="cart">
                <h2>Carrito de compras</h2>
                <ul className="cart-items">
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>
                <p className="cart-total">Total: ${getTotal()}</p>
            </div>
        </div>
      );
};

export default ProductsList;