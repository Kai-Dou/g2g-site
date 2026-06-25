"use client";

import { Headphones, Package, Star } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { LucideIcon } from "lucide-react";

const reasons: {
  icon: LucideIcon;
  title: string;
  description: string;
  className: string;
}[] = [
  {
    icon: Package,
    title: "Cargas Garantidas",
    description:
      "Enquanto outros motoristas ficam esperando, você está sempre com carga disponível.",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    icon: Headphones,
    title: "Suporte 24/7",
    description:
      "Você nunca está sozinho na estrada. Suporte em português, 24 horas por dia.",
    className: "md:col-span-1",
  },
  {
    icon: Star,
    title: "Cargas Premium",
    description:
      "Não é sobre quantidade de viagens. É sobre QUALIDADE de ganho.",
    className: "md:col-span-1",
  },
];

export function Reasons() {
  return (
    <section
      id="diferenciais"
      className="section-padding mx-auto max-w-7xl"
      aria-labelledby="reasons-heading"
    >
      <FadeIn>
        <SectionHeading
          eyebrow="Por que G2G"
          title="3 Motivos para Ser G2G"
          description="Foque em dirigir. A gente foca no seu sucesso — com cargas, suporte e ganhos que fazem diferença."
        />
      </FadeIn>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <FadeIn key={reason.title} delay={index * 0.08}>
              <article
                className={`glass-card glass-card-hover flex h-full flex-col border-g2g-red/10 p-6 hover:border-g2g-red/25 md:p-8 ${reason.className}`}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-g2g-red/15">
                  <Icon className="text-g2g-red" size={28} aria-hidden />
                </div>
                <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-white md:text-2xl">
                  {reason.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-g2g-gray-100/90">
                  {reason.description}
                </p>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
