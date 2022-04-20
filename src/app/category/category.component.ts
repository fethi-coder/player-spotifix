import { PlaylistService } from './../../common/service/playlist.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TrackService } from 'src/common/service/track.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  imageDownload: string = "../../assets/image/download_111133.svg"
  arrayHeart: any = []
  deatailArtist:any=""

  constructor(private service: PlaylistService,private serviceTrack:TrackService) { }


  ngOnInit(): void {
    
    const data$ = new Observable(observer => {
      setInterval(() => {
        observer.next(this.arrayHeart = JSON.parse(localStorage.getItem('heart') || '{}'))
        observer.error()
        observer.complete()
      }, 500)
    })
    data$.subscribe({
      next: value => console.log(value),
      error: err =>{try {
        if(err == undefined ){ this.arrayHeart = []}else{console.log("no error");
        };
      } catch (error) {
        console.error(err)
      }},
      complete: () => console.log('complete')
    }).unsubscribe;
  }

removeHeart(event:any){
  console.log(event);
  
this.service.removeFromHeart(event)
}

sendImage(event:any){
}

sendTrack(event:any){
this.serviceTrack.trackService(event).subscribe(data=>{
  this.serviceTrack
  this.deatailArtist = [data]
})
}

}
