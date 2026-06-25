"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  DraggableRoadMarker,
  MilestoneHighlight,
  MobileRoadSlider,
} from "@/components/roadmap/DraggableRoadMarker";
import { ROAD_PATH_D } from "@/lib/road-path";
import { MapPin, Flag } from "lucide-react";
import { cn } from "@/lib/utils";

const roadmapSteps = [
  {
    mile: "01",
    title: "Você entra em contato",
    description: "Fale com nossa equipe pelo formulário ou WhatsApp.",
    position: "top-[8%] left-[2%] md:top-[12%] md:left-[2%]",
  },
  {
    mile: "02",
    title: "Nossa equipe avalia seu perfil",
    description: "Entendemos sua experiência, região e objetivos.",
    position: "top-[26%] right-[2%] md:top-[30%] md:right-[6%]",
  },
  {
    mile: "03",
    title: "Você é agregado à frota G2G",
    description: "Integração rápida com suporte em português.",
    position: "top-[50%] left-[2%] md:top-[54%] md:left-[4%]",
  },
  {
    mile: "04",
    title: "Começa a rodar com cargas garantidas",
    description: "Rotas otimizadas e pagamento semanal garantido.",
    position: "bottom-[6%] right-[2%] md:bottom-[8%] md:right-[4%]",
  },
];

function RoadSvg() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1000 600"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="road-surface" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0a1a2e" />
          <stop offset="50%" stopColor="#142a40" />
          <stop offset="100%" stopColor="#0a1a2e" />
        </linearGradient>
      </defs>
      <path
        d={ROAD_PATH_D}
        fill="none"
        stroke="url(#road-surface)"
        strokeWidth="72"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d={ROAD_PATH_D}
        fill="none"
        stroke="#CC0000"
        strokeWidth="2"
        strokeOpacity="0.35"
        strokeLinecap="round"
      />
      <path
        d={ROAD_PATH_D}
        fill="none"
        stroke="#FFD100"
        strokeWidth="3"
        strokeDasharray="20 16"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d={ROAD_PATH_D}
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="76"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MilestoneCard({
  mile,
  title,
  description,
  position,
  index,
  active,
  isDragging,
}: {
  mile: string;
  title: string;
  description: string;
  position: string;
  index: number;
  active: boolean;
  isDragging: boolean;
}) {
  return (
    <FadeIn delay={index * 0.12}>
      <MilestoneHighlight
        active={active}
        dimmed={isDragging}
        className={cn(
          "absolute z-10 w-[42%] max-w-[200px] sm:w-[44%] sm:max-w-[220px] md:max-w-[260px]",
          position,
        )}
      >
        <article
          className={cn(
            "glass-card p-3 md:p-5",
            active && "border-g2g-red/40 bg-g2g-red/5",
            !isDragging && "glass-card-hover",
          )}
        >
          <div className="mb-2 flex items-center gap-2 md:mb-3">
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-lg font-display text-xs font-black md:h-9 md:w-9 md:text-sm",
                active
                  ? "bg-g2g-red text-white"
                  : "bg-g2g-yellow text-g2g-navy-950",
              )}
            >
              {mile}
            </div>
            <MapPin
              className={active ? "text-g2g-red" : "text-g2g-yellow/70"}
              size={16}
              aria-hidden
            />
          </div>
          <h3 className="font-display text-xs font-bold uppercase leading-snug tracking-tight text-white md:text-base">
            {title}
          </h3>
          <p className="mt-1.5 text-[11px] leading-relaxed text-g2g-gray-100/85 md:mt-2 md:text-sm">
            {description}
          </p>
        </article>
      </MilestoneHighlight>
    </FadeIn>
  );
}

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <section
      id="como-funciona"
      className="section-padding mx-auto max-w-7xl"
      aria-labelledby="how-heading"
    >
      <FadeIn>
        <SectionHeading
          eyebrow="Processo simples"
          title="Como Funciona"
          description="Arraste a van pela estrada e explore cada etapa da sua jornada com a G2G."
          accent="red"
        />
      </FadeIn>

      <div
        className={cn(
          "roadmap-surface relative hidden h-[580px] select-none lg:block lg:h-[620px]",
          isDragging && "cursor-grabbing",
        )}
      >
        <RoadSvg />
        <DraggableRoadMarker
          onStepChange={setActiveStep}
          onDraggingChange={setIsDragging}
        />
        {roadmapSteps.map((step, index) => (
          <MilestoneCard
            key={step.mile}
            {...step}
            index={index}
            active={activeStep === index}
            isDragging={isDragging}
          />
        ))}

        <FadeIn delay={0.5}>
          <div className="pointer-events-none absolute bottom-[2%] left-[42%] z-10 flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-g2g-red bg-g2g-navy-950 shadow-lg shadow-g2g-red/25">
              <Flag className="text-g2g-red" size={22} aria-hidden />
            </div>
            <span className="mt-1 text-xs font-bold uppercase tracking-wider text-g2g-red">
              Na estrada
            </span>
          </div>
        </FadeIn>
      </div>

      <div className="relative lg:hidden">
        <MobileRoadSlider activeStep={activeStep} onStepChange={setActiveStep} />

        <div className="space-y-4">
          {roadmapSteps.map((step, index) => (
            <FadeIn key={step.mile} delay={index * 0.06}>
              <article
                className={cn(
                  "glass-card p-4 transition-all duration-300",
                  activeStep === index
                    ? "border-g2g-red/40 bg-g2g-red/5"
                    : "opacity-50",
                  activeStep !== index && "hidden",
                )}
                aria-hidden={activeStep !== index}
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-g2g-red font-display text-sm font-black text-white">
                    {step.mile}
                  </div>
                  <MapPin className="text-g2g-red" size={16} aria-hidden />
                </div>
                <h3 className="font-display text-base font-bold uppercase tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-g2g-gray-100/85">
                  {step.description}
                </p>
              </article>
            </FadeIn>
          ))}

          {activeStep === 3 && (
            <FadeIn delay={0.1}>
              <div className="glass-card border-g2g-red/30 bg-g2g-red/5 p-4 text-center">
                <Flag className="mx-auto text-g2g-red" size={24} aria-hidden />
                <p className="mt-2 font-display text-sm font-bold uppercase text-g2g-red">
                  Na estrada com cargas garantidas
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
