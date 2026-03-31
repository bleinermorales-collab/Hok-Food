import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Instagram, Target, Mail, LogOut, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';
import { mockUser } from '@/data/mock';

const Profile = () => {
  const [name, setName] = useState(mockUser.name);
  const [email, setEmail] = useState(mockUser.email);
  const [handle, setHandle] = useState(mockUser.instagramHandle);
  const [niche, setNiche] = useState(mockUser.niche);

  return (
    <AppLayout>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-foreground mb-6">Mi Perfil</h1>
      </motion.div>

      <div className="bg-card rounded-xl p-5 shadow-soft border border-border mb-6 text-center">
        <div className="w-20 h-20 mx-auto rounded-full gradient-brand flex items-center justify-center text-4xl mb-3">
          {mockUser.avatar}
        </div>
        <h2 className="font-bold text-lg text-foreground">{mockUser.name}</h2>
        <p className="text-sm text-primary">{mockUser.instagramHandle}</p>
        <p className="text-xs text-muted-foreground mt-1">{mockUser.niche}</p>
        <div className="grid grid-cols-3 gap-4 mt-5 pt-5 border-t border-border">
          <div>
            <p className="text-lg font-bold text-foreground">{(mockUser.followers / 1000).toFixed(1)}k</p>
            <p className="text-[10px] text-muted-foreground">Seguidores</p>
          </div>
          <div>
            <p className="text-lg font-bold text-foreground">{mockUser.engagement}%</p>
            <p className="text-[10px] text-muted-foreground">Engagement</p>
          </div>
          <div>
            <p className="text-lg font-bold text-foreground">{mockUser.postsThisWeek}</p>
            <p className="text-[10px] text-muted-foreground">Posts/semana</p>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-xl p-5 shadow-soft border border-border mb-6">
        <h3 className="font-bold text-foreground mb-4">Información personal</h3>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-muted-foreground block mb-1.5">Nombre</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-muted text-foreground pl-10 pr-3 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground block mb-1.5">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-muted text-foreground pl-10 pr-3 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground block mb-1.5">Instagram</label>
            <div className="relative">
              <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="text" value={handle} onChange={(e) => setHandle(e.target.value)} className="w-full bg-muted text-foreground pl-10 pr-3 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground block mb-1.5">Nicho</label>
            <div className="relative">
              <Target className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="text" value={niche} onChange={(e) => setNiche(e.target.value)} className="w-full bg-muted text-foreground pl-10 pr-3 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
          </div>
        </div>
        <button className="w-full gradient-brand text-primary-foreground py-3 rounded-xl font-semibold text-sm mt-5 shadow-brand hover:opacity-90 transition-opacity">
          Guardar cambios
        </button>
      </div>

      <div className="bg-card rounded-xl shadow-soft border border-border overflow-hidden">
        <Link to="/login" className="flex items-center justify-between p-4 hover:bg-muted transition-colors">
          <div className="flex items-center gap-3 text-destructive">
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Cerrar sesión</span>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </Link>
      </div>
    </AppLayout>
  );
};

export default Profile;
