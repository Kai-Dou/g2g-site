"use client";

import Link from "next/link";
import { AlertTriangle, Snowflake, Gauge, Moon, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { LucideIcon } from "lucide-react";

const safetyTips: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Snowflake,
    title: "Correntes obrigatórias",
    text: "Em 6 estados dos EUA, correntes de neve são exigidas por lei — compre com antecedência.",
  },
  {
    icon: Gauge,
    title: "Velocidade na neve",
    text: "Reduza drasticamente a velocidade. O ideal é manter entre 40–50 km/h em condições de neve.",
  },
  {
    icon: Moon,
    title: "Nunca à noite na neve",
    text: "Se estiver nevando à noite, pare. Sua visibilidade cai e o risco de acidentes aumenta muito.",
  },
];

export function Safety() {
  return (
    <section
      id="seguranca"
      className="section-padding mx-auto max-w-7xl"
      aria-labelledby="safety-heading"
    >
      <FadeIn>
        <div className="overflow-hidden rounded-bento border border-g2g-red/25 bg-g2g-red/5 p-8 md:p-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-g2g-red/15">
              <AlertTriangle className="text-g2g-red" size={24} aria-hidden />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-g2g-red">
              Segurança em Primeiro Lugar
            </p>
          </div>

          <SectionHeading
            align="left"
            title="Sua vida é mais importante que qualquer carga."
            description="Na G2G, crescimento com força começa com motoristas seguros."
            className="mb-10"
          />

          <div className="grid gap-5 md:grid-cols-3">
            {safetyTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <FadeIn key={tip.title} delay={index * 0.08}>
                  <article className="rounded-2xl border border-white/10 bg-g2g-navy-950/40 p-6">
                    <Icon
                      className="mb-4 text-g2g-red/80"
                      size={24}
                      aria-hidden
                    />
                    <h3 className="font-display text-lg font-bold text-white">
                      {tip.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-g2g-gray-100/85">
                      {tip.text}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.25}>
            <Link
              href="/seguranca"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-g2g-red/30 bg-g2g-red/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-g2g-red/50 hover:bg-g2g-red/15"
            >
              Ver guia completo de segurança
              <ArrowRight size={16} aria-hidden />
            </Link>
          </FadeIn>
        </div>
      </FadeIn>
    </section>
  );
}
