import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, Trash2, CreditCard, Banknote, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const paymentMethods = [
  { id: 'cash', label: 'Efectivo', icon: Banknote },
  { id: 'card', label: 'Tarjeta (Stripe)', icon: CreditCard },
  { id: 'mercadopago', label: 'MercadoPago', icon: Smartphone },
];

const Checkout = () => {
  const { items, updateQuantity, removeItem, subtotal, deliveryFee, tax, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', phone: '', address: '', notes: '' });
  const [payment, setPayment] = useState('cash');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      toast.error('Por favor completa todos los campos requeridos');
      return;
    }
    const orderId = `FD-${Date.now().toString(36).toUpperCase()}`;
    clearCart();
    navigate(`/order/${orderId}`);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl block mb-4">🛒</span>
          <h2 className="text-xl font-bold text-foreground">Tu carrito está vacío</h2>
          <p className="text-muted-foreground mt-2">Agrega platillos de tus restaurantes favoritos</p>
          <Link to="/" className="inline-block mt-6 gradient-brand text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-brand hover:scale-105 transition-transform">
            Explorar restaurantes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 rounded-full hover:bg-secondary transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Tu pedido</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-2xl pb-8">
        {/* Cart Items */}
        <div className="space-y-3">
          <AnimatePresence>
            {items.map(item => (
              <motion.div
                key={item.menuItem.id}
                layout
                exit={{ opacity: 0, x: -100 }}
                className="bg-card rounded-xl p-4 shadow-card flex items-center gap-4"
              >
                <img src={item.menuItem.image} alt={item.menuItem.name} className="w-16 h-16 rounded-lg object-cover shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm text-card-foreground truncate">{item.menuItem.name}</h3>
                  <p className="text-xs text-muted-foreground">{item.restaurantName}</p>
                  <p className="text-sm font-bold text-primary mt-1">${item.menuItem.price * item.quantity}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(item.menuItem.id, item.quantity - 1)} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors">
                    {item.quantity === 1 ? <Trash2 className="w-3.5 h-3.5 text-destructive" /> : <Minus className="w-3.5 h-3.5 text-secondary-foreground" />}
                  </button>
                  <span className="text-sm font-bold text-card-foreground min-w-[20px] text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.menuItem.id, item.quantity + 1)} className="w-8 h-8 rounded-full gradient-brand flex items-center justify-center hover:scale-110 transition-transform">
                    <Plus className="w-3.5 h-3.5 text-primary-foreground" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Delivery Info */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <h2 className="text-lg font-bold text-foreground mb-4">Datos de entrega</h2>
            <div className="space-y-3">
              {[
                { key: 'name', label: 'Nombre completo', placeholder: 'Tu nombre', required: true },
                { key: 'phone', label: 'Teléfono', placeholder: '+52 55 1234 5678', required: true },
                { key: 'address', label: 'Dirección de entrega', placeholder: 'Calle, número, colonia', required: true },
              ].map(field => (
                <div key={field.key}>
                  <label className="text-sm font-medium text-foreground block mb-1.5">{field.label} {field.required && <span className="text-destructive">*</span>}</label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    value={form[field.key as keyof typeof form]}
                    onChange={e => setForm(prev => ({ ...prev, [field.key]: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-secondary text-secondary-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
                  />
                </div>
              ))}
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Notas del pedido</label>
                <textarea
                  placeholder="Instrucciones especiales, alergias, etc."
                  value={form.notes}
                  onChange={e => setForm(prev => ({ ...prev, notes: e.target.value }))}
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl bg-secondary text-secondary-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground resize-none"
                />
              </div>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h2 className="text-lg font-bold text-foreground mb-4">Método de pago</h2>
            <div className="space-y-2">
              {paymentMethods.map(method => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setPayment(method.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${
                    payment === method.id
                      ? 'bg-primary/10 ring-2 ring-primary text-foreground'
                      : 'bg-card text-card-foreground shadow-card hover:bg-secondary'
                  }`}
                >
                  <method.icon className={`w-5 h-5 ${payment === method.id ? 'text-primary' : 'text-muted-foreground'}`} />
                  <span className="text-sm font-medium">{method.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="bg-card rounded-2xl p-5 shadow-card space-y-3">
            <h2 className="text-lg font-bold text-card-foreground">Resumen</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground"><span>Subtotal</span><span>${subtotal}</span></div>
              <div className="flex justify-between text-muted-foreground"><span>Envío</span><span>${deliveryFee}</span></div>
              <div className="flex justify-between text-muted-foreground"><span>IVA (16%)</span><span>${tax}</span></div>
              <div className="border-t border-border pt-2 flex justify-between font-bold text-card-foreground text-base">
                <span>Total</span><span>${total}</span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full gradient-brand text-primary-foreground py-4 rounded-2xl font-bold text-lg shadow-brand hover:scale-[1.02] transition-transform active:scale-[0.98]"
          >
            Confirmar pedido · ${total}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Checkout;
