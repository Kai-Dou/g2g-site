"use client";

import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { FadeIn } from "@/components/ui/FadeIn";
import { HeroBackground } from "@/components/sections/HeroBackground";
import { useMotionSafe } from "@/lib/motion";
import { WHATSAPP_CTA_URL } from "@/lib/whatsapp";

export function Hero() {
  const { fadeUp } = useMotionSafe();

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-28 sm:pt-24"
      aria-label="Apresentação G2G Logistics"
    >
      <HeroBackground />

      <div className="section-padding relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-g2g-yellow"
          >
            Good To Go Logistics{" "}
            <span className="text-g2g-red">LLC</span>
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-hero font-black uppercase leading-[1.08] tracking-tight text-white"
          >
            Conectando motoristas ao sucesso
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-relaxed text-g2g-gray-100 sm:text-lg md:text-xl"
          >
            Cargas garantidas. Suporte 24/7. Ganhos de até $2.500 por semana
            dirigindo cargo van nos EUA.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:items-stretch sm:gap-4"
          >
            <Button
              href={WHATSAPP_CTA_URL}
              variant="primary"
              external
              className="w-full gap-2 px-6 py-4 text-base sm:w-auto sm:px-8"
            >
              <WhatsAppIcon size={20} />
              Quero me Agregar
            </Button>
            <Button
              href="#como-funciona"
              variant="outline-glass"
              className="w-full px-6 py-4 text-base sm:w-auto sm:px-8"
            >
              Como Funciona
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 lg:hidden">
            <div className="glass-card inline-flex flex-col p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-g2g-gray-400">
                Ganhos semanais
              </p>
              <p className="font-display text-2xl font-extrabold leading-tight text-white">
                $1.500
                <br />
                $2.500<span className="text-base font-semibold">/semana</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        <FadeIn className="hidden lg:block">
          <div className="glass-card glass-card-hover w-72 p-6">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-g2g-yellow/15">
              <DollarSign className="text-g2g-yellow" size={24} aria-hidden />
            </div>
            <p className="text-sm font-medium uppercase tracking-wider text-g2g-gray-400">
              Ganhos semanais
            </p>
            <p className="mt-1 font-display text-3xl font-extrabold leading-tight text-white">
              $1.500
              <br />
              $2.500<span className="text-lg font-semibold text-g2g-gray-100">/semana</span>
            </p>
            <p className="mt-3 text-sm text-g2g-gray-100/80">
              Cargas premium com pagamento semanal garantido.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
