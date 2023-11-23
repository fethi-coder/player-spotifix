import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  url: string ="https://api.spotify.com/v1/search?q=artist%3A"
  artist: string ="&type=track&locale=fr"
  apiToken: any =""

  constructor(private http:HttpClient) { }

  private header = {
    headers: new HttpHeaders({
      "Accept": "application/json", 
      "Content-Type":"application/json" ,
      "Authorization": "Bearer " + sessionStorage.getItem('token')
    
    }),
  };

getSearchSpotify(event:any){
return  this.http.get<any>(this.url+event+this.artist,this.header)
}


}
