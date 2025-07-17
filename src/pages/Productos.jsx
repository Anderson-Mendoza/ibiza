import React from 'react';
import ProductCard from '../components/ProductCard';

const Productos = () => {
    const productos = [
        {
            id: 1,
            nombre: 'Camiseta Básica',
            precio: 19.99,
            imagen: 'url_de_imagen_camiseta_básica'
        },
        {
            id: 2,
            nombre: 'Jeans Ajustados',
            precio: 39.99,
            imagen: 'url_de_imagen_jeans_ajustados'
        },
        {
            id: 3,
            nombre: 'Chaqueta de Cuero',
            precio: 89.99,
            imagen: 'url_de_imagen_chaqueta_cuero'
        },
        {
            id: 4,
            nombre: 'Sudadera con Capucha',
            precio: 49.99,
            imagen: 'url_de_imagen_sudadera_capucha'
        },
        {
            id: 5,
            nombre: 'Zapatos Deportivos',
            precio: 79.99,
            imagen: 'url_de_imagen_zapatos_deportivos'
        },
        {
            id: 6,
            nombre: 'Bolso de Mano',
            precio: 59.99,
            imagen: 'url_de_imagen_bolso_mano'
        },

        // Agrega más productos según sea necesario
    ];

    return (
        <div className="product-container">
            <h1>Productos Disponibles</h1>
            <div className="productos-list">
                {productos.map(producto => (
                    <ProductCard
                        key={producto.id}
                        nombre={producto.nombre}
                        precio={producto.precio}
                        imagen={producto.imagen}
                    />
                ))}
            </div>
        </div>
    );
};

export default Productos;