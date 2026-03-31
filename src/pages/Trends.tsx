import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Filter, Copy, Check, Sparkles } from 'lucide-react';
import AppLayout from '@/components/AppLayout';
import { mockTrends } from '@/data/mock';
import { TrendCategory } from '@/data/types';

const categories: { value: TrendCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'Todas' },
  { value: 'tecnología', label: '💻 Tecnología' },
  { value: 'entretenimiento', label: '🎬 Entretenimiento' },
  { value: 'moda', label: '👗 Moda' },
  { value: 'deportes', label: '⚽ Deportes' },
  { value: 'negocios', label: '💼 Negocios' },
  { value: 'salud', label: '🏋️ Salud' },
  { value: 'comida', label: '🍕 Comida' },
  { value: 'viajes', label: '✈️ Viajes' },
];

const Trends = () => {
  const [activeCategory, setActiveCategory] = useState<TrendCategory | 'all'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredTrends = activeCategory === 'all'
    ? mockTrends
    : mockTrends.filter((t) => t.category === activeCategory);

  const copyHashtags = (trendId: string, hashtags: string[]) => {
    navigator.clipboard.writeText(hashtags.join(' '));
    setCopiedId(trendId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const formatVolume = (vol: number) => {
    if (vol >= 1000000) return `${(vol / 1000000).toFixed(1)}M`;
    if (vol >= 1000) return `${(vol / 1000).toFixed(0)}K`;
    return vol.toString();
  };

  return (
    <AppLayout>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-foreground">Tendencias</h1>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Globe className="w-3.5 h-3.5" /> Actualizado hoy
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          Descubre qué está en tendencia a nivel mundial y crea contenido relevante.
        </p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6 -mx-4 px-4">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`shrink-0 px-3.5 py-2 rounded-full text-xs font-medium transition-all ${
              activeCategory === cat.value
                ? 'gradient-brand text-primary-foreground shadow-brand'
                : 'bg-secondary text-secondary-foreground hover:bg-muted'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Trends List */}
      <div className="space-y-4">
        {filteredTrends.map((trend, i) => (
          <motion.div
            key={trend.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="bg-card rounded-xl p-5 shadow-soft border border-border"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary capitalize">
                    {trend.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{trend.region}</span>
                </div>
                <h3 className="font-bold text-foreground">{trend.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{trend.description}</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  +{trend.change}%
                </span>
                <p className="text-xs text-muted-foreground mt-1">{formatVolume(trend.volume)} búsquedas</p>
              </div>
            </div>

            {/* Hashtags */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1.5 flex-wrap flex-1">
                {trend.hashtags.map((tag) => (
                  <span key={tag} className="text-xs text-primary bg-primary/5 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => copyHashtags(trend.id, trend.hashtags)}
                className="shrink-0 p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
                title="Copiar hashtags"
              >
                {copiedId === trend.id ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Related Topics */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium">Relacionado:</span>
              {trend.relatedTopics.map((topic) => (
                <span key={topic} className="bg-muted px-2 py-0.5 rounded-full">
                  {topic}
                </span>
              ))}
            </div>

            {/* Source */}
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
              <span className="text-xs text-muted-foreground">Fuente: {trend.source}</span>
              <button className="text-xs font-medium text-primary flex items-center gap-1 hover:underline">
                <Sparkles className="w-3 h-3" /> Crear contenido
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </AppLayout>
  );
};

export default Trends;
