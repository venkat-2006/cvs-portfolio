// src/data/works.ts

export interface Work {
  id: string
  title: string
  image: string
  category: string
  aspectRatio?: 'portrait' | 'landscape' | 'square'
}

export const works: Work[] = [
  // ── GAMING ──────────────────────────────────────
  {
    id: 'g1',
    title: 'BGMI Tournament',
    image: '/works/gaming/bgmi-1.webp',
    category: 'gaming',
    aspectRatio: 'portrait',
  },
  {
    id: 'g2',
    title: 'Valorant Ranked',
    image: '/works/gaming/val-1.webp',
    category: 'gaming',
    aspectRatio: 'landscape',
  },
  {
    id: 'g3',
    title: 'Free Fire Clash',
    image: '/works/gaming/ff-1.webp',
    category: 'gaming',
    aspectRatio: 'portrait',
  },
  {
    id: 'g4',
    title: 'COD Warzone Drop',
    image: '/works/gaming/cod-1.webp',
    category: 'gaming',
    aspectRatio: 'square',
  },
  {
    id: 'g5',
    title: 'Minecraft World',
    image: '/works/gaming/mc-1.webp',
    category: 'gaming',
    aspectRatio: 'portrait',
  },
  {
    id: 'g6',
    title: 'PUBG Mobile Solo',
    image: '/works/gaming/pubg-1.webp',
    category: 'gaming',
    aspectRatio: 'landscape',
  },

  // ── VLOGS ───────────────────────────────────────
  {
    id: 'v1',
    title: 'Goa Travel Vlog',
    image: '/works/vlogs/goa-1.webp',
    category: 'vlogs',
    aspectRatio: 'landscape',
  },
  {
    id: 'v2',
    title: 'Street Food Tour',
    image: '/works/vlogs/food-1.webp',
    category: 'vlogs',
    aspectRatio: 'portrait',
  },
  {
    id: 'v3',
    title: 'Manali Trek',
    image: '/works/vlogs/manali-1.webp',
    category: 'vlogs',
    aspectRatio: 'portrait',
  },
  {
    id: 'v4',
    title: 'Day in My Life',
    image: '/works/vlogs/daylife-1.webp',
    category: 'vlogs',
    aspectRatio: 'square',
  },

  // ── FACTS ───────────────────────────────────────
  {
    id: 'f1',
    title: 'Dark History',
    image: '/works/facts/dark-1.webp',
    category: 'facts',
    aspectRatio: 'portrait',
  },
  {
    id: 'f2',
    title: 'Space Mysteries',
    image: '/works/facts/space-1.webp',
    category: 'facts',
    aspectRatio: 'landscape',
  },
  {
    id: 'f3',
    title: 'Ancient Secrets',
    image: '/works/facts/ancient-1.webp',
    category: 'facts',
    aspectRatio: 'portrait',
  },

  // ── PODCASTS ────────────────────────────────────
  {
    id: 'p1',
    title: 'Tech Talk Episode',
    image: '/works/podcasts/tech-1.webp',
    category: 'podcasts',
    aspectRatio: 'square',
  },
  {
    id: 'p2',
    title: 'Interview Series',
    image: '/works/podcasts/interview-1.webp',
    category: 'podcasts',
    aspectRatio: 'landscape',
  },
  {
    id: 'p3',
    title: 'Business Podcast',
    image: '/works/podcasts/biz-1.webp',
    category: 'podcasts',
    aspectRatio: 'portrait',
  },

  // ── SPORTS ──────────────────────────────────────
  {
    id: 's1',
    title: 'IPL Match Cover',
    image: '/works/sports/ipl-1.webp',
    category: 'sports',
    aspectRatio: 'landscape',
  },
  {
    id: 's2',
    title: 'Football Highlights',
    image: '/works/sports/football-1.webp',
    category: 'sports',
    aspectRatio: 'portrait',
  },
  {
    id: 's3',
    title: 'Athlete Profile',
    image: '/works/sports/athlete-1.webp',
    category: 'sports',
    aspectRatio: 'square',
  },

  // ── BRANDING ────────────────────────────────────
  {
    id: 'b1',
    title: 'Channel Logo Pack',
    image: '/works/branding/logo-1.webp',
    category: 'branding',
    aspectRatio: 'square',
  },
  {
    id: 'b2',
    title: 'Brand Kit Dark',
    image: '/works/branding/kit-1.webp',
    category: 'branding',
    aspectRatio: 'portrait',
  },
  {
    id: 'b3',
    title: 'Social Media Pack',
    image: '/works/branding/social-1.webp',
    category: 'branding',
    aspectRatio: 'landscape',
  },
]