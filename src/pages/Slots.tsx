import { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockSlotMachines } from '@/data/mock';
import { SlotMachine, SlotPrediction } from '@/data/types';
import { Brain, Loader2, Shield, Zap, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const volColors: Record<string, string> = {
  baja: 'bg-primary/10 text-primary',
  media: 'bg-yellow-100 text-yellow-700',
  alta: 'bg-destructive/10 text-destructive',
};

const Slots = () => {
  const [predictions, setPredictions] = useState<Record<string, SlotPrediction>>({});
  const [loading, setLoading] = useState<string | null>(null);

  const getPrediction = async (slot: SlotMachine) => {
    setLoading(slot.id);
    try {
      const { data, error } = await supabase.functions.invoke('predict', {
        body: {
          type: 'slots',
          context: {
            name: slot.name,
            provider: slot.provider,
            rtp: slot.rtp,
            volatility: slot.volatility,
            minBet: slot.minBet,
            maxBet: slot.maxBet,
          },
        },
      });

      if (error) throw error;

      setPredictions((prev) => ({
        ...prev,
        [slot.id]: data.prediction,
      }));
      toast.success('Análisis de slot generado con IA');
    } catch (err) {
      console.error(err);
      toast.error('Error al generar análisis. Intenta de nuevo.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">🎰 Análisis de Slots</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Estrategias y análisis de tragamonedas con IA
          </p>
        </div>

        <Card className="bg-accent border-0">
          <CardContent className="p-4 flex items-start gap-3">
            <Info className="w-4 h-4 text-accent-foreground mt-0.5 shrink-0" />
            <p className="text-xs text-accent-foreground leading-relaxed">
              Las tragamonedas usan RNG (generador de números aleatorios). Nuestro análisis se basa en RTP, 
              volatilidad y estrategias de gestión de bankroll, no en predicción de resultados exactos.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-3 md:grid-cols-2">
          {mockSlotMachines.map((slot, i) => {
            const pred = predictions[slot.id];
            return (
              <motion.div
                key={slot.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="h-full">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-base font-semibold text-foreground">{slot.name}</p>
                        <p className="text-xs text-muted-foreground">{slot.provider}</p>
                      </div>
                      <Badge className={`text-[10px] ${volColors[slot.volatility]}`}>
                        Vol. {slot.volatility}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-muted rounded-lg p-2 text-center">
                        <p className="text-[10px] text-muted-foreground">RTP</p>
                        <p className="text-sm font-semibold text-foreground">{slot.rtp}%</p>
                      </div>
                      <div className="bg-muted rounded-lg p-2 text-center">
                        <p className="text-[10px] text-muted-foreground">Min</p>
                        <p className="text-sm font-semibold text-foreground">${slot.minBet}</p>
                      </div>
                      <div className="bg-muted rounded-lg p-2 text-center">
                        <p className="text-[10px] text-muted-foreground">Max</p>
                        <p className="text-sm font-semibold text-foreground">${slot.maxBet}</p>
                      </div>
                    </div>

                    <AnimatePresence>
                      {pred ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="border-t border-border pt-4 space-y-3"
                        >
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-foreground">{pred.strategy}</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{pred.analysis}</p>
                          <div className="space-y-1">
                            {pred.tips.map((tip, j) => (
                              <p key={j} className="text-xs text-muted-foreground flex items-start gap-2">
                                <Zap className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                                {tip}
                              </p>
                            ))}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Apuesta sugerida: <span className="font-medium text-foreground">${pred.suggestedBet}</span>
                          </p>
                        </motion.div>
                      ) : (
                        <Button
                          onClick={() => getPrediction(slot)}
                          disabled={loading === slot.id}
                          className="w-full"
                          variant="outline"
                        >
                          {loading === slot.id ? (
                            <Loader2 className="w-4 h-4 animate-spin mr-2" />
                          ) : (
                            <Brain className="w-4 h-4 mr-2" />
                          )}
                          {loading === slot.id ? 'Analizando...' : 'Analizar con IA'}
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

export default Slots;
