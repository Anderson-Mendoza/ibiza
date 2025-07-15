import React from 'react';

const DetalleProducto = ({ producto }) => {
    if (!producto) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="detalle-producto">
            <h1>{producto.nombre}</h1>
            <img src={producto.imagen} alt={producto.nombre} />
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <button>Agregar al carrito</button>
        </div>
    );
};

export default DetalleProducto;