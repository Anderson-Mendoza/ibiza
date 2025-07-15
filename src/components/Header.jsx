import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Asegúrate de crear este archivo para los estilos del encabezado

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Tienda de Ropa</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;