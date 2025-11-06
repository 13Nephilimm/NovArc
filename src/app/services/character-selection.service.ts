import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterSelectionService {
  // what if we initialize them inside constructor, like we do on Router. in which cases do we need constructor and in which cases don't.
  private playerCharacterSubject = new BehaviorSubject<Character | null>(null); // wth is behaviorSubject
  private opponentCharacterSubject = new BehaviorSubject<Character | null>(
    null
  );

  playerCharacter$ = this.playerCharacterSubject.asObservable(); // what does $ do
  opponentCharacter$ = this.opponentCharacterSubject.asObservable(); // what is asObservable

  // as I undestant this functions are for saving current chosen one and edit or remove as well. but what does next() do
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
