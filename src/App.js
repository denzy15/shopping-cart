import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Products from "./components/Products";
import { state } from "./state";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (prod) => {
    const exist = cartItems.find((x) => x.id === prod.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === prod.id ? { ...exist, num: exist.num + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...prod, num: 1 }]);
    }
  };
  const onRemove =(prod) => {
    const exist = cartItems.find((x) => x.id === prod.id);
    if (exist.num === 1){
      setCartItems(cartItems.filter(x => x.id !== prod.id))
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === prod.id ? { ...exist, num: exist.num - 1 } : x
        )
      );
    }
  }
  return (
    <div className="block">
      <Products products={state.products} onAdd={onAdd} />
      <Cart cartItems={cartItems} onAdd = {onAdd} onRemove = {onRemove} discount = {state.discount} />
    </div>
  );
}

export default App;
