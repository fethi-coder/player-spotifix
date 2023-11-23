import { SearchMusicComponent } from './../app/search-music/search-music.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './../app/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:"home",component:HomeComponent},
  {path:"search",component:SearchMusicComponent},
  {path:"**",component:HomeComponent}
];


export {routes} 
