"use client";

import { FormEvent, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Erro ao enviar");
      }

      setStatus("success");
      setMessage(data.message ?? "Recebemos seu contato! Em breve entraremos em contato.");
      setPhone("");
    } catch {
      setStatus("error");
      setMessage("Não foi possível enviar agora. Tente novamente ou fale conosco no Instagram.");
    }
  };

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

          <div className="glass-card relative mx-auto max-w-2xl p-8 text-center md:p-12">
            <h2
              id="cta-heading"
              className="font-display text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl"
            >
              Pronto para crescer com força, não devagar?
            </h2>
            <p className="mt-4 text-base text-g2g-gray-100/90 md:text-lg">
              Deixe seu WhatsApp ou telefone e nossa equipe entra em contato para
              avaliar seu perfil.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-stretch"
            >
              <label htmlFor="phone" className="sr-only">
                WhatsApp ou telefone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="WhatsApp ou telefone (opcional)"
                className="flex-1 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-white placeholder:text-g2g-gray-400 focus:border-g2g-yellow focus:outline-none focus:ring-2 focus:ring-g2g-yellow/30"
              />
              <Button
                type="submit"
                variant="primary"
                className="px-8 py-3 whitespace-nowrap"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Enviando..." : "Quero me Agregar Agora"}
              </Button>
            </form>

            {message && (
              <p
                role="status"
                className={`mt-4 text-sm ${status === "error" ? "text-g2g-red" : "text-g2g-yellow"}`}
              >
                {message}
              </p>
            )}

            <p className="mt-6 text-xs text-g2g-gray-400">
              Ou fale direto no Instagram{" "}
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
