import { Component } from '@angular/core';
import { Items } from 'src/model/Books/Items.model';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
  itemsList: Items[] = [];
  // items: Array<Items> = [];
  constructor(private service:BookService) { 

    
  }

  ngOnInit() {
    
  }

  onEnter(searchKey:string) {
    this.service.getBooks(searchKey).subscribe(
      data=>{
        
        this.itemsList=data["items"]
        console.log(this.itemsList);
        
      },
      error=>{
        console.log(error);
        
      }
    )
    // this.newsService.searchNews(searchKey).subscribe((data) => {
    //   this.newsList = data['articles'];
    
    // }
    // );
  }
}
