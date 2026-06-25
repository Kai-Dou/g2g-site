"use client";

import { Clock, DollarSign, Headphones, Route } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import type { LucideIcon } from "lucide-react";

const stats: { icon: LucideIcon; label: string; highlight: string }[] = [
  {
    icon: Headphones,
    label: "Suporte 24/7 em português",
    highlight: "24/7",
  },
  {
    icon: DollarSign,
    label: "Pagamento semanal garantido",
    highlight: "Semanal",
  },
  {
    icon: Route,
    label: "Ganhos de $1.500 a $2.500/semana",
    highlight: "$2.500",
  },
  {
    icon: Clock,
    label: "Dispatchers dedicados 7 dias por semana",
    highlight: "7 dias",
  },
];

function StatCard({
  icon: Icon,
  label,
  highlight,
}: {
  icon: LucideIcon;
  label: string;
  highlight: string;
}) {
  return (
    <div className="glass-card glass-card-hover flex min-w-[260px] flex-1 items-center gap-4 border-g2g-red/10 p-5 hover:border-g2g-red/25 md:min-w-0">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-g2g-red/15">
        <Icon className="text-g2g-red" size={22} aria-hidden />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-g2g-red">
          {highlight}
        </p>
        <p className="text-sm font-semibold leading-snug text-white">{label}</p>
      </div>
    </div>
  );
}

export function SocialProof() {
  return (
    <section
      className="border-y border-g2g-red/15 bg-g2g-navy-950/50 py-8"
      aria-label="Números e diferenciais em destaque"
    >
      <div className="overflow-hidden md:hidden">
        <div className="flex w-max animate-ticker gap-4 px-4">
          {[...stats, ...stats].map((stat, index) => (
            <StatCard key={`${stat.label}-${index}`} {...stat} />
          ))}
        </div>
      </div>

      <FadeIn className="hidden md:block">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
