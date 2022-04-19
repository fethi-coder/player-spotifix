import { PlaylistService } from './../../common/service/playlist.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  
  imageLogo: string ="../../assets/image/SPOTIFIX .png"
  imageMenu: string ="../../assets/image/menu.svg"
menuAlt:string="logo pour ouvrir le menu et le fermer"
altLogo:string="logo fond vert ou il y a écrit spotifix en noir"
  largeur: boolean =true;
arrayPlaylist:any=[]

  constructor(private service:PlaylistService) { }

  ngOnInit(): void {
    const data$ = new Observable(observer => {
        setInterval(() => {
          observer.next(this.arrayPlaylist = JSON.parse(localStorage.getItem('heart') || '{}'))
          observer.complete()
        }, 600)
    })
    data$.subscribe({
      next: value => console.log(value),
      error: err => console.error(err),
      complete: () => console.log('complete')
    });
console.log(this.arrayPlaylist);
    this.openBtn()
  }


  openBtn(){
    if(this.largeur == true){
      this.largeur = false
    }else{
      this.largeur = true
    }
  }



}
