export type Profile = 'P1' | 'P2' | 'P3' | 'P4';

export interface Option {
  id: string;
  label: string;
  weights: Partial<Record<Profile, number>>;
}

export interface Question {
  id: number;
  text: string;
  image?: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Você já parou para calcular o valor total do enxoval?",
    image: "https://i.ibb.co/PG4xdrm6/1.jpg",
    options: [
      { id: "1a", label: "Sim, sei exatamente quanto vou gastar", weights: { P1: 3, P4: 1 } },
      { id: "1b", label: "Tenho uma noção por cima", weights: { P4: 3, P1: 1 } },
      { id: "1c", label: "Prefiro nem pensar nisso agora", weights: { P2: 2, P3: 2 } }
    ]
  },
  {
    id: 2,
    text: "Quando você vê algo lindo para o bebê, normalmente:",
    image: "https://i.ibb.co/PZyL4XTZ/2.webp",
    options: [
      { id: "2a", label: "Analisa se realmente vai usar", weights: { P1: 3, P4: 2 } },
      { id: "2b", label: "Pensa no orçamento antes", weights: { P1: 2, P4: 2 } },
      { id: "2c", label: "Compra porque se apaixona", weights: { P2: 3 } }
    ]
  },
  {
    id: 3,
    text: "Quanto tempo você passa pesquisando preços?",
    image: "https://i.ibb.co/wqzQFPf/3.webp",
    options: [
      { id: "3a", label: "Menos de 30 minutos por dia", weights: { P4: 3, P2: 1 } },
      { id: "3b", label: "Entre 30 e 60 minutos", weights: { P1: 3 } },
      { id: "3c", label: "Mais de 1 hora por dia", weights: { P3: 3 } }
    ]
  },
  {
    id: 4,
    text: "Você já comprou algo e depois percebeu que não precisava?",
    image: "https://i.ibb.co/ZzSMhNLD/4.png",
    options: [
      { id: "4a", label: "Sim, mais de uma vez", weights: { P2: 3, P3: 2 } },
      { id: "4b", label: "Poucas vezes", weights: { P4: 3, P1: 1 } },
      { id: "4c", label: "Ainda não aconteceu", weights: { P1: 3 } }
    ]
  },
  {
    id: 5,
    text: "Como você decide o que é essencial no enxoval?",
    image: "https://i.ibb.co/YBtGq4ND/5.webp",
    options: [
      { id: "5a", label: "Uso listas confiáveis", weights: { P1: 3, P4: 1 } },
      { id: "5b", label: "Peço indicação", weights: { P3: 2, P4: 2 } },
      { id: "5c", label: "Vou pelo que sinto", weights: { P2: 3 } }
    ]
  },
  {
    id: 6,
    text: "Você sabe em que fase da gravidez comprar cada coisa?",
    image: "https://i.ibb.co/1fkH8BqR/6.webp",
    options: [
      { id: "6a", label: "Sim, tenho um planejamento", weights: { P1: 3 } },
      { id: "6b", label: "Mais ou menos", weights: { P4: 3, P3: 1 } },
      { id: "6c", label: "Não faço ideia", weights: { P2: 2, P3: 2 } }
    ]
  },
  {
    id: 7,
    text: "Hoje, como você organiza seus gastos?",
    image: "https://i.ibb.co/G4spBfzF/7.webp",
    options: [
      { id: "7a", label: "Planilha ou aplicativo", weights: { P1: 3 } },
      { id: "7b", label: "Anotações no celular", weights: { P4: 3 } },
      { id: "7c", label: "Não organizo", weights: { P2: 3, P3: 2 } }
    ]
  },
  {
    id: 8,
    text: "Você separou uma reserva para imprevistos?",
    image: "https://i.ibb.co/m5z9p4Rn/8.webp",
    options: [
      { id: "8a", label: "Sim, já tenho", weights: { P1: 3 } },
      { id: "8b", label: "Um pouco", weights: { P4: 3 } },
      { id: "8c", label: "Ainda não", weights: { P2: 2, P3: 3 } }
    ]
  },
  {
    id: 9,
    text: "Quando pensa no enxoval, você sente mais:",
    image: "https://i.ibb.co/ccPqmXDT/9.jpg",
    options: [
      { id: "9a", label: "Tranquilidade", weights: { P1: 3, P4: 1 } },
      { id: "9b", label: "Ansiedade", weights: { P3: 3 } },
      { id: "9c", label: "Confusão", weights: { P2: 2, P3: 2 } }
    ]
  },
  {
    id: 10,
    text: "Você tem medo de esquecer algo importante?",
    image: "https://i.ibb.co/8gmQqLb5/10.webp",
    options: [
      { id: "10a", label: "Não, me sinto segura", weights: { P1: 3 } },
      { id: "10b", label: "Às vezes", weights: { P4: 3, P2: 1 } },
      { id: "10c", label: "Sempre", weights: { P3: 3 } }
    ]
  },
  {
    id: 11,
    text: "Como você imagina o seu 8º mês de gestação?",
    image: "https://i.ibb.co/VYj74m8x/11.png",
    options: [
      { id: "11a", label: "Organizada e tranquila", weights: { P1: 3 } },
      { id: "11b", label: "Cansada e preocupada", weights: { P3: 3 } },
      { id: "11c", label: "Resolvendo tudo em cima da hora", weights: { P2: 3, P4: 1 } }
    ]
  },
  {
    id: 12,
    text: "Se existisse uma ferramenta que organizasse tudo para você, usaria?",
    image: "https://i.ibb.co/Kjtnp4wD/12.webp",
    options: [
      { id: "12a", label: "Com certeza", weights: { P3: 3, P4: 3, P1: 1 } },
      { id: "12b", label: "Talvez", weights: { P2: 2 } },
      { id: "12c", label: "Não sei", weights: { P2: 1 } }
    ]
  },
  {
    id: 13,
    text: "O que é mais importante para você agora?",
    image: "https://i.ibb.co/xqmG2Bz4/13.webp",
    options: [
      { id: "13a", label: "Segurança financeira", weights: { P1: 3 } },
      { id: "13b", label: "Liberdade para escolher", weights: { P2: 3 } },
      { id: "13c", label: "Praticidade", weights: { P4: 3, P3: 1 } }
    ]
  },
  {
    id: 14,
    text: "Se pudesse economizar sem perder qualidade, você:",
    image: "https://i.ibb.co/3m1GSMKV/14.jpg",
    options: [
      { id: "14a", label: "Começaria hoje", weights: { P1: 3, P4: 3 } },
      { id: "14b", label: "Pensaria melhor", weights: { P3: 2 } },
      { id: "14c", label: "Duvidaria", weights: { P2: 2 } }
    ]
  }
];

