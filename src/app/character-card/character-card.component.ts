import { Component } from '@angular/core';
import { Character } from '../models/character';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
})
export class CharacterCardComponent {
  character1 = {
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
        criticalChance: 0.2,
        hitChance: 0.95,
        selfHeal: false,
      },
      {
        title: 'Lightning Dash',
        damage: 40,
        energyCost: 25,
        criticalChance: 0.15,
        hitChance: 0.9,
        selfHeal: false,
      },
      {
        title: 'Mystic Recovery',
        damage: 0,
        energyCost: 20,
        criticalChance: 0,
        hitChance: 1,
        selfHeal: true,
      },
    ],
  };
}
