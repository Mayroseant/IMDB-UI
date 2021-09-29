import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../services-models/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  SignupForm = new FormGroup({
    UserRole: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Name: new FormControl('', [Validators.required]),
    Pwd: new FormControl('', [Validators.required])
  });

  newuser: any;

  constructor(public service: UserServiceService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.newuser = this.SignupForm.value;
    
    this.service.signupuser(this.newuser)
    .subscribe(data => {
      if(data == true){
      this._router.navigateByUrl('/Login');
    }
    else{
      alert('Email already exists');
    }
  });
}

  get UserRole(){
    return this.SignupForm.get('UserRole');
  }

  get Email(){
    return this.SignupForm.get('Email');
  }

  get Name(){
    return this.SignupForm.get('Name');
  }

  get Pwd(){
    return this.SignupForm.get('Pwd');
  }
}
