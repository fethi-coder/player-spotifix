import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { ArtitsHeart } from 'src/common/class/artits-heart';
import { PlaylistService } from 'src/common/service/playlist.service';
import { TrackService } from 'src/common/service/track.service';

@Component({
  selector: 'app-player-heart',
  templateUrl: './player-heart.component.html',
  styleUrls: ['./player-heart.component.scss']
})
export class PlayerHeartComponent implements OnInit {

  current: number = 0
  duration: any = "00:00"
  @Input() data: any
  newArray: any = [{ images: [{ url: "../../assets/image/SPOTIFIX .png" }] }];
  altDesc: any = "artist"
  track: any = ""
  allMusique: any = []
  audio = new Audio();
  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ];

  constructor(private serviceTrack: TrackService, private serviceHeart: PlaylistService) {
  }

  ngOnInit(): void {
    this.sendHeart
  }

  /*------------------------------------------------------------------------------------------------------chargement des morceaux-------------------------------------------------------------------*/
  stream() {
    return new Observable(() => {
      this.audio.load()
      this.audio.src = this.track
      this.audio.play()


      const handler = () => {
        this.current = this.audio.currentTime
        this.duration = this.format(this.audio.duration - this.audio.currentTime)
      }

      this.addEvent(this.audio, this.audioEvents, handler);

      return () => {
        this.audio.pause();
        this.audio.currentTime = 0
        this.removeEvent(this.audio, this.audioEvents, handler)
      }
    })
  }

  addEvent(obj: any, audioEvents: any, handler: any) {
    audioEvents.forEach((el: any) => {
      obj.addEventListener(el, handler)
    });
  }

  setSeek(event: any) {
    this.audio.currentTime = event.target.value
  }

  pause() {
    this.audio.pause()
  }

  stop() {
    this.audio.pause()
    this.audio.currentTime = 0
  }

  removeEvent(obj: any, events: any, handler: any) {
    events.array.forEach((el: any) => {
      obj.removeEventListener(el, handler)
    });
  }

  setVolume(event: any) {
    this.audio.volume = event.target.value
  }

  /*-------------------------------------------------------------------------------------------timer du player---------------------------------------------------------------*/
  format(time: number, format = "mm:ss") {
    const momentTime = time * 1000
    return moment.utc(momentTime).format(format)
  }

  /*-------------------------------------------------------------------------------------------------play---------------------------------------------------------------------*/
  trackOne(event: Observable<any>) {
    if (event != null) {
      this.serviceTrack.trackService(event).subscribe(data => {
        let elementOneTitle = data.tracks.items[0].preview_url;
        this.track = elementOneTitle
        this.stream().subscribe(() => { })
        this.audio.play()
      }).unsubscribe
    } else {
      alert('vous devez choisir un artiste')
    }
  }

  /*---------------------------------------------------------------------------------------------coup de coeur ----------------------------------------------------------*/
  sendHeart(event: any) {
    let artiste
    artiste = new ArtitsHeart(event.id, event.name, event.images[0].url, event.uri)
    this.serviceHeart.addHeartLocal(artiste)
    console.log(artiste);
  }


}
