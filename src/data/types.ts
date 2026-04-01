export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  league: string;
  date: string;
  time: string;
  homeOdds: number;
  drawOdds: number;
  awayOdds: number;
  prediction?: MatchPrediction;
}

export interface MatchPrediction {
  result: 'home' | 'draw' | 'away';
  confidence: number;
  analysis: string;
  suggestedBet: string;
  expectedGoals: { home: number; away: number };
}

export interface SlotMachine {
  id: string;
  name: string;
  provider: string;
  rtp: number;
  volatility: 'baja' | 'media' | 'alta';
  minBet: number;
  maxBet: number;
  theme: string;
}

export interface SlotPrediction {
  machineId: string;
  strategy: string;
  riskLevel: 'bajo' | 'medio' | 'alto';
  suggestedBet: number;
  analysis: string;
  tips: string[];
}

export interface PredictionRecord {
  id: string;
  type: 'football' | 'slots';
  title: string;
  prediction: string;
  result?: 'win' | 'lose' | 'pending';
  confidence: number;
  date: string;
  profit?: number;
}

export interface UserStats {
  totalPredictions: number;
  wins: number;
  losses: number;
  pending: number;
  winRate: number;
  totalProfit: number;
  streak: number;
}
