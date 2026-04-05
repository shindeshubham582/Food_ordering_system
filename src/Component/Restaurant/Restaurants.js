import { useState } from 'react';
import classes from './Restaurants.module.css';
import RESTAURANTS from '../../data/restaurants';
import RestaurantCard from './RestaurantCard';
import Card from '../UI/Card';

const Restaurants = (props) => {
  const { onSelectRestaurant } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [sortBy, setSortBy] = useState('rating');
  const [minRating, setMinRating] = useState(0);
  const [maxDeliveryFee, setMaxDeliveryFee] = useState(100);
  const [maxDeliveryTime, setMaxDeliveryTime] = useState(60);
  const [showFilters, setShowFilters] = useState(false);

  // Get unique cuisines
  const cuisines = ['All', ...new Set(RESTAURANTS.flatMap(r => r.cuisines))];

  // Filter restaurants
  let filteredRestaurants = RESTAURANTS.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.cuisines.some(cuisine => 
                           cuisine.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesCuisine = selectedCuisine === 'All' || restaurant.cuisines.includes(selectedCuisine);
    const matchesRating = restaurant.rating >= minRating;
    const matchesDeliveryFee = restaurant.deliveryFee <= maxDeliveryFee;
    
    // Extract max delivery time (e.g., "20-30 mins" -> 30)
    const maxDeliveryTimeNum = parseInt(restaurant.deliveryTime.split('-')[1]);
    const matchesDeliveryTime = maxDeliveryTimeNum <= maxDeliveryTime;

    return matchesSearch && matchesCuisine && matchesRating && matchesDeliveryFee && matchesDeliveryTime;
  });

  // Sort restaurants
  if (sortBy === 'rating') {
    filteredRestaurants = [...filteredRestaurants].sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'deliveryTime') {
    filteredRestaurants = [...filteredRestaurants].sort((a, b) => {
      const aTime = parseInt(a.deliveryTime.split('-')[0]);
      const bTime = parseInt(b.deliveryTime.split('-')[0]);
      return aTime - bTime;
    });
  } else if (sortBy === 'deliveryFee') {
    filteredRestaurants = [...filteredRestaurants].sort((a, b) => a.deliveryFee - b.deliveryFee);
  } else if (sortBy === 'distance') {
    filteredRestaurants = [...filteredRestaurants].sort((a, b) => a.distance - b.distance);
  } else if (sortBy === 'discount') {
    filteredRestaurants = [...filteredRestaurants].sort((a, b) => b.discount - a.discount);
  }

  return (
    <section className={classes.restaurants}>
      {/* Search Bar */}
      <Card className={classes.searchCard}>
        <div className={classes.searchContainer}>
          <input
            type="text"
            placeholder="🔍 Search restaurants or cuisines..."
            className={classes.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter Toggle */}
        <button 
          className={classes.filterToggle}
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? '🔽 Hide Filters' : '⚙️ Show Filters'}
        </button>

        {/* Advanced Filters */}
        {showFilters && (
          <div className={classes.filterSection}>
            <div className={classes.filterRow}>
              <div className={classes.filterGroup}>
                <label>Min Rating: ⭐ {minRating.toFixed(1)}</label>
                <input 
                  type="range" 
                  min="0" 
                  max="5" 
                  step="0.5" 
                  value={minRating}
                  onChange={(e) => setMinRating(parseFloat(e.target.value))}
                  className={classes.slider}
                />
              </div>

              <div className={classes.filterGroup}>
                <label>Max Delivery Fee: ₹{maxDeliveryFee}</label>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  step="5" 
                  value={maxDeliveryFee}
                  onChange={(e) => setMaxDeliveryFee(parseInt(e.target.value))}
                  className={classes.slider}
                />
              </div>

              <div className={classes.filterGroup}>
                <label>Max Delivery Time: {maxDeliveryTime} mins</label>
                <input 
                  type="range" 
                  min="0" 
                  max="60" 
                  step="5" 
                  value={maxDeliveryTime}
                  onChange={(e) => setMaxDeliveryTime(parseInt(e.target.value))}
                  className={classes.slider}
                />
              </div>
            </div>

            <div className={classes.filterRow}>
              <div className={classes.filterGroup}>
                <label>Sort By:</label>
                <select 
                  className={classes.sortSelect}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="rating">Rating (High to Low)</option>
                  <option value="deliveryTime">Delivery Time (Fast)</option>
                  <option value="deliveryFee">Delivery Fee (Low)</option>
                  <option value="distance">Distance (Near)</option>
                  <option value="discount">Discount (High)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Cuisine Filter */}
        <div className={classes.filterContainer}>
          <div className={classes.cuisineLabel}>Filter by Cuisine:</div>
          <div className={classes.cuisineButtons}>
            {cuisines.slice(0, 8).map(cuisine => (
              <button
                key={cuisine}
                className={`${classes.cuisineBtn} ${selectedCuisine === cuisine ? classes.active : ''}`}
                onClick={() => setSelectedCuisine(cuisine)}
              >
                {cuisine}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Results Count */}
      <div className={classes.resultCount}>
        📍 Showing {filteredRestaurants.length} restaurants
        {sortBy && <span> • Sorted by {sortBy}</span>}
      </div>

      {/* Restaurants List */}
      <div className={classes.restaurantsList}>
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map(restaurant => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onSelect={onSelectRestaurant}
            />
          ))
        ) : (
          <Card className={classes.noResults}>
            <p>❌ No restaurants found matching your criteria.</p>
            <p className={classes.suggestion}>Try adjusting your filters or search term.</p>
          </Card>
        )}
      </div>
    </section>
  );
};

export default Restaurants;
