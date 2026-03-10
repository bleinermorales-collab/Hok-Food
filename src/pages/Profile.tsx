import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Mail, MapPin, Clock, ChevronRight, LogOut, Plus, Trash2, Package } from 'lucide-react';

const mockUser = {
  name: 'Carlos Méndez',
  email: 'carlos@email.com',
  avatar: null as string | null,
  phone: '+52 55 1234 5678',
};

const mockAddresses = [
  { id: '1', label: 'Casa', street: 'Av. Insurgentes Sur 1234, Col. Roma Norte', city: 'CDMX' },
  { id: '2', label: 'Oficina', street: 'Paseo de la Reforma 500, Col. Juárez', city: 'CDMX' },
];

const mockOrders = [
  { id: 'FD-ABC123', date: '10 Mar 2026', items: 'Arroz Frito Especial, Rollitos Primavera x2', total: 267, status: 'Entregado' },
  { id: 'FD-DEF456', date: '8 Mar 2026', items: 'Pollo Agridulce, Chow Mein de Pollo', total: 258, status: 'Entregado' },
  { id: 'FD-GHI789', date: '5 Mar 2026', items: 'Pad Thai de Camarón, Bubble Tea Taro', total: 214, status: 'Entregado' },
];

type Tab = 'profile' | 'addresses' | 'orders';

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>('profile');
  const [user, setUser] = useState(mockUser);
  const [addresses] = useState(mockAddresses);
  const [editing, setEditing] = useState(false);

  const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: 'profile', label: 'Mi perfil', icon: User },
    { id: 'addresses', label: 'Direcciones', icon: MapPin },
    { id: 'orders', label: 'Mis pedidos', icon: Package },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center gap-4">
          <button onClick={() => navigate('/')} className="p-2 rounded-full hover:bg-secondary transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Mi cuenta</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-2xl">
        {/* Avatar & name */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full gradient-brand flex items-center justify-center text-2xl text-primary-foreground font-bold shrink-0">
            {user.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">{user.name}</h2>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'gradient-brand text-primary-foreground shadow-brand'
                  : 'bg-secondary text-secondary-foreground hover:bg-muted'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <div className="bg-card rounded-2xl p-5 shadow-card space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-card-foreground">Información personal</h3>
                <button
                  onClick={() => setEditing(!editing)}
                  className="text-sm text-primary font-medium hover:underline"
                >
                  {editing ? 'Guardar' : 'Editar'}
                </button>
              </div>

              {[
                { label: 'Nombre', value: user.name, key: 'name', icon: User },
                { label: 'Email', value: user.email, key: 'email', icon: Mail },
                { label: 'Teléfono', value: user.phone, key: 'phone', icon: Clock },
              ].map(field => (
                <div key={field.key} className="flex items-center gap-3">
                  <field.icon className="w-4 h-4 text-muted-foreground shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">{field.label}</p>
                    {editing ? (
                      <input
                        type="text"
                        value={field.value}
                        onChange={e => setUser(prev => ({ ...prev, [field.key]: e.target.value }))}
                        className="w-full py-1 bg-transparent text-sm text-card-foreground border-b border-border focus:outline-none focus:border-primary"
                      />
                    ) : (
                      <p className="text-sm font-medium text-card-foreground">{field.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                navigate('/login');
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-destructive/10 text-destructive font-medium text-sm hover:bg-destructive/20 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Cerrar sesión
            </button>
          </motion.div>
        )}

        {/* Addresses Tab */}
        {activeTab === 'addresses' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
            {addresses.map(addr => (
              <div key={addr.id} className="bg-card rounded-xl p-4 shadow-card flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-card-foreground">{addr.label}</p>
                  <p className="text-xs text-muted-foreground truncate">{addr.street}, {addr.city}</p>
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                    <Trash2 className="w-4 h-4 text-muted-foreground" />
                  </button>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            ))}

            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed border-border text-muted-foreground hover:border-primary hover:text-primary font-medium text-sm transition-colors">
              <Plus className="w-4 h-4" />
              Agregar nueva dirección
            </button>
          </motion.div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
            {mockOrders.map(order => (
              <div key={order.id} className="bg-card rounded-xl p-4 shadow-card">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-primary">{order.id}</span>
                  <span className="text-xs text-muted-foreground">{order.date}</span>
                </div>
                <p className="text-sm text-card-foreground font-medium">{order.items}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm font-bold text-card-foreground">${order.total}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-success/10 text-success font-medium">{order.status}</span>
                    <button className="text-xs text-primary font-medium hover:underline">Reordenar</button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Profile;
