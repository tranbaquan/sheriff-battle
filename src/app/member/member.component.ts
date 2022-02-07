import {Component, OnInit} from '@angular/core';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {Member} from '../../shared/model/member';

@Component({
  selector: 'sheriff-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  faPlus = faPlus;

  members: Member[];
  newMember: Member | null;

  constructor() {
    this.members = [];
    this.newMember = null;
  }

  ngOnInit(): void {
  }

  saveMember(): void {
    this.members.unshift(this.newMember!);
    this.newMember = null;
  }

  createMember(): void {
    this.newMember = new Member(new Date().getTime().toString(), '', '');
  }
}
