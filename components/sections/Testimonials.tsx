"use client";

import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { testimonialVideos } from "@/lib/testimonials";
import { cn } from "@/lib/utils";

function VideoCard({
  name,
  role,
  quote,
  video,
  index,
}: {
  name: string;
  role: string;
  quote: string;
  video: string;
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const el = videoRef.current;
    if (!el) return;

    if (el.paused) {
      void el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  };

  return (
    <FadeIn delay={index * 0.08}>
      <article className="glass-card glass-card-hover flex h-full flex-col overflow-hidden border-g2g-red/15 hover:border-g2g-red/30">
        <div className="relative aspect-[9/16] w-full bg-g2g-navy-950">
          <video
            ref={videoRef}
            src={video}
            className="h-full w-full object-cover"
            playsInline
            muted={muted}
            preload="metadata"
            onEnded={() => setPlaying(false)}
            onPause={() => setPlaying(false)}
            onPlay={() => setPlaying(true)}
            aria-label={`Depoimento em vídeo de ${name}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-g2g-navy-950/90 via-transparent to-g2g-navy-950/30" />

          {/* Barra de controles */}
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 border-t border-g2g-red/25 bg-g2g-navy-950/85 px-3 py-2.5 backdrop-blur-sm">
            <button
              type="button"
              onClick={togglePlay}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-g2g-red/90 text-white transition-colors hover:bg-g2g-red hover:border-g2g-red"
              aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
            >
              {playing ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
            </button>

            <span className="flex-1 truncate text-center text-[10px] font-semibold uppercase tracking-wider text-g2g-gray-400">
              {playing ? "Reproduzindo" : "Pausado"}
            </span>

            <button
              type="button"
              onClick={toggleMute}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
                muted
                  ? "border-g2g-red/40 bg-g2g-red/20 text-g2g-red"
                  : "border-white/20 bg-white/10 text-white hover:border-g2g-yellow",
              )}
              aria-label={muted ? "Ativar som" : "Silenciar vídeo"}
            >
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        </div>

        <div className="flex flex-1 flex-col border-t border-g2g-red/10 p-5">
          <blockquote className="flex-1 text-sm font-medium leading-relaxed text-g2g-gray-100">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <footer className="mt-4 border-t border-white/10 pt-3">
            <p className="font-bold text-white">{name}</p>
            <p className="text-xs text-g2g-gray-400">{role}</p>
          </footer>
        </div>
      </article>
    </FadeIn>
  );
}

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="section-padding mx-auto max-w-7xl"
      aria-labelledby="testimonials-heading"
    >
      <FadeIn>
        <SectionHeading
          eyebrow="Histórias de motoristas"
          title="Depoimentos"
          description="Motoristas reais da frota G2G compartilhando a experiência na estrada."
          accent="red"
        />
      </FadeIn>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonialVideos.map((item, index) => (
          <VideoCard key={item.id} {...item} index={index} />
        ))}
      </div>

      <FadeIn>
        <div className="mt-8 text-center">
          <Button
            href="https://www.instagram.com/g2glogistics_llc"
            variant="outline-glass"
            external
          >
            Ver mais no Instagram
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}
