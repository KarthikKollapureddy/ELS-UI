import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/model/student';
import { Grade } from '../model/grade';
import { Subject } from '../model/subject';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  
  
  

  private baseUrl='http://localhost:8083/elearning/api/admin';
  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router) { }


  public getGrade(groupGrad: number):Observable<any> {
    let url=this.baseUrl+'/getGrade/'+groupGrad;
    return this.http.get(url);
  }

  public getSub(groupSub: any) :Observable<any>{
    let url=this.baseUrl+'/getSubject/'+groupSub;
    return this.http.get(url);
  }


  public getGradData() :Observable<any> {
    let url="http://localhost:8083/elearning/api/admin"+'/getGrades';
    return this.http.get(url);

  }
  public getData()  : Observable<any>{
    // let url=this.baseUrl+'/getInfo';
    return this.http.get("http://localhost:9090/elearning/api/na/getData");
  }

  public addGrade(grad:Grade):Observable<any>{
    let url=this.baseUrl+'/addGrades';
    return this.http.post(url,grad);
  }
  public deleteGrade(gradId: number) : Observable<any>{
    let url=this.baseUrl+'/deleteGrade/'+gradId;
    return this.http.delete(url);
  }
  editGrade(gradId: number,gradName : Grade):Observable<any> {
    let url=this.baseUrl+'/editGrade/'+gradId;
    return this.http.put(url,gradName);
    
  }
   


  deleteSubject(subId: number):Observable<string> {
    let url=this.baseUrl+'/deleteSub/'+subId;
    return this.http.delete<string>(url);
  }
  editSubject(subId: number,subject : Subject){
    let url=this.baseUrl+'/editSub/'+subId;
    return this.http.put(url,subject);
    
  }

  

  public getSubData() :Observable<any> {
    let url="http://localhost:8083/elearning/api/admin"+'/getSubjects';
    return this.http.get(url);

  }

  public addSub(sub:Subject):Observable<any>{
    let url=this.baseUrl+'/addSubject';
    return this.http.post(url,sub);
  }

}
