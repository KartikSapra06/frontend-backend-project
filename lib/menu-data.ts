export const menuItems = [
  // CHEF'S SPECIAL / SIGNATURE DISHES
  {
    id: 'sig1',
    name: 'Butter Chicken Deluxe',
    description: 'Our signature butter chicken with premium cream, fresh herbs, and aromatic spices - a masterpiece crafted by our head chef.',
    price: 380,
    image: '/premium-butter-chicken-creamy-curry-gourmet-fine-d.jpg',
    category: 'signature',
    tags: ['Non-Veg', 'Signature', 'Best Seller'],
    isSignature: true
  },
  {
    id: 'sig2',
    name: 'Paneer Tikka Masala Royal',
    description: 'Chef\'s special blend of paneer tikka cooked in a rich tomato-based gravy with cream, butter, and exclusive spices.',
    price: 340,
    image: '/paneer-tikka-masala-creamy-gourmet-fine-dining-res.jpg',
    category: 'signature',
    tags: ['Veg', 'Signature', 'Best Seller'],
    isSignature: true
  },
  {
    id: 'sig3',
    name: 'Tandoori Chicken Spectacular',
    description: 'Marinated in our secret blend of yogurt and spices, grilled in the tandoor until perfectly charred - a restaurant favorite.',
    price: 360,
    image: '/tandoori-chicken-grilled-charred-spiced-fine-dinin.jpg',
    category: 'signature',
    tags: ['Non-Veg', 'Signature', 'Grilled'],
    isSignature: true
  },

  // STARTERS
  {
    id: '1',
    name: 'Paneer Tikka',
    description: 'Marinated cottage cheese cubes grilled to perfection with mint and coriander.',
    price: 220,
    image: '/paneer-tikka-grilled-cottage-cheese-appetizer.jpg',
    category: 'starters',
    tags: ['Veg', 'Grilled']
  },
  {
    id: '2',
    name: 'Chicken Tikka',
    description: 'Tender chicken pieces marinated in yogurt and spices, charcoal-grilled.',
    price: 260,
    image: '/chicken-tikka-grilled-marinated-appetizer.jpg',
    category: 'starters',
    tags: ['Non-Veg', 'Grilled']
  },
  {
    id: '3',
    name: 'Samosa',
    description: 'Crispy pastry triangles filled with spiced potatoes and peas.',
    price: 100,
    image: '/samosa-crispy-pastry-appetizer-indian-street-food.jpg',
    category: 'starters',
    tags: ['Veg', 'Fried']
  },
  {
    id: '4',
    name: 'Shrimp Koliwada',
    description: 'Fresh shrimp coated in aromatic spice crust, deep-fried until crispy.',
    price: 280,
    image: '/shrimp-koliwada-fried-seafood-appetizer.jpg',
    category: 'starters',
    tags: ['Non-Veg', 'Fried']
  },
  {
    id: '5',
    name: 'Spinach Pakora',
    description: 'Crispy fried spinach leaves in gram flour batter, served with chutney.',
    price: 120,
    image: '/spinach-pakora-crispy-fried-veg-appetizer.jpg',
    category: 'starters',
    tags: ['Veg', 'Fried']
  },
  {
    id: '6',
    name: 'Tandoori Mushroom',
    description: 'Fresh mushroom marinated in spiced yogurt, cooked in tandoor.',
    price: 180,
    image: '/tandoori-mushroom-grilled-appetizer-veg.jpg',
    category: 'starters',
    tags: ['Veg', 'Grilled']
  },

  // MAINS
  {
    id: '7',
    name: 'Butter Chicken',
    description: 'Tender chicken in creamy tomato sauce with butter, cream, and aromatic spices.',
    price: 320,
    image: '/butter-chicken-creamy-curry-main-course.jpg',
    category: 'mains',
    tags: ['Non-Veg', 'Creamy']
  },
  {
    id: '8',
    name: 'Paneer Butter Masala',
    description: 'Cottage cheese cubes in rich buttery tomato gravy with cream.',
    price: 280,
    image: '/paneer-butter-masala-creamy-curry.jpg',
    category: 'mains',
    tags: ['Veg', 'Creamy']
  },
  {
    id: '9',
    name: 'Chicken Tikka Masala',
    description: 'Grilled chicken in creamy spiced tomato sauce with aromatic spices.',
    price: 300,
    image: '/chicken-tikka-masala-creamy-spiced-curry.jpg',
    category: 'mains',
    tags: ['Non-Veg', 'Creamy']
  },
  {
    id: '10',
    name: 'Dal Tadka',
    description: 'Yellow lentils tempered with ghee, cumin, garlic, and onions.',
    price: 180,
    image: '/dal-tadka-lentil-curry-indian-comfort-food.jpg',
    category: 'mains',
    tags: ['Veg', 'Comfort']
  },
  {
    id: '11',
    name: 'Biryani',
    description: 'Fragrant basmati rice cooked with marinated chicken and aromatic spices.',
    price: 320,
    image: '/biryani-basmati-rice-chicken-aromatic-spiced.jpg',
    category: 'mains',
    tags: ['Non-Veg', 'Aromatic']
  },
  {
    id: '12',
    name: 'Veg Biryani',
    description: 'Aromatic basmati rice with mixed vegetables and fragrant spices.',
    price: 260,
    image: '/vegetable-biryani-basmati-rice-veg.jpg',
    category: 'mains',
    tags: ['Veg', 'Aromatic']
  },
  {
    id: '13',
    name: 'Lamb Rogan Josh',
    description: 'Tender lamb pieces in aromatic tomato-based curry with yogurt.',
    price: 380,
    image: '/lamb-rogan-josh-curry-rich-aromatic.jpg',
    category: 'mains',
    tags: ['Non-Veg', 'Rich']
  },
  {
    id: '14',
    name: 'Chole Bhature',
    description: 'Spiced chickpeas curry with fluffy fried bread, served with pickles.',
    price: 220,
    image: '/chole-bhature-spiced-chickpeas-curry-fried-bread.jpg',
    category: 'mains',
    tags: ['Veg', 'Street Food']
  },

  // BREADS
  {
    id: '15',
    name: 'Tandoori Naan',
    description: 'Traditional Indian bread baked in clay oven, soft and fluffy.',
    price: 50,
    image: '/tandoori-naan-indian-bread-baked-clay-oven.jpg',
    category: 'breads',
    tags: ['Veg', 'Fresh']
  },
  {
    id: '16',
    name: 'Garlic Naan',
    description: 'Naan topped with minced garlic, coriander, and butter.',
    price: 70,
    image: '/garlic-naan-bread-butter-herbs.jpg',
    category: 'breads',
    tags: ['Veg', 'Aromatic']
  },
  {
    id: '17',
    name: 'Cheese Naan',
    description: 'Naan filled with melted cheese and herbs.',
    price: 100,
    image: '/cheese-naan-bread-melted-cheese.jpg',
    category: 'breads',
    tags: ['Veg', 'Cheesy']
  },
  {
    id: '18',
    name: 'Roti',
    description: 'Plain whole wheat Indian flatbread, traditional preparation.',
    price: 30,
    image: '/roti-whole-wheat-indian-flatbread.jpg',
    category: 'breads',
    tags: ['Veg', 'Healthy']
  },
  {
    id: '19',
    name: 'Puri',
    description: 'Fried puffed bread made from wheat flour, served hot.',
    price: 40,
    image: '/puri-fried-puffed-bread-wheat.jpg',
    category: 'breads',
    tags: ['Veg', 'Crispy']
  },
  {
    id: '20',
    name: 'Kulcha',
    description: 'Thick Indian bread stuffed with paneer and herbs.',
    price: 80,
    image: '/kulcha-bread-stuffed-paneer-herbs.jpg',
    category: 'breads',
    tags: ['Veg', 'Filling']
  },

  // DESSERTS
  {
    id: '21',
    name: 'Gulab Jamun',
    description: 'Soft milk-solid dumplings soaked in rose and cardamom syrup.',
    price: 120,
    image: '/gulab-jamun-sweet-dumplings-rose-syrup.jpg',
    category: 'desserts',
    tags: ['Sweet', 'Classic']
  },
  {
    id: '22',
    name: 'Rasmalai',
    description: 'Cottage cheese patties in sweetened condensed milk with cardamom.',
    price: 140,
    image: '/rasmalai-cottage-cheese-sweetened-milk.jpg',
    category: 'desserts',
    tags: ['Sweet', 'Chilled']
  },
  {
    id: '23',
    name: 'Kheer',
    description: 'Creamy rice pudding cooked with milk, nuts, and cardamom.',
    price: 130,
    image: '/kheer-rice-pudding-milk-nuts-cardamom.jpg',
    category: 'desserts',
    tags: ['Sweet', 'Creamy']
  },
  {
    id: '24',
    name: 'Jalebi',
    description: 'Spiral-shaped fried pastry soaked in sugar syrup, crispy and sweet.',
    price: 110,
    image: '/jalebi-spiral-fried-pastry-sugar-syrup.jpg',
    category: 'desserts',
    tags: ['Sweet', 'Fried']
  },
  {
    id: '25',
    name: 'Ras Gulla',
    description: 'Spongy cottage cheese balls in light sugar syrup, chilled.',
    price: 100,
    image: '/ras-gulla-cottage-cheese-sugar-syrup.jpg',
    category: 'desserts',
    tags: ['Sweet', 'Light']
  },

  // BEVERAGES
  {
    id: '26',
    name: 'Mango Lassi',
    description: 'Thick yogurt drink blended with ripe mango and cardamom.',
    price: 120,
    image: '/mango-lassi-yogurt-drink-mango-cardamom.jpg',
    category: 'beverages',
    tags: ['Drink', 'Seasonal']
  },
  {
    id: '27',
    name: 'Masala Chai',
    description: 'Traditional spiced tea with milk, ginger, and cardamom.',
    price: 60,
    image: '/masala-chai-spiced-tea-milk-ginger.jpg',
    category: 'beverages',
    tags: ['Hot', 'Spiced']
  },
  {
    id: '28',
    name: 'Fresh Lime Soda',
    description: 'Freshly squeezed lime juice with soda, salt, and sugar.',
    price: 80,
    image: '/fresh-lime-soda-drink-lemon-ice.jpg',
    category: 'beverages',
    tags: ['Cold', 'Fresh']
  },
  {
    id: '29',
    name: 'Iced Tea',
    description: 'Chilled black tea with lemon and fresh mint leaves.',
    price: 90,
    image: '/iced-tea-chilled-black-tea-lemon-mint.jpg',
    category: 'beverages',
    tags: ['Cold', 'Refreshing']
  },
  {
    id: '30',
    name: 'Strawberry Smoothie',
    description: 'Blended strawberries with yogurt, honey, and almonds.',
    price: 140,
    image: '/strawberry-smoothie-yogurt-honey-almonds.jpg',
    category: 'beverages',
    tags: ['Cold', 'Healthy']
  }
]
