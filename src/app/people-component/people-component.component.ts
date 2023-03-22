import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainserviceService } from 'src/services/mainservice.service';


@Component({
  selector: 'app-people-component',
  templateUrl: './people-component.component.html',
  styleUrls: ['./people-component.component.css']
})
export class PeopleComponentComponent implements OnInit {

  public loggedIn:any;
  public groupId:any;
  public id:any;
  constructor(private ms:MainserviceService,private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.loggedIn = this.ms.isLoggedIn();
    this.id=this.route.snapshot.paramMap.get('userId');
    this.groupId=this.route.snapshot.paramMap.get('groupId');

    
  }

}
