import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../services-models/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm = new FormGroup({
    UserRole: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Pwd: new FormControl('', [Validators.required])
  });

  user: any;

  constructor(public service: UserServiceService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.user = this.LoginForm.value;
    
    this.service.loginuser(this.user)
    .subscribe(data => {
      if(data == true){
      this._router.navigateByUrl('/Movies');
    }
    else{
      alert('Wrong credentials');
    }
  });
}

  get UserRole(){
    return this.LoginForm.get('UserRole');
  }

  get Email(){
    return this.LoginForm.get('Email');
  }

  get Pwd(){
    return this.LoginForm.get('Pwd');
  }
}
