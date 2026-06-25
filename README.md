# G2G Logistics — Site Institucional

Site institucional da **G2G Logistics (Good To Go Logistics LLC)**, empresa de logística nos EUA focada em agregar motoristas de cargo van brasileiros e latinos.

## Stack

- Next.js 14+ (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts

| Comando        | Descrição              |
|----------------|------------------------|
| `npm run dev`  | Servidor de desenvolvimento |
| `npm run build`| Build de produção      |
| `npm run start`| Servidor de produção   |
| `npm run lint` | ESLint                 |

## Estrutura

```
app/
  api/contact/route.ts   # Endpoint fake de contato (TODO: WhatsApp/CRM)
  globals.css            # Design system + .glass-card
  layout.tsx
  page.tsx
components/
  sections/              # Seções da landing page
  ui/                    # Componentes reutilizáveis
lib/
public/images/           # Placeholders SVG (substituir por fotos reais .jpg)
tailwind.config.ts       # Tokens de cor G2G
```

## Imagens placeholder

Substitua os arquivos em `public/images/` por fotos reais:

- `hero-truck-night.svg` → estrada/caminhão à noite
- `driver-portrait-1.svg` → retrato motorista (persona João)
- `driver-portrait-2.svg` → retrato motorista (persona Carlos)
- `driver-portrait-3.svg` → retrato motorista (persona Ricardo)

## Deploy na Vercel

1. Conecte o repositório [github.com/Kai-Dou/g2g-site](https://github.com/Kai-Dou/g2g-site)
2. Framework: **Next.js** (detectado automaticamente)
3. `npm run build` / output padrão
4. Analytics e Speed Insights já integrados (`@vercel/analytics`, `@vercel/speed-insights`)

## Logo (`public/logo.png`)

| Uso | Formato ideal | Dimensões recomendadas |
|-----|---------------|------------------------|
| Navbar / site | **SVG** ou PNG transparente | **600×200 px** (horizontal, proporção ~3:1) |
| Retina (@2x) | PNG | **1200×400 px** |
| Favicon | PNG / ICO | 32×32, 180×180 (Apple) |
| Open Graph | PNG | 1200×630 px |

Evite quadrado 500×500 com muito espaço vazio — o logo fica pequeno na tela. Exporte recortado, só o lockup G2G + tagline.

## Contato

- Instagram: [@g2glogistics_llc](https://www.instagram.com/g2glogistics_llc)
