import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingCart = () => {
  const { itemCount, total } = useCart();
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {itemCount > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-4 right-4 z-50 md:left-auto md:right-6 md:max-w-sm"
        >
          <button
            onClick={() => navigate('/checkout')}
            className="w-full gradient-brand text-primary-foreground rounded-2xl p-4 shadow-brand flex items-center justify-between hover:scale-[1.02] transition-transform active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold">{itemCount} {itemCount === 1 ? 'artículo' : 'artículos'}</p>
                <p className="text-xs opacity-80">Ver carrito</p>
              </div>
            </div>
            <span className="text-lg font-bold">${total}</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCart;
