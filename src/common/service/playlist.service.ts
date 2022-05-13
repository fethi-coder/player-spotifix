import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  playlistHeart: any[] = []

  constructor(){
     let playlistheart = localStorage.getItem('heart')
     if (playlistheart == null) {
       this.playlistHeart = []
     } else {
       this.playlistHeart = JSON.parse(playlistheart)
     }
   }

   saveHeart() {
     localStorage.setItem('heart', JSON.stringify(this.playlistHeart))
   }

 addHeartLocal(event: any ) {
     let foundHeart = this.playlistHeart.find(a => a.id == event.id);
     if (foundHeart != undefined) {
       foundHeart++
     } else {
       this.playlistHeart.push(event)
     }
     this.saveHeart()
  }

  removeFromHeart(event:any) {
     this.playlistHeart = this.playlistHeart.filter(a => a.id !== event.id);
    this.saveHeart()
 }
}
