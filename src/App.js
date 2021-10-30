import React, { useState} from "react";
import Cart from "./Component/Cart/Cart";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meal/Meals";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = ()  => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart hideCartHandler = {hideCartHandler}/> }
      <Header showCartHandler = {showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
