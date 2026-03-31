export interface Trend {
  id: string;
  title: string;
  description: string;
  category: TrendCategory;
  region: string;
  volume: number;
  change: number;
  hashtags: string[];
  relatedTopics: string[];
  source: string;
  updatedAt: string;
}

export type TrendCategory = 
  | 'tecnología'
  | 'entretenimiento'
  | 'moda'
  | 'deportes'
  | 'negocios'
  | 'salud'
  | 'comida'
  | 'viajes';

export interface ContentIdea {
  id: string;
  type: ContentType;
  title: string;
  caption: string;
  hashtags: string[];
  visualStyle: string;
  colorPalette: string[];
  trendId?: string;
  createdAt: string;
  scheduled?: string;
}

export type ContentType = 'post' | 'reel' | 'story' | 'carousel';

export interface CalendarDay {
  date: string;
  contents: ContentIdea[];
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  instagramHandle: string;
  niche: string;
  postsThisWeek: number;
  followers: number;
  engagement: number;
}
