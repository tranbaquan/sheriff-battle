import {Character} from './character';

export class Battle {
  id: string;
  boardId: string;
  name: string;
  characters: Character[];


  constructor(id: string, boardId: string, name: string, characters: Character[]) {
    this.id = id;
    this.boardId = boardId;
    this.name = name;
    this.characters = characters;
  }
}
