import { Match, SlotMachine, PredictionRecord, UserStats } from './types';

export const mockMatches: Match[] = [
  {
    id: '1', homeTeam: 'Real Madrid', awayTeam: 'Barcelona', league: 'La Liga',
    date: '2026-04-05', time: '21:00', homeOdds: 2.10, drawOdds: 3.40, awayOdds: 3.20,
  },
  {
    id: '2', homeTeam: 'Manchester City', awayTeam: 'Liverpool', league: 'Premier League',
    date: '2026-04-05', time: '17:30', homeOdds: 1.85, drawOdds: 3.60, awayOdds: 4.00,
  },
  {
    id: '3', homeTeam: 'PSG', awayTeam: 'Bayern Munich', league: 'Champions League',
    date: '2026-04-06', time: '21:00', homeOdds: 2.50, drawOdds: 3.30, awayOdds: 2.80,
  },
  {
    id: '4', homeTeam: 'Inter Milan', awayTeam: 'Juventus', league: 'Serie A',
    date: '2026-04-06', time: '20:45', homeOdds: 1.95, drawOdds: 3.50, awayOdds: 3.80,
  },
  {
    id: '5', homeTeam: 'Borussia Dortmund', awayTeam: 'RB Leipzig', league: 'Bundesliga',
    date: '2026-04-07', time: '18:30', homeOdds: 2.20, drawOdds: 3.40, awayOdds: 3.10,
  },
];

export const mockSlotMachines: SlotMachine[] = [
  { id: '1', name: 'Book of Dead', provider: "Play'n GO", rtp: 96.21, volatility: 'alta', minBet: 0.10, maxBet: 100, theme: 'Egipto Antiguo' },
  { id: '2', name: 'Starburst', provider: 'NetEnt', rtp: 96.09, volatility: 'baja', minBet: 0.10, maxBet: 200, theme: 'Joyas Espaciales' },
  { id: '3', name: 'Sweet Bonanza', provider: 'Pragmatic Play', rtp: 96.51, volatility: 'media', minBet: 0.20, maxBet: 125, theme: 'Dulces' },
  { id: '4', name: 'Gates of Olympus', provider: 'Pragmatic Play', rtp: 96.50, volatility: 'alta', minBet: 0.20, maxBet: 125, theme: 'Mitología Griega' },
  { id: '5', name: 'Big Bass Bonanza', provider: 'Pragmatic Play', rtp: 96.71, volatility: 'media', minBet: 0.10, maxBet: 250, theme: 'Pesca' },
];

export const mockHistory: PredictionRecord[] = [
  { id: '1', type: 'football', title: 'Real Madrid vs Atlético', prediction: 'Victoria Local', result: 'win', confidence: 78, date: '2026-03-28', profit: 45.50 },
  { id: '2', type: 'football', title: 'Arsenal vs Chelsea', prediction: 'Empate', result: 'lose', confidence: 52, date: '2026-03-27', profit: -25.00 },
  { id: '3', type: 'slots', title: 'Book of Dead - Sesión', prediction: 'Racha favorable', result: 'win', confidence: 65, date: '2026-03-26', profit: 120.00 },
  { id: '4', type: 'football', title: 'Bayern vs Dortmund', prediction: 'Victoria Local', result: 'win', confidence: 82, date: '2026-03-25', profit: 38.00 },
  { id: '5', type: 'slots', title: 'Sweet Bonanza - Sesión', prediction: 'Gestión conservadora', result: 'lose', confidence: 45, date: '2026-03-24', profit: -50.00 },
];

export const mockStats: UserStats = {
  totalPredictions: 48, wins: 31, losses: 14, pending: 3,
  winRate: 68.9, totalProfit: 1245.50, streak: 4,
};
