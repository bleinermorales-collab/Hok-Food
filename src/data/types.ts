export interface Restaurant {
  id: string;
  name: string;
  image: string;
  logo: string;
  cuisine: string;
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  deliveryFee: number;
  minOrder: number;
  promo?: string;
  featured?: boolean;
  categories: MenuCategory[];
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  available: boolean;
  popular?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  restaurantId: string;
  restaurantName: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  tax: number;
  total: number;
  status: OrderStatus;
  customerName: string;
  phone: string;
  address: string;
  notes: string;
  paymentMethod: string;
  createdAt: Date;
}

export type OrderStatus = 'pending' | 'accepted' | 'preparing' | 'on_the_way' | 'delivered';

export interface Address {
  id: string;
  label: string;
  street: string;
  city: string;
  details?: string;
}
