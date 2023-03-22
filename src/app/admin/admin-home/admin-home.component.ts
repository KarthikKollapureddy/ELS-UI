import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainserviceService } from 'src/services/mainservice.service';
import { AdminServiceService } from '../../../services/admin-service.service';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{
  public loggedIn =false;
  msg = "";
   public user !:number;
   public student !: number;
   public trainer !: number;
  constructor(private route:ActivatedRoute,private ms:MainserviceService,private adminservice:AdminServiceService){}

  ngOnInit(): void {
    this.loggedIn = this.ms.isLoggedIn();
    this.adminservice.getData().subscribe(
      data=>{
      console.log(data);
      
          
          
      // }
      this.user=data.users;
      this.student=data.student;
      this.trainer=data.trainer;
      
    },
      error=>{
        console.log("Not found");
        this.msg="Empty";
        
      }

      

    )
   
  }
  id=this.route.snapshot.paramMap.get('userName');
}

