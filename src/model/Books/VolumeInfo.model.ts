import { ImageLinks } from "./ImageLinks.model";

export class VolumeInfo{
    title:string='';
    subtitle:string='';
    authors:any='';
    description:string='';
    publishedDate:string=''
    language:string='';
    pageCount:number=0;
    imageLinks:ImageLinks=new ImageLinks();
    previewLink:string='';
    infoLink:string='';
    canonicalVolumeLink:string='';

    constructor(){
        
    }
}