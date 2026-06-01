export interface CreatorClient {
  id: number;
  name: string;
  image: string;
  social: string;
}

export const creators: CreatorClient[] = [
  {
    id: 1,
    name: "MrBeast",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=60",
    social: "https://instagram.com/mrbeast",
  },
  {
    id: 2,
    name: "KSI",
    image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=400&auto=format&fit=crop&q=60",
    social: "https://instagram.com/ksi",
  },
  {
    id: 3,
    name: "FaZe Clan",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&auto=format&fit=crop&q=60",
    social: "https://instagram.com/fazeclan",
  },
  {
    id: 4,
    name: "100 Thieves",
    image: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=400&auto=format&fit=crop&q=60",
    social: "https://instagram.com/100thieves",
  },
  {
    id: 5,
    name: "Shroud",
    image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=400&auto=format&fit=crop&q=60",
    social: "https://twitch.tv/shroud",
  },
  {
    id: 6,
    name: "Sentinels",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400&auto=format&fit=crop&q=60",
    social: "https://twitter.com/sentinels",
  },
  {
    id: 7,
    name: "Razer",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&auto=format&fit=crop&q=60",
    social: "https://razer.com",
  },
  {
    id: 8,
    name: "Logitech G",
    image: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=400&auto=format&fit=crop&q=60",
    social: "https://logitechg.com",
  },
];