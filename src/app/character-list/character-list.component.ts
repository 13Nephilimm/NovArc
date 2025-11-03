import { Component } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { Character } from '../models/character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent {
  characters: Character[] = [];

  constructor(private service: CharacterService, private router: Router) {
    this.characters = this.service.getAll();
  }

  goToDetails(character: Character) {
    this.router.navigate(['/character', character.id]);
  }
}
