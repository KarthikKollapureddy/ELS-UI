import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../../../services/admin-service.service';
import { Group } from '../../../model/group.model';
import { MainserviceService } from 'src/services/mainservice.service';
import { TrainerServiceService } from 'src/services/trainer-service.service';
import { Intrest } from 'src/model/Intrest.model';
import { Subject } from 'src/model/subject';
import { Grade } from 'src/model/grade';
// import { MainserviceService } from '../mainservice.service';
// import { TrainerServiceService } from '../trainer-service.service';

@Component({
  selector: 'app-trainer-home',
  templateUrl: './trainer-home.component.html',
  styleUrls: ['./trainer-home.component.css']
})
export class TrainerHomeComponent implements OnInit{
  public loggedIn =false;
  public id:any;
  username=localStorage.getItem('uname')
  msg:boolean | undefined;
  btn:boolean=true;
  arr =["abcd","qrst","qrstui"];
  group = new Group
  grades1:Grade[] = []
  subjects:Subject[] =[];
  grades : any;
  intrest = new Intrest;
  newIntrest = new Intrest;
  constructor(private route:ActivatedRoute,private ms:MainserviceService,private fb: FormBuilder,private as:AdminServiceService,private ts:TrainerServiceService,private router:Router){
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.maxLength(1)]),
      
    });

    
  }
  
  
  ngOnInit(): void {
    
    this.loggedIn = this.ms.isLoggedIn();
    this.id=this.route.snapshot.paramMap.get('userId');
   
    this.ms.getInterest(this.id).subscribe(

      data=>{
        //  this.msg=data;
        this.intrest= data;
        console.log(this.intrest);
        if(this.intrest==null){
          this.msg=true;
          // this.as.getSubData().subscribe(
          //   data=>{
          //     this.subjects=data;
          //     console.log(data);
              
          //   },
          //   error=>{
          //     console.log(error);
              
          //   }
          // )
          
        }else{
          this.msg=false;
        }
        
       
      },
      error=>{
         console.log(error);
      }
      

    )

    
  }
   selectedItems!:any[];
   
  form: FormGroup;
  // Data: Array<any> = [
  //   { name: 'Pear', value: 'pear' },
  //   { name: 'Plum', value: 'plum' },
  //   { name: 'Kiwi', value: 'kiwi' },
  //   { name: 'Apple', value: 'apple' },
  //   { name: 'Lime', value: 'lime' },
  // ];
  
  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
     checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
         checkArray.removeAt(i);
        
          return;
        }
        i++;
      });
    }
    
    // console.log(e.target.value);

    

  }
  submitForm() {
    if(this.form.value.checkArray.length==3){
     this.selectedItems=this.form.value.checkArray;
     console.log(this.selectedItems.at(0));
     this.newIntrest.intrest1=this.selectedItems.at(0);     
     this.newIntrest.intrest2=this.selectedItems.at(1);     
     this.newIntrest.intrest3=this.selectedItems.at(2); 
     this.newIntrest.userName=localStorage.getItem('uname');   
     console.log(this.newIntrest.userName+"intrets");
      
     this.ms.saveInterest(this.newIntrest).subscribe(
      data=>{
        console.log(data);
        
        

      },
      error=>{

      }
     )
    }
    else{
      alert("Enter 3 interests");
    }

    console.log(this.form.value);
  }

  
  // checkSize(){
  //   console.log(this.form.value.checkArray.length );
    
  //   if(this.form.value.checkArray.length == 1){
     
  //     this.btn=false;
  //   }
  //   alert("Only one interest");
  //   this.btn=true;

  // }
  
  getSub(){
    this.as.getSubData().subscribe(
      data=>{
        
        //  this.subjects=Object.keys(data).map(e=>data[e]);
         this.subjects=data;
         console.log(data);
         
      },
      error=>{
        console.log(error);
      }
    )
  }

  createGroup(id:number){
    console.log(this.username);
    console.log(this.group.userName);
    
   this.group.userName=this.username;
   this.ts.insertGroup(this.group).subscribe(
    data=>{
        console.log(this.group);
        this.ngOnInit();
        console.log(['trainerGroup/:userName']);
        
        this.router.navigate(['trainerGroup/:userName'])

        
        
    },
    error=>{
      
    }
   )
    

  }

  getInfo(){
    this.getSub();
    this.as.getGradData().subscribe(
      data=>{
        this.grades1=data;
        console.log(data);
       
      },
      error=>{
        console.log(error);
      }
    )
    
  }

}
