import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Group } from '../model/group.model';

@Injectable({
  providedIn: 'root'
})
export class TrainerServiceService {
  userName = localStorage.getItem('uname')
  deleteGroup(groupId: number):Observable<any>{
    let url=this.baseUrl+'/group/'+groupId;
    return this.http.delete(url);
    
  }

  
 
  getClassData(groupId: any):Observable<any> {
    let url=this.baseUrl+'/groupbyid/'+groupId;
    return this.http.get(url);
  }

  getGroupData(id: any):Observable<any> {
    let url="http://localhost:9093/elearning/api/trainer/group/"+this.userName;
    return this.http.get(url);
  }

  private baseUrl='http://localhost:9093/elearning/api/trainer';
  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router) { }

  public insertGroup(group:Group):Observable<any>{
    let url="http://localhost:9093/elearning/api/trainer/addgroup";
    return this.http.post(url,group);
  }

  public editGroup(gr:Group,id:number):Observable<any>{
    let url=this.baseUrl+'/group/'+id;
    return this.http.put(url,gr);
  }

  


}
