import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "G2G Logistics | Conectando motoristas ao sucesso",
  description:
    "Good To Go Logistics LLC — cargas garantidas, suporte 24/7 em português e ganhos de $1.500 a $2.500/semana para motoristas de cargo van nos EUA.",
  keywords: [
    "G2G Logistics",
    "motorista agregado",
    "cargo van",
    "logística EUA",
    "cargas garantidas",
  ],
  openGraph: {
    title: "G2G Logistics | Conectando motoristas ao sucesso",
    description:
      "Cargas garantidas, suporte 24/7 e ganhos premium para motoristas brasileiros e latinos nos EUA.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} h-full scroll-smooth`}>
      <body className="min-h-full font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
