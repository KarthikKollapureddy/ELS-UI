import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../../../services/admin-service.service';
import { Grade } from '../../../model/grade';
import { Group } from '../../../model/group.model';
import { MainserviceService } from 'src/services/mainservice.service';
import { TrainerServiceService } from 'src/services/trainer-service.service';
import { Subject } from 'src/model/subject';
// import { MainserviceService } from '../mainservice.service';
// import { TrainerServiceService } from '../trainer-service.service';

@Component({
  selector: 'app-trainer-class',
  templateUrl: './trainer-class.component.html',
  styleUrls: ['./trainer-class.component.css']
})
export class TrainerClassComponent implements OnInit{
  public loggedIn =false;
  groupId:any=this.route.snapshot.paramMap.get('groupId');
  public id:any;
  public class=new Group();
  public subject:any;
  public grade=new Grade();
  public grades:Grade[]=[];
  public subjects:Subject[]=[];
  

  constructor(private route:ActivatedRoute,private ms:MainserviceService,private as:AdminServiceService,private ts:TrainerServiceService,private router:Router){  

  }
  
  ngOnInit(): void {
    this.loggedIn = this.ms.isLoggedIn();

    this.id=this.route.snapshot.paramMap.get('userName');
    // this.groupId=this.route.snapshot.paramMap.get('groupId');

    this.ts.getClassData(this.groupId).subscribe(
      data=>{
        console.log(data);
        // console.log(this.class.subject);
        
        this.class=data
      },error=>{
        console.log(error);
        
      }
    )
    // this.as.getSub(this.class.subject).subscribe(
    //   data=>{
    //     this.subject=data;
    //   }
    // )
    
    // this.ts.getClassData(this.groupId).subscribe(
    //   data=>{
    //       this.class=data;
    //       this.as.getGrade(this.class.groupGrad).subscribe(
    //         data=>{
    //              this.grade=data;
    //              console.log(data);
    //         },
    //         error=>{
    //           console.log(error);
    //         }
    //       )

    //       this.as.getSub(this.class.groupSub).subscribe(
    //         data=>{
    //           this.sub=data;
    //           console.log(data);
    //         },
    //         error=>{
    //           console.log(error)
      
    //         }
    //       )
          
    //   },
    //   error=>{
    //     console.log(error);
    //   }
    // )
    
    console.log(this.class);
    
  
    
   
     

    
      
   
  }

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
  getGrade(){
    this.as.getGradData().subscribe(
      data=>{
        this.grades=data;
        console.log(data);
       
      },
      error=>{
        console.log(error);
      }
    )
  }


  getInfo(){
   this.getSub();
   this.getGrade();
    
  }

  editGroup(groupId:number){
    this.ts.editGroup(this.class,this.groupId).subscribe(
      data=>{
           this.ngOnInit();
      },
      error=>{

      }

    )
  }

  deleteGroup(groupId:number){
    console.log(groupId);
    console.log(this.id);
    
    this.ts.deleteGroup(groupId).subscribe(
      
      data=>{
        console.log(data["message"]);
        
        this.router.navigate(['/trainerGroup',this.id]);
        
        
      },
      error=>{
          console.log(error);

      }
    )

  }

}
