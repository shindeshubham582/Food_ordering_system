import React from "react";
import MealsSummary from "./MealsSummary";
import Restaurants from "../Restaurant/Restaurants";
import RestaurantMenu from "../Restaurant/RestaurantMenu";

const Meals = (props) => {
  const { selectedRestaurant, onSelectRestaurant, onBackToRestaurants } = props;

  return (
    <React.Fragment>
      <MealsSummary />
      {!selectedRestaurant ? (
        <Restaurants onSelectRestaurant={onSelectRestaurant} />
      ) : (
        <RestaurantMenu 
          restaurant={selectedRestaurant} 
          onBack={onBackToRestaurants}
        />
      )}
    </React.Fragment>
  );
};

export default Meals;
