import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Importa el archivo de estilos

const NavBar = () => {
    return (
        <nav>
            <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/financiaciones">Financiaciones</Link></li>
            <li><Link to="/marcas">Marcas</Link></li>
            <li><Link to="/sponsors">Sponsors</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;