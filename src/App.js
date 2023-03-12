import './App.css';
import StoreHeader from './components/StoreHeader';
import Products from './components/Products';
import StoreFooter from './components/StoreFooter';
import { useState } from 'react';

function App() {
  let [cartData, setCardData] = useState({});

  function editCartProduct(id, qty){
    if (!(id in cartData)) {
        cartData[id] = {qty : 0};
    }
    
    cartData[id].qty = Math.max(cartData[id].qty + qty, 0);

    setCardData({ ...cartData });
  }


  return (<main>
    <StoreHeader cartData={cartData}/>
    <Products addRemoveProduct={editCartProduct} cartData={cartData}/>
    <StoreFooter />
   </main>);
}

export default App;