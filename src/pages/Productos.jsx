import React from 'react';
import ProductCard from '../components/ProductCard';
import imagenPrueba2 from '../assets/images/imagen-prueba2.jpg';

const Productos = () => {
    const productos = [
        {
            id: 1,
            nombre: 'Camiseta Básica',
            precio: 19.99,
            imagen: imagenPrueba2
        },
        {
            id: 2,
            nombre: 'Jeans Ajustados',
            precio: 39.99,
            imagen: imagenPrueba2
        },
        {
            id: 3,
            nombre: 'Chaqueta de Cuero',
            precio: 89.99,
            imagen: imagenPrueba2
        },
        {
            id: 4,
            nombre: 'Sudadera con Capucha',
            precio: 49.99,
            imagen: imagenPrueba2
        },
        {
            id: 5,
            nombre: 'Zapatos Deportivos',
            precio: 79.99,
            imagen: imagenPrueba2
        },
        {
            id: 6,
            nombre: 'Bolso de Mano',
            precio: 59.99,
            imagen: imagenPrueba2
        },
        {
            id: 7,
            nombre: 'Bolso de Mano',
            precio: 59.99,
            imagen: imagenPrueba2
        },
        {
            id: 8,
            nombre: 'Reloj Deportivo',
            precio: 99.99,
            imagen: imagenPrueba2
        },
        {
            id: 9,
            nombre: 'Gafas de Sol',
            precio: 29.99,
            imagen: imagenPrueba2
        },
        {
            id: 10,
            nombre: 'Bufanda de Lana',
            precio: 24.99,
            imagen: imagenPrueba2
        },
        {
            id: 11,
            nombre: 'Bufanda de Lana',
            precio: 24.99,
            imagen: imagenPrueba2
        },
        {
            id: 12,
            nombre: 'Bufanda de Lana',
            precio: 24.99,
            imagen: imagenPrueba2
        }

        // Agrega más productos según sea necesario
    ];

    return (

        <div className="product">
            <h1 className="productos-title">Productos</h1>
            <div className="product-list">
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