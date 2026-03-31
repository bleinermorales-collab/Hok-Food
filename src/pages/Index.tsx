import { motion } from 'framer-motion';
import { TrendingUp, PenTool, CalendarDays, ArrowUpRight, Sparkles, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';
import { mockTrends, mockContentIdeas, mockUser } from '@/data/mock';

const statCards = [
  { label: 'Tendencias activas', value: '8', icon: TrendingUp, color: 'text-primary' },
  { label: 'Contenido creado', value: '12', icon: PenTool, color: 'text-accent' },
  { label: 'Programados', value: '5', icon: CalendarDays, color: 'text-primary' },
];

const Index = () => {
  const topTrends = mockTrends.slice(0, 4);
  const recentContent = mockContentIdeas.slice(0, 3);

  return (
    <AppLayout>
      {/* Welcome */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Hola, {mockUser.name.split(' ')[0]} 👋
        </h1>
        <p className="text-muted-foreground mt-1">
          Esto es lo que está pasando hoy en tendencias.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
        {statCards.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-4 shadow-soft border border-border"
          >
            <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="flex gap-3 mb-8 overflow-x-auto scrollbar-hide">
        <Link
          to="/create"
          className="shrink-0 gradient-brand text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 shadow-brand"
        >
          <Sparkles className="w-4 h-4" /> Crear contenido
        </Link>
        <Link
          to="/trends"
          className="shrink-0 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2"
        >
          <TrendingUp className="w-4 h-4" /> Explorar tendencias
        </Link>
      </div>

      {/* Top Trends */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">🔥 Tendencias del momento</h2>
          <Link to="/trends" className="text-sm text-primary font-medium flex items-center gap-1">
            Ver todas <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="space-y-3">
          {topTrends.map((trend, i) => (
            <motion.div
              key={trend.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-xl p-4 shadow-soft border border-border flex items-center gap-4"
            >
              <div className="w-10 h-10 gradient-subtle rounded-lg flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm text-foreground truncate">{trend.title}</h3>
                <p className="text-xs text-muted-foreground">{trend.region} · {trend.source}</p>
              </div>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full shrink-0">
                +{trend.change}%
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recent Content */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">📝 Contenido reciente</h2>
          <Link to="/create" className="text-sm text-primary font-medium flex items-center gap-1">
            Crear nuevo <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid gap-3">
          {recentContent.map((content, i) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-4 shadow-soft border border-border"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary capitalize">
                      {content.type}
                    </span>
                    {content.scheduled && (
                      <span className="text-xs text-muted-foreground">
                        📅 {content.scheduled}
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-sm text-foreground">{content.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{content.caption}</p>
                </div>
                <div className="flex gap-1">
                  {content.colorPalette.slice(0, 3).map((color, ci) => (
                    <div
                      key={ci}
                      className="w-4 h-4 rounded-full border border-border"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
              <div className="flex gap-1.5 mt-3 flex-wrap">
                {content.hashtags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engagement Stats */}
      <section className="gradient-subtle rounded-xl p-5 border border-border">
        <h2 className="text-sm font-bold text-foreground mb-3">Tu Instagram esta semana</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <Eye className="w-4 h-4 text-primary mx-auto mb-1" />
            <p className="text-lg font-bold text-foreground">{(mockUser.followers / 1000).toFixed(1)}k</p>
            <p className="text-[10px] text-muted-foreground">Seguidores</p>
          </div>
          <div className="text-center">
            <Heart className="w-4 h-4 text-accent mx-auto mb-1" />
            <p className="text-lg font-bold text-foreground">{mockUser.engagement}%</p>
            <p className="text-[10px] text-muted-foreground">Engagement</p>
          </div>
          <div className="text-center">
            <PenTool className="w-4 h-4 text-primary mx-auto mb-1" />
            <p className="text-lg font-bold text-foreground">{mockUser.postsThisWeek}</p>
            <p className="text-[10px] text-muted-foreground">Posts</p>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Index;
