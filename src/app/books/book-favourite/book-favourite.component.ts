import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Items } from 'src/model/Books/Items.model';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-book-favourite',
  templateUrl: './book-favourite.component.html',
  styleUrls: ['./book-favourite.component.css']
})
export class BookFavouriteComponent {

  itemsList:Items[]=[];
  favCheck:boolean=true;

  constructor(private service: BookService, private snackBar : MatSnackBar) {
    // this.items=[]
    
 
   }

  ngOnInit() {
    this.service.getFavouriteBooks().subscribe((data)=>{
      
      console.log(data);
      
      this.itemsList=data
    },
    error =>{
     this.snackBar.open(error['error'], '', {
      duration : 1000
    });
   });

  }

  
}
