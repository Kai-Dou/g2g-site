export interface TestimonialVideo {
  id: string;
  name: string;
  role: string;
  quote: string;
  video: string;
}

/** Depoimentos em vídeo da frota G2G */
export const testimonialVideos: TestimonialVideo[] = [
  {
    id: "reels-00",
    name: "Ricardo",
    role: "Motorista G2G — Cargo van",
    quote: "Comecei rápido com a G2G, cargas garantidas desde o dia 1.",
    video: "/videos/Reels-00.mp4",
  },
  {
    id: "reels-01",
    name: "Ismael",
    role: "Motorista G2G — Cargo van",
    quote: "Chega de ficar parado. Aqui tenho cargas premium e suporte 24/7.",
    video: "/videos/Reels-01.mp4",
  },
  {
    id: "reels-02",
    name: "Ricardo",
    role: "Motorista G2G — Cargo van",
    quote: "Cresço com força, com uma parceria de longo prazo de verdade.",
    video: "/videos/Reels-02.mp4",
  },
];
