import {Component, OnInit} from '@angular/core';
import {Battle} from '../../../shared/model/battle';
import {ActivatedRoute} from '@angular/router';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {Board} from '../../../shared/model/board';

@Component({
  selector: 'sheriff-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.scss']
})
export class BoardDetailComponent implements OnInit {
  faPlus = faPlus;

  battles: Battle[];
  newBattle: Battle | null;
  boardId: string | null;

  constructor(private route: ActivatedRoute) {
    this.battles = [];
    this.newBattle = null;
    this.boardId = this.route.snapshot.paramMap.get('boardId');
  }

  ngOnInit(): void {
  }

  createBattle(): void {
    this.newBattle = new Battle(new Date().getTime().toString(), this.boardId!, '', []);
  }

  saveBattle(): void {
    this.battles.unshift(this.newBattle!);
    this.newBattle = null;
  }
}
