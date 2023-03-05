import './App.css';
import StoreHeader from './components/StoreHeader';
import Products from './components/Products';
import StoreFooter from './components/StoreFooter';
import { useState } from 'react';

function App() {
  let [cartData, setCardData] = useState({});

  function addRemoveProduct(id, qty){
    if(cartData[id]) cartData[id].qty = Math.max(cartData[id].qty + qty, 0);
    else cartData[id] = {qty : Math.max(0 + qty, 0)};
    setCardData({...cartData});
  }


  return (<main>
    <StoreHeader cartData={cartData}/>
    <Products addRemoveProduct={addRemoveProduct} cartData={cartData}/>
    <StoreFooter />
   </main>);
}

export default App;