import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterSelectionService {
  private playerCharacterSubject = new BehaviorSubject<Character | null>(null);
  private opponentCharacterSubject = new BehaviorSubject<Character | null>(
    null
  );

  playerCharacter$ = this.playerCharacterSubject.asObservable();
  opponentCharacter$ = this.opponentCharacterSubject.asObservable();
  setPlayerCharacter(char: Character) {
    this.playerCharacterSubject.next(char);
  }

  setOpponentCharacter(char: Character) {
    this.opponentCharacterSubject.next(char);
  }

  removePlayerCharacter() {
    this.playerCharacterSubject.next(null);
  }

  removeOpponentCharacter() {
    this.opponentCharacterSubject.next(null);
  }

  getPlayerCharacter() {
    return this.playerCharacterSubject.getValue();
  }

  getOpponentCharacter() {
    return this.opponentCharacterSubject.getValue();
  }
}
