import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  url: any ="https://api.spotify.com/v1/albums/"

  constructor(private track:HttpClient) { }

  private header = {
    headers: new HttpHeaders({
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + sessionStorage.getItem('token')
    }),
  };

trackService(event:any){
    return this.track.get<any>(this.url + event, this.header)
}

}
