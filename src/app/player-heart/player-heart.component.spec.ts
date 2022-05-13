import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerHeartComponent } from './player-heart.component';

describe('PlayerHeartComponent', () => {
  let component: PlayerHeartComponent;
  let fixture: ComponentFixture<PlayerHeartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerHeartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerHeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
