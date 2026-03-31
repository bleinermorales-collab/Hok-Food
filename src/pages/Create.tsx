import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Image, Film, LayoutGrid, MessageSquare, Copy, Check, RefreshCw } from 'lucide-react';
import AppLayout from '@/components/AppLayout';
import { mockTrends, mockContentIdeas } from '@/data/mock';
import { ContentType } from '@/data/types';

const contentTypes: { value: ContentType; label: string; icon: React.ElementType }[] = [
  { value: 'post', label: 'Post', icon: Image },
  { value: 'carousel', label: 'Carousel', icon: LayoutGrid },
  { value: 'reel', label: 'Reel', icon: Film },
  { value: 'story', label: 'Story', icon: MessageSquare },
];

const Create = () => {
  const [selectedType, setSelectedType] = useState<ContentType>('post');
  const [selectedTrend, setSelectedTrend] = useState(mockTrends[0]?.id || '');
  const [topic, setTopic] = useState('');
  const [generatedContent, setGeneratedContent] = useState(mockContentIdeas[0]);
  const [captionCopied, setCaptionCopied] = useState(false);
  const [hashtagsCopied, setHashtagsCopied] = useState(false);

  const handleGenerate = () => {
    // Simulate generation with existing mock data
    const randomIndex = Math.floor(Math.random() * mockContentIdeas.length);
    setGeneratedContent(mockContentIdeas[randomIndex]);
  };

  const copyText = (text: string, setter: (v: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  return (
    <AppLayout>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-foreground mb-1">Crear Contenido</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Genera ideas de contenido basadas en tendencias actuales.
        </p>
      </motion.div>

      {/* Content Type Selector */}
      <div className="grid grid-cols-4 gap-2 mb-6">
        {contentTypes.map((type) => (
          <button
            key={type.value}
            onClick={() => setSelectedType(type.value)}
            className={`flex flex-col items-center gap-1.5 p-3 rounded-xl text-xs font-medium transition-all ${
              selectedType === type.value
                ? 'gradient-brand text-primary-foreground shadow-brand'
                : 'bg-card border border-border text-muted-foreground hover:border-primary/30'
            }`}
          >
            <type.icon className="w-5 h-5" />
            {type.label}
          </button>
        ))}
      </div>

      {/* Input Section */}
      <div className="bg-card rounded-xl p-5 shadow-soft border border-border mb-6">
        <label className="text-sm font-semibold text-foreground block mb-2">
          Tendencia base
        </label>
        <select
          value={selectedTrend}
          onChange={(e) => setSelectedTrend(e.target.value)}
          className="w-full bg-muted text-foreground px-3 py-2.5 rounded-lg text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          {mockTrends.map((trend) => (
            <option key={trend.id} value={trend.id}>
              {trend.title} (+{trend.change}%)
            </option>
          ))}
        </select>

        <label className="text-sm font-semibold text-foreground block mb-2">
          Tema o enfoque específico (opcional)
        </label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Ej: Herramientas de IA para diseñadores..."
          className="w-full bg-muted text-foreground px-3 py-2.5 rounded-lg text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
        />

        <button
          onClick={handleGenerate}
          className="w-full gradient-brand text-primary-foreground py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-brand hover:opacity-90 transition-opacity"
        >
          <Sparkles className="w-4 h-4" /> Generar contenido
        </button>
      </div>

      {/* Generated Content */}
      {generatedContent && (
        <motion.div
          key={generatedContent.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-card rounded-xl shadow-soft border border-border overflow-hidden"
        >
          <div className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary capitalize">
                  {generatedContent.type}
                </span>
                <h3 className="font-bold text-foreground text-sm">{generatedContent.title}</h3>
              </div>
              <button
                onClick={handleGenerate}
                className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
                title="Regenerar"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>

            {/* Caption */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Caption</span>
                <button
                  onClick={() => copyText(generatedContent.caption, setCaptionCopied)}
                  className="text-xs text-primary flex items-center gap-1 font-medium"
                >
                  {captionCopied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {captionCopied ? 'Copiado' : 'Copiar'}
                </button>
              </div>
              <p className="text-sm text-foreground bg-muted/50 p-3 rounded-lg leading-relaxed">
                {generatedContent.caption}
              </p>
            </div>

            {/* Hashtags */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Hashtags</span>
                <button
                  onClick={() => copyText(generatedContent.hashtags.join(' '), setHashtagsCopied)}
                  className="text-xs text-primary flex items-center gap-1 font-medium"
                >
                  {hashtagsCopied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {hashtagsCopied ? 'Copiado' : 'Copiar'}
                </button>
              </div>
              <div className="flex gap-1.5 flex-wrap">
                {generatedContent.hashtags.map((tag) => (
                  <span key={tag} className="text-xs text-primary bg-primary/5 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual Style */}
            <div className="mb-4">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                Estilo Visual
              </span>
              <p className="text-sm text-foreground">{generatedContent.visualStyle}</p>
            </div>

            {/* Color Palette */}
            <div>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                Paleta de Colores
              </span>
              <div className="flex gap-2">
                {generatedContent.colorPalette.map((color, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div
                      className="w-10 h-10 rounded-lg border border-border shadow-sm"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-[10px] text-muted-foreground font-mono">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AppLayout>
  );
};

export default Create;
