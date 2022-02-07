import {Battle} from './battle';
import {Ranking} from './ranking';
import {Character} from './character';
import {Member} from './member';

export class Board {
  id: string;
  name: string;
  userId: string;
  battles: Battle[];
  ranks: Ranking[];
  members: Member[];


  constructor(id: string, name: string, userId: string, battles: Battle[], ranks: Ranking[], members: Member[]) {
    this.id = id;
    this.name = name;
    this.userId = userId;
    this.battles = battles;
    this.ranks = ranks;
    this.members = members;
  }

  addMember(member: Member): void {
    this.members.push(member);
  }

  removeMember(id: string): void {
    this.members = this.members.filter(member => member.id != id);
  }

  addBattle(battle: Battle): void {
    this.battles.push(battle);
  }

  removeBattle(id: string): void {
    this.battles = this.battles.filter(battle => battle.id != id);
  }

  updateRank(): void {

  }
}
