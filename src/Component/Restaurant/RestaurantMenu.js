import { useState, useContext } from 'react';
import classes from './RestaurantMenu.module.css';
import Card from '../UI/Card';
import MealItem from '../Meal/MealItem/MealItem';
import CartContext from '../../store/CartContext';

const RestaurantMenu = (props) => {
  const { restaurant, onBack } = props;
  const [selectedCategory, setSelectedCategory] = useState(restaurant.menus[0]?.id);
  const cartCtx = useContext(CartContext);

  const currentMenu = restaurant.menus.find(m => m.id === selectedCategory);

  // Function to get quantity of item in cart
  const getCartQuantity = (itemId) => {
    const cartItem = cartCtx.items.find(item => item.id === itemId);
    return cartItem ? cartItem.amount : 0;
  };

  return (
    <section className={classes.menu}>
      {/* Back Button */}
      <button className={classes.backBtn} onClick={onBack}>
        ← Back to Restaurants
      </button>

      {/* Restaurant Header */}
      <Card className={classes.header}>
        <div className={classes.headerContent}>
          <div className={classes.bannerImage}>{restaurant.image}</div>
          
          <div className={classes.headerInfo}>
            <div className={classes.badges}>
              {restaurant.badges.map(badge => (
                <span key={badge} className={classes.badge}>
                  {badge === 'trending' && '🔥 Trending'}
                  {badge === 'popular' && '⭐ Popular'}
                  {badge === 'new' && '✨ New'}
                </span>
              ))}
            </div>
            
            <h1 className={classes.name}>{restaurant.name}</h1>
            <p className={classes.cuisine}>{restaurant.cuisines.join(' • ')}</p>
            
            <div className={classes.stats}>
              <div className={classes.stat}>
                <span className={classes.statValue}>⭐ {restaurant.rating}</span>
                <span className={classes.statLabel}>{restaurant.reviews} reviews</span>
              </div>
              <div className={classes.stat}>
                <span className={classes.statValue}>🚚 {restaurant.deliveryTime}</span>
                <span className={classes.statLabel}>Delivery time</span>
              </div>
              <div className={classes.stat}>
                <span className={classes.statValue}>📍 {restaurant.distance}km</span>
                <span className={classes.statLabel}>Distance</span>
              </div>
              <div className={classes.stat}>
                <span className={classes.statValue}>₹{restaurant.deliveryFee}</span>
                <span className={classes.statLabel}>Delivery fee</span>
              </div>
            </div>

            <div className={classes.details}>
              <div className={classes.detailItem}>
                <strong>Min Order:</strong> ₹{restaurant.minimumOrder}
              </div>
              <div className={classes.detailItem}>
                <strong>Hours:</strong> {restaurant.openingHours.today}
              </div>
              <div className={classes.detailItem}>
                <strong>Address:</strong> {restaurant.address}
              </div>
            </div>

            {restaurant.discount > 0 && (
              <div className={classes.discount}>{restaurant.discount}% OFF - Limited Time Offer</div>
            )}

            {/* Offers */}
            {restaurant.offers.length > 0 && (
              <div className={classes.offers}>
                <h3>Available Offers</h3>
                {restaurant.offers.map(offer => (
                  <div key={offer.id} className={classes.offerItem}>
                    <span>{offer.title}</span>
                    <code>{offer.code}</code>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* Menu Categories */}
      <div className={classes.categoriesContainer}>
        <div className={classes.categories}>
          {restaurant.menus.map(menu => (
            <button
              key={menu.id}
              className={`${classes.categoryBtn} ${selectedCategory === menu.id ? classes.active : ''}`}
              onClick={() => setSelectedCategory(menu.id)}
            >
              {menu.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className={classes.mealSection}>
        <h2 className={classes.mealTitle}>{currentMenu?.name}</h2>
        
        <div className={classes.mealsList}>
          {currentMenu?.items.map(meal => (
            <div key={meal.id} className={classes.mealItemWrapper}>
              <div className={classes.mealItemHeader}>
                <div>
                  <div className={classes.itemTitleRow}>
                    <h3>{meal.name}</h3>
                    {getCartQuantity(meal.id) > 0 && (
                      <span className={classes.quantityBadge}>{getCartQuantity(meal.id)}</span>
                    )}
                  </div>
                  <p className={classes.itemDescription}>{meal.description}</p>
                  <div className={classes.itemMeta}>
                    <span className={classes.itemPrice}>₹{meal.price}</span>
                    <span className={classes.itemTime}>⏱️ {meal.preparationTime}</span>
                    <span className={classes.itemCal}>🔥 {meal.calories} cal</span>
                    {meal.isVeg ? (
                      <span className={classes.vegTag}>🟢 Veg</span>
                    ) : (
                      <span className={classes.nonVegTag}>🔴 Non-Veg</span>
                    )}
                  </div>
                </div>
                <div className={classes.itemImage}>{meal.image}</div>
              </div>

              {/* Customizations */}
              {meal.customizations.length > 0 && (
                <div className={classes.customizations}>
                  <p className={classes.customizationLabel}>Customization Options:</p>
                  {meal.customizations.map(cust => (
                    <div key={cust.id} className={classes.customizationGroup}>
                      <label>{cust.name}:</label>
                      <select className={classes.customSelect}>
                        <option>Select {cust.name}</option>
                        {cust.options.map(opt => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              )}

              {/* Add to Cart Button */}
              <div className={classes.itemFooter}>
                <MealItem
                  id={meal.id}
                  name={meal.name}
                  description={meal.description}
                  price={meal.price}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantMenu;
