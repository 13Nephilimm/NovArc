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
      image: 'assets/character-1.jpeg',
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
    {
      id: 3,
      name: 'Selara',
      description:
        'Selara is a gentle and kind-hearted mage who wields the power of fire. Calm and wise, she protects her friends and guides them through danger, using her flames to control the battlefield rather than just destroy it.',
      image: 'assets/character-3.jpeg',
      class: ['Elemental', 'Mage'],
      dodge: 20,
      health: 110,
      energy: 120,
      powers: [
        {
          title: 'Flame Barrier',
          damage: 25,
          energyCost: 20,
          criticalChance: 10,
          hitChance: 95,
          selfHeal: true,
        },
        {
          title: 'Blazing Wave',
          damage: 50,
          energyCost: 35,
          criticalChance: 20,
          hitChance: 90,
          selfHeal: false,
        },
        {
          title: 'Ember Bond',
          damage: 0,
          energyCost: 25,
          criticalChance: 0,
          hitChance: 100,
          selfHeal: true,
        },
      ],
    },
    {
      id: 4,
      name: 'Torian',
      description:
        'Torian is a fierce warrior whose raw strength and unshakable determination make him the natural captain of any team. Fearless in battle, he leads by example and inspires his allies to fight with courage.',
      image: 'assets/character-4.jpeg',
      class: ['Berserker'],
      dodge: 10,
      health: 180,
      energy: 80,
      powers: [
        {
          title: 'Titan Strike',
          damage: 60,
          energyCost: 25,
          criticalChance: 25,
          hitChance: 90,
          selfHeal: false,
        },
        {
          title: 'War Cry',
          damage: 0,
          energyCost: 20,
          criticalChance: 0,
          hitChance: 100,
          selfHeal: true,
        },
        {
          title: 'Frenzy Slash',
          damage: 50,
          energyCost: 30,
          criticalChance: 20,
          hitChance: 85,
          selfHeal: false,
        },
      ],
    },
    {
      id: 5,
      name: 'Veyron',
      description:
        'Veyron is a daring cruiser biker, notorious in the underground world. Quick, cunning, and lethal from a distance, he strikes with precision and disappears before anyone can retaliate. A rebel at heart, he trusts only his closest allies.',
      image: 'assets/character-5.jpeg',
      class: ['Ranger', 'Speedster'],
      dodge: 30,
      health: 100,
      energy: 90,
      powers: [
        {
          title: 'Twin Pistols',
          damage: 40,
          energyCost: 20,
          criticalChance: 20,
          hitChance: 90,
          selfHeal: false,
        },
        {
          title: 'Wheel Rush',
          damage: 35,
          energyCost: 25,
          criticalChance: 15,
          hitChance: 95,
          selfHeal: false,
        },
        {
          title: 'Smoke Escape',
          damage: 0,
          energyCost: 15,
          criticalChance: 0,
          hitChance: 100,
          selfHeal: true,
        },
      ],
    },
    {
      id: 6,
      name: 'Kaelin',
      description:
        'Kaelin is a young and curious summoner with a mischievous streak. Anything he defeats in battle can be summoned as an ally, giving him a constantly growing arsenal. Despite his youth, his cunning makes him a valuable strategist on the battlefield.',
      image: 'assets/character-6.jpeg',
      class: ['Summoner'],
      dodge: 20,
      health: 90,
      energy: 130,
      powers: [
        {
          title: 'Summon Healer',
          damage: 0,
          energyCost: 25,
          criticalChance: 0,
          hitChance: 100,
          selfHeal: true,
        },
        {
          title: 'Shadow Strike',
          damage: 35,
          energyCost: 20,
          criticalChance: 20,
          hitChance: 90,
          selfHeal: false,
        },
        {
          title: 'Reanimate Fallen',
          damage: 60,
          energyCost: 80,
          criticalChance: 50,
          hitChance: 50,
          selfHeal: false,
        },
      ],
    },
    {
      id: 7,
      name: 'Tessa',
      description:
        'Tessa is a genius engineer known for her calm focus and unmatched precision. She fights with her inventions rather than brute force, deploying drones and traps to outsmart her enemies while keeping her allies safe.',
      image: 'assets/character-7.jpeg',
      class: ['Engineer'],
      dodge: 15,
      health: 110,
      energy: 120,
      powers: [
        {
          title: 'Auto Drone',
          damage: 35,
          energyCost: 25,
          criticalChance: 10,
          hitChance: 90,
          selfHeal: false,
        },
        {
          title: 'Healing Beacon',
          damage: 0,
          energyCost: 30,
          criticalChance: 0,
          hitChance: 100,
          selfHeal: true,
        },
        {
          title: 'EMP Blast',
          damage: 45,
          energyCost: 35,
          criticalChance: 15,
          hitChance: 85,
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
      return char.id === characterId;
    });
  }
}
