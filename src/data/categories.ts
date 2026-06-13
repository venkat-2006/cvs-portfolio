export interface Category {
  slug: string;
  title: string;
  description: string;
  count: number;
  icon: string;
  gradient: string;
}

export const categories: Category[] = [
  {
    slug: "gaming",
    title: "Gaming",
    description: "Esports and gaming thumbnails.",
    count: 42,
    icon: "🎮",
    gradient: "from-violet-600 via-fuchsia-600 to-blue-600",
  },
  {
    slug: "vlogs",
    title: "Vlogs",
    description: "Travel and lifestyle content.",
    count: 28,
    icon: "📸",
    gradient: "from-orange-500 via-pink-500 to-red-500",
  },
  {
    slug: "facts",
    title: "Facts",
    description: "Educational channels and documentaries.",
    count: 35,
    icon: "🧠",
    gradient: "from-cyan-500 via-sky-500 to-indigo-500",
  },
  {
    slug: "podcasts",
    title: "Podcasts",
    description: "Podcast and interview creatives.",
    count: 18,
    icon: "🎙️",
    gradient: "from-purple-500 via-indigo-500 to-blue-500",
  },
  {
    slug: "filmy",
    title: "Filmy",
    description: "Movie edits, cinematic content and entertainment creatives.",
    count: 25,
    icon: "🎬",
    gradient: "from-amber-500 via-orange-500 to-red-500",
  },
  {
    slug: "insta-covers",
    title: "Insta Covers",
    description: "Premium Instagram cover pictures and highlight art.",
    count: 22,
    icon: "🖼️",
    gradient: "from-pink-500 via-rose-500 to-orange-400",
  },
];