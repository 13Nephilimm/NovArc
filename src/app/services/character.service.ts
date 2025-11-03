import { Injectable } from '@angular/core';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private characters: Character[] = [
    {
      id: 1,
      name: 'Lyria',
      description:
        'Lyria is a swift and clever mage who uses her speed and magical prowess to outmaneuver enemies. Quick on her feet and deadly with spells, she strikes before opponents can react.',
      image: 'assets/lyria.jpeg',
      class: ['Mage', 'Speedster'],
      dodge: 25,
      health: 100,
      energy: 100,
      powers: [
        {
          title: 'Arcane Slash',
          damage: 30,
          energyCost: 15,
          criticalChance: 20,
          hitChance: 95,
          selfHeal: false,
        },
        {
          title: 'Lightning Dash',
          damage: 40,
          energyCost: 25,
          criticalChance: 15,
          hitChance: 90,
          selfHeal: false,
        },
        {
          title: 'Mystic Recovery',
          damage: 0,
          energyCost: 20,
          criticalChance: 0,
          hitChance: 100,
          selfHeal: true,
        },
      ],
    },
    {
      id: 2,
      name: 'Darian',
      description:
        'A stoic guardian armed with advanced tech and an unbreakable will. Darian blends the resilience of a Sentinel with the ingenuity of an Engineer, standing firm between his allies and danger while deploying powerful defensive gadgets.',
      image: 'assets/character-2.jpeg',
      class: ['Sentinel', 'Engineer'],
      dodge: 10,
      health: 160,
      energy: 70,
      powers: [
        {
          title: 'Titan Shield',
          damage: 0,
          energyCost: 20,
          criticalChance: 0,
          hitChance: 100,
          selfHeal: true,
        },
        {
          title: 'Shock Turret',
          damage: 40,
          energyCost: 25,
          criticalChance: 10,
          hitChance: 85,
          selfHeal: false,
        },
        {
          title: 'Iron Slam',
          damage: 45,
          energyCost: 30,
          criticalChance: 20,
          hitChance: 90,
          selfHeal: false,
        },
      ],
    },
  ];

  getAll(): Character[] {
    return this.characters;
  }

  getById(characterId: number): Character | undefined {
    return this.characters.find((char) => {
      char.id === characterId;
    });
  }
}
