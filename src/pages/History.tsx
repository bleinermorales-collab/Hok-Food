import AppLayout from '@/components/AppLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockHistory, mockStats } from '@/data/mock';
import { TrendingUp, TrendingDown, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const History = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">📊 Historial</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Registro de todas tus predicciones
          </p>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="stat-card">
            <CardContent className="p-0 text-center">
              <p className="text-2xl font-bold text-primary">{mockStats.wins}</p>
              <p className="text-xs text-muted-foreground">Ganadas</p>
            </CardContent>
          </Card>
          <Card className="stat-card">
            <CardContent className="p-0 text-center">
              <p className="text-2xl font-bold text-destructive">{mockStats.losses}</p>
              <p className="text-xs text-muted-foreground">Perdidas</p>
            </CardContent>
          </Card>
          <Card className="stat-card">
            <CardContent className="p-0 text-center">
              <p className="text-2xl font-bold text-muted-foreground">{mockStats.pending}</p>
              <p className="text-xs text-muted-foreground">Pendientes</p>
            </CardContent>
          </Card>
        </div>

        {/* List */}
        <div className="space-y-2">
          {mockHistory.map((record, i) => (
            <motion.div
              key={record.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
            >
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant={record.type === 'football' ? 'default' : 'secondary'} className="text-[10px]">
                          {record.type === 'football' ? '⚽' : '🎰'} {record.type === 'football' ? 'Fútbol' : 'Slots'}
                        </Badge>
                        {record.result === 'win' && (
                          <span className="prediction-badge-win flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" /> Ganada
                          </span>
                        )}
                        {record.result === 'lose' && (
                          <span className="prediction-badge-lose flex items-center gap-1">
                            <TrendingDown className="w-3 h-3" /> Perdida
                          </span>
                        )}
                        {record.result === 'pending' && (
                          <span className="bg-muted text-muted-foreground px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                            <Clock className="w-3 h-3" /> Pendiente
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-foreground">{record.title}</p>
                      <p className="text-xs text-muted-foreground">{record.prediction} · {record.confidence}% confianza</p>
                    </div>
                    <div className="text-right">
                      {record.profit !== undefined && (
                        <p className={`text-sm font-semibold ${record.profit > 0 ? 'text-primary' : 'text-destructive'}`}>
                          {record.profit > 0 ? '+' : ''}${record.profit.toFixed(2)}
                        </p>
                      )}
                      <p className="text-[10px] text-muted-foreground">{record.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default History;
