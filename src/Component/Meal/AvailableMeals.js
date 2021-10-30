import { useEffect, useState } from "react/cjs/react.development";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";



const AvailableMeals = () => {
  const [meals, setIsMeals] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState()

  useEffect(() => {
    console.log('effect');
    async function fetchMeals() {
      setIsLoading(true)
      const response = await fetch(
        "https://react-http-a44c2-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error('something went wrong')
      }
      
      const responseData = await response.json();

      const mealsData = [];
      for (const key in responseData) {
        mealsData.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price

        });
      }
      setIsMeals(mealsData)
      setIsLoading(false)
    };
      fetchMeals().catch(error => {
        setIsLoading(false);
        console.log(error);
        setHasError(error.message)
      });
   
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
