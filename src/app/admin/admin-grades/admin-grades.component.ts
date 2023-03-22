import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../../../services/admin-service.service';
import { Grade } from '../../../model/grade';
import { MainserviceService } from 'src/services/mainservice.service';


@Component({
  selector: 'app-admin-grades',
  templateUrl: './admin-grades.component.html',
  styleUrls: ['./admin-grades.component.css']
})
export class AdminGradesComponent implements OnInit{
  public loggedIn =false;
  grades:Grade[]=[];
  image="";
  msg ="";
  val='';
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private route:ActivatedRoute,private ms:MainserviceService,private adminservice:AdminServiceService,private router:Router,private snackBar: MatSnackBar){
   this.fetchData();
  }

fetchData(){
  this.adminservice.getGradData().subscribe(
    data=>{
      console.log(data);
      
    this.grades=data;  
    console.log(this.grades.length);
    
    if(
      this.grades.length==0||this.grades.length==null
    ){
      this.image="assets/img/empty.jpg"
    }
    else{
      this.image="assets/img/grades.jpeg"
    }
    
  },
    error=>{
      if(
        this.grades.length==0||this.grades.length==null
      ){
        this.image="assets/img/empty.jpg"
      }
      else{
        this.image="assets/img/grades.jpeg"
      }
      // this.ngOnInit()
      console.log(error["error"]+" from backend");
      this.msg="Empty";       
    }
  )
  console.log(this.grades);
  if(this.grades.length==0){
    this.image="assets/img/empty.jpg"
  }
  
  
}

  ngOnInit(): void {
    this.fetchData();
    this.loggedIn = this.ms.isLoggedIn();
  
    
    
   
  }
  i=0;
  id=this.route.snapshot.paramMap.get('userName');

 grade = new Grade;
 newgrade = new Grade();
 name!:string;

 add(){
  
  if(
    this.grade.gradeName === null ||
    
    this.grade.gradeName === undefined ||
    
    this.grade.gradeName === ''){
      alert("Please enter required details");
    }
    else{
    this.adminservice.addGrade(this.grade).subscribe(
    data=>{
      this.ngOnInit();
      console.log(this.grade);
      this.val="modal"
      console.log("response received....");
      // this.router.navigate(['adminGrad',this.id]);
      
      this.snackBar.open("Successfully added!!","X",{duration:this.durationInSeconds*1000,horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition})
        this.ngOnInit();
      
    
    },
  
    error=>{
      console.log("error occured...");
      this.ngOnInit();
      this.snackBar.open("This grade already exists !!Try with adding different grade","X",{duration:this.durationInSeconds*1000,horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition})
     
      
    }

  )
    }
}

refresh(){
  this.ngOnInit();
  this.fetchData();
}

edit(gradId : number){
  if(
    this.newgrade.gradeName === null ||
    
    this.newgrade.gradeName === undefined ||
    
    this.newgrade.gradeName === ''){
      alert("Please enter required details");
    }
    else{
    this.newgrade.gradeId=gradId;
  this.adminservice.editGrade(gradId,this.newgrade).subscribe(
    data=>{
      // this.ngOnInit();
      console.log(data);
      
      console.log("response received....");
      // this.router.navigate(['adminGrad',this.id]);
      this.snackBar.open("Successfully edited!!","X",{duration:this.durationInSeconds*1000,horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition})
      
      
    },
    error=>{
      console.log("error occured...");
      this.router.navigate(['adminGrad',this.id]);
      this.ngOnInit();
      this.snackBar.open("This grade already exists !!Try with adding different grade","X",{duration:this.durationInSeconds*1000,horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition})
     
      
    }
    

  )
    }
}

delete(gradId : number){
  
  this.adminservice.deleteGrade(gradId).subscribe(
    data=>{
      console.log("response received....");
      this.fetchData()
      this.snackBar.open(data["message"],"X",{duration:this.durationInSeconds*1000,horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition})
        
      
    },
    error=>{
      console.log(error["error"]);
      this.fetchData()
      this.snackBar.open(error["error"],"X",{duration:this.durationInSeconds*1000,horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition})
     
      
    }
    

  )
}





}
