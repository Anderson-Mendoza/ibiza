import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import imagenPrueba from '../assets/images/imagen-prueba.jpg'; // Importa la imagen de prueba

const Home = () => {
    const featuredProducts = [
        {
            id: 1,
            nombre: 'Camiseta Básica',
            precio: 19.99,
            imagen: imagenPrueba
        },
        {
            id: 2,
            nombre: 'Jeans Ajustados',
            precio: 39.99,
            imagen: imagenPrueba
        },
        {
            id: 3,
            nombre: 'Chaqueta de Cuero',
            precio: 89.99,
            imagen: imagenPrueba
        },
        {
            id: 4,
            nombre: 'Sudadera con Capucha',
            precio: 49.99,
            imagen: imagenPrueba
        },
        {
            id: 5,
            nombre: 'Zapatos Deportivos',
            precio: 79.99,
            imagen: imagenPrueba
        },
        {
            id: 6,
            nombre: 'Zapatos Deportivos',
            precio: 79.99,
            imagen: imagenPrueba
        },

    ];

    return (
        <div>
            <h1>Productos Destacados</h1>
            <div className="product-list">
                {featuredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        nombre={product.nombre}
                        precio={product.precio}
                        imagen={product.imagen}
                    />
                ))}
            </div>

        </div>
    );
};

export default Home;