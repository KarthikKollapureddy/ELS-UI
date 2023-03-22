import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  deleteStudent(studId:number) {
    let url=this.baseUrl+"/delete/"+studId;
    return this.http.delete(url);
  }
  getStudentData(id: number,groupId:number) :Observable<any> {
    let url=this.baseUrl+"/getStud/"+groupId+'/'+id;
    return this.http.get(url);
  }
  getGroupData(id: number):Observable<any> {
    let url=this.baseUrl+'/joinedClasses/'+id;
    return this.http.get(url);
  }
  
  

  private baseUrl='http://localhost:9092/elearning/api/student';
  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router) { }

  getSuggestions(id:number):Observable<any> {
    let url=this.baseUrl+'/suggestions/'+id;
    return this.http.get(url);
  }

  createStudent(stud:Student):Observable<any>{
    let url=this.baseUrl+'/join/'+stud.userId;
    return this.http.post(url,stud);
  }
}
