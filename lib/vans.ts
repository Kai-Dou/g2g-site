export interface CargoVan {
  id: string;
  brand: string;
  model: string;
  fullName: string;
  tagline: string;
  specs: { label: string; value: string }[];
  image: string;
  thumb: string;
  remoteImage?: boolean;
}

const RAM_IMAGE_PARAMS =
  "COSY-EU-100-1713uLDEMTV1r9s%25WBXaBKFmfKSLC9gIQALMc6UhVk6GBfM9IW2VRkr72kVsd9pj2wXGXQpMTV1rUp3g6OQCckPquBhS1U%25jzbTllxA0tbIlzaQFmwpikpd2ACBoM";

const ramImage = (width: number, height: number) =>
  `https://www.ramtrucks.com/mediaserver/iris?${RAM_IMAGE_PARAMS}&&pov=fronthero&width=${width}&height=${height}&bkgnd=transparent&resp=png&cut=&x=&y=&w=&h=`;

const FORD_TRANSIT_IMAGE =
  "https://live.dealer-asset.co/br1001/siteassets/ford-brasil-transit-furgao-l3h3-mt-branco-oxford-miniatura-130923.png";

const MERCEDES_SPRINTER_IMAGE =
  "https://portalgoverno.com.br/wp-content/uploads/2025/09/VanMercedes-BenzSprinter517.webp";

export const cargoVans: CargoVan[] = [
  {
    id: "sprinter",
    brand: "Mercedes-Benz",
    model: "Sprinter",
    fullName: "Mercedes-Benz Sprinter Cargo Van",
    tagline: "Eficiência europeia, confiabilidade em rotas longas.",
    specs: [
      { label: "Capacidade", value: "Até 4.600 lbs" },
      { label: "Comprimento", value: "144\" – 170\" WB" },
      { label: "Ideal para", value: "Rotas premium e longa distância" },
    ],
    image: MERCEDES_SPRINTER_IMAGE,
    thumb: MERCEDES_SPRINTER_IMAGE,
    remoteImage: true,
  },
  {
    id: "transit",
    brand: "Ford",
    model: "Transit",
    fullName: "Ford Transit Cargo Van",
    tagline: "Versatilidade americana para entregas urbanas e regionais.",
    specs: [
      { label: "Capacidade", value: "Até 4.650 lbs" },
      { label: "Comprimento", value: "130\" – 148\" WB" },
      { label: "Ideal para", value: "Flexibilidade e custo-benefício" },
    ],
    image: FORD_TRANSIT_IMAGE,
    thumb: FORD_TRANSIT_IMAGE,
    remoteImage: true,
  },
  {
    id: "promaster",
    brand: "RAM",
    model: "ProMaster 3500",
    fullName: "RAM ProMaster 3500 Cargo Van",
    tagline: "Amplo espaço de carga e tração dianteira para máximo aproveitamento.",
    specs: [
      { label: "Capacidade", value: "Até 4.680 lbs" },
      { label: "Comprimento", value: "136\" – 159\" WB" },
      { label: "Ideal para", value: "Volume alto e rotas intensas" },
    ],
    image: ramImage(800, 500),
    thumb: ramImage(200, 120),
    remoteImage: true,
  },
];
