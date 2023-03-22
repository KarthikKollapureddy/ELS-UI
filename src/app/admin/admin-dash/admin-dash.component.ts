import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainserviceService } from 'src/services/mainservice.service';
import { Login } from '../../../model/login';


@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  log=new Login();
  username='';
  user:any;
  val='';
  public loggedIn =false;
  constructor(private ms:MainserviceService,private route:ActivatedRoute,private router:Router) { }


  ngOnInit(): void {
    this.loggedIn = this.ms.isLoggedIn();
   
  }
    

  logoutUser(){
    this.ms.logout();
    location.href="/login";
    // location.href="/login";
  }
  id=this.route.snapshot.paramMap.get('userName');
  print(){
    console.log(this.id);
    
  }
}
