import {Member} from './member';

export class Ranking {
  member: Member;
  totalKills: number;
  rank: number;


  constructor(member: Member, totalKills: number, rank: number) {
    this.member = member;
    this.totalKills = totalKills;
    this.rank = rank;
  }
}
