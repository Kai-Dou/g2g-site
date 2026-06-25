"use client";

import { useMemo, useState } from "react";
import { DollarSign, Calendar, TrendingUp } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  BASELINE_DAYS,
  WEEKLY_MIN,
  WEEKLY_MAX,
  calculateEarnings,
  formatUsd,
} from "@/lib/earnings";

export function EarningsCalculator() {
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [weeklyTarget, setWeeklyTarget] = useState(2000);

  const results = useMemo(
    () => calculateEarnings(daysPerWeek, weeklyTarget),
    [daysPerWeek, weeklyTarget],
  );

  return (
    <section
      id="calculadora"
      className="section-padding mx-auto max-w-7xl"
      aria-labelledby="calculator-heading"
    >
      <FadeIn>
        <SectionHeading
          eyebrow="Simule seus ganhos"
          title="Calculadora de Ganhos"
          description="Ajuste os dias na estrada e veja estimativas baseadas na faixa real da G2G: $1.500 a $2.500 por semana."
          accent="red"
        />
      </FadeIn>

      <FadeIn>
        <div className="glass-card grid gap-8 border-g2g-red/15 p-6 md:grid-cols-2 md:p-10">
          <div className="space-y-8">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <label htmlFor="days-slider" className="text-sm font-semibold text-white">
                  Dias rodando por semana
                </label>
                <span className="rounded-full bg-g2g-yellow/15 px-3 py-1 text-sm font-bold text-g2g-yellow">
                  {daysPerWeek} {daysPerWeek === 1 ? "dia" : "dias"}
                </span>
              </div>
              <input
                id="days-slider"
                type="range"
                min={1}
                max={7}
                step={1}
                value={daysPerWeek}
                onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-g2g-yellow"
              />
              <p className="mt-2 text-xs text-g2g-gray-400">
                Referência G2G: {BASELINE_DAYS} dias/semana para ganhos plenos.
              </p>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between">
                <label htmlFor="earnings-slider" className="text-sm font-semibold text-white">
                  Meta semanal (5 dias)
                </label>
                <span className="text-sm font-bold text-g2g-yellow">
                  {formatUsd(weeklyTarget)}
                </span>
              </div>
              <input
                id="earnings-slider"
                type="range"
                min={WEEKLY_MIN}
                max={WEEKLY_MAX}
                step={50}
                value={weeklyTarget}
                onChange={(e) => setWeeklyTarget(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-g2g-yellow"
              />
              <div className="mt-2 flex justify-between text-xs text-g2g-gray-400">
                <span>{formatUsd(WEEKLY_MIN)}</span>
                <span>{formatUsd(WEEKLY_MAX)}</span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-g2g-gray-400">
              Valores estimados com base na faixa informada pela G2G. Ganhos reais
              variam conforme rota, região e tipo de carga. Pagamento é semanal.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div className="rounded-2xl border border-g2g-yellow/25 bg-g2g-yellow/8 p-6 text-center">
              <DollarSign className="mx-auto mb-2 text-g2g-yellow" size={28} aria-hidden />
              <p className="text-sm uppercase tracking-wider text-g2g-gray-100">
                Estimativa semanal
              </p>
              <p
                id="calculator-heading"
                className="mt-1 font-display text-4xl font-black text-white md:text-5xl"
              >
                {formatUsd(results.weekly)}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-g2g-red/20 bg-g2g-red/5 p-4">
                <Calendar className="mb-2 text-g2g-yellow/80" size={18} aria-hidden />
                <p className="text-xs text-g2g-gray-400">Por mês (~4,3 sem.)</p>
                <p className="font-display text-xl font-bold text-white">
                  {formatUsd(results.monthly)}
                </p>
              </div>
              <div className="rounded-2xl border border-g2g-red/20 bg-g2g-red/5 p-4">
                <TrendingUp className="mb-2 text-g2g-yellow/80" size={18} aria-hidden />
                <p className="text-xs text-g2g-gray-400">Por ano (52 sem.)</p>
                <p className="font-display text-xl font-bold text-white">
                  {formatUsd(results.annual)}
                </p>
              </div>
            </div>

            <Button href="#contato" variant="primary" className="w-full py-4">
              Quero ganhar assim com a G2G
            </Button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
