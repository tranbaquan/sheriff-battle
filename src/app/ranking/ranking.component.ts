import {Component, OnInit} from '@angular/core';
import {faMedal} from '@fortawesome/free-solid-svg-icons';
import {Board} from '../../shared/model/board';
import {CHARACTERS, MEMBERS, RANKING} from '../../shared/model/dump';
import {Battle} from '../../shared/model/battle';

@Component({
  selector: 'sheriff-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  faMedal = faMedal;
  boards: Board[]
  selectedBoard?: string;
  board?: Board;


  constructor() {
    this.boards = [];
    this.initBoard();
  }

  ngOnInit(): void {
  }

  private initBoard(): void {
    this.boards.push(
      new Board('board1', 'Board1', 'quantb', [new Battle('battle-001', 'board1', 'Battle 001', CHARACTERS)], RANKING, MEMBERS)
    )
  }

  boardChange(): void {
    this.board = this.boards.find(b => b.id == this.selectedBoard);
  }
}
