import { Star, Clock, Bike } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Restaurant } from '@/data/types';
import { motion } from 'framer-motion';

interface Props {
  restaurant: Restaurant;
  index?: number;
}

const RestaurantCard = ({ restaurant, index = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <Link to={`/restaurant/${restaurant.id}`} className="group block">
        <div className="rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-elevated transition-all duration-300 group-hover:-translate-y-1">
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {restaurant.promo && (
              <div className="absolute top-3 left-3 gradient-brand px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground">
                {restaurant.promo}
              </div>
            )}
            <div className="absolute bottom-3 right-3 bg-card/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-primary" />
              {restaurant.deliveryTime}
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{restaurant.logo}</span>
                <div>
                  <h3 className="font-bold text-card-foreground group-hover:text-primary transition-colors">{restaurant.name}</h3>
                  <p className="text-xs text-muted-foreground">{restaurant.cuisine}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-secondary px-2 py-1 rounded-lg shrink-0">
                <Star className="w-3.5 h-3.5 fill-warning text-warning" />
                <span className="text-sm font-semibold text-secondary-foreground">{restaurant.rating}</span>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Bike className="w-3.5 h-3.5" />
                ${restaurant.deliveryFee} envío
              </span>
              <span>Mín. ${restaurant.minOrder}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default RestaurantCard;
