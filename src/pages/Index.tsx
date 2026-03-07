import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Flame } from 'lucide-react';
import Header from '@/components/Header';
import RestaurantCard from '@/components/RestaurantCard';
import CuisineFilter from '@/components/CuisineFilter';
import FloatingCart from '@/components/FloatingCart';
import { restaurants, cuisineFilters } from '@/data/mock';

const Index = () => {
  const [activeCuisine, setActiveCuisine] = useState('Todas');

  const filtered = activeCuisine === 'Todas'
    ? restaurants
    : restaurants.filter(r => r.cuisine === activeCuisine);

  const featured = restaurants.filter(r => r.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="gradient-hero py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight">
              Tu comida favorita,{' '}
              <span className="text-gradient">en minutos</span>
            </h1>
            <p className="mt-4 text-primary-foreground/70 text-base md:text-lg">
              Descubre los mejores restaurantes cerca de ti y recibe tu pedido en la puerta de tu casa.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto px-4 pb-32">
        {/* Featured */}
        <section className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <Flame className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">Destacados</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {featured.map((r, i) => (
              <div key={r.id} className="min-w-[300px] max-w-[340px]">
                <RestaurantCard restaurant={r} index={i} />
              </div>
            ))}
          </div>
        </section>

        {/* All Restaurants */}
        <section className="mt-10">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">Restaurantes</h2>
          </div>

          <CuisineFilter filters={cuisineFilters} active={activeCuisine} onChange={setActiveCuisine} />

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r, i) => (
              <RestaurantCard key={r.id} restaurant={r} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No se encontraron restaurantes para esta categoría</p>
            </div>
          )}
        </section>
      </main>

      <FloatingCart />
    </div>
  );
};

export default Index;
