import {Component, OnInit} from '@angular/core';
import {Character} from '../../shared/model/character';
import {DEPUTY, MEMBERS, ROLES} from '../../shared/model/dump';
import {Role} from '../../shared/model/role';

@Component({
  selector: 'sheriff-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {

  characters: Character[];
  roles: Role[];

  constructor() {
    this.characters = [];
    this.initCharacter()
    this.roles = ROLES;
  }

  ngOnInit(): void {
  }

  initCharacter(): void {

    for (const member of MEMBERS) {
      this.characters.push(new Character(new Date().getTime() + '', member, null, [], false))
    }
    this.characters[2].isDied = true;
    this.characters[2].role = DEPUTY;
  }

}
