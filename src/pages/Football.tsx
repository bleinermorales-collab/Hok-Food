import { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockMatches } from '@/data/mock';
import { Match, MatchPrediction } from '@/data/types';
import { Brain, Loader2, TrendingUp, Target, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const Football = () => {
  const [predictions, setPredictions] = useState<Record<string, MatchPrediction>>({});
  const [loading, setLoading] = useState<string | null>(null);

  const getPrediction = async (match: Match) => {
    setLoading(match.id);
    try {
      const { data, error } = await supabase.functions.invoke('predict', {
        body: {
          type: 'football',
          context: {
            homeTeam: match.homeTeam,
            awayTeam: match.awayTeam,
            league: match.league,
            homeOdds: match.homeOdds,
            drawOdds: match.drawOdds,
            awayOdds: match.awayOdds,
          },
        },
      });

      if (error) throw error;

      setPredictions((prev) => ({
        ...prev,
        [match.id]: data.prediction,
      }));
      toast.success('Predicción generada con IA');
    } catch (err) {
      console.error(err);
      toast.error('Error al generar predicción. Intenta de nuevo.');
    } finally {
      setLoading(null);
    }
  };

  const resultLabels: Record<string, string> = {
    home: 'Victoria Local',
    draw: 'Empate',
    away: 'Victoria Visitante',
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">⚽ Predicciones de Fútbol</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Análisis con IA de los próximos partidos
          </p>
        </div>

        <div className="space-y-3">
          {mockMatches.map((match, i) => {
            const pred = predictions[match.id];
            return (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge variant="secondary" className="text-[10px] mb-2">
                          {match.league}
                        </Badge>
                        <p className="text-base font-semibold text-foreground">
                          {match.homeTeam} vs {match.awayTeam}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {match.date} · {match.time}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <div className="text-center">
                          <p className="text-[10px] text-muted-foreground">1</p>
                          <p className="text-sm font-mono font-medium bg-muted px-2 py-1 rounded">{match.homeOdds}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] text-muted-foreground">X</p>
                          <p className="text-sm font-mono font-medium bg-muted px-2 py-1 rounded">{match.drawOdds}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] text-muted-foreground">2</p>
                          <p className="text-sm font-mono font-medium bg-muted px-2 py-1 rounded">{match.awayOdds}</p>
                        </div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {pred ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="border-t border-border pt-4 mt-2 space-y-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                              <Target className="w-4 h-4 text-primary" />
                              <span className="text-sm font-semibold text-foreground">
                                {resultLabels[pred.result] || pred.result}
                              </span>
                            </div>
                            <Badge className="prediction-badge-win">
                              {pred.confidence}% confianza
                            </Badge>
                          </div>

                          <p className="text-sm text-muted-foreground leading-relaxed">{pred.analysis}</p>

                          <div className="flex items-center gap-4 text-xs">
                            <span className="text-muted-foreground">
                              Goles esperados: {pred.expectedGoals.home} - {pred.expectedGoals.away}
                            </span>
                            <span className="flex items-center gap-1 text-primary font-medium">
                              <Zap className="w-3 h-3" />
                              {pred.suggestedBet}
                            </span>
                          </div>
                        </motion.div>
                      ) : (
                        <Button
                          onClick={() => getPrediction(match)}
                          disabled={loading === match.id}
                          className="w-full mt-2"
                          variant="outline"
                        >
                          {loading === match.id ? (
                            <Loader2 className="w-4 h-4 animate-spin mr-2" />
                          ) : (
                            <Brain className="w-4 h-4 mr-2" />
                          )}
                          {loading === match.id ? 'Analizando con IA...' : 'Obtener predicción IA'}
                        </Button>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
};

export default Football;
