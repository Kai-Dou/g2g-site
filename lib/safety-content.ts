export interface SafetySection {
  id: string;
  title: string;
  body: string;
  list?: string[];
}

export const chainRequiredStates = [
  "Montana",
  "Utah",
  "North Dakota",
  "South Dakota",
  "Oregon",
  "Washington",
];

export const safetySections: SafetySection[] = [
  {
    id: "prioridade",
    title: "Sua vida é mais importante que qualquer carga",
    body: "Na G2G, nenhuma entrega vale mais que a sua segurança. Crescimento com força começa com motoristas protegidos e decisões responsáveis na estrada.",
  },
  {
    id: "correntes",
    title: "Correntes de neve — obrigatórias em 6 estados",
    body: "Carros com tração traseira precisam de correntes por lei nestes estados. Compre com antecedência — quando a neve chega, fica difícil encontrar.",
    list: chainRequiredStates,
  },
  {
    id: "velocidade",
    title: "Velocidade na neve: 40–50 km/h",
    body: "Reduza drasticamente a velocidade em pista molhada ou com neve. Manter entre 40 e 50 km/h aumenta o controle e o tempo de reação.",
  },
  {
    id: "noite",
    title: "Nunca dirija à noite quando estiver nevando",
    body: "A visibilidade cai muito e o risco de acidentes aumenta. Se estiver nevando à noite, pare em local seguro e aguarde condições melhores.",
  },
  {
    id: "carreteiros",
    title: "Cuidado com carreteiros na neve",
    body: "Caminhões pesados podem perder controle e causar acidentes em cadeia em alta velocidade. Mantenha distância e evite rodar em condições extremas.",
  },
];

export const safetyChecklist = [
  "Correntes de neve no veículo (se aplicável)",
  "Pneus em bom estado e calibrados",
  "Limpador e fluido de para-brisa cheios",
  "Rotas revisadas com dispatcher antes de sair",
  "Contato de emergência e suporte G2G salvo",
];
