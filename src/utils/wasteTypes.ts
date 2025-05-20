
export interface WasteType {
  id: string;
  name: string;
  description: string;
  pointsPerKg: number;
  color: string;
  icon: string; // We'll use this for display purposes
}

export const wasteTypes: WasteType[] = [
  {
    id: "plastic",
    name: "Plástico",
    description: "Embalagens de plástico, garrafas PET, sacos plásticos",
    pointsPerKg: 10,
    color: "bg-blue-500",
    icon: "🥤",
  },
  {
    id: "paper",
    name: "Papel",
    description: "Jornais, revistas, caixas de papelão, papel de escritório",
    pointsPerKg: 7,
    color: "bg-yellow-500",
    icon: "📰",
  },
  {
    id: "glass",
    name: "Vidro",
    description: "Garrafas, frascos, potes de vidro",
    pointsPerKg: 5,
    color: "bg-green-500",
    icon: "🍶",
  },
  {
    id: "metal",
    name: "Metal",
    description: "Latas de alumínio, tampas metálicas, embalagens de metal",
    pointsPerKg: 12,
    color: "bg-gray-500",
    icon: "🥫",
  },
  {
    id: "electronic",
    name: "Eletrônico",
    description: "Pequenos equipamentos eletrônicos, pilhas, baterias",
    pointsPerKg: 20,
    color: "bg-red-500",
    icon: "🔋",
  },
  {
    id: "organic",
    name: "Orgânico",
    description: "Resíduos de comida, folhas, materiais compostáveis",
    pointsPerKg: 3,
    color: "bg-brown-500",
    icon: "🍎",
  },
];

// Mock user achievements
export const achievements = [
  {
    id: "first_recycle",
    name: "Primeiro Passo Verde",
    description: "Registou o seu primeiro resíduo",
    icon: "🌱",
    completed: true
  },
  {
    id: "plastic_hero",
    name: "Herói do Plástico",
    description: "Reciclou 10kg de plástico",
    icon: "🥤",
    completed: true
  },
  {
    id: "recycling_streak",
    name: "Consistência Verde",
    description: "Reciclou 7 dias consecutivos",
    icon: "🔥",
    completed: false,
    progress: 5,
    total: 7
  },
  {
    id: "variety_master",
    name: "Mestre da Variedade",
    description: "Reciclou todos os tipos de resíduos",
    icon: "♻️",
    completed: false,
    progress: 4,
    total: 6
  },
  {
    id: "planet_saver",
    name: "Salvador do Planeta",
    description: "Reciclou 100kg de resíduos no total",
    icon: "🌍",
    completed: false,
    progress: 42,
    total: 100
  }
];

// Mock rewards that can be redeemed with points
export const rewards = [
  {
    id: "discount_10",
    name: "10% de desconto em lojas parceiras",
    description: "Válido em todas as lojas da rede EcoShop",
    points: 500,
    category: "discount",
    icon: "🏷️"
  },
  {
    id: "plant_tree",
    name: "Plantar uma árvore",
    description: "Doação para um projeto de reflorestamento",
    points: 1000,
    category: "donation",
    icon: "🌳"
  },
  {
    id: "clean_ocean",
    name: "Limpar 1kg de resíduos dos oceanos",
    description: "Parceria com ONG Ocean Cleanup",
    points: 750,
    category: "donation",
    icon: "🌊"
  },
  {
    id: "eco_bag",
    name: "Eco-Bolsa Reutilizável",
    description: "Bolsa sustentável feita de materiais reciclados",
    points: 300,
    category: "product",
    icon: "👜"
  },
  {
    id: "premium_month",
    name: "1 mês de assinatura premium",
    description: "Acesso a recursos exclusivos da plataforma",
    points: 1500,
    category: "service",
    icon: "⭐"
  }
];

// Mock user stats for demonstration
export const userStats = {
  totalPoints: 1250,
  totalRecycled: 42, // in kg
  achievements: 2,
  level: 5,
  impactData: {
    water: 126, // liters of water saved
    energy: 84, // kWh of energy saved
    co2: 25, // kg of CO2 emissions prevented
    trees: 2.1 // equivalent number of trees planted
  }
};
