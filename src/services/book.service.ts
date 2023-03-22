import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/model/Books/book.model';
import { Items } from 'src/model/Books/Items.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getBooks(book:string):Observable<any>{
    return this.http.get("http://localhost:8790/books/api/"+book);
  }
  addBook(book:Items){

    return this.http.post("http://localhost:8790/books/api/",book);
  }
  getFavouriteBooks():Observable<Items[]>{
    return this.http.get<Items[]>("http://localhost:8790/books/api/user/"+localStorage.getItem('uname'));
  }
  deleteFromFavouriteList(items:Items):Observable<any>{
    return this.http.delete("http://localhost:8790/books/api/"+items.book_id)
  }
}
