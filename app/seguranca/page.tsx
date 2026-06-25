import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  Snowflake,
  Gauge,
  Moon,
  Truck,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import {
  chainRequiredStates,
  safetyChecklist,
  safetySections,
} from "@/lib/safety-content";

export const metadata: Metadata = {
  title: "Segurança na Estrada | G2G Logistics",
  description:
    "Guia de segurança G2G para motoristas de cargo van: neve, correntes obrigatórias, velocidade e boas práticas nos EUA.",
};

const iconMap = {
  prioridade: AlertTriangle,
  correntes: Snowflake,
  velocidade: Gauge,
  noite: Moon,
  carreteiros: Truck,
} as const;

export default function SegurancaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <div className="section-padding mx-auto max-w-4xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-g2g-gray-400 transition-colors hover:text-g2g-yellow"
          >
            <ArrowLeft size={16} aria-hidden />
            Voltar ao início
          </Link>

          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-g2g-red/15">
              <AlertTriangle className="text-g2g-red" size={24} aria-hidden />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-g2g-red">
              Segurança em Primeiro Lugar
            </p>
          </div>

          <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
            Guia de Segurança G2G
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-g2g-gray-100/90">
            Orientações essenciais para motoristas de cargo van — especialmente em
            inverno e condições adversas. Sua vida é mais importante que qualquer
            carga.
          </p>
        </div>

        <div className="section-padding mx-auto max-w-4xl space-y-8">
          {safetySections.map((section) => {
            const Icon = iconMap[section.id as keyof typeof iconMap] ?? AlertTriangle;
            return (
              <article
                key={section.id}
                className="rounded-bento border border-white/10 bg-g2g-navy-900/40 p-6 md:p-8"
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-g2g-red/10">
                    <Icon className="text-g2g-red" size={22} aria-hidden />
                  </div>
                  <h2 className="font-display text-xl font-bold text-white md:text-2xl">
                    {section.title}
                  </h2>
                </div>
                <p className="leading-relaxed text-g2g-gray-100/90">{section.body}</p>
                {section.list && (
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {section.list.map((state) => (
                      <li
                        key={state}
                        className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/5 px-3 py-2 text-sm text-white"
                      >
                        <Snowflake size={14} className="shrink-0 text-g2g-yellow" aria-hidden />
                        {state}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}

          <article className="glass-card p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-white md:text-2xl">
              Checklist antes de rodar
            </h2>
            <p className="mt-2 text-sm text-g2g-gray-400">
              Revise estes itens com seu dispatcher G2G antes de pegar a estrada.
            </p>
            <ul className="mt-6 space-y-3">
              {safetyChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-g2g-gray-100">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-g2g-yellow"
                    size={18}
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <div className="rounded-bento border border-g2g-red/30 bg-g2g-red/8 p-8 text-center">
            <p className="font-display text-2xl font-bold text-white">
              Em dúvida, pare e fale com a G2G.
            </p>
            <p className="mt-3 text-g2g-gray-100/85">
              Suporte 24/7 em português — você nunca está sozinho na estrada.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="/#contato" variant="primary">
                Falar com a equipe
              </Button>
              <Button
                href="https://www.instagram.com/g2glogistics_llc"
                variant="outline-glass"
                external
              >
                Instagram @g2glogistics_llc
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
