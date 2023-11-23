import { PlaylistService } from './../common/service/playlist.service';
import { TrackService } from './../common/service/track.service';
import { SpotifyService } from './../common/service/spotify.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routes } from 'src/common/app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchMusicComponent } from './search-music/search-music.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { PlayerSpotifyComponent } from './player-spotify/player-spotify.component';
import { PlayerHeartComponent } from './player-heart/player-heart.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    CategoryComponent,
    SearchMusicComponent,
    PlayerSpotifyComponent,
    PlayerHeartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    SpotifyService,
    TrackService,
    PlaylistService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
