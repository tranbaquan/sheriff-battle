import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {SheriffBattleRoutingModule} from './sheriff-battle-routing.module';
import {SheriffBattleComponent} from './sheriff-battle.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BoardComponent} from './board/board.component';
import {RankingComponent} from './ranking/ranking.component';
import {MemberComponent} from './member/member.component';
import {BattleComponent} from './battle/battle.component';
import {FormsModule} from '@angular/forms';
import { BoardDetailComponent } from './board/board-detail/board-detail.component';

@NgModule({
  declarations: [
    SheriffBattleComponent,
    BoardComponent,
    RankingComponent,
    MemberComponent,
    BattleComponent,
    BoardDetailComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    SheriffBattleRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [SheriffBattleComponent]
})
export class SheriffBattleModule { }
