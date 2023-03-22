import { AccessInfo } from "./AccessInfo.model";
import { VolumeInfo } from "./VolumeInfo.model";

export class Items{
     volumeInfo:VolumeInfo=new VolumeInfo();
     accessInfo:AccessInfo=new AccessInfo();
     userName!:any;
     book_id!:number;
     constructor(){

     }

}