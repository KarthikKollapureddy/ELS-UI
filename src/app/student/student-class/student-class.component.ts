import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MainserviceService } from 'src/services/mainservice.service';
import { StudentServiceService } from 'src/services/student-service.service';
import { TrainerServiceService } from 'src/services/trainer-service.service';
import { AdminServiceService } from '../../../services/admin-service.service';
// import { MainserviceService } from '../mainservice.service';
// import { StudentServiceService } from '../student-service.service';
// import { TrainerServiceService } from '../trainer-service.service';

@Component({
  selector: 'app-student-class',
  templateUrl: './student-class.component.html',
  styleUrls: ['./student-class.component.css']
})
export class StudentClassComponent implements OnInit{
  public loggedIn:any;
  public id:any;
  public groupId:any;
  public class:any;
  public grade:any;
  public sub:any;
  public stud:any;
 
  constructor(private route:ActivatedRoute,private ms:MainserviceService,private fb: FormBuilder,private as:AdminServiceService,private ss:StudentServiceService,private ts:TrainerServiceService){
  
  }
  ngOnInit(): void {
    this.loggedIn = this.ms.isLoggedIn();
    this.id=this.route.snapshot.paramMap.get('userId');
    this.groupId=this.route.snapshot.paramMap.get('groupId');
    this.ts.getClassData(this.groupId).subscribe(
      data=>{
          this.class=data;
          this.as.getGrade(this.class.groupGrad).subscribe(
            data=>{
                 this.grade=data;
                 console.log(data);
            },
            error=>{
              console.log(error);
            }
          )

          this.as.getSub(this.class.groupSub).subscribe(
            data=>{
              this.sub=data;
              console.log(data);
            },
            error=>{
              console.log(error)
      
            }
          )
          
      },
      error=>{
        console.log(error);
      }
    )

    this.ss.getStudentData(this.id,this.groupId).subscribe(
      data=>{
        this.stud=data;
      },
      error=>{

      }
    )
  }

  deleteStud(studId:number){
    this.ss.deleteStudent(studId).subscribe(
      data=>{

      },
      error=>{

      }
    )
  }

}
