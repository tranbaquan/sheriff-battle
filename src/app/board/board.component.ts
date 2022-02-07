import {Component, OnInit} from '@angular/core';
import {faPlus, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {Board} from '../../shared/model/board';
import {Router} from '@angular/router';

@Component({
  selector: 'sheriff-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  faUserPlus = faUserPlus;
  faPlus = faPlus;

  newBoard: Board | null;
  boards: Board[];

  constructor(private router: Router) {
    this.newBoard = null;
    this.boards = [];
  }


  ngOnInit(): void {
  }

  createBoard(): void {
    this.newBoard = new Board(new Date().getTime().toString(), '', '', [], [], []);
  }

  saveBoard(): void {
    this.boards.push(this.newBoard!)
    this.newBoard = null;
  }

  goToBoard(board: Board): void {
    this.router.navigate(['board', board.id]).then(() => {});
  }
}
