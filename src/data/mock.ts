import { Restaurant } from './types';

export const restaurant: Restaurant = {
  id: 'hok-food',
  name: 'Hok Food',
  image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&h=500&fit=crop',
  logo: '🥡',
  cuisine: 'Comida China',
  rating: 4.8,
  reviewCount: 1024,
  deliveryTime: '25-40 min',
  deliveryFee: 20,
  minOrder: 100,
  promo: '🎉 15% OFF en tu primer pedido',
  featured: true,
  categories: [
    {
      id: 'populares',
      name: '⭐ Populares',
      items: [
        { id: 'p1', name: 'Arroz Frito Especial', description: 'Arroz salteado con pollo, camarón, huevo, verduras y salsa de soya', price: 129, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop', available: true, popular: true },
        { id: 'p2', name: 'Chow Mein de Pollo', description: 'Fideos salteados con pollo, vegetales frescos y salsa especial de la casa', price: 119, image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop', available: true, popular: true },
        { id: 'p3', name: 'Pollo Agridulce', description: 'Trozos de pollo crujiente bañados en nuestra salsa agridulce casera', price: 139, image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&h=300&fit=crop', available: true, popular: true },
      ],
    },
    {
      id: 'entradas',
      name: '🥟 Entradas',
      items: [
        { id: 'e1', name: 'Rollitos Primavera (4 pz)', description: 'Rollitos crujientes rellenos de verduras frescas con salsa agridulce', price: 69, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop', available: true, popular: true },
        { id: 'e2', name: 'Wonton Frito (6 pz)', description: 'Wontons crujientes rellenos de cerdo y camarón', price: 79, image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop', available: true },
        { id: 'e3', name: 'Edamames con Sal de Mar', description: 'Vainas de soya al vapor con sal de mar y chile', price: 59, image: 'https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?w=400&h=300&fit=crop', available: true },
        { id: 'e4', name: 'Sopa Wonton', description: 'Caldo aromático con wontons de cerdo y verduras', price: 75, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop', available: true },
      ],
    },
    {
      id: 'arroz',
      name: '🍚 Arroz',
      items: [
        { id: 'a1', name: 'Arroz Frito con Camarón', description: 'Arroz salteado al wok con camarones, huevo y vegetales', price: 139, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop', available: true },
        { id: 'a2', name: 'Arroz Frito con Res', description: 'Arroz salteado con tiras de res, brócoli y salsa oyster', price: 145, image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop', available: true },
        { id: 'a3', name: 'Arroz al Vapor', description: 'Arroz blanco al vapor perfecto como acompañamiento', price: 35, image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop', available: true },
      ],
    },
    {
      id: 'fideos',
      name: '🍜 Fideos',
      items: [
        { id: 'f1', name: 'Lo Mein de Res', description: 'Fideos gruesos salteados con res, pimiento y champiñones', price: 135, image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop', available: true },
        { id: 'f2', name: 'Pad Thai de Camarón', description: 'Fideos de arroz con camarones, cacahuate, limón y brotes', price: 149, image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop', available: true, popular: true },
        { id: 'f3', name: 'Chow Fun con Pollo', description: 'Fideos anchos de arroz salteados con pollo y verduras', price: 125, image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop', available: true },
      ],
    },
    {
      id: 'platos-fuertes',
      name: '🔥 Platos Fuertes',
      items: [
        { id: 'pf1', name: 'Pollo Kung Pao', description: 'Pollo salteado con cacahuates, chile seco y verduras en salsa picante', price: 149, image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&h=300&fit=crop', available: true },
        { id: 'pf2', name: 'Cerdo Char Siu', description: 'Cerdo glaseado estilo cantonés con miel y salsa de soya', price: 159, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop', available: true, popular: true },
        { id: 'pf3', name: 'Res con Brócoli', description: 'Tiras de res tiernas salteadas con brócoli en salsa oyster', price: 155, image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop', available: true },
        { id: 'pf4', name: 'Camarones al Wok', description: 'Camarones jumbo salteados con ajo, jengibre y vegetales', price: 179, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop', available: true },
        { id: 'pf5', name: 'Tofu Mapo', description: 'Tofu sedoso en salsa picante de frijol fermentado con carne de cerdo', price: 119, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop', available: false },
      ],
    },
    {
      id: 'bebidas',
      name: '🧋 Bebidas',
      items: [
        { id: 'b1', name: 'Té Verde Jazmín', description: 'Té verde aromático con flores de jazmín', price: 39, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop', available: true },
        { id: 'b2', name: 'Bubble Tea Taro', description: 'Té de taro cremoso con perlas de tapioca', price: 65, image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=300&fit=crop', available: true, popular: true },
        { id: 'b3', name: 'Limonada de Lychee', description: 'Limonada refrescante con lychee natural', price: 55, image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop', available: true },
        { id: 'b4', name: 'Cerveza Tsingtao', description: 'Cerveza china premium importada 355ml', price: 59, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=300&fit=crop', available: true },
      ],
    },
    {
      id: 'postres',
      name: '🍡 Postres',
      items: [
        { id: 'd1', name: 'Plátano Caramelizado', description: 'Plátano frito con caramelo crujiente y ajonjolí', price: 59, image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop', available: true },
        { id: 'd2', name: 'Mochi de Matcha (3 pz)', description: 'Bolitas de arroz glutinoso rellenas de helado de matcha', price: 79, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop', available: true, popular: true },
      ],
    },
  ],
};
