import { Plus, Minus } from 'lucide-react';
import { MenuItem } from '@/data/types';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';

interface Props {
  item: MenuItem;
  restaurantId: string;
  restaurantName: string;
}

const MenuItemCard = ({ item, restaurantId, restaurantName }: Props) => {
  const { items, addItem, updateQuantity } = useCart();
  const cartItem = items.find(i => i.menuItem.id === item.id);
  const qty = cartItem?.quantity || 0;

  if (!item.available) {
    return (
      <div className="flex gap-4 p-4 rounded-xl bg-card opacity-50">
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm text-card-foreground">{item.name}</h4>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
          <p className="text-sm font-bold text-muted-foreground mt-2">${item.price}</p>
          <span className="text-xs text-destructive font-medium">No disponible</span>
        </div>
        <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-muted">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale" loading="lazy" />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      layout
      className="flex gap-4 p-4 rounded-xl bg-card shadow-card hover:shadow-elevated transition-shadow"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-sm text-card-foreground">{item.name}</h4>
          {item.popular && (
            <span className="text-[10px] font-bold gradient-brand text-primary-foreground px-2 py-0.5 rounded-full">POPULAR</span>
          )}
        </div>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between mt-3">
          <p className="text-sm font-bold text-card-foreground">${item.price}</p>
          <div className="flex items-center gap-2">
            {qty > 0 ? (
              <div className="flex items-center gap-2 gradient-brand rounded-full px-1 py-1">
                <button onClick={() => updateQuantity(item.id, qty - 1)} className="w-7 h-7 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                  <Minus className="w-3.5 h-3.5 text-primary-foreground" />
                </button>
                <span className="text-sm font-bold text-primary-foreground min-w-[20px] text-center">{qty}</span>
                <button onClick={() => addItem(item, restaurantId, restaurantName)} className="w-7 h-7 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                  <Plus className="w-3.5 h-3.5 text-primary-foreground" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => addItem(item, restaurantId, restaurantName)}
                className="w-8 h-8 gradient-brand rounded-full flex items-center justify-center shadow-brand hover:scale-110 transition-transform"
              >
                <Plus className="w-4 h-4 text-primary-foreground" />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
      </div>
    </motion.div>
  );
};

export default MenuItemCard;
