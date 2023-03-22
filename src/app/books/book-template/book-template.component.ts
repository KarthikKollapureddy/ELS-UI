import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccessInfo } from 'src/model/Books/AccessInfo.model';
import { Book } from 'src/model/Books/book.model';
import { Items } from 'src/model/Books/Items.model';
import { VolumeInfo } from 'src/model/Books/VolumeInfo.model';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-book-template',
  templateUrl: './book-template.component.html',
  styleUrls: ['./book-template.component.css']
})
export class BookTemplateComponent {
  
  @Input()
  items:Items=new Items();
  @Output()
  addBook = new EventEmitter();
  @Output()
  deleteFavBook=new EventEmitter();
  @Input()
  favCheck: boolean = false;
  // volumeInfo = new VolumeInfo();
  // accessInfo:AccessInfo[] = [];
  // volumeInfo:VolumeInfo[] = [];
  // items:Items[]=[]
  // search:string="ece"
  // constructor(private service:BookService){

  // }
  
  // ngOnInit(): void {
  //   this.service.getBooks(this.search).subscribe(
  //     data=>{
  //       // this.accessInfo=data["items"][0]["accessInfo"];
  //       // this.volumeInfo=data["items"][0]["volumeInfo"];
  //       // this.book=data["items"];
  //       this.items=data["items"];
  //       console.log(this.items);         
  //     //   let myJson = JSON.parse(JSON.stringify(data["items"][0]["volumeInfo"]))
  //     //  console.log(myJson);
  //     //  this.volumeInfo=myJson;
  //     //  console.log(this.volumeInfo.imageLinks.smallThumbnail);

       
       

       
  //     },
  //     error=>{
  //       console.log(error);
        
  //     }
  //   )
  // }
  addToFavouriteList()
  {
    console.log(this.items);
    
    this.addBook.emit(this.items);
  }
  deleteBookFav(){
    console.log(this.items);
    this.deleteFavBook.emit(this.items);

    }


}
