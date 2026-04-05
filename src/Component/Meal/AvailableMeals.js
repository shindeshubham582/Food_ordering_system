import { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";



// Sample meals data (Firebase database is restricted, using mock data)
const SAMPLE_MEALS = [
  {
    id: '1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: '2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: '3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: '4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const [meals, setIsMeals] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState()

  useEffect(() => {
    console.log('effect');
    async function fetchMeals() {
      setIsLoading(true)
      try {
        // Using mock data since Firebase database has security restrictions
        setIsMeals(SAMPLE_MEALS)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false);
        console.log(error);
        setHasError(error.message)
      }
    };
      fetchMeals();
   
  }, []);

  if (isLoading) {
    return <section className = {classes.MealsLoading}>
      <p>Loading......</p>
    </section>
  }

  if (hasError) {
    return <section className = {classes.MealsError}>
      <p> {hasError}</p>
    </section>
  }

  const mealList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
