import classes from './RestaurantCard.module.css';
import Card from '../UI/Card';

const RestaurantCard = (props) => {
  const { restaurant, onSelect } = props;

  const handleClick = () => {
    onSelect(restaurant);
  };

  return (
    <Card className={classes.container}>
      <div className={classes.restaurant} onClick={handleClick}>
        <div className={classes.header}>
          <div className={classes.imageWrapper}>
            <div className={classes.image}>{restaurant.image}</div>
            {restaurant.discount > 0 && (
              <div className={classes.discount}>{restaurant.discount}% OFF</div>
            )}
            {restaurant.badges.length > 0 && (
              <div className={classes.badgesContainer}>
                {restaurant.badges.map(badge => (
                  <span key={badge} className={classes.badgeTag}>
                    {badge === 'trending' && '🔥'}
                    {badge === 'popular' && '⭐'}
                    {badge === 'new' && '✨'}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className={classes.info}>
            <h3 className={classes.name}>{restaurant.name}</h3>
            <p className={classes.cuisine}>{restaurant.cuisines.join(', ')}</p>
            
            <div className={classes.rating}>
              <span className={classes.ratingValue}>⭐ {restaurant.rating}</span>
              <span className={classes.reviews}>({restaurant.reviews.toLocaleString()} reviews)</span>
            </div>

            <div className={classes.details}>
              <span className={classes.delivery}>
                🚚 {restaurant.deliveryTime}
              </span>
              <span className={classes.fee}>
                ₹{restaurant.deliveryFee} delivery
              </span>
              <span className={classes.distance}>
                📍 {restaurant.distance}km
              </span>
            </div>

            <div className={classes.moreDetails}>
              <span className={classes.minOrder}>
                Min Order: ₹{restaurant.minimumOrder}
              </span>
              <span className={classes.hours}>
                {restaurant.openingHours.closed ? '🔴 Closed' : '🟢 Open'}
              </span>
            </div>

            {restaurant.offers.length > 0 && (
              <div className={classes.offersPreview}>
                <span className={classes.offersLabel}>✨ {restaurant.offers.length} Offers</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
