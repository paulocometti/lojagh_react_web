import React from 'react';

export default function Cart(props){
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c) => a+c.price*c.qty, 0);
    const sumQty = cartItems.reduce((a,c) => a+c.qty, 0);
    const shippingPrice = ((itemsPrice>250) ? 0 : (sumQty*10));
    const totalPrice = itemsPrice + shippingPrice;

    return (
    <aside className="block col-1">
        <h2>Carrinho de Compras</h2>
        <div>
            {cartItems.length ===0 && <div>O Carrinho está vazio!</div>}
        </div>

        {cartItems.map((item) => (
            <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2">
                    <button 
                        onClick={() => onAdd(item)}
                        className="add">
                    +</button>

                    <button 
                        onClick={() => onRemove(item)}
                        className="remove">
                    -</button>
                </div>
                <div className="col-2 text-right">
                    {item.qty} x R${item.price.toFixed(2)}  
                </div>
            </div>
        ))}
        {cartItems.length !== 0 &&
            <>
                <hr></hr>
                <div className="row">
                    <div className="col-2">Subtotal</div>
                    <div className="col-1 text-right">R$ {itemsPrice.toFixed(2)}</div>
                </div>
                
                <div className="row">
                    <div className="col-2">Taxa de Entrega</div>
                    <div className="col-1 text-right">R$ {shippingPrice.toFixed(2)}</div>
                </div>
                
                <div className="row">
                    <div className="col-2"><strong>Total</strong></div>
                    <div className="col-1 text-right"><strong>R$ {totalPrice.toFixed(2)}</strong></div>
                </div>
                <hr/>
                <div className="row">
                    <button onClick={()=> alert('Comprado')} className="pay">Finalizar Compra</button>
                </div>
            </>
        }
    </aside>
    );
}