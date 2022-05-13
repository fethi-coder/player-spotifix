import { Data } from "@angular/router";

export class DownloadPlaylist {

    private titre:string;
    private image:string;
    private data:any;

    constructor( titre:string,image:string,data:any){
        this.titre = titre,
        this.image = image,
        this.data = data
    }
}
