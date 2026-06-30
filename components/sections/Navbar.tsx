"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WHATSAPP_CTA_URL } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Cargo Vans", href: "/#cargo-vans" },
  { label: "Como Funciona", href: "/#como-funciona" },
  { label: "Calculadora", href: "/#calculadora" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Segurança", href: "/seguranca" },
  { label: "Contato", href: "/#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass-navbar shadow-lg border-b border-g2g-red/20" : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:gap-4 sm:py-3 md:px-8 md:py-4"
        aria-label="Navegação principal"
      >
        <Link
          href="/"
          className="max-w-[58vw] shrink-0 py-1 sm:max-w-none"
          aria-label="G2G Logistics — início"
        >
          <Logo size="md" className="sm:[&_img]:h-20 lg:[&_img]:h-[6.5rem]" />
        </Link>

        <ul className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-g2g-gray-100 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href={WHATSAPP_CTA_URL} variant="primary" external className="gap-2">
            <WhatsAppIcon size={18} />
            Quero me Agregar
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white lg:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 top-[4.25rem] z-40 overflow-y-auto bg-g2g-navy-950/95 backdrop-blur-md sm:top-[4.75rem] lg:hidden">
          <div className="mx-4 mb-6 mt-2 rounded-bento border border-white/10 bg-white/5 p-6">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-lg px-3 py-3.5 text-base font-medium text-white active:bg-white/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <Button
                  href={WHATSAPP_CTA_URL}
                  variant="primary"
                  external
                  className="w-full gap-2 py-4 text-base"
                  onClick={() => setMobileOpen(false)}
                >
                  <WhatsAppIcon size={20} />
                  Quero me Agregar
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
