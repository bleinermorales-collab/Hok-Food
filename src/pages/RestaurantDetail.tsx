import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Clock, Bike, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { restaurants } from '@/data/mock';
import MenuItemCard from '@/components/MenuItemCard';
import FloatingCart from '@/components/FloatingCart';
import { useState } from 'react';

const RestaurantDetail = () => {
  const { id } = useParams();
  const restaurant = restaurants.find(r => r.id === id);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground text-lg">Restaurante no encontrado</p>
          <Link to="/" className="text-primary mt-4 inline-block font-medium">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  const selectedCategory = activeCategory || restaurant.categories[0]?.id;

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Hero Image */}
      <div className="relative h-56 md:h-72">
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <Link
          to="/"
          className="absolute top-4 left-4 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-card-foreground" />
        </Link>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-2xl p-5 shadow-elevated">
          <div className="flex items-start gap-4">
            <span className="text-4xl">{restaurant.logo}</span>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-card-foreground">{restaurant.name}</h1>
              <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
                <span className="flex items-center gap-1 text-card-foreground">
                  <Star className="w-4 h-4 fill-warning text-warning" />
                  <strong>{restaurant.rating}</strong>
                  <span className="text-muted-foreground">({restaurant.reviewCount})</span>
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-4 h-4" /> {restaurant.deliveryTime}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Bike className="w-4 h-4" /> ${restaurant.deliveryFee} envío
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="w-4 h-4" /> Mín. ${restaurant.minOrder}
                </span>
              </div>
            </div>
          </div>
          {restaurant.promo && (
            <div className="mt-4 gradient-brand text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-semibold text-center">
              🎉 {restaurant.promo}
            </div>
          )}
        </motion.div>

        {/* Category tabs */}
        <div className="mt-6 flex gap-2 overflow-x-auto scrollbar-hide sticky top-16 z-40 bg-background py-3">
          {restaurant.categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'gradient-brand text-primary-foreground shadow-brand'
                  : 'bg-secondary text-secondary-foreground hover:bg-muted'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="mt-4 space-y-8">
          {restaurant.categories
            .filter(cat => !activeCategory || cat.id === selectedCategory)
            .map(cat => (
              <div key={cat.id}>
                <h3 className="text-lg font-bold text-foreground mb-3">{cat.name}</h3>
                <div className="space-y-3">
                  {cat.items.map(item => (
                    <MenuItemCard
                      key={item.id}
                      item={item}
                      restaurantId={restaurant.id}
                      restaurantName={restaurant.name}
                    />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      <FloatingCart />
    </div>
  );
};

export default RestaurantDetail;
