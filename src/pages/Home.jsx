import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const featuredProducts = [
        {
            id: 1,
            name: 'Camiseta Básica',
            price: 19.99,
            image: 'url_de_imagen_camiseta_básica',
        },
        {
            id: 2,
            name: 'Jeans Ajustados',
            price: 39.99,
            image: 'url_de_imagen_jeans_ajustados',
        },
        {
            id: 3,
            name: 'Chaqueta de Cuero',
            price: 89.99,
            image: 'url_de_imagen_chaqueta_cuero',
        },
    ];

    return (
        <div>
            <h1>Productos Destacados</h1>
            <div className="product-list">
                {featuredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>

        </div>
    );
};

export default Home;