import {Component, OnInit} from '@angular/core';
import {faBars, faGavel, faTrophy, faUserFriends} from '@fortawesome/free-solid-svg-icons';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';

@Component({
  selector: 'sheriff-root',
  templateUrl: './sheriff-battle.component.html',
  styleUrls: ['./sheriff-battle.component.scss'],
  animations: [
    trigger('sidebarToggle', [
      state('expanded', style({width: '300px'})),
      state('collapsed', style({width: '90px'})),
      transition('expanded => collapsed', [
        animate('0.5s')
      ]),
      transition('collapsed => expanded', [
        animate('0.5s')
      ])
    ])
  ]
})
export class SheriffBattleComponent implements OnInit {
  faGavel = faGavel;
  faTrophy = faTrophy;
  faBars = faBars;
  faUserFriends = faUserFriends;

  menuCollapsed: boolean;

  constructor(private router: Router) {
    this.menuCollapsed = false;
  }

  ngOnInit(): void {

  }

  toggleMenu(): void {
    this.menuCollapsed = !this.menuCollapsed;
  }

  isActive(url: string): boolean {
    return this.router.url.includes(url);
  }
}
