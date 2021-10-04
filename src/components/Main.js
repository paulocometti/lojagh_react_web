import React from 'react';
import Product from './Product';

export default function Main(props){
    const {products, onAdd, orderBy, statusOrderBy} = props;
    
    return (
    <main className="block col-2">
        <div className="row">
            <h2>Produtos - Ordenado por {statusOrderBy}</h2>
            <div className="row right">

                <button 
                onClick={() => orderBy("price")} 
                className="orderby">Ordenar por Preço</button>

                <button 
                onClick={() => orderBy("score")} 
                className="orderby">Ordenar por Popularidade (score)</button>
                
                <button 
                onClick={() => orderBy("name")} 
                className="orderby">Ordenar por Ordem Alfabética</button>

            </div> 
        </div>  
        
        <br />

        <div className="rowProducts">
           
            {
                products.map((product, index) => (
                    <Product
                        key={product.id} 
                        index={index}
                        product={product} 
                        onAdd={onAdd}>
                    </Product>
                ))
            }

        </div>

    </main>
    );
}