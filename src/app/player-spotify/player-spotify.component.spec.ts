import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSpotifyComponent } from './player-spotify.component';

describe('PlayerSpotifyComponent', () => {
  let component: PlayerSpotifyComponent;
  let fixture: ComponentFixture<PlayerSpotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerSpotifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSpotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
