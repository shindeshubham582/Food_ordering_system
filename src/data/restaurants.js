// ============================================
// ADVANCED FOOD ORDERING PLATFORM DATA
// ============================================
// Data Source: Mock Data (In production, this would come from a backend API)
// Structure: Restaurants with detailed metadata, menu categories, items with customizations, offers, etc.

const RESTAURANTS = [
  {
    id: '1',
    name: 'Spice Valley',
    cuisine: 'Indian',
    rating: 4.9,
    reviews: 3124,
    deliveryTime: '20-30 mins',
    deliveryFee: 25,
    minimumOrder: 200,
    distance: 2.3,
    discount: 20,
    badges: ['popular', 'trending'],
    image: '🍛',
    cuisines: ['Indian', 'North Indian', 'South Indian'],
    address: '123 Spice Street, Downtown',
    openingHours: {
      today: '11:00 AM - 11:00 PM',
      closed: false,
    },
    offers: [
      { id: 'o1', title: '20% off on orders above ₹500', code: 'SPICE20' },
      { id: 'o2', title: 'Free delivery on first order', code: 'FREEDEL' },
    ],
    menus: [
      {
        id: 'cat1',
        name: 'Appetizers',
        items: [
          {
            id: 'i1',
            name: 'Butter Chicken',
            description: 'Creamy and aromatic',
            price: 13.99,
            image: '🍛',
            preparationTime: '15-20 mins',
            isVeg: false,
            calories: 450,
            customizations: [
              {
                id: 'c1',
                name: 'Spice Level',
                options: ['Mild', 'Medium', 'Hot', 'Very Hot'],
              },
              {
                id: 'c2',
                name: 'Rice Type',
                options: ['White Rice', 'Basmati Rice', 'Brown Rice'],
              },
            ],
          },
          {
            id: 'i2',
            name: 'Samosa',
            description: 'Crispy and golden',
            price: 5.99,
            image: '🥔',
            preparationTime: '5-10 mins',
            isVeg: true,
            calories: 250,
            customizations: [
              {
                id: 'c1',
                name: 'Quantity',
                options: ['1 Piece', '2 Pieces', '3 Pieces'],
              },
            ],
          },
        ],
      },
      {
        id: 'cat2',
        name: 'Main Course',
        items: [
          {
            id: 'i3',
            name: 'Biryani Deluxe',
            description: 'Fragrant basmati rice',
            price: 14.99,
            image: '🍚',
            preparationTime: '20-25 mins',
            isVeg: false,
            calories: 550,
            customizations: [
              {
                id: 'c1',
                name: 'Meat Type',
                options: ['Chicken', 'Mutton', 'Fish'],
              },
              {
                id: 'c2',
                name: 'Spice Level',
                options: ['Mild', 'Medium', 'Hot'],
              },
            ],
          },
          {
            id: 'i4',
            name: 'Tandoori Chicken',
            description: 'Spiced to perfection',
            price: 15.99,
            image: '🍖',
            preparationTime: '25-30 mins',
            isVeg: false,
            calories: 400,
            customizations: [
              {
                id: 'c1',
                name: 'Spice Level',
                options: ['Mild', 'Medium', 'Hot', 'Very Hot'],
              },
            ],
          },
        ],
      },
      {
        id: 'cat3',
        name: 'Desserts',
        items: [
          {
            id: 'i5',
            name: 'Gulab Jamun',
            description: 'Soft and sweet',
            price: 7.99,
            image: '🍮',
            preparationTime: '5 mins',
            isVeg: true,
            calories: 300,
            customizations: [],
          },
        ],
      },
      {
        id: 'cat4',
        name: 'Beverages',
        items: [
          {
            id: 'i7',
            name: 'Mango Lassi',
            description: 'Sweet yogurt drink',
            price: 4.99,
            image: '🥤',
            preparationTime: '2 mins',
            isVeg: true,
            calories: 180,
            customizations: [
              {
                id: 'c1',
                name: 'Size',
                options: ['Small (250ml)', 'Medium (400ml)', 'Large (600ml)'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Sushi Paradise',
    cuisine: 'Japanese',
    rating: 4.8,
    reviews: 2543,
    deliveryTime: '25-35 mins',
    deliveryFee: 40,
    minimumOrder: 300,
    distance: 3.5,
    discount: 30,
    badges: ['trending'],
    image: '🍣',
    cuisines: ['Japanese', 'Asian', 'Sushi'],
    address: '456 Sakura Lane, Midtown',
    openingHours: {
      today: '12:00 PM - 10:00 PM',
      closed: false,
    },
    offers: [
      { id: 'o1', title: '30% off on first order', code: 'SUSHI30' },
      { id: 'o2', title: 'Buy 2 rolls get 1 free', code: 'ROLLBOGO' },
    ],
    menus: [
      {
        id: 'cat1',
        name: 'Sushi Rolls',
        items: [
          {
            id: 'i1',
            name: 'Classic Sushi Roll',
            description: 'Finest fish and veggies',
            price: 22.99,
            image: '🍣',
            preparationTime: '10-15 mins',
            isVeg: false,
            calories: 280,
            customizations: [
              {
                id: 'c1',
                name: 'Size',
                options: ['6 pieces', '8 pieces', '12 pieces'],
              },
            ],
          },
          {
            id: 'i2',
            name: 'Dragon Roll',
            description: 'Premium selection with eel',
            price: 28.99,
            image: '🍣',
            preparationTime: '10-15 mins',
            isVeg: false,
            calories: 320,
            customizations: [],
          },
          {
            id: 'i3',
            name: 'Volcano Roll',
            description: 'Spicy and delicious',
            price: 25.99,
            image: '🍣',
            preparationTime: '10-15 mins',
            isVeg: false,
            calories: 310,
            customizations: [
              {
                id: 'c1',
                name: 'Spice Level',
                options: ['Mild', 'Hot', 'Very Hot'],
              },
            ],
          },
        ],
      },
      {
        id: 'cat2',
        name: 'Appetizers',
        items: [
          {
            id: 'i4',
            name: 'Edamame',
            description: 'Steamed soy beans',
            price: 9.99,
            image: '🫘',
            preparationTime: '5 mins',
            isVeg: true,
            calories: 120,
            customizations: [
              {
                id: 'c1',
                name: 'Salt Level',
                options: ['Low Salt', 'Normal', 'Extra Salt'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'Burger Junction',
    cuisine: 'American',
    rating: 4.5,
    reviews: 3421,
    deliveryTime: '15-25 mins',
    deliveryFee: 25,
    minimumOrder: 150,
    distance: 1.8,
    discount: 25,
    badges: ['new', 'popular'],
    image: '🍔',
    cuisines: ['American', 'Burgers', 'Fast Food'],
    address: '789 Main Street, Downtown',
    openingHours: {
      today: '10:00 AM - 11:30 PM',
      closed: false,
    },
    offers: [
      { id: 'o1', title: 'Combo Meal ₹199', code: 'COMBO199' },
      { id: 'o2', title: '25% off on weekends', code: 'WEEKEND25' },
    ],
    menus: [
      {
        id: 'cat1',
        name: 'Burgers',
        items: [
          {
            id: 'i1',
            name: 'Barbecue Burger',
            description: 'American, raw, meaty',
            price: 12.99,
            image: '🍔',
            preparationTime: '8-12 mins',
            isVeg: false,
            calories: 580,
            customizations: [
              {
                id: 'c1',
                name: 'Patty',
                options: ['Single', 'Double', 'Triple'],
              },
              {
                id: 'c2',
                name: 'Cheese',
                options: ['No Cheese', 'Cheddar', 'Swiss', 'Yellow Cheese'],
              },
            ],
          },
          {
            id: 'i2',
            name: 'Deluxe Bacon Burger',
            description: 'Double patty with crispy bacon',
            price: 15.99,
            image: '🍔',
            preparationTime: '10-15 mins',
            isVeg: false,
            calories: 680,
            customizations: [
              {
                id: 'c1',
                name: 'Crispy Level',
                options: ['Soft', 'Crispy', 'Extra Crispy'],
              },
            ],
          },
        ],
      },
      {
        id: 'cat2',
        name: 'Sides',
        items: [
          {
            id: 'i3',
            name: 'French Fries',
            description: 'Crispy and golden',
            price: 5.99,
            image: '🍟',
            preparationTime: '5 mins',
            isVeg: true,
            calories: 365,
            customizations: [
              {
                id: 'c1',
                name: 'Size',
                options: ['Small', 'Medium', 'Large'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '4',
    name: 'Green Plate Cafe',
    cuisine: 'Vegan & Healthy',
    rating: 4.7,
    reviews: 1654,
    deliveryTime: '30-40 mins',
    deliveryFee: 35,
    minimumOrder: 250,
    distance: 4.2,
    discount: 15,
    badges: ['trending'],
    image: '🥗',
    cuisines: ['Vegan', 'Healthy', 'Salads'],
    address: '321 Green Way, Uptown',
    openingHours: {
      today: '8:00 AM - 9:00 PM',
      closed: false,
    },
    offers: [
      { id: 'o1', title: '15% off on healthy bowls', code: 'HEALTHYBOWL' },
      { id: 'o2', title: 'Subscribe & save 20%', code: 'SUBSCRIBE20' },
    ],
    menus: [
      {
        id: 'cat1',
        name: 'Buddha Bowls',
        items: [
          {
            id: 'i1',
            name: 'Green Bowl',
            description: 'Healthy and nutritious',
            price: 18.99,
            image: '🥗',
            preparationTime: '8-10 mins',
            isVeg: true,
            calories: 320,
            customizations: [
              {
                id: 'c1',
                name: 'Protein',
                options: ['Chickpeas', 'Tofu', 'Lentils', 'Nuts'],
              },
              {
                id: 'c2',
                name: 'Dressing',
                options: ['Tahini', 'Vinaigrette', 'Lemon'],
              },
            ],
          },
          {
            id: 'i2',
            name: 'Buddha Rice Bowl',
            description: 'Vegan protein packed',
            price: 16.99,
            image: '🍚',
            preparationTime: '10 mins',
            isVeg: true,
            calories: 380,
            customizations: [],
          },
        ],
      },
      {
        id: 'cat2',
        name: 'Salads',
        items: [
          {
            id: 'i3',
            name: 'Quinoa Salad',
            description: 'Super nutritious',
            price: 14.99,
            image: '🥙',
            preparationTime: '8 mins',
            isVeg: true,
            calories: 280,
            customizations: [
              {
                id: 'c1',
                name: 'Size',
                options: ['Regular', 'Large'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '5',
    name: 'Pizza Palace',
    cuisine: 'Italian',
    rating: 4.4,
    reviews: 2876,
    deliveryTime: '25-35 mins',
    deliveryFee: 30,
    minimumOrder: 200,
    distance: 2.8,
    discount: 25,
    badges: ['popular'],
    image: '🍕',
    cuisines: ['Italian', 'Pizza', 'Pasta'],
    address: '654 Pasta Street, Midtown',
    openingHours: {
      today: '11:30 AM - 11:00 PM',
      closed: false,
    },
    offers: [
      { id: 'o1', title: 'Buy 1 Get 1 on pizzas', code: 'PIZZA_BOGO' },
      { id: 'o2', title: '25% off above ₹600', code: 'PIZZA25' },
    ],
    menus: [
      {
        id: 'cat1',
        name: 'Pizzas',
        items: [
          {
            id: 'i1',
            name: 'Margherita Pizza',
            description: 'Classic with fresh basil',
            price: 14.99,
            image: '🍕',
            preparationTime: '15-20 mins',
            isVeg: true,
            calories: 450,
            customizations: [
              {
                id: 'c1',
                name: 'Size',
                options: ['Small', 'Medium', 'Large', 'Extra Large'],
              },
              {
                id: 'c2',
                name: 'Crust',
                options: ['Thin', 'Regular', 'Thick', 'Stuffed'],
              },
            ],
          },
          {
            id: 'i2',
            name: 'Pepperoni Supreme',
            description: 'Loaded with toppings',
            price: 18.99,
            image: '🍕',
            preparationTime: '15-20 mins',
            isVeg: false,
            calories: 520,
            customizations: [
              {
                id: 'c1',
                name: 'Extra Toppings',
                options: ['Mushroom', 'Pepperoni', 'Cheese', 'Olives'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '6',
    name: 'German Breads & Meats',
    cuisine: 'European',
    rating: 4.6,
    reviews: 1852,
    deliveryTime: '20-30 mins',
    deliveryFee: 30,
    minimumOrder: 250,
    distance: 3.1,
    discount: 20,
    badges: [],
    image: '🍖',
    cuisines: ['European', 'German', 'Meat'],
    address: '987 Berliner Strasse, Downtown',
    openingHours: {
      today: '11:00 AM - 10:00 PM',
      closed: false,
    },
    offers: [
      { id: 'o1', title: '20% off on family packs', code: 'FAMILY20' },
    ],
    menus: [
      {
        id: 'cat1',
        name: 'Main Courses',
        items: [
          {
            id: 'i1',
            name: 'Schnitzel',
            description: 'A german specialty!',
            price: 16.50,
            image: '🍖',
            preparationTime: '12-15 mins',
            isVeg: false,
            calories: 420,
            customizations: [
              {
                id: 'c1',
                name: 'Sauce',
                options: ['Lemon', 'Mushroom', 'Bernaise'],
              },
            ],
          },
          {
            id: 'i2',
            name: 'Bratwurst Platter',
            description: 'Traditional with sauerkraut',
            price: 19.99,
            image: '🌭',
            preparationTime: '10 mins',
            isVeg: false,
            calories: 480,
            customizations: [],
          },
        ],
      },
    ],
  },
];

export default RESTAURANTS;
