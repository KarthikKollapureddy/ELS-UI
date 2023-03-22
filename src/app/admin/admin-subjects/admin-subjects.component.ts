import { Component, OnInit } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { AdminServiceService } from '../../../services/admin-service.service';
import { Grade } from '../../../model/grade';
import { Subject } from '../../../model/subject';
import { MainserviceService } from 'src/services/mainservice.service';

@Component({
  selector: 'app-admin-subjects',
  templateUrl: './admin-subjects.component.html',
  styleUrls: ['./admin-subjects.component.css']
})
export class AdminSubjectsComponent implements OnInit{
  public loggedIn =false;
  subjects:any;
  msg ="";
  newSubject = new Subject();
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private route:ActivatedRoute,private ms:MainserviceService,private adminservice:AdminServiceService,private router:Router,private snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.loggedIn = this.ms.isLoggedIn();
    this.adminservice.getSubData().subscribe(
      data=>{
      //   var myJsonString = JSON.stringify(data);
      //   var myJsonObject = JSON.parse(myJsonString);
      //   for (let index = 0; index < myJsonObject.length - 1; index++) {
      //      var getGradName = myJsonObject[index].gradName;

      //      var obj = {};
      //      var myjsString = JSON.stringify(obj);
      //      var myObject = JSON.parse(myjsString);
      //      myObject.gradName = getGradName;
          
          
      // }
           this.subjects=data;
      
    },
      error=>{
       this.msg="Empty";
        console.log("Not found");
        
        
      }

      

    )
   
  }
  i=0;
  id=this.route.snapshot.paramMap.get('userName');

 sub =new Subject();
 name!:string;

 add(){
  if(
    this.sub.subjectName === null ||
    
    this.sub.subjectName === undefined ||
    
    this.sub.subjectName === ''){
      alert("Please enter required details");
    }
    this.ngOnInit()
  this.adminservice.addSub(this.sub).subscribe(
    data=>{
      console.log("response received....");
      // this.router.navigate(['adminSub',this.id]);
      this.ngOnInit();
      this.snackBar.open("Successfully added!!","X",{duration:this.durationInSeconds*1000,horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition})
      
    },
    error=>{
      console.log("error occured...");
      this.ngOnInit();
      this.snackBar.open("This subject already exists !!Try with adding different subject","X",{duration:this.durationInSeconds*1000,horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition})
     
      
    }

  )
}

edit(subjectId : number){
  console.log(subjectId);
  
  if(
    this.newSubject.subjectName === null ||
    
    this.newSubject.subjectName === undefined ||
    
    this.newSubject.subjectName === ''){
      alert("Please enter required details");
    }

    this.newSubject.subjectId=subjectId;
    console.log(this.newSubject);
    
  this.adminservice.editSubject(subjectId,this.newSubject).subscribe(
    data=>{
      console.log("response received....");
      // this.router.navigate(['adminSub',this.id]);
      this.ngOnInit();
      this.snackBar.open("Successfully added!!","X",{duration:this.durationInSeconds*1000,horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition})
        this.ngOnInit();
      
    },
    error=>{
      console.log(error);
      
      console.log("error occured...");
      // this.router.navigate(['adminSub',this.id]);
      this.ngOnInit();
      this.snackBar.open(error["error"],"X",{duration:this.durationInSeconds*1000,horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition})
        this.ngOnInit()
     
      
    }
    

  )
}

delete(subId : number){
  
  this.adminservice.deleteSubject(subId).subscribe(
    data=>{
      console.log("response received....");
      this.ngOnInit();
      this.snackBar.open("Successfully deleted!!","X",{duration:this.durationInSeconds*1000,horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition})
      
    },
    error=>{
      console.log(error);
      
      console.log("error occured...");
      this.ngOnInit();
      this.snackBar.open("Problem occured!","X",{duration:this.durationInSeconds*1000,horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition})
     
      
    }
    

  )
}

}
