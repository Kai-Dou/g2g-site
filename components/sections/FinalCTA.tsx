"use client";

import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_CTA_URL } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section
      id="contato"
      className="section-padding mx-auto max-w-7xl"
      aria-labelledby="cta-heading"
    >
      <FadeIn>
        <div className="relative overflow-hidden rounded-bento bg-g2g-cta p-8 md:p-14">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-g2g-yellow/10 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-g2g-navy-700/40 blur-3xl"
            aria-hidden
          />

            <div className="glass-card relative mx-auto max-w-2xl p-6 text-center sm:p-8 md:p-12">
            <h2
              id="cta-heading"
              className="font-display text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl md:text-4xl"
            >
              Pronto para crescer com força, não devagar?
            </h2>
            <p className="mt-4 text-base text-g2g-gray-100/90 md:text-lg">
              Fale com a equipe G2G no WhatsApp, resposta rápida em português.
            </p>

            <Button
              href={WHATSAPP_CTA_URL}
              variant="primary"
              external
              className="mt-8 w-full gap-2 px-6 py-4 text-base sm:w-auto sm:px-8"
            >
              <WhatsAppIcon size={22} />
              Quero me Agregar
            </Button>

            <p className="mt-6 text-xs text-g2g-gray-400">
              Instagram{" "}
              <a
                href="https://www.instagram.com/g2glogistics_llc"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-g2g-yellow hover:underline"
              >
                @g2glogistics_llc
              </a>
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
