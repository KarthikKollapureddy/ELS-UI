import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainserviceService } from 'src/services/mainservice.service';
import { RegisterUser } from 'src/model/RegisterUser.model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  nuser!:RegisterUser;
  user!:RegisterUser;
   pass!:string;
   npwd!:string;
   msg='';
   cpwd!:string;
   public id:any;
  constructor(private mainservice:MainserviceService,private route:ActivatedRoute,private router:Router) { }

  
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('userName');
    // this.id=localStorage.getItem('uname');
    console.log(this.id);
    
    let resp=this.mainservice.getUser(this.id);
    resp.subscribe((data)=>{this.user=data;
    console.log(data);
    });
  }

  editPwd(){
    if(this.pass == null || this.npwd == null || this.cpwd == null || this.pass == undefined || this.npwd == undefined || this.cpwd == undefined || this.pass=="" ||this.npwd == "" || this.cpwd == "" ){
      alert("Please fill the details");
    }
    
      if(this.user.pass == this.pass){
        
        if(this.npwd==this.cpwd){
        let res=this.mainservice.editPassword(this.npwd,this.id!);
        res.subscribe((data)=>{
        console.log(data);
        
        // this.nuser=data
        // console.log(this.nuser);
        
        
        },
        error=>{
          console.log(error);
          
        });
        console.log(this.user.role);
        
        if(this.user.role == 1){
        this.router.navigate(['admin/',this.id]);
        }
        if(this.user.role == 2){
          this.router.navigate(['trainer/',this.id]);
        }
          if(this.user.role == 3){
            this.router.navigate(['student/',this.id]);
            }
        }
        else{
          alert("Your new password does not match with confirm password!!!")
        }
      }
      else{
        
        
        console.log("exception occured...");
        this.msg="Please enter correct password...";
        console.log(this.msg);
        
      }
    
  }
}
