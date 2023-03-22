import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainserviceService } from 'src/services/mainservice.service';
import { Login } from '../../../model/login';


@Component({
  selector: 'app-trainer-dash',
  templateUrl: './trainer-dash.component.html',
  styleUrls: ['./trainer-dash.component.css']
})
export class TrainerDashComponent  implements OnInit{

  log=new Login();
  username='';
  user:any;
  val='';
  public loggedIn =false;
  constructor(private ms:MainserviceService,private route:ActivatedRoute,private router:Router) {
    let id=this.route.snapshot.paramMap.get('userName');
   }


  ngOnInit(): void {
    this.loggedIn = this.ms.isLoggedIn();
    console.log(this.id);
    
   
  }
    

  logoutUser(){
    this.ms.logout();
    location.href="/login";
    // location.href="/login";
  }
  id=this.route.snapshot.paramMap.get('userName');
}
