import React, { useState} from "react";
import Cart from "./Component/Cart/Cart";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meal/Meals";
import CartProvider from "./store/CartProvider";
import { ThemeProvider } from "./store/ThemeContext";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const showCartHandler = ()  => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  const selectRestaurantHandler = (restaurant) => {
    setSelectedRestaurant(restaurant);
  }

  const backToRestaurantsHandler = () => {
    setSelectedRestaurant(null);
  }

  return (
    <ThemeProvider>
      <CartProvider>
        {cartIsShown && <Cart hideCartHandler = {hideCartHandler}/> }
        <Header showCartHandler = {showCartHandler}/>
        <main>
          <Meals 
            selectedRestaurant={selectedRestaurant}
            onSelectRestaurant={selectRestaurantHandler}
            onBackToRestaurants={backToRestaurantsHandler}
          />
        </main>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
