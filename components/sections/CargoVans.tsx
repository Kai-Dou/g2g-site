"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cargoVans } from "@/lib/vans";
import { cn } from "@/lib/utils";

function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isTouch;
}

export function CargoVans() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const isTouch = useIsTouchDevice();
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const activeVan = cargoVans[activeIndex];

  const goTo = useCallback((index: number, dir?: number) => {
    setDirection(dir ?? 0);
    setActiveIndex((index + cargoVans.length) % cargoVans.length);
  }, []);

  const next = useCallback(() => {
    goTo((activeIndex + 1) % cargoVans.length, 1);
  }, [activeIndex, goTo]);

  const prev = useCallback(() => {
    goTo((activeIndex - 1 + cargoVans.length) % cargoVans.length, -1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (isTouch) return undefined;
    autoPlayRef.current = setInterval(next, 7000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [next, isTouch]);

  const resetAutoPlay = () => {
    if (isTouch || !autoPlayRef.current) return;
    clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(next, 7000);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
    }),
  };

  return (
    <section
      id="cargo-vans"
      className="section-padding mx-auto max-w-7xl"
      aria-labelledby="vans-heading"
    >
      <FadeIn>
        <SectionHeading
          eyebrow="Nossa frota"
          title="Cargo Vans"
          description="Modelos aprovados para rodar com a G2G — selecione e explore cada configuração."
        />
      </FadeIn>

      <FadeIn>
        <div className="glass-card overflow-hidden border-g2g-red/10 p-3 sm:p-6 md:p-8">
          <div
            className="mb-6 flex gap-2 overflow-x-auto pb-2 scrollbar-none sm:mb-8 sm:gap-3"
            role="tablist"
            aria-label="Modelos de cargo van"
          >
            {cargoVans.map((van, index) => (
              <button
                key={van.id}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-controls={`van-panel-${van.id}`}
                id={`van-tab-${van.id}`}
                onClick={() => {
                  goTo(index, index > activeIndex ? 1 : -1);
                  resetAutoPlay();
                }}
                className={cn(
                  "group relative flex min-w-[120px] shrink-0 flex-col items-center gap-2 rounded-xl border p-2.5 transition-all duration-200 sm:min-w-[160px] sm:p-3 md:min-w-[180px]",
                  index === activeIndex
                    ? "border-g2g-red bg-g2g-red/10"
                    : "border-white/10 bg-white/3 hover:border-white/20",
                )}
              >
                {index === activeIndex && (
                  <span
                    className="absolute -top-px left-1/2 h-0.5 w-3/4 -translate-x-1/2 bg-g2g-red"
                    aria-hidden
                  />
                )}
                <div className="relative h-12 w-full sm:h-14">
                  <Image
                    src={van.thumb}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="180px"
                    unoptimized
                  />
                </div>
                <span className="text-center text-[9px] font-semibold uppercase leading-tight tracking-wide text-g2g-gray-100 sm:text-[10px] md:text-xs">
                  {van.brand} {van.model}
                </span>
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-8">
            <div
              id={`van-panel-${activeVan.id}`}
              role="tabpanel"
              aria-labelledby={`van-tab-${activeVan.id}`}
              className="order-2 lg:order-1"
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeVan.id}
                  custom={direction}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-g2g-red">
                    {activeVan.brand}
                  </p>
                  <h3
                    id="vans-heading"
                    className="mt-2 font-display text-xl font-extrabold uppercase tracking-tight text-white sm:text-2xl md:text-3xl"
                  >
                    {activeVan.fullName}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-g2g-gray-100/90 md:mt-3 md:text-base">
                    {activeVan.tagline}
                  </p>

                  <div className="mt-4 space-y-2 rounded-2xl border border-g2g-red/15 bg-white/5 p-4 sm:mt-6 sm:space-y-3 sm:p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-g2g-gray-400">
                      Especificações
                    </p>
                    {activeVan.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex flex-col gap-0.5 border-b border-white/6 pb-2 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                      >
                        <span className="text-xs text-g2g-gray-400 sm:text-sm">
                          {spec.label}
                        </span>
                        <span className="text-sm font-semibold text-white">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-4 flex items-center justify-center gap-3 sm:mt-6 sm:justify-start">
                <button
                  type="button"
                  onClick={() => {
                    prev();
                    resetAutoPlay();
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-g2g-red hover:text-g2g-red"
                  aria-label="Modelo anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    next();
                    resetAutoPlay();
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-g2g-red hover:text-g2g-red"
                  aria-label="Próximo modelo"
                >
                  <ChevronRight size={20} />
                </button>
                <span className="text-xs text-g2g-gray-400">
                  {activeIndex + 1} / {cargoVans.length}
                </span>
              </div>
            </div>

            <div className="relative order-1 flex min-h-[200px] items-center justify-center sm:min-h-[260px] lg:order-2 lg:min-h-[340px]">
              <div
                className="absolute inset-x-0 bottom-6 h-px bg-gradient-to-r from-transparent via-g2g-red/30 to-transparent"
                aria-hidden
              />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeVan.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  drag={isTouch ? false : "x"}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) {
                      next();
                      resetAutoPlay();
                    } else if (info.offset.x > 60) {
                      prev();
                      resetAutoPlay();
                    }
                  }}
                  className={cn(
                    "relative h-[180px] w-full max-w-lg sm:h-[240px] md:h-[300px] lg:h-[320px]",
                    !isTouch && "cursor-grab active:cursor-grabbing",
                  )}
                >
                  <Image
                    src={activeVan.image}
                    alt={`Visualização da ${activeVan.fullName}`}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={activeIndex === 0}
                    unoptimized
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
