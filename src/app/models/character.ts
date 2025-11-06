interface Powers {
  title: string;
  damage: number;
  energyCost: number;
  criticalChance: number;
  hitChance: number;
  selfHeal: boolean;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  image: string;
  gender: string;
  class: string[];
  dodge: number;
  health: number;
  energy: number;
  powers: Powers[];
}
