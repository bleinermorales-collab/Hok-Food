import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Clock, ChefHat, Bike, Package, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { OrderStatus } from '@/data/types';

const statusSteps: { key: OrderStatus; label: string; icon: React.ElementType }[] = [
  { key: 'pending', label: 'Pedido recibido', icon: Clock },
  { key: 'accepted', label: 'Aceptado', icon: CheckCircle },
  { key: 'preparing', label: 'Preparando', icon: ChefHat },
  { key: 'on_the_way', label: 'En camino', icon: Bike },
  { key: 'delivered', label: 'Entregado', icon: Package },
];

const OrderTracking = () => {
  const { orderId } = useParams();
  const [currentStep, setCurrentStep] = useState(0);

  // Simulate status progression
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= statusSteps.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center gap-4">
          <Link to="/" className="p-2 rounded-full hover:bg-secondary transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-bold text-foreground">Seguimiento</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="w-20 h-20 gradient-brand rounded-full flex items-center justify-center mx-auto shadow-brand"
          >
            <CheckCircle className="w-10 h-10 text-primary-foreground" />
          </motion.div>
          <h2 className="text-2xl font-bold text-foreground mt-5">¡Pedido confirmado!</h2>
          <p className="text-muted-foreground mt-2">Orden #{orderId}</p>
        </motion.div>

        {/* Status Timeline */}
        <div className="space-y-0">
          {statusSteps.map((step, index) => {
            const isActive = index <= currentStep;
            const isCurrent = index === currentStep;
            const Icon = step.icon;

            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isActive ? 'gradient-brand shadow-brand' : 'bg-secondary'
                  } ${isCurrent ? 'scale-110' : ''}`}>
                    <Icon className={`w-5 h-5 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                  </div>
                  {index < statusSteps.length - 1 && (
                    <div className={`w-0.5 h-12 transition-colors duration-500 ${
                      index < currentStep ? 'bg-primary' : 'bg-border'
                    }`} />
                  )}
                </div>
                <div className="pt-2">
                  <p className={`font-semibold text-sm ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {step.label}
                  </p>
                  {isCurrent && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-primary mt-0.5 font-medium"
                    >
                      Estado actual
                    </motion.p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Estimated time */}
        <div className="mt-10 bg-card rounded-2xl p-5 shadow-card text-center">
          <p className="text-sm text-muted-foreground">Tiempo estimado de entrega</p>
          <p className="text-3xl font-bold text-foreground mt-1">25-35 min</p>
        </div>

        <Link
          to="/"
          className="block mt-8 text-center text-primary font-medium hover:underline"
        >
          Hacer otro pedido
        </Link>
      </main>
    </div>
  );
};

export default OrderTracking;
