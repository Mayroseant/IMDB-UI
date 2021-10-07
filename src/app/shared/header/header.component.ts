import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any;
  userRole: boolean;

  constructor() { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    if(this.user != null){
      if(JSON.parse(this.user).UserRole == 'Admin'){
        this.userRole = true;
      }
      else{
        this.userRole = false;
      }
    }
    else{
      
    }
    console.log(this.userRole);
  }

}
