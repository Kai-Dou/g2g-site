import { Logo } from "@/components/ui/Logo";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

const footerLinks = [
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Cargo Vans", href: "#cargo-vans" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Calculadora", href: "/#calculadora" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-g2g-navy-950 px-4 py-12 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <Logo size="lg" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-g2g-gray-400">
            Good To Go Logistics LLC — conectando motoristas brasileiros e latinos
            ao sucesso nos EUA.
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Navegação
          </p>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-g2g-gray-400 transition-colors hover:text-g2g-yellow"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Redes sociais
          </p>
          <a
            href="https://www.instagram.com/g2glogistics_llc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-g2g-gray-400 transition-colors hover:text-g2g-yellow"
            aria-label="Instagram @g2glogistics_llc"
          >
            <InstagramIcon size={20} />
            @g2glogistics_llc
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/8 pt-6">
        <p className="text-center text-xs text-g2g-gray-400">
          © {year} G2G Logistics (Good To Go Logistics LLC). Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
