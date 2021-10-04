import React, {useState} from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import data from './data';

function App() {
  const {products} = data;
  
  const [statusOrderBy, setStatusOrderBy] = useState("Recentes");
  const [cartItems, setCartItems] = useState([]);
  const sumQty = cartItems.reduce((a,c) => a+c.qty, 0);

  const orderBy = (status) => {
    if(status==="name"){
        products.sort(function (a, b) {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        });
        setStatusOrderBy("Nome");
    }
    else if(status==="score"){
        products.sort(function(a, b) {
            return a.score - b.score;
        });
        setStatusOrderBy("Popularidade (Score)");
    }
    else if(status==="price"){
        products.sort(function(a, b) {
            return a.price - b.price;
        });
        setStatusOrderBy("Preço");
    }
  }

  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist){
      setCartItems(
        cartItems.map(x => 
          x.id === product.id ? {...exist, qty: exist.qty+1} : x
        )
      );    
    } else {
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x)=> x.id === product.id);
    if(exist.qty ===1){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map(x => 
          x.id === product.id ? {...exist, qty: exist.qty-1} : x
        )
      ); 
    }
  }

  return (
    <div>
      <Header countCartItems={sumQty}></Header> 
      <div className="row">

        <Main 
          onAdd={onAdd} 
          orderBy={orderBy}
          products={products}
          statusOrderBy={statusOrderBy}>
        </Main>
        
        <Cart 
          onAdd={onAdd} 
          onRemove={onRemove} 
          cartItems={cartItems}>
        </Cart>

      </div>
    </div>
  );
}

export default App;
