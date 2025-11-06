import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../services/character.service';
import { CharacterSelectionService } from '../services/character-selection.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent implements OnInit {
  character?: Character;

  constructor(
    private route: ActivatedRoute,
    private service: CharacterService,
    private selectionService: CharacterSelectionService
  ) {}

  chooseFighter() {
    if (!this.character) return;
    this.selectionService.setPlayerCharacter(this.character);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.character = this.service.getById(id);
    });
  }
}
