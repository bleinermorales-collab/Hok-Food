import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Bike, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import MenuItemCard from '@/components/MenuItemCard';
import FloatingCart from '@/components/FloatingCart';
import { restaurant } from '@/data/mock';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string>(restaurant.categories[0]?.id || '');

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-52 md:h-72">
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </section>

      {/* Restaurant Info Card */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-2xl p-5 shadow-elevated"
        >
          <div className="flex items-start gap-4">
            <span className="text-4xl">{restaurant.logo}</span>
            <div className="flex-1">
              <h1 className="text-2xl font-extrabold text-card-foreground">{restaurant.name}</h1>
              <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
                <span className="flex items-center gap-1 text-card-foreground">
                  <Star className="w-4 h-4 fill-accent text-accent" />
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
              {restaurant.promo}
            </div>
          )}
        </motion.div>
      </div>

      {/* Menu */}
      <main className="container mx-auto px-4 pb-32">
        {/* Category tabs */}
        <div className="mt-6 flex gap-2 overflow-x-auto scrollbar-hide sticky top-16 z-40 bg-background py-3">
          {restaurant.categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
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
            .filter(cat => cat.id === activeCategory)
            .map(cat => (
              <div key={cat.id}>
                <h2 className="text-lg font-bold text-foreground mb-3">{cat.name}</h2>
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
      </main>

      <FloatingCart />
    </div>
  );
};

export default Index;
