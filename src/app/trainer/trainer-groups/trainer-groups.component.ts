import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Group } from 'src/model/group.model';
import { MainserviceService } from 'src/services/mainservice.service';
import { TrainerServiceService } from 'src/services/trainer-service.service';
import { AdminServiceService } from '../../../services/admin-service.service';
// import { MainserviceService } from '../mainservice.service';
// import { TrainerServiceService } from '../trainer-service.service';

@Component({
  selector: 'app-trainer-groups',
  templateUrl: './trainer-groups.component.html',
  styleUrls: ['./trainer-groups.component.css']
})
export class TrainerGroupsComponent implements OnInit{

  public loggedIn =false;
  public id:any;
  // public groups:any;
  public msg='';
  groups:Group[] = []
  constructor(private route:ActivatedRoute,private ms:MainserviceService,private as:AdminServiceService,private ts:TrainerServiceService){

  }

  ngOnInit(): void {
    
    this.loggedIn = this.ms.isLoggedIn();
    this.id=this.route.snapshot.paramMap.get('userName');

    this.ts.getGroupData(this.id).subscribe(
      data=>{
        this.groups=data;
        console.log(this.groups);
      },
      error=>{
        this.msg="Empty";
      }
    )
  }
}
