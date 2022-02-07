import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SheriffBattleComponent } from './sheriff-battle.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SheriffBattleComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SheriffBattleComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sheriff-battle'`, () => {
    const fixture = TestBed.createComponent(SheriffBattleComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sheriff-battle');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SheriffBattleComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('sheriff-battle app is running!');
  });
});
