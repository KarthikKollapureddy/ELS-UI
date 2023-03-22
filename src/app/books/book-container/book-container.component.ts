import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Book } from 'src/model/Books/book.model';
import { Items } from 'src/model/Books/Items.model';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.css']
})
export class BookContainerComponent {
  constructor(private service:BookService,private snackBar:MatSnackBar)
{

}  @Input()
  itemsList : Items[]=[];

  @Input()
  favCheck :boolean=false;

  addToFavouriteList(items:Items)
  { 
    console.log(items.userName);
    // items[0].userName!="aaaa@aa"
    // console.log(items[0].userName);
    
    // items[0]["userName"]=localStorage.getItem("uname");
    // console.log(items[0]["userName"]);
    items.userName=localStorage.getItem('uname')
    console.log(items.userName);
    
    this.service.addBook(items).subscribe(
      data=>{
      console.log(data);
      // console.log(items[0]["userName"]);
      
      this.snackBar.open(items.volumeInfo.title+'added to favlist', '', {
        duration : 1000
      });
    },error =>{
      // this.snackBar.open(''+ 'Please, Login to add to favorites ',"", {
      //  duration : 3000
      console.log(error);
      
       
     });
    

  }

  deleteBookFav(book: Items ){
    this.service.deleteFromFavouriteList(book).subscribe((data)=>{
    console.log(data);
    console.log("del");
    
  
    this.snackBar.open(book.book_id+' deleted', '', {
      duration : 2000
    });
    },error =>{
      console.log(error);
      console.log(book);
      
      const message=JSON.stringify(error.error.message);
      this.snackBar.open(message, '', {
       duration : 2000
     });
    });
    for( var i=0;i<this.itemsList.length;i++){
      if(this.itemsList[i].book_id===book.book_id){
        this.itemsList.splice(i,1);
      }
    }
    
  }
  
}
