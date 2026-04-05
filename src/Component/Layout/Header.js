import React, { useContext } from "react";
import mealImage from "../../assets/meals.jpeg";
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";
import ThemeContext from "../../store/ThemeContext";

const Header = props => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <header className = {classes.header}>
        <h1> React Meals</h1>
        <div className={classes.headerActions}>
          <button 
            className={classes.themeToggle} 
            onClick={toggleTheme}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
          <HeaderCartButton onClick = {props.showCartHandler}/>
        </div>
      </header>
      <div className = {classes['main-image']}>
        <img src={mealImage} alt = 'A table full of delicious food!' ></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
