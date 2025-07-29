import React from 'react';

const ProductCard = ({ imagen, nombre, precio }) => {
    return (

        <div className="product-card">
            <img src={imagen} alt={nombre} className="product-image" />
            <h3 className="product-name">{nombre}</h3>
            <p className="product-price">${precio}</p>
            <button className="add-to-cart">Agregar al carrito</button>
        </div>

    );
};

export default ProductCard;