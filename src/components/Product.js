import React from 'react';

export default function Product(props) {
    const {product, onAdd} = props;

    return (
        <div className="boxProducts">
            <div><img src={`/assets/${product.image}`} alt={product.image}></img></div>
            <h3>{product.name}</h3>
            <div>Score: {product.score}</div>
            <div>R$ {product.price}</div>
            <div><button onClick={() => onAdd(product)} >Comprar</button></div>
        </div>
    )
}
