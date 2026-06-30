"use client";

import { useEffect, useRef, useState } from "react";

const HERO_VIDEO_SRC = "/videos/hero-truck-night.mp4";

/**
 * Vídeo de fundo do hero. Coloque o arquivo em public/videos/hero-truck-night.mp4
 * (estrada/caminhão à noite, MP4, recomendado menos de 15 MB, 1920x1080).
 * Sem o arquivo, exibe apenas o gradiente navy da marca.
 */
export function HeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onCanPlay = () => setVideoReady(true);
    const onError = () => setVideoReady(false);

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("error", onError);
    void video.play().catch(() => setVideoReady(false));

    return () => {
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("error", onError);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-g2g-navy-950">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={`h-full w-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-gradient-to-b from-g2g-navy-950/90 via-g2g-navy-900/80 to-g2g-navy-800/95"
        aria-hidden
      />
    </div>
  );
}
