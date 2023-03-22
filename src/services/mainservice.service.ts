import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../model/login';
import { RegisterUser } from 'src/model/RegisterUser.model';
import { Intrest } from 'src/model/Intrest.model';

@Injectable({
  providedIn: 'root'
})



export class MainserviceService {

  token = localStorage.getItem('token');
  
  userName=''
  getUser(id: string):Observable<RegisterUser>{
    let url='http://localhost:9090/elearning/api/na/'+id;
    return this.http.get<RegisterUser>(url);
  }
  saveInterest(intrest:Intrest, ) :Observable<any>{
    // let url=this.baseUrl+'saveInterest/'+id;
    let url="http://localhost:9091/elearning/api/intrest";
    return this.http.post(url,intrest);
  }
  
  public editPassword(npwd:string,userId:string):Observable<any>{
    let headers = new HttpHeaders().set('Authorization',"Bearer "+this.token);
    headers.append('Content-Type', 'application/x-wwww-form-urlencoded');
    console.log(headers);
    
    let url='http://localhost:9090/elearning/api/'+'changePassword/'+userId+"/"+npwd;
    return this.http.patch(url,npwd,{headers});
  }
  

  logout() {
    localStorage.removeItem('token');
    return true;
  }

  private baseUrl='http://localhost:9090/elearning/api/';
  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router) { 
    this.userName != localStorage.getItem("uname");
  }

  login(log:Login):Observable<any>{
    let url=this.baseUrl+'login';
    return this.http.post(url,log);


  }
  public loginUserFromRemote(log:Login):Observable<any>{
    localStorage.setItem("username",log.userName);
    let url=this.baseUrl+'na/login';
    return this.http.post(url,log);



  }

  // public getUserData(userName: string) :Observable<any> {
  //   let token = localStorage.getItem("token");
  //   let headers = new HttpHeaders().set('Authorization',"Bearer "+token);
  //   let url=this.baseUrl+userName;
  //   return this.http.get(url,{headers});
  // }
  
  public getUserData(userName: string,token:string) :Observable<any> {
    let headers = new HttpHeaders().set('Authorization',"Bearer "+token);
    let url="http://localhost:9090/elearning/api/"+userName;
    
    // return this.http.get(url);
    return this.http.get(url,{headers});

  }

  public getInterest(userId: string) :Observable<any> {
    let url="http://localhost:9091/elearning/api/intrest/"+localStorage.getItem('uname');
    return this.http.get(url);

  }
  logUser(token : any){
    localStorage.setItem("token",token);
    return true;
  }
  public registerUserFromRemote(reg:RegisterUser):Observable<any>{
    let url=this.baseUrl+'na/signup';
    return this.http.post(url,reg);
  }

  getToken(){
    return localStorage.getItem("token")
  }
  
  isLoggedIn(){
    let token = localStorage.getItem("token");
  if(token==undefined || token === '' || token == null){
    return false;
  }
  else{
    return true;
  }
  }

}
