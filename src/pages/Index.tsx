import AppLayout from '@/components/AppLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockStats, mockHistory, mockMatches } from '@/data/mock';
import { TrendingUp, TrendingDown, Target, DollarSign, Flame, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const statCards = [
  { label: 'Tasa de acierto', value: `${mockStats.winRate}%`, icon: Target, color: 'text-primary' },
  { label: 'Ganancia total', value: `$${mockStats.totalProfit.toLocaleString()}`, icon: DollarSign, color: 'text-primary' },
  { label: 'Racha actual', value: `${mockStats.streak} victorias`, icon: Flame, color: 'text-primary' },
  { label: 'Predicciones', value: mockStats.totalPredictions.toString(), icon: Trophy, color: 'text-primary' },
];

const Index = () => {
  return (
    <AppLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Resumen de tus predicciones y rendimiento</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {statCards.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Card className="stat-card">
                <CardContent className="p-0">
                  <stat.icon className={`w-5 h-5 ${stat.color} mb-3`} />
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Próximos partidos</h2>
            <Link to="/football" className="text-sm text-primary flex items-center gap-1 hover:underline">
              Ver todos <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="space-y-2">
            {mockMatches.slice(0, 3).map((match, i) => (
              <motion.div key={match.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                <Card className="hover:shadow-sm transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground mb-1">{match.league} · {match.date}</p>
                        <p className="text-sm font-medium text-foreground">{match.homeTeam} vs {match.awayTeam}</p>
                      </div>
                      <div className="flex gap-2 text-xs">
                        <span className="bg-muted px-2 py-1 rounded font-mono">{match.homeOdds}</span>
                        <span className="bg-muted px-2 py-1 rounded font-mono">{match.drawOdds}</span>
                        <span className="bg-muted px-2 py-1 rounded font-mono">{match.awayOdds}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Predicciones recientes</h2>
            <Link to="/history" className="text-sm text-primary flex items-center gap-1 hover:underline">
              Ver historial <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="space-y-2">
            {mockHistory.slice(0, 4).map((record, i) => (
              <motion.div key={record.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant={record.type === 'football' ? 'default' : 'secondary'} className="text-[10px]">
                            {record.type === 'football' ? '⚽ Fútbol' : '🎰 Slots'}
                          </Badge>
                          {record.result === 'win' && (
                            <span className="prediction-badge-win flex items-center gap-1"><TrendingUp className="w-3 h-3" /> Ganada</span>
                          )}
                          {record.result === 'lose' && (
                            <span className="prediction-badge-lose flex items-center gap-1"><TrendingDown className="w-3 h-3" /> Perdida</span>
                          )}
                        </div>
                        <p className="text-sm font-medium text-foreground">{record.title}</p>
                        <p className="text-xs text-muted-foreground">{record.prediction}</p>
                      </div>
                      <div className="text-right">
                        <p className={`text-sm font-semibold ${record.profit && record.profit > 0 ? 'text-primary' : 'text-destructive'}`}>
                          {record.profit && record.profit > 0 ? '+' : ''}${record.profit?.toFixed(2)}
                        </p>
                        <p className="text-[10px] text-muted-foreground">{record.confidence}% conf.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
