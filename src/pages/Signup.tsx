import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-3">
            <Sparkles className="w-7 h-7 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Crear cuenta</h1>
          <p className="text-sm text-muted-foreground mt-1">Empieza a crear contenido increíble</p>
        </div>

        <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="text" placeholder="Nombre completo" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-muted text-foreground pl-10 pr-3 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground" />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-muted text-foreground pl-10 pr-3 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground" />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-muted text-foreground pl-10 pr-3 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground" />
            </div>
            <button className="w-full gradient-brand text-primary-foreground py-3 rounded-xl font-semibold text-sm shadow-brand hover:opacity-90 transition-opacity">Crear cuenta</button>
          </div>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground">o continúa con</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="space-y-2.5">
            <button className="w-full flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-2.5 rounded-xl text-sm font-medium hover:bg-muted transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-2.5 rounded-xl text-sm font-medium hover:bg-muted transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
              Apple
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-5">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="text-primary font-semibold">Inicia sesión</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
