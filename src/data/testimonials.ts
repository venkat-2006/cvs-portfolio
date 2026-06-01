export type Testimonial = {
  name: string;
  role: string;
  image: string;
  review: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Alex Carter",
    role: "YouTuber — 500K Subs",
    image: "/testimonials/1.webp",
    review: "Absolutely incredible work. The thumbnails completely transformed my click-through rate. Within two weeks of using the new designs, my CTR jumped from 4% to over 9%. Easily the best investment I've made for my channel.",
    rating: 5,
  },
  {
    name: "Jordan Lee",
    role: "Esports Team Manager",
    image: "/testimonials/2.webp",
    review: "The brand identity CVS built for our team is next level. Every graphic, every social post looks cohesive and professional. Our sponsors actually commented on how polished everything looks now.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Content Creator",
    image: "/testimonials/3.webp",
    review: "I've worked with a lot of designers but none who understand the YouTube space like this. The thumbnails feel custom-made for my audience and the turnaround time was insane. Will 100% be back.",
    rating: 5,
  },
  {
    name: "Marcus Webb",
    role: "Brand Owner",
    review: "Hired for a full social media kit and was blown away by the quality. Everything delivered on time, revisions were handled super quickly and the final result exceeded what I had in my head.",
    image: "/testimonials/4.webp",
    rating: 5,
  },
  {
    name: "Sophie Nguyen",
    role: "Twitch Streamer",
    image: "/testimonials/5.webp",
    review: "The overlay pack and channel branding look absolutely fire. My viewers immediately noticed the upgrade. CVS GFX genuinely gets the aesthetic of gaming and streaming content.",
    rating: 5,
  },
];