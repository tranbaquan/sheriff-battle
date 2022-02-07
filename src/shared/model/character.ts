import {Role} from './role';
import {Member} from './member';

export class Character {
  id: string;
  member: Member;
  role: Role | null;
  killedMembers: Member[];
  isDied: boolean;


  constructor(id: string, member: Member, role: Role | null, killedMembers: Member[], isDied: boolean) {
    this.id = id;
    this.member = member;
    this.role = role;
    this.killedMembers = killedMembers;
    this.isDied = isDied;
  }
}