export const feedbacks: Record<number, { text: string; subtext: string }> = {
  4: { text: "Você está indo super bem 💗", subtext: "Falta pouco." },
  8: { text: "Metade do caminho ✨", subtext: "Continue, está valendo a pena." },
  11: { text: "Últimas perguntas 💗", subtext: "Você está quase lá." }
};

export const profiles = {
  P1: {
    id: 'P1',
    icon: '🌸',
    title: 'Mãe Planejadora Consciente',
    text: 'Você já tem algo muito valioso: clareza.\n\nSabe analisar, comparar e pensar no futuro. Isso mostra o quanto você se importa com o seu bebê e com sua tranquilidade.\n\nCom o método certo, você pode transformar organização em ainda mais segurança e leveza.',
    diagnostics: [
      { label: 'Organização', value: 4, max: 5 },
      { label: 'Economia', value: 4, max: 5 },
      { label: 'Tranquilidade', value: 4, max: 5 }
    ],
    cta: 'Quero potencializar meu planejamento'
  },
  P2: {
    id: 'P2',
    icon: '💗',
    title: 'Mãe Amorosa Impulsiva',
    text: 'Seu amor transborda em cada escolha.\n\nVocê se encanta, se envolve e quer dar o melhor para o seu bebê. Isso é lindo.\n\nAgora, chegou a hora de transformar esse carinho em decisões que também cuidam de você.',
    diagnostics: [
      { label: 'Organização', value: 3, max: 5 },
      { label: 'Economia', value: 3, max: 5 },
      { label: 'Emoção', value: 5, max: 5 }
    ],
    cta: 'Quero comprar com mais consciência'
  },
  P3: {
    id: 'P3',
    icon: '🌼',
    title: 'Mãe Ansiosa Sobrecarregada',
    text: 'Você está se esforçando muito para fazer tudo certo.\n\nPesquisa, compara, pensa, repensa… e mesmo assim sente insegurança.\n\nNão é falta de capacidade. É excesso de informação sem direção.\n\nVocê merece leveza.',
    diagnostics: [
      { label: 'Organização', value: 2, max: 5 },
      { label: 'Estresse', value: 5, max: 5 },
      { label: 'Cansaço mental', value: 5, max: 5 }
    ],
    cta: 'Quero simplificar minha jornada'
  },
  P4: {
    id: 'P4',
    icon: '🌷',
    title: 'Mãe Prática em Construção',
    text: 'Você quer acertar.\n\nBusca informação, tenta se organizar e aprende todos os dias.\n\nCom um caminho claro, você vai ganhar confiança e tranquilidade rapidamente.',
    diagnostics: [
      { label: 'Organização', value: 3, max: 5 },
      { label: 'Potencial', value: 5, max: 5 },
      { label: 'Segurança', value: 2, max: 5 }
    ],
    cta: 'Quero meu plano personalizado'
  }
};

export const config = {
  finalCtaLink: "https://pay.cakto.com.br/kbed3td_798221",
  theme: {
    colors: {
      pink: '#F6C1CC',
      blue: '#CFE8F3',
      beige: '#FFF6ED',
      mint: '#DFF1EA',
      gray: '#6B6B6B',
      text: '#4A4A4A'
    }
  }
};
