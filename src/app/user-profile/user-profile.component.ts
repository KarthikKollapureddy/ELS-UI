import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterUser } from 'src/model/RegisterUser.model';
import { MainserviceService } from 'src/services/mainservice.service';
import { StudentServiceService } from 'src/services/student-service.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private service:MainserviceService){

  }
  userName:any=localStorage.getItem("uname");
  unixTimestamp:any;
  // dob = 1654540200000;
  role= '';
  bDay:any;
  num = 0;
  user:RegisterUser=new RegisterUser;
  ngOnInit(): void {
   this.userName=localStorage.getItem("uname");
   this.getUsr();
  }
 
  getUsr(){
    this.service.getUser(this.userName).subscribe(
      data=>{
        this.user=data;
        if(data['role']==2){
this.role="Trainer"
        }
        if(data['role']==3){
this.role="Student"
        }
        
        this.unixTimestamp=data['dob']

        this.num= this.unixTimestamp;
        let date = new Date(this.num);
        this.bDay = date.toLocaleDateString("en-US");
        
        
        

        
        this.user=data;
      }
    )
  }

}
