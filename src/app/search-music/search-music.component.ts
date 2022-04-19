import { SpotifyService } from './../../common/service/spotify.service';
import { Component,  OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-music',
  templateUrl: './search-music.component.html',
  styleUrls: ['./search-music.component.scss']
})
export class SearchMusicComponent implements OnInit,OnDestroy {
  query:any =''
  image:string=""
  token:string=""
  resultGlobal:any[]=[]
  deatailArtist: any = ""
 

  constructor(private service: SpotifyService) {
   }

  ngOnInit(): void {
    this.resultGlobal =[]
    this.query='sia'
    this.deatailArtist = [{ images: [{ url:"../../assets/image/SPOTIFIX .png"}]}];
  }
ngOnDestroy(): void {
}

 search(){
this.service.getSearchSpotify(this.query).subscribe({
  next:value=>this.resultGlobal = value.tracks.items,
  error:error=>console.error(error),
  complete:()=>console.log("complete")
})
  }

  tokenRecord(event: any){
    sessionStorage.setItem('token',event)
    window.location.reload()
  }

  sendData(event:any){
    let objectGlobal = event
    this.deatailArtist=[objectGlobal.album]
  }
}
