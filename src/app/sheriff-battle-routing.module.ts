import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoardComponent} from './board/board.component';
import {RankingComponent} from './ranking/ranking.component';
import {BattleComponent} from './battle/battle.component';
import {MemberComponent} from './member/member.component';
import {BoardDetailComponent} from './board/board-detail/board-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'board'
  },
  {
    path: 'board',
    component: BoardComponent
  },
  {
    path: 'ranking',
    component: RankingComponent
  },
  {
    path: 'battle',
    component: BattleComponent
  },
  {
    path: 'member',
    component: MemberComponent
  },
  {
    path: 'board/:boardId',
    component: BoardDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SheriffBattleRoutingModule {
}
