import { Restaurant } from './types';

export const cuisineFilters = [
  'Todas', 'Hamburguesas', 'Pizza', 'Mexicana', 'Sushi', 'Pollo', 'Postres', 'Saludable', 'China', 'Italiana',
];

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Burger Kingdom',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=500&fit=crop',
    logo: '🍔',
    cuisine: 'Hamburguesas',
    rating: 4.7,
    reviewCount: 342,
    deliveryTime: '25-35 min',
    deliveryFee: 15,
    minOrder: 80,
    promo: '2x1 en combos',
    featured: true,
    categories: [
      {
        id: 'c1',
        name: 'Populares',
        items: [
          { id: 'm1', name: 'Smash Burger Doble', description: 'Doble carne smash, queso cheddar, cebolla caramelizada, salsa especial', price: 129, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop', available: true, popular: true },
          { id: 'm2', name: 'Burger BBQ Bacon', description: 'Carne angus, tocino crujiente, aros de cebolla, salsa BBQ ahumada', price: 149, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop', available: true, popular: true },
          { id: 'm3', name: 'Chicken Crispy Burger', description: 'Pechuga empanizada, lechuga, tomate, mayonesa chipotle', price: 119, image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop', available: true },
        ],
      },
      {
        id: 'c2',
        name: 'Combos',
        items: [
          { id: 'm4', name: 'Combo Smash', description: 'Smash burger + papas fritas + refresco', price: 179, image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop', available: true },
          { id: 'm5', name: 'Combo Familiar', description: '4 burgers + 2 papas grandes + 4 refrescos', price: 549, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop', available: true },
        ],
      },
      {
        id: 'c3',
        name: 'Bebidas',
        items: [
          { id: 'm6', name: 'Milkshake Oreo', description: 'Milkshake cremoso con galletas Oreo', price: 69, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', available: true },
          { id: 'm7', name: 'Limonada Natural', description: 'Limonada fresca con hierbabuena', price: 39, image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop', available: false },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Sakura Sushi',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&h=500&fit=crop',
    logo: '🍣',
    cuisine: 'Sushi',
    rating: 4.9,
    reviewCount: 528,
    deliveryTime: '30-45 min',
    deliveryFee: 25,
    minOrder: 150,
    featured: true,
    categories: [
      {
        id: 'c4',
        name: 'Rolls Especiales',
        items: [
          { id: 'm8', name: 'Dragon Roll', description: 'Camarón tempura, aguacate, anguila, salsa unagi', price: 199, image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop', available: true, popular: true },
          { id: 'm9', name: 'Rainbow Roll', description: 'California roll cubierto con sashimi variado', price: 219, image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop', available: true, popular: true },
          { id: 'm10', name: 'Volcano Roll', description: 'Salmón, queso crema, aguacate, salsa spicy', price: 189, image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop', available: true },
        ],
      },
      {
        id: 'c5',
        name: 'Nigiri & Sashimi',
        items: [
          { id: 'm11', name: 'Sashimi de Salmón (8 pz)', description: 'Láminas frescas de salmón premium', price: 179, image: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745?w=400&h=300&fit=crop', available: true },
          { id: 'm12', name: 'Nigiri Mixto (6 pz)', description: 'Atún, salmón y camarón sobre arroz', price: 159, image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400&h=300&fit=crop', available: true },
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'La Taquería MX',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=500&fit=crop',
    logo: '🌮',
    cuisine: 'Mexicana',
    rating: 4.5,
    reviewCount: 891,
    deliveryTime: '20-30 min',
    deliveryFee: 10,
    minOrder: 60,
    promo: 'Envío gratis +$200',
    featured: true,
    categories: [
      {
        id: 'c6',
        name: 'Tacos',
        items: [
          { id: 'm13', name: 'Tacos al Pastor (4 pz)', description: 'Carne al pastor, piña, cebolla, cilantro', price: 89, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop', available: true, popular: true },
          { id: 'm14', name: 'Tacos de Birria (4 pz)', description: 'Birria de res, consomé, cebolla, cilantro', price: 109, image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop', available: true, popular: true },
          { id: 'm15', name: 'Quesabirria (3 pz)', description: 'Tortilla con queso, birria, consomé para dip', price: 119, image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400&h=300&fit=crop', available: true },
        ],
      },
      {
        id: 'c7',
        name: 'Bebidas',
        items: [
          { id: 'm16', name: 'Agua de Horchata', description: 'Agua fresca de horchata casera (1L)', price: 45, image: 'https://images.unsplash.com/photo-1625865636422-6e8eb8095c06?w=400&h=300&fit=crop', available: true },
          { id: 'm17', name: 'Michelada', description: 'Cerveza preparada con chamoy y limón', price: 65, image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&h=300&fit=crop', available: true },
        ],
      },
    ],
  },
  {
    id: '4',
    name: 'Pizza Fuego',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=500&fit=crop',
    logo: '🍕',
    cuisine: 'Pizza',
    rating: 4.6,
    reviewCount: 672,
    deliveryTime: '30-40 min',
    deliveryFee: 20,
    minOrder: 100,
    categories: [
      {
        id: 'c8',
        name: 'Pizzas Clásicas',
        items: [
          { id: 'm18', name: 'Pepperoni Clásica', description: 'Salsa de tomate, mozzarella, pepperoni artesanal', price: 169, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop', available: true, popular: true },
          { id: 'm19', name: 'Margherita', description: 'Tomate San Marzano, mozzarella di bufala, albahaca', price: 159, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop', available: true },
          { id: 'm20', name: 'Hawaiana', description: 'Jamón, piña, mozzarella, salsa de tomate', price: 149, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop', available: true },
        ],
      },
      {
        id: 'c9',
        name: 'Pizzas Premium',
        items: [
          { id: 'm21', name: 'Truffle & Mushroom', description: 'Aceite de trufa, hongos mixtos, parmesano, rúcula', price: 229, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop', available: true },
          { id: 'm22', name: 'BBQ Pulled Pork', description: 'Cerdo deshebrado, BBQ, jalapeño, cebolla morada', price: 209, image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop', available: true },
        ],
      },
    ],
  },
  {
    id: '5',
    name: 'Green Bowl',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=500&fit=crop',
    logo: '🥗',
    cuisine: 'Saludable',
    rating: 4.8,
    reviewCount: 215,
    deliveryTime: '20-30 min',
    deliveryFee: 18,
    minOrder: 90,
    promo: '15% OFF primera orden',
    categories: [
      {
        id: 'c10',
        name: 'Bowls',
        items: [
          { id: 'm23', name: 'Poke Bowl de Salmón', description: 'Salmón fresco, arroz sushi, aguacate, edamame, mango', price: 179, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop', available: true, popular: true },
          { id: 'm24', name: 'Buddha Bowl', description: 'Quinoa, garbanzos, camote asado, kale, tahini', price: 149, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop', available: true },
          { id: 'm25', name: 'Açaí Bowl', description: 'Açaí blend, granola, plátano, frutos rojos, coco', price: 129, image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop', available: true },
        ],
      },
      {
        id: 'c11',
        name: 'Smoothies',
        items: [
          { id: 'm26', name: 'Green Power', description: 'Espinaca, plátano, mango, leche de almendra', price: 79, image: 'https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=400&h=300&fit=crop', available: true },
          { id: 'm27', name: 'Berry Blast', description: 'Frutos rojos mixtos, yogurt griego, miel', price: 79, image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop', available: true },
        ],
      },
    ],
  },
  {
    id: '6',
    name: 'Pollo Loco Express',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&h=500&fit=crop',
    logo: '🍗',
    cuisine: 'Pollo',
    rating: 4.3,
    reviewCount: 456,
    deliveryTime: '15-25 min',
    deliveryFee: 12,
    minOrder: 70,
    categories: [
      {
        id: 'c12',
        name: 'Pollo Frito',
        items: [
          { id: 'm28', name: 'Bucket 8 Piezas', description: '8 piezas de pollo crujiente con salsa', price: 199, image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop', available: true, popular: true },
          { id: 'm29', name: 'Wings Buffalo (12 pz)', description: 'Alitas crujientes bañadas en salsa buffalo', price: 159, image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop', available: true },
          { id: 'm30', name: 'Tenders (6 pz)', description: 'Tiras de pollo empanizadas con dip a elegir', price: 119, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop', available: true },
        ],
      },
    ],
  },
];
