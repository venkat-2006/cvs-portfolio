// src/data/works.ts

export interface Work {
  id: string;
  title: string;
  image: string;
  category: string;
  gameOrSub: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
}

export const works: Work[] = [
  // ── GAMING CATEGORY ──────────────────────────────────────
  {
    id: 'g1_1',
    title: 'BGMI Pro Invitational Grand Finale Match Poster',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80',
    category: 'gaming',
    gameOrSub: 'BGMI',
    aspectRatio: 'landscape',
  },
  {
    id: 'g1_2',
    title: 'BGMI Stream Overlay Pack & HUD Assets v2',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80',
    category: 'gaming',
    gameOrSub: 'BGMI',
    aspectRatio: 'landscape',
  },
  {
    id: 'g1_3',
    title: 'BGMI Underdog Showdown Official Live Stream Banner',
    image: 'https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?w=800&auto=format&fit=crop&q=80',
    category: 'gaming',
    gameOrSub: 'BGMI',
    aspectRatio: 'landscape',
  },
  {
    id: 'g2_1',
    title: 'Valorant Immortal Ranked High-Tier Cover Art',
    image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?w=800&auto=format&fit=crop&q=80',
    category: 'gaming',
    gameOrSub: 'Valorant',
    aspectRatio: 'landscape',
  },
  {
    id: 'g2_2',
    title: 'Valorant VCT Champions Style Custom Concept Art',
    image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&auto=format&fit=crop&q=80',
    category: 'gaming',
    gameOrSub: 'Valorant',
    aspectRatio: 'landscape',
  },
  {
    id: 'g3_1',
    title: 'Free Fire Clash Squad Global Tournament Concept',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80',
    category: 'gaming',
    gameOrSub: 'Free Fire',
    aspectRatio: 'landscape',
  },
  {
    id: 'g3_2',
    title: 'Free Fire Speed Rush Season High-Contrast Graphic',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80',
    category: 'gaming',
    gameOrSub: 'Free Fire',
    aspectRatio: 'landscape',
  },
  {
    id: 'g4_1',
    title: 'COD Warzone Kill Race Banner & Thumbnail Pack',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=80',
    category: 'gaming',
    gameOrSub: 'Call Of Duty',
    aspectRatio: 'landscape',
  },
  {
    id: 'g5_1',
    title: 'Minecraft Hardcore World Episode 100 Special Cover',
    image: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=800&auto=format&fit=crop&q=80',
    category: 'gaming',
    gameOrSub: 'Minecraft',
    aspectRatio: 'landscape',
  },
  {
    id: 'g6_1',
    title: 'PUBG Mobile Solo Conqueror Push Dramatic Match Header',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop&q=80',
    category: 'gaming',
    gameOrSub: 'PUBG Mobile',
    aspectRatio: 'landscape',
  },

  // ── VLOGS CATEGORY ───────────────────────────────────────
  {
    id: 'v1_1',
    title: 'Goa Travel Cinematic Summer Island Thumbnail',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
    category: 'vlogs',
    gameOrSub: 'Travel Vlogs',
    aspectRatio: 'landscape',
  },
  {
    id: 'v1_2',
    title: 'Hidden Beaches Exploring Coastal India Travel Series',
    image: 'https://images.unsplash.com/photo-1473116763269-255410775467?w=800&auto=format&fit=crop&q=80',
    category: 'vlogs',
    gameOrSub: 'Travel Vlogs',
    aspectRatio: 'landscape',
  },
  {
    id: 'v2_1',
    title: 'Street Food Tour Asia Edition Market Diaries',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop&q=80',
    category: 'vlogs',
    gameOrSub: 'Lifestyle Content',
    aspectRatio: 'landscape',
  },
  {
    id: 'v2_2',
    title: 'A Day Inside High-End Aesthetic Minimal Workspace Cafe',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80',
    category: 'vlogs',
    gameOrSub: 'Lifestyle Content',
    aspectRatio: 'landscape',
  },
  {
    id: 'v3_1',
    title: 'Manali Trek Cold Mountain Expedition Cover Art',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80',
    category: 'vlogs',
    gameOrSub: 'Mountain Documentaries',
    aspectRatio: 'landscape',
  },

  // ── FACTS CATEGORY ───────────────────────────────────────
  {
    id: 'f1_1',
    title: 'Dark History Unsolved Royal Castle Mysteries',
    image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800&auto=format&fit=crop&q=80',
    category: 'facts',
    gameOrSub: 'Historical Facts',
    aspectRatio: 'landscape',
  },
  {
    id: 'f1_2',
    title: 'Ancient Egypt Crypt Secret Chambers Revealed',
    image: 'https://images.unsplash.com/photo-1600577916048-804c9191e36c?w=800&auto=format&fit=crop&q=80',
    category: 'facts',
    gameOrSub: 'Historical Facts',
    aspectRatio: 'landscape',
  },
  {
    id: 'f2_1',
    title: 'Space Mysteries Deep Wormhole Astrophysics Concept',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
    category: 'facts',
    gameOrSub: 'Cosmology & Space',
    aspectRatio: 'landscape',
  },
  {
    id: 'f2_2',
    title: 'The Edge of Reality Event Horizon Deep Space Explore',
    image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=800&auto=format&fit=crop&q=80',
    category: 'facts',
    gameOrSub: 'Cosmology & Space',
    aspectRatio: 'landscape',
  },

  // ── PODCASTS CATEGORY ────────────────────────────────────
  {
    id: 'p1_1',
    title: 'Tech Talk AI Revolution Studio Episode #42 Layout',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80',
    category: 'podcasts',
    gameOrSub: 'Tech Talks',
    aspectRatio: 'landscape',
  },
  {
    id: 'p1_2',
    title: 'Cybersecurity Future Network Framework Debate Cover',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&auto=format&fit=crop&q=80',
    category: 'podcasts',
    gameOrSub: 'Tech Talks',
    aspectRatio: 'landscape',
  },

  // ── SPORTS CATEGORY ──────────────────────────────────────
  {
    id: 's1_1',
    title: 'IPL Match Cover Super Over Finals Edition Grid Graphic',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&auto=format&fit=crop&q=80',
    category: 'sports',
    gameOrSub: 'Cricket / IPL',
    aspectRatio: 'landscape',
  },
  {
    id: 's1_2',
    title: 'T20 World Cup High-Intensity Player Action Splash Card',
    image: 'https://images.unsplash.com/photo-1624526260592-af466f22d7c7?w=800&auto=format&fit=crop&q=80',
    category: 'sports',
    gameOrSub: 'Cricket / IPL',
    aspectRatio: 'landscape',
  },

  // ── BRANDING CATEGORY ────────────────────────────────────
  {
    id: 'b1_1',
    title: 'Streamer Esport Channel Luxury Core Logo Design Pack',
    image: 'https://images.unsplash.com/photo-1614036417651-efe5912149d8?w=800&auto=format&fit=crop&q=80',
    category: 'branding',
    gameOrSub: 'Logo Visuals',
    aspectRatio: 'landscape',
  },
  {
    id: 'b1_2',
    title: 'Neo-Tokyo Synthwave Profile Identity Signature Template',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    category: 'branding',
    gameOrSub: 'Logo Visuals',
    aspectRatio: 'landscape',
  }
];